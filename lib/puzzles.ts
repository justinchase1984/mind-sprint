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
  { question: 'Unscramble: LRCAO',     answer: 'Coral',      options: ['Carol','Coral','Local','Orcal'] },
  { question: 'Unscramble: PUATLPEO',  answer: 'Populate',   options: ['Protect','Portable','Populate','Permeant'] },
  { question: 'Unscramble: RPEHANCEC', answer: 'Perchance',  options: ['Reophone','Chopper','Perchance','Phone Rec'] },
  { question: 'Unscramble: HGORYPEAG', answer: 'Geography',  options: ['Geography','Hygraego','Agency','Orography'] },
  { question: 'Unscramble: YPSCHIS',   answer: 'Physics',    options: ['Psychis','Physics','Hisscyp','Shipcys'] },
  { question: 'Unscramble: HEIRGLYPHO',answer: 'Hieroglyph', options: ['Hieroglyph','Galleryph','Hyperlight','Philhgren'] },
  { question: 'Unscramble: AERHT',     answer: 'Earth',      options: ['Heart','Earth','Rathe','Hater'] },
  { question: 'Unscramble: TMNOH',     answer: 'Month',      options: ['Mouth','Month','Thoman','Tomahn'] },
  { question: 'Unscramble: GICSLOTIS', answer: 'Logistics',  options: ['Logistics','Psychlog','Gossipch','Schlopts'] },
  { question: 'Unscramble: OSIPON',    answer: 'Poison',     options: ['Poison','Pinose','Sopine','Pension'] },
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
  { question: '🔥 + 🐝 = ?', answer: 'Firefly',       options: ['Firefly','Fire Bee','Flyfire','Bee Fire'] },
  { question: '🌞 + 🌻 = ?', answer: 'Sunflower',     options: ['Sunshine','Sunflower','Flower Power','Sunny Day'] },
  { question: '🌙 + 💡 = ?', answer: 'Moonlight',     options: ['Moonbeam','Starlight','Moonlight','Night Lamp'] },
  { question: '🎩 + 🐰 = ?', answer: 'Magic Trick',   options: ['Rabbit Hole','Magic Trick','Odd Trick','Hat Trick'] },
  { question: '🎂 + 🎉 = ?', answer: 'Birthday Party',options: ['Birthday Cakes','Party Time','Birthday Party','Cake Celebration'] },
  { question: '📚 + 🐛 = ?', answer: 'Bookworm',      options: ['Bookstore','Bookworm','Library Bug','Reading Bug'] },
  { question: '🚀 + 🔬 = ?', answer: 'Rocket Science',options: ['Rocket Ship','Space Science','Rocket Science','Astro Research'] },
  { question: '🌅 + 🐦 = ?', answer: 'Early Bird',    options: ['Sunrise','Early Bird','Morning Bird','Birdsong'] },
  { question: '🍎 + 🥧 = ?', answer: 'Apple Pie',     options: ['Apple Tart','Pie Chart','Apple Pie','Core Dessert'] },
  { question: '⚽ + 🥅 = ?', answer: 'Goal',          options: ['Goal','Goalpost','Soccer Ball','Net'] },
]

// Day-5: Memory (placeholder, logic in code)
export const memoryPool: Puzzle[] = []

// Day-6: Mini Crossword Clues (10)
export const crosswordPool: Puzzle[] = [
  { question: 'Not horizontal (8 letters)',       answer: 'Vertical',   options: ['Vertical','Parallel','Lateral','Diagonal'] },
  { question: 'Sleep place for baby (4 letters)', answer: 'Crib',       options: ['Bed','Crib','Cot','Pod'] },
  { question: 'Color of the sky (4 letters)',     answer: 'Blue',       options: ['Green','Black','Blue','White'] },
  { question: 'Opposite of empty (4 letters)',    answer: 'Full',       options: ['Void','Full','Many','Sparse'] },
  { question: 'Prefix meaning “two” (2 letters)', answer: 'Bi',         options: ['Di','Bi','Tri','Pi'] },
  { question: 'Group of wolves (4 letters)',      answer: 'Pack',       options: ['Pride','Herd','Pack','Flock'] },
  { question: 'Five-sided shape (8 letters)',     answer: 'Pentagon',   options: ['Hexagon','Pentagon','Heptagon','Octagon'] },
  { question: 'Opposite of rough (6 letters)',    answer: 'Smooth',     options: ['Jagged','Smooth','Rocky','Gravel'] },
  { question: 'Word for “quickly” (5 letters)',   answer: 'Swift',      options: ['Swift','Slowly','Sudden','Speedy'] },
  { question: 'Not old (3 letters)',              answer: 'New',        options: ['Old','New','Aged','Ancient'] },
]

// Day-7: Riddle Day (10)
export const mixPool: Puzzle[] = [
  {
    question: 'I speak without a mouth and hear without ears. I have nobody, but I come alive with wind. What am I?',
    answer: 'Echo',
    options: ['Echo', 'Shadow', 'Whistle', 'Wind'],
  },
  {
    question: 'You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. What am I?',
    answer: 'Candle',
    options: ['Candle', 'Clock', 'Shadow', 'Hair'],
  },
  {
    question: 'I have cities, but no houses; forests, but no trees; and water, but no fish. What am I?',
    answer: 'Map',
    options: ['Map', 'Book', 'Painting', 'Dream'],
  },
  {
    question: 'What can you hold in your left hand but not in your right?',
    answer: 'Your Right Elbow',
    options: ['Your Right Elbow', 'Your Left Elbow', 'Your Breath', 'Your Tongue'],
  },
  {
    question: 'What gets wetter the more it dries?',
    answer: 'Towel',
    options: ['Towel', 'Sponge', 'Water', 'Soap'],
  },
  {
    question: 'What has one eye, but can’t see?',
    answer: 'Needle',
    options: ['Needle', 'Hurricane', 'Potato', 'Blizzard'],
  },
  {
    question: 'What has keys but can’t open locks?',
    answer: 'Piano',
    options: ['Piano', 'Keyboard', 'Map', 'Code'],
  },
  {
    question: 'The more of this there is, the less you see. What is it?',
    answer: 'Darkness',
    options: ['Fog', 'Darkness', 'Light', 'Dust'],
  },
  {
    question: 'I’m light as a feather, yet the strongest person can’t hold me for five minutes. What am I?',
    answer: 'Breath',
    options: ['Breath', 'Air', 'Water', 'Shadow'],
  },
  {
    question: 'I have a heart that doesn’t beat. What am I?',
    answer: 'Artichoke',
    options: ['Artichoke', 'Stone', 'Tree', 'Robot'],
  },
]
