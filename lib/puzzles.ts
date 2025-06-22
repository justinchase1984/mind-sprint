// lib/puzzles.ts
export interface Puzzle { question: string; answer: string }

// Day-1 Trivia
export const triviaPool: Puzzle[] = [
  { question: 'Which year did the Berlin Wall fall?', answer: '1989' },
  { question: 'Which country has won the most FIFA World Cups?', answer: 'brazil' },
  /* 8 more Trivia… */
]

// Day-2 Word Scramble
export const scramblePool: Puzzle[] = [
  { question: 'Unscramble: TCA', answer: 'cat' },
  { question: 'Unscramble: LOPUEX', answer: 'xploue'? /*etc*/ },
  /* 8 more… */
]

// Day-3 Logic
export const logicPool: Puzzle[] = [
  { question: 'Which one doesn’t belong: apple, banana, carrot, grape?', answer: 'carrot' },
  /* 9 more… */
]

// Day-4 Rebus (Emoji/Text)
export const rebusPool: Puzzle[] = [
  { question: '🐝 + 🔑 = ?', answer: 'be key / becky' },
  /* 9 more… */
]

// Day-5 Memory Test
export const memoryPool: Puzzle[] = [
  { question: 'Remember this sequence: 2,7,4,9. Next is 2,7,4,9,2,7,4,?', answer: '9' },
  /* 9 more… */
]

// Day-6 Mini-Crossword (just 5 clues, fill in)
export const crosswordPool: Puzzle[] = [
  { question: '1 across: Not heavy (4 letters)', answer: 'light' },
  /* 4 more… */
]

// Day-7 Brain-Gym Mix
export const mixPool: Puzzle[] = [
  /* Pick any 10 total from the above pools (2 each for variety) */
]
