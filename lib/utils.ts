// lib/utils.ts

import {
  Puzzle,
  triviaPool,
  scramblePool,
  logicPool,
  rebusPool,
  memoryPool,
  crosswordPool,
  mixPool,
} from './puzzles'

// Combine all pools into one big pool for Quick Play
const fullPool: Puzzle[] = [
  ...triviaPool,
  ...scramblePool,
  ...logicPool,
  ...rebusPool,
  ...memoryPool,
  ...crosswordPool,
  ...mixPool,
]

// Fisher–Yates shuffle (generic)
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Quick Play: 10 random puzzles per browser session
export function getSessionPuzzles(count = 10): Puzzle[] {
  const key = 'sessionPuzzles'
  const stored = sessionStorage.getItem(key)
  if (stored) {
    try { return JSON.parse(stored) as Puzzle[] }
    catch { /* ignore parse errors */ }
  }
  const selected = shuffle(fullPool).slice(0, count)
  sessionStorage.setItem(key, JSON.stringify(selected))
  return selected
}

// Daily Challenge: pick 10 puzzles from today's theme
const themes: Puzzle[][] = [
  triviaPool,
  scramblePool,
  logicPool,
  rebusPool,
  memoryPool,
  crosswordPool,
  mixPool,
]

export function getDailyPuzzles(): Puzzle[] {
  const weekday = new Date().getDay()        // 0=Sun,1=Mon…6=Sat
  const idx     = (weekday + 6) % 7          // shift Mon→0 … Sun→6
  const pool    = themes[idx]
  return pool.length > 10
    ? shuffle(pool).slice(0, 10)
    : pool
}
