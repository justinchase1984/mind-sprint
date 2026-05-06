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

OPTION:
If you want 10 puzzles total (current UI), we cycle again
*/

export function getDailyPuzzles(date: Date = new Date()): Puzzle[] {
  const TOTAL_CHALLENGES = 7

  const puzzles: Puzzle[] = []

  // Get rotation index (same logic as rotation.ts)
  const start = new Date(Date.UTC(2025, 0, 1))
  const today = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()))
  const dayIndex = Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))

  // This controls WHICH puzzle we take from each set
  const puzzleIndex = dayIndex % 10

  for (let i = 1; i <= TOTAL_CHALLENGES; i++) {
    const challengePuzzles = getRotatingPuzzlesByChallenge(i, date)

    if (!challengePuzzles.length) continue

    puzzles.push(challengePuzzles[puzzleIndex])
  }

  /*
  Your UI expects 10 puzzles.
  We currently have 7 (1 per challenge).

  So we loop again from start to reach 10.
  */

  let i = 0
  while (puzzles.length < 10) {
    puzzles.push(puzzles[i % puzzles.length])
    i++
  }

  return puzzles
}
