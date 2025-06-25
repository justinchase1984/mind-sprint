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

// Day-4: Picture Rebus (10 improved puzzles)
export const rebusPool: Puzzle[] = [
  {
    question: '🔥 + 🐝 = ?',
    answer: 'Firefly',
    options: ['Firefly', 'Fire Bee', 'Flyfire', 'Bee Fire'],
  },
  {
    question: '🌞 + 🌻 = ?',
    answer: 'Sunflower',
    options: ['Sunshine', 'Sunflower', 'Flower Power', 'Sunny Day'],
  },
  {
    question: '🌙 + 💡 = ?',
    answer: 'Moonlight',
    options: ['Moonbeam', 'Starlight', 'Moonlight', 'Night Lamp'],
  },
  {
    question: '🎩 + 🐰 = ?',
    answer: 'Magic Trick',
    options: ['Rabbit Hole', 'Magic Trick', 'Odd Trick', 'Hat Trick'],
  },
  {
    question: '🎂 + 🎉 = ?',
    answer: 'Birthday Party',
    options: ['Birthday Cakes', 'Party Time', 'Birthday Party', 'Cake Celebration'],
  },
  {
    question: '📚 + 🐛 = ?',
    answer: 'Bookworm',
    options: ['Bookstore', 'Bookworm', 'Library Bug', 'Reading Bug'],
  },
  {
    question: '🚀 + 🔬 = ?',
    answer: 'Rocket Science',
    options: ['Rocket Ship', 'Space Science', 'Rocket Science', 'Astro Research'],
  },
  {
    question: '🌅 + 🐦 = ?',
    answer: 'Early Bird',
    options: ['Sunrise', 'Early Bird', 'Morning Bird', 'Birdsong'],
  },
  {
    question: '🍎 + 🥧 = ?',
    answer: 'Apple Pie',
    options: ['Apple Tart', 'Pie Chart', 'Apple Pie', 'Core Dessert'],
  },
  {
    question: '⚽ + 🥅 = ?',
    answer: 'Goal',
    options: ['Goal', 'Goalpost', 'Soccer Ball', 'Net'],
  },
]

// Day-5: Memory Test (10)
export const memoryPool: Puzzle[] = [
  {
    question: '🔢 You’ll see a sequence of 5 digits. What was the 3rd number?',
    answer: '7',
    options: ['5','7','3','9'],
  },
  {
    question: '🌈 You’ll see 4 colors in order. Which was 2nd?',
    answer: 'Blue',
    options: ['Red','Blue','Green','Yellow'],
  },
  {
    question: '🦁 You’ll see 5 animals flash. Which was shown last?',
    answer: 'Elephant',
    options: ['Lion','Tiger','Bear','Elephant'],
  },
  {
    question: '🔣 You’ll see 6 letters briefly. Which was 4th?',
    answer: 'D',
    options: ['A','C','D','F'],
  },
  {
    question: '⏰ You’ll see 5 times on screen. What was the first time shown?',
    answer: '3:15',
    options: ['2:45','3:15','4:00','2:30'],
  },
  {
    question: '🍎 You’ll see 4 fruits. Which was 3rd?',
    answer: 'Orange',
    options: ['Apple','Banana','Orange','Grape'],
  },
  {
    question: '🚗 You’ll see 4 car brands. Which was shown 2nd?',
    answer: 'BMW',
    options: ['Ford','BMW','Toyota','Honda'],
  },
  {
    question: '🔢 You’ll see 5 numbers. What was the 5th number?',
    answer: '42',
    options: ['23','42','11','37'],
  },
  {
    question: '⭐ You’ll see 4 shapes. Which was 1st?',
    answer: 'Circle',
    options: ['Circle','Square','Triangle','Hexagon'],
  },
  {
    question: '🎵 You’ll hear 3 notes. Which note was in the middle?',
    answer: 'E',
    options: ['C','E','G','A'],
  },
]

// Day-6: Mini “Crossword” Clues (10)
export const crosswordPool: Puzzle[] = [
  {
    question: 'Not horizontal (8 letters)',
    answer: 'Vertical',
    options: ['Vertical','Parallel','Lateral','Diagonal'],
  },
  {
    question: 'Sleep place for baby (3 letters)',
    answer: 'Crib',
    options: ['Bed','Crib','Cot','Pod'],
  },
  {
    question: 'Color of the sky (5 letters)',
    answer: 'Blue',
    options: ['Green','Black','Blue','White'],
  },
  {
    question: 'Opposite of empty (4 letters)',
    answer: 'Full',
    options: ['Void','Full','Many','Many'],
  },
  {
    question: 'Prefix meaning “two” (2 letters)',
    answer: 'Bi',
    options: ['Di','Bi','Tri','Pi'],
  },
  {
    question: 'Not old (3 letters)',
    answer: 'New',
    options: ['Old','New','Aged','Ancient'],
  },
  {
    question: 'Group of wolves (6 letters)',
    answer: 'Pack',
    options: ['Pride','Herd','Pack','Flock'],
  },
  {
    question: 'Five-sided shape (7 letters)',
    answer: 'Pentagon',
    options: ['Hexagon','Pentagon','Heptagon','Octagon'],
  },
  {
    question: 'Opposite of rough (6 letters)',
    answer: 'Smooth',
    options: ['Jagged','Smooth','Rocky','Gravel'],
  },
  {
    question: 'Word for “quickly” (5 letters)',
    answer: 'Swift',
    options: ['Swift','Slowly','Sudden','Speedy'],
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
