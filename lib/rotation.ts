// lib/rotation.ts
import type { Puzzle } from './puzzles'

/*
Rotation System
---------------
• Each challenge contains multiple sets
• Rotation occurs every 2 days

Day 1–2 → Set A
Day 3–4 → Set B
Day 5–6 → Set A
Day 7–8 → Set B
*/

const ROTATION_DAYS = 2

function getDayIndex(date: Date = new Date()): number {
  const start = new Date(Date.UTC(2025, 0, 1))
  const today = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()))
  const diff = today.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

function getRotationIndex(date: Date = new Date(), setCount: number): number {
  const dayIndex = getDayIndex(date)
  const cycle = Math.floor(dayIndex / ROTATION_DAYS)
  return cycle % setCount
}

/*
Challenge Sets
--------------
Set A = niche challenge
Set B = sports
*/

const CHALLENGE_SETS: Record<number, Puzzle[][]> = {

  /*
  ---------------------------------------------------
  CHALLENGE 1 — GENERAL KNOWLEDGE
  ---------------------------------------------------
  */

  1: [

    // Set A
    [
      {
        question: 'Which country is home to the Great Barrier Reef?',
        options: ['Indonesia', 'Australia', 'Philippines', 'Thailand'],
        answer: 'Australia',
      },
      {
        question: 'What is the smallest prime number?',
        options: ['0', '1', '2', '3'],
        answer: '2',
      },
      {
        question: 'Which planet has the most moons?',
        options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        answer: 'Saturn',
      },
      {
        question: 'What does GDP stand for?',
        options: [
          'Gross Domestic Product',
          'General Development Policy',
          'Global Debt Percentage',
          'Government Distribution Plan',
        ],
        answer: 'Gross Domestic Product',
      },
      {
        question: 'Which ocean is the largest?',
        options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'],
        answer: 'Pacific',
      },
      {
        question: 'Who wrote the novel "1984"?',
        options: ['Aldous Huxley', 'George Orwell', 'Ray Bradbury', 'Ernest Hemingway'],
        answer: 'George Orwell',
      },
      {
        question: 'What is the chemical symbol for potassium?',
        options: ['P', 'Pt', 'Po', 'K'],
        answer: 'K',
      },
      {
        question: 'Which country hosted the 2016 Olympics?',
        options: ['China', 'Brazil', 'United Kingdom', 'Japan'],
        answer: 'Brazil',
      },
      {
        question: 'What type of animal is a Komodo dragon?',
        options: ['Mammal', 'Amphibian', 'Reptile', 'Bird'],
        answer: 'Reptile',
      },
      {
        question: 'Which instrument has 88 keys?',
        options: ['Organ', 'Harpsichord', 'Piano', 'Synthesizer'],
        answer: 'Piano',
      },
    ],

    // Set B Sports
    [
      {
        question: 'How many players are on the field for one soccer team?',
        options: ['9', '10', '11', '12'],
        answer: '11',
      },
      {
        question: 'Which sport uses a shuttlecock?',
        options: ['Squash', 'Badminton', 'Tennis', 'Table Tennis'],
        answer: 'Badminton',
      },
      {
        question: 'Where is Wimbledon played?',
        options: ['USA', 'Australia', 'France', 'United Kingdom'],
        answer: 'United Kingdom',
      },
      {
        question: 'A free throw in basketball is worth how many points?',
        options: ['1', '2', '3', '4'],
        answer: '1',
      },
      {
        question: 'The Tour de France is part of which sport?',
        options: ['Cycling', 'Running', 'Rowing', 'Motor Racing'],
        answer: 'Cycling',
      },
      {
        question: 'Maximum runs from one cricket delivery?',
        options: ['4', '5', '6', '8'],
        answer: '6',
      },
      {
        question: 'Which sport uses rings and parallel bars?',
        options: ['Gymnastics', 'Fencing', 'Diving', 'Weightlifting'],
        answer: 'Gymnastics',
      },
      {
        question: 'The Masters tournament is in which sport?',
        options: ['Golf', 'Tennis', 'Snooker', 'Baseball'],
        answer: 'Golf',
      },
      {
        question: 'Which sport is called the beautiful game?',
        options: ['Basketball', 'Soccer', 'Tennis', 'Rugby'],
        answer: 'Soccer',
      },
      {
        question: 'Which flag ends a Formula 1 race?',
        options: ['Red', 'Yellow', 'Checkered', 'Blue'],
        answer: 'Checkered',
      },
    ],
  ],

  /*
  ---------------------------------------------------
  CHALLENGE 2 — WORD & LANGUAGE (EASIER)
  ---------------------------------------------------
  */

  2: [

    // Set A
    [
      {
        question: 'What does the word "ancient" mean?',
        options: ['Very old', 'Very fast', 'Very small', 'Very loud'],
        answer: 'Very old',
      },
      {
        question: 'Which word is the opposite of "early"?',
        options: ['Late', 'Soon', 'Quick', 'First'],
        answer: 'Late',
      },
      {
        question: 'Which sentence is correct?',
        options: [
          'She don’t like tea',
          'She doesn’t like tea',
          'She don’t likes tea',
          'She doesn’t likes tea',
        ],
        answer: 'She doesn’t like tea',
      },
      {
        question: 'What is the plural of "child"?',
        options: ['Childs', 'Children', 'Childes', 'Childrens'],
        answer: 'Children',
      },
      {
        question: 'Which word means the same as "begin"?',
        options: ['Start', 'Finish', 'Close', 'Stop'],
        answer: 'Start',
      },
      {
        question: 'Which is spelled correctly?',
        options: ['Recieve', 'Receive', 'Receeve', 'Receve'],
        answer: 'Receive',
      },
      {
        question: 'What is a synonym for "happy"?',
        options: ['Angry', 'Joyful', 'Cold', 'Weak'],
        answer: 'Joyful',
      },
      {
        question: 'Which word is a compound word?',
        options: ['Sunlight', 'Happy', 'Running', 'Blue'],
        answer: 'Sunlight',
      },
      {
        question: 'Fill the blank: "Please ____ the door."',
        options: ['open', 'opened', 'opening', 'opens'],
        answer: 'open',
      },
      {
        question: 'Which word describes something very big?',
        options: ['Tiny', 'Huge', 'Short', 'Thin'],
        answer: 'Huge',
      },
    ],

    // Set B Sports
    [
      {
        question: 'How many holes in golf?',
        options: ['9', '12', '18', '24'],
        answer: '18',
      },
      {
        question: 'Super Bowl is played in which sport?',
        options: ['Basketball', 'Baseball', 'American Football', 'Ice Hockey'],
        answer: 'American Football',
      },
      {
        question: 'Which sport uses a puck?',
        options: ['Ice Hockey', 'Lacrosse', 'Handball', 'Rugby'],
        answer: 'Ice Hockey',
      },
      {
        question: 'In tennis what score follows 30?',
        options: ['40', '45', '50', '60'],
        answer: '40',
      },
      {
        question: 'The Ashes is part of which sport?',
        options: ['Cricket', 'Rugby', 'Baseball', 'Tennis'],
        answer: 'Cricket',
      },
      {
        question: 'Which sport has slam dunks?',
        options: ['Volleyball', 'Basketball', 'Handball', 'Water Polo'],
        answer: 'Basketball',
      },
      {
        question: 'Players on a basketball court per team?',
        options: ['4', '5', '6', '7'],
        answer: '5',
      },
      {
        question: 'Which sport uses a pommel horse?',
        options: ['Gymnastics', 'Dressage', 'Fencing', 'Wrestling'],
        answer: 'Gymnastics',
      },
      {
        question: 'Which sport hits a ball using hands over a net?',
        options: ['Volleyball', 'Handball', 'Tennis', 'Badminton'],
        answer: 'Volleyball',
      },
      {
        question: 'Which sport uses a bat and wickets?',
        options: ['Cricket', 'Baseball', 'Tennis', 'Golf'],
        answer: 'Cricket',
      },
    ],
  ],

  /*
  ---------------------------------------------------
  CHALLENGE 3 — POP CULTURE
  ---------------------------------------------------
  */

  3: [[
    {
      question: 'Which actor played the Joker in The Dark Knight?',
      options: ['Joaquin Phoenix', 'Jared Leto', 'Heath Ledger', 'Christian Bale'],
      answer: 'Heath Ledger',
    },
    {
      question: 'Which band released Abbey Road?',
      options: ['The Rolling Stones', 'The Beatles', 'Pink Floyd', 'Queen'],
      answer: 'The Beatles',
    },
    {
      question: 'Which TV series is set in Westeros?',
      options: ['The Witcher', 'Game of Thrones', 'Vikings', 'The Rings of Power'],
      answer: 'Game of Thrones',
    },
    {
      question: 'Who directed Pulp Fiction?',
      options: ['Scorsese', 'Nolan', 'Tarantino', 'Spielberg'],
      answer: 'Tarantino',
    },
    {
      question: 'Who played Jack Sparrow?',
      options: ['Orlando Bloom', 'Johnny Depp', 'Brad Pitt', 'Tom Cruise'],
      answer: 'Johnny Depp',
    },
    {
      question: 'Who is known as the King of Pop?',
      options: ['Elvis', 'Michael Jackson', 'Prince', 'Bruno Mars'],
      answer: 'Michael Jackson',
    },
    {
      question: 'Which show features characters in Springfield?',
      options: ['Family Guy', 'South Park', 'The Simpsons', 'American Dad'],
      answer: 'The Simpsons',
    },
    {
      question: 'Which singer released the album 1989?',
      options: ['Ariana Grande', 'Taylor Swift', 'Rihanna', 'Dua Lipa'],
      answer: 'Taylor Swift',
    },
    {
      question: 'Which franchise features Neo?',
      options: ['Inception', 'The Matrix', 'Blade Runner', 'Tron'],
      answer: 'The Matrix',
    },
    {
      question: 'Which animated film features Woody?',
      options: ['Toy Story', 'Shrek', 'Cars', 'Frozen'],
      answer: 'Toy Story',
    },
  ]],

  /*
  CHALLENGE 4 — HISTORY
  */

  4: [[
    { question:'Who was the first US president?', options:['Lincoln','Jefferson','George Washington','Adams'], answer:'George Washington'},
    { question:'WWII ended in which year?', options:['1943','1945','1947','1950'], answer:'1945'},
    { question:'Which empire built Roman roads?', options:['Greek','Roman','Ottoman','Persian'], answer:'Roman'},
    { question:'French Revolution began?', options:['1776','1789','1804','1812'], answer:'1789'},
    { question:'Great Wall protected China from?', options:['Mongols','Romans','Vikings','Huns'], answer:'Mongols'},
    { question:'Which ship sank in 1912?', options:['Lusitania','Titanic','Britannic','Queen Mary'], answer:'Titanic'},
    { question:'Renaissance began in which country?', options:['France','Germany','Italy','Spain'], answer:'Italy'},
    { question:'Berlin Wall fell in?', options:['1987','1988','1989','1990'], answer:'1989'},
    { question:'Which civilization built pyramids?', options:['Romans','Egyptians','Greeks','Mayans'], answer:'Egyptians'},
    { question:'WWI ended in?', options:['1917','1918','1919','1920'], answer:'1918'},
  ]],

  /*
  CHALLENGE 5 — SMART NUMBERS
  */

  5: [[
    { question:'15% of 200?', options:['25','30','35','40'], answer:'30'},
    { question:'60 km/h for 2 hours distance?', options:['100','110','120','140'], answer:'120'},
    { question:'Next: 2,4,8,16,?', options:['24','28','32','36'], answer:'32'},
    { question:'80 reduced by 25%?', options:['55','60','65','70'], answer:'60'},
    { question:'Square of 12?', options:['124','134','144','154'], answer:'144'},
    { question:'Average of 2,4,6?', options:['3','4','5','6'], answer:'4'},
    { question:'3x = 21?', options:['6','7','8','9'], answer:'7'},
    { question:'9×7?', options:['54','63','72','81'], answer:'63'},
    { question:'Area 10×5 rectangle?', options:['40','45','50','55'], answer:'50'},
    { question:'Half of 250?', options:['100','110','120','125'], answer:'125'},
  ]],

  /*
  CHALLENGE 6 — SCIENCE
  */

  6: [[
    { question:'Red planet?', options:['Mars','Venus','Jupiter','Saturn'], answer:'Mars'},
    { question:'Humans breathe?', options:['Nitrogen','Oxygen','Hydrogen','Helium'], answer:'Oxygen'},
    { question:'Symbol for gold?', options:['Ag','Au','Gd','Go'], answer:'Au'},
    { question:'Organ pumping blood?', options:['Lungs','Brain','Heart','Liver'], answer:'Heart'},
    { question:'Largest planet?', options:['Earth','Saturn','Jupiter','Neptune'], answer:'Jupiter'},
    { question:'Force keeping planets in orbit?', options:['Magnetism','Friction','Gravity','Radiation'], answer:'Gravity'},
    { question:'Water freezes at?', options:['0°C','10°C','-5°C','32°C'], answer:'0°C'},
    { question:'Plants make food by?', options:['Respiration','Digestion','Photosynthesis','Fermentation'], answer:'Photosynthesis'},
    { question:'Cell part with DNA?', options:['Cytoplasm','Nucleus','Membrane','Ribosome'], answer:'Nucleus'},
    { question:'Sunlight produces which vitamin?', options:['A','B12','C','D'], answer:'Vitamin D'},
  ]],

  /*
  CHALLENGE 7 — WORLD GEOGRAPHY
  */

  7: [[
    { question:'Most time zones country?', options:['Russia','USA','France','UK'], answer:'France'},
    { question:'Kilimanjaro located in?', options:['Kenya','Tanzania','Uganda','Ethiopia'], answer:'Tanzania'},
    { question:'River through Budapest?', options:['Rhine','Danube','Seine','Thames'], answer:'Danube'},
    { question:'Smallest country?', options:['Monaco','Vatican City','San Marino','Liechtenstein'], answer:'Vatican City'},
    { question:'Largest hot desert?', options:['Gobi','Kalahari','Sahara','Atacama'], answer:'Sahara'},
    { question:'Sea between Europe & Africa?', options:['Baltic','Black','Mediterranean','Caribbean'], answer:'Mediterranean'},
    { question:'Land of Rising Sun?', options:['China','Japan','Korea','Thailand'], answer:'Japan'},
    { question:'Largest US state?', options:['Texas','California','Alaska','Montana'], answer:'Alaska'},
    { question:'Casablanca is in?', options:['Spain','Morocco','Tunisia','Egypt'], answer:'Morocco'},
    { question:'Andes located in?', options:['North America','Europe','South America','Asia'], answer:'South America'},
  ]],

}

export function getRotatingPuzzlesByChallenge(
  challengeIndex: number,
  today: Date = new Date()
): Puzzle[] {

  const sets = CHALLENGE_SETS[challengeIndex] || []

  if (!sets.length) return []

  const rotationIndex = getRotationIndex(today, sets.length)

  return sets[rotationIndex]

}
