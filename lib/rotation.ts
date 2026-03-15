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

    // SET A
    [
      {question:'Which country is home to the Great Barrier Reef?',options:['Indonesia','Australia','Philippines','Thailand'],answer:'Australia'},
      {question:'What is the smallest prime number?',options:['0','1','2','3'],answer:'2'},
      {question:'Which planet has the most moons?',options:['Jupiter','Saturn','Uranus','Neptune'],answer:'Saturn'},
      {question:'What does GDP stand for?',options:['Gross Domestic Product','General Development Policy','Global Debt Percentage','Government Distribution Plan'],answer:'Gross Domestic Product'},
      {question:'Which ocean is the largest?',options:['Atlantic','Indian','Pacific','Arctic'],answer:'Pacific'},
      {question:'Who wrote the novel "1984"?',options:['Aldous Huxley','George Orwell','Ray Bradbury','Ernest Hemingway'],answer:'George Orwell'},
      {question:'Chemical symbol for potassium?',options:['P','Pt','Po','K'],answer:'K'},
      {question:'2016 Olympic host country?',options:['China','Brazil','UK','Japan'],answer:'Brazil'},
      {question:'What animal is a Komodo dragon?',options:['Mammal','Amphibian','Reptile','Bird'],answer:'Reptile'},
      {question:'Instrument with 88 keys?',options:['Organ','Harpsichord','Piano','Synthesizer'],answer:'Piano'}
    ],

    // SET B
    [
      {question:'Which continent is the Sahara Desert located in?',options:['Africa','Asia','Australia','South America'],answer:'Africa'},
      {question:'Largest mammal on Earth?',options:['Elephant','Blue whale','Giraffe','Hippo'],answer:'Blue whale'},
      {question:'Metal with symbol Fe?',options:['Iron','Lead','Tin','Zinc'],answer:'Iron'},
      {question:'Capital of Canada?',options:['Toronto','Ottawa','Vancouver','Montreal'],answer:'Ottawa'},
      {question:'Which organ filters blood?',options:['Heart','Kidneys','Liver','Lungs'],answer:'Kidneys'},
      {question:'Planet closest to the Sun?',options:['Mercury','Venus','Earth','Mars'],answer:'Mercury'},
      {question:'Instrument used to measure temperature?',options:['Barometer','Thermometer','Hygrometer','Anemometer'],answer:'Thermometer'},
      {question:'Currency of Japan?',options:['Won','Yuan','Yen','Ringgit'],answer:'Yen'},
      {question:'Gas plants absorb?',options:['Oxygen','Carbon dioxide','Nitrogen','Helium'],answer:'Carbon dioxide'},
      {question:'Scientist behind relativity?',options:['Newton','Einstein','Galileo','Tesla'],answer:'Einstein'}
    ]

  ],

  /*
  ---------------------------------------------------
  CHALLENGE 2 — WORD & LANGUAGE
  ---------------------------------------------------
  */

  2: [

    [
      {question:'Meaning of the word "ancient"?',options:['Very old','Very fast','Very small','Very loud'],answer:'Very old'},
      {question:'Opposite of "early"?',options:['Late','Soon','Quick','First'],answer:'Late'},
      {question:'Correct sentence?',options:['She don’t like tea','She doesn’t like tea','She don’t likes tea','She doesn’t likes tea'],answer:'She doesn’t like tea'},
      {question:'Plural of "child"?',options:['Childs','Children','Childes','Childrens'],answer:'Children'},
      {question:'Word meaning "begin"?',options:['Start','Finish','Close','Stop'],answer:'Start'},
      {question:'Correct spelling?',options:['Recieve','Receive','Receeve','Receve'],answer:'Receive'},
      {question:'Synonym for "happy"?',options:['Angry','Joyful','Cold','Weak'],answer:'Joyful'},
      {question:'Which is a compound word?',options:['Sunlight','Happy','Running','Blue'],answer:'Sunlight'},
      {question:'Fill: "Please ___ the door."',options:['open','opened','opening','opens'],answer:'open'},
      {question:'Word meaning very big?',options:['Tiny','Huge','Short','Thin'],answer:'Huge'}
    ],

    [
      {question:'Meaning of "fragile"?',options:['Strong','Easily broken','Heavy','Huge'],answer:'Easily broken'},
      {question:'Opposite of increase?',options:['Expand','Reduce','Improve','Multiply'],answer:'Reduce'},
      {question:'Correct sentence?',options:['They was late','They were late','They be late','They is late'],answer:'They were late'},
      {question:'Plural of mouse?',options:['Mouses','Mouse','Mice','Mices'],answer:'Mice'},
      {question:'Synonym for quick?',options:['Rapid','Heavy','Bright','Weak'],answer:'Rapid'},
      {question:'Correct spelling?',options:['Occured','Occurred','Occerred','Occureded'],answer:'Occurred'},
      {question:'Fill: "Please ___ the instructions carefully"',options:['read','reads','reading','reader'],answer:'read'},
      {question:'Which is a noun?',options:['Run','Happiness','Quickly','Bright'],answer:'Happiness'},
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
      {question:'Singer known as King of Pop?',options:['Elvis','Michael Jackson','Prince','Bruno Mars'],answer:'Michael Jackson'},
      {question:'Director of Pulp Fiction?',options:['Scorsese','Nolan','Tarantino','Spielberg'],answer:'Tarantino'},
      {question:'Sitcom set in Springfield?',options:['Family Guy','South Park','The Simpsons','American Dad'],answer:'The Simpsons'},
      {question:'Actor playing Jack Sparrow?',options:['Orlando Bloom','Johnny Depp','Brad Pitt','Tom Cruise'],answer:'Johnny Depp'},
      {question:'Film franchise with Neo?',options:['Inception','Matrix','Blade Runner','Tron'],answer:'Matrix'},
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
  CHALLENGE 4 — HISTORY
  */

  4: [

    [
      {question:'Who was the first President of the United States?',options:['Abraham Lincoln','Thomas Jefferson','George Washington','John Adams'],answer:'George Washington'},
      {question:'In which year did World War II end?',options:['1943','1945','1947','1950'],answer:'1945'},
      {question:'Civilization that built pyramids?',options:['Romans','Egyptians','Greeks','Mayans'],answer:'Egyptians'},
      {question:'French Revolution began?',options:['1776','1789','1804','1812'],answer:'1789'},
      {question:'WWII British Prime Minister?',options:['Chamberlain','Churchill','Thatcher','Blair'],answer:'Churchill'},
      {question:'Ship that sank in 1912?',options:['Lusitania','Titanic','Britannic','Queen Mary'],answer:'Titanic'},
      {question:'Renaissance began where?',options:['France','Germany','Italy','Spain'],answer:'Italy'},
      {question:'Wall that fell in 1989?',options:['Hadrians','Berlin','Great Wall','Western Wall'],answer:'Berlin'},
      {question:'Empire ruled by Julius Caesar?',options:['Greek','Roman','Ottoman','British'],answer:'Roman'},
      {question:'WWI ended in?',options:['1917','1918','1919','1920'],answer:'1918'}
    ],

    [
      {question:'Explorer who reached Americas 1492?',options:['Magellan','Columbus','Cook','Vespucci'],answer:'Columbus'},
      {question:'Great Wall built in which country?',options:['Japan','China','Korea','Vietnam'],answer:'China'},
      {question:'Leader of Soviet Union during WWII?',options:['Stalin','Lenin','Khrushchev','Putin'],answer:'Stalin'},
      {question:'Ancient Greek philosopher who taught Alexander?',options:['Plato','Aristotle','Socrates','Pythagoras'],answer:'Aristotle'},
      {question:'Empire ruled by Genghis Khan?',options:['Roman','Mongol','Ottoman','Persian'],answer:'Mongol'},
      {question:'First man on the Moon?',options:['Buzz Aldrin','Neil Armstrong','Yuri Gagarin','John Glenn'],answer:'Neil Armstrong'},
      {question:'Cold War wall dividing Germany?',options:['Berlin Wall','Iron Curtain','Great Wall','Hadrian Wall'],answer:'Berlin Wall'},
      {question:'Roman arena in Rome?',options:['Pantheon','Colosseum','Forum','Acropolis'],answer:'Colosseum'},
      {question:'Napoleon defeated at?',options:['Waterloo','Verdun','Trafalgar','Somme'],answer:'Waterloo'},
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
      {question:'20% of 150?',options:['20','25','30','35'],answer:'30'},
      {question:'Next: 3,6,9,12?',options:['15','18','21','24'],answer:'15'},
      {question:'7×8?',options:['54','56','58','60'],answer:'56'},
      {question:'Average of 10,20,30?',options:['15','20','25','30'],answer:'20'},
      {question:'Square of 15?',options:['200','210','225','240'],answer:'225'},
      {question:'Half of 400?',options:['150','180','200','220'],answer:'200'},
      {question:'5x=25?',options:['3','4','5','6'],answer:'5'},
      {question:'Area of 6×6?',options:['30','36','40','42'],answer:'36'},
      {question:'Next: 5,10,15,?',options:['20','25','30','35'],answer:'20'},
      {question:'10% of 500?',options:['40','50','60','70'],answer:'50'}
    ]

  ],

  /*
  CHALLENGE 6 — SCIENCE
  */

  6: [

    [
      {question:'Red Planet?',options:['Mars','Venus','Jupiter','Saturn'],answer:'Mars'},
      {question:'Humans breathe?',options:['Nitrogen','Oxygen','Hydrogen','Helium'],answer:'Oxygen'},
      {question:'Symbol for gold?',options:['Ag','Au','Gd','Go'],answer:'Au'},
      {question:'Organ pumping blood?',options:['Lungs','Brain','Heart','Liver'],answer:'Heart'},
      {question:'Largest planet?',options:['Earth','Saturn','Jupiter','Neptune'],answer:'Jupiter'},
      {question:'Force keeping planets orbit?',options:['Magnetism','Friction','Gravity','Radiation'],answer:'Gravity'},
      {question:'Water freezes at?',options:['0°C','10°C','-5°C','32°C'],answer:'0°C'},
      {question:'Plants make food via?',options:['Respiration','Digestion','Photosynthesis','Fermentation'],answer:'Photosynthesis'},
      {question:'Cell part with DNA?',options:['Cytoplasm','Nucleus','Membrane','Ribosome'],answer:'Nucleus'},
      {question:'Sunlight produces vitamin?',options:['A','B12','C','D'],answer:'Vitamin D'}
    ],

    [
      {question:'Largest organ in human body?',options:['Heart','Liver','Skin','Brain'],answer:'Skin'},
      {question:'Gas most abundant in atmosphere?',options:['Oxygen','Nitrogen','Carbon dioxide','Hydrogen'],answer:'Nitrogen'},
      {question:'Earth satellite?',options:['Moon','Mars','Europa','Titan'],answer:'Moon'},
      {question:'Boiling point of water?',options:['90°C','100°C','110°C','120°C'],answer:'100°C'},
      {question:'Energy from Sun called?',options:['Solar','Thermal','Nuclear','Electric'],answer:'Solar'},
      {question:'Largest ocean?',options:['Atlantic','Indian','Pacific','Arctic'],answer:'Pacific'},
      {question:'Planet with rings?',options:['Mars','Saturn','Venus','Mercury'],answer:'Saturn'},
      {question:'Human skeleton bones?',options:['106','206','306','406'],answer:'206'},
      {question:'Center of atom?',options:['Core','Nucleus','Cell','Atom'],answer:'Nucleus'},
      {question:'Fastest land animal?',options:['Lion','Cheetah','Tiger','Leopard'],answer:'Cheetah'}
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
      {question:'Capital of Australia?',options:['Sydney','Melbourne','Canberra','Perth'],answer:'Canberra'},
      {question:'Longest river?',options:['Amazon','Nile','Yangtze','Mississippi'],answer:'Nile'},
      {question:'Largest continent?',options:['Africa','Asia','Europe','North America'],answer:'Asia'},
      {question:'Country with city Dubai?',options:['Qatar','UAE','Oman','Saudi Arabia'],answer:'UAE'},
      {question:'Mount Everest located in?',options:['Nepal','India','China','Bhutan'],answer:'Nepal'},
      {question:'River through Paris?',options:['Rhine','Seine','Danube','Thames'],answer:'Seine'},
      {question:'Largest island?',options:['Greenland','Iceland','Borneo','Madagascar'],answer:'Greenland'},
      {question:'Capital of Italy?',options:['Rome','Milan','Venice','Naples'],answer:'Rome'},
      {question:'Continent with most countries?',options:['Asia','Africa','Europe','South America'],answer:'Africa'},
      {question:'Great Barrier Reef located in which sea?',options:['Coral Sea','Tasman Sea','Arafura Sea','Timor Sea'],answer:'Coral Sea'}
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
