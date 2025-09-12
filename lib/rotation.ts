// lib/rotation.ts
import type { Puzzle } from './puzzles';
import { getPuzzlesByDayIndex } from './utils';

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
        question: 'Which chemical element has the highest electrical conductivity at room temperature?',
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
        options: ['Johann Sebastian Bach', 'Antonio Vivaldi', 'Wolfgang Amadeus Mozart', 'Ludwig van Beethoven'],
        answer: 'Antonio Vivaldi',
      },
      {
        question: 'Which scientist popularized the theory of evolution by natural selection in “On the Origin of Species”?',
        options: ['Gregor Mendel', 'Charles Darwin', 'Alfred Russel Wallace', 'Louis Pasteur'],
        answer: 'Charles Darwin',
      },
    ],
  ],

  2: [
    // Challenge 2 — Set B (Words & Language, on-theme, balanced, no repeats)
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

  // Add future sets as you create them, e.g.:
  // 3: [ [ /* Challenge 3 – Set B (Logic & Patterns) */ ] ],
  // 4: [ [ /* Challenge 4 – Set B (Numbers & Math) */ ] ],
  // 5: [ [ /* Challenge 5 – Set B (Memory) */ ] ],
  // 6: [ [ /* Challenge 6 – Set B (Science & Nature) */ ] ],
  // 7: [ [ /* Challenge 7 – Set B (Culture & History) */ ] ],
};

/** Return UTC midnight for a given date (avoids timezone drift). */
function toUtcMidnight(date: Date): number {
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
// Anchor on a Monday (keep constant for stable rotation across time):
const EPOCH_UTC_MS = Date.UTC(2025, 0, 6); // 2025-01-06 (Mon) UTC

/** Positive modulo. */
function posMod(n: number, m: number): number {
  return ((n % m) + m) % m;
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
  const baseline = getPuzzlesByDayIndex(challengeIndex) || [];
  const extraSets = EXTRA_SETS[challengeIndex] || [];
  const weeksSinceEpoch = Math.floor((toUtcMidnight(today) - EPOCH_UTC_MS) / WEEK_MS);

  if (!baseline.length && !extraSets.length) return [];

  if (extraSets.length === 0) {
    // No extra sets yet → rotate baseline ORDER weekly (non-mutating).
    const shiftBy = posMod(weeksSinceEpoch, Math.max(1, baseline.length));
    return baseline.length > 0
      ? [...baseline.slice(shiftBy), ...baseline.slice(0, shiftBy)]
      : baseline;
  }

  // With extra sets → rotate across baseline + all extra full sets
  const candidateSets: Puzzle[][] = [baseline, ...extraSets].filter(
    (set) => Array.isArray(set) && set.length > 0
  );
  const pick = posMod(weeksSinceEpoch, candidateSets.length);
  return candidateSets[pick];
}
