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
    answer: 'Rafael Nadal',
    options: ['Roger Federer', 'Novak Djokovic', 'Rafael Nadal', 'Andy Murray'],
  },
  {
    question: 'Which country hosted the 2016 Summer Olympics?',
    answer: 'Brazil',
    options: ['China', 'Russia', 'Brazil', 'United Kingdom'],
  },
  {
    question: 'What is the capital of Canada?',
    answer: 'Ottawa',
    options: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
  },
  {
    question: 'Who painted the Mona Lisa?',
    answer: 'Leonardo da Vinci',
    options: ['Michelangelo', 'Raphael', 'Leonardo da Vinci', 'Donatello'],
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answer: 'Mars',
    options: ['Venus', 'Jupiter', 'Mars', 'Saturn'],
  },
  {
    question: 'Who wrote “1984” and “Animal Farm”?',
    answer: 'George Orwell',
    options: ['Aldous Huxley', 'Ray Bradbury', 'George Orwell', 'J.R.R. Tolkien'],
  },
  {
    question: 'In which year did the Titanic sink?',
    answer: '1912',
    options: ['1905', '1912', '1918', '1920'],
  },
  {
    question: 'What is the largest ocean on Earth?',
    answer: 'Pacific',
    options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'],
  },
  {
    question: 'Who discovered penicillin?',
    answer: 'Alexander Fleming',
    options: ['Louis Pasteur', 'Alexander Fleming', 'Marie Curie', 'Robert Koch'],
  },
]

// Day-2: Word Scramble (10 items)
export const scramblePool: Puzzle[] = [
  { question: 'Unscramble: LRCAO',    answer: 'Coral',      options: ['Carol','Coral','Local','Orcal'] },
  { question: 'Unscramble: PUATLPEO', answer: 'Populate',   options: ['Protect','Portable','Populate','Permeant'] },
  { question: 'Unscramble: RPEHANCEC',answer: 'Perchance',  options: ['Reophone','Chopper','Perchance','Phone Rec'] },
  { question: 'Unscramble: HGORYPEAG',answer: 'Geography',  options: ['Geography','Hygraego','Agency','Orography'] },
  { question: 'Unscramble: YPSCHIS',  answer: 'Physics',    options: ['Psychis','Physics','Hisscyp','Shipcys'] },
  { question: 'Unscramble: HEIRGLYPHO',answer: 'Hieroglyph',options: ['Hieroglyph','Galleryph','Hyperlight','Philhgren'] },
  { question: 'Unscramble: AERHT',    answer: 'Earth',      options: ['Heart','Earth','Rathe','Hater'] },
  { question: 'Unscramble: TMNOH',    answer: 'Month',      options: ['Mouth','Month','Thoman','Tomahn'] },
  { question: 'Unscramble: GICSLOTIS',answer: 'Logistics',  options: ['Logistics','Psychlog','Gossipch','Schlopts'] },
  { question: 'Unscramble: OSIPON',   answer: 'Poison',     options: ['Poison','Pinose','Sopine','Pension'] },
]

// Day-3: Logic Puzzles (10)
export const logicPool: Puzzle[] = [
  {
    question: 'What global sporting event is held every four years and features thousands of athletes?',
    answer: 'Olympics',
    options: ['World Cup', 'Olympics', 'Tour de France', 'Super Bowl'],
  },
  {
    question: 'Which country’s flag is a red circle on a white background?',
    answer: 'Japan',
    options: ['Japan', 'Bangladesh', 'Switzerland', 'Monaco'],
  },
  {
    question: 'Who sang the hit song “Rolling in the Deep”?',
    answer: 'Adele',
    options: ['Beyoncé', 'Adele', 'Rihanna', 'Taylor Swift'],
  },
  {
    question: 'Which planet has the most moons?',
    answer: 'Jupiter',
    options: ['Mars', 'Saturn', 'Jupiter', 'Uranus'],
  },
  {
    question: 'What is the largest country by land area?',
    answer: 'Russia',
    options: ['Canada', 'China', 'United States', 'Russia'],
  },
  {
    question: 'Which film won Best Picture at the 2020 Oscars?',
    answer: 'Parasite',
    options: ['1917', 'Parasite', 'Joker', 'Once Upon a Time…in Hollywood'],
  },
  {
    question: 'Who is known as the “King of Pop”?',
    answer: 'Michael Jackson',
    options: ['Elvis Presley', 'Prince', 'Michael Jackson', 'Freddie Mercury'],
  },
  {
    question: 'Which artist’s 2017 global smash was “Shape of You”?',
    answer: 'Ed Sheeran',
    options: ['Justin Bieber', 'Ed Sheeran', 'Bruno Mars', 'Shawn Mendes'],
  },
  {
    question: 'Which nation lifted the 2018 FIFA World Cup trophy?',
    answer: 'France',
    options: ['Croatia', 'Brazil', 'France', 'Germany'],
  },
  {
    question: 'Who directed Christopher Nolan’s film “Inception”?',
    answer: 'Christopher Nolan',
    options: ['Steven Spielberg', 'Christopher Nolan', 'James Cameron', 'Ridley Scott'],
  },
]

