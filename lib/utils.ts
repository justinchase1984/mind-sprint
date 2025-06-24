// lib/utils.ts

import type { Puzzle } from './puzzles'
import {
  triviaPool,
  scramblePool,
  logicPool,
  rebusPool,
  memoryPool,
  crosswordPool,
  mixPool,
} from './puzzles'

const themes: Puzzle[][] = [
  triviaPool,     // Day 1
  scramblePool,   // Day 2
  logicPool,      // Day 3
  rebusPool,      // Day 4
  memoryPool,     // Day 5
  crosswordPool,  // Day 6
  mixPool,        // Day 7
]

/**
 * Get today’s (or tomorrow’s if date passed) 10 puzzles.
 */
export function getDailyPuzzles(forDate?: Date): Puzzle[] {
  const d = forDate ?? new Date()
  const idx = ((d.getDay() + 6) % 7)          // Mon→0 … Sun→6
  const pool = themes[idx]
  return pool.length > 10
    ? pool.sort(() => Math.random() - 0.5).slice(0, 10)
    : pool
}

/**
 * Get Day-N puzzles directly (1-based index).
 */
export function getPuzzlesByDayIndex(dayIndex: number): Puzzle[] {
  // normalize dayIndex into 1…7
  const idx = ((dayIndex - 1) % themes.length + themes.length) % themes.length
  const pool = themes[idx]
  return pool.length > 10
    ? pool.sort(() => Math.random() - 0.5).slice(0, 10)
    : pool
}
