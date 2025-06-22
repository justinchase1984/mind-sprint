// lib/puzzles.ts

export interface Puzzle {
  question: string
  answer: string
  options: string[]
}

// Day-1: Trivia (10 medium-hard)
export const triviaPool: Puzzle[] = [
  {
    question: 'Which year did the Berlin Wall fall?',
    answer: '1989',
    options: ['1987', '1989', '1991', '1975'],
  },
  {
    question: 'Who has won the most men’s Grand Slam tennis titles?',
    answer: 'rafael nadal',
    options: ['roger federer', 'novak djokovic', 'rafael nadal', 'andy murray'],
  },
  {
    question: 'Which country hosted the 2016 Summer Olympics?',
    answer: 'brazil',
    options: ['china', 'russia', 'brazil', 'uk'],
  },
  {
    question: 'What is the capital of Canada?',
    answer: 'ottawa',
    options: ['toronto', 'vancouver', 'ottawa', 'montreal'],
  },
  {
    question: 'Who painted the Mona Lisa?',
    answer: 'leonardo da vinci',
    options: ['michelangelo', 'raphael', 'leonardo da vinci', 'donatello'],
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answer: 'mars',
    options: ['venus', 'jupiter', 'mars', 'saturn'],
  },
  {
    question: 'Who wrote “1984” and “Animal Farm”?',
    answer: 'george orwell',
    options: ['aldous huxley', 'ray bradbury', 'george orwell', 'jrr tolkien'],
  },
  {
    question: 'In which year did the Titanic sink?',
    answer: '1912',
    options: ['1905', '1912', '1918', '1920'],
  },
  {
    question: 'What is the largest ocean on Earth?',
    answer: 'pacific',
    options: ['atlantic', 'indian', 'pacific', 'arctic'],
  },
  {
    question: 'Who discovered penicillin?',
    answer: 'alexander fleming',
    options: ['louis pasteur', 'alexander fleming', 'marie curie', 'robert koch'],
  },
]

// Day-2: Word Scramble (10 items)
export const scramblePool: Puzzle[] = [
  {
    question: 'Unscramble: LRCAO',
    answer: 'coral',
    options: ['carol', 'coral', 'local', 'orcal'],
  },
  {
    question: 'Unscramble: PUATLPEO',
    answer: 'populate',
    options: ['protect', 'portable', 'populate', 'permeant'],
  },
  {
    question: 'Unscramble: NREPOCHACE',
    answer: 'perchance',
    options: ['reophone', 'chopper', 'perchance', 'phone rec'],
  },
  {
    question: 'Unscramble: HGORYPEAG',
    answer: 'geography',
    options: ['geography', 'hygraego', 'agency', 'orography'],
  },
  {
    question: 'Unscramble: YHSCISI',
    answer: 'physics',
    options: ['psychis', 'physics', 'hisscyp', 'shipcys'],
  },
  {
    question: 'Unscramble: HEIRGLYPHO',
    answer: 'hieroglyph',
    options: ['hieroglyph', 'galleryph', 'hyperlight', 'philhgren'],
  },
  {
    question: 'Unscramble: AERHT',
    answer: 'earth',
    options: ['heart', 'earth', 'rathe', 'hater'],
  },
  {
    question: 'Unscramble: TAHONM',
    answer: 'month',
    options: ['mouth', 'month', 'thoman', 'tomahn'],
  },
  {
    question: 'Unscramble: GICSLOTIS',
    answer: 'logistics',
    options: ['logistics', 'psychlog', 'gossipch', 'schlopts'],
  },
  {
    question: 'Unscramble: NISOEP',
    answer: 'poison',
    options: ['poison', 'pinose', 'sopine', 'pension'],
  },
]

// Day-3: Logic Puzzles (10)
export const logicPool: Puzzle[] = [
  {
    question: 'Which doesn’t belong: circle, square, cube, triangle?',
    answer: 'cube',
    options: ['circle', 'square', 'cube', 'triangle'],
  },
  {
    question: 'Next in series: 2, 4, 8, 16, ?',
    answer: '32',
    options: ['24', '30', '32', '40'],
  },
  {
    question: 'Odd one out: Mercury, Venus, Mars, Jupiter?',
    answer: 'jupiter',
    options: ['venus', 'mars', 'mercury', 'jupiter'],
  },
  {
    question:
      'If all Blooks are Bloops, and some Bloops are Blimps, are all Blooks Blimps?',
    answer: 'no',
    options: ['yes', 'no', 'only some', 'cannot tell'],
  },
  {
    question: 'Which fits: 13579 → ?, 2468 → 10?',
    answer: '11',
    options: ['9', '10', '11', '12'],
  },
  {
    question: 'A is older than B; B is older than C. Who’s youngest?',
    answer: 'c',
    options: ['a', 'b', 'c', 'cannot tell'],
  },
  {
    question: 'If today is Monday, what day is 100 days later?',
    answer: 'thursday',
    options: ['wednesday', 'thursday', 'friday', 'tuesday'],
  },
  {
    question: 'Which completes the pattern: ▲ ■ ▲ ■ ?',
    answer: '▲',
    options: ['■', '▲', '◯', '◆'],
  },
  {
    question: 'Choose the correct maze exit (path B).',
    answer: 'path b',
    options: ['path a', 'path b', 'path c', 'path d'],
  },
  {
    question: 'Which doesn’t belong: cat, dog, bird, fish, car?',
    answer: 'car',
    options: ['cat', 'dog', 'bird', 'car'],
  },
]

