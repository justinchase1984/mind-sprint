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

    /*
    SET A
    */

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
          'Egyptians',
          'Greeks',
          'Persians'
        ],
        answer: 'Egyptians'
      },
      {
        question: 'In which year did the French Revolution begin?',
        options: [
          '1776',
          '1789',
          '1804',
          '1815'
        ],
        answer: '1789'
      },
      {
        question: 'Who became British Prime Minister in May 1940 and led Britain for most of World War II?',
        options: [
          'Neville Chamberlain',
          'Winston Churchill',
          'Clement Attlee',
          'Anthony Eden'
        ],
        answer: 'Winston Churchill'
      },
      {
        question: 'Which passenger liner struck an iceberg and sank in 1912?',
        options: [
          'Lusitania',
          'Titanic',
          'Britannic',
          'Queen Mary'
        ],
        answer: 'Titanic'
      },
      {
        question: 'The Renaissance first developed most strongly in which part of Europe?',
        options: [
          'Italian city-states',
          'Scandinavia',
          'British Isles',
          'Iberian Peninsula'
        ],
        answer: 'Italian city-states'
      },
      {
        question: 'Which major Cold War barrier was opened in November 1989?',
        options: [
          'Hadrian’s Wall',
          'Berlin Wall',
          'Great Wall of China',
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
          '1918',
          '1919'
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
          'China',
          'Korea',
          'Vietnam'
        ],
        answer: 'China'
      },
      {
        question: 'Who led the Soviet Union for most of World War II?',
        options: [
          'Joseph Stalin',
          'Vladimir Lenin',
          'Nikita Khrushchev',
          'Leon Trotsky'
        ],
        answer: 'Joseph Stalin'
      },
      {
        question: 'Which ancient Greek philosopher tutored Alexander the Great?',
        options: [
          'Plato',
          'Aristotle',
          'Socrates',
          'Pythagoras'
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
          'Buzz Aldrin',
          'Neil Armstrong',
          'Yuri Gagarin',
          'John Glenn'
        ],
        answer: 'Neil Armstrong'
      },
      {
        question: 'Which ancient amphitheatre is one of the best-known landmarks of Rome?',
        options: [
          'Pantheon',
          'Colosseum',
          'Parthenon',
          'Acropolis'
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
          'Hieroglyphs',
          'Cuneiform',
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
          'Sumerians',
          'Vikings',
          'Phoenicians',
          'Romans'
        ],
        answer: 'Sumerians'
      },
      {
        question: 'Which ruler is associated with one of the earliest surviving written law codes?',
        options: [
          'Hammurabi',
          'Pericles',
          'Augustus',
          'Cleopatra'
        ],
        answer: 'Hammurabi'
      },
      {
        question: 'Which trade network historically connected East Asia with Central Asia, the Middle East and Europe?',
        options: [
          'Silk Road',
          'Amber Road',
          'Royal Road',
          'Appian Way'
        ],
        answer: 'Silk Road'
      },
      {
        question: 'Which city served as the capital of the Byzantine Empire for most of its history?',
        options: [
          'Constantinople',
          'Alexandria',
          'Athens',
          'Venice'
        ],
        answer: 'Constantinople'
      },
      {
        question: 'Which empire used knotted cords called quipu for recording information?',
        options: [
          'Inca Empire',
          'Roman Empire',
          'Mali Empire',
          'Ottoman Empire'
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
          'Hundred Years’ War',
          'Thirty Years’ War',
          'Napoleonic Wars',
          'Crimean War'
        ],
        answer: 'Hundred Years’ War'
      },
      {
        question: 'Which document, signed in 1776, declared the thirteen American colonies independent from Great Britain?',
        options: [
          'Declaration of Independence',
          'Bill of Rights',
          'Magna Carta',
          'Treaty of Versailles'
        ],
        answer: 'Declaration of Independence'
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
          '30',
          '36',
          '42'
        ],
        answer: '36'
      },
      {
        question: 'A car travels at 72 km/h for 2.5 hours. How far does it travel?',
        options: [
          '144 km',
          '160 km',
          '180 km',
          '200 km'
        ],
        answer: '180 km'
      },
      {
        question: 'What number comes next in the sequence: 3, 6, 12, 24, ...?',
        options: [
          '36',
          '42',
          '48',
          '54'
        ],
        answer: '48'
      },
      {
        question: 'An item costs $160 and is reduced by 25%. What is the sale price?',
        options: [
          '$100',
          '$120',
          '$125',
          '$140'
        ],
        answer: '$120'
      },
      {
        question: 'What is 14 squared?',
        options: [
          '176',
          '186',
          '196',
          '206'
        ],
        answer: '196'
      },
      {
        question: 'What is the average of 12, 18, 24 and 30?',
        options: [
          '18',
          '20',
          '21',
          '22'
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
          '10',
          '12',
          '15'
        ],
        answer: '10'
      },
      {
        question: 'What is the area of a rectangle that is 12 metres long and 7 metres wide?',
        options: [
          '72 m²',
          '84 m²',
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
          '24',
          '28'
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
          '45',
          '50',
          '55'
        ],
        answer: '45'
      },
      {
        question: 'A price of $80 increases by 15%. What is the new price?',
        options: [
          '$88',
          '$90',
          '$92',
          '$94'
        ],
        answer: '$92'
      },
      {
        question: 'What number comes next in the sequence: 2, 5, 11, 23, ...?',
        options: [
          '35',
          '41',
          '47',
          '49'
        ],
        answer: '47'
      },
      {
        question: 'Five identical items cost $37.50 in total. How much does one item cost?',
        options: [
          '$6.50',
          '$7.00',
          '$7.50',
          '$8.00'
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
          '81 cm²',
          '90 cm²',
          '108 cm²'
        ],
        answer: '81 cm²'
      },
      {
        question: 'What percentage is equivalent to 7/10?',
        options: [
          '7%',
          '17%',
          '70%',
          '700%'
        ],
        answer: '70%'
      },
      {
        question: 'Solve for x: 2x - 5 = 17',
        options: [
          '9',
          '10',
          '11',
          '12'
        ],
        answer: '11'
      },
      {
        question: 'A vehicle travels 150 km in 2.5 hours. What is its average speed?',
        options: [
          '50 km/h',
          '60 km/h',
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
          '60',
          '75'
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
          '24',
          '30',
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
          '25',
          '36'
        ],
        answer: '25'
      },
      {
        question: 'A $75 item is discounted by 20%. What is the sale price?',
        options: [
          '$55',
          '$60',
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
          '2,075',
          '2,750'
        ],
        answer: '2,750'
      },
      {
        question: 'Three notebooks cost $13.50. At the same price per notebook, how much would eight notebooks cost?',
        options: [
          '$32',
          '$34',
          '$36',
          '$38'
        ],
        answer: '$36'
      },
      {
        question: 'Red and blue marbles are in the ratio 3:5. If there are 40 marbles altogether, how many are red?',
        options: [
          '12',
          '15',
          '18',
          '25'
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
          '18',
          '24',
          '30',
          '42'
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
          'Nucleus',
          'Mitochondrion',
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
          'Na',
          'N'
        ],
        answer: 'Na'
      },
      {
        question: 'Which force causes objects with mass to attract one another?',
        options: [
          'Gravity',
          'Friction',
          'Magnetism',
          'Buoyancy'
        ],
        answer: 'Gravity'
      },
      {
        question: 'Which type of blood cell is primarily responsible for carrying oxygen around the body?',
        options: [
          'Red blood cells',
          'White blood cells',
          'Platelets',
          'Stem cells'
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
          'Mantle',
          'Outer core',
          'Inner core',
          'Atmosphere'
        ],
        answer: 'Mantle'
      },
      {
        question: 'What is the name of the process in which liquid water changes into water vapour?',
        options: [
          'Condensation',
          'Evaporation',
          'Freezing',
          'Precipitation'
        ],
        answer: 'Evaporation'
      },
      {
        question: 'Which planet is closest to the Sun?',
        options: [
          'Venus',
          'Earth',
          'Mercury',
          'Mars'
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
          'DNA',
          'Glucose',
          'Insulin',
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
          'Oxygen',
          'Nitrogen',
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
          'Roots',
          'Flowers',
          'Leaves',
          'Fruit'
        ],
        answer: 'Roots'
      },
      {
        question: 'What is the SI unit of force?',
        options: [
          'Joule',
          'Newton',
          'Watt',
          'Pascal'
        ],
        answer: 'Newton'
      },
      {
        question: 'Which process releases energy from glucose inside cells?',
        options: [
          'Cellular respiration',
          'Photosynthesis',
          'Transpiration',
          'Osmosis'
        ],
        answer: 'Cellular respiration'
      },
      {
        question: 'Which rock type forms when molten rock cools and solidifies?',
        options: [
          'Igneous',
          'Sedimentary',
          'Metamorphic',
          'Fossil'
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
          'Pancreas',
          'Kidney',
          'Spleen',
          'Gallbladder'
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
          'Reflection',
          'Refraction',
          'Diffusion',
          'Radiation'
        ],
        answer: 'Refraction'
      },
      {
        question: 'Which organ filters the blood to remove wastes and produce urine?',
        options: [
          'Kidneys',
          'Lungs',
          'Stomach',
          'Pancreas'
        ],
        answer: 'Kidneys'
      },
      {
        question: 'What is the chemical formula for carbon dioxide?',
        options: [
          'CO',
          'CO₂',
          'C₂O',
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
          'Iris',
          'Retina',
          'Cornea',
          'Optic nerve'
        ],
        answer: 'Iris'
      },
      {
        question: 'Which process allows plants to convert light energy into chemical energy?',
        options: [
          'Photosynthesis',
          'Respiration',
          'Fermentation',
          'Digestion'
        ],
        answer: 'Photosynthesis'
      },
      {
        question: 'What is the name of the point directly above an earthquake’s focus on Earth’s surface?',
        options: [
          'Epicentre',
          'Fault line',
          'Crater',
          'Mantle'
        ],
        answer: 'Epicentre'
      },
      {
        question: 'Which planet has the shortest year in our Solar System?',
        options: [
          'Mercury',
          'Venus',
          'Mars',
          'Jupiter'
        ],
        answer: 'Mercury'
      },
      {
        question: 'Which type of bond involves atoms sharing pairs of electrons?',
        options: [
          'Covalent bond',
          'Ionic bond',
          'Metallic bond',
          'Hydrogen bond'
        ],
        answer: 'Covalent bond'
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
          'Wellington',
          'Christchurch',
          'Hamilton'
        ],
        answer: 'Wellington'
      },
      {
        question: 'Which mountain range runs along much of the western edge of South America?',
        options: [
          'Andes',
          'Alps',
          'Rockies',
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
          'Nile',
          'Congo',
          'Niger',
          'Zambezi'
        ],
        answer: 'Nile'
      },
      {
        question: 'What is the capital city of Morocco?',
        options: [
          'Casablanca',
          'Marrakesh',
          'Rabat',
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
          'Malaysia',
          'Indonesia',
          'Philippines',
          'Thailand'
        ],
        answer: 'Indonesia'
      },
      {
        question: 'Which is the largest island in the world that is not classified as a continent?',
        options: [
          'Greenland',
          'New Guinea',
          'Borneo',
          'Madagascar'
        ],
        answer: 'Greenland'
      },
      {
        question: 'Which imaginary line divides Earth into the Northern and Southern Hemispheres?',
        options: [
          'Equator',
          'Prime Meridian',
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
          'Mombasa',
          'Nairobi',
          'Kampala',
          'Kigali'
        ],
        answer: 'Nairobi'
      },
      {
        question: 'The Bosporus runs through which major city?',
        options: [
          'Athens',
          'Istanbul',
          'Cairo',
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
          'Bass Strait',
          'Torres Strait',
          'Cook Strait',
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
          'Czechia',
          'Hungary',
          'Austria'
        ],
        answer: 'Czechia'
      },
      {
        question: 'Which river flows through Paris?',
        options: [
          'Rhine',
          'Seine',
          'Danube',
          'Thames'
        ],
        answer: 'Seine'
      },
      {
        question: 'Which body of water is the world’s largest inland body of water by surface area?',
        options: [
          'Caspian Sea',
          'Lake Superior',
          'Black Sea',
          'Lake Victoria'
        ],
        answer: 'Caspian Sea'
      },
      {
        question: 'Mount Everest lies on the border between Nepal and which country?',
        options: [
          'India',
          'Bhutan',
          'China',
          'Pakistan'
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
          'Pacific Ocean',
          'Arctic Ocean',
          'Southern Ocean'
        ],
        answer: 'Pacific Ocean'
      },
      {
        question: 'What is the capital city of Iceland?',
        options: [
          'Reykjavík',
          'Oslo',
          'Helsinki',
          'Stockholm'
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
          'Africa',
          'Asia',
          'South America',
          'Australia'
        ],
        answer: 'Africa'
      },
      {
        question: 'What is the capital city of Argentina?',
        options: [
          'Santiago',
          'Buenos Aires',
          'Montevideo',
          'Lima'
        ],
        answer: 'Buenos Aires'
      },
      {
        question: 'The ancient city of Petra is located in which modern-day country?',
        options: [
          'Jordan',
          'Egypt',
          'Lebanon',
          'Syria'
        ],
        answer: 'Jordan'
      },
      {
        question: 'Which country is especially famous for its long, deeply indented fjord coastline?',
        options: [
          'Norway',
          'Belgium',
          'Portugal',
          'Poland'
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
          'Ecuador',
          'Mexico',
          'Argentina',
          'Spain'
        ],
        answer: 'Ecuador'
      },
      {
        question: 'Which tropical latitude line passes through Australia?',
        options: [
          'Tropic of Capricorn',
          'Tropic of Cancer',
          'Arctic Circle',
          'Equator'
        ],
        answer: 'Tropic of Capricorn'
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
