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
    // Challenge 1 — Set B (General Knowledge)
    [
      { question: 'Which ancient civilization built Machu Picchu?', options: ['Aztec', 'Inca', 'Maya', 'Olmec'], answer: 'Inca' },
      { question: 'The ancient city of Petra is located in which modern country?', options: ['Egypt', 'Jordan', 'Lebanon', 'Syria'], answer: 'Jordan' },
      { question: 'Which instrument is used to measure atmospheric pressure?', options: ['Thermometer', 'Hygrometer', 'Barometer', 'Anemometer'], answer: 'Barometer' },
      { question: 'What is the largest internal organ in the human body?', options: ['Liver', 'Lungs', 'Kidneys', 'Spleen'], answer: 'Liver' },
      { question: 'Which chemical element has the highest electrical conductivity at room temperature?', options: ['Copper', 'Silver', 'Gold', 'Aluminum'], answer: 'Silver' },
      { question: 'Which continent has the highest number of countries?', options: ['Asia', 'Africa', 'Europe', 'South America'], answer: 'Africa' },
      { question: 'What is the world’s highest waterfall by uninterrupted drop?', options: ['Niagara Falls', 'Angel Falls', 'Iguazú Falls', 'Victoria Falls'], answer: 'Angel Falls' },
      { question: 'Which treaty formally ended World War I in 1919?', options: ['Treaty of Vienna', 'Treaty of Paris', 'Treaty of Versailles', 'Treaty of Utrecht'], answer: 'Treaty of Versailles' },
      { question: 'Who composed “The Four Seasons”?', options: ['Johann Sebastian Bach', 'Antonio Vivaldi', 'Wolfgang Amadeus Mozart', 'Ludwig van Beethoven'], answer: 'Antonio Vivaldi' },
      { question: 'Who popularized natural selection in “On the Origin of Species”?', options: ['Gregor Mendel', 'Charles Darwin', 'Alfred Russel Wallace', 'Louis Pasteur'], answer: 'Charles Darwin' },
    ],
  ],

  2: [
    // Challenge 2 — Set B (Words & Language)
    [
      { question: 'What is the meaning of the word “ephemeral”?', options: ['Lasting a very short time', 'Extremely large', 'Hidden or secret', 'Brightly colored'], answer: 'Lasting a very short time' },
      { question: 'Which author wrote “Pride and Prejudice”?', options: ['Charlotte Brontë', 'Jane Austen', 'Emily Dickinson', 'Mary Shelley'], answer: 'Jane Austen' },
      { question: 'In English grammar, which of the following is a conjunction?', options: ['Quickly', 'Because', 'Book', 'Happiness'], answer: 'Because' },
      { question: 'The word “karaoke” originated from which language?', options: ['Korean', 'Chinese', 'Japanese', 'Thai'], answer: 'Japanese' },
      { question: 'What is a palindrome?', options: ['A word that rhymes with another', 'A word spelled the same backward and forward', 'A word with two meanings', 'A word that describes sound'], answer: 'A word spelled the same backward and forward' },
      { question: 'Which Shakespeare play contains “To be, or not to be, that is the question”?', options: ['Macbeth', 'Hamlet', 'Othello', 'King Lear'], answer: 'Hamlet' },
      { question: 'What is the term for a word with the opposite meaning of another?', options: ['Synonym', 'Antonym', 'Homonym', 'Acronym'], answer: 'Antonym' },
      { question: 'The word “quarantine” originally referred to how many days?', options: ['10', '20', '30', '40'], answer: '40' },
      { question: 'Which language has the most native speakers worldwide?', options: ['English', 'Mandarin Chinese', 'Spanish', 'Hindi'], answer: 'Mandarin Chinese' },
      { question: 'What is the term for a word formed by combining parts of two words, like “brunch”?', options: ['Compound word', 'Acronym', 'Blend', 'Anagram'], answer: 'Blend' },
    ],
  ],

  3: [
    // Challenge 3 — Set B (Celebrity / Pop Culture)
    [
      { question: "Which actor plays Iron Man in the Marvel Cinematic Universe?", options: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo"], answer: "Robert Downey Jr." },
      { question: "Taylor Swift won her first Grammy Award for which album?", options: ["Fearless", "Red", "1989", "Speak Now"], answer: "Fearless" },
      { question: "Which actor starred as Jack Dawson in Titanic?", options: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Matt Damon"], answer: "Leonardo DiCaprio" },
      { question: "Which singer is known as 'The Queen of Pop'?", options: ["Madonna", "Beyoncé", "Lady Gaga", "Mariah Carey"], answer: "Madonna" },
      { question: "Which actor voices Woody in the Toy Story movies?", options: ["Tom Hanks", "Tim Allen", "Robin Williams", "Billy Crystal"], answer: "Tom Hanks" },
      { question: "Which singer is known for the hit song 'Rolling in the Deep'?", options: ["Adele", "Beyoncé", "Lady Gaga", "Katy Perry"], answer: "Adele" },
      { question: "In the TV show Friends, what is the name of Ross and Monica’s dog in a flashback episode?", options: ["Marcel", "Clunkers", "Chi-Chi", "LaPooh"], answer: "Chi-Chi" },
      { question: "Which actor famously said 'I’ll be back' in The Terminator?", options: ["Sylvester Stallone", "Arnold Schwarzenegger", "Bruce Willis", "Harrison Ford"], answer: "Arnold Schwarzenegger" },
      { question: "Which band is known for the hit song 'Bohemian Rhapsody'?", options: ["The Beatles", "Queen", "Pink Floyd", "Led Zeppelin"], answer: "Queen" },
      { question: "Which actor played Jack Sparrow in Pirates of the Caribbean?", options: ["Johnny Depp", "Orlando Bloom", "Keira Knightley", "Geoffrey Rush"], answer: "Johnny Depp" },
    ],
  ],

  4: [
    // Challenge 4 — Set B (History)
    [
      { question: 'Which ancient civilization built the city of Babylon?', options: ['Sumerians', 'Babylonians', 'Assyrians', 'Persians'], answer: 'Babylonians' },
      { question: 'Who was the first emperor of Rome?', options: ['Julius Caesar', 'Augustus', 'Nero', 'Tiberius'], answer: 'Augustus' },
      { question: 'The fall of the Berlin Wall occurred in which year?', options: ['1987', '1988', '1989', '1990'], answer: '1989' },
      { question: 'Which empire was ruled by Genghis Khan?', options: ['Roman Empire', 'Ottoman Empire', 'Mongol Empire', 'Persian Empire'], answer: 'Mongol Empire' },
      { question: 'The Magna Carta was signed in which country?', options: ['France', 'Germany', 'England', 'Spain'], answer: 'England' },
      { question: 'What was the name of the ship that carried the Pilgrims to North America in 1620?', options: ['Santa Maria', 'Mayflower', 'Beagle', 'Endeavour'], answer: 'Mayflower' },
      { question: 'Who was the first woman to win a Nobel Prize?', options: ['Marie Curie', 'Florence Nightingale', 'Ada Lovelace', 'Mother Teresa'], answer: 'Marie Curie' },
      { question: 'The Cold War was primarily a conflict between which two superpowers?', options: ['USA and Germany', 'USA and USSR', 'USA and China', 'USA and Japan'], answer: 'USA and USSR' },
      { question: 'Which ancient structure was built as a tomb for Pharaoh Khufu?', options: ['Great Sphinx', 'Valley of the Kings', 'Great Pyramid of Giza', 'Temple of Karnak'], answer: 'Great Pyramid of Giza' },
      { question: 'Who was the British Prime Minister during most of World War II?', options: ['Winston Churchill', 'Neville Chamberlain', 'Clement Attlee', 'Anthony Eden'], answer: 'Winston Churchill' },
    ],
  ],

  6: [
    // Challenge 6 — Set B (Science & Nature)
    [
      {
        question: 'Which gas makes up the largest proportion of Earth’s atmosphere?',
        options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Argon'],
        answer: 'Nitrogen',
      },
      {
        question: 'Which organelle is primarily responsible for producing ATP in eukaryotic cells?',
        options: ['Nucleus', 'Mitochondrion', 'Ribosome', 'Golgi apparatus'],
        answer: 'Mitochondrion',
      },
      {
        question: 'What is the hardest naturally occurring substance on Earth?',
        options: ['Quartz', 'Corundum', 'Diamond', 'Topaz'],
        answer: 'Diamond',
      },
      {
        question: 'Which pigment allows plants to capture light energy for photosynthesis?',
        options: ['Melanin', 'Chlorophyll', 'Carotene', 'Hemoglobin'],
        answer: 'Chlorophyll',
      },
      {
        question: 'Earth’s tectonic plates move atop which semi-plastic layer of the mantle?',
        options: ['Lithosphere', 'Asthenosphere', 'Mesosphere', 'Outer core'],
        answer: 'Asthenosphere',
      },
      {
        question: 'What is the closest star to Earth after the Sun?',
        options: ['Alpha Centauri A', 'Sirius', 'Proxima Centauri', 'Barnard’s Star'],
        answer: 'Proxima Centauri',
      },
      {
        question: 'Which vitamin can be synthesized in human skin when exposed to sunlight?',
        options: ['Vitamin A', 'Vitamin B12', 'Vitamin C', 'Vitamin D'],
        answer: 'Vitamin D',
      },
      {
        question: 'Which biome is characterized by permanently frozen subsoil (permafrost)?',
        options: ['Savanna', 'Tundra', 'Temperate forest', 'Desert'],
        answer: 'Tundra',
      },
      {
        question: 'Which element is the fundamental basis of most organic molecules?',
        options: ['Nitrogen', 'Oxygen', 'Carbon', 'Phosphorus'],
        answer: 'Carbon',
      },
      {
        question: 'What is the largest living structure on Earth, visible from space?',
        options: ['Amazon Rainforest', 'Great Barrier Reef', 'Sahara Dune Fields', 'Greenland Ice Sheet'],
        answer: 'Great Barrier Reef',
      },
    ],
  ],

  // Note: Challenge 5 (Memory) uses a dedicated weekly variant below instead of Q&A sets.
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

/* -------------------------
 * Challenge 5 (Memory) variants
 * -------------------------
 * Rotate simple parameters weekly to keep memory puzzles fresh without touching UI:
 * - charset: digits [1-9] or letters [A-H] (no ambiguous O/0)
 * - length: 5–7
 * - flashMs: 2500–3500ms
 * - askMode: ask a random position or always ask the last shown
 */
export type MemoryVariant = {
  charset: 'digits' | 'letters';
  length: number;      // how many symbols to flash
  flashMs: number;     // how long to flash the sequence
  askMode: 'position' | 'last';
};

const MEMORY_VARIANTS: MemoryVariant[] = [
  { charset: 'digits',  length: 5, flashMs: 3000, askMode: 'position' },
  { charset: 'letters', length: 5, flashMs: 3000, askMode: 'position' },
  { charset: 'digits',  length: 6, flashMs: 3200, askMode: 'position' },
  { charset: 'letters', length: 6, flashMs: 3200, askMode: 'position' },
  { charset: 'digits',  length: 6, flashMs: 3000, askMode: 'last'     },
  { charset: 'letters', length: 7, flashMs: 3500, askMode: 'position' },
  { charset: 'digits',  length: 7, flashMs: 3500, askMode: 'position' },
];

export function getMemoryVariant(today: Date = new Date()): MemoryVariant {
  const weeksSinceEpoch = Math.floor((toUtcMidnight(today) - EPOCH_UTC_MS) / WEEK_MS);
  const pick = posMod(weeksSinceEpoch, MEMORY_VARIANTS.length);
  return MEMORY_VARIANTS[pick];
}
