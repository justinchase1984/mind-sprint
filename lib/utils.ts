import type { Puzzle } from './puzzles'
import { getRotatingPuzzlesByChallenge } from './rotation'

export function getPuzzlesByChallenge(challenge: number): Puzzle[] {
  return getRotatingPuzzlesByChallenge(challenge)
}
