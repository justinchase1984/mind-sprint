// lib/facts.ts
import { ACTIVE_ROTATION_SET_COUNT } from './rotation'

/*
Did You Know Fact System
------------------------
• 9 challenges
• 4 question sets per challenge
• 10 questions per set
• 360 matching facts in total
• Facts rotate daily at midnight Brisbane / AEST
• Rotation uses the same active-set count as lib/rotation.ts
• Compatible with the existing `${challengeIndex}-${idNum}` lookup
  used by pages/puzzle/[id].tsx
*/

const ROTATION_DAYS = 1
const AEST_OFFSET_MS = 10 * 60 * 60 * 1000

function getDayIndex(date: Date = new Date()): number {
  const start = Date.UTC(2025, 0, 1)

  const aestDate = new Date(
    date.getTime() + AEST_OFFSET_MS
  )

  const today = Date.UTC(
    aestDate.getUTCFullYear(),
    aestDate.getUTCMonth(),
    aestDate.getUTCDate()
  )

  const diff = today - start

  return Math.floor(
    diff / (1000 * 60 * 60 * 24)
  )
}

function getRotationIndex(
  date: Date = new Date(),
  setCount: number
): number {
  const dayIndex = getDayIndex(date)

  const cycle = Math.floor(
    dayIndex / ROTATION_DAYS
  )

  return cycle % setCount
}

