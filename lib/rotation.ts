// lib/rotation.ts
import type { Puzzle } from './puzzles';
import { getPuzzlesByDayIndex } from './utils';

/**
 * Optional: define extra full sets per challenge if/when you have them.
 * - Each entry in the inner array is a complete 10-question set for that challenge.
 * - If you don’t add any sets, we’ll fall back to a deterministic weekly rotation
 *   of your existing baseline questions (order shifts every 7 days).
 */
const EXTRA_SETS: Record<number, Puzzle[][]> = {
  // Example structure (leave empty for now):
  // 1: [
  //   [ /* 10 puzzles for Challenge 1 - Set A */ ],
  //   [ /* 10 puzzles for Challenge 1 - Set B */ ]
  // ],
  // 2: [ /* ... */ ],
  // ...
};

/** Return UTC midnight for a given date (avoids timezone drift). */
function toUtcMidnight(date: Date): number {
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
// Anchor on a Monday (any fixed Monday works; keep it constant for stable rotation):
const EPOCH_UTC_MS = Date.UTC(2025, 0, 6); // 2025-01-06 (Mon) in UTC

/** Positive modulo. */
function posMod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

/**
 * Returns the puzzles for a challenge, rotated weekly.
 * Priority:
 * 1) If you’ve added EXTRA_SETS[challengeIndex], pick one by week index.
 * 2) Otherwise, take your baseline puzzles and rotate their ORDER weekly (no content change).
 */
export function getRotatingPuzzlesByChallenge(
  challengeIndex: number,
  today: Date = new Date()
): Puzzle[] {
  // If you’ve defined explicit rotating sets for this challenge, use them:
  const sets = EXTRA_SETS[challengeIndex];
  if (Array.isArray(sets) && sets.length > 0) {
    const weeksSinceEpoch = Math.floor((toUtcMidnight(today) - EPOCH_UTC_MS) / WEEK_MS);
    const pick = posMod(weeksSinceEpoch, sets.length);
    const chosen = sets[pick];
    if (Array.isArray(chosen) && chosen.length > 0) return chosen;
  }

  // Fallback: use your existing baseline, but shift the order deterministically by week
  const baseline = getPuzzlesByDayIndex(challengeIndex) || [];
  if (baseline.length === 0) return baseline;

  const weeksSinceEpoch = Math.floor((toUtcMidnight(today) - EPOCH_UTC_MS) / WEEK_MS);
  const shiftBy = posMod(weeksSinceEpoch, baseline.length);

  // Rotate order (non-mutating): ABCDE -> (shift 2) -> CDEAB
  return [...baseline.slice(shiftBy), ...baseline.slice(0, shiftBy)];
}
