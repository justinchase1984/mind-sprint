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

// 7‐day rotation
const themes: Puzzle[][] = [
  triviaPool,
  scramblePool,
  logicPool,
  rebusPool,
  memoryPool,
  crosswordPool,
  mixPool,
]

/**
 * Get today’s (or tomorrow’s if you pass a date) 10 puzzles.
 */
export function getDailyPuzzles(forDate?: Date): Puzzle[] {
  const d = forDate ?? new Date()
  const idx = (d.getDay() + 6) % 7    // Monday→0 … Sunday→6
  const pool = themes[idx]
  return pool.length > 10
    ? pool.sort(() => Math.random() - 0.5).slice(0, 10)
    : pool
}

/**
 * Get Day-N puzzles directly (1=Day1, … ,7=Day7).
 */
export function getPuzzlesByDayIndex(dayIndex: number): Puzzle[] {
  const idx = ((dayIndex - 1) % themes.length + themes.length) % themes.length
  const pool = themes[idx]
  return pool.length > 10
    ? pool.sort(() => Math.random() - 0.5).slice(0, 10)
    : pool
}
