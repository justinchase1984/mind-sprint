import type { Puzzle } from './puzzles'
import { getRotatingPuzzlesByChallenge } from './rotation'

export function getDailyPuzzles(challenge: number = 1): Puzzle[] {
  return getRotatingPuzzlesByChallenge(challenge)
}
