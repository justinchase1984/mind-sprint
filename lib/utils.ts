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

const themes = [
  triviaPool,
  scramblePool,
  logicPool,
  rebusPool,
  memoryPool,
  crosswordPool,
  mixPool,
]

/**
 * Returns 10 puzzles for today’s Daily Challenge (rotates Monday→Day 1, … Sunday→Day 7)
 */
export function getDailyPuzzles(): Puzzle[] {
  const dayIndex = (new Date().getDay() + 6) % 7  // Monday=0…Sunday=6
  const pool = themes[dayIndex]
  // If pool >10, shuffle and take first 10
  if (pool.length > 10) {
    return pool
      .sort(() => Math.random() - 0.5)
      .slice(0, 10)
  }
  return pool
}
