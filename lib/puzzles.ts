// lib/puzzles.ts
export interface Puzzle { question: string; answer: string }

// Day-1 Trivia
export const triviaPool: Puzzle[] = [
  { question: 'Which year did the Berlin Wall fall?', answer: '1989' },
  { question: 'Which country has won the most FIFA World Cups?', answer: 'brazil' },
  { question: 'What is the capital of Australia?', answer: 'canberra' },
  // …add 7 more Trivia puzzles here…
]

// Day-2 Word Scramble
export const scramblePool: Puzzle[] = [
  { question: 'Unscramble: TCA', answer: 'cat' },
  { question: 'Unscramble: LOPUEX', answer: 'explore' },   // corrected answer
  // …add 8 more scrambles here…
]

// Day-3 Logic
export const logicPool: Puzzle[] = [
  { question: 'Which one doesn’t belong: apple, banana, carrot, grape?', answer: 'carrot' },
  // …add 9 more logic puzzles…
]

// Day-4 Picture Rebus
export const rebusPool: Puzzle[] = [
  { question: '🐝 + 🔑 = ?', answer: 'be key' },
  // …add 9 more rebus puzzles…
]

// Day-5 Memory Test
export const memoryPool: Puzzle[] = [
  { question: 'Remember this: 2,7,4,9. What is the next number?', answer: '2' },
  // …add 9 more memory tests…
]

// Day-6 Crossword Mini
export const crosswordPool: Puzzle[] = [
  { question: '1 across: Not heavy (4 letters)', answer: 'light' },
  // …add 4 more crossword clues…
]

// Day-7 Mixed “Brain Gym”
export const mixPool: Puzzle[] = [
  // Pick any 10 puzzles from above pools or create new ones
  { question: 'What is 2 + 2?', answer: '4' },
  // …add 9 more mix puzzles…
]
