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
  triviaPool,
  scramblePool,
  logicPool,
  rebusPool,
  memoryPool,
  crosswordPool,
  mixPool,
]

/**
 * Returns 10 puzzles for the given date,
 * or today if no date passed in.
 */
export function getDailyPuzzles(forDate?: Date): Puzzle[] {
  const d = forDate ?? new Date()
  const weekday = d.getDay()           // 0=Sun…6=Sat
  const idx     = (weekday + 6) % 7     // Mon→0…Sun→6
  const pool    = themes[idx]
  return pool.length > 10
    ? pool.sort(() => Math.random() - 0.5).slice(0, 10)
    : pool
}
