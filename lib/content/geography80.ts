// lib/content/geography80.ts
// Original editorial content for /geography-trivia-questions-and-answers.
// These questions are written specifically for this article and are NOT part of
// the daily quiz bank in lib/rotation.ts. Checked against the live bank and the
// General Knowledge and History Q&A pages with the internal duplicate checker
// before publishing.

export type GeographyQuestion = {
  question: string
  answer: string
  explanation: string
}

export type GeographySection = {
  id: string
  title: string
  emoji: string
  intro: string
  questions: GeographyQuestion[]
}

export const GEOGRAPHY80_SECTIONS: GeographySection[] = [
  {
    "id": "capitals",
    "title": "Capitals of the World",
    "emoji": "🏙️",
    "intro": "A capital city is not always the biggest city in the country, and some were purpose-built on empty ground. This round mixes familiar names with a few capitals that still catch people out.",
    "questions": [
      {
        "question": "In 1960, Brazil moved its capital from Rio de Janeiro to which planned city in the country's interior?",
        "answer": "Brasília",
        "explanation": "Brasília was inaugurated on 21 April 1960. The city's layout was designed by Lúcio Costa and many of its landmark buildings were the work of Oscar Niemeyer. It sits on the central plateau, hundreds of kilometres from the coast, in a bid to draw development inland."
      },
      {
        "question": "In 1991, Nigeria moved its capital from Lagos to which planned city near the centre of the country?",
        "answer": "Abuja",
        "explanation": "The official move took place on 12 December 1991. Abuja was built in the 1980s in a more central, less crowded location than Lagos, which remains Nigeria's largest city and its main commercial centre."
      },
      {
        "question": "What is the purpose-built capital of Pakistan, developed in the 1960s to replace Karachi?",
        "answer": "Islamabad",
        "explanation": "Islamabad was planned as a spacious, modern capital at the foot of the Margalla Hills. The name means \"city of Islam\". During construction, nearby Rawalpindi served as a temporary seat of government, and Karachi remains the country's largest city."
      },
      {
        "question": "Which European capital was formed in 1873 by uniting the towns of Buda, Pest and Óbuda?",
        "answer": "Budapest",
        "explanation": "Buda and Pest had long faced each other across the river, with the smaller town of Óbuda to the north. After they were united in 1873 the combined city became, and has remained, the capital of Hungary, still often thought of as having two distinct halves."
      },
      {
        "question": "Which city became the capital of Finland in 1812, taking over from Turku?",
        "answer": "Helsinki",
        "explanation": "Helsinki stands on a peninsula and a cluster of islands on the Gulf of Finland. It was made the capital in 1812, when Finland was a Grand Duchy under Russian rule, and it has remained the capital ever since independence."
      },
      {
        "question": "Which city in the north has been the capital of a unified Vietnam since 1976?",
        "answer": "Hanoi",
        "explanation": "Hanoi had been the capital of North Vietnam, and it stayed the capital after the country was reunified in 1976. Ho Chi Minh City, formerly Saigon, is larger and remains the main commercial centre in the south."
      },
      {
        "question": "Which South American capital stands at about 2,640 metres above sea level on a high plateau?",
        "answer": "Bogotá",
        "explanation": "Bogotá is the capital of Colombia, and its elevation makes it one of the world's highest major cities. The Spanish founded it in 1538 on the site of a Muisca settlement, on a plateau in the eastern ranges of the country."
      },
      {
        "question": "Which European capital stands on the Vistula River and was largely rebuilt after being destroyed in the Second World War?",
        "answer": "Warsaw",
        "explanation": "Warsaw is the capital of Poland. Much of its historic centre was systematically destroyed in 1944 and later rebuilt, and the reconstructed Old Town is now a UNESCO World Heritage site."
      },
      {
        "question": "What is the capital city of Ethiopia, and also the headquarters of the African Union?",
        "answer": "Addis Ababa",
        "explanation": "Addis Ababa was founded in the 1880s by Emperor Menelik II and Empress Taytu. The name means \"new flower\" in Amharic. It later became the seat of the Organisation of African Unity, and today the African Union is based there."
      },
      {
        "question": "What is the capital city of Mongolia, often described as the coldest national capital in the world?",
        "answer": "Ulaanbaatar",
        "explanation": "Ulaanbaatar lies in a valley in north-central Mongolia, more than 1,300 kilometres from the sea, and winter temperatures regularly drop well below minus 20 degrees Celsius. The city, long known as Urga, was renamed Ulaanbaatar, meaning \"red hero\", in 1924."
      }
    ]
  },
  {
    "id": "rivers-lakes",
    "title": "Rivers and Lakes",
    "emoji": "🌊",
    "intro": "Rivers shape borders, trade and cities, and a few famous lakes are almost inland seas. This round stays with well-established facts and steers clear of the old arguments about which river is the world's longest.",
    "questions": [
      {
        "question": "Which river flows through Vienna, Budapest and Belgrade before emptying into the Black Sea?",
        "answer": "The Danube",
        "explanation": "The Danube rises in Germany's Black Forest and runs east for almost 2,860 kilometres. It flows through or along the borders of ten countries, more than any other river, and is an important trade route as well as a popular setting for quiz questions."
      },
      {
        "question": "The Three Gorges Dam, the world's largest hydroelectric station by capacity, stands on which river?",
        "answer": "The Yangtze",
        "explanation": "The Yangtze, or Chang Jiang, is the longest river in Asia and the longest that runs entirely within one country. It flows from the Tibetan Plateau to the East China Sea near Shanghai, and the huge dam was completed in the 2000s in Hubei province."
      },
      {
        "question": "Which river forms much of the border between the United States and Mexico?",
        "answer": "The Rio Grande",
        "explanation": "On the Mexican side the same river is called the Río Bravo, or Río Bravo del Norte. It forms the entire Texas–Mexico border, while the border further west, through New Mexico, Arizona and California, is drawn over land."
      },
      {
        "question": "Which is Africa's largest lake by surface area?",
        "answer": "Lake Victoria",
        "explanation": "Lake Victoria is shared by Kenya, Uganda and Tanzania, and is the world's second-largest freshwater lake by surface area. Its waters feed the White Nile, which leaves the lake at Jinja in Uganda."
      },
      {
        "question": "Which river flows through or past Basel, Strasbourg, Cologne and Rotterdam?",
        "answer": "The Rhine",
        "explanation": "The Rhine rises in the Swiss Alps and runs north through western Europe before spreading into a wide delta in the Netherlands and reaching the North Sea. It has long been one of the continent's busiest commercial waterways."
      },
      {
        "question": "Which river, sacred in Hinduism, flows through the Indian city of Varanasi?",
        "answer": "The Ganges",
        "explanation": "Known in India as the Ganga, the river rises in the Himalayas and crosses the northern plains before joining the Brahmaputra and emptying into the Bay of Bengal. Millions of pilgrims visit Varanasi each year to bathe in its waters."
      },
      {
        "question": "Victoria Falls, known locally as Mosi-oa-Tunya, or \"the smoke that thunders\", stands on which river?",
        "answer": "The Zambezi",
        "explanation": "The falls sit on the border between Zambia and Zimbabwe, where the Zambezi plunges into a narrow gorge. In full flood they form one of the world's widest curtains of falling water, and the spray can be seen from several kilometres away."
      },
      {
        "question": "Which of the North American Great Lakes is the largest freshwater lake in the world by surface area?",
        "answer": "Lake Superior",
        "explanation": "Lake Superior is shared by Canada and the United States. It is bigger by area than the other Great Lakes, though Lake Baikal in Russia holds more water. The lake's name comes from the French lac supérieur, meaning the upper lake."
      },
      {
        "question": "Which river forms most of the border between the Australian states of New South Wales and Victoria?",
        "answer": "The Murray",
        "explanation": "The Murray rises in the Snowy Mountains and flows west for about 2,500 kilometres to the sea in South Australia. Together with the Darling it forms the country's largest river system, and its waters are vital for irrigation along the way."
      },
      {
        "question": "Which African Great Lake is the world's second-deepest, and also the longest freshwater lake?",
        "answer": "Lake Tanganyika",
        "explanation": "Lake Tanganyika stretches for about 670 kilometres and is shared by Tanzania, the Democratic Republic of the Congo, Burundi and Zambia. It is more than 1,400 metres deep in places, and it holds a remarkable variety of cichlid fish found nowhere else."
      }
    ]
  },
  {
    "id": "mountains",
    "title": "Mountains and Volcanoes",
    "emoji": "⛰️",
    "intro": "From snow-capped Alpine peaks to a volcano that still rumbles over Sicily, this round is about the ranges and summits that turn up again and again in geography quizzes. Heights are given in metres, as they usually are on maps.",
    "questions": [
      {
        "question": "What is the highest mountain in the Alps?",
        "answer": "Mont Blanc",
        "explanation": "Mont Blanc rises to about 4,806 metres on the border between France and Italy. It is the highest peak in the Alps and in Western Europe, and the surrounding massif is a classic destination for climbers and walkers."
      },
      {
        "question": "Which mountain range includes Mount Everest, Kangchenjunga and Annapurna?",
        "answer": "The Himalayas",
        "explanation": "The Himalayas arc across northern India, Nepal, Bhutan and Tibet. They contain most of the world's highest peaks, including Everest, and were formed as the Indian plate pushed into the Eurasian plate, a collision that is still slowly raising the range."
      },
      {
        "question": "What is the highest mountain on the Australian mainland?",
        "answer": "Mount Kosciuszko",
        "explanation": "Mount Kosciuszko stands 2,228 metres above sea level in the Snowy Mountains of New South Wales. It was named by the explorer Paul Strzelecki. The highest peak on Australian territory overall is Mawson Peak, on remote Heard Island."
      },
      {
        "question": "Mount Etna, one of Europe's most active volcanoes, stands on which Italian island?",
        "answer": "Sicily",
        "explanation": "Etna rises on Sicily's east coast, above the city of Catania. It has been erupting for thousands of years and is closely watched, but its slopes are also farmed and settled, thanks to the rich volcanic soil."
      },
      {
        "question": "Ben Nevis, the highest mountain in the British Isles, stands in which country?",
        "answer": "Scotland",
        "explanation": "Ben Nevis is 1,345 metres high and lies in Lochaber, at the western end of the Grampian Mountains. A well-made path leads to the summit in summer, and on a clear day the views can stretch as far as Northern Ireland."
      },
      {
        "question": "Which mountain range runs roughly parallel to the east coast of Australia, from Queensland down to Victoria?",
        "answer": "The Great Dividing Range",
        "explanation": "The Great Dividing Range, also called the Great Divide, is one of the world's longest mountain chains on land. It separates the short rivers that run to the Pacific from the much larger catchments that drain inland or west toward the Murray–Darling system."
      },
      {
        "question": "Aconcagua, the highest mountain in both the Western and Southern Hemispheres, is in which country?",
        "answer": "Argentina",
        "explanation": "Aconcagua rises to 6,961 metres in the province of Mendoza, close to the Chilean border. It is a huge mountain but a popular, if demanding, trek for experienced climbers, and the usual route does not require technical climbing."
      },
      {
        "question": "Which mountain in the Caucasus is generally regarded as the highest peak in Europe?",
        "answer": "Mount Elbrus",
        "explanation": "Mount Elbrus reaches 5,642 metres in the Russian Caucasus. Whether the Caucasus counts as Europe is sometimes debated, but quiz conventions and most atlases treat Elbrus as Europe's highest mountain, ahead of Mont Blanc."
      },
      {
        "question": "What is the Māori name for New Zealand's highest mountain, Mount Cook?",
        "answer": "Aoraki",
        "explanation": "The official name is Aoraki / Mount Cook, and the peak stands 3,724 metres high in the Southern Alps of the South Island. In Ngāi Tahu tradition, Aoraki was a canoe-borne ancestor who was turned to stone, becoming the mountain."
      },
      {
        "question": "K2, the world's second-highest mountain, lies on the border of China and which other country?",
        "answer": "Pakistan",
        "explanation": "K2 rises to 8,611 metres in the Karakoram range. It is often regarded as a harder and more dangerous climb than Everest, and it was first summited in 1954 by an Italian expedition led by Ardito Desio."
      }
    ]
  },
  {
    "id": "flags",
    "title": "Flags of the World",
    "emoji": "🚩",
    "intro": "National flags are full of symbols that make tidy quiz questions: colours, crosses, constellations and a dragon or two. Each answer below comes with a little of the story behind the design.",
    "questions": [
      {
        "question": "The red disc on the national flag of Japan represents what?",
        "answer": "The sun",
        "explanation": "The flag is often called the Hinomaru, meaning \"circle of the sun\". Japan has long been known as the land of the rising sun, and a simple red disc on a white field has been used as a national emblem for well over a century."
      },
      {
        "question": "In which year was South Africa's current national flag first used, at the start of majority rule?",
        "answer": "1994",
        "explanation": "The flag was first flown on 27 April 1994, the day of the country's first all-race elections. It was designed by Frederick Brownell and brings together colours from several older South African flags and from the African National Congress."
      },
      {
        "question": "How many stars appear on the current flag of the United States?",
        "answer": "50",
        "explanation": "There is one star for each state. The 50th star was added on 4 July 1960, after Hawaii became a state in 1959. The 13 stripes still represent the original colonies that declared independence in 1776."
      },
      {
        "question": "The flag of the United Nations shows a world map surrounded by what?",
        "answer": "Olive branches",
        "explanation": "The map is an azimuthal equidistant projection centred on the North Pole, so that no country sits in the middle. The olive branches are a traditional symbol of peace, and the flag's light blue background is now closely associated with the UN."
      },
      {
        "question": "Reading from the hoist, or flagpole side, what are the three colours of the French tricolour?",
        "answer": "Blue, white and red",
        "explanation": "The vertical stripes were adopted during the French Revolution, combining the traditional blue and red of Paris with the white associated with the monarchy. The same three colours appear on many later flags, but the French order is blue at the hoist."
      },
      {
        "question": "Besides Australia and New Zealand, the Southern Cross appears on the national flags of Papua New Guinea and which other country?",
        "answer": "Samoa",
        "explanation": "Samoa's flag is red, with a blue rectangle in the upper corner that holds the five stars of the Southern Cross. The constellation is a familiar sight in southern skies and has been used as a national symbol across the Pacific."
      },
      {
        "question": "Which mythical creature appears on the official flag of Wales?",
        "answer": "A red dragon",
        "explanation": "The red dragon, or Y Ddraig Goch, is set against a field of white and green. The dragon has been associated with Wales since the Middle Ages, and the current flag was officially recognised in 1959."
      },
      {
        "question": "How many spokes are there on the navy-blue wheel at the centre of the Indian national flag?",
        "answer": "24",
        "explanation": "The wheel sits in the middle of the white band, between bands of saffron and green. It is known as the Ashoka Chakra, after a design on the Lion Capital of Ashoka, a 3rd-century BCE sculpture, and it represents movement, law and the passage of time."
      },
      {
        "question": "Which tree appears in the centre of the national flag of Lebanon?",
        "answer": "A cedar",
        "explanation": "The cedar of Lebanon, Cedrus libani, stands green against a white band, with red stripes above and below. The tree has been a symbol of the country for thousands of years and still grows on the slopes of Mount Lebanon."
      },
      {
        "question": "Which Nordic country's flag is a yellow cross on a blue field?",
        "answer": "Sweden",
        "explanation": "The design is a Nordic cross, in which the vertical arm of the cross is shifted toward the hoist. A blue flag with a gold cross has been associated with Sweden since the 16th century, and the current proportions were set in law in the early 1900s."
      }
    ]
  },
  {
    "id": "australia-oceania",
    "title": "Australia and Oceania",
    "emoji": "🦘",
    "intro": "This round stays close to home and then hops across the Tasman and into the wider Pacific. A few answers may feel easy if you live in the region; the explanations still have a detail or two worth knowing.",
    "questions": [
      {
        "question": "Which city on the Coral Sea became the capital of Papua New Guinea at independence in 1975?",
        "answer": "Port Moresby",
        "explanation": "Port Moresby lies on the south-eastern coast of the island of New Guinea. It is the country's largest city as well as its main port, and it had already been the administrative centre in the colonial period before independence."
      },
      {
        "question": "Which Australian city is the capital of Western Australia?",
        "answer": "Perth",
        "explanation": "Perth stands on the Swan River, near the Indian Ocean coast. It is one of the most isolated cities of its size in the world: the nearest Australian city with a population over 100,000 is Adelaide, more than 2,000 kilometres away."
      },
      {
        "question": "Which island, the third-largest in the world, is divided between Indonesia, Malaysia and Brunei?",
        "answer": "Borneo",
        "explanation": "The Indonesian part of the island is called Kalimantan, while the Malaysian states of Sabah and Sarawak occupy much of the north, along with the small sultanate of Brunei. Only Greenland and New Guinea are larger islands."
      },
      {
        "question": "Which is the smallest of Australia's six states by area?",
        "answer": "Tasmania",
        "explanation": "Tasmania is the only Australian state that is an island, and it is far smaller than the mainland states. The Australian Capital Territory and the Northern Territory are smaller still, but they are territories, not states."
      },
      {
        "question": "The Torres Strait separates the Australian mainland from which large island to the north?",
        "answer": "New Guinea",
        "explanation": "The strait is about 150 kilometres across at its narrowest, and it is dotted with the islands of the Torres Strait, which belong to Queensland. New Guinea itself is divided between Papua New Guinea in the east and Indonesia in the west."
      },
      {
        "question": "Which city on the island of Viti Levu is the capital of Fiji?",
        "answer": "Suva",
        "explanation": "Suva sits on the south-eastern coast of Viti Levu, Fiji's largest island. It became the capital in 1877, when the colonial administration moved from the older town of Levuka on the island of Ovalau, and it is still the country's largest urban centre."
      },
      {
        "question": "Adelaide is the capital of which Australian state?",
        "answer": "South Australia",
        "explanation": "Adelaide was founded in 1836 as a planned, convict-free settlement, laid out by the surveyor William Light. It sits between the Adelaide Hills and the Gulf St Vincent, and it is often called the City of Churches."
      },
      {
        "question": "Aoraki / Mount Cook, New Zealand's highest peak, stands on which of the country's two main islands?",
        "answer": "The South Island",
        "explanation": "The South Island, or Te Waipounamu, is the larger of the two main islands by area, though fewer people live there than on the North Island. The Southern Alps run down its western side, and Aoraki / Mount Cook is their highest point."
      },
      {
        "question": "Which city on the Timor Sea is the capital of Australia's Northern Territory?",
        "answer": "Darwin",
        "explanation": "Darwin is Australia's northernmost capital. It was badly damaged by Japanese air raids in 1942 and later almost destroyed by Cyclone Tracy on Christmas Day 1974, and the modern city was rebuilt after both disasters."
      },
      {
        "question": "What is the name of the sea that lies between Australia and New Zealand?",
        "answer": "The Tasman Sea",
        "explanation": "The Tasman Sea is a wide stretch of the South Pacific, often rough and windy, and a direct flight from Sydney to Auckland crosses it in about three hours. It takes its name from the Dutch explorer Abel Tasman, who sailed these waters in the 1640s."
      }
    ]
  },
  {
    "id": "oceans-islands",
    "title": "Oceans and Islands",
    "emoji": "🏝️",
    "intro": "Most of the planet is ocean, and some of the best geography questions are about the seas, straits and islands that break it up. This round ranges from polar water to a sea that has almost disappeared.",
    "questions": [
      {
        "question": "Which is the smallest of the world's five oceans by surface area?",
        "answer": "The Arctic Ocean",
        "explanation": "The Arctic Ocean sits around the North Pole and is partly covered by sea ice all year, though that ice has been shrinking. It is connected to the Atlantic by openings such as the Fram Strait and the Greenland Sea, and it is far smaller than the other four oceans."
      },
      {
        "question": "What is the name of the narrowest stretch of the English Channel, between England and France?",
        "answer": "The Strait of Dover",
        "explanation": "At its narrowest, the strait is about 33 kilometres across, from South Foreland near Dover to Cap Gris-Nez in France. On a clear day you can see the opposite coast, and it is one of the busiest shipping lanes in the world."
      },
      {
        "question": "Honshu, Hokkaido, Kyushu and Shikoku are the four main islands of Japan. Which of them is the largest and most populous?",
        "answer": "Honshu",
        "explanation": "Honshu is home to Tokyo, Osaka and Kyoto, and it holds the great majority of Japan's population. Hokkaido lies to the north, Kyushu and Shikoku to the south-west, and thousands of smaller islands complete the archipelago."
      },
      {
        "question": "Which sea lies between the Italian Peninsula and the Balkan Peninsula?",
        "answer": "The Adriatic Sea",
        "explanation": "The Adriatic is an arm of the Mediterranean, running from the Gulf of Venice down to the Strait of Otranto, where it meets the Ionian Sea. Italy lies to the west, and countries including Slovenia, Croatia, Montenegro and Albania lie to the east."
      },
      {
        "question": "Tenerife, Gran Canaria and Lanzarote are among the main islands of which Atlantic archipelago?",
        "answer": "The Canary Islands",
        "explanation": "The Canary Islands are a Spanish autonomous community, about 100 kilometres off the coast of north-west Africa. They are volcanic in origin, and Teide, on Tenerife, is the highest peak in Spain and the highest in the Atlantic islands."
      },
      {
        "question": "Which island country lies off the south-eastern coast of India, across the Palk Strait?",
        "answer": "Sri Lanka",
        "explanation": "Sri Lanka was officially known as Ceylon until 1972. A chain of shallows and sandbanks called Adam's Bridge, or Rama's Bridge, almost links it to India, and the island has been a stop on Indian Ocean trade routes for many centuries."
      },
      {
        "question": "What is the largest of the Greek islands?",
        "answer": "Crete",
        "explanation": "Crete is the fifth-largest island in the Mediterranean, after Sicily, Sardinia, Cyprus and Corsica. It lies south of the Aegean Sea and was the centre of the Minoan civilisation in the Bronze Age, with a long, mountainous spine running from west to east."
      },
      {
        "question": "What name is given to the ocean that surrounds Antarctica?",
        "answer": "The Southern Ocean",
        "explanation": "The Southern Ocean, sometimes called the Antarctic Ocean, is the only ocean that wraps all the way around the globe. Its northern boundary is often drawn along the Antarctic Circumpolar Current, a great west-to-east flow of water."
      },
      {
        "question": "Which Central Asian inland sea, once one of the world's largest lakes, has shrunk dramatically since the 1960s because of irrigation schemes?",
        "answer": "The Aral Sea",
        "explanation": "The Aral Sea lies on the border of Kazakhstan and Uzbekistan. Rivers that once fed it, the Amu Darya and the Syr Darya, were diverted to water cotton fields, and most of the lake bed is now dry, dusty land, leaving a few much smaller remnants."
      },
      {
        "question": "What is the largest island in the Caribbean Sea?",
        "answer": "Cuba",
        "explanation": "Cuba is long and narrow, stretching more than 1,000 kilometres from west to east, and it is considerably larger than Hispaniola, the next biggest Caribbean island. Its capital, Havana, stands on the north-west coast."
      }
    ]
  },
  {
    "id": "borders-countries",
    "title": "Borders and Countries",
    "emoji": "🗺️",
    "intro": "Some countries almost wrap around others, some have changed their official names, and a few hold surprising records. The questions below use widely accepted modern borders and names, with older names explained where they help.",
    "questions": [
      {
        "question": "Which country has coastlines on both the Caspian Sea and the Persian Gulf?",
        "answer": "Iran",
        "explanation": "Iran is the only country with shores on both bodies of water. The Caspian coastline runs along its north, while the Persian Gulf and the Gulf of Oman wash the south, giving the country a long and strategically important southern seaboard."
      },
      {
        "question": "Which country overtook China to become the world's most populous, according to United Nations estimates published in 2023?",
        "answer": "India",
        "explanation": "UN figures put India's population ahead of China's during 2023, at a little over 1.4 billion, and the gap has continued to widen. China had held the top place for centuries, so the change was a genuine milestone in world demography."
      },
      {
        "question": "Which East African country was formerly known in Europe as Abyssinia?",
        "answer": "Ethiopia",
        "explanation": "Abyssinia was the name long used by European writers and map-makers. Ethiopia is one of the oldest independent states in Africa, and, aside from a brief Italian occupation in the 1930s, it was never colonised in the way most of the continent was."
      },
      {
        "question": "Which tiny principality lies entirely between Switzerland and Austria?",
        "answer": "Liechtenstein",
        "explanation": "Liechtenstein is one of the world's smallest countries, covering only 160 square kilometres, and it is one of only two that are double-landlocked, meaning every country it touches is also landlocked. The other is Uzbekistan."
      },
      {
        "question": "The Gambia is a narrow country along a river of the same name. Which larger West African country almost entirely encloses it?",
        "answer": "Senegal",
        "explanation": "The Gambia follows the river inland from the Atlantic for about 300 kilometres, and is only 20 or 30 kilometres wide in most places. A short coastline is its only border that does not meet Senegal, which surrounds it on the other three sides."
      },
      {
        "question": "Which is the largest country in Africa by total area?",
        "answer": "Algeria",
        "explanation": "Algeria covers about 2.38 million square kilometres, ahead of the Democratic Republic of the Congo and of Sudan. It became the largest African country by area after South Sudan became independent in 2011, which reduced the size of Sudan."
      },
      {
        "question": "Myanmar is also widely known by what former official name?",
        "answer": "Burma",
        "explanation": "The military government changed the official English name from Burma to Myanmar in 1989. Many people, and some governments, still use Burma, and both names have older roots in the Burmese language. The United Nations uses Myanmar."
      },
      {
        "question": "Which is the smallest independent country in South America by area?",
        "answer": "Suriname",
        "explanation": "Suriname, on the north-east coast, covers about 164,000 square kilometres, a little less than Uruguay. French Guiana is smaller still, but it is an overseas department of France, not an independent country."
      },
      {
        "question": "Which is the only Central American country with no coastline on the Caribbean Sea?",
        "answer": "El Salvador",
        "explanation": "El Salvador faces only the Pacific Ocean. The other six Central American countries all have Caribbean shores, or, in the case of Belize, a Caribbean coast and no Pacific one. El Salvador is also the smallest country on the mainland of the Americas."
      },
      {
        "question": "After the Second World War, North and South Korea were originally divided along which line of latitude?",
        "answer": "The 38th parallel",
        "explanation": "In 1945 the 38th parallel north was chosen as the dividing line between a Soviet-occupied north and an American-occupied south. After the Korean War the ceasefire line, and today's Demilitarised Zone, followed the battle front instead, so it only roughly tracks that parallel."
      }
    ]
  },
  {
    "id": "records",
    "title": "World Records and Extremes",
    "emoji": "🏆",
    "intro": "Geography is full of highs, lows, firsts and largests, but some famous records are still argued over. This round sticks to extremes that are well settled, including a couple of answers that surprise people who only remember Everest.",
    "questions": [
      {
        "question": "The lowest point on Earth's dry land is the shore of which salt lake?",
        "answer": "The Dead Sea",
        "explanation": "The Dead Sea shoreline currently sits more than 430 metres below sea level, and the water level is still falling. The lake lies in the Jordan Rift Valley, and its waters are so salty that most people can float in them with ease."
      },
      {
        "question": "The Challenger Deep, the deepest known point in the ocean, lies in which trench?",
        "answer": "The Mariana Trench",
        "explanation": "The Mariana Trench, in the western Pacific, plunges to about 10,900 metres at the Challenger Deep, south-west of Guam. Only a handful of people have been down there, and the pressure is more than a thousand times that at sea level."
      },
      {
        "question": "Angel Falls, the world's highest uninterrupted waterfall, is in which country?",
        "answer": "Venezuela",
        "explanation": "Angel Falls drops 979 metres from the Auyán-Tepui, a flat-topped mountain in Canaima National Park. The Indigenous Pemón name is Kerepakupai Merú. The English name comes from the American aviator Jimmie Angel, who flew over the falls in the 1930s."
      },
      {
        "question": "Which is the world's largest landlocked country by area?",
        "answer": "Kazakhstan",
        "explanation": "Kazakhstan covers about 2.72 million square kilometres, larger than any other country that has no coastline on the open ocean. It does have a shore on the Caspian Sea, but that is an enclosed inland body of water, so the country is still classed as landlocked."
      },
      {
        "question": "Which tiny principality on the Mediterranean coast is the most densely populated of the world's sovereign countries?",
        "answer": "Monaco",
        "explanation": "Monaco covers barely two square kilometres, squeezed between the French Riviera and the sea, yet more than 30,000 people live there. That gives it a higher population density than any other independent country, including much larger city-states."
      },
      {
        "question": "Because of Earth's equatorial bulge, the point on the surface farthest from the planet's centre is the summit of which Ecuadorian volcano?",
        "answer": "Chimborazo",
        "explanation": "Chimborazo is 6,263 metres above sea level, much lower than Everest, but it stands very close to the Equator, where Earth bulges outwards. Measured from the centre of the planet, its summit is about two kilometres farther out than Everest's."
      },
      {
        "question": "The lowest air temperature ever recorded at ground level, −89.2 °C in 1983, was measured at which research station in Antarctica?",
        "answer": "Vostok Station",
        "explanation": "Vostok is a Russian research station on the East Antarctic ice sheet, at an elevation of more than 3,400 metres. The reading of −89.2 °C, taken on 21 July 1983, remains the official World Meteorological Organization record for surface air temperature."
      },
      {
        "question": "La Paz, often called the world's highest national seat of government, is in which country?",
        "answer": "Bolivia",
        "explanation": "La Paz sits at about 3,650 metres above sea level in a canyon of the Andes. Sucre is Bolivia's constitutional capital, but the executive and legislative branches sit in La Paz, which is why it is usually named as the highest seat of government."
      },
      {
        "question": "Which Pacific country has islands in all four hemispheres — north and south of the Equator, and east and west of the 180th meridian?",
        "answer": "Kiribati",
        "explanation": "Kiribati is a scattered country of atolls and reef islands in the central Pacific. Its Gilbert, Phoenix and Line Islands straddle both the Equator and the 180th meridian, which makes it the only country with territory in all four hemispheres."
      },
      {
        "question": "If you measure from the ocean floor rather than from sea level, which Hawaiian mountain is taller than Everest?",
        "answer": "Mauna Kea",
        "explanation": "Mauna Kea rises about 4,200 metres above sea level, but it continues for kilometres down to the floor of the Pacific. From that base to the summit it is more than 10,000 metres high, which is taller than Everest measured from sea level. Mauna Loa, nearby, is more massive but a little less tall."
      }
    ]
  }
]

export const GEOGRAPHY80_TOTAL = GEOGRAPHY80_SECTIONS.reduce(
  (sum, section) => sum + section.questions.length,
  0
)

