// lib/facts.ts
/**
 * One concise, safe fact per puzzle:
 * Key format: `${challengeIndex}-${idNum}`
 *   challengeIndex: 1..7
 *   idNum:          1..10
 */
export const DID_YOU_KNOW: Record<string, string> = {
  // Challenge 1 — General Knowledge
  '1-1': 'Ganymede, a moon of Jupiter, is larger than the planet Mercury.',
  '1-2': 'Mercury is one of only two liquid metallic elements at room temperature; the other is bromine.',
  '1-3': 'Apollo 11 landed on the Moon on July 20, 1969.',
  '1-4': 'Mandarin Chinese has the most native speakers of any language.',
  '1-5': 'The pancreas regulates blood sugar by producing insulin.',
  '1-6': 'HTTP underpins most web traffic and was created by Tim Berners-Lee’s team.',
  '1-7': 'The Sahara covers roughly a third of the African continent.',
  '1-8': 'Istanbul uniquely straddles both Europe and Asia across the Bosporus.',
  '1-9': 'The stapes bone in the middle ear helps transmit sound vibrations.',
  '1-10': '“K” on the periodic table stands for potassium, from the Latin “kalium.”',

  // Challenge 2 — Words & Language
  '2-1': 'The word “alphabet” comes from the first two Greek letters: alpha and beta.',
  '2-2': 'An anagram rearranges letters to form a new word or phrase.',
  '2-3': 'A pangram is a sentence that uses every letter of the alphabet at least once.',
  '2-4': 'The dot over a lowercase “i” or “j” is called a tittle.',
  '2-5': '“Synonym” means a word with a similar meaning; “antonym” means the opposite.',
  '2-6': 'A homograph shares spelling with another word but may differ in meaning or pronunciation.',
  '2-7': 'Portmanteau words (like “brunch”) blend parts of two words.',
  '2-8': 'Onomatopoeia words imitate sounds, like “buzz” or “clang.”',
  '2-9': 'The ampersand evolved from a ligature of the Latin word “et” (and).',
  '2-10': 'Palindromes read the same forward and backward, like “level.”',

  // Challenge 3 — Logic & Patterns
  '3-1': 'The Fibonacci sequence appears in nature, art, and computer algorithms.',
  '3-2': 'Parity (odd/even) checks are a foundational concept in number puzzles.',
  '3-3': 'Prime numbers have exactly two distinct positive divisors: 1 and themselves.',
  '3-4': 'Arithmetic sequences add a constant difference; geometric sequences multiply by a constant.',
  '3-5': 'A truth table lists outcomes for all combinations of logical inputs.',
  '3-6': 'The Monty Hall problem is counterintuitive: switching doors boosts win odds to 2/3.',
  '3-7': 'Graph coloring puzzles inspired famous results like the Four Color Theorem.',
  '3-8': 'Sudoku relies on constraint satisfaction: each symbol once per row, column, and box.',
  '3-9': 'Modular arithmetic underlies many clock and calendar puzzles.',
  '3-10': 'Invariants—quantities that don’t change—are powerful tools in puzzle solving.',

  // Challenge 4 — Numbers & Math (lightweight, non-trivial)
  '4-1': 'Zero is the additive identity: any number plus zero equals itself.',
  '4-2': 'The number e (~2.71828) is the base of natural logarithms and growth models.',
  '4-3': 'Pi is irrational, meaning its decimal expansion never repeats or terminates.',
  '4-4': 'A perfect square has an integer as its square root.',
  '4-5': 'The golden ratio (~1.618) appears in geometry and some natural patterns.',
  '4-6': 'A prime gap is the difference between consecutive prime numbers.',
  '4-7': 'Factorials grow very quickly: 10! already exceeds 3 million.',
  '4-8': 'Mod 9 digit sums can quickly check arithmetic for errors.',
  '4-9': 'A triangular number counts objects in an equilateral triangle (1, 3, 6, 10…).',
  '4-10': 'Combinatorics counts arrangements and choices—vital for many puzzles.',

  // Challenge 5 — Memory Sequence
  '5-1': 'Chunking information into groups can significantly improve short-term recall.',
  '5-2': 'The average person can hold about 7±2 items in working memory.',
  '5-3': 'Memory is strengthened by spaced repetition—reviewing at increasing intervals.',
  '5-4': 'Visualizing numbers as shapes or places can aid recall.',
  '5-5': 'Attention and sleep quality both affect memory performance.',
  '5-6': 'Recency and primacy effects make first and last items more memorable.',
  '5-7': 'Associating items with vivid imagery can boost retention.',
  '5-8': 'Writing or speaking an answer reinforces neural pathways.',
  '5-9': 'Interleaving practice—mixing tasks—can improve long-term learning.',
  '5-10': 'Brief breaks between trials help reduce cognitive fatigue.',

  // Challenge 6 — Science & Nature
  '6-1': 'Photosynthesis converts light energy into chemical energy in plants.',
  '6-2': 'DNA is a double-helix polymer carrying genetic instructions.',
  '6-3': 'Plate tectonics explains earthquakes, mountains, and continental drift.',
  '6-4': 'The water cycle circulates water through evaporation, condensation, and precipitation.',
  '6-5': 'Antibiotics treat bacterial infections, not viral ones.',
  '6-6': 'Earth’s atmosphere is mostly nitrogen (~78%) and oxygen (~21%).',
  '6-7': 'The speed of light in vacuum is about 299,792 km per second.',
  '6-8': 'Ecosystems depend on energy flow from producers to consumers and decomposers.',
  '6-9': 'A light-year measures distance, not time—how far light travels in a year.',
  '6-10': 'Vaccination primes the immune system to recognize specific pathogens.',

  // Challenge 7 — Culture & History
  '7-1': 'The Rosetta Stone helped scholars decode Egyptian hieroglyphs.',
  '7-2': 'The printing press revolutionized knowledge sharing in 15th-century Europe.',
  '7-3': 'The Silk Road connected trade across Asia, Africa, and Europe for centuries.',
  '7-4': 'The Olympic Games trace their roots to ancient Greece.',
  '7-5': 'The Gregorian calendar, introduced in 1582, refined the older Julian calendar.',
  '7-6': 'Renaissance art emphasized realism, perspective, and humanism.',
  '7-7': 'The Library of Alexandria became a symbol of ancient scholarship.',
  '7-8': 'Morse code enabled long-distance telegraph communication using dots and dashes.',
  '7-9': 'Cartography—the study of mapmaking—evolved with navigation and exploration.',
  '7-10': 'The World Wide Web launched publicly in 1991, accelerating global information access.',
};
