import type { NextApiRequest, NextApiResponse } from 'next'
import { randomUUID } from 'crypto'
import { getRotatingPuzzlesByChallenge } from '../../lib/rotation'
import {
  MIN_ANSWER_GAP_MS,
  allowCompletionForIp,
  getClientIp,
} from '../../lib/abuse'

const MAX_CHALLENGE = 9
const ATTEMPT_TTL_SECONDS = 24 * 60 * 60

type AttemptState = {
  challenge: number
  startedAt: string
  nextQuestion: number
  totalQuestions: number
  completed: boolean
  // Server timing markers (added for prize-entry abuse checks).
  // Optional so attempts created before this change still load.
  lastAnswerAt?: string
  fastAnswerGaps?: number
  completedAt?: string
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
    throw new Error(data.error || 'Redis request failed')
  }

  return data.result
}

function getAttemptKey(attemptId: string) {
  return `mind-sprint:attempt:${attemptId}`
}

async function saveAttempt(
  attemptId: string,
  state: AttemptState
) {
  await redisCommand([
    'SET',
    getAttemptKey(attemptId),
    JSON.stringify(state),
    'EX',
    ATTEMPT_TTL_SECONDS,
  ])
}

async function loadAttempt(
  attemptId: string
): Promise<AttemptState | null> {
  const value = await redisCommand<string | null>([
    'GET',
    getAttemptKey(attemptId),
  ])

  if (!value) {
    return null
  }

  return JSON.parse(value)
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
    const action = req.body?.action

    /*
      START A NEW CHALLENGE ATTEMPT
    */
    if (action === 'start') {
      const challenge = Number(
        req.body?.challenge
      )

      if (
        !Number.isInteger(challenge) ||
        challenge < 1 ||
        challenge > MAX_CHALLENGE
      ) {
        return res.status(400).json({
          success: false,
          error: 'Invalid challenge number',
        })
      }

      const startedAt = new Date()

      const puzzles =
        getRotatingPuzzlesByChallenge(
          challenge,
          startedAt
        )

      if (!puzzles.length) {
        return res.status(400).json({
          success: false,
          error: 'Challenge not found',
        })
      }

      const attemptId =
        randomUUID()

      const state: AttemptState = {
        challenge,
        startedAt:
          startedAt.toISOString(),
        nextQuestion: 1,
        totalQuestions:
          puzzles.length,
        completed: false,
      }

      await saveAttempt(
        attemptId,
        state
      )

      return res.status(200).json({
        success: true,
        attemptId,
        totalQuestions:
          puzzles.length,
      })
    }

    /*
      RECORD ONE ANSWER
    */
    if (action === 'answer') {
      const attemptId =
        typeof req.body?.attemptId ===
        'string'
          ? req.body.attemptId.trim()
          : ''

      const question =
        Number(req.body?.question)

      const answer =
        typeof req.body?.answer ===
        'string'
          ? req.body.answer
          : ''

      if (!attemptId) {
        return res.status(400).json({
          success: false,
          error: 'Attempt ID is required',
        })
      }

      const state =
        await loadAttempt(
          attemptId
        )

      if (!state) {
        return res.status(404).json({
          success: false,
          error:
            'Challenge attempt has expired or does not exist',
        })
      }

      if (state.completed) {
        return res.status(200).json({
          success: true,
          completed: true,
        })
      }

      /*
        Questions must be answered
        in the correct order.
      */
      if (
        question !==
        state.nextQuestion
      ) {
        return res.status(409).json({
          success: false,
          error:
            'Question answered out of order',
        })
      }

      /*
        Use the exact puzzle rotation
        from when this attempt started.
      */
      const puzzles =
        getRotatingPuzzlesByChallenge(
          state.challenge,
          new Date(
            state.startedAt
          )
        )

      const puzzle =
        puzzles[question - 1]

      if (!puzzle) {
        return res.status(400).json({
          success: false,
          error: 'Question not found',
        })
      }

      /*
        Answer must actually be one
        of the options shown for this
        question.
      */
      if (
        !puzzle.options.includes(
          answer
        )
      ) {
        return res.status(400).json({
          success: false,
          error: 'Invalid answer',
        })
      }

      const isLastQuestion =
        question ===
        state.totalQuestions

      /*
        Generous per-IP cap on completed
        challenges. Fails open if Redis
        has a problem. When the cap is hit
        the attempt simply isn't marked
        complete, so no prize entry can be
        claimed; the game itself carries on.
      */
      if (isLastQuestion) {
        const allowed =
          await allowCompletionForIp(
            redisCommand,
            getClientIp(req)
          )

        if (!allowed) {
          return res.status(429).json({
            success: false,
            error:
              'Too many challenges completed from this network. Please try again later.',
          })
        }
      }

      /*
        Record server-side answer timing.
        A real player can't answer faster
        than the 1.5s auto-advance allows.
      */
      const nowMs = Date.now()

      if (state.lastAnswerAt) {
        const gap =
          nowMs -
          new Date(
            state.lastAnswerAt
          ).getTime()

        if (gap < MIN_ANSWER_GAP_MS) {
          state.fastAnswerGaps =
            (state.fastAnswerGaps || 0) + 1
        }
      }

      state.lastAnswerAt =
        new Date(nowMs).toISOString()

      state.nextQuestion =
        question + 1

      state.completed =
        isLastQuestion

      if (isLastQuestion) {
        state.completedAt =
          new Date(nowMs).toISOString()
      }

      await saveAttempt(
        attemptId,
        state
      )

      return res.status(200).json({
        success: true,
        completed:
          state.completed,
        nextQuestion:
          state.nextQuestion,
      })
    }

    return res.status(400).json({
      success: false,
      error: 'Invalid action',
    })
  } catch (error) {
    console.error(
      'Mind Sprint attempt error:',
      error
    )

    return res.status(500).json({
      success: false,
      error:
        'Unable to process challenge attempt',
    })
  }
}
