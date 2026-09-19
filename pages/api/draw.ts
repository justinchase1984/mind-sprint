import type { NextApiRequest, NextApiResponse } from 'next'
import { randomInt, timingSafeEqual } from 'crypto'

type PrizeEntry = {
  email: string
  challenge: number
}

type WinnerRecord = {
  weekKey: string
  email: string
  challenge: number
  drawnAt: string
  totalEntries: number
  uniquePlayers: number
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

/*
  Mind Sprint competition weeks:
  Monday to Sunday in Brisbane/AEST.
*/
function getWeekKey(
  weeksBack: number = 0
): string {
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
        daysSinceMonday -
        weeksBack * 7
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

function getEntriesKey(
  weekKey: string
) {
  return `mind-sprint:weekly-draw:${weekKey}:entries`
}

function getWinnerKey(
  weekKey: string
) {
  return `mind-sprint:weekly-draw:${weekKey}:winner`
}

/*
  Safely compare the password entered
  on the admin page with the secret
  stored in Vercel.
*/
function isAuthorized(
  suppliedSecret: unknown
): boolean {
  const storedSecret =
    process.env.DRAW_ADMIN_SECRET

  if (
    !storedSecret ||
    typeof suppliedSecret !== 'string'
  ) {
    return false
  }

  const suppliedBuffer =
    Buffer.from(suppliedSecret)

  const storedBuffer =
    Buffer.from(storedSecret)

  if (
    suppliedBuffer.length !==
    storedBuffer.length
  ) {
    return false
  }

  return timingSafeEqual(
    suppliedBuffer,
    storedBuffer
  )
}

function parseEntries(
  members: unknown
): PrizeEntry[] {
  if (!Array.isArray(members)) {
    return []
  }

  const entries: PrizeEntry[] = []

  for (const member of members) {
    if (typeof member !== 'string') {
      continue
    }

    try {
      const parsed =
        JSON.parse(member)

      const email =
        typeof parsed?.email === 'string'
          ? parsed.email
              .trim()
              .toLowerCase()
          : ''

      const challenge =
        Number(parsed?.challenge)

      if (
        email &&
        Number.isInteger(challenge) &&
        challenge >= 1 &&
        challenge <= 7
      ) {
        entries.push({
          email,
          challenge,
        })
      }
    } catch {
      // Ignore malformed old entries.
    }
  }

  return entries
}

async function getWinner(
  weekKey: string
): Promise<WinnerRecord | null> {
  const winnerValue =
    await redisCommand<string | null>([
      'GET',
      getWinnerKey(weekKey),
    ])

  if (!winnerValue) {
    return null
  }

  try {
    return JSON.parse(
      winnerValue
    ) as WinnerRecord
  } catch {
    return null
  }
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
    /*
      Protect everything in this API
      with your private admin password.
    */
    if (
      !process.env.DRAW_ADMIN_SECRET
    ) {
      return res.status(500).json({
        success: false,
        error:
          'Draw admin secret is not configured',
      })
    }

    if (
      !isAuthorized(
        req.body?.secret
      )
    ) {
      return res.status(401).json({
        success: false,
        error:
          'Incorrect admin password',
      })
    }

    const action =
      req.body?.action

    if (
      action !== 'status' &&
      action !== 'draw'
    ) {
      return res.status(400).json({
        success: false,
        error: 'Invalid action',
      })
    }

    /*
      Current week is still active.

      Draw week is the PREVIOUS completed
      Monday-Sunday competition week.
    */
    const currentWeekKey =
      getWeekKey(0)

    const drawWeekKey =
      getWeekKey(1)

    const [
      currentEntryMembers,
      drawEntryMembers,
      existingWinner,
    ] = await Promise.all([
      redisCommand<string[]>([
        'SMEMBERS',
        getEntriesKey(
          currentWeekKey
        ),
      ]),

      redisCommand<string[]>([
        'SMEMBERS',
        getEntriesKey(
          drawWeekKey
        ),
      ]),

      getWinner(drawWeekKey),
    ])

    const currentEntries =
      parseEntries(
        currentEntryMembers
      )

    const drawEntries =
      parseEntries(
        drawEntryMembers
      )

    const uniquePlayers =
      new Set(
        drawEntries.map(
          (entry) => entry.email
        )
      ).size

    /*
      STATUS:
      Used by the future admin page
      to show you what is waiting.
    */
    if (action === 'status') {
      return res.status(200).json({
        success: true,

        currentWeek: {
          weekKey:
            currentWeekKey,
          entries:
            currentEntries.length,
          uniquePlayers:
            new Set(
              currentEntries.map(
                (entry) =>
                  entry.email
              )
            ).size,
        },

        drawWeek: {
          weekKey:
            drawWeekKey,
          entries:
            drawEntries.length,
          uniquePlayers,
          winner:
            existingWinner,
        },
      })
    }

    /*
      If last week's winner has already
      been drawn, NEVER redraw it.
    */
    if (existingWinner) {
      return res.status(200).json({
        success: true,
        alreadyDrawn: true,
        winner:
          existingWinner,
      })
    }

    if (
      drawEntries.length === 0
    ) {
      return res.status(400).json({
        success: false,
        error:
          'There are no entries for the completed week',
      })
    }

    /*
      Every challenge completion is stored
      as one entry.

      Therefore someone with 7 entries has
      seven chances in this random selection.
    */
    const winningIndex =
      randomInt(
        drawEntries.length
      )

    const winningEntry =
      drawEntries[
        winningIndex
      ]

    const winner: WinnerRecord = {
      weekKey:
        drawWeekKey,

      email:
        winningEntry.email,

      challenge:
        winningEntry.challenge,

      drawnAt:
        new Date().toISOString(),

      totalEntries:
        drawEntries.length,

      uniquePlayers,
    }

    /*
      NX means Redis will ONLY save this
      winner if a winner does not already
      exist.

      This prevents accidental redraws,
      even if the button is clicked twice.
    */
    const saved =
      await redisCommand<string | null>([
        'SET',
        getWinnerKey(
          drawWeekKey
        ),
        JSON.stringify(
          winner
        ),
        'NX',
      ])

    /*
      Another draw request may have beaten
      this one by a fraction of a second.

      If so, return the winner that was
      already permanently saved.
    */
    if (!saved) {
      const savedWinner =
        await getWinner(
          drawWeekKey
        )

      if (savedWinner) {
        return res.status(200).json({
          success: true,
          alreadyDrawn: true,
          winner:
            savedWinner,
        })
      }

      return res.status(409).json({
        success: false,
        error:
          'Unable to save draw result',
      })
    }

    return res.status(200).json({
      success: true,
      alreadyDrawn: false,
      winner,
    })
  } catch (error) {
    console.error(
      'Mind Sprint draw error:',
      error
    )

    return res.status(500).json({
      success: false,
      error:
        'Unable to process weekly draw',
    })
  }
}
