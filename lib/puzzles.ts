// lib/puzzles.ts

export interface Puzzle { question: string; answer: string }

// Day-1: Trivia (10 medium-hard)
export const triviaPool: Puzzle[] = [
  { question: 'Which year did the Berlin Wall fall?', answer: '1989' },
  { question: 'Who has won the most men’s Grand Slam tennis titles?', answer: 'rafael nadal' },
  { question: 'Which country hosted the 2016 Summer Olympics?', answer: 'brazil' },
  { question: 'What is the capital of Canada?', answer: 'ottawa' },
  { question: 'Who painted the Mona Lisa?', answer: 'leonardo da vinci' },
  { question: 'Which planet is known as the Red Planet?', answer: 'mars' },
  { question: 'Who wrote “1984” and “Animal Farm”?', answer: 'george orwell' },
  { question: 'In which year did the Titanic sink?', answer: '1912' },
  { question: 'What is the largest ocean on Earth?', answer: 'pacific' },
  { question: 'Who discovered penicillin?', answer: 'alexander fleming' },
]

// Day-2: Word Scramble
export const scramblePool: Puzzle[] = [
  { question: 'Unscramble: LRCAO', answer: 'coral' },
  { question: 'Unscramble: NOITCARF', answer: 'fraction' },
  { question: 'Unscramble: GEOGRAHY', answer: 'geography' },
  { question: 'Unscramble: YHSCISI', answer: 'physics' },
  { question: 'Unscramble: ELIHGRYAP', answer: 'hieroglyph' },
  { question: 'Unscramble: AERHT', answer: 'earth' },
  { question: 'Unscramble: TAHONM', answer: 'month' },
  { question: 'Unscramble: OLCETYAP', answer: 'apoclety' /* example */ },
  { question: 'Unscramble: PSLOGIHC', answer: 'logistics' },
  { question: 'Unscramble: NISOEP', answer: 'poison' },
]

// Day-3: Logic Puzzles
export const logicPool: Puzzle[] = [
  { question: 'Which doesn’t belong: circle, square, cube, triangle?', answer: 'cube' },
  { question: 'Next in series: 2, 4, 8, 16, ?', answer: '32' },
  { question: 'Odd one out: red, blue, green, hot?', answer: 'hot' },
  { question: 'If all Blooks are Bloops, and some Bloops are Blimps, are all Blooks Blimps?', answer: 'no' },
  { question: 'Which fits: 13579 → ?, 2468 → 10?', answer: '11' },
  { question: 'A is older than B; B is older than C. Who’s youngest?', answer: 'c' },
  { question: 'If today is Monday, what day is 100 days later?', answer: 'thursday' },
  { question: 'Which one completes the pattern: ▲ ■ ▲ ■ ? ', answer: '▲' },
  { question: 'Choose the correct path to exit the maze.', answer: 'path B' /* placeholder */ },
  { question: 'Which doesn’t belong: cat, dog, bird, fish, car?', answer: 'car' },
]

// Day-4: Picture Rebus
export const rebusPool: Puzzle[] = [
  { question: '🐝 + 👢 = ?', answer: 'beetle' },
  { question: '🌞 + 🌧️ + ⛄ = ?', answer: 'weather' },
  { question: '✈️ + 🚀 = ?', answer: 'air rocket' },
  { question: '🍎 + 📱 = ?', answer: 'apple' },
  { question: '💡 + 🔌 = ?', answer: 'lightbulb' },
  { question: '👁️ + ❤️ + 🍕 = ?', answer: 'i love pizza' },
  { question: '🔒 + 🔑 = ?', answer: 'lock and key' },
  { question: '🐠 + 🍟 = ?', answer: 'fish and chips' },
  { question: '🏋️ + 🏃 = ?', answer: 'workout' },
  { question: '☕ + 🍰 = ?', answer: 'coffee cake' },
]

// Day-5: Memory Test
export const memoryPool: Puzzle[] = [
  { question: 'Memorize: 5-3-9-1-7. What is the 3rd number?', answer: '9' },
  { question: 'Memorize colors: red-blue-green-yellow. What’s 2nd?', answer: 'blue' },
  { question: 'Memorize sequence: cat-dog-bird-fish. What’s 4th?', answer: 'fish' },
  { question: 'Memorize: 7-2-4-6. What’s last?', answer: '6' },
  { question: 'Memorize: A-B-C-D-E. What’s 1st?', answer: 'A' },
  { question: 'Memorize shapes: circle-square-triangle-hexagon. What’s 3rd?', answer: 'triangle' },
  { question: 'Memorize: sun-moon-star-cloud. What’s 4th?', answer: 'cloud' },
  { question: 'Memorize: 1-3-5-7-9. What’s 5th?', answer: '9' },
  { question: 'Memorize fruits: apple-banana-orange-grape. What’s 2nd?', answer: 'banana' },
  { question: 'Memorize transport: car-bus-train-plane. What’s 3rd?', answer: 'train' },
]

// Day-6: Crossword Mini (5 clues)
export const crosswordPool: Puzzle[] = [
  { question: '1 Across: Opposite of up (4 letters)', answer: 'down' },
  { question: '2 Down: Not old (3 letters)', answer: 'new' },
  { question: '3 Across: Not in (3 letters)', answer: 'out' },
  { question: '4 Down: Sleep place (3 letters)', answer: 'bed' },
  { question: '5 Across: Negative sign (1 letter)', answer: '-' },
]

// Day-7: Brain Gym Mix (10 varied)
export const mixPool: Puzzle[] = [
  triviaPool[0],
  scramblePool[1],
  logicPool[2],
  rebusPool[3],
  memoryPool[4],
  crosswordPool[0],
  triviaPool[1],
  scramblePool[2],
  logicPool[3],
  rebusPool[4],
]
