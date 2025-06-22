// lib/puzzles.ts
export interface Puzzle { question: string; answer: string }

// Day-1 Trivia (fill in 10 good ones)
export const triviaPool: Puzzle[] = [
  { question: 'Which year did the Berlin Wall fall?', answer: '1989' },
  { question: 'Who has the most Grand Slam tennis titles (men)?', answer: 'rafael nadal' },
  /* …8 more medium–hard trivia… */
]

// Day-2 Word Scramble
export const scramblePool: Puzzle[] = [
  { question: 'Unscramble: LRCOANMI', answer: 'clarimon' /* example */ },
  /* …9 more… */
]

// Day-3 Logic
export const logicPool: Puzzle[] = [
  { question: 'Which doesn’t belong: circle, square, cube, triangle?', answer: 'cube' },
  /* …9 more… */
]

// Day-4 Rebus
export const rebusPool: Puzzle[] = [
  { question: '🐝 + 👢 = ?', answer: 'beetle' },
  /* …9 more… */
]

// Day-5 Memory
export const memoryPool: Puzzle[] = [
  { question: 'Memorize: 5-3-9-1-7. What is the 3rd number?', answer: '9' },
  /* …9 more… */
]

// Day-6 Crossword
export const crosswordPool: Puzzle[] = [
  { question: '1 Across: Opposite of up (4 letters)', answer: 'down' },
  /* …4 more… */
]

// Day-7 Mix
export const mixPool: Puzzle[] = [
  /* 10 puzzles drawn from above or new ones */
]
