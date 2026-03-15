import type { Puzzle } from './puzzles'
import { getRotatingPuzzlesByChallenge } from './rotation'

export function getDailyPuzzles(challenge: number): Puzzle[] {
  return getRotatingPuzzlesByChallenge(challenge)
}
