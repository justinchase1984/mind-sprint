// lib/rotation.ts
import type { Puzzle } from './puzzles'

/*
Rotation System
---------------
• Challenges rotate every 2 days
• Each challenge can contain multiple question sets
*/

const ROTATION_DAYS = 2

function getDayIndex(date: Date = new Date()): number {
  const start = new Date(Date.UTC(2025, 0, 1))
  const today = new Date(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate()
    )
  )

  const diff = today.getTime() - start.getTime()

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
        options: ['Indonesia', 'Australia', 'Philippines', 'Thailand'],
        answer: 'Australia'
      },
      {
        question: 'What is the smallest prime number?',
        options: ['0', '1', '2', '3'],
        answer: '2'
      },
      {
        question: 'What is the capital city of Canada?',
        options: ['Toronto', 'Ottawa', 'Vancouver', 'Montreal'],
        answer: 'Ottawa'
      },
      {
        question: 'Who wrote the novel "1984"?',
        options: [
          'Aldous Huxley',
          'George Orwell',
          'Ray Bradbury',
          'Ernest Hemingway'
        ],
        answer: 'George Orwell'
      },
      {
        question: 'What is the chemical symbol for potassium?',
        options: ['P', 'Pt', 'Po', 'K'],
        answer: 'K'
      },
      {
        question: 'Who painted the Mona Lisa?',
        options: [
          'Michelangelo',
          'Leonardo da Vinci',
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
        options: ['4', '5', '6', '7'],
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
          'Pacific Ocean',
          'Arctic Ocean'
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
          'Blue whale',
          'Giraffe',
          'Whale shark'
        ],
        answer: 'Blue whale'
      },
      {
        question: 'Mount Fuji is located in which country?',
        options: [
          'China',
          'South Korea',
          'Japan',
          'Thailand'
        ],
        answer: 'Japan'
      },
      {
        question: 'What is the capital city of Türkiye?',
        options: [
          'Istanbul',
          'Ankara',
          'Izmir',
          'Antalya'
        ],
        answer: 'Ankara'
      },
      {
        question: 'What is the longest bone in the human body?',
        options: [
          'Femur',
          'Humerus',
          'Tibia',
          'Radius'
        ],
        answer: 'Femur'
      },
      {
        question: 'Who established the prizes now known as the Nobel Prizes?',
        options: [
          'Alfred Nobel',
          'Isaac Newton',
          'Louis Pasteur',
          'Alexander Fleming'
        ],
        answer: 'Alfred Nobel'
      },
      {
        question: 'Which is the largest planet in our solar system?',
        options: [
          'Earth',
          'Saturn',
          'Jupiter',
          'Neptune'
        ],
        answer: 'Jupiter'
      },
      {
        question: 'In which year was Magna Carta first sealed?',
        options: [
          '1066',
          '1215',
          '1492',
          '1776'
        ],
        answer: '1215'
      },
      {
        question: 'How many pieces does each player begin with in a standard game of chess?',
        options: ['12', '14', '16', '18'],
        answer: '16'
      },
      {
        question: 'Which element has the atomic number 79?',
        options: [
          'Silver',
          'Gold',
          'Copper',
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
          'Melbourne',
          'Canberra',
          'Brisbane'
        ],
        answer: 'Canberra'
      },
      {
        question: 'Machu Picchu is located in which country?',
        options: [
          'Chile',
          'Peru',
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
          'Jane Austen',
          'Charlotte Brontë',
          'Mary Shelley',
          'Virginia Woolf'
        ],
        answer: 'Jane Austen'
      },
      {
        question: 'Which naturally occurring material is traditionally regarded as the hardest?',
        options: [
          'Quartz',
          'Diamond',
          'Granite',
          'Iron'
        ],
        answer: 'Diamond'
      },
      {
        question: 'What is the official language spoken by the majority of people in Brazil?',
        options: [
          'Spanish',
          'Portuguese',
          'French',
          'Italian'
        ],
        answer: 'Portuguese'
      },
      {
        question: 'How many items are in a dozen?',
        options: ['10', '12', '20', '24'],
        answer: '12'
      },
      {
        question: 'In which country did the ancient Olympic Games originate?',
        options: [
          'Italy',
          'Egypt',
          'Greece',
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
          'Start a friendly conversation',
          'End an argument',
          'Reveal a secret'
        ],
        answer: 'Start a friendly conversation'
      },
      {
        question: 'Which word is spelled correctly?',
        options: [
          'Accomodate',
          'Acommodate',
          'Accommodate',
          'Accommadate'
        ],
        answer: 'Accommodate'
      },
      {
        question: 'Which sentence is punctuated correctly?',
        options: [
          'After dinner we watched a movie.',
          'After dinner, we watched a movie.',
          'After, dinner we watched a movie.',
          'After dinner we, watched a movie.'
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
          'Before',
          'Against',
          'Again'
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
          'Very careful',
          'Impatient',
          'Confused'
        ],
        answer: 'Very careful'
      },
      {
        question: 'Which sentence is grammatically correct?',
        options: [
          'Neither of the answers are correct.',
          'Neither of the answers is correct.',
          'Neither of the answer is correct.',
          'Neither answers are correct.'
        ],
        answer: 'Neither of the answers is correct.'
      },
      {
        question: 'What does the expression "once in a blue moon" mean?',
        options: [
          'Every evening',
          'Very rarely',
          'Without warning',
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
          'The company changed its logo.',
          "Its going to rain tonight.",
          "The tree lost it's leaves."
        ],
        answer: 'The company changed its logo.'
      },
      {
        question: 'Which word contains a suffix meaning "without"?',
        options: [
          'Fearless',
          'Fearful',
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
          'Clear',
          'Clearly',
          'Clearing',
          'Cleared'
        ],
        answer: 'Clear'
      },
      {
        question: 'What is the plural of "criterion"?',
        options: [
          'Criterions',
          'Criteria',
          'Criterias',
          'Criterion'
        ],
        answer: 'Criteria'
      },
      {
        question: 'Which word is spelled correctly?',
        options: [
          'Definately',
          'Definitely',
          'Definitly',
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
          'Having more than one possible meaning',
          'Extremely obvious',
          'Impossible to hear',
          'Completely incorrect'
        ],
        answer: 'Having more than one possible meaning'
      },
      {
        question: 'Which sentence uses "fewer" correctly?',
        options: [
          'There is fewer water in the bottle.',
          'We had fewer customers today.',
          'She drank fewer coffee than yesterday.',
          'There was fewer traffic this morning.'
        ],
        answer: 'We had fewer customers today.'
      },
      {
        question: 'Which word is closest in meaning to "concise"?',
        options: [
          'Brief',
          'Confusing',
          'Emotional',
          'Repetitive'
        ],
        answer: 'Brief'
      },
      {
        question: 'What does the phrase "read between the lines" mean?',
        options: [
          'Skip every second line',
          'Look for an implied meaning',
          'Read very quickly',
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
          'Clear',
          'Open',
          'Obscure',
          'Direct'
        ],
        answer: 'Obscure'
      },
      {
        question: 'Which word best completes the sentence: "The new policy will ___ every employee."',
        options: [
          'Effect',
          'Affect',
          'Effects',
          'Affected'
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
          'Swim',
          'Nest',
          'Feather',
          'Wing'
        ],
        answer: 'Swim'
      },
      {
        question: 'Which word is spelled correctly?',
        options: [
          'Separate',
          'Seperate',
          'Sepperate',
          'Seperrate'
        ],
        answer: 'Separate'
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
          'Joaquin Phoenix',
          'Jared Leto',
          'Heath Ledger',
          'Christian Bale'
        ],
        answer: 'Heath Ledger'
      },
      {
        question: 'Which band released the album "Abbey Road"?',
        options: [
          'The Rolling Stones',
          'The Beatles',
          'Pink Floyd',
          'Queen'
        ],
        answer: 'The Beatles'
      },
      {
        question: 'Which television series is primarily set in the fictional continents of Westeros and Essos?',
        options: [
          'The Witcher',
          'Game of Thrones',
          'Vikings',
          'The Rings of Power'
        ],
        answer: 'Game of Thrones'
      },
      {
        question: 'Which singer is widely known by the nickname "King of Pop"?',
        options: [
          'Elvis Presley',
          'Michael Jackson',
          'Prince',
          'Bruno Mars'
        ],
        answer: 'Michael Jackson'
      },
      {
        question: 'Who directed the film "Pulp Fiction"?',
        options: [
          'Martin Scorsese',
          'Christopher Nolan',
          'Quentin Tarantino',
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
          'Johnny Depp',
          'Brad Pitt',
          'Tom Cruise'
        ],
        answer: 'Johnny Depp'
      },
      {
        question: 'Neo is the central character in which science-fiction film franchise?',
        options: [
          'Inception',
          'The Matrix',
          'Blade Runner',
          'Tron'
        ],
        answer: 'The Matrix'
      },
      {
        question: 'Which singer released the album "1989"?',
        options: [
          'Ariana Grande',
          'Taylor Swift',
          'Rihanna',
          'Dua Lipa'
        ],
        answer: 'Taylor Swift'
      },
      {
        question: 'Woody and Buzz Lightyear are characters from which animated film series?',
        options: [
          'Toy Story',
          'Shrek',
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
          'Robert Downey Jr.',
          'Mark Ruffalo',
          'Chris Hemsworth'
        ],
        answer: 'Robert Downey Jr.'
      },
      {
        question: 'Which band originally recorded "Bohemian Rhapsody"?',
        options: [
          'Queen',
          'The Beatles',
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
          'Jurassic Park',
          'Avatar',
          'Jaws',
          'King Kong'
        ],
        answer: 'Jurassic Park'
      },
      {
        question: 'Which singer released the hit song "Rolling in the Deep"?',
        options: [
          'Adele',
          'Beyoncé',
          'Rihanna',
          'Sia'
        ],
        answer: 'Adele'
      },
      {
        question: 'The character Eleven appears in which television series?',
        options: [
          'Dark',
          'Stranger Things',
          'Lost',
          'Westworld'
        ],
        answer: 'Stranger Things'
      },
      {
        question: 'Batman is most closely associated with which fictional city?',
        options: [
          'Star City',
          'Metropolis',
          'Gotham City',
          'Central City'
        ],
        answer: 'Gotham City'
      },
      {
        question: 'What is the name of the coffee shop frequently visited by the characters in "Friends"?',
        options: [
          'Central Perk',
          'Monk’s Café',
          'Luke’s Diner',
          'The Peach Pit'
        ],
        answer: 'Central Perk'
      },
      {
        question: 'Pandora is the setting for much of which film franchise?',
        options: [
          'Avatar',
          'Titanic',
          'Gladiator',
          'Interstellar'
        ],
        answer: 'Avatar'
      },
      {
        question: 'Coldplay was formed in which country?',
        options: [
          'United States',
          'Australia',
          'United Kingdom',
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
          'Hogwarts',
          'Beauxbatons',
          'Durmstrang',
          'Ilvermorny'
        ],
        answer: 'Hogwarts'
      },
      {
        question: 'The One Ring is central to the story of which fantasy film trilogy?',
        options: [
          'The Chronicles of Narnia',
          'The Lord of the Rings',
          'Harry Potter',
          'The Hunger Games'
        ],
        answer: 'The Lord of the Rings'
      },
      {
        question: 'Beyoncé first rose to widespread fame as a member of which group?',
        options: [
          'TLC',
          'Destiny’s Child',
          'En Vogue',
          'The Pussycat Dolls'
        ],
        answer: 'Destiny’s Child'
      },
      {
        question: 'Which actor played Walter White in the television series "Breaking Bad"?',
        options: [
          'Bryan Cranston',
          'Aaron Paul',
          'Bob Odenkirk',
          'Jon Hamm'
        ],
        answer: 'Bryan Cranston'
      },
      {
        question: 'Wakanda is the fictional home nation of which Marvel superhero?',
        options: [
          'Doctor Strange',
          'Black Panther',
          'Spider-Man',
          'Ant-Man'
        ],
        answer: 'Black Panther'
      },
      {
        question: 'What type of car is used as the time machine in "Back to the Future"?',
        options: [
          'Ferrari',
          'DeLorean',
          'Mustang',
          'Porsche'
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
          'Pikachu',
          'Charmander',
          'Squirtle',
          'Jigglypuff'
        ],
        answer: 'Pikachu'
      },
      {
        question: 'Who directed the 2023 film "Barbie"?',
        options: [
          'Greta Gerwig',
          'Sofia Coppola',
          'Patty Jenkins',
          'Chloé Zhao'
        ],
        answer: 'Greta Gerwig'
      },
      {
        question: 'Which fictional archaeologist is known for carrying a whip and wearing a fedora?',
        options: [
          'Indiana Jones',
          'Rick O’Connell',
          'Allan Quatermain',
          'Nathan Drake'
        ],
        answer: 'Indiana Jones'
      }
    ]

  ],

  /*
  ---------------------------------------------------
  CHALLENGE 4 — HISTORY
  ---------------------------------------------------
  */

  4: [

    [
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
        options: ['1943', '1945', '1947', '1950'],
        answer: '1945'
      },
      {
        question: 'Civilization that built pyramids?',
        options: [
          'Romans',
          'Egyptians',
          'Greeks',
          'Mayans'
        ],
        answer: 'Egyptians'
      },
      {
        question: 'French Revolution began?',
        options: ['1776', '1789', '1804', '1812'],
        answer: '1789'
      },
      {
        question: 'WWII British Prime Minister?',
        options: [
          'Neville Chamberlain',
          'Winston Churchill',
          'Margaret Thatcher',
          'Tony Blair'
        ],
        answer: 'Winston Churchill'
      },
      {
        question: 'Ship that sank in 1912?',
        options: [
          'Lusitania',
          'Titanic',
          'Britannic',
          'Queen Mary'
        ],
        answer: 'Titanic'
      },
      {
        question: 'Renaissance began where?',
        options: [
          'France',
          'Germany',
          'Italy',
          'Spain'
        ],
        answer: 'Italy'
      },
      {
        question: 'Wall that fell in 1989?',
        options: [
          'Hadrian’s Wall',
          'Berlin Wall',
          'Great Wall',
          'Western Wall'
        ],
        answer: 'Berlin Wall'
      },
      {
        question: 'Empire ruled by Julius Caesar?',
        options: [
          'Greek Empire',
          'Roman Republic',
          'Ottoman Empire',
          'British Empire'
        ],
        answer: 'Roman Republic'
      },
      {
        question: 'WWI ended in?',
        options: ['1917', '1918', '1919', '1920'],
        answer: '1918'
      }
    ],

    [
      {
        question: 'Which explorer reached the Americas in 1492?',
        options: [
          'Ferdinand Magellan',
          'Christopher Columbus',
          'James Cook',
          'Amerigo Vespucci'
        ],
        answer: 'Christopher Columbus'
      },
      {
        question: 'Great Wall built in which country?',
        options: [
          'Japan',
          'China',
          'Korea',
          'Vietnam'
        ],
        answer: 'China'
      },
      {
        question: 'Leader of Soviet Union during WWII?',
        options: [
          'Joseph Stalin',
          'Vladimir Lenin',
          'Nikita Khrushchev',
          'Vladimir Putin'
        ],
        answer: 'Joseph Stalin'
      },
      {
        question: 'Ancient Greek philosopher who taught Alexander the Great?',
        options: [
          'Plato',
          'Aristotle',
          'Socrates',
          'Pythagoras'
        ],
        answer: 'Aristotle'
      },
      {
        question: 'Empire ruled by Genghis Khan?',
        options: [
          'Roman',
          'Mongol',
          'Ottoman',
          'Persian'
        ],
        answer: 'Mongol'
      },
      {
        question: 'First man on the Moon?',
        options: [
          'Buzz Aldrin',
          'Neil Armstrong',
          'Yuri Gagarin',
          'John Glenn'
        ],
        answer: 'Neil Armstrong'
      },
      {
        question: 'Which wall divided Germany during the Cold War?',
        options: [
          'Berlin Wall',
          'Iron Curtain',
          'Great Wall',
          'Hadrian Wall'
        ],
        answer: 'Berlin Wall'
      },
      {
        question: 'Which famous arena is located in Rome?',
        options: [
          'Pantheon',
          'Colosseum',
          'Forum',
          'Acropolis'
        ],
        answer: 'Colosseum'
      },
      {
        question: 'Where was Napoleon defeated in his final battle?',
        options: [
          'Waterloo',
          'Verdun',
          'Trafalgar',
          'Somme'
        ],
        answer: 'Waterloo'
      },
      {
        question: 'Ancient writing system of Egypt?',
        options: [
          'Runes',
          'Hieroglyphics',
          'Cuneiform',
          'Latin'
        ],
        answer: 'Hieroglyphics'
      }
    ]

  ],

  /*
  ---------------------------------------------------
  CHALLENGE 5 — SMART NUMBERS
  ---------------------------------------------------
  */

  5: [

    [
      {
        question: 'What is 15% of 200?',
        options: ['25', '30', '35', '40'],
        answer: '30'
      },
      {
        question: 'If you travel at 60 km/h for 2 hours, how far do you go?',
        options: ['100', '110', '120', '140'],
        answer: '120'
      },
      {
        question: 'What is the next number in the sequence: 2, 4, 8, 16, ...?',
        options: ['24', '28', '32', '36'],
        answer: '32'
      },
      {
        question: 'What is $80 reduced by 25%?',
        options: ['55', '60', '65', '70'],
        answer: '60'
      },
      {
        question: 'What is 12 squared?',
        options: ['124', '134', '144', '154'],
        answer: '144'
      },
      {
        question: 'What is the average of 2, 4, and 6?',
        options: ['3', '4', '5', '6'],
        answer: '4'
      },
      {
        question: 'Solve for x: 3x = 21',
        options: ['6', '7', '8', '9'],
        answer: '7'
      },
      {
        question: 'What is 9 × 7?',
        options: ['54', '63', '72', '81'],
        answer: '63'
      },
      {
        question: 'What is the area of a rectangle with sides 10 and 5?',
        options: ['40', '45', '50', '55'],
        answer: '50'
      },
      {
        question: 'What is half of 250?',
        options: ['100', '110', '120', '125'],
        answer: '125'
      }
    ],

    [
      {
        question: 'What is 20% of 150?',
        options: ['20', '25', '30', '35'],
        answer: '30'
      },
      {
        question: 'What is the next number in the sequence: 3, 6, 9, 12, ...?',
        options: ['15', '18', '21', '24'],
        answer: '15'
      },
      {
        question: 'What is 7 × 8?',
        options: ['54', '56', '58', '60'],
        answer: '56'
      },
      {
        question: 'What is the average of 10, 20, and 30?',
        options: ['15', '20', '25', '30'],
        answer: '20'
      },
      {
        question: 'What is 15 squared?',
        options: ['200', '210', '225', '240'],
        answer: '225'
      },
      {
        question: 'What is half of 400?',
        options: ['150', '180', '200', '220'],
        answer: '200'
      },
      {
        question: 'Solve for x: 5x = 25',
        options: ['3', '4', '5', '6'],
        answer: '5'
      },
      {
        question: 'What is the area of a 6 × 6 square?',
        options: ['30', '36', '40', '42'],
        answer: '36'
      },
      {
        question: 'What is the next number in the sequence: 5, 10, 15, ...?',
        options: ['20', '25', '30', '35'],
        answer: '20'
      },
      {
        question: 'What is 10% of 500?',
        options: ['40', '50', '60', '70'],
        answer: '50'
      }
    ]

  ],

  /*
  ---------------------------------------------------
  CHALLENGE 6 — SCIENCE
  ---------------------------------------------------
  */

  6: [

    [
      {
        question: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        answer: 'Mars'
      },
      {
        question: 'Which gas do humans need to breathe to survive?',
        options: ['Nitrogen', 'Oxygen', 'Hydrogen', 'Helium'],
        answer: 'Oxygen'
      },
      {
        question: 'What is the chemical symbol for gold?',
        options: ['Ag', 'Au', 'Gd', 'Go'],
        answer: 'Au'
      },
      {
        question: 'Which organ pumps blood around the human body?',
        options: ['Lungs', 'Brain', 'Heart', 'Liver'],
        answer: 'Heart'
      },
      {
        question: 'Which is the largest planet in our solar system?',
        options: ['Earth', 'Saturn', 'Jupiter', 'Neptune'],
        answer: 'Jupiter'
      },
      {
        question: 'What force keeps planets in orbit around the Sun?',
        options: ['Magnetism', 'Friction', 'Gravity', 'Radiation'],
        answer: 'Gravity'
      },
      {
        question: 'At what temperature does water freeze?',
        options: ['0°C', '10°C', '-5°C', '32°C'],
        answer: '0°C'
      },
      {
        question: 'What process do plants use to make their own food?',
        options: [
          'Respiration',
          'Digestion',
          'Photosynthesis',
          'Fermentation'
        ],
        answer: 'Photosynthesis'
      },
      {
        question: 'Which part of a cell contains genetic material',
        options: ['Cytoplasm', 'Nucleus', 'Membrane', 'Ribosome'],
        answer: 'Nucleus'
      },
      {
        question: 'Which vitamin is produced when the skin is exposed to sunlight?',
        options: ['A', 'B12', 'C', 'D'],
        answer: 'Vitamin D'
      }
    ],

    [
      {
        question: 'What is the largest organ in human body?',
        options: ['Heart', 'Liver', 'Skin', 'Brain'],
        answer: 'Skin'
      },
      {
        question: 'Which gas is most abundant in the Earth’s atmosphere?',
        options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
        answer: 'Nitrogen'
      },
      {
        question: 'What is Earth’s natural satellite?',
        options: ['Moon', 'Mars', 'Europa', 'Titan'],
        answer: 'Moon'
      },
      {
        question: 'What part of the human body is responsible for breathing?',
        options: ['Heart', 'Lungs', 'Brain', 'Liver'],
        answer: 'Lungs'
      },
      {
        question: 'What type of energy comes from the Sun?',
        options: ['Solar', 'Thermal', 'Nuclear', 'Electric'],
        answer: 'Solar'
      },
      {
        question: 'Which is the largest ocean on Earth?',
        options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'],
        answer: 'Pacific'
      },
      {
        question: 'Which planet is known for its prominent rings?',
        options: ['Mars', 'Saturn', 'Venus', 'Mercury'],
        answer: 'Saturn'
      },
      {
        question: 'How many bones are in the human body?',
        options: ['106', '206', '306', '406'],
        answer: '206'
      },
      {
        question: 'What is the center of an atom called?',
        options: ['Core', 'Nucleus', 'Cell', 'Atom'],
        answer: 'Nucleus'
      },
      {
        question: 'What is the fastest land animal?',
        options: ['Lion', 'Cheetah', 'Tiger', 'Leopard'],
        answer: 'Cheetah'
      }
    ]

  ],

  /*
  ---------------------------------------------------
  CHALLENGE 7 — GEOGRAPHY
  ---------------------------------------------------
  */

  7: [

    [
      {
        question: 'Which country has the most time zones?',
        options: ['Russia', 'USA', 'France', 'UK'],
        answer: 'France'
      },
      {
        question: 'Mount Kilimanjaro is located in which country?',
        options: ['Kenya', 'Tanzania', 'Uganda', 'Ethiopia'],
        answer: 'Tanzania'
      },
      {
        question: 'Which river flows through the city of Budapest?',
        options: ['Rhine', 'Danube', 'Seine', 'Thames'],
        answer: 'Danube'
      },
      {
        question: 'What is the smallest country in the world?',
        options: [
          'Monaco',
          'Vatican City',
          'San Marino',
          'Liechtenstein'
        ],
        answer: 'Vatican City'
      },
      {
        question: 'Which is the largest hot desert in the world?',
        options: ['Gobi', 'Kalahari', 'Sahara', 'Atacama'],
        answer: 'Sahara'
      },
      {
        question: 'Which sea lies between Europe and Africa?',
        options: ['Baltic', 'Black', 'Mediterranean', 'Caribbean'],
        answer: 'Mediterranean'
      },
      {
        question: 'Which country is known as the "Land of the Rising Sun"?',
        options: ['China', 'Japan', 'Korea', 'Thailand'],
        answer: 'Japan'
      },
      {
        question: 'Which is the largest U.S. state by land area?',
        options: ['Texas', 'California', 'Alaska', 'Montana'],
        answer: 'Alaska'
      },
      {
        question: 'Casablanca is a city in which country?',
        options: ['Spain', 'Morocco', 'Tunisia', 'Egypt'],
        answer: 'Morocco'
      },
      {
        question: 'The Andes mountain range is located on which continent?',
        options: [
          'North America',
          'Europe',
          'South America',
          'Asia'
        ],
        answer: 'South America'
      }
    ],

    [
      {
        question: 'What is the capital city of Australia?',
        options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
        answer: 'Canberra'
      },
      {
        question: 'Which is the longest river in the world?',
        options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
        answer: 'Nile'
      },
      {
        question: 'Which is the largest continent by land area?',
        options: ['Africa', 'Asia', 'Europe', 'North America'],
        answer: 'Asia'
      },
      {
        question: 'Which country is the city of Dubai located in?',
        options: ['Qatar', 'UAE', 'Oman', 'Saudi Arabia'],
        answer: 'UAE'
      },
      {
        question: 'Mount Everest is located in which country?',
        options: ['Nepal', 'India', 'China', 'Bhutan'],
        answer: 'Nepal'
      },
      {
        question: 'Which river flows through the city of Paris?',
        options: ['Rhine', 'Seine', 'Danube', 'Thames'],
        answer: 'Seine'
      },
      {
        question: 'Which is the largest island in the world?',
        options: ['Greenland', 'Iceland', 'Borneo', 'Madagascar'],
        answer: 'Greenland'
      },
      {
        question: 'What is the capital city of Italy?',
        options: ['Rome', 'Milan', 'Venice', 'Naples'],
        answer: 'Rome'
      },
      {
        question: 'Which continent has the most countries?',
        options: ['Asia', 'Africa', 'Europe', 'South America'],
        answer: 'Africa'
      },
      {
        question: 'The Great Barrier Reef is located in which sea?',
        options: [
          'Coral Sea',
          'Tasman Sea',
          'Arafura Sea',
          'Timor Sea'
        ],
        answer: 'Coral Sea'
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

  const rotationIndex = getRotationIndex(today, sets.length)

  return sets[rotationIndex]
}
