// lib/rotation.ts
import type { Puzzle } from './puzzles'
import { getPuzzlesByDayIndex } from './utils'

type ChallengeIntro = { title: string; subtitle: string }

/**
 * Add complete 10-question sets per challenge here.
 * - If no sets are provided for a challenge, we fall back to rotating the ORDER
 *   of your baseline questions weekly (no content change).
 * - If sets ARE provided, we rotate weekly across [baseline, Set B, Set C, ...]
 *   so each week shows a full, fresh set.
 */
const EXTRA_SETS: Record<number, Puzzle[][]> = {
  1: [
    // Challenge 1 — Set B (General Knowledge, no repeats, balanced difficulty)
    [
      {
        question: 'Which ancient civilization built Machu Picchu?',
        options: ['Aztec', 'Inca', 'Maya', 'Olmec'],
        answer: 'Inca',
      },
      {
        question: 'The ancient city of Petra is located in which modern country?',
        options: ['Egypt', 'Jordan', 'Lebanon', 'Syria'],
        answer: 'Jordan',
      },
      {
        question: 'Which instrument is used to measure atmospheric pressure?',
        options: ['Thermometer', 'Hygrometer', 'Barometer', 'Anemometer'],
        answer: 'Barometer',
      },
      {
        question: 'What is the largest internal organ in the human body?',
        options: ['Liver', 'Lungs', 'Kidneys', 'Spleen'],
        answer: 'Liver',
      },
      {
        question:
          'Which chemical element has the highest electrical conductivity at room temperature?',
        options: ['Copper', 'Silver', 'Gold', 'Aluminum'],
        answer: 'Silver',
      },
      {
        question: 'Which continent has the highest number of countries?',
        options: ['Asia', 'Africa', 'Europe', 'South America'],
        answer: 'Africa',
      },
      {
        question: 'What is the world’s highest waterfall by uninterrupted drop?',
        options: ['Niagara Falls', 'Angel Falls', 'Iguazú Falls', 'Victoria Falls'],
        answer: 'Angel Falls',
      },
      {
        question: 'Which treaty formally ended World War I in 1919?',
        options: ['Treaty of Vienna', 'Treaty of Paris', 'Treaty of Versailles', 'Treaty of Utrecht'],
        answer: 'Treaty of Versailles',
      },
      {
        question: 'Who composed the violin concerti collection “The Four Seasons”?',
        options: [
          'Johann Sebastian Bach',
          'Antonio Vivaldi',
          'Wolfgang Amadeus Mozart',
          'Ludwig van Beethoven',
        ],
        answer: 'Antonio Vivaldi',
      },
      {
        question:
          'Which scientist popularized the theory of evolution by natural selection in “On the Origin of Species”?',
        options: ['Gregor Mendel', 'Charles Darwin', 'Alfred Russel Wallace', 'Louis Pasteur'],
        answer: 'Charles Darwin',
      },
    ],
  ],

  2: [
    // Challenge 2 — Set B (Definitions / Word Meanings)
    [
      {
        question: 'What is the meaning of the word “ephemeral”?',
        options: ['Lasting a very short time', 'Extremely large', 'Hidden or secret', 'Brightly colored'],
        answer: 'Lasting a very short time',
      },
      {
        question: 'Which author wrote “Pride and Prejudice”?',
        options: ['Charlotte Brontë', 'Jane Austen', 'Emily Dickinson', 'Mary Shelley'],
        answer: 'Jane Austen',
      },
      {
        question: 'In English grammar, which of the following is a conjunction?',
        options: ['Quickly', 'Because', 'Book', 'Happiness'],
        answer: 'Because',
      },
      {
        question: 'The word “karaoke” originated from which language?',
        options: ['Korean', 'Chinese', 'Japanese', 'Thai'],
        answer: 'Japanese',
      },
      {
        question: 'What is a palindrome?',
        options: [
          'A word that rhymes with another',
          'A word spelled the same backward and forward',
          'A word with two meanings',
          'A word that describes sound',
        ],
        answer: 'A word spelled the same backward and forward',
      },
      {
        question: 'Which Shakespeare play contains the line “To be, or not to be, that is the question”?',
        options: ['Macbeth', 'Hamlet', 'Othello', 'King Lear'],
        answer: 'Hamlet',
      },
      {
        question: 'What is the correct term for a word that has the opposite meaning of another word?',
        options: ['Synonym', 'Antonym', 'Homonym', 'Acronym'],
        answer: 'Antonym',
      },
      {
        question: 'The word “quarantine” originally referred to how many days of isolation?',
        options: ['10', '20', '30', '40'],
        answer: '40',
      },
      {
        question: 'Which language has the most native speakers worldwide?',
        options: ['English', 'Mandarin Chinese', 'Spanish', 'Hindi'],
        answer: 'Mandarin Chinese',
      },
      {
        question: 'What is the term for a word formed by combining parts of two other words, like “brunch”?',
        options: ['Compound word', 'Acronym', 'Blend', 'Anagram'],
        answer: 'Blend',
      },
    ],
  ],

  3: [
    // Challenge 3 — Set B (Celebrity & Pop Culture, balanced, not time-sensitive)
    [
      {
        question: 'Which actor plays Iron Man in the Marvel Cinematic Universe?',
        options: ['Robert Downey Jr.', 'Chris Evans', 'Chris Hemsworth', 'Mark Ruffalo'],
        answer: 'Robert Downey Jr.',
      },
      {
        question: 'Which actor starred as Jack Dawson in Titanic?',
        options: ['Leonardo DiCaprio', 'Brad Pitt', 'Johnny Depp', 'Matt Damon'],
        answer: 'Leonardo DiCaprio',
      },
      {
        question: 'Taylor Swift won her first Grammy Award for which album?',
        options: ['Fearless', 'Red', '1989', 'Speak Now'],
        answer: 'Fearless',
      },
      {
        question: "Which singer is widely known as the 'Queen of Pop'?",
        options: ['Madonna', 'Beyoncé', 'Lady Gaga', 'Mariah Carey'],
        answer: 'Madonna',
      },
      {
        question: 'Which band released the song “Bohemian Rhapsody”?',
        options: ['Queen', 'The Beatles', 'Led Zeppelin', 'Pink Floyd'],
        answer: 'Queen',
      },
      {
        question: 'Who played Hermione Granger in the Harry Potter film series?',
        options: ['Emma Watson', 'Keira Knightley', 'Natalie Portman', 'Anne Hathaway'],
        answer: 'Emma Watson',
      },
      {
        question: 'Which singer released the best-selling album “Thriller”?',
        options: ['Michael Jackson', 'Prince', 'Elton John', 'David Bowie'],
        answer: 'Michael Jackson',
      },
      {
        question: 'Which TV series features Ross, Rachel, Monica, Chandler, Joey, and Phoebe?',
        options: ['Friends', 'Seinfeld', 'The Office', 'How I Met Your Mother'],
        answer: 'Friends',
      },
      {
        question: 'Who voices Woody in the Toy Story films?',
        options: ['Tom Hanks', 'Tim Allen', 'Robin Williams', 'Will Ferrell'],
        answer: 'Tom Hanks',
      },
      {
        question: 'Which film franchise is associated with the quote “May the Force be with you”?',
        options: ['Star Wars', 'Star Trek', 'The Matrix', 'Lord of the Rings'],
        answer: 'Star Wars',
      },
    ],
  ],
}