// Day-4: Picture Rebus (10)
export const rebusPool: Puzzle[] = [
  {
    question: '🐝 + 👢 = ?',
    answer: 'beetle',
    options: ['beetle', 'beagle', 'buckle', 'beadle'],
  },
  {
    question: '🌞 + 🌧️ + ⛄ = ?',
    answer: 'weather',
    options: ['whether', 'weather', 'weaver', 'wither'],
  },
  {
    question: '✈️ + 🚀 = ?',
    answer: 'air rocket',
    options: ['air rocket', 'rocket air', 'starship', 'airplane'],
  },
  {
    question: '🍎 + 📱 = ?',
    answer: 'apple',
    options: ['pear', 'apple', 'pineapple', 'snapple'],
  },
  {
    question: '💡 + 🔌 = ?',
    answer: 'lightbulb',
    options: ['lightbulb', 'lamp', 'bulb', 'socket'],
  },
  {
    question: '👁️ + ❤️ + 🍕 = ?',
    answer: 'i love pizza',
    options: ['i love pizza', 'eye heart pie', 'i heart pizza', 'i like pie'],
  },
  {
    question: '🔒 + 🔑 = ?',
    answer: 'lock and key',
    options: ['lock and key', 'key lock', 'unlock', 'padlock'],
  },
  {
    question: '🐠 + 🍟 = ?',
    answer: 'fish and chips',
    options: ['fish and chips', 'chips and fish', 'fish fries', 'seafood'],
  },
  {
    question: '🏋️ + 🏃 = ?',
    answer: 'workout',
    options: ['work out', 'workout', 'gym run', 'sports'],
  },
  {
    question: '☕ + 🍰 = ?',
    answer: 'coffee cake',
    options: ['coffee cake', 'cupcake', 'cheesecake', 'donut'],
  },
]

// Day-5: Memory Test (10)
export const memoryPool: Puzzle[] = [
  {
    question: 'Memorize: 5-3-9-1-7. What is the 3rd number?',
    answer: '9',
    options: ['5', '3', '9', '1'],
  },
  {
    question: 'Colors: red–blue–green–yellow. What’s 2nd?',
    answer: 'blue',
    options: ['red', 'blue', 'green', 'yellow'],
  },
  {
    question: 'Animals: cat–dog–bird–fish. What’s 4th?',
    answer: 'fish',
    options: ['cat', 'dog', 'bird', 'fish'],
  },
  {
    question: 'Sequence: 7-2-4-6. What’s last?',
    answer: '6',
    options: ['7', '2', '4', '6'],
  },
  {
    question: 'Which letter completes the pattern? D, G, J, M, ?',
    answer: 'p',
    options: ['p', 'k', 'q', 'r'],
  },
  {
    question: 'Shapes: circle–square–triangle–hexagon. What’s 3rd?',
    answer: 'triangle',
    options: ['circle', 'square', 'triangle', 'hexagon'],
  },
  {
    question: 'Celestial: sun–moon–star–cloud. What’s 4th?',
    answer: 'cloud',
    options: ['sun', 'moon', 'star', 'cloud'],
  },
  {
    question: 'Odds: 1-3-5-7-9. What’s 5th?',
    answer: '9',
    options: ['1', '3', '5', '9'],
  },
  {
    question: 'Fruits: apple–banana–orange–grape. What’s 2nd?',
    answer: 'banana',
    options: ['apple', 'banana', 'orange', 'grape'],
  },
  {
    question: 'Transport: car–bus–train–plane. What’s 3rd?',
    answer: 'train',
    options: ['car', 'bus', 'train', 'plane'],
  },
]

// Day-6: Crossword Mini (5 clues)
export const crosswordPool: Puzzle[] = [
  {
    question: '1 Across: Not horizontal (4 letters)',
    answer: 'vert',
    options: ['flat', 'level', 'orthogonal', 'vert'],
  },
  {
    question: '2 Down: Not old (3 letters)',
    answer: 'new',
    options: ['old', 'new', 'won', 'nil'],
  },
  {
    question: '3 Across: Not in (3 letters)',
    answer: 'out',
    options: ['out', 'in', 'off', 'on'],
  },
  {
    question: '4 Down: Sleep place (3 letters)',
    answer: 'bed',
    options: ['bed', 'den', 'cot', 'mat'],
  },
  {
    question: '5 Across: Negative sign (1 character)',
    answer: '-',
    options: ['-', '+', '*', '/'],
  },
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
