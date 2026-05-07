// lib/rotation.ts
import type { Puzzle } from './puzzles'

/*
Rotation System
---------------
• Challenges rotate every 2 days
• Day 1–2 → Set A
• Day 3–4 → Set B
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
      {question:'Which country is home to the Great Barrier Reef?',options:['Indonesia','Australia','Philippines','Thailand'],answer:'Australia'},
      {question:'What is the smallest prime number?',options:['0','1','2','3'],answer:'2'},
      {question:'Which planet has the most moons?',options:['Jupiter','Saturn','Uranus','Neptune'],answer:'Saturn'},
      {question:'What does GDP stand for?',options:['Gross Domestic Product','General Development Policy','Global Debt Percentage','Government Distribution Plan'],answer:'Gross Domestic Product'},
      {question:'Which ocean is the largest?',options:['Atlantic','Indian','Pacific','Arctic'],answer:'Pacific'},
      {question:'Who wrote the novel "1984"?',options:['Aldous Huxley','George Orwell','Ray Bradbury','Ernest Hemingway'],answer:'George Orwell'},
      {question:'Chemical symbol for potassium?',options:['P','Pt','Po','K'],answer:'K'},
      {question:'Which country hosted the 2016 Olympics?',options:['China','Brazil','UK','Japan'],answer:'Brazil'},
      {question:'What animal is a Komodo dragon?',options:['Mammal','Amphibian','Reptile','Bird'],answer:'Reptile'},
      {question:'What instrument has 88 keys?',options:['Organ','Harpsichord','Piano','Synthesizer'],answer:'Piano'}
    ],

    [
      {question:'Which continent is the Sahara Desert located in?',options:['Africa','Asia','Australia','South America'],answer:'Africa'},
      {question:'What is the largest mammal on Earth?',options:['Elephant','Blue whale','Giraffe','Hippo'],answer:'Blue whale'},
      {question:'Metal with symbol Fe?',options:['Iron','Lead','Tin','Zinc'],answer:'Iron'},
      {question:'What is the capital of Canada?',options:['Toronto','Ottawa','Vancouver','Montreal'],answer:'Ottawa'},
      {question:'Which organ filters blood?',options:['Heart','Kidneys','Liver','Lungs'],answer:'Kidneys'},
      {question:'Planet closest to the Sun?',options:['Mercury','Venus','Earth','Mars'],answer:'Mercury'},
      {question:'Instrument used to measure temperature?',options:['Barometer','Thermometer','Hygrometer','Anemometer'],answer:'Thermometer'},
      {question:'The currency of Japan is?',options:['Won','Yuan','Yen','Ringgit'],answer:'Yen'},
      {question:'Which gas do plants absorb from the air?',options:['Oxygen','Carbon dioxide','Nitrogen','Helium'],answer:'Carbon dioxide'},
      {question:'Which scientist developed the theory of relativity?',options:['Isaac Newton','Albert Einstein','Galileo Galilei','Nikola Tesla'],answer:'Albert Einstein'}
    ]

  ],

  /*
  ---------------------------------------------------
  CHALLENGE 2 — WORD & LANGUAGE
  ---------------------------------------------------
  */

  2: [

    [
      {question:'What does the word "ancient" mean?',options:['Very old','Very fast','Very small','Very loud'],answer:'Very old'},
      {question:'What is the opposite of "early"?',options:['Late','Soon','Quick','First'],answer:'Late'},
      {question:'Which of the following is a grammatically correct sentence?',options:['She don’t like tea','She doesn’t like tea','She don’t likes tea','She doesn’t likes tea'],answer:'She doesn’t like tea'},
      {question:'What is the plural form of "child"?',options:['Childs','Children','Childes','Childrens'],answer:'Children'},
      {question:'Which word means "to begin"?',options:['Start','Finish','Close','Stop'],answer:'Start'},
      {question:'Which of the following is the correct spelling?',options:['Recieve','Receive','Receeve','Receve'],answer:'Receive'},
      {question:'What is a synonym for "happy"?',options:['Angry','Joyful','Cold','Weak'],answer:'Joyful'},
      {question:'Which of the following is a compound word?',options:['Sunlight','Happy','Running','Blue'],answer:'Sunlight'},
      {question:'Complete the sentence: "Please ___ the door."',options:['open','opened','opening','opens'],answer:'open'},
      {question:'Which word means "very big"?',options:['Tiny','Huge','Short','Thin'],answer:'Huge'}
    ],

    [
      {question:'Meaning of "fragile"?',options:['Strong','Easily broken','Heavy','Huge'],answer:'Easily broken'},
      {question:'Opposite of increase?',options:['Expand','Reduce','Improve','Multiply'],answer:'Reduce'},
      {question:'Correct sentence?',options:['They was late','They were late','They be late','They is late'],answer:'They were late'},
      {question:'Plural of mouse?',options:['Mouses','Mouse','Mice','Mices'],answer:'Mice'},
      {question:'Synonym for quick?',options:['Rapid','Heavy','Bright','Weak'],answer:'Rapid'},
      {question:'Correct spelling?',options:['Occured','Occurred','Occerred','Occureded'],answer:'Occurred'},
      {question:'Fill: "Please ___ the instructions carefully"',options:['read','reads','reading','reader'],answer:'read'},
      {question:'Which word is a noun?',options:['Happiness','Quickly','Bright','Swiftly'],answer:'Happiness'},
      {question:'Opposite of ancient?',options:['Modern','Old','Historic','Traditional'],answer:'Modern'},
      {question:'Synonym for difficult?',options:['Simple','Hard','Easy','Clear'],answer:'Hard'}
    ]

  ],

  /*
  ---------------------------------------------------
  CHALLENGE 3 — POP CULTURE
  ---------------------------------------------------
  */

  3: [

    [
      {question:'Actor who played Joker in The Dark Knight?',options:['Joaquin Phoenix','Jared Leto','Heath Ledger','Christian Bale'],answer:'Heath Ledger'},
      {question:'Band that released Abbey Road?',options:['Rolling Stones','Beatles','Pink Floyd','Queen'],answer:'Beatles'},
      {question:'Series set in Westeros?',options:['The Witcher','Game of Thrones','Vikings','Rings of Power'],answer:'Game of Thrones'},
      {question:'Singer known as King of Pop?',options:['Elvis Presley','Michael Jackson','Prince','Bruno Mars'],answer:'Michael Jackson'},
      {question:'Director of Pulp Fiction?',options:['Martin Scorsese','Christopher Nolan','Quentin Tarantino','Steven Spielberg'],answer:'Quentin Tarantino'},
      {question:'Sitcom set in Springfield?',options:['Family Guy','South Park','The Simpsons','American Dad'],answer:'The Simpsons'},
      {question:'Actor playing Jack Sparrow?',options:['Orlando Bloom','Johnny Depp','Brad Pitt','Tom Cruise'],answer:'Johnny Depp'},
      {question:'Film franchise with Neo?',options:['Inception','The Matrix','Blade Runner','Tron'],answer:'The Matrix'},
      {question:'Singer of album 1989?',options:['Ariana Grande','Taylor Swift','Rihanna','Dua Lipa'],answer:'Taylor Swift'},
      {question:'Animated film with Woody?',options:['Toy Story','Shrek','Cars','Frozen'],answer:'Toy Story'}
    ],

    [
      {question:'Who played Iron Man?',options:['Chris Evans','Robert Downey Jr.','Mark Ruffalo','Chris Hemsworth'],answer:'Robert Downey Jr.'},
      {question:'Band behind Bohemian Rhapsody?',options:['Queen','Beatles','U2','Coldplay'],answer:'Queen'},
      {question:'Actor who played Wolverine?',options:['Hugh Jackman','Tom Hardy','Brad Pitt','Keanu Reeves'],answer:'Hugh Jackman'},
      {question:'Movie featuring dinosaurs theme park?',options:['Jurassic Park','Avatar','Jaws','King Kong'],answer:'Jurassic Park'},
      {question:'Which singer performed "Rolling in the Deep"?',options:['Adele','Beyonce','Rihanna','Sia'],answer:'Adele'},
      {question:'Which streaming series features Eleven?',options:['Dark','Stranger Things','Lost','Westworld'],answer:'Stranger Things'},
      {question:'Character Batman lives in?',options:['Star City','Metropolis','Gotham','Central City'],answer:'Gotham'},
      {question:'Actor who played Neo?',options:['Keanu Reeves','Tom Cruise','Matt Damon','Christian Bale'],answer:'Keanu Reeves'},
      {question:'Which film features Pandora?',options:['Avatar','Titanic','Gladiator','Interstellar'],answer:'Avatar'},
      {question:'Band Coldplay originates from?',options:['USA','Australia','UK','Canada'],answer:'UK'}
    ]

  ],

  /*
  ---------------------------------------------------
  CHALLENGE 4 — HISTORY
  ---------------------------------------------------
  */

  4: [

    [
      {question:'Who was the first President of the United States?',options:['Abraham Lincoln','Thomas Jefferson','George Washington','John Adams'],answer:'George Washington'},
      {question:'In which year did World War II end?',options:['1943','1945','1947','1950'],answer:'1945'},
      {question:'Civilization that built pyramids?',options:['Romans','Egyptians','Greeks','Mayans'],answer:'Egyptians'},
      {question:'French Revolution began?',options:['1776','1789','1804','1812'],answer:'1789'},
      {question:'WWII British Prime Minister?',options:['Neville Chamberlain','Winston Churchill','Margaret Thatcher','Tony Blair'],answer:'Winston Churchill'},
      {question:'Ship that sank in 1912?',options:['Lusitania','Titanic','Britannic','Queen Mary'],answer:'Titanic'},
      {question:'Renaissance began where?',options:['France','Germany','Italy','Spain'],answer:'Italy'},
      {question:'Wall that fell in 1989?',options:['Hadrian’s Wall','Berlin Wall','Great Wall','Western Wall'],answer:'Berlin Wall'},
      {question:'Empire ruled by Julius Caesar?',options:['Greek Empire','Roman Republic','Ottoman Empire','British Empire'],answer:'Roman Republic'},
      {question:'WWI ended in?',options:['1917','1918','1919','1920'],answer:'1918'}
    ],

    [
      {question:'Which explorer reached the Americas in 1492?',options:['Ferdinand Magellan','Christopher Columbus','James Cook','Amerigo Vespucci'],answer:'Christopher Columbus'},
      {question:'Great Wall built in which country?',options:['Japan','China','Korea','Vietnam'],answer:'China'},
      {question:'Leader of Soviet Union during WWII?',options:['Joseph Stalin','Vladimir Lenin','Nikita Khrushchev','Vladimir Putin'],answer:'Joseph Stalin'},
      {question:'Ancient Greek philosopher who taught Alexander the Great?',options:['Plato','Aristotle','Socrates','Pythagoras'],answer:'Aristotle'},
      {question:'Empire ruled by Genghis Khan?',options:['Roman','Mongol','Ottoman','Persian'],answer:'Mongol'},
      {question:'First man on the Moon?',options:['Buzz Aldrin','Neil Armstrong','Yuri Gagarin','John Glenn'],answer:'Neil Armstrong'},
      {question:'Which wall divided Germany during the Cold War?',options:['Berlin Wall','Iron Curtain','Great Wall','Hadrian Wall'],answer:'Berlin Wall'},
      {question:'Which famous arena is located in Rome?',options:['Pantheon','Colosseum','Forum','Acropolis'],answer:'Colosseum'},
      {question:'Where was Napoleon defeated in his final battle?',options:['Waterloo','Verdun','Trafalgar','Somme'],answer:'Waterloo'},
      {question:'Ancient writing system of Egypt?',options:['Runes','Hieroglyphics','Cuneiform','Latin'],answer:'Hieroglyphics'}
    ]

  ],

  /*
  CHALLENGE 5 — SMART NUMBERS
  */

  5: [

    [
      {question:'15% of 200?',options:['25','30','35','40'],answer:'30'},
      {question:'60 km/h for 2 hours distance?',options:['100','110','120','140'],answer:'120'},
      {question:'Next: 2,4,8,16?',options:['24','28','32','36'],answer:'32'},
      {question:'$80 reduced 25%?',options:['55','60','65','70'],answer:'60'},
      {question:'Square of 12?',options:['124','134','144','154'],answer:'144'},
      {question:'Average 2,4,6?',options:['3','4','5','6'],answer:'4'},
      {question:'3x=21?',options:['6','7','8','9'],answer:'7'},
      {question:'9×7?',options:['54','63','72','81'],answer:'63'},
      {question:'Area 10×5?',options:['40','45','50','55'],answer:'50'},
      {question:'Half of 250?',options:['100','110','120','125'],answer:'125'}
    ],

    [
      {question:'What is 20% of 150?',options:['20','25','30','35'],answer:'30'},
      {question:'What is the next number in the sequence: 3, 6, 9, 12, ...?',options:['15','18','21','24'],answer:'15'},
      {question:'What is 7 × 8?',options:['54','56','58','60'],answer:'56'},
      {question:'What is the average of 10, 20, and 30?',options:['15','20','25','30'],answer:'20'},
      {question:'What is 15 squared?',options:['200','210','225','240'],answer:'225'},
      {question:'What is half of 400?',options:['150','180','200','220'],answer:'200'},
      {question:'Solve for x: 5x = 25',options:['3','4','5','6'],answer:'5'},
      {question:'What is the area of a 6 × 6 square?',options:['30','36','40','42'],answer:'36'},
      {question:'What is the next number in the sequence: 5, 10, 15, ...?',options:['20','25','30','35'],answer:'20'},
      {question:'What is 10% of 500?',options:['40','50','60','70'],answer:'50'}
    ]

  ],

  /*
  CHALLENGE 6 — SCIENCE
  */

  6: [

    [
      {question:'Which planet is known as the Red Planet?',options:['Mars','Venus','Jupiter','Saturn'],answer:'Mars'},
      {question:'Which gas do humans need to breathe to survive?',options:['Nitrogen','Oxygen','Hydrogen','Helium'],answer:'Oxygen'},
      {question:'What is the chemical symbol for gold?',options:['Ag','Au','Gd','Go'],answer:'Au'},
      {question:'Which organ pumps blood around the human body?',options:['Lungs','Brain','Heart','Liver'],answer:'Heart'},
      {question:'Which is the largest planet in our solar system?',options:['Earth','Saturn','Jupiter','Neptune'],answer:'Jupiter'},
      {question:'What force keeps planets in orbit around the Sun?',options:['Magnetism','Friction','Gravity','Radiation'],answer:'Gravity'},
      {question:'At what temperature does water freeze?',options:['0°C','10°C','-5°C','32°C'],answer:'0°C'},
      {question:'What process do plants use to make their own food?',options:['Respiration','Digestion','Photosynthesis','Fermentation'],answer:'Photosynthesis'},
      {question:'Which part of a cell contains genetic material',options:['Cytoplasm','Nucleus','Membrane','Ribosome'],answer:'Nucleus'},
      {question:'Which vitamin is produced when the skin is exposed to sunlight?',options:['A','B12','C','D'],answer:'Vitamin D'}
    ],

    [
      {question:'What is the largest organ in human body?',options:['Heart','Liver','Skin','Brain'],answer:'Skin'},
      {question:'Which gas is most abundant in the Earth’s atmosphere?',options:['Oxygen','Nitrogen','Carbon dioxide','Hydrogen'],answer:'Nitrogen'},
      {question:'What is Earth’s natural satellite?',options:['Moon','Mars','Europa','Titan'],answer:'Moon'},
      {question:'What part of the human body is responsible for breathing?',options:['Heart','Lungs','Brain','Liver'],answer:'Lungs'},
      {question:'What type of energy comes from the Sun?',options:['Solar','Thermal','Nuclear','Electric'],answer:'Solar'},
      {question:'Which is the largest ocean on Earth?',options:['Atlantic','Indian','Pacific','Arctic'],answer:'Pacific'},
      {question:'Which planet is known for its prominent rings?',options:['Mars','Saturn','Venus','Mercury'],answer:'Saturn'},
      {question:'How many bones are in the human body?',options:['106','206','306','406'],answer:'206'},
      {question:'What is the center of an atom called?',options:['Core','Nucleus','Cell','Atom'],answer:'Nucleus'},
      {question:'What is the fastest land animal?',options:['Lion','Cheetah','Tiger','Leopard'],answer:'Cheetah'}
    ]

  ],

  /*
  CHALLENGE 7 — GEOGRAPHY
  */

  7: [

    [
      {question:'Country with most time zones?',options:['Russia','USA','France','UK'],answer:'France'},
      {question:'Kilimanjaro located where?',options:['Kenya','Tanzania','Uganda','Ethiopia'],answer:'Tanzania'},
      {question:'River through Budapest?',options:['Rhine','Danube','Seine','Thames'],answer:'Danube'},
      {question:'Smallest country?',options:['Monaco','Vatican City','San Marino','Liechtenstein'],answer:'Vatican City'},
      {question:'Largest hot desert?',options:['Gobi','Kalahari','Sahara','Atacama'],answer:'Sahara'},
      {question:'Sea between Europe & Africa?',options:['Baltic','Black','Mediterranean','Caribbean'],answer:'Mediterranean'},
      {question:'Land of Rising Sun?',options:['China','Japan','Korea','Thailand'],answer:'Japan'},
      {question:'Largest US state?',options:['Texas','California','Alaska','Montana'],answer:'Alaska'},
      {question:'Casablanca located in?',options:['Spain','Morocco','Tunisia','Egypt'],answer:'Morocco'},
      {question:'Andes located in?',options:['North America','Europe','South America','Asia'],answer:'South America'}
    ],

    [
      {question:'What is the capital city of Australia?',options:['Sydney','Melbourne','Canberra','Perth'],answer:'Canberra'},
      {question:'Which is the longest river in the world?',options:['Amazon','Nile','Yangtze','Mississippi'],answer:'Nile'},
      {question:'Which is the largest continent by land area?',options:['Africa','Asia','Europe','North America'],answer:'Asia'},
      {question:'Which country is the city of Dubai located in?',options:['Qatar','UAE','Oman','Saudi Arabia'],answer:'UAE'},
      {question:'Mount Everest is located in which country?',options:['Nepal','India','China','Bhutan'],answer:'Nepal'},
      {question:'Which river flows through the city of Paris?',options:['Rhine','Seine','Danube','Thames'],answer:'Seine'},
      {question:'Which is the largest island in the world?',options:['Greenland','Iceland','Borneo','Madagascar'],answer:'Greenland'},
      {question:'What is the capital city of Italy?',options:['Rome','Milan','Venice','Naples'],answer:'Rome'},
      {question:'Which continent has the most countries?',options:['Asia','Africa','Europe','South America'],answer:'Africa'},
      {question:'The Great Barrier Reef is located in which sea?',options:['Coral Sea','Tasman Sea','Arafura Sea','Timor Sea'],answer:'Coral Sea'}
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
