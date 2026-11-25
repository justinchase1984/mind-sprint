// lib/content/history80.ts
// Original editorial content for /history-trivia-questions-and-answers.
// These questions are written specifically for this article and are NOT part of
// the daily quiz bank in lib/rotation.ts. Checked against the live bank and the
// General Knowledge Q&A page with the internal duplicate checker before publishing.

export type HistoryQuestion = {
  question: string
  answer: string
  explanation: string
}

export type HistorySection = {
  id: string
  title: string
  emoji: string
  intro: string
  questions: HistoryQuestion[]
}

export const HISTORY80_SECTIONS: HistorySection[] = [
  {
    "id": "ancient",
    "title": "The Ancient World",
    "emoji": "🏺",
    "intro": "From river-valley kingdoms to early cities in the Americas, these questions go beyond the usual pyramid-and-pharaoh clichés. Each answer comes with a little of the story around it.",
    "questions": [
      {
        "question": "Which Egyptian pharaoh's almost intact tomb was discovered by Howard Carter in 1922?",
        "answer": "Tutankhamun",
        "explanation": "Carter, funded by Lord Carnarvon, found the tomb in the Valley of the Kings on 4 November 1922. Its treasures, including the gold death mask, made Tutankhamun the best-known pharaoh of modern times, even though he died around the age of 18."
      },
      {
        "question": "Which queen was the last active ruler of Egypt's Ptolemaic dynasty?",
        "answer": "Cleopatra VII",
        "explanation": "Cleopatra VII ruled from 51 BCE and allied herself first with Julius Caesar and later with Mark Antony. After their defeat she died in 30 BCE, and Egypt became a province of Rome."
      },
      {
        "question": "The Terracotta Army was buried near the tomb of which Chinese emperor?",
        "answer": "Qin Shi Huang",
        "explanation": "Qin Shi Huang unified China in 221 BCE and became its first emperor. Thousands of life-sized clay soldiers were buried near his tomb at Xi'an to protect him in the afterlife, and the pits were rediscovered by farmers in 1974."
      },
      {
        "question": "Which ancient city was the capital of the Minoan civilisation on the island of Crete?",
        "answer": "Knossos",
        "explanation": "Knossos is home to a vast palace complex excavated by Arthur Evans in the early 1900s. The Minoans flourished in the Bronze Age and are often linked with the later Greek legend of the Labyrinth and the Minotaur."
      },
      {
        "question": "Which Persian king led the invasion of Greece that was turned back at the Battle of Salamis in 480 BCE?",
        "answer": "Xerxes I",
        "explanation": "Xerxes I launched a huge invasion after his father, Darius I, had been defeated at Marathon. The Greek fleet, under Themistocles, trapped and routed the Persian ships in the narrow waters off Salamis."
      },
      {
        "question": "Which Indian emperor of the Mauryan dynasty converted to Buddhism and had his edicts carved on pillars across the subcontinent?",
        "answer": "Ashoka",
        "explanation": "Ashoka ruled in the 3rd century BCE. After the bloody conquest of Kalinga he turned toward Buddhist teaching, and his inscribed pillars and rocks are among the oldest original documents of Indian history."
      },
      {
        "question": "On the banks of which river did the ancient city of Babylon stand?",
        "answer": "The Euphrates",
        "explanation": "Babylon lay on the Euphrates, south of present-day Baghdad in Iraq. It was a major capital under kings such as Nebuchadnezzar II, whose reign in the 6th century BCE saw the city's great walls and processional way built."
      },
      {
        "question": "Which Phoenician city in North Africa, near modern Tunis, became Rome's greatest rival?",
        "answer": "Carthage",
        "explanation": "Carthage grew from a Phoenician colony into a major Mediterranean power. Rome finally destroyed the city in 146 BCE, at the end of the Third Punic War, after more than a century of on-and-off conflict."
      },
      {
        "question": "Stonehenge stands on which English plain?",
        "answer": "Salisbury Plain",
        "explanation": "The famous stone circle in Wiltshire was built in stages between about 3000 and 2000 BCE. Some of the smaller bluestones were transported from the Preseli Hills in Wales, more than 200 kilometres away."
      },
      {
        "question": "Which Mesoamerican civilisation built the temple-pyramid of El Castillo at Chichén Itzá?",
        "answer": "The Maya",
        "explanation": "El Castillo, or the Temple of Kukulcán, was built by the Maya on the Yucatán Peninsula, in present-day Mexico. At the spring and autumn equinoxes, the setting sun casts a shadow that looks like a serpent sliding down the staircase."
      }
    ]
  },
  {
    "id": "classical",
    "title": "Greece, Rome and the Classical World",
    "emoji": "🏛️",
    "intro": "Classical Greece and Rome still supply some of the best quiz-night questions, as long as you go a little deeper than the obvious landmarks. This round mixes people, places and everyday institutions.",
    "questions": [
      {
        "question": "In which city did the philosopher Socrates live and teach, before being sentenced to death in 399 BCE?",
        "answer": "Athens",
        "explanation": "Socrates left no writings of his own; we know him mainly through his student Plato. He was tried by an Athenian jury on charges of impiety and corrupting the young, and he died after drinking a cup of hemlock."
      },
      {
        "question": "What name is given to the series of three wars fought between Rome and Carthage?",
        "answer": "The Punic Wars",
        "explanation": "They ran, with long gaps, from 264 to 146 BCE. \"Punic\" comes from the Latin word for the Carthaginians, who were of Phoenician origin. The Second Punic War included Hannibal's famous march into Italy."
      },
      {
        "question": "Which Carthaginian general led an army, and a number of war elephants, across the Alps into Italy?",
        "answer": "Hannibal",
        "explanation": "Hannibal set out from Spain in 218 BCE, at the start of the Second Punic War. He won major victories at Lake Trasimene and Cannae, but he never succeeded in capturing Rome itself."
      },
      {
        "question": "The Parthenon was built as a temple to which Greek goddess?",
        "answer": "Athena",
        "explanation": "The Parthenon still crowns the Acropolis in Athens. It was completed in the 5th century BCE, during the leadership of Pericles, and its sculptures are among the most famous works of ancient Greek art."
      },
      {
        "question": "Which Roman road, known in Latin as the Via Appia, was begun in 312 BCE?",
        "answer": "The Appian Way",
        "explanation": "It was one of the earliest major Roman roads, begun by the censor Appius Claudius Caecus. It was later extended to the port of Brundisium, and stretches of the original paving can still be walked just outside Rome."
      },
      {
        "question": "Who wrote the epic poems the Iliad and the Odyssey, according to ancient Greek tradition?",
        "answer": "Homer",
        "explanation": "Almost nothing certain is known about Homer's life, and some scholars have even doubted that one person wrote both poems. Together they became the foundation of ancient Greek education and still shape how the Trojan War is told."
      },
      {
        "question": "Which Roman slave led a major uprising against the Republic in the Third Servile War, beginning in 73 BCE?",
        "answer": "Spartacus",
        "explanation": "Spartacus was a gladiator who escaped from a school in Capua with around 70 others. The revolt grew to tens of thousands before it was crushed by Crassus in 71 BCE, and Spartacus was killed in the final battle."
      },
      {
        "question": "The ancient library most closely associated with a drive to collect all the world's knowledge stood in which Egyptian city?",
        "answer": "Alexandria",
        "explanation": "Founded in the 3rd century BCE under the Ptolemies, the Library of Alexandria attracted scholars from across the Mediterranean. Its collections were lost over several centuries; no single fire is now thought to have destroyed it all."
      },
      {
        "question": "Which Roman writer and statesman is best known for his speeches against Catiline and for his later letters?",
        "answer": "Cicero",
        "explanation": "Marcus Tullius Cicero was a leading lawyer and consul of the late Roman Republic. His surviving speeches and letters are a key source for Roman politics, and his prose became a model for later Latin writing."
      },
      {
        "question": "In ancient Sparta, what were the helots?",
        "answer": "A class of unfree labourers bound to the land",
        "explanation": "Helots were forced to work the land for Spartan citizens and greatly outnumbered them. Fear of a helot revolt helped shape Sparta's highly militarised society."
      }
    ]
  },
  {
    "id": "medieval",
    "title": "The Medieval World",
    "emoji": "🏰",
    "intro": "A thousand years of history is far more than knights and castles. This round ranges from Viking raids and Crusades to African stone cities and the first printed books in Europe.",
    "questions": [
      {
        "question": "In which year was Charlemagne crowned emperor in Rome?",
        "answer": "800",
        "explanation": "Pope Leo III crowned Charlemagne on Christmas Day in St Peter's. The ceremony linked the Frankish king with the memory of the Roman Empire in the West and later became a founding moment of what was called the Holy Roman Empire."
      },
      {
        "question": "The Viking raid on which Northumbrian monastery in 793 is often used to mark the start of the Viking Age in Britain?",
        "answer": "Lindisfarne",
        "explanation": "Lindisfarne, or Holy Island, off the coast of Northumberland, was a major Christian centre. The attack shocked contemporaries, and similar raids soon followed around the coasts of Britain and Ireland."
      },
      {
        "question": "Which English archbishop was murdered in Canterbury Cathedral in 1170?",
        "answer": "Thomas Becket",
        "explanation": "Becket had been a close friend of King Henry II before the two fell out over the rights of the Church. Four knights killed him in his own cathedral, and he was made a saint three years later."
      },
      {
        "question": "Who called for the First Crusade at the Council of Clermont in 1095?",
        "answer": "Pope Urban II",
        "explanation": "Urban's appeal led tens of thousands of fighters and pilgrims to set out for the eastern Mediterranean. In 1099 the First Crusade captured Jerusalem and established a group of Crusader states."
      },
      {
        "question": "Which Muslim sultan recaptured Jerusalem from the Crusaders in 1187?",
        "answer": "Saladin",
        "explanation": "Saladin, or Salah ad-Din, was sultan of Egypt and Syria and the leading Muslim opponent of the Crusader states. After his victory at the Battle of Hattin he took Jerusalem, an event that triggered the Third Crusade."
      },
      {
        "question": "Students of Roman law helped establish a university in the late 11th century in which Italian city?",
        "answer": "Bologna",
        "explanation": "The University of Bologna grew from those law schools and became a model for later medieval universities in Europe. Oxford and Paris emerged in the same era, and Bologna has remained a centre of learning ever since."
      },
      {
        "question": "Great Zimbabwe was the capital of a Shona-speaking kingdom in which modern-day country?",
        "answer": "Zimbabwe",
        "explanation": "The stone city, with its famous dry-stone walls and conical tower, flourished between about the 11th and 15th centuries. European colonists once refused to believe it was built by Africans, a claim that has long since been disproved."
      },
      {
        "question": "Which Scottish king defeated an English army at the Battle of Bannockburn in 1314?",
        "answer": "Robert the Bruce",
        "explanation": "The victory, fought near Stirling, was the most important Scottish success of the First War of Independence. It secured Robert's hold on the throne and made English claims over Scotland much harder to enforce."
      },
      {
        "question": "The Alhambra palace complex was built by Muslim rulers in which Spanish city?",
        "answer": "Granada",
        "explanation": "The Nasrid dynasty built the Alhambra as a palace and fortress above Granada in the 13th and 14th centuries. It is one of the best-preserved examples of Islamic architecture in Europe, known for its courtyards, tiles and carved stucco."
      },
      {
        "question": "Which 14th-century Moroccan traveller wrote a detailed account of journeys that stretched from West Africa to China?",
        "answer": "Ibn Battuta",
        "explanation": "Ibn Battuta left Tangier in 1325 to perform the hajj and did not return home for decades. His Rihla, dictated late in life, is one of the great travel narratives of the medieval world and a key source for life across the 14th-century Islamic world."
      }
    ]
  },
  {
    "id": "exploration",
    "title": "Exploration and Empires",
    "emoji": "🧭",
    "intro": "The centuries of long-distance voyaging changed maps, trade and the fate of whole societies. These questions look at the people and agreements behind those journeys, not only the best-known names.",
    "questions": [
      {
        "question": "Which Portuguese explorer rounded the Cape of Good Hope in 1488, opening a sea route toward the Indian Ocean?",
        "answer": "Bartolomeu Dias",
        "explanation": "Dias called it the Cape of Storms; the Portuguese king later preferred the name Cape of Good Hope. The voyage proved that Africa could be rounded by sea, paving the way for later expeditions into the Indian Ocean."
      },
      {
        "question": "Whose expedition completed the first circumnavigation of the Earth in 1522, after he himself was killed in the Philippines?",
        "answer": "Ferdinand Magellan",
        "explanation": "Magellan, a Portuguese navigator sailing for Spain, set out in 1519 with five ships. He died at Mactan in 1521, and Juan Sebastián Elcano led the one remaining ship, the Victoria, back to Spain the following year."
      },
      {
        "question": "Which Chinese admiral led seven major treasure voyages across the Indian Ocean in the early 15th century?",
        "answer": "Zheng He",
        "explanation": "Zheng He served the Ming Yongle Emperor and commanded huge fleets that reached Southeast Asia, India, the Persian Gulf and the east coast of Africa. The voyages ended after the 1430s, as Ming policy turned inward."
      },
      {
        "question": "In 1513, which Spanish explorer became the first European to sight the Pacific Ocean from the Americas?",
        "answer": "Vasco Núñez de Balboa",
        "explanation": "Balboa crossed the Isthmus of Panama after an overland trek and sighted the ocean, which he called the South Sea. Six years later Magellan entered the same ocean and gave it the name Pacific."
      },
      {
        "question": "After whom were the continents of the Americas named?",
        "answer": "Amerigo Vespucci",
        "explanation": "Vespucci was a Florentine navigator who sailed along the coast of South America and argued that it was a previously unknown continent, not part of Asia. The mapmaker Martin Waldseemüller used a Latin version of his first name, America, on a world map in 1507."
      },
      {
        "question": "The Treaty of Tordesillas, signed in 1494, divided newly claimed lands outside Europe between which two kingdoms?",
        "answer": "Spain and Portugal",
        "explanation": "The treaty drew a north–south line through the Atlantic. Portugal kept rights to the east, which later included Brazil, and Spain to the west, which covered most of the rest of the Americas."
      },
      {
        "question": "Which English sea captain commanded the Golden Hind and completed a circumnavigation in 1580?",
        "answer": "Francis Drake",
        "explanation": "Drake set out in 1577, raided Spanish ships and ports in the Americas, and returned to a knighthood from Elizabeth I. He later helped command English forces against the Spanish Armada in 1588."
      },
      {
        "question": "What was the name of the first permanent English settlement in North America, founded in 1607?",
        "answer": "Jamestown",
        "explanation": "Jamestown was established in Virginia by the Virginia Company and named after King James I. The early years were marked by disease, hunger and conflict with the Powhatan people, but the colony survived and introduced commercial tobacco growing."
      },
      {
        "question": "Which Dutch explorer, in 1642, became the first European to reach Van Diemen's Land, later renamed Tasmania?",
        "answer": "Abel Tasman",
        "explanation": "Tasman was sent by the Dutch East India Company to explore the southern oceans. On the same voyage he also reached the South Island of New Zealand. Tasmania was officially renamed in his honour in 1856."
      },
      {
        "question": "Which French explorer founded the city of Quebec in 1608?",
        "answer": "Samuel de Champlain",
        "explanation": "Champlain is often called the \"Father of New France\". Quebec became the centre of French settlement on the St Lawrence River, and Champlain spent decades mapping the region and building alliances with First Nations."
      }
    ]
  },
  {
    "id": "australia",
    "title": "Australian History",
    "emoji": "🇦🇺",
    "intro": "A good Australian history round should cover more than Federation and bushrangers. These questions run from the First Fleet to the National Apology, including Indigenous rights, wartime campaigns and political turning points.",
    "questions": [
      {
        "question": "In which year did the First Fleet arrive in New South Wales to establish a British colony?",
        "answer": "1788",
        "explanation": "Eleven ships, led by Captain Arthur Phillip, arrived at Botany Bay in January 1788 and soon moved to Sydney Cove. The date of the landing, 26 January, later became Australia Day, which is also a day of mourning for many Aboriginal and Torres Strait Islander people."
      },
      {
        "question": "Who commanded the First Fleet and became the first governor of New South Wales?",
        "answer": "Arthur Phillip",
        "explanation": "Phillip was a Royal Navy officer given the task of founding a convict colony on the other side of the world. He governed until 1792 and tried, not always successfully, to manage scarce food supplies and relations with the Eora people."
      },
      {
        "question": "Which three explorers are credited with the first European crossing of the Blue Mountains in 1813?",
        "answer": "Blaxland, Wentworth and Lawson",
        "explanation": "Gregory Blaxland, William Wentworth and William Lawson found a way across the range west of Sydney, opening the inland grazing country beyond. A road was built along their route within two years."
      },
      {
        "question": "The Eureka Stockade, a rebellion of gold miners, took place in 1854 near which Victorian town?",
        "answer": "Ballarat",
        "explanation": "Miners led by Peter Lalor protested against mining licences and a lack of political rights. The short-lived stockade was stormed by government troops on 3 December 1854, and the episode later became a symbol of democratic protest in Australia."
      },
      {
        "question": "On which Turkish peninsula did Australian and New Zealand troops land on 25 April 1915?",
        "answer": "Gallipoli",
        "explanation": "The landing was part of an Allied campaign to open the Dardanelles during the First World War. The date is commemorated each year as Anzac Day, Australia and New Zealand's main day of wartime remembrance."
      },
      {
        "question": "Which wartime path in Papua New Guinea was the scene of a vital Australian campaign against Japanese forces in 1942?",
        "answer": "The Kokoda Track",
        "explanation": "Australian militia and later AIF units fought a gruelling retreat and counter-attack along the narrow mountain path between Port Moresby and Kokoda. The campaign helped keep Port Moresby out of Japanese hands. It is also sometimes called the Kokoda Trail."
      },
      {
        "question": "In which year did Australians vote in a referendum to count Aboriginal and Torres Strait Islander people in the census and allow the federal government to make laws for them?",
        "answer": "1967",
        "explanation": "The yes vote was just over 90 per cent, the most lopsided result in Australian federal history. The change did not, by itself, grant the vote or land rights, but it became a landmark in the long campaign for Indigenous rights."
      },
      {
        "question": "Which High Court case, decided in 1992, recognised native title and rejected the idea that Australia was terra nullius at the time of British colonisation?",
        "answer": "The Mabo decision",
        "explanation": "The case was brought by Eddie Koiki Mabo and other Meriam people from Murray Island in the Torres Strait. The ruling led to the Native Title Act of 1993 and reshaped Australian land law."
      },
      {
        "question": "Which Australian Prime Minister was dismissed by the Governor-General, Sir John Kerr, in 1975?",
        "answer": "Gough Whitlam",
        "explanation": "Kerr appointed the Liberal leader, Malcolm Fraser, as caretaker Prime Minister after a deadlock over supply in the Senate. The dismissal remains one of the most controversial events in Australian political history."
      },
      {
        "question": "Who delivered the National Apology to the Stolen Generations in Federal Parliament on 13 February 2008?",
        "answer": "Kevin Rudd",
        "explanation": "Rudd's speech formally apologised to Aboriginal and Torres Strait Islander people who were removed from their families under past government policies. It was passed with bipartisan support and broadcast around the country."
      }
    ]
  },
  {
    "id": "revolutions",
    "title": "Revolutions and Reform",
    "emoji": "⚖️",
    "intro": "Nations are often remade in bursts: a revolution, a unification, a law that finally passes. This round covers independence struggles, political manifestos and campaigns that changed the rules.",
    "questions": [
      {
        "question": "The first shots of the American Revolutionary War were fired at Lexington and Concord in which year?",
        "answer": "1775",
        "explanation": "British troops marched out of Boston on 19 April 1775 to seize colonial weapons, and fighting broke out along the road. The wider war lasted until 1783, when Britain recognised the independence of the United States."
      },
      {
        "question": "Which Haitian revolutionary leader helped turn a slave uprising into a struggle that led to the first independent Black republic in the modern world?",
        "answer": "Toussaint Louverture",
        "explanation": "The revolt began in 1791 in the French colony of Saint-Domingue. Toussaint emerged as its leading general and governor, and although he died in a French prison in 1803, Haiti declared independence the following year."
      },
      {
        "question": "Which South American general, known as \"the Liberator\", played a leading role in the independence of several Spanish colonies, including Venezuela, Colombia and Peru?",
        "answer": "Simón Bolívar",
        "explanation": "Bolívar campaigned across northern South America in the 1810s and 1820s. He hoped to unite much of the region in a single federation, but the new states soon went their own ways."
      },
      {
        "question": "Who was the Prussian statesman who engineered the unification of Germany in 1871?",
        "answer": "Otto von Bismarck",
        "explanation": "Bismarck used a series of short wars, against Denmark, Austria and France, to bring the German states together under the King of Prussia. In January 1871, Wilhelm I was proclaimed German emperor at Versailles."
      },
      {
        "question": "Which Italian volunteer force, led by Giuseppe Garibaldi in 1860, helped bring Sicily and southern Italy into a unified Italian kingdom?",
        "answer": "The Thousand",
        "explanation": "Garibaldi landed at Marsala in Sicily with just over a thousand followers, often called the Redshirts. Their campaign collapsed Bourbon rule in the south and paved the way for Victor Emmanuel II to become king of a united Italy."
      },
      {
        "question": "In which year did the two Russian revolutions take place that ended the rule of the tsars and brought the Bolsheviks to power?",
        "answer": "1917",
        "explanation": "The February Revolution forced Tsar Nicholas II to abdicate. After a period of provisional government, Lenin's Bolsheviks seized power in October (November on the western calendar), leading to a civil war and the creation of the Soviet Union."
      },
      {
        "question": "The Meiji Restoration of 1868 returned governing power in Japan to which emperor and began a rapid programme of modernisation?",
        "answer": "Emperor Meiji",
        "explanation": "The last shogunate was overthrown, and Japan set about adopting Western industry, education and military methods while remaining politically independent. Within a few decades it had become a major power in East Asia."
      },
      {
        "question": "In Britain, the 1833 Slavery Abolition Act was the culmination of a long campaign closely associated with which Member of Parliament?",
        "answer": "William Wilberforce",
        "explanation": "Wilberforce had already helped pass the 1807 act that abolished the British slave trade. The 1833 act provided for the emancipation of enslaved people in most of the British Empire, after a short period of \"apprenticeship\"."
      },
      {
        "question": "The Communist Manifesto, published in 1848, was written by Karl Marx and which co-author?",
        "answer": "Friedrich Engels",
        "explanation": "The short pamphlet was commissioned by the Communist League and appeared as revolutions swept Europe in 1848. It later became one of the most influential political texts of the modern world."
      },
      {
        "question": "Which Irish uprising against British rule broke out in Dublin during Easter week in 1916?",
        "answer": "The Easter Rising",
        "explanation": "Around 1,200 rebels seized key buildings and proclaimed an Irish Republic. The rising was quickly suppressed, but the execution of its leaders shifted public opinion and helped lead to the Irish War of Independence a few years later."
      }
    ]
  },
  {
    "id": "twentieth",
    "title": "The 20th Century",
    "emoji": "🌐",
    "intro": "The last century moved at a startling pace, from world wars and the Space Race to the end of apartheid and the birth of the web. These questions stick to well-established dates and names.",
    "questions": [
      {
        "question": "The assassination of which archduke in Sarajevo in 1914 helped trigger the First World War?",
        "answer": "Franz Ferdinand",
        "explanation": "Archduke Franz Ferdinand, heir to the Austro-Hungarian throne, was shot on 28 June 1914 by Gavrilo Princip, a Bosnian Serb nationalist. Within weeks, a network of alliances had drawn the major European powers into war."
      },
      {
        "question": "Germany's invasion of which country on 1 September 1939 is generally taken as the start of the Second World War in Europe?",
        "answer": "Poland",
        "explanation": "Britain and France declared war on Germany two days later, after Germany ignored an ultimatum to withdraw. The conflict later spread worldwide, but the invasion of Poland is the conventional starting point in Europe."
      },
      {
        "question": "On which Hawaiian naval base did Japanese aircraft launch a surprise attack on 7 December 1941?",
        "answer": "Pearl Harbor",
        "explanation": "The attack sank or damaged much of the US Pacific Fleet's battleship force and killed more than 2,400 people. The United States declared war on Japan the next day, bringing it fully into the Second World War."
      },
      {
        "question": "On which date did the D-Day landings in Normandy take place?",
        "answer": "6 June 1944",
        "explanation": "Under the codename Operation Overlord, Allied forces landed on five beaches in northern France. It was the largest seaborne invasion in history and began the liberation of Western Europe from Nazi occupation."
      },
      {
        "question": "On which Japanese city was the first atomic bomb used in war, on 6 August 1945?",
        "answer": "Hiroshima",
        "explanation": "The bomb was dropped by the American B-29 Enola Gay. A second bomb fell on Nagasaki three days later, and Japan announced its surrender on 15 August. The attacks remain the only use of nuclear weapons in warfare."
      },
      {
        "question": "Which US president resigned from office in 1974 in the aftermath of the Watergate scandal?",
        "answer": "Richard Nixon",
        "explanation": "Nixon resigned on 9 August 1974, the only US president ever to have done so, after a break-in at Democratic Party offices and a subsequent cover-up were exposed. Vice President Gerald Ford then took office and later pardoned him."
      },
      {
        "question": "The Cuban Missile Crisis of 1962 was a 13-day standoff between the United States and which other superpower?",
        "answer": "The Soviet Union",
        "explanation": "The US discovered Soviet nuclear missiles being installed in Cuba, a short distance from the American mainland. The Soviets later agreed to withdraw the missiles, and the US quietly agreed to remove its own missiles from Turkey."
      },
      {
        "question": "In which US city was President John F. Kennedy assassinated in November 1963?",
        "answer": "Dallas",
        "explanation": "Kennedy was shot while riding in a motorcade through Dealey Plaza on 22 November 1963. Lee Harvey Oswald was arrested and was himself killed two days later, before he could stand trial."
      },
      {
        "question": "Which South African leader was released from prison in 1990 and became the country's first Black president in 1994?",
        "answer": "Nelson Mandela",
        "explanation": "Mandela had spent 27 years in prison, much of it on Robben Island, for his opposition to apartheid. He shared the 1993 Nobel Peace Prize with F. W. de Klerk and presided over South Africa's transition to majority rule."
      },
      {
        "question": "In which year was the People's Republic of China proclaimed, under the leadership of Mao Zedong?",
        "answer": "1949",
        "explanation": "Mao proclaimed the People's Republic in Beijing on 1 October 1949, after the Chinese Communist Party's victory in the civil war. The defeated Nationalist government withdrew to Taiwan."
      }
    ]
  },
  {
    "id": "leaders",
    "title": "Leaders, Documents and Turning Points",
    "emoji": "📜",
    "intro": "Some names and papers stand for a whole era. This final round gathers monarchs, reformers and a landmark human-rights document, each with enough context to settle a quiz-night argument.",
    "questions": [
      {
        "question": "Which English king broke with the Roman Catholic Church and became head of the Church of England in the 1530s?",
        "answer": "Henry VIII",
        "explanation": "The break, formalised in the Act of Supremacy of 1534, followed the Pope's refusal to annul Henry's marriage to Catherine of Aragon. The English Reformation that followed closed monasteries and changed the country's religious life for good."
      },
      {
        "question": "Which English queen's navy defeated the Spanish Armada in 1588?",
        "answer": "Elizabeth I",
        "explanation": "Philip II of Spain sent a huge fleet to invade England and overthrow the Protestant queen. Storms, faster English ships and poor Spanish communication all played a part in the Armada's failure, which became a defining moment of Elizabeth's reign."
      },
      {
        "question": "Louis XIV of France, known as the Sun King, made which palace the centre of his court?",
        "answer": "Versailles",
        "explanation": "Louis XIV moved his court to Versailles, southwest of Paris, in 1682. The palace and gardens became a symbol of absolute monarchy, and French kings lived there until the revolution more than a century later."
      },
      {
        "question": "Which Russian tsar founded the city of St Petersburg in 1703 as a new capital and a \"window on Europe\"?",
        "answer": "Peter the Great",
        "explanation": "Peter I pushed Russia through a programme of military, naval and social reform after travelling in Western Europe. St Petersburg, built on the Baltic at a huge human cost, remained the capital until 1918."
      },
      {
        "question": "Who is the longest-reigning monarch in British history?",
        "answer": "Elizabeth II",
        "explanation": "Elizabeth II reigned from 6 February 1952 until her death on 8 September 2022, a total of 70 years and 214 days. She overtook Queen Victoria's record in 2015."
      },
      {
        "question": "Which Ottoman-era army officer became the first president of the Republic of Turkey in 1923?",
        "answer": "Mustafa Kemal Atatürk",
        "explanation": "Atatürk led the Turkish War of Independence after the collapse of the Ottoman Empire. As president he introduced a new alphabet, secular law and a raft of social reforms aimed at making Turkey a modern nation-state."
      },
      {
        "question": "Who was the first woman to serve as Prime Minister of the United Kingdom?",
        "answer": "Margaret Thatcher",
        "explanation": "Thatcher, leader of the Conservative Party, held office from 1979 to 1990, making her the longest-serving British prime minister of the 20th century. Her programme of privatisation and union reform earned her the nickname the \"Iron Lady\"."
      },
      {
        "question": "Which American civil rights leader delivered the \"I Have a Dream\" speech at the March on Washington in 1963?",
        "answer": "Martin Luther King Jr.",
        "explanation": "King spoke from the steps of the Lincoln Memorial on 28 August 1963, in front of a crowd of a quarter of a million people. He was awarded the Nobel Peace Prize the following year and was assassinated in Memphis in 1968."
      },
      {
        "question": "Which document, issued by the United Nations in 1948, set out fundamental rights to be protected for all people?",
        "answer": "The Universal Declaration of Human Rights",
        "explanation": "The declaration was adopted by the UN General Assembly in Paris on 10 December 1948, with Eleanor Roosevelt chairing the drafting commission. It is not a binding treaty, but it has shaped human-rights law and constitutions around the world."
      },
      {
        "question": "Who was the only woman in Chinese history to rule as emperor in her own name, founding a short-lived dynasty in 690?",
        "answer": "Wu Zetian",
        "explanation": "Wu Zetian began as a consort of the Tang dynasty and eventually ruled in her own right, proclaiming the Zhou dynasty in 690. She is the only woman in Chinese history to hold the title of emperor, rather than empress consort."
      }
    ]
  }
]

export const HISTORY80_TOTAL = HISTORY80_SECTIONS.reduce(
  (sum, section) => sum + section.questions.length,
  0
)

