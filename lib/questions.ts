// lib/questions.ts
//
// SERVER-ONLY helpers. Import this only from API routes or from
// getServerSideProps, never from page components, so the question
// bank and correct answers are never bundled into browser JavaScript.

import { getRotatingPuzzlesByChallenge } from './rotation'
import { getFactFor } from './facts'

export const TOTAL_CHALLENGES = 9

export type PublicPuzzle = {
  question: string
  options: string[]
}

export type PublicChallengeSets = Record<number, PublicPuzzle[]>

export type Grading = {
  correct: boolean
  correctAnswer: string
  fact: string | null
}

// Questions + options (no answers) for every challenge for the
// Brisbane / AEST day of `date`.
export function getPublicChallengeSets(
  date: Date = new Date()
): PublicChallengeSets {
  const sets: PublicChallengeSets = {}

  for (let c = 1; c <= TOTAL_CHALLENGES; c++) {
    sets[c] = getRotatingPuzzlesByChallenge(c, date).map((p) => ({
      question: p.question,
      options: [...p.options],
    }))
  }

  return sets
}

// Grade one answer. Returns null if the challenge/question does not
// exist or the answer is not one of the options shown.
export function gradeAnswer(
  challenge: number,
  questionNumber: number,
  answer: string,
  date: Date
): Grading | null {
  if (
    !Number.isInteger(challenge) ||
    challenge < 1 ||
    challenge > TOTAL_CHALLENGES ||
    !Number.isInteger(questionNumber)
  ) {
    return null
  }

  const puzzle =
    getRotatingPuzzlesByChallenge(challenge, date)[questionNumber - 1]

  if (!puzzle || !puzzle.options.includes(answer)) {
    return null
  }

  return {
    correct: answer === puzzle.answer,
    correctAnswer: puzzle.answer,
    fact: getFactFor(challenge, questionNumber, date) || null,
  }
}

// The page tells the API when its questions were served so answers are
// graded against exactly what the player saw (matters around midnight).
// Only accept times from the last 36 hours, never the future, so this
// can't be used to peek at upcoming days.
export function parseServedAt(value: unknown): Date | null {
  const ms = Number(value)

  if (!Number.isFinite(ms)) return null

  const now = Date.now()

  if (ms > now + 60 * 1000 || ms < now - 36 * 60 * 60 * 1000) {
    return null
  }

  return new Date(ms)
}
