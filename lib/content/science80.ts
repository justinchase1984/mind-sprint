// lib/content/science80.ts
// Original editorial content for /science-trivia-questions-and-answers.
// These questions are written specifically for this article and are NOT part of
// the daily quiz bank in lib/rotation.ts. Checked against the live bank and the
// General Knowledge, History and Geography Q&A pages with the internal
// duplicate checker before publishing.

export type ScienceQuestion = {
  question: string
  answer: string
  explanation: string
}

export type ScienceSection = {
  id: string
  title: string
  emoji: string
  intro: string
  questions: ScienceQuestion[]
}

export const SCIENCE80_SECTIONS: ScienceSection[] = [
  {
    "id": "space",
    "title": "Space and the Solar System",
    "emoji": "🚀",
    "intro": "Space is full of tidy quiz facts: named storms, named stars, and a few objects that still surprise people who only remember the Moon landings. This round stays with well-established astronomy, not the latest unverified headline.",
    "questions": [
      {
        "question": "Which planet is home to the Great Red Spot, a giant storm that has been observed for centuries?",
        "answer": "Jupiter",
        "explanation": "The Great Red Spot is a vast anticyclone in Jupiter's atmosphere, wider than the Earth. It has been watched since at least the 19th century, and although it has shrunk in recent decades it is still the most famous feature on the largest planet."
      },
      {
        "question": "What is the name of the Sun's outer atmosphere, which becomes visible as a glowing halo during a total solar eclipse?",
        "answer": "The corona",
        "explanation": "The corona is much hotter than the Sun's visible surface, reaching more than a million degrees Celsius, yet it is usually too faint to see against the blue sky. During totality, when the Moon covers the Sun's bright face, the corona stands out clearly."
      },
      {
        "question": "What name is given to the explosive death of a massive star, which can briefly outshine an entire galaxy?",
        "answer": "A supernova",
        "explanation": "A supernova occurs when a massive star collapses at the end of its life, or when a white dwarf detonates in a binary system. The blast seeds space with heavy elements, including the iron in our blood, and can leave behind a neutron star or a black hole."
      },
      {
        "question": "Which is the farthest recognised planet from the Sun?",
        "answer": "Neptune",
        "explanation": "Neptune orbits about 4.5 billion kilometres from the Sun and takes roughly 165 Earth years to complete one circuit. It has been the outermost planet since 2006, when Pluto was reclassified as a dwarf planet."
      },
      {
        "question": "What is the name of the tallest volcano in the Solar System, on Mars?",
        "answer": "Olympus Mons",
        "explanation": "Olympus Mons rises about 22 kilometres from its base, far higher than any volcano on Earth, and its base is hundreds of kilometres across. It is a shield volcano, built up by long-lasting eruptions of relatively runny lava in Mars's lower gravity."
      },
      {
        "question": "What is the name of the star that currently sits almost directly above Earth's North Pole, and has long been used as a navigation aid?",
        "answer": "Polaris",
        "explanation": "Polaris, also called the North Star, stands almost in line with Earth's axis, so it appears to stay put while the rest of the northern sky turns around it. Because Earth's axis slowly wobbles, it will not always be the pole star, but it is the one we have now."
      },
      {
        "question": "What is the name of the nearest large spiral galaxy to our own?",
        "answer": "Andromeda",
        "explanation": "The Andromeda Galaxy, also known as M31, lies about 2.5 million light-years away and can be seen with the naked eye as a faint smudge in a dark sky. It is on a collision course with the Milky Way, though that encounter is still about four billion years off."
      },
      {
        "question": "What name is given to the colourful lights that appear in the sky near Earth's magnetic poles, caused by charged particles from the Sun?",
        "answer": "The aurora",
        "explanation": "The aurora borealis, or northern lights, and the aurora australis, or southern lights, occur when particles from the solar wind are guided by Earth's magnetic field into the upper atmosphere. There they excite gases such as oxygen and nitrogen, which then give off coloured light."
      },
      {
        "question": "Which famous comet returns to the inner Solar System about every 76 years, and is next expected in 2061?",
        "answer": "Halley's Comet",
        "explanation": "The comet is named after the astronomer Edmond Halley, who realised that several historical appearances were the same object and correctly predicted its return in 1758. It last passed Earth in 1986, and records of it go back at least 2,000 years."
      },
      {
        "question": "What name is given to the boundary around a black hole beyond which nothing, not even light, can escape?",
        "answer": "The event horizon",
        "explanation": "The event horizon is not a solid surface, but a point of no return set by the black hole's gravity. Once something crosses it, it cannot send a signal back to the outside universe. The idea was developed from Einstein's general relativity in the 20th century."
      }
    ]
  },
  {
    "id": "human-body",
    "title": "The Human Body",
    "emoji": "🧠",
    "intro": "The body is a favourite quiz topic because the answers are usually close at hand. This round mixes everyday anatomy with a few details that are easy to mix up, and it leaves the more familiar bone-and-blood chestnuts to one side.",
    "questions": [
      {
        "question": "What is the medical name for the windpipe, the tube that carries air from the throat to the lungs?",
        "answer": "The trachea",
        "explanation": "The trachea is a rigid tube held open by rings of cartilage, and it splits into the two main bronchi that lead into the lungs. If it becomes blocked, air cannot reach the lungs, which is why first aid for choking is so important."
      },
      {
        "question": "Which blood vessels carry blood away from the heart?",
        "answer": "Arteries",
        "explanation": "Arteries have thick, elastic walls that can withstand the pulse of each heartbeat. With the exception of the pulmonary arteries, they carry oxygen-rich blood. Veins, by contrast, carry blood back toward the heart."
      },
      {
        "question": "How many pairs of ribs does a typical human have?",
        "answer": "12",
        "explanation": "Most people have 12 pairs, or 24 ribs in all: seven pairs attach directly to the breastbone, three attach through cartilage, and two are 'floating' pairs that do not join the breastbone. A few people are born with an extra rib, or with one pair fewer."
      },
      {
        "question": "What is the name of the pigment that gives human skin, hair and eyes their colour?",
        "answer": "Melanin",
        "explanation": "Melanin is made by cells called melanocytes. People with darker skin produce more of it, and it also helps protect the skin from ultraviolet light. The same family of pigments is found in many other animals, from birds' feathers to the ink of a squid."
      },
      {
        "question": "Which joint, where the thigh bone meets the shin bone, is the largest in the human body?",
        "answer": "The knee",
        "explanation": "The knee is a hinge joint that also allows a little rotation, and it has to bear the full weight of the body, plus the extra load of walking, running and jumping. The kneecap sits in front of it and helps the thigh muscle straighten the leg."
      },
      {
        "question": "How many teeth are there in a full set of adult human teeth, including the wisdom teeth?",
        "answer": "32",
        "explanation": "A full adult set is made up of incisors, canines, premolars and molars, with four wisdom teeth at the back. Many people have one or more wisdom teeth removed, or never grow all four, so 32 is the number when every tooth is present."
      },
      {
        "question": "Which hormone, produced by the pineal gland in the brain, helps regulate the body's sleep–wake cycle?",
        "answer": "Melatonin",
        "explanation": "Melatonin is released mainly in the dark, which is why bright screens late at night can make it harder to fall asleep. It is used by the body as a signal that night has arrived, and its timing is one of the clocks that keeps us roughly in step with day and night."
      },
      {
        "question": "Which snail-shaped part of the inner ear is responsible for hearing?",
        "answer": "The cochlea",
        "explanation": "The cochlea is a fluid-filled spiral. Sound vibrations move the fluid, which bends tiny hair cells that then send nerve signals to the brain. Different parts of the spiral respond to different pitches, from high notes at one end to low notes at the other."
      },
      {
        "question": "What is the name of the muscular tube that carries food from the throat down to the stomach?",
        "answer": "The oesophagus",
        "explanation": "The oesophagus is about 25 centimetres long in an adult. Waves of muscle contraction, called peristalsis, push the food along, which is why it is possible, though not advisable, to swallow even if you are upside down."
      },
      {
        "question": "Which gland in the neck produces hormones that help control the body's metabolic rate?",
        "answer": "The thyroid",
        "explanation": "The thyroid sits at the front of the neck, below the Adam's apple, and it uses iodine to make its hormones. If it becomes overactive or underactive, the effects can include changes in weight, energy and heart rate, which is why blood tests of thyroid function are so common."
      }
    ]
  },
  {
    "id": "chemistry",
    "title": "Chemistry",
    "emoji": "🧪",
    "intro": "Chemistry quizzes work best when the questions have a crisp answer and a short story behind it: a formula, a name on the periodic table, or a substance you have actually met in the kitchen. A few of these are easy; a few are meant to make you think.",
    "questions": [
      {
        "question": "Ice, steam and the liquid we drink are all made of molecules with which well-known formula?",
        "answer": "H₂O",
        "explanation": "Each water molecule is made of two hydrogen atoms bonded to one oxygen atom. That simple structure is why water can dissolve so many other substances, and why it behaves so unusually when it freezes, with the molecules arranging themselves into an open, less dense lattice."
      },
      {
        "question": "Diamonds and graphite, despite looking and behaving very differently, are both made of which element?",
        "answer": "Carbon",
        "explanation": "In diamond, each carbon atom is bonded strongly to four others in a rigid lattice, which is why it is so hard. In graphite, the atoms form stacked sheets that can slide over one another, which is why pencil 'lead' leaves a mark on paper."
      },
      {
        "question": "What is the chemical name for common table salt?",
        "answer": "Sodium chloride",
        "explanation": "Table salt is a compound of sodium and chlorine, with the formula NaCl. In its crystal form, the two kinds of ion alternate in a regular cubic lattice. The same compound occurs naturally as the mineral halite, or rock salt."
      },
      {
        "question": "Which noble gas is used in advertising signs to produce a distinctive reddish-orange glow?",
        "answer": "Neon",
        "explanation": "When an electric current is passed through neon at low pressure, the gas gives off that familiar red-orange light. Other colours in so-called neon signs usually come from different gases, or from coloured glass, rather than from neon itself."
      },
      {
        "question": "Which Russian chemist is widely credited with publishing the first recognisably modern periodic table, in 1869?",
        "answer": "Dmitri Mendeleev",
        "explanation": "Mendeleev arranged the elements by atomic weight and grouped them by their properties, and he left gaps for elements that had not yet been found. When gallium, scandium and germanium were later discovered and fitted those gaps, his table was quickly accepted."
      },
      {
        "question": "What is the name of the change of state in which a solid turns directly into a gas, as dry ice does at room temperature?",
        "answer": "Sublimation",
        "explanation": "Dry ice is solid carbon dioxide, and it sublimes in air, going straight from solid to gas without becoming a liquid. Iodine and frozen water can also sublime under the right conditions, which is why ice cubes left in a freezer slowly shrink."
      },
      {
        "question": "What do we call atoms of the same element that have the same number of protons but different numbers of neutrons?",
        "answer": "Isotopes",
        "explanation": "Isotopes of an element have almost the same chemistry, because that is set by the electrons, but they can have different masses and different nuclear properties. Carbon-12 and carbon-14 are a well-known pair; carbon-14 is radioactive and is used in dating ancient remains."
      },
      {
        "question": "Which metal is the most abundant in Earth's crust?",
        "answer": "Aluminium",
        "explanation": "Aluminium makes up about 8 percent of the crust by weight, more than iron or any other metal, though it is never found as a pure metal in nature. It is extracted from the ore bauxite, and because that process takes a great deal of electricity, recycling aluminium is especially worthwhile."
      },
      {
        "question": "Mercury is a liquid metal at everyday temperatures. Which non-metal element is also a liquid under the same conditions?",
        "answer": "Bromine",
        "explanation": "Bromine is a reddish-brown halogen, and it is the only non-metal that is liquid under everyday conditions. Together with mercury, it is one of the two elements that are liquid at typical room temperature, and a favourite pair of quiz exceptions."
      },
      {
        "question": "In which layer of the atmosphere is most of the ozone layer found?",
        "answer": "The stratosphere",
        "explanation": "Most of the ozone that protects us from harmful ultraviolet light sits in the stratosphere, from about 15 to 35 kilometres up. Each ozone molecule is made of three oxygen atoms, and the layer was badly damaged by chemicals called CFCs before they were widely banned."
      }
    ]
  },
  {
    "id": "physics",
    "title": "Physics",
    "emoji": "⚡",
    "intro": "Physics can sound intimidating, but most quiz-night questions come down to a name, a unit, or a clear observation. This round favours those, and keeps the explanations in plain language.",
    "questions": [
      {
        "question": "What is the SI unit of energy?",
        "answer": "The joule",
        "explanation": "The joule is named after the English physicist James Prescott Joule, who studied the relationship between heat and work. One joule is roughly the energy needed to lift a small apple by one metre, and it is also equal to one watt for one second."
      },
      {
        "question": "Which colour of visible light has the shortest wavelength?",
        "answer": "Violet",
        "explanation": "Visible light runs from violet, with the shortest wavelength, to red, with the longest. Beyond violet lies ultraviolet, which we cannot see and which can cause sunburn. The shorter waves at this end of the spectrum are also the reason a rainbow's inner rim is violet."
      },
      {
        "question": "What name is given to the change in apparent pitch of a siren as an ambulance approaches and then passes you?",
        "answer": "The Doppler effect",
        "explanation": "As the source of a sound moves toward you, the sound waves are bunched up and the pitch sounds higher; as it moves away, the waves are stretched and the pitch drops. The same effect applies to light, and is used to tell whether distant galaxies are moving away from us."
      },
      {
        "question": "What name is given to the force that resists motion when two surfaces rub against each other?",
        "answer": "Friction",
        "explanation": "Friction can be a nuisance, but we also depend on it: without it, shoes would slip, brakes would not work, and knots would not hold. It converts some of the energy of motion into heat, which is why rubbing your hands together warms them."
      },
      {
        "question": "What is the SI unit of power, equal to one joule per second?",
        "answer": "The watt",
        "explanation": "The watt is named after the Scottish engineer James Watt, who improved the steam engine. A 60-watt light bulb, in the old incandescent rating, converted 60 joules of electrical energy every second, mostly into heat rather than light."
      },
      {
        "question": "If a hammer and a feather are dropped together in a vacuum, which one hits the ground first?",
        "answer": "They arrive together",
        "explanation": "Without air resistance, all objects fall at the same rate under gravity, regardless of their mass. This was demonstrated on the Moon in 1971, when Apollo 15 astronaut David Scott dropped a hammer and a feather and they landed together."
      },
      {
        "question": "Which particle in an atomic nucleus has no electric charge?",
        "answer": "The neutron",
        "explanation": "Nuclei are made of protons, which are positively charged, and neutrons, which are neutral. Neutrons help bind the nucleus together. Atoms of the same element can have different numbers of neutrons, which is what makes isotopes."
      },
      {
        "question": "What name is given to the energy an object has because it is moving?",
        "answer": "Kinetic energy",
        "explanation": "Kinetic energy depends on an object's mass and on the square of its speed, which is why a car crash at twice the speed involves about four times the energy. When the object slows down, that energy is transferred, often as heat or deformation."
      },
      {
        "question": "What happens to a beam of white light when it passes through a triangular glass prism?",
        "answer": "It is split into a spectrum of colours",
        "explanation": "Glass slows down different wavelengths of light by slightly different amounts, so the beam is spread into a rainbow, from red to violet. Isaac Newton used a prism in this way in the 1660s, showing that white light is a mixture of colours, not a pure colour that the glass had stained."
      },
      {
        "question": "What name is given to the tendency of an object to resist a change in its motion, as described by Newton's first law?",
        "answer": "Inertia",
        "explanation": "Newton's first law says that an object at rest stays at rest, and an object in motion keeps moving in a straight line at constant speed, unless a force acts on it. Inertia is the name for that resistance to change, and it is greater for objects with more mass."
      }
    ]
  },
  {
    "id": "animals",
    "title": "Animals",
    "emoji": "🐾",
    "intro": "Animal questions are some of the most popular on a quiz night, so this round aims for a mix of familiar creatures and a few that still feel surprising. Each explanation adds a little natural history, not just the one-word answer.",
    "questions": [
      {
        "question": "What is a baby swan called?",
        "answer": "A cygnet",
        "explanation": "Cygnets hatch covered in grey or brown down and stay close to their parents for several months. The word comes from the Latin cygnus, meaning swan. Adult mute swans, the species most often seen on parks and rivers in Australia and Europe, are typically white."
      },
      {
        "question": "Which filter-feeding shark is the largest living fish?",
        "answer": "The whale shark",
        "explanation": "The whale shark can grow to more than 12 metres long, and it is found in warm oceans around the world, including off the Australian coast. Despite its size and its name, it is a shark, not a whale, and it feeds mainly on tiny plankton."
      },
      {
        "question": "How many legs does a true insect have?",
        "answer": "Six",
        "explanation": "Insects, including ants, bees, beetles and flies, have six legs and three body parts: head, thorax and abdomen. Spiders, which are arachnids rather than insects, have eight, which is one reason the two groups are so often mixed up."
      },
      {
        "question": "Which is the only bird that can fly backwards in sustained, controlled flight?",
        "answer": "The hummingbird",
        "explanation": "Hummingbirds can hover, fly backwards and even, briefly, upside down, because their wings rotate in a figure-eight stroke that produces lift on both the forward and backward beats. They also have the fastest heartbeat of any bird, and they feed on nectar."
      },
      {
        "question": "What is actually stored in a camel's hump, despite a common belief that it is water?",
        "answer": "Fat",
        "explanation": "The hump is a reserve of fatty tissue. When the fat is broken down it does yield some water, as well as energy, but camels cope with deserts mainly by conserving the water they already have: they can let their body temperature rise, and their kidneys produce very concentrated urine."
      },
      {
        "question": "Which large African mammal has a name that comes from the Greek for 'river horse'?",
        "answer": "The hippopotamus",
        "explanation": "Hippos spend much of the day in rivers and lakes, with their eyes, ears and nostrils on the top of the head so they can stay almost submerged. They are herbivores, but they can be highly aggressive, and they are among the most dangerous large animals in Africa."
      },
      {
        "question": "Which Mexican salamander is famous for keeping its feathery gills into adulthood and for being able to regrow lost limbs?",
        "answer": "The axolotl",
        "explanation": "The axolotl is a type of salamander that usually remains in its larval form for life, a condition called neoteny, and stays in the water. It can regenerate legs, tails and even parts of the heart and spinal cord, which is why scientists study it so closely."
      },
      {
        "question": "Which flightless bird, now extinct, lived only on the island of Mauritius?",
        "answer": "The dodo",
        "explanation": "The dodo was a large, flightless relative of the pigeon. It was first recorded by Dutch sailors in the late 16th century and was extinct by the end of the 17th, probably because of hunting and the animals that ships brought to the island, such as rats and pigs."
      },
      {
        "question": "In seahorses, which parent carries the developing young in a pouch until they are ready to be released?",
        "answer": "The male",
        "explanation": "The female deposits her eggs into a brood pouch on the male's body, where he fertilises them and later gives birth to live young. It is one of the few cases in the animal world in which the male becomes pregnant, and it has made seahorses a favourite example in biology lessons."
      },
      {
        "question": "Which marsupial, now found in the wild mainly in Tasmania, is named for its loud screech and black colouring?",
        "answer": "The Tasmanian devil",
        "explanation": "Tasmanian devils are stocky, mostly nocturnal scavengers and hunters, with a bite that is very strong for their size. They died out on the Australian mainland thousands of years ago. In recent decades a contagious facial tumour disease has badly reduced the Tasmanian population, and conservation programs are working to protect them."
      }
    ]
  },
  {
    "id": "plants-earth",
    "title": "Plants and Earth Science",
    "emoji": "🌍",
    "intro": "This round is about the ground under our feet and the plants that grow in it: rocks, the atmosphere, the water cycle, and a couple of green things that are easy to take for granted.",
    "questions": [
      {
        "question": "What type of rock is formed when layers of sand, mud or other material are compacted and cemented over time?",
        "answer": "Sedimentary rock",
        "explanation": "Sedimentary rocks, such as sandstone, shale and limestone, often form in beds or layers, and they are the rocks most likely to contain fossils. Together with igneous and metamorphic rocks, they make up the three main rock types in the rock cycle."
      },
      {
        "question": "What is molten rock called while it is still beneath Earth's surface?",
        "answer": "Magma",
        "explanation": "Once magma reaches the surface and flows out of a volcano, it is called lava. The same material, cooling at different speeds and in different places, can produce very different igneous rocks, from coarse granite that cooled underground to fine basalt from a lava flow."
      },
      {
        "question": "What is the name of the ancient supercontinent that once joined nearly all of Earth's land together?",
        "answer": "Pangaea",
        "explanation": "Pangaea formed late in the Palaeozoic Era and began to break up around 200 million years ago, eventually becoming the continents we know today. The fit of South America and Africa, and matching fossils on both sides of the Atlantic, were early clues that it had existed."
      },
      {
        "question": "Which is the lowest layer of Earth's atmosphere, and the one in which almost all weather takes place?",
        "answer": "The troposphere",
        "explanation": "The troposphere extends from the ground up to about 8 to 15 kilometres, depending on latitude and season, and it contains most of the atmosphere's mass and water vapour. Temperature generally falls as you go up, until you reach the tropopause and the stratosphere above."
      },
      {
        "question": "What is the name of the green pigment in plants that captures light energy?",
        "answer": "Chlorophyll",
        "explanation": "Chlorophyll is concentrated in chloroplasts inside plant cells, especially in the leaves. It absorbs mainly red and blue light and reflects green, which is why healthy leaves look green to us. Without it, plants could not photosynthesise."
      },
      {
        "question": "What name is given to water that falls from clouds as rain, snow, sleet or hail?",
        "answer": "Precipitation",
        "explanation": "Precipitation is one of the main stages of the water cycle, returning water from the atmosphere to the land and oceans. The form it takes depends on the temperature of the clouds and of the air between the cloud and the ground."
      },
      {
        "question": "Which cave formation grows downward from the ceiling, like an icicle of stone?",
        "answer": "A stalactite",
        "explanation": "Stalactites form as mineral-rich water drips from a cave roof and leaves behind a little calcium carbonate each time. A handy memory trick is that stalactites hold 'tight' to the ceiling, while stalagmites 'might' one day grow up from the floor to meet them."
      },
      {
        "question": "What nickname is given to the belt of volcanoes and earthquake zones that roughly surrounds the Pacific Ocean?",
        "answer": "The Ring of Fire",
        "explanation": "The Ring of Fire follows the edges of several tectonic plates around the Pacific. It includes the volcanoes of New Zealand, Japan, the Andes and the west coast of North America, and it is the setting for a large share of the world's earthquakes and eruptions."
      },
      {
        "question": "What name is given to a series of powerful ocean waves, usually set off by an undersea earthquake, that can flood the shore?",
        "answer": "A tsunami",
        "explanation": "A tsunami is not a single tidal wave, and it is not caused by the tide. In deep water the waves can travel as fast as a jet aircraft, with a long, low shape; as they reach shallow water they slow down and grow much taller, which is what makes them so destructive."
      },
      {
        "question": "Pine, fir and spruce trees belong to a group of seed plants that produce their seeds in cones. What is that group called?",
        "answer": "Conifers",
        "explanation": "Conifers are gymnosperms, plants whose seeds are not enclosed in a fruit. Most are evergreen, with needle-like leaves that help them reduce water loss, and they dominate many cooler forests, including Tasmania's and the high country of south-eastern Australia."
      }
    ]
  },
  {
    "id": "scientists",
    "title": "Inventions and Scientists",
    "emoji": "🔬",
    "intro": "Behind a lot of everyday science is a person, a laboratory, or a careful piece of work that took years. This round names some of those people and a few inventions, including a couple with a strong Australian connection.",
    "questions": [
      {
        "question": "Who set out the theory of evolution by natural selection in the 1859 book On the Origin of Species?",
        "answer": "Charles Darwin",
        "explanation": "Darwin built his argument on years of observation, including his voyage on HMS Beagle. The naturalist Alfred Russel Wallace independently reached a similar idea, and their work was first presented together in 1858, a year before Darwin's book appeared."
      },
      {
        "question": "Which American doctor developed the first widely used vaccine against polio, introduced in 1955?",
        "answer": "Jonas Salk",
        "explanation": "Salk's vaccine was an injected, inactivated-virus vaccine, and it was declared safe and effective in April 1955 after a huge field trial. An oral vaccine, developed later by Albert Sabin, was also widely used. Together they drove polio down dramatically around the world."
      },
      {
        "question": "Which Polish astronomer argued, in a book published in 1543, that the Earth orbits the Sun?",
        "answer": "Nicolaus Copernicus",
        "explanation": "Copernicus's book, De revolutionibus orbium coelestium, placed the Sun at the centre of the known universe and the Earth among the planets. The idea was slow to be accepted, but it paved the way for later work by Kepler, Galileo and Newton."
      },
      {
        "question": "Which German physicist discovered X-rays in 1895?",
        "answer": "Wilhelm Röntgen",
        "explanation": "Röntgen noticed that a fluorescent screen in his laboratory glowed even when his cathode-ray tube was covered, and he traced the effect to a new kind of radiation that could pass through skin and wood. He called the rays 'X' for unknown, and in 1901 he received the first Nobel Prize in Physics."
      },
      {
        "question": "Which German scientist proposed the theory of continental drift, arguing that the continents had once been joined?",
        "answer": "Alfred Wegener",
        "explanation": "Wegener published his ideas in the 1910s, pointing to the fit of the continents and to shared fossils and rock types. He was widely doubted at the time, because he could not explain a convincing mechanism. Plate tectonics, developed in the 1960s, later provided one."
      },
      {
        "question": "Whose X-ray diffraction images of DNA were crucial to the double-helix model published by James Watson and Francis Crick in 1953?",
        "answer": "Rosalind Franklin",
        "explanation": "Franklin, working at King's College London with Maurice Wilkins, produced extremely clear images of DNA, including the famous Photo 51. Watson and Crick used insight from that work to build their model. Franklin died in 1958, and the 1962 Nobel Prize was awarded to Watson, Crick and Wilkins."
      },
      {
        "question": "What process, named after Louis Pasteur, uses carefully controlled heat to kill harmful microbes in milk and other foods without boiling them?",
        "answer": "Pasteurisation",
        "explanation": "Pasteur showed that many spoilage and disease-causing microbes can be greatly reduced by heating a liquid and then cooling it quickly. The method is still used for milk, fruit juice and some other foods, and it was a major step in making everyday food safer."
      },
      {
        "question": "Which Australian-born scientist, working with Ernst Chain at Oxford, turned penicillin into a usable medicine in the early 1940s?",
        "answer": "Howard Florey",
        "explanation": "Alexander Fleming had first noticed penicillin in 1928, but it was Florey, Chain and their team who extracted it, tested it, and showed that it could treat infections in people. Florey was born in Adelaide. He, Chain and Fleming shared the 1945 Nobel Prize in Physiology or Medicine."
      },
      {
        "question": "Which Italian scientist improved the telescope in 1609 and used it to discover four large moons orbiting Jupiter?",
        "answer": "Galileo Galilei",
        "explanation": "Galileo's discoveries, including the moons of Jupiter, the phases of Venus and the rough surface of the Moon, offered strong evidence that not everything in the sky orbited the Earth. He published the first of these findings in 1610, in a short book called Sidereus Nuncius, or The Starry Messenger."
      },
      {
        "question": "Scientists at Australia's CSIRO developed and patented a wireless-LAN technique that became a key part of which everyday technology?",
        "answer": "Wi-Fi",
        "explanation": "In the 1990s a CSIRO team in Sydney, including John O'Sullivan, found a way to send radio signals reliably indoors, where walls cause the signal to bounce. The method was later incorporated into the international standards that underpin Wi-Fi, and it has been used in billions of devices."
      }
    ]
  },
  {
    "id": "weird",
    "title": "Weird and Wonderful Science",
    "emoji": "🌀",
    "intro": "Some of the best science facts are the ones that sound unlikely until you hear why they work. This last round collects ten of those, from frozen frogs to a form of carbon only one atom thick.",
    "questions": [
      {
        "question": "Which tiny animals, also called water bears, can survive being dried out, frozen, and even a spell in the vacuum of space?",
        "answer": "Tardigrades",
        "explanation": "Tardigrades are near-microscopic animals found in moss, soil and the sea. When conditions turn harsh they can enter a dried-out state called a tun, and in 2007 some that had been exposed outside a spacecraft were later revived. They are tough, but they are not indestructible."
      },
      {
        "question": "Besides sweet, sour, salty and bitter, which fifth basic taste, sometimes described as savoury, do scientists now commonly recognise?",
        "answer": "Umami",
        "explanation": "Umami was identified by the Japanese chemist Kikunae Ikeda in 1908, and it is the taste of glutamate, found in foods such as soy sauce, tomatoes, Parmesan cheese and mushrooms. For a long time Western textbooks listed only four basic tastes; umami is now widely accepted as the fifth."
      },
      {
        "question": "Which North American frog can survive being frozen almost solid in winter, with its heart stopped, and then thaw out in spring?",
        "answer": "The wood frog",
        "explanation": "The wood frog, Lithobates sylvaticus, packs its tissues with sugars that act as a natural antifreeze, so ice forms around the cells rather than inside them. Breathing and the heartbeat stop, and in spring the frog thaws and simply starts again. It is one of the most remarkable freeze-tolerant animals known."
      },
      {
        "question": "Which small jellyfish is nicknamed 'immortal' because it can revert from its adult form back to a polyp and, in principle, begin its life cycle again?",
        "answer": "The immortal jellyfish",
        "explanation": "The species is Turritopsis dohrnii. When it is stressed or ageing, it can transform its adult cells back into the earlier polyp stage, a process called transdifferentiation. That does not mean an individual lives forever in the wild — they can still be eaten or die of disease — but the trick is real."
      },
      {
        "question": "A teaspoon of material from which kind of collapsed star would weigh hundreds of millions of tonnes?",
        "answer": "A neutron star",
        "explanation": "A neutron star is the leftover core of a massive star that has gone supernova, packed so tightly that its atoms have been crushed into neutrons. A typical one is only about 20 kilometres across, but it may contain more mass than the Sun, which is why even a tiny sample would be unimaginably heavy."
      },
      {
        "question": "What is the name of the pleasant, earthy smell that rises from dry ground when rain begins to fall?",
        "answer": "Petrichor",
        "explanation": "The word was coined in the 1960s by two Australian scientists, Isabel Joy Bear and Richard Thomas, from the Greek for 'stone' and 'the fluid in the veins of the gods'. The smell comes from oils released by plants, together with a compound called geosmin, which is made by soil bacteria."
      },
      {
        "question": "Although it is only about 2 percent of body weight, about what percentage of the body's energy does the human brain use at rest?",
        "answer": "About 20 percent",
        "explanation": "The brain is extremely hungry for energy, mainly in the form of glucose, because keeping nerve cells ready to fire takes a constant effort. The '2 percent of weight, 20 percent of energy' comparison is a well-established average for a person at rest; the share can change with age and activity."
      },
      {
        "question": "A butterfly tastes with which part of its body?",
        "answer": "Its feet",
        "explanation": "Butterflies have chemoreceptors on their tarsi, or feet, which let them 'taste' a leaf or a piece of fruit by standing on it. That helps a female decide whether a plant is a suitable place to lay eggs, and it helps both sexes find nectar and other food."
      },
      {
        "question": "What name is given to a single layer of carbon atoms, arranged in a honeycomb, that is stronger than steel for its weight and an excellent conductor?",
        "answer": "Graphene",
        "explanation": "Graphene is essentially one sheet of the layers that make up graphite. It was isolated in a usable form in 2004 by Andre Geim and Konstantin Novoselov, who later won the Nobel Prize in Physics. Because it is so thin, strong and conductive, it has been studied for use in electronics, sensors and new materials."
      },
      {
        "question": "Modern birds are now widely agreed to be the living descendants of which group of extinct animals?",
        "answer": "Dinosaurs",
        "explanation": "Specifically, birds are nested within the theropod dinosaurs, the two-legged, mostly meat-eating group that also included Tyrannosaurus and Velociraptor. Fossils such as Archaeopteryx, and many later feathered dinosaurs from China, have helped make the connection part of the scientific mainstream."
      }
    ]
  }
]

export const SCIENCE80_TOTAL = SCIENCE80_SECTIONS.reduce(
  (sum, section) => sum + section.questions.length,
  0
)

