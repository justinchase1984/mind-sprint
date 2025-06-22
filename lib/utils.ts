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

// 1) Combine all theme pools into one full pool for Quick Play
const fullPool: Puzzle[] = [
  ...triviaPool,
  ...scramblePool,
  ...logicPool,
  ...rebusPool,
  ...memoryPool,
  ...crosswordPool,
  ...mixPool,
]

// 2) Fisher–Yates shuffle helper
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// 3) Quick Play: pick or retrieve 10 random puzzles for this browser session
export function getSessionPuzzles(count = 10): Puzzle[] {
  const key = 'sessionPuzzles'
  const stored = sessionStorage.getItem(key)
  if (stored) {
    try { return JSON.parse(stored) as Puzzle[] }
    catch { /* if parse fails, fall through */ }
  }
  const selected = shuffle(fullPool).slice(0, count)
  sessionStorage.setItem(key, JSON.stringify(selected))
  return selected
}

// 4) Daily Challenge: pick 10 puzzles from today's theme pool
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