/**
 * ✅ These intros rotate with the SAME set selection as the questions.
 * You can adjust titles/subtitles any time without risking mismatch.
 *
 * RULE:
 * - We rotate across [baseline, Set B, Set C, ...]
 * - So index 0 = baseline intro, index 1 = Set B intro, etc.
 */
const ROTATING_INTROS: Record<number, ChallengeIntro[]> = {
  1: [
    {
      title: 'Challenge 1 – Quick Trivia',
      subtitle: 'A fast warm-up of everyday general knowledge. Clean, fair, and satisfying.',
    },
    {
      title: 'Challenge 1 – Quick Trivia (Set B)',
      subtitle: 'A fresh weekly mix of solid general knowledge—no obscure rabbit holes.',
    },
  ],
  2: [
    {
      title: 'Challenge 2 – Word Meanings',
      subtitle: 'Pick the correct definition. A clean vocabulary round—more substance than a scramble.',
    },
    {
      title: 'Challenge 2 – Word Meanings (Set B)',
      subtitle: 'A fresh weekly set of definitions, language facts, and word knowledge.',
    },
  ],
  3: [
    {
      title: 'Challenge 3 – Celebrity & Pop Culture',
      subtitle: 'Movies, music, and famous faces. Straightforward pop culture—no “gotcha” weirdness.',
    },
    {
      title: 'Challenge 3 – Celebrity & Pop Culture (Set B)',
      subtitle: 'A fresh weekly set of pop culture trivia that stays fun and not time-sensitive.',
    },
  ],
  4: [
    {
      title: 'Challenge 4 – Emoji Word Puzzles',
      subtitle: 'Guess the word from emoji clues. Visual, quick, and genuinely fun.',
    },
  ],
  5: [
    {
      title: 'Challenge 5 – Memory Sprint',
      subtitle: 'Watch the sequence, hold it in your head, then answer the question.',
    },
  ],
  6: [
    {
      title: 'Challenge 6 – Quick Quiz',
      subtitle: 'Straight-up multiple choice. Clean prompts, quick thinking, no fluff.',
    },
  ],
  7: [
    {
      title: 'Challenge 7 – Final Mixed Round',
      subtitle: 'The last stretch—finish strong and lock in your bonus reward.',
    },
  ],
}