// Day-4: Picture Rebus (10)
export const rebusPool: Puzzle[] = [
  { question: '🐝 + 👢 = ?',       answer: 'Beetle',         options: ['Beetle','Beagle','Buckle','Beadle'] },
  { question: '🌞 + 🌧️ + ⛄ = ?',   answer: 'Weather',        options: ['Whether','Weather','Weaver','Wither'] },
  { question: '✈️ + 🚀 = ?',       answer: 'Air Rocket',     options: ['Air Rocket','Rocket Air','Starship','Airplane'] },
  { question: '🍎 + 📱 = ?',       answer: 'Apple',          options: ['Pear','Apple','Pineapple','Snapple'] },
  { question: '💡 + 🔌 = ?',       answer: 'Lightbulb',      options: ['Lightbulb','Lamp','Bulb','Socket'] },
  { question: '👁️ + ❤️ + 🍕 = ?', answer: 'I Love Pizza',   options: ['I Love Pizza','Eye Heart Pie','I Heart Pizza','I Like Pie'] },
  { question: '🔒 + 🔑 = ?',       answer: 'Lock And Key',   options: ['Lock And Key','Key Lock','Unlock','Padlock'] },
  { question: '🐠 + 🍟 = ?',       answer: 'Fish And Chips', options: ['Fish And Chips','Chips And Fish','Fish Fries','Seafood'] },
  { question: '🏋️ + 🏃 = ?',       answer: 'Workout',        options: ['Work Out','Workout','Gym Run','Sports'] },
  { question: '☕ + 🍰 = ?',       answer: 'Coffee Cake',    options: ['Coffee Cake','Cupcake','Cheesecake','Donut'] },
]

// Day-5: Memory Test (10)
export const memoryPool: Puzzle[] = [
  { question: 'Memorize: 5-3-9-1-7. What is the 3rd number?',      answer: '9',       options: ['5','3','9','1'] },
  { question: 'Colors: red–blue–green–yellow. What’s 2nd?',       answer: 'Blue',    options: ['Red','Blue','Green','Yellow'] },
  { question: 'Animals: cat–dog–bird–fish. What’s 4th?',          answer: 'Fish',    options: ['Cat','Dog','Bird','Fish'] },
  { question: 'Sequence: 7-2-4-6. What’s last?',                 answer: '6',       options: ['7','2','4','6'] },
  { question: 'Which letter completes the pattern? D, G, J, M, ?',answer: 'P',       options: ['P','K','Q','R'] },
  { question: 'Shapes: circle–square–triangle–hexagon. What’s 3rd?', 
                                                                    answer: 'Triangle',options: ['Circle','Square','Triangle','Hexagon'] },
  { question: 'Celestial: sun–moon–star–cloud. What’s 4th?',      answer: 'Cloud',   options: ['Sun','Moon','Star','Cloud'] },
  { question: 'Odds: 1-3-5-7-9. What’s 5th?',                    answer: '9',       options: ['1','3','5','9'] },
  { question: 'Fruits: apple–banana–orange–grape. What’s 2nd?',    answer: 'Banana',  options: ['Apple','Banana','Orange','Grape'] },
  { question: 'Transport: car–bus–train–plane. What’s 3rd?',      answer: 'Train',   options: ['Car','Bus','Train','Plane'] },
]

// Day-6: Crossword Mini (5 clues)
export const crosswordPool: Puzzle[] = [
  { question: '1 Across: Not horizontal (4 letters)',      answer: 'Vert', options: ['Flat','Level','Orthogonal','Vert'] },
  { question: '2 Down: Not old (3 letters)',               answer: 'New',  options: ['Old','New','Won','Nil'] },
  { question: '3 Across: Not in (3 letters)',              answer: 'Out',  options: ['Out','In','Off','On'] },
  { question: '4 Down: Sleep place (3 letters)',           answer: 'Bed',  options: ['Bed','Den','Cot','Mat'] },
  { question: '5 Across: Negative sign (1 character)',     answer: '-',    options: ['-','+','*','/'] },
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
