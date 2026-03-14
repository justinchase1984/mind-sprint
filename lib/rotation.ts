// lib/rotation.ts
import type { Puzzle } from './puzzles'

/*
Rotation System
---------------
• Each challenge can contain multiple sets.
• The site rotates sets every 2 days.
• Day 1–2 → Set A
• Day 3–4 → Set B
• Day 5–6 → Set A
• Day 7–8 → Set B
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
Challenge Question Sets
Set A = Original 7 niche categories
Set B = Sports
*/

const CHALLENGE_SETS: Record<number, Puzzle[][]> = {

  /*
  ---------------------------------------------------
  CHALLENGE 1
  Set A – General Knowledge
  Set B – Sports
  ---------------------------------------------------
  */

  1: [

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
        question: 'Which planet in our solar system has the most moons?',
        options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        answer: 'Saturn',
      },
      {
        question: 'In economics, what does GDP stand for?',
        options: [
          'Gross Domestic Product',
          'General Development Policy',
          'Global Debt Percentage',
          'Government Distribution Plan',
        ],
        answer: 'Gross Domestic Product',
      },
      {
        question: 'Which ocean is the largest by surface area?',
        options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'],
        answer: 'Pacific',
      },
      {
        question: 'Who wrote the novel “1984”?',
        options: ['Aldous Huxley', 'George Orwell', 'Ray Bradbury', 'Ernest Hemingway'],
        answer: 'George Orwell',
      },
      {
        question: 'What is the chemical symbol for potassium?',
        options: ['P', 'Pt', 'Po', 'K'],
        answer: 'K',
      },
      {
        question: 'Which country hosted the 2016 Summer Olympics?',
        options: ['China', 'Brazil', 'United Kingdom', 'Japan'],
        answer: 'Brazil',
      },
      {
        question: 'What type of animal is a Komodo dragon?',
        options: ['Mammal', 'Amphibian', 'Reptile', 'Bird'],
        answer: 'Reptile',
      },
      {
        question: 'Which instrument has 88 keys on a standard model?',
        options: ['Organ', 'Harpsichord', 'Piano', 'Synthesizer'],
        answer: 'Piano',
      },
    ],

    [
      {
        question: 'How many players are on the field for one soccer team during normal play?',
        options: ['9', '10', '11', '12'],
        answer: '11',
      },
      {
        question: 'Which sport uses a racket, shuttlecock, and a net?',
        options: ['Squash', 'Badminton', 'Tennis', 'Table Tennis'],
        answer: 'Badminton',
      },
      {
        question: 'Which country hosts the famous Wimbledon tennis tournament?',
        options: ['United States', 'Australia', 'France', 'United Kingdom'],
        answer: 'United Kingdom',
      },
      {
        question: 'In basketball, how many points is a free throw worth?',
        options: ['1', '2', '3', '4'],
        answer: '1',
      },
      {
        question: 'Which sport features the Tour de France?',
        options: ['Cycling', 'Running', 'Rowing', 'Motor Racing'],
        answer: 'Cycling',
      },
      {
        question: 'In cricket, what is the maximum number of runs scored from one legal delivery?',
        options: ['4', '5', '6', '8'],
        answer: '6',
      },
      {
        question: 'Which Olympic sport uses apparatus such as rings and parallel bars?',
        options: ['Gymnastics', 'Fencing', 'Diving', 'Weightlifting'],
        answer: 'Gymnastics',
      },
      {
        question: 'Which sport is played at the Masters Tournament?',
        options: ['Golf', 'Tennis', 'Snooker', 'Baseball'],
        answer: 'Golf',
      },
      {
        question: 'Which sport is known as “the beautiful game”?',
        options: ['Basketball', 'Soccer', 'Tennis', 'Rugby'],
        answer: 'Soccer',
      },
      {
        question: 'In Formula 1, what flag signals the end of a race?',
        options: ['Red', 'Yellow', 'Checkered', 'Blue'],
        answer: 'Checkered',
      },
    ],
  ],

  /*
  ---------------------------------------------------
  CHALLENGE 2
  ---------------------------------------------------
  */

  2: [
    [
      {
        question: 'What is the meaning of the word “meticulous”?',
        options: ['Careless', 'Very careful and precise', 'Quick-tempered', 'Overconfident'],
        answer: 'Very careful and precise',
      },
      {
        question: 'Which of the following is a synonym for “scarce”?',
        options: ['Rare', 'Large', 'Obvious', 'Common'],
        answer: 'Rare',
      },
      {
        question: 'Which sentence is grammatically correct?',
        options: [
          'She don’t like coffee.',
          'She doesn’t likes coffee.',
          'She doesn’t like coffee.',
          'She don’t likes coffee.',
        ],
        answer: 'She doesn’t like coffee.',
      },
      {
        question: 'What is the plural form of “analysis”?',
        options: ['Analysises', 'Analysis', 'Analyses', 'Analyssis'],
        answer: 'Analyses',
      },
      {
        question: 'Which word is an antonym of “expand”?',
        options: ['Increase', 'Stretch', 'Contract', 'Develop'],
        answer: 'Contract',
      },
      {
        question: 'What is an acronym?',
        options: [
          'A word formed from the first letters of other words',
          'A word with two meanings',
          'A shortened form of a word',
          'A word spelled backwards',
        ],
        answer: 'A word formed from the first letters of other words',
      },
      {
        question: 'Which word is spelled correctly?',
        options: ['Definately', 'Definitely', 'Defanitely', 'Definetely'],
        answer: 'Definitely',
      },
      {
        question: 'The word “benevolent” most closely means:',
        options: ['Generous', 'Angry', 'Confused', 'Suspicious'],
        answer: 'Generous',
      },
      {
        question: 'Which of the following is a compound word?',
        options: ['Happiness', 'Notebook', 'Running', 'Careful'],
        answer: 'Notebook',
      },
      {
        question: 'He spoke so quietly that I could barely ____ him.',
        options: ['hear', 'listen', 'watch', 'see'],
        answer: 'hear',
      },
    ],

    // Set B sports
    [
      {
        question: 'How many holes are played in a standard round of golf?',
        options: ['9', '12', '18', '24'],
        answer: '18',
      },
      {
        question: 'Which sport is played at the Super Bowl?',
        options: ['Basketball', 'Baseball', 'American Football', 'Ice Hockey'],
        answer: 'American Football',
      },
      {
        question: 'Which sport uses a puck instead of a ball?',
        options: ['Ice Hockey', 'Lacrosse', 'Handball', 'Rugby'],
        answer: 'Ice Hockey',
      },
      {
        question: 'In tennis, what score comes after 30?',
        options: ['40', '45', '50', '60'],
        answer: '40',
      },
      {
        question: 'Which sport features the Ashes series?',
        options: ['Cricket', 'Rugby', 'Baseball', 'Tennis'],
        answer: 'Cricket',
      },
      {
        question: 'Which sport involves throwing a javelin the farthest?',
        options: ['Athletics', 'Shot Put', 'Discus', 'Javelin'],
        answer: 'Javelin',
      },
      {
        question: 'How many players are on a basketball team on court at one time?',
        options: ['4', '5', '6', '7'],
        answer: '5',
      },
      {
        question: 'Which sport uses a pommel horse?',
        options: ['Gymnastics', 'Dressage', 'Fencing', 'Wrestling'],
        answer: 'Gymnastics',
      },
      {
        question: 'In which sport would you perform a slam dunk?',
        options: ['Volleyball', 'Basketball', 'Handball', 'Water Polo'],
        answer: 'Basketball',
      },
      {
        question: 'Which sport involves hitting a ball over a net using hands?',
        options: ['Volleyball', 'Handball', 'Tennis', 'Badminton'],
        answer: 'Volleyball',
      },
    ],
  ],

  /*
  Remaining challenges (3–7)
  Use same structure as above
  Set A = your approved niche
  Set B = sports questions already provided
  */

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
