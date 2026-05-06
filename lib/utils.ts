// lib/utils.ts

import type { Puzzle } from './puzzles'
import { getRotatingPuzzlesByChallenge } from './rotation'

/*
Daily Puzzle System
------------------
• There are 7 challenges
• Each challenge returns 10 puzzles (Set A or B via rotation)
• We take ONE puzzle from each challenge (position-based)
• Result = 7 puzzles per day

• UI expects 10 → we pad remaining slots
*/

export function getDailyPuzzles(date: Date = new Date()): Puzzle[] {
  const TOTAL_CHALLENGES = 7
  const puzzles: Puzzle[] = []

  // Anchor date (same as rotation.ts)
  const start = new Date(Date.UTC(2025, 0, 1))
  const today = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
  )

  const dayIndex = Math.floor(
    (today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  )

  // Ensures index stays within 0–9 safely
  const puzzleIndex = ((dayIndex % 10) + 10) % 10

  // Pull 1 puzzle from each challenge
  for (let i = 1; i <= TOTAL_CHALLENGES; i++) {
    const challengePuzzles = getRotatingPuzzlesByChallenge(i, date)

    if (!challengePuzzles || challengePuzzles.length === 0) continue

    const safeIndex = puzzleIndex % challengePuzzles.length
    puzzles.push(challengePuzzles[safeIndex])
  }

  /*
  UI expects 10 puzzles
  If we have less (e.g. 7), repeat from start
  */

  let i = 0
  while (puzzles.length > 0 && puzzles.length < 10) {
    puzzles.push(puzzles[i % puzzles.length])
    i++
  }

  return puzzles
}