/** Return UTC midnight for a given date (avoids timezone drift). */
function toUtcMidnight(date: Date): number {
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
}

const WEEK_MS = 7 * 24 * 60 * 60 * 1000
// Anchor on a Monday (keep constant for stable rotation across time):
const EPOCH_UTC_MS = Date.UTC(2025, 0, 6) // 2025-01-06 (Mon) UTC

/** Positive modulo. */
function posMod(n: number, m: number): number {
  return ((n % m) + m) % m
}

/**
 * Internal helper: which set is active this week for a challenge?
 * - If extraSets exist -> we rotate across [baseline, ...extraSets]
 * - pickIndex: 0 = baseline, 1 = Set B, 2 = Set C, ...
 */
function getWeeklyPickIndex(challengeIndex: number, today: Date): number {
  const baseline = getPuzzlesByDayIndex(challengeIndex) || []
  const extraSets = EXTRA_SETS[challengeIndex] || []
  const weeksSinceEpoch = Math.floor((toUtcMidnight(today) - EPOCH_UTC_MS) / WEEK_MS)

  const candidateSets: Puzzle[][] = [baseline, ...extraSets].filter(
    (set) => Array.isArray(set) && set.length > 0
  )

  if (candidateSets.length === 0) return 0
  return posMod(weeksSinceEpoch, candidateSets.length)
}

/**
 * Returns the puzzles for a challenge, rotated weekly.
 * Priority:
 * 1) If EXTRA_SETS[challengeIndex] exists, pick one full set by week index
 *    from [baseline, ...extraSets].
 * 2) Otherwise, rotate the ORDER of the baseline questions weekly.
 */
export function getRotatingPuzzlesByChallenge(
  challengeIndex: number,
  today: Date = new Date()
): Puzzle[] {
  const baseline = getPuzzlesByDayIndex(challengeIndex) || []
  const extraSets = EXTRA_SETS[challengeIndex] || []

  if (!baseline.length && !extraSets.length) return []

  if (extraSets.length === 0) {
    const weeksSinceEpoch = Math.floor((toUtcMidnight(today) - EPOCH_UTC_MS) / WEEK_MS)
    const shiftBy = posMod(weeksSinceEpoch, Math.max(1, baseline.length))
    return baseline.length > 0
      ? [...baseline.slice(shiftBy), ...baseline.slice(0, shiftBy)]
      : baseline
  }

  const candidateSets: Puzzle[][] = [baseline, ...extraSets].filter(
    (set) => Array.isArray(set) && set.length > 0
  )
  const pick = getWeeklyPickIndex(challengeIndex, today)
  return candidateSets[pick] || baseline
}

/**
 * ✅ NEW: Returns the intro that matches the CURRENTLY SELECTED weekly set.
 * If intros are missing for a specific set index, we fall back safely.
 */
export function getRotatingIntroByChallenge(
  challengeIndex: number,
  today: Date = new Date()
): ChallengeIntro | null {
  const list = ROTATING_INTROS[challengeIndex]
  if (!list || list.length === 0) return null

  const pick = getWeeklyPickIndex(challengeIndex, today)

  // If we have an intro for the exact set index, use it.
  if (list[pick]) return list[pick]

  // Otherwise fall back to the first intro (baseline) instead of showing wrong info.
  return list[0]
}
