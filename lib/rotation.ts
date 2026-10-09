// lib/rotation.ts
import type { Puzzle } from './puzzles'

/*
Rotation System
---------------
• Challenges rotate every day
• Each challenge contains 4 question sets
• Rotation changes at midnight Brisbane / AEST
*/

const ROTATION_DAYS = 1
const AEST_OFFSET_MS = 10 * 60 * 60 * 1000

// Keep A/B/C live while the expanded question/fact bank is deployed.
// Change this to 4 only after lib/facts.ts and the 9-challenge UI are ready.
export const ACTIVE_ROTATION_SET_COUNT = 3

function getDayIndex(date: Date = new Date()): number {
  const start = Date.UTC(2025, 0, 1)

  // Shift the supplied time into Brisbane / AEST before extracting the date.
  // Brisbane remains UTC+10 year-round.
  const aestDate = new Date(date.getTime() + AEST_OFFSET_MS)

  const today = Date.UTC(
    aestDate.getUTCFullYear(),
    aestDate.getUTCMonth(),
    aestDate.getUTCDate()
  )

  const diff = today - start

  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

function getRotationIndex(
  date: Date = new Date(),
  setCount: number
): number {
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

    /*
    SET A
    */

    [
      {
        question: 'Which country is home to the Great Barrier Reef?',
        options: ['Australia', 'Indonesia', 'Philippines', 'Thailand'],
        answer: 'Australia'
      },
      {
        question: 'What is the smallest prime number?',
        options: ['0', '1', '2', '3'],
        answer: '2'
      },
      {
        question: 'What is the capital city of Canada?',
        options: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'],
        answer: 'Ottawa'
      },
      {
        question: 'Who wrote the novel "1984"?',
        options: [
          'George Orwell',
          'Aldous Huxley',
          'Ray Bradbury',
          'Ernest Hemingway'
        ],
        answer: 'George Orwell'
      },
      {
        question: 'What is the chemical symbol for potassium?',
        options: ['P', 'K', 'Pt', 'Po'],
        answer: 'K'
      },
      {
        question: 'Who painted the Mona Lisa?',
        options: [
          'Leonardo da Vinci',
          'Michelangelo',
          'Vincent van Gogh',
          'Pablo Picasso'
        ],
        answer: 'Leonardo da Vinci'
      },
      {
        question: 'What currency is used in Switzerland?',
        options: [
          'Euro',
          'Swiss franc',
          'Pound sterling',
          'Krone'
        ],
        answer: 'Swiss franc'
      },
      {
        question: 'How many rings appear on the Olympic symbol?',
        options: ['4', '6', '5', '7'],
        answer: '5'
      },
      {
        question: 'Which instrument traditionally has 88 keys?',
        options: [
          'Violin',
          'Piano',
          'Trumpet',
          'Clarinet'
        ],
        answer: 'Piano'
      },
      {
        question: 'Which ocean is the largest by surface area?',
        options: [
          'Atlantic Ocean',
          'Indian Ocean',
          'Arctic Ocean',
          'Pacific Ocean'
        ],
        answer: 'Pacific Ocean'
      }
    ],

    /*
    SET B
    */

    [
      {
        question: 'On which continent is the Sahara Desert located?',
        options: [
          'Africa',
          'Asia',
          'Australia',
          'South America'
        ],
        answer: 'Africa'
      },
      {
        question: 'What is the largest animal known to live on Earth?',
        options: [
          'African elephant',
          'Giraffe',
          'Whale shark',
          'Blue whale'
        ],
        answer: 'Blue whale'
      },
      {
        question: 'Mount Fuji is located in which country?',
        options: [
          'Japan',
          'China',
          'South Korea',
          'Thailand'
        ],
        answer: 'Japan'
      },
      {
        question: 'What is the capital city of Türkiye?',
        options: [
          'Istanbul',
          'Izmir',
          'Ankara',
          'Antalya'
        ],
        answer: 'Ankara'
      },
      {
        question: 'What is the longest bone in the human body?',
        options: [
          'Humerus',
          'Tibia',
          'Radius',
          'Femur'
        ],
        answer: 'Femur'
      },
      {
        question: 'Who established the prizes now known as the Nobel Prizes?',
        options: [
          'Isaac Newton',
          'Alfred Nobel',
          'Louis Pasteur',
          'Alexander Fleming'
        ],
        answer: 'Alfred Nobel'
      },
      {
        question: 'Which is the largest planet in our solar system?',
        options: [
          'Jupiter',
          'Earth',
          'Saturn',
          'Neptune'
        ],
        answer: 'Jupiter'
      },
      {
        question: 'In which year was Magna Carta first sealed?',
        options: [
          '1066',
          '1492',
          '1215',
          '1776'
        ],
        answer: '1215'
      },
      {
        question: 'How many pieces does each player begin with in a standard game of chess?',
        options: ['12', '16', '14', '18'],
        answer: '16'
      },
      {
        question: 'Which element has the atomic number 79?',
        options: [
          'Silver',
          'Copper',
          'Gold',
          'Platinum'
        ],
        answer: 'Gold'
      }
    ],

    /*
    SET C
    */

    [
      {
        question: 'What is the capital city of Australia?',
        options: [
          'Sydney',
          'Canberra',
          'Melbourne',
          'Brisbane'
        ],
        answer: 'Canberra'
      },
      {
        question: 'Machu Picchu is located in which country?',
        options: [
          'Peru',
          'Chile',
          'Mexico',
          'Bolivia'
        ],
        answer: 'Peru'
      },
      {
        question: 'The Suez Canal connects the Mediterranean Sea with which other sea?',
        options: [
          'Black Sea',
          'Red Sea',
          'Arabian Sea',
          'Caspian Sea'
        ],
        answer: 'Red Sea'
      },
      {
        question: 'Who wrote "Pride and Prejudice"?',
        options: [
          'Charlotte Brontë',
          'Mary Shelley',
          'Virginia Woolf',
          'Jane Austen'
        ],
        answer: 'Jane Austen'
      },
      {
        question: 'Which naturally occurring material is traditionally regarded as the hardest?',
        options: [
          'Quartz',
          'Granite',
          'Diamond',
          'Iron'
        ],
        answer: 'Diamond'
      },
      {
        question: 'What is the official language spoken by the majority of people in Brazil?',
        options: [
          'Spanish',
          'French',
          'Italian',
          'Portuguese'
        ],
        answer: 'Portuguese'
      },
      {
        question: 'How many items are in a dozen?',
        options: ['10', '20', '12', '24'],
        answer: '12'
      },
      {
        question: 'In which country did the ancient Olympic Games originate?',
        options: [
          'Greece',
          'Italy',
          'Egypt',
          'Turkey'
        ],
        answer: 'Greece'
      },
      {
        question: 'What is the SI unit of electric current?',
        options: [
          'Volt',
          'Watt',
          'Ampere',
          'Ohm'
        ],
        answer: 'Ampere'
      },
      {
        question: 'Which compass direction is directly opposite southwest?',
        options: [
          'Northwest',
          'Northeast',
          'Southeast',
          'North'
        ],
        answer: 'Northeast'
      }
    ],

    /*
    SET D
    */

    [
      {
        question: 'Which metal is liquid at typical room temperature?',
        options: [
          'Mercury',
          'Iron',
          'Aluminium',
          'Copper'
        ],
        answer: 'Mercury'
      },
      {
        question: 'What is the capital city of Portugal?',
        options: [
          'Madrid',
          'Porto',
          'Lisbon',
          'Barcelona'
        ],
        answer: 'Lisbon'
      },
      {
        question: 'What is the largest organ of the human body?',
        options: [
          'Liver',
          'Skin',
          'Lungs',
          'Heart'
        ],
        answer: 'Skin'
      },
      {
        question: 'How many cards are in a standard deck of playing cards, excluding jokers?',
        options: [
          '48',
          '50',
          '54',
          '52'
        ],
        answer: '52'
      },
      {
        question: 'Who painted "The Starry Night"?',
        options: [
          'Vincent van Gogh',
          'Claude Monet',
          'Pablo Picasso',
          'Salvador Dalí'
        ],
        answer: 'Vincent van Gogh'
      },
      {
        question: 'What currency is used in South Korea?',
        options: [
          'Yen',
          'South Korean won',
          'Yuan',
          'Baht'
        ],
        answer: 'South Korean won'
      },
      {
        question: 'At standard atmospheric pressure, water boils at what temperature on the Celsius scale?',
        options: [
          '90°C',
          '110°C',
          '120°C',
          '100°C'
        ],
        answer: '100°C'
      },
      {
        question: 'Who wrote "The Hobbit"?',
        options: [
          'C. S. Lewis',
          'George R. R. Martin',
          'J. R. R. Tolkien',
          'J. K. Rowling'
        ],
        answer: 'J. R. R. Tolkien'
      },
      {
        question: 'Which planet is commonly known as the Red Planet?',
        options: [
          'Mars',
          'Venus',
          'Jupiter',
          'Mercury'
        ],
        answer: 'Mars'
      },
      {
        question: 'How many squares are on a standard chessboard?',
        options: [
          '56',
          '64',
          '72',
          '81'
        ],
        answer: '64'
      }
    ]

  ],

  /*
  ---------------------------------------------------
  CHALLENGE 2 — WORD & LANGUAGE
  ---------------------------------------------------
  */

  2: [

    /*
    SET A
    */

    [
      {
        question: 'Which word is closest in meaning to "reluctant"?',
        options: [
          'Unwilling',
          'Excited',
          'Careless',
          'Certain'
        ],
        answer: 'Unwilling'
      },
      {
        question: 'Which sentence uses "their" correctly?',
        options: [
          'Their going to the beach.',
          'The players packed their equipment.',
          'Put the books over their.',
          'Their is no reason to worry.'
        ],
        answer: 'The players packed their equipment.'
      },
      {
        question: 'Which word is an antonym of "scarce"?',
        options: [
          'Rare',
          'Limited',
          'Abundant',
          'Missing'
        ],
        answer: 'Abundant'
      },
      {
        question: 'What does the idiom "break the ice" usually mean?',
        options: [
          'Damage something frozen',
          'End an argument',
          'Reveal a secret',
          'Start a friendly conversation'
        ],
        answer: 'Start a friendly conversation'
      },
      {
        question: 'Which word is spelled correctly?',
        options: [
          'Accommodate',
          'Accomodate',
          'Acommodate',
          'Accommadate'
        ],
        answer: 'Accommodate'
      },
      {
        question: 'Which sentence is punctuated correctly?',
        options: [
          'After dinner we watched a movie.',
          'After, dinner we watched a movie.',
          'After dinner we, watched a movie.',
          'After dinner, we watched a movie.'
        ],
        answer: 'After dinner, we watched a movie.'
      },
      {
        question: 'Which word best completes the sentence: "The evidence had a significant ___ on the decision."',
        options: [
          'Affect',
          'Effect',
          'Effort',
          'Event'
        ],
        answer: 'Effect'
      },
      {
        question: 'Which of these is an adjective?',
        options: [
          'Carefully',
          'Brightness',
          'Curious',
          'Imagine'
        ],
        answer: 'Curious'
      },
      {
        question: 'What does the prefix "pre-" usually mean?',
        options: [
          'After',
          'Against',
          'Again',
          'Before'
        ],
        answer: 'Before'
      },
      {
        question: 'Which pair of words are homophones?',
        options: [
          'Sea and see',
          'Run and walk',
          'Bright and dark',
          'House and home'
        ],
        answer: 'Sea and see'
      }
    ],

    /*
    SET B
    */

    [
      {
        question: 'Which word is closest in meaning to "meticulous"?',
        options: [
          'Careless',
          'Impatient',
          'Confused',
          'Very careful'
        ],
        answer: 'Very careful'
      },
      {
        question: 'Which sentence is grammatically correct?',
        options: [
          'Neither of the answers is correct.',
          'Neither of the answers are correct.',
          'Neither of the answer is correct.',
          'Neither answers are correct.'
        ],
        answer: 'Neither of the answers is correct.'
      },
      {
        question: 'What does the expression "once in a blue moon" mean?',
        options: [
          'Every evening',
          'Without warning',
          'Very rarely',
          'At exactly midnight'
        ],
        answer: 'Very rarely'
      },
      {
        question: 'Which word means "to make something less severe or serious"?',
        options: [
          'Aggravate',
          'Mitigate',
          'Duplicate',
          'Navigate'
        ],
        answer: 'Mitigate'
      },
      {
        question: 'Which sentence uses "its" correctly?',
        options: [
          "The dog wagged it's tail.",
          "Its going to rain tonight.",
          'The company changed its logo.',
          "The tree lost it's leaves."
        ],
        answer: 'The company changed its logo.'
      },
      {
        question: 'Which word contains a suffix meaning "without"?',
        options: [
          'Fearful',
          'Fearless',
          'Fearfully',
          'Fearsome'
        ],
        answer: 'Fearless'
      },
      {
        question: 'Which word is the odd one out?',
        options: [
          'Whisper',
          'Shout',
          'Speak',
          'Listen'
        ],
        answer: 'Listen'
      },
      {
        question: 'Which word best completes the sentence: "She gave a very ___ explanation of the complicated idea."',
        options: [
          'Clearly',
          'Clear',
          'Clearing',
          'Cleared'
        ],
        answer: 'Clear'
      },
      {
        question: 'What is the plural of "criterion"?',
        options: [
          'Criteria',
          'Criterions',
          'Criterias',
          'Criterion'
        ],
        answer: 'Criteria'
      },
      {
        question: 'Which word is spelled correctly?',
        options: [
          'Definately',
          'Definitly',
          'Definitely',
          'Definatly'
        ],
        answer: 'Definitely'
      }
    ],

    /*
    SET C
    */

    [
      {
        question: 'What does "ambiguous" mean?',
        options: [
          'Extremely obvious',
          'Impossible to hear',
          'Completely incorrect',
          'Having more than one possible meaning'
        ],
        answer: 'Having more than one possible meaning'
      },
      {
        question: 'Which sentence uses "fewer" correctly?',
        options: [
          'We had fewer customers today.',
          'There is fewer water in the bottle.',
          'She drank fewer coffee than yesterday.',
          'There was fewer traffic this morning.'
        ],
        answer: 'We had fewer customers today.'
      },
      {
        question: 'Which word is closest in meaning to "concise"?',
        options: [
          'Confusing',
          'Brief',
          'Emotional',
          'Repetitive'
        ],
        answer: 'Brief'
      },
      {
        question: 'What does the phrase "read between the lines" mean?',
        options: [
          'Skip every second line',
          'Read very quickly',
          'Look for an implied meaning',
          'Correct spelling mistakes'
        ],
        answer: 'Look for an implied meaning'
      },
      {
        question: 'Which sentence uses the apostrophe correctly?',
        options: [
          'The dogs collar was red.',
          "The dog's collar was red.",
          "The dogs' collar was red.",
          "The dog,s collar was red."
        ],
        answer: "The dog's collar was red."
      },
      {
        question: 'Which word is an antonym of "transparent" when describing an explanation?',
        options: [
          'Obscure',
          'Clear',
          'Open',
          'Direct'
        ],
        answer: 'Obscure'
      },
      {
        question: 'Which word best completes the sentence: "The new policy will ___ every employee."',
        options: [
          'Effect',
          'Effects',
          'Affected',
          'Affect'
        ],
        answer: 'Affect'
      },
      {
        question: 'Which of these is a conjunction?',
        options: [
          'Although',
          'Quickly',
          'Table',
          'Bright'
        ],
        answer: 'Although'
      },
      {
        question: 'Which analogy is correct: Bird is to fly as fish is to ___?',
        options: [
          'Nest',
          'Feather',
          'Swim',
          'Wing'
        ],
        answer: 'Swim'
      },
      {
        question: 'Which word is spelled correctly?',
        options: [
          'Seperate',
          'Separate',
          'Sepperate',
          'Seperrate'
        ],
        answer: 'Separate'
      }
    ],

    /*
    SET D
    */

    [
      {
        question: 'Which word is closest in meaning to "pragmatic"?',
        options: [
          'Idealistic',
          'Careless',
          'Practical',
          'Emotional'
        ],
        answer: 'Practical'
      },
      {
        question: 'Which sentence uses "whom" correctly?',
        options: [
          'To whom did you speak?',
          'Whom is coming to dinner?',
          'Whom wrote this letter?',
          'Whom will lead the team?'
        ],
        answer: 'To whom did you speak?'
      },
      {
        question: 'Which word is an antonym of "expand"?',
        options: [
          'Extend',
          'Increase',
          'Enlarge',
          'Contract'
        ],
        answer: 'Contract'
      },
      {
        question: 'What does the idiom "hit the nail on the head" mean?',
        options: [
          'Avoid the main issue',
          'Describe something exactly',
          'Work very slowly',
          'Make a careless mistake'
        ],
        answer: 'Describe something exactly'
      },
      {
        question: 'Which word is spelled correctly?',
        options: [
          'Consciencious',
          'Conscientous',
          'Conscientious',
          'Conscentious'
        ],
        answer: 'Conscientious'
      },
      {
        question: 'What is the plural of "analysis"?',
        options: [
          'Analysises',
          'Analysis',
          'Analysies',
          'Analyses'
        ],
        answer: 'Analyses'
      },
      {
        question: 'Which of these words is an adjective?',
        options: [
          'Vividly',
          'Vivid',
          'Vividness',
          'Envision'
        ],
        answer: 'Vivid'
      },
      {
        question: 'What does the prefix "anti-" usually mean?',
        options: [
          'Against',
          'Before',
          'Together',
          'Inside'
        ],
        answer: 'Against'
      },
      {
        question: 'Which sentence uses a semicolon correctly?',
        options: [
          'The rain; stopped and we went outside.',
          'The rain stopped; because we went outside.',
          'The rain stopped; we went outside.',
          'The rain stopped we; went outside.'
        ],
        answer: 'The rain stopped; we went outside.'
      },
      {
        question: 'What does "complement" most commonly mean as a noun?',
        options: [
          'A spoken expression of praise',
          'A formal complaint',
          'A direct contradiction',
          'Something that completes or enhances another thing'
        ],
        answer: 'Something that completes or enhances another thing'
      }
    ]

  ],

  /*
  ---------------------------------------------------
  CHALLENGE 3 — POP CULTURE
  ---------------------------------------------------
  */

  3: [

    /*
    SET A
    */

    [
      {
        question: 'Which actor played the Joker in the 2008 film "The Dark Knight"?',
        options: [
          'Heath Ledger',
          'Joaquin Phoenix',
          'Jared Leto',
          'Christian Bale'
        ],
        answer: 'Heath Ledger'
      },
      {
        question: 'Which band released the album "Abbey Road"?',
        options: [
          'The Rolling Stones',
          'Pink Floyd',
          'Queen',
          'The Beatles'
        ],
        answer: 'The Beatles'
      },
      {
        question: 'Which television series is primarily set in the fictional continents of Westeros and Essos?',
        options: [
          'The Witcher',
          'Vikings',
          'Game of Thrones',
          'The Rings of Power'
        ],
        answer: 'Game of Thrones'
      },
      {
        question: 'Which singer is widely known by the nickname "King of Pop"?',
        options: [
          'Michael Jackson',
          'Elvis Presley',
          'Prince',
          'Bruno Mars'
        ],
        answer: 'Michael Jackson'
      },
      {
        question: 'Who directed the film "Pulp Fiction"?',
        options: [
          'Martin Scorsese',
          'Quentin Tarantino',
          'Christopher Nolan',
          'Steven Spielberg'
        ],
        answer: 'Quentin Tarantino'
      },
      {
        question: 'Which animated television series is set in the fictional town of Springfield?',
        options: [
          'Family Guy',
          'South Park',
          'The Simpsons',
          'American Dad!'
        ],
        answer: 'The Simpsons'
      },
      {
        question: 'Which actor plays Captain Jack Sparrow in the "Pirates of the Caribbean" films?',
        options: [
          'Orlando Bloom',
          'Brad Pitt',
          'Tom Cruise',
          'Johnny Depp'
        ],
        answer: 'Johnny Depp'
      },
      {
        question: 'Neo is the central character in which science-fiction film franchise?',
        options: [
          'The Matrix',
          'Inception',
          'Blade Runner',
          'Tron'
        ],
        answer: 'The Matrix'
      },
      {
        question: 'Which singer released the album "1989"?',
        options: [
          'Ariana Grande',
          'Rihanna',
          'Taylor Swift',
          'Dua Lipa'
        ],
        answer: 'Taylor Swift'
      },
      {
        question: 'Woody and Buzz Lightyear are characters from which animated film series?',
        options: [
          'Shrek',
          'Toy Story',
          'Cars',
          'Frozen'
        ],
        answer: 'Toy Story'
      }
    ],

    /*
    SET B
    */

    [
      {
        question: 'Which actor portrayed Tony Stark, also known as Iron Man, in the Marvel Cinematic Universe?',
        options: [
          'Chris Evans',
          'Mark Ruffalo',
          'Chris Hemsworth',
          'Robert Downey Jr.'
        ],
        answer: 'Robert Downey Jr.'
      },
      {
        question: 'Which band originally recorded "Bohemian Rhapsody"?',
        options: [
          'The Beatles',
          'Queen',
          'U2',
          'Coldplay'
        ],
        answer: 'Queen'
      },
      {
        question: 'Which actor is best known for portraying Wolverine in the "X-Men" film series?',
        options: [
          'Hugh Jackman',
          'Tom Hardy',
          'Brad Pitt',
          'Keanu Reeves'
        ],
        answer: 'Hugh Jackman'
      },
      {
        question: 'Which 1993 film features a theme park populated by cloned dinosaurs?',
        options: [
          'Avatar',
          'Jaws',
          'Jurassic Park',
          'King Kong'
        ],
        answer: 'Jurassic Park'
      },
      {
        question: 'Which singer released the hit song "Rolling in the Deep"?',
        options: [
          'Beyoncé',
          'Adele',
          'Rihanna',
          'Sia'
        ],
        answer: 'Adele'
      },
      {
        question: 'The character Eleven appears in which television series?',
        options: [
          'Dark',
          'Lost',
          'Stranger Things',
          'Westworld'
        ],
        answer: 'Stranger Things'
      },
      {
        question: 'Batman is most closely associated with which fictional city?',
        options: [
          'Star City',
          'Metropolis',
          'Central City',
          'Gotham City'
        ],
        answer: 'Gotham City'
      },
      {
        question: 'What is the name of the coffee shop frequently visited by the characters in "Friends"?',
        options: [
          'Monk’s Café',
          'Luke’s Diner',
          'Central Perk',
          'The Peach Pit'
        ],
        answer: 'Central Perk'
      },
      {
        question: 'Pandora is the setting for much of which film franchise?',
        options: [
          'Titanic',
          'Avatar',
          'Gladiator',
          'Interstellar'
        ],
        answer: 'Avatar'
      },
      {
        question: 'Coldplay was formed in which country?',
        options: [
          'United Kingdom',
          'United States',
          'Australia',
          'Canada'
        ],
        answer: 'United Kingdom'
      }
    ],

    /*
    SET C
    */

    [
      {
        question: 'What is the name of the school attended by Harry Potter?',
        options: [
          'Beauxbatons',
          'Hogwarts',
          'Durmstrang',
          'Ilvermorny'
        ],
        answer: 'Hogwarts'
      },
      {
        question: 'The One Ring is central to the story of which fantasy film trilogy?',
        options: [
          'The Chronicles of Narnia',
          'Harry Potter',
          'The Hunger Games',
          'The Lord of the Rings'
        ],
        answer: 'The Lord of the Rings'
      },
      {
        question: 'Beyoncé first rose to widespread fame as a member of which group?',
        options: [
          'Destiny’s Child',
          'TLC',
          'En Vogue',
          'The Pussycat Dolls'
        ],
        answer: 'Destiny’s Child'
      },
      {
        question: 'Which actor played Walter White in the television series "Breaking Bad"?',
        options: [
          'Aaron Paul',
          'Bob Odenkirk',
          'Bryan Cranston',
          'Jon Hamm'
        ],
        answer: 'Bryan Cranston'
      },
      {
        question: 'Wakanda is the fictional home nation of which Marvel superhero?',
        options: [
          'Black Panther',
          'Doctor Strange',
          'Spider-Man',
          'Ant-Man'
        ],
        answer: 'Black Panther'
      },
      {
        question: 'What type of car is used as the time machine in "Back to the Future"?',
        options: [
          'Ferrari',
          'Mustang',
          'Porsche',
          'DeLorean'
        ],
        answer: 'DeLorean'
      },
      {
        question: 'Which actor provides the English-language voice of Shrek in the original film series?',
        options: [
          'Eddie Murphy',
          'Mike Myers',
          'Jim Carrey',
          'Ben Stiller'
        ],
        answer: 'Mike Myers'
      },
      {
        question: 'Which yellow Pokémon is one of the best-known mascots of the Pokémon franchise?',
        options: [
          'Charmander',
          'Squirtle',
          'Pikachu',
          'Jigglypuff'
        ],
        answer: 'Pikachu'
      },
      {
        question: 'Who directed the 2023 film "Barbie"?',
        options: [
          'Sofia Coppola',
          'Patty Jenkins',
          'Chloé Zhao',
          'Greta Gerwig'
        ],
        answer: 'Greta Gerwig'
      },
      {
        question: 'Which fictional archaeologist is known for carrying a whip and wearing a fedora?',
        options: [
          'Rick O’Connell',
          'Indiana Jones',
          'Allan Quatermain',
          'Nathan Drake'
        ],
        answer: 'Indiana Jones'
      }
    ],

    /*
    SET D
    */

    [
      {
        question: 'Which actor played Frodo Baggins in Peter Jackson’s "The Lord of the Rings" film trilogy?',
        options: [
          'Elijah Wood',
          'Daniel Radcliffe',
          'Orlando Bloom',
          'Tobey Maguire'
        ],
        answer: 'Elijah Wood'
      },
      {
        question: 'Which singer released the 1989 album "Like a Prayer"?',
        options: [
          'Cyndi Lauper',
          'Whitney Houston',
          'Janet Jackson',
          'Madonna'
        ],
        answer: 'Madonna'
      },
      {
        question: 'In the U.S. version of "The Office", what company employs the main characters?',
        options: [
          'Sterling Cooper',
          'Waystar Royco',
          'Dunder Mifflin',
          'Los Pollos Hermanos'
        ],
        answer: 'Dunder Mifflin'
      },
      {
        question: 'Who directed the 1975 film "Jaws"?',
        options: [
          'George Lucas',
          'Steven Spielberg',
          'Francis Ford Coppola',
          'Ridley Scott'
        ],
        answer: 'Steven Spielberg'
      },
      {
        question: 'Which band released "Smells Like Teen Spirit"?',
        options: [
          'Nirvana',
          'Pearl Jam',
          'Soundgarden',
          'Green Day'
        ],
        answer: 'Nirvana'
      },
      {
        question: 'Katniss Everdeen is the central character of which franchise?',
        options: [
          'Divergent',
          'Twilight',
          'The Hunger Games',
          'The Maze Runner'
        ],
        answer: 'The Hunger Games'
      },
      {
        question: 'Which actor played the title character in the 1994 film "Forrest Gump"?',
        options: [
          'Robin Williams',
          'Tom Hanks',
          'Kevin Costner',
          'Harrison Ford'
        ],
        answer: 'Tom Hanks'
      },
      {
        question: 'The desert planet Tatooine belongs to which fictional universe?',
        options: [
          'Star Trek',
          'Dune',
          'Guardians of the Galaxy',
          'Star Wars'
        ],
        answer: 'Star Wars'
      },
      {
        question: 'Which singer released the visual album "Lemonade" in 2016?',
        options: [
          'Beyoncé',
          'Adele',
          'Rihanna',
          'Lady Gaga'
        ],
        answer: 'Beyoncé'
      },
      {
        question: 'Sheldon Cooper is a main character in which television sitcom?',
        options: [
          'How I Met Your Mother',
          'Modern Family',
          'The Big Bang Theory',
          'Brooklyn Nine-Nine'
        ],
        answer: 'The Big Bang Theory'
      }
    ]

  ],

  /*
  ---------------------------------------------------
  CHALLENGE 4 — HISTORY
  ---------------------------------------------------
  */

  4: [

    /*
    SET A
    */

    [
      {
        question: 'Who was the first President of the United States?',
        options: [
          'Abraham Lincoln',
          'Thomas Jefferson',
          'John Adams',
          'George Washington'
        ],
        answer: 'George Washington'
      },
      {
        question: 'In which year did World War II end?',
        options: [
          '1943',
          '1945',
          '1947',
          '1950'
        ],
        answer: '1945'
      },
      {
        question: 'Which ancient civilization built the pyramids at Giza?',
        options: [
          'Romans',
          'Greeks',
          'Egyptians',
          'Persians'
        ],
        answer: 'Egyptians'
      },
      {
        question: 'In which year did the French Revolution begin?',
        options: [
          '1789',
          '1776',
          '1804',
          '1815'
        ],
        answer: '1789'
      },
      {
        question: 'Who became British Prime Minister in May 1940 and led Britain for most of World War II?',
        options: [
          'Neville Chamberlain',
          'Clement Attlee',
          'Anthony Eden',
          'Winston Churchill'
        ],
        answer: 'Winston Churchill'
      },
      {
        question: 'Which passenger liner struck an iceberg and sank in 1912?',
        options: [
          'Titanic',
          'Lusitania',
          'Britannic',
          'Queen Mary'
        ],
        answer: 'Titanic'
      },
      {
        question: 'The Renaissance first developed most strongly in which part of Europe?',
        options: [
          'Scandinavia',
          'Italian city-states',
          'British Isles',
          'Iberian Peninsula'
        ],
        answer: 'Italian city-states'
      },
      {
        question: 'Which major Cold War barrier was opened in November 1989?',
        options: [
          'Hadrian’s Wall',
          'Great Wall of China',
          'Berlin Wall',
          'Western Wall'
        ],
        answer: 'Berlin Wall'
      },
      {
        question: 'Julius Caesar was a leading political and military figure of which Roman period?',
        options: [
          'Roman Republic',
          'Byzantine Empire',
          'Holy Roman Empire',
          'Roman Kingdom'
        ],
        answer: 'Roman Republic'
      },
      {
        question: 'In which year did the armistice end major fighting in World War I?',
        options: [
          '1916',
          '1917',
          '1919',
          '1918'
        ],
        answer: '1918'
      }
    ],

    /*
    SET B
    */

    [
      {
        question: 'Which explorer led the 1492 voyage from Spain that reached the Caribbean?',
        options: [
          'Ferdinand Magellan',
          'Christopher Columbus',
          'James Cook',
          'Amerigo Vespucci'
        ],
        answer: 'Christopher Columbus'
      },
      {
        question: 'The Great Wall was built and expanded by dynasties in which country?',
        options: [
          'Japan',
          'Korea',
          'China',
          'Vietnam'
        ],
        answer: 'China'
      },
      {
        question: 'Who led the Soviet Union for most of World War II?',
        options: [
          'Vladimir Lenin',
          'Joseph Stalin',
          'Nikita Khrushchev',
          'Leon Trotsky'
        ],
        answer: 'Joseph Stalin'
      },
      {
        question: 'Which ancient Greek philosopher tutored Alexander the Great?',
        options: [
          'Plato',
          'Socrates',
          'Pythagoras',
          'Aristotle'
        ],
        answer: 'Aristotle'
      },
      {
        question: 'Genghis Khan founded and became the first Great Khan of which empire?',
        options: [
          'Roman Empire',
          'Mongol Empire',
          'Ottoman Empire',
          'Persian Empire'
        ],
        answer: 'Mongol Empire'
      },
      {
        question: 'Who became the first person to walk on the Moon in 1969?',
        options: [
          'Neil Armstrong',
          'Buzz Aldrin',
          'Yuri Gagarin',
          'John Glenn'
        ],
        answer: 'Neil Armstrong'
      },
      {
        question: 'Which ancient amphitheatre is one of the best-known landmarks of Rome?',
        options: [
          'Pantheon',
          'Parthenon',
          'Acropolis',
          'Colosseum'
        ],
        answer: 'Colosseum'
      },
      {
        question: 'At which battle was Napoleon Bonaparte finally defeated in 1815?',
        options: [
          'Waterloo',
          'Verdun',
          'Trafalgar',
          'Somme'
        ],
        answer: 'Waterloo'
      },
      {
        question: 'What name is commonly given to the picture-based writing system used in ancient Egypt?',
        options: [
          'Runes',
          'Cuneiform',
          'Hieroglyphs',
          'Latin'
        ],
        answer: 'Hieroglyphs'
      },
      {
        question: 'Which ancient Roman city was buried by the eruption of Mount Vesuvius in 79 CE?',
        options: [
          'Pompeii',
          'Athens',
          'Carthage',
          'Sparta'
        ],
        answer: 'Pompeii'
      }
    ],

    /*
    SET C
    */

    [
      {
        question: 'Which ancient Mesopotamian civilization is closely associated with the earliest development of cuneiform writing?',
        options: [
          'Vikings',
          'Phoenicians',
          'Sumerians',
          'Romans'
        ],
        answer: 'Sumerians'
      },
      {
        question: 'Which ruler is associated with one of the earliest surviving written law codes?',
        options: [
          'Pericles',
          'Augustus',
          'Cleopatra',
          'Hammurabi'
        ],
        answer: 'Hammurabi'
      },
      {
        question: 'Which trade network historically connected East Asia with Central Asia, the Middle East and Europe?',
        options: [
          'Amber Road',
          'Silk Road',
          'Royal Road',
          'Appian Way'
        ],
        answer: 'Silk Road'
      },
      {
        question: 'Which city served as the capital of the Byzantine Empire for most of its history?',
        options: [
          'Alexandria',
          'Athens',
          'Constantinople',
          'Venice'
        ],
        answer: 'Constantinople'
      },
      {
        question: 'Which empire used knotted cords called quipu for recording information?',
        options: [
          'Roman Empire',
          'Mali Empire',
          'Ottoman Empire',
          'Inca Empire'
        ],
        answer: 'Inca Empire'
      },
      {
        question: 'Which battle in 1066 led to Norman rule in England?',
        options: [
          'Battle of Hastings',
          'Battle of Agincourt',
          'Battle of Bosworth',
          'Battle of Bannockburn'
        ],
        answer: 'Battle of Hastings'
      },
      {
        question: 'Which U.S. president issued the Emancipation Proclamation during the American Civil War?',
        options: [
          'George Washington',
          'Abraham Lincoln',
          'Andrew Jackson',
          'Ulysses S. Grant'
        ],
        answer: 'Abraham Lincoln'
      },
      {
        question: 'Mansa Musa was a famous ruler of which West African empire?',
        options: [
          'Mali Empire',
          'Roman Empire',
          'Aztec Empire',
          'Mughal Empire'
        ],
        answer: 'Mali Empire'
      },
      {
        question: 'Joan of Arc played a major role in which long conflict between England and France?',
        options: [
          'Thirty Years’ War',
          'Napoleonic Wars',
          'Crimean War',
          'Hundred Years’ War'
        ],
        answer: 'Hundred Years’ War'
      },
      {
        question: 'Which document, signed in 1776, declared the thirteen American colonies independent from Great Britain?',
        options: [
          'Bill of Rights',
          'Magna Carta',
          'Declaration of Independence',
          'Treaty of Versailles'
        ],
        answer: 'Declaration of Independence'
      }
    ],

    /*
    SET D
    */

    [
      {
        question: 'Who is generally regarded as the first Roman emperor?',
        options: [
          'Julius Caesar',
          'Augustus',
          'Nero',
          'Trajan'
        ],
        answer: 'Augustus'
      },
      {
        question: 'Which civilization built the city of Tenochtitlan?',
        options: [
          'Aztec',
          'Maya',
          'Inca',
          'Olmec'
        ],
        answer: 'Aztec'
      },
      {
        question: 'In which year did Constantinople fall to the Ottoman Empire?',
        options: [
          '1415',
          '1492',
          '1517',
          '1453'
        ],
        answer: '1453'
      },
      {
        question: 'Which English king sealed Magna Carta in 1215?',
        options: [
          'Henry VIII',
          'Richard III',
          'King John',
          'Edward I'
        ],
        answer: 'King John'
      },
      {
        question: 'Which leader became internationally associated with nonviolent resistance during India’s independence movement?',
        options: [
          'Jawaharlal Nehru',
          'Mahatma Gandhi',
          'Subhas Chandra Bose',
          'Muhammad Ali Jinnah'
        ],
        answer: 'Mahatma Gandhi'
      },
      {
        question: 'The Taj Mahal was built during the rule of which empire?',
        options: [
          'Ottoman Empire',
          'Maurya Empire',
          'Gupta Empire',
          'Mughal Empire'
        ],
        answer: 'Mughal Empire'
      },
      {
        question: 'The Black Death devastated Europe most severely during which century?',
        options: [
          '12th century',
          '13th century',
          '14th century',
          '16th century'
        ],
        answer: '14th century'
      },
      {
        question: 'Who became the first woman to fly solo across the Atlantic Ocean?',
        options: [
          'Amelia Earhart',
          'Bessie Coleman',
          'Harriet Quimby',
          'Jacqueline Cochran'
        ],
        answer: 'Amelia Earhart'
      },
      {
        question: 'Which treaty formally ended the state of war between Germany and most Allied powers after World War I?',
        options: [
          'Treaty of Utrecht',
          'Treaty of Versailles',
          'Treaty of Paris',
          'Treaty of Tordesillas'
        ],
        answer: 'Treaty of Versailles'
      },
      {
        question: 'Suleiman the Magnificent ruled which empire?',
        options: [
          'Mughal Empire',
          'Roman Empire',
          'Austro-Hungarian Empire',
          'Ottoman Empire'
        ],
        answer: 'Ottoman Empire'
      }
    ]

  ],

  /*
  ---------------------------------------------------
  CHALLENGE 5 — SMART NUMBERS
  ---------------------------------------------------
  */

  5: [

    /*
    SET A
    */

    [
      {
        question: 'What is 15% of 240?',
        options: [
          '24',
          '36',
          '30',
          '42'
        ],
        answer: '36'
      },
      {
        question: 'A car travels at 72 km/h for 2.5 hours. How far does it travel?',
        options: [
          '180 km',
          '144 km',
          '160 km',
          '200 km'
        ],
        answer: '180 km'
      },
      {
        question: 'What number comes next in the sequence: 3, 6, 12, 24, ...?',
        options: [
          '36',
          '42',
          '54',
          '48'
        ],
        answer: '48'
      },
      {
        question: 'An item costs $160 and is reduced by 25%. What is the sale price?',
        options: [
          '$100',
          '$125',
          '$120',
          '$140'
        ],
        answer: '$120'
      },
      {
        question: 'What is 14 squared?',
        options: [
          '176',
          '196',
          '186',
          '206'
        ],
        answer: '196'
      },
      {
        question: 'What is the average of 12, 18, 24 and 30?',
        options: [
          '18',
          '20',
          '22',
          '21'
        ],
        answer: '21'
      },
      {
        question: 'Solve for x: 4x + 6 = 30',
        options: [
          '5',
          '6',
          '7',
          '8'
        ],
        answer: '6'
      },
      {
        question: 'Red and blue counters are in the ratio 2:3. If there are 25 counters in total, how many are red?',
        options: [
          '8',
          '12',
          '10',
          '15'
        ],
        answer: '10'
      },
      {
        question: 'What is the area of a rectangle that is 12 metres long and 7 metres wide?',
        options: [
          '84 m²',
          '72 m²',
          '96 m²',
          '108 m²'
        ],
        answer: '84 m²'
      },
      {
        question: 'What is 3/8 of 64?',
        options: [
          '16',
          '20',
          '28',
          '24'
        ],
        answer: '24'
      }
    ],

    /*
    SET B
    */

    [
      {
        question: 'What is 18% of 250?',
        options: [
          '40',
          '50',
          '45',
          '55'
        ],
        answer: '45'
      },
      {
        question: 'A price of $80 increases by 15%. What is the new price?',
        options: [
          '$92',
          '$88',
          '$90',
          '$94'
        ],
        answer: '$92'
      },
      {
        question: 'What number comes next in the sequence: 2, 5, 11, 23, ...?',
        options: [
          '35',
          '47',
          '41',
          '49'
        ],
        answer: '47'
      },
      {
        question: 'Five identical items cost $37.50 in total. How much does one item cost?',
        options: [
          '$6.50',
          '$7.00',
          '$8.00',
          '$7.50'
        ],
        answer: '$7.50'
      },
      {
        question: 'How many minutes are in 1.5 hours?',
        options: [
          '75',
          '80',
          '90',
          '100'
        ],
        answer: '90'
      },
      {
        question: 'A square has a perimeter of 36 cm. What is its area?',
        options: [
          '72 cm²',
          '90 cm²',
          '108 cm²',
          '81 cm²'
        ],
        answer: '81 cm²'
      },
      {
        question: 'What percentage is equivalent to 7/10?',
        options: [
          '70%',
          '7%',
          '17%',
          '700%'
        ],
        answer: '70%'
      },
      {
        question: 'Solve for x: 2x - 5 = 17',
        options: [
          '9',
          '11',
          '10',
          '12'
        ],
        answer: '11'
      },
      {
        question: 'A vehicle travels 150 km in 2.5 hours. What is its average speed?',
        options: [
          '60 km/h',
          '50 km/h',
          '65 km/h',
          '75 km/h'
        ],
        answer: '60 km/h'
      },
      {
        question: 'What is 2/3 of 90?',
        options: [
          '45',
          '50',
          '75',
          '60'
        ],
        answer: '60'
      }
    ],

    /*
    SET C
    */

    [
      {
        question: 'What is 12.5% of 240?',
        options: [
          '30',
          '24',
          '32',
          '36'
        ],
        answer: '30'
      },
      {
        question: 'Four workers can complete a job in 6 hours. At the same rate, how long would 8 workers take to complete the same job?',
        options: [
          '2 hours',
          '3 hours',
          '4 hours',
          '5 hours'
        ],
        answer: '3 hours'
      },
      {
        question: 'What number comes next in the sequence: 1, 4, 9, 16, ...?',
        options: [
          '20',
          '24',
          '36',
          '25'
        ],
        answer: '25'
      },
      {
        question: 'A $75 item is discounted by 20%. What is the sale price?',
        options: [
          '$60',
          '$55',
          '$62',
          '$65'
        ],
        answer: '$60'
      },
      {
        question: 'How many grams are in 2.75 kilograms?',
        options: [
          '275',
          '750',
          '2,750',
          '2,075'
        ],
        answer: '2,750'
      },
      {
        question: 'Three notebooks cost $13.50. At the same price per notebook, how much would eight notebooks cost?',
        options: [
          '$32',
          '$36',
          '$34',
          '$38'
        ],
        answer: '$36'
      },
      {
        question: 'Red and blue marbles are in the ratio 3:5. If there are 40 marbles altogether, how many are red?',
        options: [
          '12',
          '18',
          '25',
          '15'
        ],
        answer: '15'
      },
      {
        question: 'A bag contains 5 red, 3 blue and 2 green balls. What is the probability of randomly choosing a blue ball?',
        options: [
          '1/5',
          '3/10',
          '1/3',
          '1/2'
        ],
        answer: '3/10'
      },
      {
        question: 'Using standard order of operations, what is 6 + 4 × 3?',
        options: [
          '24',
          '30',
          '42',
          '18'
        ],
        answer: '18'
      },
      {
        question: 'What is the smaller angle between the hour and minute hands of a clock at exactly 3:00?',
        options: [
          '45°',
          '60°',
          '90°',
          '120°'
        ],
        answer: '90°'
      }
    ],

    /*
    SET D
    */

    [
      {
        question: 'What is 35% of 200?',
        options: [
          '70',
          '60',
          '75',
          '80'
        ],
        answer: '70'
      },
      {
        question: 'What is the perimeter of a rectangle 9 cm long and 5 cm wide?',
        options: [
          '18 cm',
          '28 cm',
          '45 cm',
          '32 cm'
        ],
        answer: '28 cm'
      },
      {
        question: 'What number comes next in the sequence: 5, 8, 13, 21, ...?',
        options: [
          '26',
          '29',
          '31',
          '34'
        ],
        answer: '34'
      },
      {
        question: 'What percentage is equivalent to 3/5?',
        options: [
          '30%',
          '50%',
          '60%',
          '80%'
        ],
        answer: '60%'
      },
      {
        question: 'If $240 is shared equally among 6 people, how much does each person receive?',
        options: [
          '$40',
          '$30',
          '$35',
          '$45'
        ],
        answer: '$40'
      },
      {
        question: 'What is 2 to the power of 5?',
        options: [
          '10',
          '16',
          '25',
          '32'
        ],
        answer: '32'
      },
      {
        question: 'How many metres are in 1.2 kilometres?',
        options: [
          '120 m',
          '12,000 m',
          '1,200 m',
          '1,020 m'
        ],
        answer: '1,200 m'
      },
      {
        question: 'Solve for x: 3x = 27',
        options: [
          '6',
          '9',
          '8',
          '12'
        ],
        answer: '9'
      },
      {
        question: 'What is the probability of getting heads on one toss of a fair coin?',
        options: [
          '1/2',
          '1/3',
          '1/4',
          '2/3'
        ],
        answer: '1/2'
      },
      {
        question: 'What is the average of 8, 10, 12, 14 and 16?',
        options: [
          '10',
          '11',
          '14',
          '12'
        ],
        answer: '12'
      }
    ]

  ],

  /*
  ---------------------------------------------------
  CHALLENGE 6 — SCIENCE
  ---------------------------------------------------
  */

  6: [

    /*
    SET A
    */

    [
      {
        question: 'Which organelle is primarily responsible for producing usable energy in most human cells?',
        options: [
          'Mitochondrion',
          'Nucleus',
          'Ribosome',
          'Golgi apparatus'
        ],
        answer: 'Mitochondrion'
      },
      {
        question: 'What is the chemical symbol for sodium?',
        options: [
          'S',
          'So',
          'N',
          'Na'
        ],
        answer: 'Na'
      },
      {
        question: 'Which force causes objects with mass to attract one another?',
        options: [
          'Friction',
          'Gravity',
          'Magnetism',
          'Buoyancy'
        ],
        answer: 'Gravity'
      },
      {
        question: 'Which type of blood cell is primarily responsible for carrying oxygen around the body?',
        options: [
          'White blood cells',
          'Platelets',
          'Stem cells',
          'Red blood cells'
        ],
        answer: 'Red blood cells'
      },
      {
        question: 'A substance with a pH below 7 is generally described as what?',
        options: [
          'Acidic',
          'Neutral',
          'Alkaline',
          'Radioactive'
        ],
        answer: 'Acidic'
      },
      {
        question: 'Which layer of Earth lies directly beneath the crust?',
        options: [
          'Outer core',
          'Mantle',
          'Inner core',
          'Atmosphere'
        ],
        answer: 'Mantle'
      },
      {
        question: 'What is the name of the process in which liquid water changes into water vapour?',
        options: [
          'Condensation',
          'Freezing',
          'Evaporation',
          'Precipitation'
        ],
        answer: 'Evaporation'
      },
      {
        question: 'Which planet is closest to the Sun?',
        options: [
          'Venus',
          'Earth',
          'Mars',
          'Mercury'
        ],
        answer: 'Mercury'
      },
      {
        question: 'What type of energy is stored in a stretched rubber band?',
        options: [
          'Elastic potential energy',
          'Nuclear energy',
          'Sound energy',
          'Thermal energy'
        ],
        answer: 'Elastic potential energy'
      },
      {
        question: 'Which molecule carries most hereditary information in humans?',
        options: [
          'Glucose',
          'Insulin',
          'DNA',
          'Haemoglobin'
        ],
        answer: 'DNA'
      }
    ],

    /*
    SET B
    */

    [
      {
        question: 'What is the most abundant gas in Earth’s atmosphere?',
        options: [
          'Nitrogen',
          'Oxygen',
          'Carbon dioxide',
          'Argon'
        ],
        answer: 'Nitrogen'
      },
      {
        question: 'Which subatomic particle has a negative electric charge?',
        options: [
          'Proton',
          'Neutron',
          'Electron',
          'Photon'
        ],
        answer: 'Electron'
      },
      {
        question: 'Which part of a plant absorbs most of its water and mineral nutrients from the soil?',
        options: [
          'Flowers',
          'Roots',
          'Leaves',
          'Fruit'
        ],
        answer: 'Roots'
      },
      {
        question: 'What is the SI unit of force?',
        options: [
          'Newton',
          'Joule',
          'Watt',
          'Pascal'
        ],
        answer: 'Newton'
      },
      {
        question: 'Which process releases energy from glucose inside cells?',
        options: [
          'Photosynthesis',
          'Cellular respiration',
          'Transpiration',
          'Osmosis'
        ],
        answer: 'Cellular respiration'
      },
      {
        question: 'Which rock type forms when molten rock cools and solidifies?',
        options: [
          'Sedimentary',
          'Metamorphic',
          'Fossil',
          'Igneous'
        ],
        answer: 'Igneous'
      },
      {
        question: 'Which electromagnetic radiation has a shorter wavelength than visible violet light?',
        options: [
          'Infrared',
          'Microwaves',
          'Ultraviolet',
          'Radio waves'
        ],
        answer: 'Ultraviolet'
      },
      {
        question: 'What is the name of the galaxy that contains our Solar System?',
        options: [
          'Andromeda Galaxy',
          'Milky Way',
          'Triangulum Galaxy',
          'Whirlpool Galaxy'
        ],
        answer: 'Milky Way'
      },
      {
        question: 'Which organ produces insulin in the human body?',
        options: [
          'Kidney',
          'Spleen',
          'Gallbladder',
          'Pancreas'
        ],
        answer: 'Pancreas'
      },
      {
        question: 'Which element is represented by the chemical symbol O?',
        options: [
          'Gold',
          'Osmium',
          'Oxygen',
          'Oganesson'
        ],
        answer: 'Oxygen'
      }
    ],

    /*
    SET C
    */

    [
      {
        question: 'What phenomenon causes a straight straw to appear bent when partly submerged in water?',
        options: [
          'Refraction',
          'Reflection',
          'Diffusion',
          'Radiation'
        ],
        answer: 'Refraction'
      },
      {
        question: 'Which organ filters the blood to remove wastes and produce urine?',
        options: [
          'Lungs',
          'Stomach',
          'Pancreas',
          'Kidneys'
        ],
        answer: 'Kidneys'
      },
      {
        question: 'What is the chemical formula for carbon dioxide?',
        options: [
          'CO',
          'C₂O',
          'CO₂',
          'O₂C₂'
        ],
        answer: 'CO₂'
      },
      {
        question: 'Which type of plate boundary occurs when two tectonic plates move away from each other?',
        options: [
          'Divergent',
          'Convergent',
          'Transform',
          'Subduction-only'
        ],
        answer: 'Divergent'
      },
      {
        question: 'Which law states that for every action there is an equal and opposite reaction?',
        options: [
          'Newton’s first law',
          'Newton’s second law',
          'Newton’s third law',
          'Ohm’s law'
        ],
        answer: 'Newton’s third law'
      },
      {
        question: 'Which structure in the human eye controls how much light enters through the pupil?',
        options: [
          'Retina',
          'Cornea',
          'Optic nerve',
          'Iris'
        ],
        answer: 'Iris'
      },
      {
        question: 'Which process allows plants to convert light energy into chemical energy?',
        options: [
          'Respiration',
          'Photosynthesis',
          'Fermentation',
          'Digestion'
        ],
        answer: 'Photosynthesis'
      },
      {
        question: 'What is the name of the point directly above an earthquake’s focus on Earth’s surface?',
        options: [
          'Fault line',
          'Crater',
          'Mantle',
          'Epicentre'
        ],
        answer: 'Epicentre'
      },
      {
        question: 'Which planet has the shortest year in our Solar System?',
        options: [
          'Venus',
          'Mercury',
          'Mars',
          'Jupiter'
        ],
        answer: 'Mercury'
      },
      {
        question: 'Which type of bond involves atoms sharing pairs of electrons?',
        options: [
          'Ionic bond',
          'Metallic bond',
          'Covalent bond',
          'Hydrogen bond'
        ],
        answer: 'Covalent bond'
      }
    ],

    /*
    SET D
    */

    [
      {
        question: 'Which gas do plants absorb from the atmosphere for photosynthesis?',
        options: [
          'Oxygen',
          'Carbon dioxide',
          'Nitrogen',
          'Hydrogen'
        ],
        answer: 'Carbon dioxide'
      },
      {
        question: 'Which part of the human brain makes up the largest portion by volume?',
        options: [
          'Cerebellum',
          'Brain stem',
          'Pituitary gland',
          'Cerebrum'
        ],
        answer: 'Cerebrum'
      },
      {
        question: 'Approximately how fast does light travel in a vacuum?',
        options: [
          '30,000 km/s',
          '3,000 km/s',
          '300,000 km/s',
          '3,000,000 km/s'
        ],
        answer: '300,000 km/s'
      },
      {
        question: 'Which element has the chemical symbol Fe?',
        options: [
          'Iron',
          'Fluorine',
          'Francium',
          'Fermium'
        ],
        answer: 'Iron'
      },
      {
        question: 'Which organ pumps blood through the human circulatory system?',
        options: [
          'Liver',
          'Heart',
          'Kidney',
          'Lung'
        ],
        answer: 'Heart'
      },
      {
        question: 'What is the change of state from a gas to a liquid called?',
        options: [
          'Evaporation',
          'Sublimation',
          'Condensation',
          'Melting'
        ],
        answer: 'Condensation'
      },
      {
        question: 'What is the SI-derived unit of electrical resistance?',
        options: [
          'Ohm',
          'Volt',
          'Ampere',
          'Tesla'
        ],
        answer: 'Ohm'
      },
      {
        question: 'In DNA, adenine pairs with which base?',
        options: [
          'Cytosine',
          'Guanine',
          'Uracil',
          'Thymine'
        ],
        answer: 'Thymine'
      },
      {
        question: 'Which planet is famous for its prominent ring system?',
        options: [
          'Mars',
          'Saturn',
          'Venus',
          'Mercury'
        ],
        answer: 'Saturn'
      },
      {
        question: 'Which gas is released as a by-product of photosynthesis?',
        options: [
          'Carbon dioxide',
          'Methane',
          'Oxygen',
          'Nitrogen'
        ],
        answer: 'Oxygen'
      }
    ]

  ],

  /*
  ---------------------------------------------------
  CHALLENGE 7 — GEOGRAPHY
  ---------------------------------------------------
  */

  7: [

    /*
    SET A
    */

    [
      {
        question: 'What is the capital city of New Zealand?',
        options: [
          'Auckland',
          'Christchurch',
          'Hamilton',
          'Wellington'
        ],
        answer: 'Wellington'
      },
      {
        question: 'Which mountain range runs along much of the western edge of South America?',
        options: [
          'Alps',
          'Rockies',
          'Andes',
          'Himalayas'
        ],
        answer: 'Andes'
      },
      {
        question: 'Which strait separates southern Spain from northern Morocco?',
        options: [
          'Strait of Gibraltar',
          'Bering Strait',
          'Strait of Hormuz',
          'Bosporus'
        ],
        answer: 'Strait of Gibraltar'
      },
      {
        question: 'Which country completely surrounds the nation of Lesotho?',
        options: [
          'Botswana',
          'South Africa',
          'Zimbabwe',
          'Mozambique'
        ],
        answer: 'South Africa'
      },
      {
        question: 'Which major river flows through Cairo?',
        options: [
          'Congo',
          'Niger',
          'Nile',
          'Zambezi'
        ],
        answer: 'Nile'
      },
      {
        question: 'What is the capital city of Morocco?',
        options: [
          'Rabat',
          'Casablanca',
          'Marrakesh',
          'Fez'
        ],
        answer: 'Rabat'
      },
      {
        question: 'The Atacama Desert is located primarily in which country?',
        options: [
          'Peru',
          'Chile',
          'Argentina',
          'Bolivia'
        ],
        answer: 'Chile'
      },
      {
        question: 'The island of Bali is part of which country?',
        options: [
          'Indonesia',
          'Malaysia',
          'Philippines',
          'Thailand'
        ],
        answer: 'Indonesia'
      },
      {
        question: 'Which is the largest island in the world that is not classified as a continent?',
        options: [
          'New Guinea',
          'Borneo',
          'Madagascar',
          'Greenland'
        ],
        answer: 'Greenland'
      },
      {
        question: 'Which imaginary line divides Earth into the Northern and Southern Hemispheres?',
        options: [
          'Prime Meridian',
          'Equator',
          'Tropic of Cancer',
          'International Date Line'
        ],
        answer: 'Equator'
      }
    ],

    /*
    SET B
    */

    [
      {
        question: 'What is the capital city of Kenya?',
        options: [
          'Nairobi',
          'Mombasa',
          'Kampala',
          'Kigali'
        ],
        answer: 'Nairobi'
      },
      {
        question: 'The Bosporus runs through which major city?',
        options: [
          'Athens',
          'Cairo',
          'Istanbul',
          'Rome'
        ],
        answer: 'Istanbul'
      },
      {
        question: 'Lake Titicaca lies on the border between Peru and which other country?',
        options: [
          'Chile',
          'Bolivia',
          'Ecuador',
          'Brazil'
        ],
        answer: 'Bolivia'
      },
      {
        question: 'The region known as Patagonia is shared mainly by Argentina and which other country?',
        options: [
          'Chile',
          'Uruguay',
          'Peru',
          'Paraguay'
        ],
        answer: 'Chile'
      },
      {
        question: 'Which strait separates mainland Australia from Tasmania?',
        options: [
          'Torres Strait',
          'Cook Strait',
          'Bass Strait',
          'Dover Strait'
        ],
        answer: 'Bass Strait'
      },
      {
        question: 'Mount Kilimanjaro is located in which African country?',
        options: [
          'Kenya',
          'Tanzania',
          'Uganda',
          'Ethiopia'
        ],
        answer: 'Tanzania'
      },
      {
        question: 'Prague is the capital city of which country?',
        options: [
          'Slovakia',
          'Hungary',
          'Austria',
          'Czechia'
        ],
        answer: 'Czechia'
      },
      {
        question: 'Which river flows through Paris?',
        options: [
          'Seine',
          'Rhine',
          'Danube',
          'Thames'
        ],
        answer: 'Seine'
      },
      {
        question: 'Which body of water is the world’s largest inland body of water by surface area?',
        options: [
          'Lake Superior',
          'Black Sea',
          'Caspian Sea',
          'Lake Victoria'
        ],
        answer: 'Caspian Sea'
      },
      {
        question: 'Mount Everest lies on the border between Nepal and which country?',
        options: [
          'India',
          'Bhutan',
          'Pakistan',
          'China'
        ],
        answer: 'China'
      }
    ],

    /*
    SET C
    */

    [
      {
        question: 'The Panama Canal connects the Atlantic Ocean with which other ocean?',
        options: [
          'Indian Ocean',
          'Arctic Ocean',
          'Pacific Ocean',
          'Southern Ocean'
        ],
        answer: 'Pacific Ocean'
      },
      {
        question: 'What is the capital city of Iceland?',
        options: [
          'Oslo',
          'Helsinki',
          'Stockholm',
          'Reykjavík'
        ],
        answer: 'Reykjavík'
      },
      {
        question: 'Which mountain range is commonly regarded as part of the conventional boundary between Europe and Asia?',
        options: [
          'Ural Mountains',
          'Pyrenees',
          'Carpathians',
          'Apennines'
        ],
        answer: 'Ural Mountains'
      },
      {
        question: 'Madagascar lies off the southeastern coast of which continent?',
        options: [
          'Asia',
          'South America',
          'Australia',
          'Africa'
        ],
        answer: 'Africa'
      },
      {
        question: 'What is the capital city of Argentina?',
        options: [
          'Santiago',
          'Montevideo',
          'Buenos Aires',
          'Lima'
        ],
        answer: 'Buenos Aires'
      },
      {
        question: 'The ancient city of Petra is located in which modern-day country?',
        options: [
          'Egypt',
          'Jordan',
          'Lebanon',
          'Syria'
        ],
        answer: 'Jordan'
      },
      {
        question: 'Which country is especially famous for its long, deeply indented fjord coastline?',
        options: [
          'Belgium',
          'Portugal',
          'Poland',
          'Norway'
        ],
        answer: 'Norway'
      },
      {
        question: 'Which line of longitude is defined as 0° longitude?',
        options: [
          'Prime Meridian',
          'Equator',
          'International Date Line',
          'Tropic of Capricorn'
        ],
        answer: 'Prime Meridian'
      },
      {
        question: 'Which of these countries is crossed by the Equator?',
        options: [
          'Mexico',
          'Argentina',
          'Ecuador',
          'Spain'
        ],
        answer: 'Ecuador'
      },
      {
        question: 'Which tropical latitude line passes through Australia?',
        options: [
          'Tropic of Cancer',
          'Tropic of Capricorn',
          'Arctic Circle',
          'Equator'
        ],
        answer: 'Tropic of Capricorn'
      }
    ],

    /*
    SET D
    */

    [
      {
        question: 'What is the capital city of Norway?',
        options: [
          'Bergen',
          'Oslo',
          'Stockholm',
          'Copenhagen'
        ],
        answer: 'Oslo'
      },
      {
        question: 'Which river flows through London?',
        options: [
          'Seine',
          'Rhine',
          'Danube',
          'Thames'
        ],
        answer: 'Thames'
      },
      {
        question: 'Which country is the largest in the world by total area?',
        options: [
          'Russia',
          'Canada',
          'China',
          'United States'
        ],
        answer: 'Russia'
      },
      {
        question: 'Denali, the highest mountain in North America, is located in which U.S. state?',
        options: [
          'Colorado',
          'California',
          'Alaska',
          'Washington'
        ],
        answer: 'Alaska'
      },
      {
        question: 'Which European country is often described as being shaped like a boot?',
        options: [
          'Greece',
          'Italy',
          'Portugal',
          'Croatia'
        ],
        answer: 'Italy'
      },
      {
        question: 'What is the capital city of South Korea?',
        options: [
          'Seoul',
          'Busan',
          'Incheon',
          'Daegu'
        ],
        answer: 'Seoul'
      },
      {
        question: 'Which sea lies between southern Europe and northern Africa?',
        options: [
          'Baltic Sea',
          'Caribbean Sea',
          'Mediterranean Sea',
          'Arabian Sea'
        ],
        answer: 'Mediterranean Sea'
      },
      {
        question: 'Which continent has no permanent native human population?',
        options: [
          'Asia',
          'South America',
          'Australia',
          'Antarctica'
        ],
        answer: 'Antarctica'
      },
      {
        question: 'Madagascar lies in which ocean?',
        options: [
          'Atlantic Ocean',
          'Indian Ocean',
          'Pacific Ocean',
          'Arctic Ocean'
        ],
        answer: 'Indian Ocean'
      },
      {
        question: 'What is the longest river in Europe?',
        options: [
          'Volga',
          'Danube',
          'Rhine',
          'Dnieper'
        ],
        answer: 'Volga'
      }
    ]

  ],

  /*
  ---------------------------------------------------
  CHALLENGE 8 — SPORTS
  ---------------------------------------------------
  */

  8: [

    /*
    SET A
    */

    [
      {
        question: 'How many players from one team are on the field at a time in association football?',
        options: [
          '9',
          '10',
          '12',
          '11'
        ],
        answer: '11'
      },
      {
        question: 'In tennis scoring, what word represents a score of zero?',
        options: [
          'Deuce',
          'Love',
          'Ace',
          'Fault'
        ],
        answer: 'Love'
      },
      {
        question: 'How many quarters are played in a regulation NBA game?',
        options: [
          '2',
          '3',
          '4',
          '5'
        ],
        answer: '4'
      },
      {
        question: 'How many legal deliveries are in a standard over in modern cricket?',
        options: [
          '6',
          '4',
          '5',
          '8'
        ],
        answer: '6'
      },
      {
        question: 'What is the official marathon distance?',
        options: [
          '40 km',
          '41.5 km',
          '45 km',
          '42.195 km'
        ],
        answer: '42.195 km'
      },
      {
        question: 'In golf, what is the term for a score of one under par on a hole?',
        options: [
          'Bogey',
          'Eagle',
          'Birdie',
          'Par'
        ],
        answer: 'Birdie'
      },
      {
        question: 'How many points is a try worth in rugby union?',
        options: [
          '5',
          '3',
          '4',
          '6'
        ],
        answer: '5'
      },
      {
        question: 'How many strikes normally make a strikeout in baseball?',
        options: [
          '2',
          '3',
          '4',
          '5'
        ],
        answer: '3'
      },
      {
        question: 'Which flag traditionally signals the end of a motor race?',
        options: [
          'Red flag',
          'Yellow flag',
          'Blue flag',
          'Chequered flag'
        ],
        answer: 'Chequered flag'
      },
      {
        question: 'In badminton, how many points normally win a game before deuce rules apply?',
        options: [
          '15',
          '18',
          '21',
          '25'
        ],
        answer: '21'
      }
    ],

    /*
    SET B
    */

    [
      {
        question: 'The FIFA World Cup is the world championship for which sport?',
        options: [
          'Rugby union',
          'Cricket',
          'Association football',
          'Basketball'
        ],
        answer: 'Association football'
      },
      {
        question: 'The Ashes is a famous cricket series contested between which two countries?',
        options: [
          'India and Pakistan',
          'England and Australia',
          'South Africa and New Zealand',
          'Australia and India'
        ],
        answer: 'England and Australia'
      },
      {
        question: 'On what surface is the Wimbledon tennis tournament traditionally played?',
        options: [
          'Grass',
          'Clay',
          'Hard court',
          'Carpet'
        ],
        answer: 'Grass'
      },
      {
        question: 'How many points is a successful free throw worth in basketball?',
        options: [
          '2',
          '3',
          '4',
          '1'
        ],
        answer: '1'
      },
      {
        question: 'The Tour de France is primarily a competition in which sport?',
        options: [
          'Motor racing',
          'Athletics',
          'Road cycling',
          'Rowing'
        ],
        answer: 'Road cycling'
      },
      {
        question: 'How long is a standard Olympic-size long-course swimming pool?',
        options: [
          '50 metres',
          '25 metres',
          '40 metres',
          '100 metres'
        ],
        answer: '50 metres'
      },
      {
        question: 'How many players from each team are on the field in rugby league?',
        options: [
          '11',
          '12',
          '15',
          '13'
        ],
        answer: '13'
      },
      {
        question: 'The Masters Tournament in golf is played at which course?',
        options: [
          'St Andrews',
          'Augusta National',
          'Pebble Beach',
          'Royal Melbourne'
        ],
        answer: 'Augusta National'
      },
      {
        question: 'In boxing, what does the abbreviation KO stand for?',
        options: [
          'Kick out',
          'Knock over',
          'Knockout',
          'Keep out'
        ],
        answer: 'Knockout'
      },
      {
        question: 'In Formula 1, what does starting from pole position mean?',
        options: [
          'Starting from the front position on the grid',
          'Starting from the pit lane',
          'Starting at the back of the grid',
          'Having the fastest race lap'
        ],
        answer: 'Starting from the front position on the grid'
      }
    ],

    /*
    SET C
    */

    [
      {
        question: 'How far is the penalty spot from the goal line in association football?',
        options: [
          '10 yards',
          '11 yards',
          '15 yards',
          '12 yards'
        ],
        answer: '12 yards'
      },
      {
        question: 'In cricket, what does LBW stand for?',
        options: [
          'Leg before wicket',
          'Long ball wide',
          'Left bat wicket',
          'Leg behind wicket'
        ],
        answer: 'Leg before wicket'
      },
      {
        question: 'How many tournaments make up tennis’s traditional Grand Slam in a calendar year?',
        options: [
          '3',
          '4',
          '5',
          '6'
        ],
        answer: '4'
      },
      {
        question: 'How many points is a successful shot from beyond the three-point line worth in basketball?',
        options: [
          '1',
          '2',
          '3',
          '4'
        ],
        answer: '3'
      },
      {
        question: 'How many innings are scheduled in a regulation Major League Baseball game?',
        options: [
          '7',
          '8',
          '10',
          '9'
        ],
        answer: '9'
      },
      {
        question: 'How many points is a successful conversion worth in rugby union?',
        options: [
          '1',
          '2',
          '3',
          '5'
        ],
        answer: '2'
      },
      {
        question: 'In golf, what is an eagle?',
        options: [
          'One stroke under par on a hole',
          'One stroke over par on a hole',
          'Two strokes under par on a hole',
          'Exactly par on a hole'
        ],
        answer: 'Two strokes under par on a hole'
      },
      {
        question: 'How many events are in a decathlon?',
        options: [
          '10',
          '8',
          '9',
          '12'
        ],
        answer: '10'
      },
      {
        question: 'How many players from one team are normally on the ice at once in ice hockey, including the goaltender?',
        options: [
          '5',
          '7',
          '8',
          '6'
        ],
        answer: '6'
      },
      {
        question: 'In the Tour de France, the yellow jersey is worn by the rider leading which classification?',
        options: [
          'Points classification',
          'Overall general classification',
          'Mountains classification',
          'Young rider classification'
        ],
        answer: 'Overall general classification'
      }
    ],

    /*
    SET D
    */

    [
      {
        question: 'How many players from one team are on the court at a time in indoor volleyball?',
        options: [
          '5',
          '7',
          '8',
          '6'
        ],
        answer: '6'
      },
      {
        question: 'In cricket, how many runs does a batter score to make a century?',
        options: [
          '50',
          '100',
          '75',
          '150'
        ],
        answer: '100'
      },
      {
        question: 'In tennis, what is an "ace"?',
        options: [
          'A legal serve the receiver does not touch',
          'A rally of exactly ten shots',
          'A point won at the net',
          'A serve that hits the net and lands in'
        ],
        answer: 'A legal serve the receiver does not touch'
      },
      {
        question: 'In football, what is a hat-trick?',
        options: [
          'Two goals by one player in a game',
          'Four goals by one player in a game',
          'Three goals by one player in a game',
          'Three assists by one player in a game'
        ],
        answer: 'Three goals by one player in a game'
      },
      {
        question: 'How many bases must a batter touch to complete a home run in baseball?',
        options: [
          '2',
          '3',
          '5',
          '4'
        ],
        answer: '4'
      },
      {
        question: 'In golf, what does "par" represent for a hole?',
        options: [
          'The expected number of strokes for a skilled golfer',
          'The maximum strokes allowed',
          'A compulsory two-putt score',
          'The average score of all spectators'
        ],
        answer: 'The expected number of strokes for a skilled golfer'
      },
      {
        question: 'In basketball, what is a rebound?',
        options: [
          'Passing the ball behind the back',
          'Scoring directly from a free throw',
          'Gaining possession after a missed shot',
          'Blocking a player without the ball'
        ],
        answer: 'Gaining possession after a missed shot'
      },
      {
        question: 'How many forwards from each team normally take part in a rugby union scrum?',
        options: [
          '6',
          '8',
          '7',
          '9'
        ],
        answer: '8'
      },
      {
        question: 'How many events are in a traditional pentathlon?',
        options: [
          '4',
          '6',
          '7',
          '5'
        ],
        answer: '5'
      },
      {
        question: 'In which country did the sport of judo originate?',
        options: [
          'Japan',
          'China',
          'South Korea',
          'Thailand'
        ],
        answer: 'Japan'
      }
    ]

  ],

  /*
  ---------------------------------------------------
  CHALLENGE 9 — NATURE & ANIMALS
  ---------------------------------------------------
  */

  9: [

    /*
    SET A
    */

    [
      {
        question: 'What is the largest living land animal?',
        options: [
          'Giraffe',
          'African elephant',
          'White rhinoceros',
          'Hippopotamus'
        ],
        answer: 'African elephant'
      },
      {
        question: 'Which mammals are capable of true sustained flight?',
        options: [
          'Flying squirrels',
          'Sugar gliders',
          'Colugos',
          'Bats'
        ],
        answer: 'Bats'
      },
      {
        question: 'What is a group of lions commonly called?',
        options: [
          'Pack',
          'Herd',
          'Pride',
          'Colony'
        ],
        answer: 'Pride'
      },
      {
        question: 'What is the fastest land animal over short distances?',
        options: [
          'Cheetah',
          'Pronghorn',
          'Lion',
          'Greyhound'
        ],
        answer: 'Cheetah'
      },
      {
        question: 'Emperor penguins are native to which continent?',
        options: [
          'South America',
          'Antarctica',
          'Africa',
          'Australia'
        ],
        answer: 'Antarctica'
      },
      {
        question: 'Through what structure do whales breathe air?',
        options: [
          'Gills',
          'Spiracles',
          'Blowhole',
          'Lateral line'
        ],
        answer: 'Blowhole'
      },
      {
        question: 'What is a young kangaroo called?',
        options: [
          'Joey',
          'Cub',
          'Calf',
          'Kit'
        ],
        answer: 'Joey'
      },
      {
        question: 'How many hearts does an octopus have?',
        options: [
          '1',
          '2',
          '4',
          '3'
        ],
        answer: '3'
      },
      {
        question: 'What makes up most of a giant panda’s natural diet?',
        options: [
          'Fish',
          'Bamboo',
          'Fruit',
          'Insects'
        ],
        answer: 'Bamboo'
      },
      {
        question: 'A frog belongs to which class of vertebrate animals?',
        options: [
          'Reptiles',
          'Mammals',
          'Amphibians',
          'Birds'
        ],
        answer: 'Amphibians'
      }
    ],

    /*
    SET B
    */

    [
      {
        question: 'What is the tallest living land animal?',
        options: [
          'Giraffe',
          'African elephant',
          'Moose',
          'Camel'
        ],
        answer: 'Giraffe'
      },
      {
        question: 'Which animal is famous for its black-and-white striped coat?',
        options: [
          'Okapi',
          'Tapir',
          'Wildebeest',
          'Zebra'
        ],
        answer: 'Zebra'
      },
      {
        question: 'Coral reefs are built mainly by colonies of which small animals?',
        options: [
          'Sea stars',
          'Jellyfish',
          'Coral polyps',
          'Krill'
        ],
        answer: 'Coral polyps'
      },
      {
        question: 'What is the process by which plants release water vapour mainly through their leaves?',
        options: [
          'Germination',
          'Transpiration',
          'Pollination',
          'Respiration'
        ],
        answer: 'Transpiration'
      },
      {
        question: 'What is the largest living species of cat?',
        options: [
          'Tiger',
          'Lion',
          'Jaguar',
          'Leopard'
        ],
        answer: 'Tiger'
      },
      {
        question: 'What is the main reproductive role of a queen honey bee in a healthy colony?',
        options: [
          'Collecting nectar',
          'Building wax comb',
          'Laying eggs',
          'Guarding the hive entrance'
        ],
        answer: 'Laying eggs'
      },
      {
        question: 'Koalas are native to which country?',
        options: [
          'New Zealand',
          'Australia',
          'Papua New Guinea',
          'Indonesia'
        ],
        answer: 'Australia'
      },
      {
        question: 'A shark’s skeleton is made primarily of what material?',
        options: [
          'Bone',
          'Keratin',
          'Chitin',
          'Cartilage'
        ],
        answer: 'Cartilage'
      },
      {
        question: 'Which animal is especially well known for building dams in streams and rivers?',
        options: [
          'Beaver',
          'Otter',
          'Mink',
          'Muskrat'
        ],
        answer: 'Beaver'
      },
      {
        question: 'The growth rings in a tree trunk can often be used to estimate what?',
        options: [
          'The tree’s exact height',
          'The number of seeds it produced',
          'The tree’s age',
          'The depth of its roots'
        ],
        answer: 'The tree’s age'
      }
    ],

    /*
    SET C
    */

    [
      {
        question: 'What does it mean when an animal is described as nocturnal?',
        options: [
          'It lives only underground',
          'It is mainly active at night',
          'It migrates every winter',
          'It eats only plants'
        ],
        answer: 'It is mainly active at night'
      },
      {
        question: 'What is the largest living reptile species?',
        options: [
          'Saltwater crocodile',
          'Komodo dragon',
          'Green anaconda',
          'Leatherback turtle'
        ],
        answer: 'Saltwater crocodile'
      },
      {
        question: 'A caterpillar develops into an adult butterfly through which process?',
        options: [
          'Hibernation',
          'Migration',
          'Regeneration',
          'Metamorphosis'
        ],
        answer: 'Metamorphosis'
      },
      {
        question: 'Dolphins belong to which broad group of animals?',
        options: [
          'Fish',
          'Reptiles',
          'Mammals',
          'Amphibians'
        ],
        answer: 'Mammals'
      },
      {
        question: 'What does a deciduous tree typically do during part of each year?',
        options: [
          'Stops growing roots permanently',
          'Sheds its leaves',
          'Produces fruit every month',
          'Changes into an evergreen'
        ],
        answer: 'Sheds its leaves'
      },
      {
        question: 'Which flightless bird is native to New Zealand?',
        options: [
          'Emu',
          'Cassowary',
          'Ostrich',
          'Kiwi'
        ],
        answer: 'Kiwi'
      },
      {
        question: 'What sweet liquid do many bees collect from flowers?',
        options: [
          'Sap',
          'Resin',
          'Nectar',
          'Dew'
        ],
        answer: 'Nectar'
      },
      {
        question: 'Polar bears are native to which region?',
        options: [
          'Arctic',
          'Antarctica',
          'Patagonia',
          'Himalayas'
        ],
        answer: 'Arctic'
      },
      {
        question: 'What is a traditional collective noun for a group of crows?',
        options: [
          'Parliament',
          'Murder',
          'Pride',
          'Crash'
        ],
        answer: 'Murder'
      },
      {
        question: 'In a cactus, spines are modified versions of which plant structure?',
        options: [
          'Roots',
          'Flowers',
          'Fruit',
          'Leaves'
        ],
        answer: 'Leaves'
      }
    ],

    /*
    SET D
    */

    [
      {
        question: 'What is the largest living species of lizard?',
        options: [
          'Green iguana',
          'Gila monster',
          'Komodo dragon',
          'Perentie'
        ],
        answer: 'Komodo dragon'
      },
      {
        question: 'Which egg-laying mammal has a broad, duck-like bill?',
        options: [
          'Platypus',
          'Echidna',
          'Otter',
          'Beaver'
        ],
        answer: 'Platypus'
      },
      {
        question: 'Which living bird is known for having the greatest wingspan?',
        options: [
          'Andean condor',
          'Bald eagle',
          'Mute swan',
          'Wandering albatross'
        ],
        answer: 'Wandering albatross'
      },
      {
        question: 'What is a group of wolves commonly called?',
        options: [
          'Pride',
          'Pack',
          'Herd',
          'School'
        ],
        answer: 'Pack'
      },
      {
        question: 'Which reptile is especially famous for changing its skin colour?',
        options: [
          'Crocodile',
          'Tortoise',
          'Chameleon',
          'Gecko'
        ],
        answer: 'Chameleon'
      },
      {
        question: 'Mangroves are especially adapted to grow in which type of environment?',
        options: [
          'Dry alpine slopes',
          'Freshwater deserts',
          'Permanent ice fields',
          'Salty or brackish tidal coastlines'
        ],
        answer: 'Salty or brackish tidal coastlines'
      },
      {
        question: 'Which type of tree produces acorns?',
        options: [
          'Pine',
          'Oak',
          'Maple',
          'Birch'
        ],
        answer: 'Oak'
      },
      {
        question: 'What do herbivores primarily eat?',
        options: [
          'Plants',
          'Other animals',
          'Fungi only',
          'Minerals'
        ],
        answer: 'Plants'
      },
      {
        question: 'Which Arctic marine mammal is famous for its long tusks?',
        options: [
          'Manatee',
          'Dugong',
          'Walrus',
          'Sea otter'
        ],
        answer: 'Walrus'
      },
      {
        question: 'Which marine mammal commonly uses echolocation to navigate and hunt?',
        options: [
          'Sea lion',
          'Walrus',
          'Manatee',
          'Bottlenose dolphin'
        ],
        answer: 'Bottlenose dolphin'
      }
    ]

  ]

}

export function getRotatingPuzzlesByChallenge(
  challengeIndex: number,
  today: Date = new Date()
): Puzzle[] {

  const sets = CHALLENGE_SETS[challengeIndex] || []

  if (!sets.length) return []

  const activeSetCount = Math.min(
    ACTIVE_ROTATION_SET_COUNT,
    sets.length
  )

  const rotationIndex = getRotationIndex(
    today,
    activeSetCount
  )

  return sets[rotationIndex]
}
