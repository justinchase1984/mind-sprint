// lib/puzzles.ts
export interface Puzzle { question: string; answer: string }
export const fullPool: Puzzle[] = [
  { question: 'Which year did the Berlin Wall fall?', answer: '1989' },
  { question: 'Who was the first female Prime Minister of the UK?', answer: 'margaret thatcher' },
  /* …add all 20+ puzzles here… */
]
