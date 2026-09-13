import type { NextApiRequest, NextApiResponse } from 'next'

const MAX_CHALLENGE = 7

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
    throw new Error(data.error || 'Redis request failed')
  }

  return data.result
}

/*
  Mind Sprint weeks run Monday-Sunday using
  Australian Eastern Standard Time (AEST / Brisbane).
*/
function getWeekKey(): string {
  const AEST_OFFSET_MS = 10 * 60 * 60 * 1000

  const nowAest = new Date(
    Date.now() + AEST_OFFSET_MS
  )

  const day = nowAest.getUTCDay()

  const daysSinceMonday =
    (day + 6) % 7

  const monday = new Date(
    Date.UTC(
      nowAest.getUTCFullYear(),
      nowAest.getUTCMonth(),
      nowAest.getUTCDate() - daysSinceMonday
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

    const challenge =
      Number(req.body?.challenge)

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
      !Number.isInteger(challenge) ||
      challenge < 1 ||
      challenge > MAX_CHALLENGE
    ) {
      return res.status(400).json({
        success: false,
        error:
          'Invalid challenge number',
      })
    }

    const weekKey =
      getWeekKey()

    const weeklyEntriesKey =
      `mind-sprint:weekly-draw:${weekKey}:entries`

    const playerEntriesKey =
      `mind-sprint:weekly-draw:${weekKey}:player:${encodeURIComponent(
        email
      )}`

    /*
      This represents ONE prize entry.

      The same email + challenge combination
      can only exist once in the weekly set.
    */
    const entryMember =
      JSON.stringify({
        email,
        challenge,
      })

    /*
      SADD returns:
      1 = new entry was added
      0 = it already existed
    */
    const added =
      Number(
        await redisCommand<number>([
          'SADD',
          weeklyEntriesKey,
          entryMember,
        ])
      )

    /*
      Keep a second set for this individual
      player so we can easily show how many
      entries they have this week.
    */
    await redisCommand([
      'SADD',
      playerEntriesKey,
      String(challenge),
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

      // true = they just earned a new entry
      // false = they had already completed it
      awarded: added === 1,

      challenge,

      entriesThisWeek,
    })
  } catch (error: any) {
    console.error(
      'Mind Sprint entry error:',
      error
    )

    return res.status(500).json({
      success: false,
      error:
        'Unable to record prize entry',
    })
  }
}
