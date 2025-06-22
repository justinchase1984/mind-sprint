// lib/utils.ts
import { fullPool, Puzzle } from './puzzles';

// Fisher–Yates shuffle
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Quick-play: random N puzzles per session
export function getSessionPuzzles(count = 10): Puzzle[] {
  const key = 'sessionPuzzles';
  const stored = sessionStorage.getItem(key);
  if (stored) return JSON.parse(stored);
  const selected = shuffle(fullPool).slice(0, count);
  sessionStorage.setItem(key, JSON.stringify(selected));
  return selected;
}

// Daily-challenge: same N puzzles for everyone today
export function getDailyPuzzles(count = 10): Puzzle[] {
  const today = new Date().toISOString().slice(0, 10); // “2025-06-22”
  const seed = today
    .split('')
    .reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 0);
  const start = seed % (fullPool.length - count);
  return fullPool.slice(start, start + count);
}
// lib/utils.ts (at the bottom)

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
 * Returns 10 puzzles for “Daily Challenge” based on the current weekday.
 */
export function getDailyPuzzles(): Puzzle[] {
  const weekday = new Date().getDay()          // 0 = Sunday, 1 = Monday, … 6 = Saturday
  // Shift so Monday → index 0, … Sunday → index 6
  const idx = (weekday + 6) % 7
  const pool = themes[idx]
  // If pool is larger than 10, shuffle and take first 10
  return pool.length > 10
    ? shuffle(pool).slice(0, 10)
    : pool
}
