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
 * Returns today’s 10 puzzles based on weekday:
 * Monday→Day1, … Sunday→Day7
 */
export function getDailyPuzzles(): Puzzle[] {
  const weekday = new Date().getDay()       // 0=Sun…6=Sat
  const idx     = (weekday + 6) % 7         // shift Mon→0…Sun→6
  const pool    = themes[idx]
  // shuffle if more than 10, then take 10
  return pool.length > 10
    ? pool.sort(() => Math.random() - 0.5).slice(0, 10)
    : pool
}
