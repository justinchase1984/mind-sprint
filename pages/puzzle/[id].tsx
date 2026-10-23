import type { NextApiRequest, NextApiResponse } from 'next'

const MAX_CHALLENGE = 9
const TEST_CLAIM_TTL_SECONDS = 2 * 24 * 60 * 60
const TEST_DATA_TTL_SECONDS = 7 * 24 * 60 * 60

type AttemptState = {
  challenge: number
  startedAt: string
  nextQuestion: number
  totalQuestions: number
  completed: boolean
}

async function redisCommand<T = any>(
  command: Array<string | number>
): Promise<T> {
  const redisUrl = process.env.KV_REST_API_URL
  const redisToken = process.env.KV_REST_API_TOKEN

  if (!redisUrl || !redisToken) {
    throw new Error('Redis environment variables are missing')
  }

  const response = await fetch(redisUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${redisToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(command),
  })

  const data = await response.json()

  if (!response.ok || data.error) {
    throw new Error(
      data.error || 'Redis request failed'
    )
  }

  return data.result
}

function getWeekKey(): string {
  const AEST_OFFSET_MS =
    10 * 60 * 60 * 1000

  const nowAest = new Date(
    Date.now() + AEST_OFFSET_MS
  )

  const day =
    nowAest.getUTCDay()

  const daysSinceMonday =
    (day + 6) % 7

  const monday = new Date(
    Date.UTC(
      nowAest.getUTCFullYear(),
      nowAest.getUTCMonth(),
      nowAest.getUTCDate() -
        daysSinceMonday
    )
  )

  const year =
    monday.getUTCFullYear()

  const month =
    String(
      monday.getUTCMonth() + 1
    ).padStart(2, '0')

  const date =
    String(
      monday.getUTCDate()
    ).padStart(2, '0')

  return `${year}-${month}-${date}`
}

function getAttemptKey(
  attemptId: string
) {
  return `mind-sprint:attempt:${attemptId}`
}

function getTestClaimKey(
  attemptId: string
) {
  return `mind-sprint:test-attempt:${attemptId}:claimed`
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
    })
  }

  try {
    const email =
      typeof req.body?.email === 'string'
        ? req.body.email
            .trim()
            .toLowerCase()
        : ''

    const attemptId =
      typeof req.body?.attemptId === 'string'
        ? req.body.attemptId.trim()
        : ''

    const emailLooksValid =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email
      )

    if (
      !email ||
      !emailLooksValid ||
      email.length > 254
    ) {
      return res.status(400).json({
        success: false,
        error:
          'A valid email address is required',
      })
    }

    if (
      !attemptId ||
      attemptId.length > 100
    ) {
      return res.status(400).json({
        success: false,
        error:
          'A valid challenge attempt is required',
      })
    }

    /*
      Load the REAL challenge attempt.

      This lets test mode verify the same
      completed challenge that the live
      prize system would verify.
    */
    const attemptValue =
      await redisCommand<string | null>([
        'GET',
        getAttemptKey(attemptId),
      ])

    if (!attemptValue) {
      return res.status(404).json({
        success: false,
        error:
          'Challenge attempt has expired or does not exist',
      })
    }

    let attempt: AttemptState

    try {
      attempt =
        JSON.parse(attemptValue)
    } catch {
      return res.status(500).json({
        success: false,
        error:
          'Challenge attempt could not be verified',
      })
    }

    if (!attempt.completed) {
      return res.status(403).json({
        success: false,
        error:
          'Challenge has not been completed',
      })
    }

    const challenge =
      Number(attempt.challenge)

    if (
      !Number.isInteger(challenge) ||
      challenge < 1 ||
      challenge > MAX_CHALLENGE
    ) {
      return res.status(400).json({
        success: false,
        error:
          'Invalid completed challenge',
      })
    }

    /*
      TEST claim protection.

      This uses a completely separate key
      from the real prize-draw claim key.
    */
    const claimKey =
      getTestClaimKey(attemptId)

    const claimResult =
      await redisCommand<string | null>([
        'SET',
        claimKey,
        email,
        'NX',
        'EX',
        TEST_CLAIM_TTL_SECONDS,
      ])

    if (!claimResult) {
      const existingClaim =
        await redisCommand<string | null>([
          'GET',
          claimKey,
        ])

      if (
        existingClaim &&
        existingClaim !== email
      ) {
        return res.status(409).json({
          success: false,
          error:
            'This test challenge completion has already been claimed',
        })
      }
    }

    const weekKey =
      getWeekKey()

    /*
      IMPORTANT:
      These are TEST keys only.

      They cannot appear in the real
      weekly prize draw.
    */
    const weeklyEntriesKey =
      `mind-sprint:test-weekly-draw:${weekKey}:entries`

    const playerEntriesKey =
      `mind-sprint:test-weekly-draw:${weekKey}:player:${encodeURIComponent(
        email
      )}`

    const entryMember =
      JSON.stringify({
        email,
        challenge,
      })

    const added =
      Number(
        await redisCommand<number>([
          'SADD',
          weeklyEntriesKey,
          entryMember,
        ])
      )

    await redisCommand([
      'EXPIRE',
      weeklyEntriesKey,
      TEST_DATA_TTL_SECONDS,
    ])

    await redisCommand([
      'SADD',
      playerEntriesKey,
      String(challenge),
    ])

    await redisCommand([
      'EXPIRE',
      playerEntriesKey,
      TEST_DATA_TTL_SECONDS,
    ])

    const entriesThisWeek =
      Number(
        await redisCommand<number>([
          'SCARD',
          playerEntriesKey,
        ])
      )

    return res.status(200).json({
      success: true,
      testMode: true,
      awarded: added === 1,
      challenge,
      entriesThisWeek,
    })
  } catch (error) {
    console.error(
      'Mind Sprint test entry error:',
      error
    )

    return res.status(500).json({
      success: false,
      error:
        'Unable to record test prize entry',
    })
  }
}