const FACT_SETS: Record<number, string[][]> = {

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
      'The Great Barrier Reef is the world’s largest coral reef system and stretches for more than 2,000 kilometres.',
      'Two is the only even prime number.',
      'Ottawa was selected as the capital of the Province of Canada by Queen Victoria in 1857.',
      'George Orwell’s novel "1984" was first published in 1949.',
      'Potassium uses the symbol K because of the Neo-Latin word "kalium".',
      'Leonardo da Vinci’s Mona Lisa is displayed at the Louvre Museum in Paris.',
      'The Swiss franc is also used as the official currency of Liechtenstein.',
      'The five Olympic rings were designed by Pierre de Coubertin in the early 20th century.',
      'A standard modern piano has 52 white keys and 36 black keys.',
      'The Pacific Ocean covers a larger area than all of Earth’s land combined.'
    ],

    /*
    SET B
    */

    [
      'The Sahara is the largest hot desert on Earth.',
      'Blue whales can grow to more than 25 metres long and are the largest animals known to have existed.',
      'Mount Fuji is the highest mountain in Japan.',
      'Ankara became the capital of modern Türkiye in 1923.',
      'The femur is both the longest and one of the strongest bones in the human body.',
      'Alfred Nobel’s will established the prizes that later became known as the Nobel Prizes.',
      'Jupiter rotates very quickly, completing one day in roughly 10 hours.',
      'Magna Carta was sealed at Runnymede in England in 1215.',
      'Each chess player begins with eight pawns and eight other pieces.',
      'Gold has the chemical symbol Au, derived from the Latin word "aurum".'
    ],

    /*
    SET C
    */

    [
      'Canberra was selected as Australia’s capital partly as a compromise between Sydney and Melbourne.',
      'Machu Picchu was constructed by the Inca civilization during the 15th century.',
      'Unlike many major canals, the Suez Canal does not require locks.',
      'Jane Austen’s "Pride and Prejudice" was first published in 1813.',
      'Diamond ranks 10 on the Mohs scale of mineral hardness.',
      'Brazil is the most populous Portuguese-speaking country in the world.',
      'Twelve dozen items make one gross, which equals 144 items.',
      'The ancient Olympic Games were held at Olympia in Greece.',
      'The ampere is named after French physicist André-Marie Ampère.',
      'Opposite compass directions are separated by 180 degrees.'
    ],

    /*
    SET D
    */

    [
      'Mercury has the chemical symbol Hg and is one of the few elements that is liquid at ordinary room temperature.',
      'Lisbon lies near the mouth of the Tagus River on Portugal’s Atlantic coast.',
      'The skin protects the body from the outside environment and is generally regarded as the body’s largest organ.',
      'A standard deck contains four suits with 13 cards in each suit, giving 52 cards in total.',
      'Vincent van Gogh painted "The Starry Night" in 1889 while staying in Saint-Rémy-de-Provence.',
      'The South Korean won is issued by the Bank of Korea.',
      'Water boils at 100°C at standard atmospheric pressure, but its boiling point changes with pressure.',
      'J. R. R. Tolkien’s "The Hobbit" was first published in 1937.',
      'Mars appears reddish because iron-bearing minerals on its surface have oxidised.',
      'A standard chessboard is arranged as eight rows by eight columns, giving 64 squares.'
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
      '"Reluctant" describes someone who is unwilling or hesitant to do something.',
      '"Their" shows possession, while "they’re" is a contraction of "they are".',
      '"Scarce" describes something in short supply, while "abundant" means plentiful.',
      'To "break the ice" means to ease tension or begin a comfortable social interaction.',
      'A useful spelling reminder is that "accommodate" contains two c’s and two m’s.',
      'A comma is commonly used after an introductory phrase such as "After dinner".',
      '"Effect" is commonly used as a noun, while "affect" is commonly used as a verb.',
      'An adjective describes or modifies a noun or pronoun.',
      'The prefix "pre-" generally means before, as in "preview" and "prehistoric".',
      'Homophones sound alike but can have different spellings and meanings.'
    ],

    /*
    SET B
    */

    [
      '"Meticulous" describes someone who pays very careful attention to detail.',
      '"Neither" is traditionally treated as singular in formal constructions such as "neither is".',
      'The expression "once in a blue moon" is used to describe something that happens very rarely.',
      '"Mitigate" means to reduce the severity, seriousness or harmful effect of something.',
      '"Its" is possessive, while "it’s" is a contraction of "it is" or "it has".',
      'The suffix "-less" means without, as in "fearless" or "careless".',
      'Listening differs from whispering, shouting and speaking because it involves receiving rather than producing speech.',
      'In the phrase "a clear explanation", "clear" is an adjective describing the explanation.',
      '"Criteria" is the plural form of "criterion".',
      '"Definitely" comes from the word "definite", which can help remember its spelling.'
    ],

    /*
    SET C
    */

    [
      'An ambiguous statement can reasonably be understood in more than one way.',
      '"Fewer" is generally used with countable things, while "less" is generally used with uncountable quantities.',
      '"Concise" writing communicates information clearly using relatively few words.',
      'To "read between the lines" means to infer information that is suggested but not directly stated.',
      'An apostrophe followed by s commonly shows possession by a single noun.',
      'When used figuratively, "transparent" can mean easy to understand or clearly explained.',
      '"Affect" is commonly the verb in sentences such as "the change will affect everyone".',
      'A conjunction connects words, phrases or clauses within a sentence.',
      'Analogies compare relationships between two pairs of ideas or concepts.',
      '"Separate" can function as both a verb and an adjective.'
    ],

    /*
    SET D
    */

    [
      '"Pragmatic" usually describes an approach focused on practical results rather than theory or ideals.',
      '"Whom" is traditionally used as an object, while "who" is used as a subject.',
      '"Contract" can mean to become smaller, making it an antonym of "expand".',
      'To "hit the nail on the head" means to identify or describe something exactly.',
      '"Conscientious" contains the letter sequence "scient", which is related to its Latin origins.',
      '"Analyses" is the plural form of "analysis".',
      '"Vivid" is an adjective that can describe something strikingly clear, bright or detailed.',
      'The prefix "anti-" generally means against or opposed to something.',
      'A semicolon can join two closely related independent clauses without a coordinating conjunction.',
      '"Complement" refers to something that completes or enhances another thing, while "compliment" can mean praise.'
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
      'Heath Ledger received a posthumous Academy Award for his performance as the Joker.',
      'The Beatles released "Abbey Road" in 1969.',
      '"Game of Thrones" was adapted from George R. R. Martin’s "A Song of Ice and Fire" novels.',
      'Michael Jackson became one of the best-selling recording artists in music history.',
      '"Pulp Fiction" won the Palme d’Or at the 1994 Cannes Film Festival.',
      '"The Simpsons" became a standalone television series in 1989 after beginning as animated shorts.',
      'Captain Jack Sparrow first appeared on screen in 2003’s "The Curse of the Black Pearl".',
      'The first "Matrix" film was released in 1999.',
      'Taylor Swift named the album "1989" after her birth year.',
      '"Toy Story" was the first feature-length film created entirely with computer animation.'
    ],

    /*
    SET B
    */

    [
      'Robert Downey Jr.’s first "Iron Man" film in 2008 helped launch the Marvel Cinematic Universe.',
      '"Bohemian Rhapsody" was written by Queen singer Freddie Mercury.',
      'Hugh Jackman first appeared as Wolverine in the 2000 film "X-Men".',
      '"Jurassic Park" was adapted from Michael Crichton’s 1990 novel.',
      '"Rolling in the Deep" was released as a lead single from Adele’s album "21".',
      '"Stranger Things" premiered in 2016.',
      'Gotham City has been Batman’s fictional home for most of the character’s publication history.',
      'Central Perk is the fictional coffee shop regularly visited by the main characters in "Friends".',
      'In "Avatar", Pandora is a moon orbiting the fictional gas giant Polyphemus.',
      'Coldplay formed while its members were studying at University College London.'
    ],

    /*
    SET C
    */

    [
      'Hogwarts students are traditionally sorted into Gryffindor, Hufflepuff, Ravenclaw or Slytherin.',
      'Peter Jackson directed all three films in "The Lord of the Rings" movie trilogy.',
      'Destiny’s Child recorded hits including "Say My Name" and "Survivor".',
      'Bryan Cranston won multiple Emmy Awards for playing Walter White.',
      'Wakanda is portrayed as a technologically advanced fictional African nation.',
      'The "Back to the Future" time machine is based on a DeLorean DMC-12.',
      'Mike Myers gave Shrek his distinctive Scottish-accented voice.',
      'Pikachu is an Electric-type Pokémon and is number 25 in the National Pokédex.',
      'Greta Gerwig co-wrote "Barbie" with Noah Baumbach as well as directing the film.',
      'Indiana Jones first appeared in the 1981 film "Raiders of the Lost Ark".'
    ],

    /*
    SET D
    */

    [
      'Elijah Wood portrayed Frodo Baggins in all three films of Peter Jackson’s "The Lord of the Rings" trilogy.',
      'Madonna’s album "Like a Prayer" was released in 1989.',
      'Dunder Mifflin is the fictional paper company at the centre of the U.S. version of "The Office".',
      'Steven Spielberg directed "Jaws", which was released in 1975.',
      'Nirvana released "Smells Like Teen Spirit" in 1991 as part of the album "Nevermind".',
      'Katniss Everdeen was created by author Suzanne Collins for "The Hunger Games" novels.',
      'Tom Hanks won the Academy Award for Best Actor for his performance in "Forrest Gump".',
      'Tatooine appeared in the original 1977 "Star Wars" film and became one of the franchise’s best-known planets.',
      'Beyoncé released "Lemonade" in 2016 as both an album and a visual project.',
      'Jim Parsons portrayed Sheldon Cooper in "The Big Bang Theory".'
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
      'George Washington was inaugurated as the first U.S. president in 1789.',
      'World War II ended in Europe in May 1945 and in the Pacific later that year.',
      'The Great Pyramid of Giza is the only surviving wonder of the traditional Seven Wonders of the Ancient World.',
      'The storming of the Bastille on 14 July 1789 became a defining event of the French Revolution.',
      'Winston Churchill became British Prime Minister on 10 May 1940.',
      'Titanic was on its maiden voyage from Southampton to New York when it sank.',
      'Florence was one of the most important early centres of the Italian Renaissance.',
      'The Berlin Wall was constructed in 1961 and opened in November 1989.',
      'Julius Caesar died in 44 BCE, decades before Augustus became the first Roman emperor.',
      'The World War I armistice took effect at 11 a.m. on 11 November 1918.'
    ],

    /*
    SET B
    */

    [
      'Christopher Columbus’s 1492 expedition reached islands in the Caribbean.',
      'Much of the Great Wall visible today was built or rebuilt during China’s Ming dynasty.',
      'Joseph Stalin led the Soviet Union from the 1920s until his death in 1953.',
      'Aristotle later founded his own school in Athens known as the Lyceum.',
      'The Mongol Empire became the largest contiguous land empire in recorded history.',
      'Neil Armstrong stepped onto the Moon during the Apollo 11 mission.',
      'The Colosseum opened in ancient Rome during the first century CE.',
      'Waterloo is located in present-day Belgium.',
      'The Rosetta Stone was crucial to the modern decipherment of Egyptian hieroglyphs.',
      'Volcanic ash from Mount Vesuvius helped preserve much of ancient Pompeii.'
    ],

    /*
    SET C
    */

    [
      'Cuneiform writing developed in Mesopotamia more than 5,000 years ago.',
      'The Code of Hammurabi dates to the 18th century BCE.',
      'The Silk Road was a network of trade routes rather than one single road.',
      'Constantinople is the historic name of the city now known as Istanbul.',
      'Inca quipu used coloured and knotted cords to record information.',
      'The Battle of Hastings took place on 14 October 1066.',
      'The Emancipation Proclamation took effect on 1 January 1863.',
      'Mansa Musa became famous beyond West Africa after his pilgrimage to Mecca in the 14th century.',
      'Despite its name, the Hundred Years’ War lasted for more than a century.',
      'The U.S. Declaration of Independence was adopted on 4 July 1776.'
    ],

    /*
    SET D
    */

    [
      'Augustus became Rome’s first emperor after the collapse of the Roman Republic and ruled until 14 CE.',
      'Tenochtitlan was the capital of the Aztec Empire and stood on the site of present-day Mexico City.',
      'Constantinople fell to Ottoman forces led by Sultan Mehmed II in 1453.',
      'King John sealed Magna Carta at Runnymede in 1215.',
      'Mahatma Gandhi became internationally known for campaigns based on nonviolent resistance.',
      'The Taj Mahal was commissioned by Mughal emperor Shah Jahan in the 17th century.',
      'The Black Death reached Europe in the 14th century and killed a substantial proportion of its population.',
      'Amelia Earhart completed her solo transatlantic flight in 1932.',
      'The Treaty of Versailles was signed in 1919 after World War I.',
      'Suleiman the Magnificent ruled the Ottoman Empire from 1520 until 1566.'
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
      'Percent means "per hundred", so 15% is equivalent to 15 out of every 100.',
      'Distance can be calculated by multiplying speed by time.',
      'The sequence 3, 6, 12, 24 is geometric because each term is twice the previous one.',
      'A 25% discount removes exactly one quarter of the original price.',
      'Squaring a number means multiplying that number by itself.',
      'The arithmetic mean is found by adding the values and dividing by the number of values.',
      'Inverse operations can be used to isolate an unknown value in an equation.',
      'A ratio of 2:3 contains five equal parts altogether.',
      'The area of a rectangle is calculated by multiplying its length by its width.',
      'To find 3/8 of a number, divide by eight and then multiply by three.'
    ],

    /*
    SET B
    */

    [
      'Eighteen percent can be written as the decimal 0.18.',
      'Increasing a value by 15% is equivalent to multiplying it by 1.15.',
      'The sequence 2, 5, 11, 23 follows the rule "multiply by two, then add one".',
      'A unit price is found by dividing the total price by the number of items.',
      'One and a half hours is the same as 90 minutes.',
      'A square’s four sides are equal, so its side length is one quarter of its perimeter.',
      'The fraction 7/10 is equivalent to 0.7 and 70%.',
      'Solving an equation involves performing operations that preserve equality on both sides.',
      'Average speed is calculated by dividing total distance by total travel time.',
      'Two thirds means two of three equal parts.'
    ],

    /*
    SET C
    */

    [
      'Twelve and a half percent is exactly one eighth.',
      'When workers contribute at equal rates, doubling the workforce can halve the required time for a fixed job.',
      'The sequence 1, 4, 9, 16, 25 consists of consecutive perfect squares.',
      'Twenty percent is exactly one fifth.',
      'One kilogram contains 1,000 grams.',
      'Comparing equal unit prices is a useful way to solve proportional cost problems.',
      'A ratio of 3:5 contains eight equal parts altogether.',
      'Simple probability is calculated by dividing favourable outcomes by total possible outcomes.',
      'Standard order of operations performs multiplication before addition.',
      'A clock face contains 360 degrees, so adjacent hour marks are 30 degrees apart.'
    ],

    /*
    SET D
    */

    [
      'Thirty-five percent of 200 can be calculated as 0.35 × 200, which equals 70.',
      'The perimeter of a rectangle is twice its length plus twice its width.',
      'The sequence 5, 8, 13, 21, 34 follows a Fibonacci-style rule in which each term is the sum of the previous two.',
      'Three fifths is equivalent to the decimal 0.6 and therefore 60%.',
      'Dividing $240 equally among six people gives $40 per person.',
      'Two to the fifth power means multiplying five twos together, giving 32.',
      'One kilometre equals 1,000 metres, so 1.2 kilometres equals 1,200 metres.',
      'Dividing both sides of 3x = 27 by 3 gives x = 9.',
      'A fair coin has two equally likely outcomes, so the probability of heads is one half.',
      'The five numbers 8, 10, 12, 14 and 16 have an arithmetic mean of 12.'
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
      'Mitochondria contain their own small amount of DNA.',
      'The chemical symbol Na comes from the Latin name for sodium, "natrium".',
      'Gravity acts between all objects that have mass.',
      'Red blood cells use haemoglobin to transport oxygen.',
      'The pH scale is logarithmic, so each whole-number change represents a tenfold change in hydrogen-ion concentration.',
      'Earth’s mantle is far thicker than its crust.',
      'Evaporation can occur below a liquid’s boiling temperature.',
      'Mercury takes only about 88 Earth days to orbit the Sun.',
      'Elastic potential energy is stored when an elastic object is stretched or compressed.',
      'Human DNA is organised into chromosomes inside the nuclei of most cells.'
    ],

    /*
    SET B
    */

    [
      'Nitrogen makes up about 78% of Earth’s atmosphere.',
      'The electron was identified through experiments by physicist J. J. Thomson in the late 19th century.',
      'Root hairs greatly increase the surface area available for absorbing water and minerals.',
      'One newton is the force needed to accelerate one kilogram at one metre per second squared.',
      'Cellular respiration produces ATP, a molecule cells use as an immediate energy source.',
      'Igneous rock can form below Earth’s surface or after lava erupts above it.',
      'Ultraviolet radiation has more energy than visible light and can cause sunburn.',
      'The Milky Way is classified as a barred spiral galaxy.',
      'Insulin is produced by beta cells within the pancreas.',
      'Oxygen has atomic number 8, meaning each oxygen nucleus contains eight protons.'
    ],

    /*
    SET C
    */

    [
      'Refraction occurs because light changes speed when travelling between different materials.',
      'Each human kidney contains around a million microscopic filtering units called nephrons.',
      'A carbon dioxide molecule contains one carbon atom and two oxygen atoms.',
      'Divergent plate boundaries commonly occur along mid-ocean ridges.',
      'Newton’s third-law forces occur in equal and opposite pairs acting on different objects.',
      'Muscles in the iris alter the size of the pupil in response to light levels.',
      'Photosynthesis takes place mainly in chloroplasts within plant cells.',
      'The earthquake focus is underground, while the epicentre lies directly above it at the surface.',
      'Mercury has the shortest orbital period of any planet in the Solar System.',
      'Covalent bonding is especially common between non-metal atoms.'
    ],

    /*
    SET D
    */

    [
      'Plants absorb carbon dioxide mainly through tiny openings in their leaves called stomata.',
      'The cerebrum is the largest major region of the human brain.',
      'Light travels through a vacuum at approximately 299,792 kilometres per second.',
      'The chemical symbol Fe comes from the Latin word for iron, "ferrum".',
      'The human heart has four chambers: two atria and two ventricles.',
      'Condensation occurs when a gas loses energy and changes into a liquid.',
      'The ohm is named after German physicist Georg Ohm.',
      'In ordinary double-stranded DNA, adenine pairs with thymine.',
      'Saturn’s rings are composed largely of countless particles of ice and rocky material.',
      'During photosynthesis, oxygen is released as a by-product of reactions involving water.'
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
      'Wellington has served as New Zealand’s capital since 1865.',
      'The Andes form the longest continental mountain range on Earth.',
      'At its narrowest, the Strait of Gibraltar is only around 14 kilometres wide.',
      'Lesotho is completely enclosed by South African territory.',
      'The Nile flows generally northward before reaching the Mediterranean Sea.',
      'Rabat lies on Morocco’s Atlantic coast.',
      'The Atacama is one of the driest non-polar regions on Earth.',
      'Bali is one of thousands of islands that make up Indonesia.',
      'Greenland is an autonomous territory within the Kingdom of Denmark.',
      'The Equator is defined as 0 degrees latitude.'
    ],

    /*
    SET B
    */

    [
      'Nairobi is one of the largest cities in East Africa.',
      'The Bosporus forms part of the conventional geographic divide between Europe and Asia.',
      'Lake Titicaca lies high in the Andes between Peru and Bolivia.',
      'Patagonia includes landscapes on both the Argentine and Chilean sides of the Andes.',
      'Bass Strait was named after explorer George Bass.',
      'Kilimanjaro is the highest mountain in Africa.',
      'Prague stands on the Vltava River.',
      'The Seine eventually flows into the English Channel.',
      'Despite its name, the Caspian Sea is an enclosed inland body of water.',
      'The international border between Nepal and China passes across the summit of Mount Everest.'
    ],

    /*
    SET C
    */

    [
      'The Panama Canal uses locks to raise ships to the level of Gatun Lake before lowering them again.',
      'Reykjavík is one of the world’s northernmost national capitals.',
      'The Ural Mountains extend for roughly 2,500 kilometres through Russia and Kazakhstan.',
      'Madagascar is the world’s fourth-largest island.',
      'Buenos Aires lies beside the Río de la Plata estuary.',
      'Petra was an important city of the ancient Nabataean kingdom.',
      'Many Norwegian fjords were carved by glaciers during past ice ages.',
      'The Prime Meridian passes through Greenwich in London and is defined as 0 degrees longitude.',
      'Ecuador’s name comes from the Spanish word for Equator.',
      'The Tropic of Capricorn lies at roughly 23.5 degrees south latitude and crosses Australia.'
    ],

    /*
    SET D
    */

    [
      'Oslo sits at the head of the Oslofjord in southeastern Norway.',
      'The River Thames flows through London before reaching the North Sea.',
      'Russia spans eastern Europe and northern Asia and is the world’s largest country by area.',
      'Denali is located in Alaska and is the highest mountain in North America.',
      'Italy’s long peninsula is often compared to the shape of a boot.',
      'Seoul is South Korea’s capital and largest metropolitan centre.',
      'The Mediterranean Sea lies between Europe, Africa and Asia.',
      'Antarctica has research stations but no permanent native human population.',
      'Madagascar lies in the Indian Ocean off Africa’s southeastern coast.',
      'The Volga flows through western Russia and is the longest river in Europe.'
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
      'A football team normally fields 11 players at once, including one goalkeeper.',
      'In tennis scoring, "love" represents zero points.',
      'An NBA regulation game consists of four 12-minute quarters.',
      'A modern cricket over normally contains six legal deliveries; wides and no-balls do not count as legal balls.',
      'The official marathon distance is 42.195 kilometres, or 26 miles and 385 yards.',
      'A birdie means completing a golf hole in one stroke fewer than par.',
      'A try in rugby union is worth five points.',
      'A baseball batter is generally struck out after receiving three strikes.',
      'The chequered flag is traditionally used to indicate that a motor race or session has finished.',
      'Badminton games are normally played to 21 points, with special rules applying when the score reaches 20-all.'
    ],

    /*
    SET B
    */

    [
      'The FIFA World Cup is one of the world’s largest international association football tournaments.',
      'The Ashes rivalry between England and Australia dates back to the 19th century.',
      'Wimbledon is the only one of tennis’s four Grand Slam tournaments still played on grass.',
      'A successful basketball free throw scores one point.',
      'The Tour de France is a multi-stage road cycling race traditionally held largely in France.',
      'A long-course Olympic swimming pool is 50 metres long.',
      'A rugby league team fields 13 players during normal play.',
      'The Masters Tournament has been held at Augusta National Golf Club in Georgia, United States, since 1934.',
      'KO is short for knockout, a way in which a boxing contest can end.',
      'Pole position usually gives a driver the front starting position on the Formula 1 grid.'
    ],

    /*
    SET C
    */

    [
      'The football penalty mark is 12 yards, or about 11 metres, from the goal line.',
      'LBW means "leg before wicket" and is one of the ways a batter can be dismissed in cricket.',
      'Tennis’s four Grand Slam tournaments are the Australian Open, French Open, Wimbledon and US Open.',
      'A successful basketball shot from beyond the three-point line is worth three points.',
      'A regulation Major League Baseball game is scheduled for nine innings, although extra innings may be needed.',
      'A successful conversion after a try is worth two points in rugby union.',
      'An eagle in golf means completing a hole two strokes under par.',
      'A decathlon consists of ten athletics events.',
      'An ice hockey team normally has six players on the ice, including the goaltender.',
      'The Tour de France yellow jersey is worn by the rider leading the overall general classification.'
    ],

    /*
    SET D
    */

    [
      'An indoor volleyball team has six players on the court at one time.',
      'A cricket century means a batter has scored at least 100 runs in an innings.',
      'A tennis ace is a legal serve that wins the point without the receiver touching the ball.',
      'In football, a hat-trick traditionally means one player scoring three goals in the same match.',
      'A baseball player completing a home run touches first base, second base, third base and home plate.',
      'Par represents the number of strokes a skilled golfer is expected to need to complete a hole or course.',
      'A basketball rebound occurs when a player gains possession after a missed field goal or free throw.',
      'A standard rugby union scrum contains eight forwards from each team.',
      'A pentathlon consists of five events, as suggested by the Greek prefix "penta-".',
      'Judo was developed in Japan by Jigoro Kano during the late 19th century.'
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
      'African elephants are the largest living land animals, with adult males capable of weighing several tonnes.',
      'Bats are the only mammals capable of true sustained powered flight.',
      'A social group of lions is commonly known as a pride.',
      'Cheetahs can reach extremely high speeds over short distances, making them the fastest land animals.',
      'Emperor penguins breed on Antarctic sea ice during the continent’s harsh winter.',
      'Whales are mammals and breathe air through blowholes connected to their lungs.',
      'A young kangaroo is called a joey and continues developing inside its mother’s pouch after birth.',
      'An octopus has three hearts: two pump blood through the gills and one pumps it around the body.',
      'Bamboo makes up the great majority of a wild giant panda’s diet.',
      'Frogs are amphibians and typically undergo metamorphosis from aquatic tadpoles to adults.'
    ],

    /*
    SET B
    */

    [
      'Giraffes are the tallest living land animals and can reach heights of more than five metres.',
      'Every zebra has a distinctive stripe pattern, rather like an individual visual signature.',
      'Reef-building coral polyps produce calcium carbonate skeletons that accumulate over generations.',
      'Transpiration is the loss of water vapour from plants, mainly through pores called stomata.',
      'The tiger is the largest living species in the cat family.',
      'A healthy honey bee queen’s main reproductive role is laying eggs for the colony.',
      'Koalas occur naturally in eastern and southeastern Australia.',
      'Sharks have skeletons made of cartilage rather than true bone.',
      'Beaver dams can significantly alter streams and create wetland habitat.',
      'The scientific study of tree rings is called dendrochronology.'
    ],

    /*
    SET C
    */

    [
      'Nocturnal animals are primarily active during the night rather than during daylight hours.',
      'Saltwater crocodiles are the largest living reptiles and can exceed six metres in length.',
      'Butterflies undergo complete metamorphosis through egg, larva, pupa and adult stages.',
      'Dolphins are mammals, meaning they breathe air, are warm-blooded and nurse their young.',
      'Deciduous trees shed their leaves seasonally, often in response to changing temperature or rainfall.',
      'Kiwi are flightless birds found naturally only in New Zealand.',
      'Nectar is a sugar-rich liquid produced by flowers and collected by many pollinating animals.',
      'Polar bears live in the Arctic region, while wild penguins occur in the Southern Hemisphere.',
      '"Murder" is a traditional collective noun used for a group of crows.',
      'Cactus spines are modified leaves that help reduce water loss and discourage herbivores.'
    ],

    /*
    SET D
    */

    [
      'The Komodo dragon is the largest living species of lizard and occurs naturally on several Indonesian islands.',
      'The platypus is a monotreme, an unusual group of mammals that reproduce by laying eggs.',
      'The wandering albatross has the greatest wingspan of any living bird, reaching well over three metres.',
      'Wolves commonly live and hunt in social groups known as packs.',
      'Chameleons can change colour for communication, temperature regulation and other functions, not only camouflage.',
      'Mangroves are specially adapted to saline and brackish environments along tropical and subtropical coastlines.',
      'Acorns are the fruits of oak trees and contain the seeds from which new oaks can grow.',
      'Herbivores are animals whose diets consist primarily of plant material.',
      'Walrus tusks are elongated canine teeth and occur in both males and females.',
      'Bottlenose dolphins use echolocation by producing sounds and interpreting returning echoes.'
    ]

  ]

}

