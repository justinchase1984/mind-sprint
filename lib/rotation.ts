// lib/rotation.ts
import type { Puzzle } from './puzzles'

/*
Rotation System
---------------
• Each challenge contains multiple sets
• Rotation occurs every 2 days
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

const CHALLENGE_SETS: Record<number, Puzzle[][]> = {

  /*
  ---------------------------------------------------
  CHALLENGE 1 — GENERAL KNOWLEDGE
  ---------------------------------------------------
  */

  1: [

    [
      {
        question: 'Which country is home to the Great Barrier Reef?',
        options: ['Indonesia','Australia','Philippines','Thailand'],
        answer: 'Australia'
      },
      {
        question: 'What is the smallest prime number?',
        options: ['0','1','2','3'],
        answer: '2'
      },
      {
        question: 'Which planet in our solar system has the most moons?',
        options: ['Jupiter','Saturn','Uranus','Neptune'],
        answer: 'Saturn'
      },
      {
        question: 'In economics, what does GDP stand for?',
        options: [
          'Gross Domestic Product',
          'General Development Policy',
          'Global Debt Percentage',
          'Government Distribution Plan'
        ],
        answer: 'Gross Domestic Product'
      },
      {
        question: 'Which ocean is the largest by surface area?',
        options: ['Atlantic','Indian','Pacific','Arctic'],
        answer: 'Pacific'
      },
      {
        question: 'Who wrote the novel "1984"?',
        options: ['Aldous Huxley','George Orwell','Ray Bradbury','Ernest Hemingway'],
        answer: 'George Orwell'
      },
      {
        question: 'What is the chemical symbol for potassium?',
        options: ['P','Pt','Po','K'],
        answer: 'K'
      },
      {
        question: 'Which country hosted the 2016 Summer Olympics?',
        options: ['China','Brazil','United Kingdom','Japan'],
        answer: 'Brazil'
      },
      {
        question: 'What type of animal is a Komodo dragon?',
        options: ['Mammal','Amphibian','Reptile','Bird'],
        answer: 'Reptile'
      },
      {
        question: 'Which instrument has 88 keys on a standard model?',
        options: ['Organ','Harpsichord','Piano','Synthesizer'],
        answer: 'Piano'
      }
    ],

    [
      {
        question: 'How many players are on the field for one soccer team during normal play?',
        options: ['9','10','11','12'],
        answer: '11'
      },
      {
        question: 'Which sport uses a racket, shuttlecock, and a net?',
        options: ['Squash','Badminton','Tennis','Table Tennis'],
        answer: 'Badminton'
      },
      {
        question: 'Which country hosts the famous Wimbledon tennis tournament?',
        options: ['United States','Australia','France','United Kingdom'],
        answer: 'United Kingdom'
      },
      {
        question: 'In basketball, how many points is a free throw worth?',
        options: ['1','2','3','4'],
        answer: '1'
      },
      {
        question: 'Which sport features the Tour de France?',
        options: ['Cycling','Running','Rowing','Motor Racing'],
        answer: 'Cycling'
      },
      {
        question: 'In cricket, what is the maximum number of runs scored from one legal delivery?',
        options: ['4','5','6','8'],
        answer: '6'
      },
      {
        question: 'Which Olympic sport uses apparatus such as rings and parallel bars?',
        options: ['Gymnastics','Fencing','Diving','Weightlifting'],
        answer: 'Gymnastics'
      },
      {
        question: 'Which sport is played at the Masters Tournament?',
        options: ['Golf','Tennis','Snooker','Baseball'],
        answer: 'Golf'
      },
      {
        question: 'Which sport is known as “the beautiful game”?',
        options: ['Basketball','Soccer','Tennis','Rugby'],
        answer: 'Soccer'
      },
      {
        question: 'In Formula 1, what flag signals the end of a race?',
        options: ['Red','Yellow','Checkered','Blue'],
        answer: 'Checkered'
      }
    ]

  ],

  /*
  ---------------------------------------------------
  CHALLENGE 2 — WORD & LANGUAGE (SIMPLIFIED)
  ---------------------------------------------------
  */

  2: [

    [
      {
        question: 'What does the word "ancient" mean?',
        options: ['Very old','Very fast','Very small','Very loud'],
        answer: 'Very old'
      },
      {
        question: 'Which word is the opposite of "early"?',
        options: ['Late','Soon','Quick','First'],
        answer: 'Late'
      },
      {
        question: 'Which sentence is correct?',
        options: [
          'She don’t like tea',
          'She doesn’t like tea',
          'She don’t likes tea',
          'She doesn’t likes tea'
        ],
        answer: 'She doesn’t like tea'
      },
      {
        question: 'What is the plural of "child"?',
        options: ['Childs','Children','Childes','Childrens'],
        answer: 'Children'
      },
      {
        question: 'Which word means the same as "begin"?',
        options: ['Start','Finish','Close','Stop'],
        answer: 'Start'
      },
      {
        question: 'Which is spelled correctly?',
        options: ['Recieve','Receive','Receeve','Receve'],
        answer: 'Receive'
      },
      {
        question: 'What is a synonym for "happy"?',
        options: ['Angry','Joyful','Cold','Weak'],
        answer: 'Joyful'
      },
      {
        question: 'Which word is a compound word?',
        options: ['Sunlight','Happy','Running','Blue'],
        answer: 'Sunlight'
      },
      {
        question: 'Fill the blank: "Please ____ the door."',
        options: ['open','opened','opening','opens'],
        answer: 'open'
      },
      {
        question: 'Which word describes something very big?',
        options: ['Tiny','Huge','Short','Thin'],
        answer: 'Huge'
      }
    ]

  ],

  /*
  ---------------------------------------------------
  CHALLENGE 3 — POP CULTURE
  ---------------------------------------------------
  */

  3: [[
    {
      question: 'Which actor portrayed the Joker in the 2008 film "The Dark Knight"?',
      options: ['Joaquin Phoenix','Jared Leto','Heath Ledger','Christian Bale'],
      answer: 'Heath Ledger'
    },
    {
      question: 'Which band released the album "Abbey Road"?',
      options: ['The Rolling Stones','The Beatles','Pink Floyd','Queen'],
      answer: 'The Beatles'
    },
    {
      question: 'Which TV series is set in Westeros?',
      options: ['The Witcher','Game of Thrones','Vikings','The Rings of Power'],
      answer: 'Game of Thrones'
    },
    {
      question: 'Which singer is known as the "King of Pop"?',
      options: ['Elvis Presley','Michael Jackson','Prince','Bruno Mars'],
      answer: 'Michael Jackson'
    },
    {
      question: 'Who directed the film "Pulp Fiction"?',
      options: ['Martin Scorsese','Christopher Nolan','Quentin Tarantino','Steven Spielberg'],
      answer: 'Quentin Tarantino'
    },
    {
      question: 'Which sitcom takes place in Springfield?',
      options: ['Family Guy','South Park','The Simpsons','American Dad'],
      answer: 'The Simpsons'
    },
    {
      question: 'Who played Jack Sparrow?',
      options: ['Orlando Bloom','Johnny Depp','Brad Pitt','Tom Cruise'],
      answer: 'Johnny Depp'
    },
    {
      question: 'Which film franchise features Neo?',
      options: ['Inception','The Matrix','Blade Runner','Tron'],
      answer: 'The Matrix'
    },
    {
      question: 'Which singer released the album "1989"?',
      options: ['Ariana Grande','Taylor Swift','Rihanna','Dua Lipa'],
      answer: 'Taylor Swift'
    },
    {
      question: 'Which animated film features Woody?',
      options: ['Toy Story','Shrek','Cars','Frozen'],
      answer: 'Toy Story'
    }
  ]],

  /*
  ---------------------------------------------------
  CHALLENGE 4 — HISTORY
  ---------------------------------------------------
  */

  4: [[
    {
      question: 'Who was the first President of the United States?',
      options: [
        'Abraham Lincoln',
        'Thomas Jefferson',
        'George Washington',
        'John Adams'
      ],
      answer: 'George Washington'
    },
    {
      question: 'In which year did World War II end?',
      options: ['1943','1945','1947','1950'],
      answer: '1945'
    },
    {
      question: 'Which civilization built the pyramids of Giza?',
      options: ['Mesopotamians','Romans','Egyptians','Mayans'],
      answer: 'Egyptians'
    },
    {
      question: 'The French Revolution began in which year?',
      options: ['1776','1789','1804','1812'],
      answer: '1789'
    },
    {
      question: 'Which British Prime Minister led during most of WWII?',
      options: ['Neville Chamberlain','Winston Churchill','Margaret Thatcher','Tony Blair'],
      answer: 'Winston Churchill'
    },
    {
      question: 'Which ship sank in 1912 after hitting an iceberg?',
      options: ['Lusitania','Britannic','Titanic','Queen Mary'],
      answer: 'Titanic'
    },
    {
      question: 'The Renaissance began in which country?',
      options: ['France','Germany','Italy','Spain'],
      answer: 'Italy'
    },
    {
      question: 'Which wall fell in 1989?',
      options: ['Hadrian’s Wall','Berlin Wall','Great Wall','Western Wall'],
      answer: 'Berlin Wall'
    },
    {
      question: 'Which empire was ruled by Julius Caesar?',
      options: ['Greek','Roman','Ottoman','British'],
      answer: 'Roman'
    },
    {
      question: 'World War I ended in which year?',
      options: ['1917','1918','1919','1920'],
      answer: '1918'
    }
  ]],

  /*
  ---------------------------------------------------
  CHALLENGE 5 — SMART NUMBERS
  ---------------------------------------------------
  */

  5: [[
    { question:'What is 15% of 200?', options:['25','30','35','40'], answer:'30'},
    { question:'60 km per hour for 2 hours equals?', options:['100','110','120','140'], answer:'120'},
    { question:'Next number: 2,4,8,16,?', options:['24','28','32','36'], answer:'32'},
    { question:'$80 reduced by 25% equals?', options:['55','60','65','70'], answer:'60'},
    { question:'Square of 12?', options:['124','134','144','154'], answer:'144'},
    { question:'Average of 2,4,6?', options:['3','4','5','6'], answer:'4'},
    { question:'3x = 21, x = ?', options:['6','7','8','9'], answer:'7'},
    { question:'9×7?', options:['54','63','72','81'], answer:'63'},
    { question:'Area of 10×5 rectangle?', options:['40','45','50','55'], answer:'50'},
    { question:'Half of 250?', options:['100','110','120','125'], answer:'125'}
  ]],

  /*
  ---------------------------------------------------
  CHALLENGE 6 — SCIENCE
  ---------------------------------------------------
  */

  6: [[
    { question:'What planet is known as the Red Planet?', options:['Mars','Venus','Jupiter','Saturn'], answer:'Mars'},
    { question:'Humans breathe which gas?', options:['Nitrogen','Oxygen','Hydrogen','Helium'], answer:'Oxygen'},
    { question:'Chemical symbol for gold?', options:['Ag','Au','Gd','Go'], answer:'Au'},
    { question:'Which organ pumps blood?', options:['Lungs','Brain','Heart','Liver'], answer:'Heart'},
    { question:'Largest planet?', options:['Earth','Saturn','Jupiter','Neptune'], answer:'Jupiter'},
    { question:'Force keeping planets in orbit?', options:['Magnetism','Friction','Gravity','Radiation'], answer:'Gravity'},
    { question:'Water freezes at?', options:['0°C','10°C','-5°C','32°C'], answer:'0°C'},
    { question:'Plants make food using?', options:['Respiration','Digestion','Photosynthesis','Fermentation'], answer:'Photosynthesis'},
    { question:'Cell part containing DNA?', options:['Cytoplasm','Nucleus','Membrane','Ribosome'], answer:'Nucleus'},
    { question:'Sunlight helps produce which vitamin?', options:['A','B12','C','D'], answer:'Vitamin D'}
  ]],

  /*
  ---------------------------------------------------
  CHALLENGE 7 — WORLD GEOGRAPHY
  ---------------------------------------------------
  */

  7: [[
    { question:'Which country has the most time zones?', options:['Russia','United States','France','United Kingdom'], answer:'France'},
    { question:'Mount Kilimanjaro is in which country?', options:['Kenya','Tanzania','Uganda','Ethiopia'], answer:'Tanzania'},
    { question:'Which river flows through Budapest?', options:['Rhine','Danube','Seine','Thames'], answer:'Danube'},
    { question:'Smallest country in the world?', options:['Monaco','Vatican City','San Marino','Liechtenstein'], answer:'Vatican City'},
    { question:'Largest hot desert?', options:['Gobi','Kalahari','Sahara','Atacama'], answer:'Sahara'},
    { question:'Sea between Europe and Africa?', options:['Baltic','Black','Mediterranean','Caribbean'], answer:'Mediterranean'},
    { question:'Land of the Rising Sun?', options:['China','Japan','South Korea','Thailand'], answer:'Japan'},
    { question:'Largest US state by area?', options:['Texas','California','Alaska','Montana'], answer:'Alaska'},
    { question:'Casablanca is in which country?', options:['Spain','Morocco','Tunisia','Egypt'], answer:'Morocco'},
    { question:'The Andes are located on which continent?', options:['North America','Europe','South America','Asia'], answer:'South America'}
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
