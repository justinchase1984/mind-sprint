// lib/content/gk100.ts
// Original editorial content for /general-knowledge-questions-and-answers.
// These questions are written specifically for this article and are NOT part of
// the daily quiz bank in lib/rotation.ts. Checked against the live bank with the
// internal duplicate checker before publishing (0 duplicates).

export type GkQuestion = {
  question: string
  answer: string
  explanation: string
}

export type GkSection = {
  id: string
  title: string
  emoji: string
  intro: string
  questions: GkQuestion[]
}

export const GK100_SECTIONS: GkSection[] = [
  {
    "id": "world",
    "title": "Around the World",
    "emoji": "🌏",
    "intro": "Places are the backbone of any general knowledge round. These questions skip the usual capital-city drill and focus on records, borders, landmarks and the odd geographical quirk that makes a good quiz-night talking point.",
    "questions": [
      {
        "question": "Which country covers the most time zones when its overseas territories are counted?",
        "answer": "France",
        "explanation": "Metropolitan France sits in a single time zone, but territories such as French Polynesia, Réunion, New Caledonia and French Guiana take the total to 12 standard time zones, edging out Russia and the United States with 11 each."
      },
      {
        "question": "Which is the only country whose national flag is not a rectangle or a square?",
        "answer": "Nepal",
        "explanation": "Nepal's flag is made of two stacked triangular pennants in crimson with a blue border. The two peaks are often said to represent the Himalayas, and the flag's construction is set out step by step in the country's constitution."
      },
      {
        "question": "What is the smallest independent country in the world by area?",
        "answer": "Vatican City",
        "explanation": "Vatican City covers roughly 44 hectares (about 0.44 square kilometres), entirely surrounded by the city of Rome. It has its own post office, flag and passports despite being smaller than many golf courses."
      },
      {
        "question": "Which South African city is affectionately known as the \"Mother City\"?",
        "answer": "Cape Town",
        "explanation": "Cape Town is South Africa's oldest European-founded city, established as a supply station in 1652, which is the usual explanation for the nickname. Table Mountain looms over the city centre."
      },
      {
        "question": "Which river carries more water to the sea than any other on Earth?",
        "answer": "The Amazon",
        "explanation": "The Amazon discharges more water than the next several largest rivers combined, accounting for roughly a fifth of all river water flowing into the world's oceans. Whether it or the Nile is the longest is still debated, but its volume is not."
      },
      {
        "question": "What is the deepest lake in the world?",
        "answer": "Lake Baikal",
        "explanation": "Siberia's Lake Baikal reaches about 1,642 metres at its deepest point and holds roughly a fifth of the world's unfrozen surface fresh water. It is also thought to be the oldest lake on Earth, at around 25 million years."
      },
      {
        "question": "In which city would you find the Sagrada Família basilica?",
        "answer": "Barcelona",
        "explanation": "Antoni Gaudí took over the project in 1883, a year after construction began, and worked on it until his death in 1926. Building has continued for well over a century, funded largely by donations and visitor tickets."
      },
      {
        "question": "In which Australian state or territory is Uluru located?",
        "answer": "Northern Territory",
        "explanation": "Uluru stands in Uluru-Kata Tjuta National Park, in the south-west of the Northern Territory. The rock is sacred to the Anangu traditional owners, and climbing it has been banned since October 2019."
      },
      {
        "question": "Which two countries share the longest international border in the world?",
        "answer": "Canada and the United States",
        "explanation": "The Canada–US border runs for about 8,890 kilometres, including the long boundary between Alaska and Canada's north-west. West of the Great Lakes, a long stretch follows the 49th parallel in a dead-straight line."
      },
      {
        "question": "The temple complex of Angkor Wat appears on the national flag of which country?",
        "answer": "Cambodia",
        "explanation": "Angkor Wat was built in the 12th century, originally as a Hindu temple, and later became a Buddhist site. It is generally regarded as the largest religious monument in the world and has featured on Cambodian flags since the mid-1800s."
      }
    ]
  },
  {
    "id": "words",
    "title": "Words & Language",
    "emoji": "🔤",
    "intro": "Everyday English is full of borrowed words, invented words and words with surprising family trees. This round mixes etymology with a few facts about how language works.",
    "questions": [
      {
        "question": "The word \"robot\" first appeared in a 1920 play by which Czech writer?",
        "answer": "Karel Čapek",
        "explanation": "Čapek's play R.U.R. (Rossum's Universal Robots) introduced the word, which he credited to his brother Josef. It comes from the Czech \"robota\", meaning forced labour."
      },
      {
        "question": "\"Scuba\" is an example of what kind of word, formed from the first letters of a longer phrase and pronounced as a word?",
        "answer": "An acronym",
        "explanation": "Scuba stands for \"self-contained underwater breathing apparatus\". Laser and radar are other acronyms that have become so familiar most people no longer write them in capitals."
      },
      {
        "question": "\"Kindergarten\" was borrowed into English from which language?",
        "answer": "German",
        "explanation": "It means \"children's garden\" and was coined by the German educator Friedrich Fröbel, who opened his first kindergarten in 1840. He saw children as plants that grow best with care and the right conditions."
      },
      {
        "question": "Which letter is used most often in written English?",
        "answer": "E",
        "explanation": "E appears in roughly one in every eight letters of typical English text. Codebreakers have used this kind of letter-frequency pattern for centuries to crack simple substitution ciphers."
      },
      {
        "question": "What does the Latin phrase \"carpe diem\" mean?",
        "answer": "Seize the day",
        "explanation": "The phrase comes from the Roman poet Horace, writing in 23 BCE. The full line encourages the reader to make the most of today and put very little trust in tomorrow."
      },
      {
        "question": "The English word \"kangaroo\" comes from which Aboriginal language?",
        "answer": "Guugu Yimithirr",
        "explanation": "Members of James Cook's expedition recorded the word \"gangurru\" in 1770 while their ship was being repaired near present-day Cooktown in Far North Queensland. In Guugu Yimithirr it refers to a particular large grey kangaroo."
      },
      {
        "question": "What do you call a sentence that uses every letter of the alphabet at least once?",
        "answer": "A pangram",
        "explanation": "\"The quick brown fox jumps over the lazy dog\" is the best-known example and was long used to test typewriters and fonts. The name comes from Greek words meaning \"every letter\"."
      },
      {
        "question": "In the NATO phonetic alphabet, which word stands for the letter A?",
        "answer": "Alfa",
        "explanation": "It is deliberately spelt \"Alfa\" rather than \"Alpha\" so speakers of other languages do not read the \"ph\" incorrectly. For the same reason, J is officially spelt \"Juliett\" with two Ts."
      },
      {
        "question": "Which language has the most native speakers in the world?",
        "answer": "Mandarin Chinese",
        "explanation": "Mandarin has close to a billion first-language speakers. English, however, has more total speakers once people who learned it as a second language are included."
      }
    ]
  },
  {
    "id": "science",
    "title": "Science All Around Us",
    "emoji": "🔬",
    "intro": "You do not need a lab coat for these. Each question links a scientific idea to something you can see, hear or feel in everyday life.",
    "questions": [
      {
        "question": "What is the most abundant chemical element in the universe?",
        "answer": "Hydrogen",
        "explanation": "Hydrogen makes up about three-quarters of all ordinary matter by mass. Stars, including the Sun, spend most of their lives fusing hydrogen into helium."
      },
      {
        "question": "Breathing in helium makes your voice sound squeaky. What is actually happening?",
        "answer": "Sound travels faster through helium",
        "explanation": "Your vocal cords vibrate at much the same rate, but sound moves nearly three times faster in helium than in air. That shifts the resonances of your throat and mouth, giving the voice its cartoonish tone."
      },
      {
        "question": "Why does ice float on water?",
        "answer": "It is less dense than liquid water",
        "explanation": "As water freezes, its molecules lock into an open crystal structure that takes up about 9% more space. That is why lakes freeze from the top down, leaving liquid water beneath for fish."
      },
      {
        "question": "What does a Geiger counter detect?",
        "answer": "Ionising radiation",
        "explanation": "The device, developed by Hans Geiger and later improved with Walther Müller, produces a click each time radiation ionises the gas inside its tube. Faster clicking means a stronger source."
      },
      {
        "question": "What is absolute zero on the Celsius scale?",
        "answer": "−273.15 °C",
        "explanation": "Absolute zero is the lowest temperature possible, where particles have the least energy they can have. Scientists have cooled matter to within a tiny fraction of a degree of it, but never reached it exactly."
      },
      {
        "question": "What colour does blue litmus paper turn when dipped in an acid?",
        "answer": "Red",
        "explanation": "Litmus is a dye extracted from lichens. It turns red in acidic solutions and blue in alkaline ones, making it one of the oldest and simplest chemical indicators."
      },
      {
        "question": "Which alloy is made mainly from copper and tin?",
        "answer": "Bronze",
        "explanation": "Bronze is harder than copper alone, and its widespread use gave the Bronze Age its name. Brass, by contrast, is mainly copper and zinc."
      },
      {
        "question": "In Einstein's famous equation E = mc², what does the \"c\" represent?",
        "answer": "The speed of light",
        "explanation": "Einstein published the idea in 1905. Because the speed of light is such a large number, and it is squared, even a tiny amount of mass corresponds to an enormous amount of energy."
      },
      {
        "question": "During a storm, why do you see lightning before you hear thunder?",
        "answer": "Light travels much faster than sound",
        "explanation": "Light arrives almost instantly, while sound covers roughly one kilometre every three seconds. Counting the seconds between flash and rumble and dividing by three gives a rough distance to the strike in kilometres."
      }
    ]
  },
  {
    "id": "space",
    "title": "Space & the Night Sky",
    "emoji": "🔭",
    "intro": "From the planets next door to telescopes a million and a half kilometres away, this round covers some of the most remarkable facts astronomers have pinned down.",
    "questions": [
      {
        "question": "Which moon is the largest in the solar system, bigger even than the planet Mercury?",
        "answer": "Ganymede",
        "explanation": "Jupiter's moon Ganymede is about 5,270 kilometres across, roughly 400 kilometres wider than Mercury. It is also the only moon known to have its own magnetic field."
      },
      {
        "question": "Which planet appears to spin on its side, with its axis tilted about 98 degrees?",
        "answer": "Uranus",
        "explanation": "Astronomers think a massive collision early in its history knocked Uranus over. As a result, each pole spends around 42 Earth years in continuous sunlight followed by 42 years of darkness."
      },
      {
        "question": "Roughly how long does sunlight take to reach Earth?",
        "answer": "About 8 minutes 20 seconds",
        "explanation": "The Sun is about 150 million kilometres away. When you look at it (never directly), you are seeing it as it was a little over eight minutes earlier."
      },
      {
        "question": "Which planet has the hottest average surface temperature in our solar system?",
        "answer": "Venus",
        "explanation": "Venus is farther from the Sun than Mercury, but its thick carbon dioxide atmosphere traps heat, keeping the surface at around 465 °C, hot enough to melt lead."
      },
      {
        "question": "Who became the first person to travel into space, in April 1961?",
        "answer": "Yuri Gagarin",
        "explanation": "The Soviet cosmonaut orbited Earth once aboard Vostok 1 on 12 April 1961, in a flight lasting about 108 minutes. The anniversary is now celebrated as the International Day of Human Space Flight."
      },
      {
        "question": "What is the name of the nearest known star to the Sun?",
        "answer": "Proxima Centauri",
        "explanation": "Proxima Centauri is a small red dwarf about 4.2 light-years away. It is part of the Alpha Centauri system, which is visible from Australia as one of the two Pointers near the Southern Cross."
      },
      {
        "question": "Which former planet was reclassified as a dwarf planet in 2006?",
        "answer": "Pluto",
        "explanation": "The International Astronomical Union introduced a formal definition of a planet in 2006. Pluto does not clear its orbit of other objects, so it was moved into the new dwarf planet category."
      },
      {
        "question": "A light-year is a measurement of what?",
        "answer": "Distance",
        "explanation": "Despite the name, it is not a unit of time. It is the distance light travels in one year, about 9.46 trillion kilometres."
      },
      {
        "question": "Which large infrared space telescope launched on Christmas Day 2021?",
        "answer": "The James Webb Space Telescope",
        "explanation": "Webb orbits around a point about 1.5 million kilometres from Earth, on the side facing away from the Sun. Its gold-coated mirror is 6.5 metres across and had to be folded to fit inside the rocket."
      }
    ]
  },
  {
    "id": "body",
    "title": "The Human Body",
    "emoji": "🫀",
    "intro": "You carry the subject of this round everywhere you go. These questions cover bones, blood and a few organs that work harder than most people realise.",
    "questions": [
      {
        "question": "How many bones are in a typical adult human skeleton?",
        "answer": "206",
        "explanation": "Babies are born with around 270 to 300 bones and cartilage pieces. Many of them fuse together during childhood and adolescence, including bones in the skull and the base of the spine."
      },
      {
        "question": "What is the smallest bone in the human body?",
        "answer": "The stapes (stirrup bone)",
        "explanation": "The stapes sits in the middle ear and is only about 3 millimetres long. It passes sound vibrations from the eardrum on to the inner ear."
      },
      {
        "question": "Which vitamin does your skin produce when exposed to sunlight?",
        "answer": "Vitamin D",
        "explanation": "Ultraviolet B light triggers vitamin D production in the skin. The body needs it to absorb calcium, which is why it matters for strong bones."
      },
      {
        "question": "What is the hardest substance in the human body?",
        "answer": "Tooth enamel",
        "explanation": "Enamel is mostly made of a calcium phosphate mineral. It is harder than bone, but it contains no living cells, so the body cannot repair it once it is lost."
      },
      {
        "question": "Roughly how much blood does an average adult have?",
        "answer": "About 5 litres",
        "explanation": "The figure varies with body size, usually somewhere between 4.5 and 5.5 litres. Blood makes up around 7 to 8% of body weight."
      },
      {
        "question": "Which internal organ can regrow to near its full size after part of it is removed?",
        "answer": "The liver",
        "explanation": "A healthy liver can regenerate even after a large portion is removed. This ability is what makes living-donor liver transplants possible."
      },
      {
        "question": "What are the tiny finger-like projections lining the small intestine called?",
        "answer": "Villi",
        "explanation": "Villi greatly increase the surface area of the small intestine, helping it absorb nutrients from food. Each villus is covered in even smaller projections called microvilli."
      },
      {
        "question": "Which blood type is known as the universal donor for red blood cells?",
        "answer": "O negative",
        "explanation": "O negative red cells lack A, B and RhD antigens, so they can be given to almost anyone in an emergency. Only a minority of people have this blood type, which is why blood services are always keen to hear from them."
      },
      {
        "question": "Which dome-shaped muscle beneath the lungs does most of the work when you breathe in?",
        "answer": "The diaphragm",
        "explanation": "When the diaphragm contracts and flattens, it draws air into the lungs. Hiccups are sudden involuntary spasms of this muscle, followed by the vocal cords snapping shut."
      }
    ]
  },
  {
    "id": "inventions",
    "title": "Inventions & Discoveries",
    "emoji": "💡",
    "intro": "Some of these breakthroughs were the result of years of careful work; others began with a happy accident. A couple have an Australian connection worth knowing.",
    "questions": [
      {
        "question": "Which British computer scientist proposed the World Wide Web while working at CERN in 1989?",
        "answer": "Tim Berners-Lee",
        "explanation": "Berners-Lee wrote the first web browser and web server, and the first website went online in 1990–91. CERN made the underlying technology freely available in 1993, which helped the web spread rapidly."
      },
      {
        "question": "Which Scottish-born inventor was granted the first US patent for the telephone in 1876?",
        "answer": "Alexander Graham Bell",
        "explanation": "Bell's interest in sound came partly from his work teaching deaf students. His famous first words over the device were reportedly \"Mr Watson, come here, I want to see you.\""
      },
      {
        "question": "The flight data recorder, or \"black box\", was conceived by which Australian scientist?",
        "answer": "David Warren",
        "explanation": "Dr David Warren came up with the idea in the 1950s while working at the Aeronautical Research Laboratories in Melbourne. Despite the nickname, flight recorders are painted bright orange so they are easier to find after an accident."
      },
      {
        "question": "Alexander Fleming's accidental discovery in 1928 led to which antibiotic?",
        "answer": "Penicillin",
        "explanation": "Fleming noticed that mould growing on a bacteria culture had killed the bacteria around it. It took another decade and the work of Howard Florey, an Australian, and Ernst Chain to turn it into a mass-produced medicine."
      },
      {
        "question": "Which German goldsmith developed a movable-type printing press in Europe around the 1440s?",
        "answer": "Johannes Gutenberg",
        "explanation": "Gutenberg's press made it possible to produce books far faster than copying them by hand. The Gutenberg Bible, completed around 1455, is one of the most valuable books in the world."
      },
      {
        "question": "Which brothers made the first controlled, powered aeroplane flight in 1903?",
        "answer": "The Wright brothers (Orville and Wilbur)",
        "explanation": "The first flight, near Kitty Hawk in North Carolina on 17 December 1903, lasted just 12 seconds and covered about 37 metres, less than the wingspan of a modern jumbo jet."
      },
      {
        "question": "The microwave oven grew out of research into which wartime technology?",
        "answer": "Radar",
        "explanation": "Engineer Percy Spencer was working with radar equipment in the 1940s when he noticed a chocolate bar in his pocket had melted. The first commercial microwave ovens were large, expensive machines aimed at restaurants."
      },
      {
        "question": "What does \"GPS\" stand for?",
        "answer": "Global Positioning System",
        "explanation": "GPS is operated by the United States and relies on a constellation of at least 24 satellites. Your phone works out its location by measuring tiny differences in the time signals from several of them."
      },
      {
        "question": "Which English doctor developed the first vaccine, against smallpox, in 1796?",
        "answer": "Edward Jenner",
        "explanation": "Jenner used material from cowpox to protect against smallpox. The word \"vaccine\" comes from the Latin \"vacca\", meaning cow, and smallpox was declared eradicated worldwide in 1980."
      }
    ]
  },
  {
    "id": "history",
    "title": "History's Turning Points",
    "emoji": "🏛️",
    "intro": "These questions span more than 2,000 years, from Roman Britain to the start of the Space Age, with a few moments from Australian and New Zealand history along the way.",
    "questions": [
      {
        "question": "In what year did the six Australian colonies federate to form the Commonwealth of Australia?",
        "answer": "1901",
        "explanation": "Federation took effect on 1 January 1901. Edmund Barton became the first Prime Minister, and the first federal Parliament opened in Melbourne in May that year."
      },
      {
        "question": "Which city hosted Australia's federal Parliament before it moved to Canberra in 1927?",
        "answer": "Melbourne",
        "explanation": "Parliament sat in Melbourne for its first 26 years while Canberra was chosen and built as a compromise between rivals Sydney and Melbourne. The provisional Parliament House in Canberra opened in 1927."
      },
      {
        "question": "Which was the first self-governing country to give women the right to vote in national elections?",
        "answer": "New Zealand",
        "explanation": "New Zealand women won the vote in 1893 after a campaign led by Kate Sheppard, who appears on the New Zealand $10 note."
      },
      {
        "question": "Who was the first woman to win a Nobel Prize?",
        "answer": "Marie Curie",
        "explanation": "Curie shared the 1903 Nobel Prize in Physics and won the 1911 Nobel Prize in Chemistry on her own. She remains the only person to have won Nobel Prizes in two different sciences."
      },
      {
        "question": "Which ship carried the Pilgrims from England to North America in 1620?",
        "answer": "The Mayflower",
        "explanation": "The Mayflower carried just over 100 passengers and took about two months to cross the Atlantic. Its passengers founded Plymouth Colony in what is now Massachusetts."
      },
      {
        "question": "What was the name of the first artificial satellite, launched in 1957?",
        "answer": "Sputnik 1",
        "explanation": "The Soviet Union launched Sputnik 1 on 4 October 1957. The polished metal sphere was only 58 centimetres across, but its beeping radio signal kicked off the Space Race."
      },
      {
        "question": "Which Portuguese explorer was the first European to reach India by sailing around Africa?",
        "answer": "Vasco da Gama",
        "explanation": "Da Gama reached Calicut (now Kozhikode) on India's south-west coast in 1498. The sea route allowed European traders to reach the spice markets of Asia without travelling overland."
      },
      {
        "question": "Which Roman emperor ordered a wall built across northern Britain in AD 122?",
        "answer": "Hadrian",
        "explanation": "Hadrian's Wall stretched about 117 kilometres (73 miles) from coast to coast. Long sections still stand, and it is now a UNESCO World Heritage Site."
      },
      {
        "question": "The Lighthouse of Alexandria, one of the Seven Wonders of the Ancient World, stood in which modern country?",
        "answer": "Egypt",
        "explanation": "Built in the 3rd century BCE on the island of Pharos, it was among the tallest structures of the ancient world. Earthquakes eventually destroyed it, and \"pharos\" became the root of the word for lighthouse in several languages."
      }
    ]
  },
  {
    "id": "arts",
    "title": "Arts, Books & Music",
    "emoji": "🎨",
    "intro": "Painters, poets, novelists and composers all feature here, including a few Australians who belong in any general knowledge collection.",
    "questions": [
      {
        "question": "How many lines are there in a traditional sonnet?",
        "answer": "14",
        "explanation": "Shakespeare wrote 154 sonnets, most following a pattern of three four-line stanzas and a closing rhyming couplet. Italian sonnets instead split the 14 lines into eight and six."
      },
      {
        "question": "Which composer wrote his Ninth Symphony after becoming almost completely deaf?",
        "answer": "Ludwig van Beethoven",
        "explanation": "At the 1824 premiere, Beethoven reportedly had to be turned around to see the audience applauding. The melody of its final movement, a setting of Schiller's \"Ode to Joy\", is now used as the anthem of the European Union."
      },
      {
        "question": "Who painted the ceiling of the Sistine Chapel in Vatican City?",
        "answer": "Michelangelo",
        "explanation": "Michelangelo worked on the ceiling from 1508 to 1512, painting more than 300 figures. He considered himself mainly a sculptor and initially resisted the commission."
      },
      {
        "question": "Which Dutch artist painted \"Girl with a Pearl Earring\"?",
        "answer": "Johannes Vermeer",
        "explanation": "Vermeer painted it around 1665 and it hangs in the Mauritshuis in The Hague. Only about three dozen of his paintings are known to survive."
      },
      {
        "question": "Which Australian author wrote the 1901 novel \"My Brilliant Career\"?",
        "answer": "Miles Franklin",
        "explanation": "Stella Maria Sarah Miles Franklin wrote the book as a teenager. She left money in her will to create the Miles Franklin Literary Award, now one of Australia's most prestigious literary prizes."
      },
      {
        "question": "Which author created the detective Sherlock Holmes?",
        "answer": "Arthur Conan Doyle",
        "explanation": "Holmes first appeared in \"A Study in Scarlet\" in 1887. Conan Doyle was a doctor, and he based some of Holmes's deductive skills on one of his former medical teachers."
      },
      {
        "question": "Which Danish architect designed the Sydney Opera House?",
        "answer": "Jørn Utzon",
        "explanation": "Utzon's design won an international competition in 1957, but he left the project in 1966 and never saw it finished. The building opened in 1973 and became a World Heritage Site in 2007."
      },
      {
        "question": "What is the name for the painting technique of applying pigment to fresh, wet plaster?",
        "answer": "Fresco",
        "explanation": "As the plaster dries, the colour binds into the wall itself, which is why many frescoes have survived for centuries. The word comes from the Italian for \"fresh\"."
      },
      {
        "question": "Who wrote the words to \"Waltzing Matilda\"?",
        "answer": "Banjo Paterson",
        "explanation": "Andrew Barton \"Banjo\" Paterson wrote the lyrics in 1895 while staying at Dagworth Station in outback Queensland. He also wrote \"The Man from Snowy River\" and appears on the Australian $10 note."
      }
    ]
  },
  {
    "id": "food",
    "title": "Food & Drink",
    "emoji": "🍽️",
    "intro": "A round for the kitchen and the pantry. These questions cover where familiar foods come from, what gives them their character and one very Australian spread.",
    "questions": [
      {
        "question": "Which spice is made from the dried stigmas of a crocus flower?",
        "answer": "Saffron",
        "explanation": "Each flower produces only three stigmas, which are picked by hand. It takes many thousands of flowers to make a single kilogram, which is why saffron is the world's most expensive spice by weight."
      },
      {
        "question": "Which fruit is the main ingredient in guacamole?",
        "answer": "Avocado",
        "explanation": "Guacamole dates back to the Aztecs. Botanically, the avocado is a single-seeded berry."
      },
      {
        "question": "Paella is a rice dish that originated in which region of Spain?",
        "answer": "Valencia",
        "explanation": "Traditional Valencian paella uses rabbit, chicken and green beans rather than seafood. The name comes from the wide, shallow pan it is cooked in."
      },
      {
        "question": "Japanese sake is brewed mainly from which grain?",
        "answer": "Rice",
        "explanation": "Sake rice is polished to remove the outer layers before brewing, and more highly polished rice generally produces more refined, premium sake. It is brewed in a way more like beer than wine, although it is often called rice wine."
      },
      {
        "question": "What is the main ingredient of hummus?",
        "answer": "Chickpeas",
        "explanation": "Classic hummus blends cooked chickpeas with tahini (sesame paste), lemon juice and garlic. The word itself is Arabic for chickpea."
      },
      {
        "question": "Vegemite was developed in 1922 in which Australian city?",
        "answer": "Melbourne",
        "explanation": "Chemist Cyril Callister created it from leftover brewer's yeast for the Fred Walker company, and it went on sale in 1923. The name was chosen through a public competition."
      },
      {
        "question": "Marzipan is traditionally made from sugar and which ground nut?",
        "answer": "Almonds",
        "explanation": "Marzipan has been made in Europe for centuries and is often shaped and coloured to look like small fruits or animals. In Australia it is a familiar layer under the icing on a traditional Christmas cake."
      },
      {
        "question": "Which compound gives chillies their heat?",
        "answer": "Capsaicin",
        "explanation": "Chilli heat is measured on the Scoville scale, named after American pharmacist Wilbur Scoville. Birds cannot taste capsaicin, which helps chilli plants because birds spread the seeds."
      },
      {
        "question": "As of 2026, which country produces the most coffee in the world?",
        "answer": "Brazil",
        "explanation": "Brazil has been the world's largest coffee producer for more than 150 years and grows around a third of the global supply. Vietnam is usually second, mostly growing the robusta variety."
      }
    ]
  },
  {
    "id": "nature",
    "title": "Nature & Wildlife",
    "emoji": "🌿",
    "intro": "From giant trees to the oddest droppings in the animal kingdom, this round covers the natural world, with several Australian animals that deserve more attention than they get.",
    "questions": [
      {
        "question": "Which tree species grows taller than any other?",
        "answer": "The coast redwood",
        "explanation": "The tallest known living tree is a coast redwood named Hyperion in northern California, measured at about 116 metres. Its exact location is kept secret to protect it."
      },
      {
        "question": "What is a baby echidna called?",
        "answer": "A puggle",
        "explanation": "Echidnas are monotremes, egg-laying mammals. The female lays a single soft-shelled egg into her pouch, and the puggle hatches about ten days later."
      },
      {
        "question": "What is the largest living bird?",
        "answer": "The ostrich",
        "explanation": "Ostriches can stand around 2.7 metres tall and weigh well over 100 kilograms. They cannot fly, but they can run at about 70 kilometres per hour."
      },
      {
        "question": "How do honey bees tell their hive-mates where to find food?",
        "answer": "With a \"waggle dance\"",
        "explanation": "A returning forager moves in a figure-of-eight pattern. The angle of the waggling run shows the direction of the food relative to the Sun, and its length indicates the distance."
      },
      {
        "question": "What word describes animals that are mainly active at dawn and dusk?",
        "answer": "Crepuscular",
        "explanation": "The word comes from the Latin for twilight. Many kangaroos and wallabies are crepuscular, which is one reason country drivers are warned to take extra care at those times of day."
      },
      {
        "question": "What is a scientist who studies fungi called?",
        "answer": "A mycologist",
        "explanation": "Fungi are neither plants nor animals; they have their own kingdom. Genetic studies show they are actually more closely related to animals than to plants."
      },
      {
        "question": "Which Australian animal is famous for producing cube-shaped droppings?",
        "answer": "The wombat",
        "explanation": "Wombats can produce dozens of cube-shaped droppings a night. Researchers found the shape comes from varying stiffness in the walls of the intestine, and the cubes are thought to be less likely to roll away from the spots wombats use to mark territory."
      },
      {
        "question": "How many legs does a spider have?",
        "answer": "Eight",
        "explanation": "Spiders are arachnids, not insects, which have six legs. Most spiders also have eight eyes, though the number varies between species."
      },
      {
        "question": "Which plant produces the largest single flower in the world?",
        "answer": "Rafflesia arnoldii",
        "explanation": "Found in the rainforests of Sumatra and Borneo, its flowers can grow to about a metre across. It has no leaves, stems or roots of its own, and it smells of rotting meat to attract the flies that pollinate it."
      }
    ]
  },
  {
    "id": "sport",
    "title": "Sport & Games",
    "emoji": "🏅",
    "intro": "A mix of the field, the court and the games table, with a strong Australian flavour.",
    "questions": [
      {
        "question": "Which Australian city hosted the 2000 Summer Olympic Games?",
        "answer": "Sydney",
        "explanation": "The Sydney Games ran from 15 September to 1 October 2000. Cathy Freeman lit the cauldron at the opening ceremony and then won gold in the 400 metres."
      },
      {
        "question": "In snooker, how many points is the black ball worth?",
        "answer": "Seven",
        "explanation": "The colours range from yellow (two points) to black (seven), with each red worth one. A maximum break of 147 means potting all 15 reds, each with the black, followed by all the colours."
      },
      {
        "question": "A netball side has how many players on court during play?",
        "answer": "Seven",
        "explanation": "Each player has a set position, such as Goal Shooter or Centre, and must stay within the zones allowed for that position. Bibs show the position letters, for example GS, C and GK."
      },
      {
        "question": "Which board game began life in 1904 as \"The Landlord's Game\"?",
        "answer": "Monopoly",
        "explanation": "Elizabeth (Lizzie) Magie designed The Landlord's Game to show the problems with land monopolies. Monopoly as most people know it was published by Parker Brothers in 1935."
      },
      {
        "question": "Which is the only chess piece that can jump over other pieces?",
        "answer": "The knight",
        "explanation": "The knight moves in an L shape: two squares in one direction, then one square at a right angle. Because it alternates square colours with every move, it can be tricky to track."
      },
      {
        "question": "How many dots are there in total on a standard six-sided die?",
        "answer": "21",
        "explanation": "1 + 2 + 3 + 4 + 5 + 6 = 21. On a standard die, opposite faces always add up to seven."
      },
      {
        "question": "Which horse race is known as \"the race that stops a nation\"?",
        "answer": "The Melbourne Cup",
        "explanation": "The Melbourne Cup is run at Flemington Racecourse on the first Tuesday in November, which is a public holiday in metropolitan Melbourne. It was first held in 1861."
      },
      {
        "question": "In Australian rules football, how many points is a goal worth?",
        "answer": "Six",
        "explanation": "A goal is kicked between the two tall centre posts and is worth six points, while a behind scores one. A score of 12.8 therefore means 12 goals and 8 behinds, for a total of 80 points."
      },
      {
        "question": "What is the highest possible score in a single game of tenpin bowling?",
        "answer": "300",
        "explanation": "A perfect game requires 12 strikes in a row. Bonus points from strikes mean every one of the 10 frames is worth 30."
      }
    ]
  }
]

export const GK100_TOTAL = GK100_SECTIONS.reduce(
  (sum, section) => sum + section.questions.length,
  0
)
