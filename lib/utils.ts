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

// Your 7 theme pools in order:
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
 * Returns today’s (or tomorrow’s if forDate passed) 10 puzzles.
 */
export function getDailyPuzzles(forDate?: Date): Puzzle[] {
  const d = forDate ?? new Date()
  const weekday = d.getDay()           // 0=Sun…6=Sat
  const idx     = (weekday + 6) % 7    // shift Mon→0…Sun→6
  const pool    = themes[idx]
  return pool.length > 10
    ? pool.sort(() => Math.random() - 0.5).slice(0, 10)
    : pool
}

/**
 * Returns the 10 puzzles for Day-N (1=trivia, 2=scramble…7=mix).
 */
export function getPuzzlesByDayIndex(dayIndex: number): Puzzle[] {
  // normalize into 1…7
  const idx = ((dayIndex - 1) % themes.length + themes.length) % themes.length
  const pool = themes[idx]
  return pool.length > 10
    ? pool.sort(() => Math.random() - 0.5).slice(0, 10)
    : pool
}