/*
The puzzle page asks for facts using keys such as:
"1-1", "4-7", "9-10"

This Proxy keeps that existing interface intact and automatically
selects the matching fact set for the current Brisbane / AEST day.

ACTIVE_ROTATION_SET_COUNT is imported from lib/rotation.ts so the
questions and facts can never accidentally rotate through a different
number of active sets.
*/

export const DID_YOU_KNOW: Record<string, string> =
  new Proxy(
    {} as Record<string, string>,
    {
      get(
        _target,
        property: string | symbol
      ) {
        if (
          typeof property !== 'string'
        ) {
          return undefined
        }

        const match =
          /^(\d+)-(\d+)$/.exec(
            property
          )

        if (!match) {
          return undefined
        }

        const challengeIndex =
          Number(match[1])

        const questionIndex =
          Number(match[2]) - 1

        const challengeFacts =
          FACT_SETS[
            challengeIndex
          ]

        if (
          !challengeFacts ||
          questionIndex < 0 ||
          questionIndex >= 10
        ) {
          return undefined
        }

        const activeSetCount =
          Math.min(
            ACTIVE_ROTATION_SET_COUNT,
            challengeFacts.length
          )

        const setIndex =
          getRotationIndex(
            new Date(),
            activeSetCount
          )

        return challengeFacts[
          setIndex
        ]?.[questionIndex]
      }
    }
  )
