// lib/content/sports80.ts
// Original editorial content for /sports-trivia-questions-and-answers.
// These questions are written specifically for this article and are NOT part of
// the daily quiz bank in lib/rotation.ts. Checked against the live bank and the
// General Knowledge, History, Geography and Science Q&A pages with the internal
// duplicate checker before publishing.

export type SportsQuestion = {
  question: string
  answer: string
  explanation: string
}

export type SportsSection = {
  id: string
  title: string
  emoji: string
  intro: string
  questions: SportsQuestion[]
}

export const SPORTS80_SECTIONS: SportsSection[] = [
  {
    "id": "olympics",
    "title": "The Olympic Games",
    "emoji": "🏅",
    "intro": "The Olympics are a staple of sports quizzes, so this round sticks to moments and facts that are settled: firsts, famous Games, and a few people whose achievements are already in the history books.",
    "questions": [
      {
        "question": "In which year were the first modern Olympic Games held, in Athens?",
        "answer": "1896",
        "explanation": "The Games of 1896 were organised by the newly formed International Olympic Committee and attracted athletes from 14 countries. They were staged in Athens as a nod to the ancient festivals at Olympia, and they have been held, in most years, every four years since."
      },
      {
        "question": "The Olympic motto, Citius, Altius, Fortius, is Latin for what?",
        "answer": "Faster, Higher, Stronger",
        "explanation": "The three-word motto was adopted in the late 19th century and has appeared on Olympic emblems ever since. In 2021 the IOC added a fourth word, Communiter, meaning 'Together', but the original three remain the heart of the phrase."
      },
      {
        "question": "What nickname is often given to the 1956 Summer Olympics, the first to be held in the Southern Hemisphere?",
        "answer": "The Friendly Games",
        "explanation": "The 1956 Games were staged in Melbourne, with the equestrian events held in Stockholm because of Australian quarantine rules. Despite some boycotts and political tension, they became known as the Friendly Games, and they remain a landmark in Australian sporting history."
      },
      {
        "question": "Which American athlete won four gold medals at the 1936 Olympics in Berlin, in the 100 metres, 200 metres, long jump and 4 × 100 metres relay?",
        "answer": "Jesse Owens",
        "explanation": "Owens's four golds, won in front of a Nazi leadership that had hoped to use the Games as a showcase, remain one of the most famous Olympic performances. He set or equalled Olympic records in all four events and later became a symbol of sporting excellence under pressure."
      },
      {
        "question": "At which ancient site in Greece is the Olympic flame traditionally lit before the torch relay begins?",
        "answer": "Olympia",
        "explanation": "The flame is kindled using sunlight and a parabolic mirror, in a ceremony held among the ruins of the sanctuary where the ancient Games took place. It is then carried, by a relay of torch-bearers, to the host city of the coming Games."
      },
      {
        "question": "Who is widely regarded as the founder of the modern Olympic Games?",
        "answer": "Pierre de Coubertin",
        "explanation": "Coubertin was a French educator who believed that organised sport could promote peace and education. He led the founding of the International Olympic Committee in 1894 and spent decades shaping the modern Games, including the idea of a moving host city."
      },
      {
        "question": "Which Asian capital hosted the Olympic Games in 1964, the first Games to be held in Asia?",
        "answer": "Tokyo",
        "explanation": "Tokyo 1964 was a landmark: the first Olympics in Asia, the first to be broadcast widely by satellite, and the Games at which judo and women's volleyball became official sports. Japan used the event to present itself to the world after the Second World War."
      },
      {
        "question": "In which year did women first compete at the modern Olympic Games?",
        "answer": "1900",
        "explanation": "The 1900 Games in Paris were the first to include women, though only in a handful of events such as tennis, golf, sailing and croquet, and only 22 women took part. Participation has grown steadily since, and equal numbers of men's and women's events is now an official aim."
      },
      {
        "question": "In which French town were the first Winter Olympic Games held, in 1924?",
        "answer": "Chamonix",
        "explanation": "The Chamonix meeting was first called 'International Winter Sports Week' and only later recognised as the first Winter Olympics. Sixteen nations took part, in sports including ice hockey, figure skating, skiing and bobsleigh, and the Winter Games have been held in a four-year cycle ever since."
      },
      {
        "question": "Which three years saw the planned Summer Olympics cancelled because of world wars?",
        "answer": "1916, 1940 and 1944",
        "explanation": "The 1916 Games had been awarded to Berlin and were cancelled during the First World War. The 1940 and 1944 Games, which had been planned in the shadow of the Second World War, were also called off. The Olympics returned in 1920 in Antwerp and in 1948 in London."
      }
    ]
  },
  {
    "id": "football",
    "title": "Football",
    "emoji": "⚽",
    "intro": "Association football is the world's most popular sport, and it has a long paper trail of firsts, trophies and famous names. This round stays with those settled facts rather than the latest league table.",
    "questions": [
      {
        "question": "How long is a standard football match, not including added time or extra time?",
        "answer": "90 minutes",
        "explanation": "A match is played in two halves of 45 minutes, with a half-time interval in between. The referee may add time at the end of each half to make up for stoppages, and knockout games may go to extra time if the scores are level."
      },
      {
        "question": "What is the name of the award given to the leading goalscorer at a FIFA World Cup?",
        "answer": "The Golden Boot",
        "explanation": "The Golden Boot, sometimes called the Golden Shoe, is presented to the player who scores the most goals at the tournament. In recent World Cups, assists and minutes played have been used as tie-breakers if two players finish on the same number of goals."
      },
      {
        "question": "Which country hosted and won the first FIFA World Cup, in 1930?",
        "answer": "Uruguay",
        "explanation": "Uruguay was chosen as host partly because it had won football gold at the 1924 and 1928 Olympics, and was celebrating 100 years of independence. Thirteen teams took part, and Uruguay beat Argentina 4–2 in the final in Montevideo."
      },
      {
        "question": "What is the name of England's oldest national football knockout competition, first contested in the 1871–72 season?",
        "answer": "The FA Cup",
        "explanation": "The Football Association Challenge Cup is older than any of the country's league competitions. Wanderers won the first final, at Kennington Oval in 1872, and the trophy is still one of the most sought-after in English football."
      },
      {
        "question": "Coloured yellow and red cards were first used at a FIFA World Cup in which year?",
        "answer": "1970",
        "explanation": "The cards were the idea of English referee Ken Aston, who wanted a clear way to show a caution or a sending-off that did not depend on a shared language. They were introduced at the 1970 World Cup in Mexico and have been part of the game ever since."
      },
      {
        "question": "In which year was the Football Association formed in London, leading to the first official laws of the game?",
        "answer": "1863",
        "explanation": "Representatives of several clubs and schools met in London in October 1863 and, over a series of meetings, agreed a common set of rules. That moment is usually taken as the birth of association football as a distinct sport, separate from the various forms of rugby."
      },
      {
        "question": "Edson Arantes do Nascimento, who won three World Cups as a player, was better known by what name?",
        "answer": "Pelé",
        "explanation": "Pelé starred for Brazil at the 1958, 1962 and 1970 World Cups, the only player to have been part of three winning squads in the men's tournament. He spent most of his club career at Santos, became a global star in the 1960s, and died in 2022."
      },
      {
        "question": "In which year was the first FIFA Women's World Cup held?",
        "answer": "1991",
        "explanation": "The tournament was staged in China, and the United States won the final. It built on earlier unofficial world competitions and on the growth of the women's game in the 1980s, and it has been held every four years since."
      },
      {
        "question": "Which club won the first five European Cups, from 1956 to 1960?",
        "answer": "Real Madrid",
        "explanation": "The European Cup, later rebranded as the UEFA Champions League, began in the 1955–56 season. Real Madrid, led by Alfredo Di Stéfano and later Ferenc Puskás, won the first five finals, a run that has never been repeated."
      },
      {
        "question": "Anfield is the home ground of which English football club?",
        "answer": "Liverpool",
        "explanation": "Anfield, in the north of Liverpool, has been the club's home since 1892. It is known for the Spion Kop stand and for the pre-match singing of 'You'll Never Walk Alone', and it has been the backdrop to many of the club's league and European titles."
      }
    ]
  },
  {
    "id": "cricket",
    "title": "Cricket",
    "emoji": "🏏",
    "intro": "Cricket has its own language, and a good quiz question often turns on a word, a ground or a famous series. The answers below are part of the furniture of the game, not the latest scorecard.",
    "questions": [
      {
        "question": "Besides Test matches and One-Day Internationals, what is the third official format of international cricket?",
        "answer": "Twenty20",
        "explanation": "Twenty20, or T20, gives each side 20 overs and usually lasts about three hours. It began in English domestic cricket in 2003, the first T20 international was played in 2005, and it has since become the format behind leagues such as the IPL and the Big Bash."
      },
      {
        "question": "What is the name of the longest format of international cricket, traditionally scheduled over five days?",
        "answer": "Test cricket",
        "explanation": "Test matches are played between full-member countries of the International Cricket Council and can last up to five days, with each side usually batting twice. If the match is not finished in the scheduled time, and neither side has won, the result is a draw."
      },
      {
        "question": "In cricket, what is a duck?",
        "answer": "A score of zero",
        "explanation": "A batter who is dismissed without scoring is said to have made a duck, probably from the old phrase 'duck's egg', referring to the shape of a zero. A golden duck is a dismissal on the first ball faced, and a king pair is a golden duck in both innings."
      },
      {
        "question": "What name is given to a leg-spinner's delivery that turns in the opposite direction to a standard leg-break?",
        "answer": "A googly",
        "explanation": "To a right-handed batter, a standard leg-break turns away from the bat, while a googly turns in, as an off-break would. The delivery was pioneered in the early 1900s by the English amateur Bernard Bosanquet, and it remains one of the most useful tricks in a spinner's bag."
      },
      {
        "question": "Who captained England in the 1932–33 Bodyline series in Australia?",
        "answer": "Douglas Jardine",
        "explanation": "Bodyline, or fast-leg theory, involved short-pitched bowling aimed at the batter's body, with a ring of fielders on the leg side. Jardine used it to contain Don Bradman, and the tactic caused a serious diplomatic row as well as a fierce on-field contest."
      },
      {
        "question": "Which team won the first men's Cricket World Cup, held in England in 1975?",
        "answer": "The West Indies",
        "explanation": "The first World Cup was a 60-over tournament, staged in a fine English summer. The West Indies, led by Clive Lloyd and featuring a formidable pace attack, beat Australia in the final at Lord's, and they won again in 1979."
      },
      {
        "question": "In cricket, what is a hat-trick?",
        "answer": "Three wickets in three consecutive balls",
        "explanation": "A bowler who takes wickets with three legal deliveries in a row has a hat-trick, a term that began in cricket and later spread to other sports. The wickets can be split across two overs, and they can even, in rare cases, be split across two matches."
      },
      {
        "question": "What is the name of Australia's domestic first-class cricket competition?",
        "answer": "The Sheffield Shield",
        "explanation": "The Shield is contested by the six state teams and has been played, under that name, since the 1892–93 season, after Lord Sheffield donated the trophy. It remains the main pathway to Test cricket in Australia and is usually played over four-day matches."
      },
      {
        "question": "Which London ground is often called the home of cricket?",
        "answer": "Lord's",
        "explanation": "Lord's, in St John's Wood, is owned by the Marylebone Cricket Club and has hosted Tests since 1884. It is named after Thomas Lord, who established the ground in the early 19th century, and it is still the place where the Laws of Cricket are looked after."
      },
      {
        "question": "In which year did Australia and England play the first official Test match, at the Melbourne Cricket Ground?",
        "answer": "1877",
        "explanation": "The two sides met at the MCG in March 1877, in what is now recognised as the first Test match. Australia won by 45 runs, and the ground has been at the centre of Australian cricket, and of many other sports, ever since."
      }
    ]
  },
  {
    "id": "afl-rugby",
    "title": "AFL and Rugby",
    "emoji": "🏉",
    "intro": "This round stays close to home: Australian rules, rugby union and rugby league. The questions are about the shape of the games and a few names that belong in any Australian sporting quiz.",
    "questions": [
      {
        "question": "How many players from each team are on the field in an Australian rules football match?",
        "answer": "18",
        "explanation": "Each side fields 18 players at a time, with a small group of interchange players available on the bench. The 18 are usually set out in lines of forwards, midfielders and defenders, though the modern game is far more fluid than that sounds."
      },
      {
        "question": "In Australian rules football, what is a score of one point called?",
        "answer": "A behind",
        "explanation": "A behind is scored when the ball is touched through the two tall goal posts, or when it goes through the shorter behind posts on either side. A goal, kicked cleanly through the two tall posts, is worth six points, so a typical scoreline is written as goals.behinds and then the total."
      },
      {
        "question": "What is the name of the medal awarded each year to the best and fairest player in the AFL home-and-away season?",
        "answer": "The Brownlow Medal",
        "explanation": "The Brownlow is decided by the umpires, who award 3, 2 and 1 votes after every home-and-away match. It is named after Charles Brownlow, an administrator at Geelong, and it has been presented since 1924. Players who have been suspended during the season have, in many years, been ineligible to win it."
      },
      {
        "question": "In Australian rules, a player who cleanly catches a kicked ball that has travelled at least 15 metres may call a what?",
        "answer": "A mark",
        "explanation": "A mark entitles the player to a free kick, unchallenged, from the spot of the catch. The 15-metre minimum, and the requirement that the ball be kicked rather than handballed, are part of the rule, and a spectacular high mark is one of the game's great sights."
      },
      {
        "question": "In which year did the Victorian Football League officially become the Australian Football League?",
        "answer": "1990",
        "explanation": "The VFL had already admitted clubs from outside Victoria — including the Sydney Swans, the Brisbane Bears and the West Coast Eagles — during the 1980s. The change of name in 1990 recognised that the competition had become a national league."
      },
      {
        "question": "Which Victorian cricketer and footballer is often credited with helping to invent Australian rules football in the late 1850s?",
        "answer": "Tom Wills",
        "explanation": "Wills was a talented cricketer who, in 1858, called for a 'foot-ball club' with a code of laws, and he helped draw up rules used in Melbourne the following year. How much he borrowed from Aboriginal games, English school football and his own invention is still discussed, but his name is at the start of the story."
      },
      {
        "question": "What medal is awarded to the best player on the ground in the AFL Grand Final?",
        "answer": "The Norm Smith Medal",
        "explanation": "The medal has been awarded since 1979 and is named after Norm Smith, who played for and later coached Melbourne. A panel of experts chooses the winner after the match, and it is possible, though unusual, for a player from the losing side to receive it."
      },
      {
        "question": "How many players from each team start a rugby union match on the field?",
        "answer": "15",
        "explanation": "A rugby union side is made up of eight forwards and seven backs. Rugby league, by contrast, fields 13 players, which is one of the easiest ways to tell the two codes apart if you are watching a game for the first time."
      },
      {
        "question": "The first Rugby World Cup, co-hosted by Australia and New Zealand in 1987, was won by which famous team in black?",
        "answer": "The All Blacks",
        "explanation": "The All Blacks are New Zealand's national rugby union team, named for their all-black kit, and they have long been one of the game's strongest sides. They beat France in the 1987 final at Eden Park, and they have won the tournament again in later years."
      },
      {
        "question": "The State of Origin series is an interstate rugby league contest between New South Wales and which other Australian state?",
        "answer": "Queensland",
        "explanation": "State of Origin began in 1980 and is usually a best-of-three series, played in mid-year, with players representing the state in which they first played senior rugby league. It is one of the fiercest rivalries in Australian sport, and it regularly draws huge television audiences."
      }
    ]
  },
  {
    "id": "tennis-golf",
    "title": "Tennis and Golf",
    "emoji": "🎾",
    "intro": "Tennis and golf share a love of tradition, odd scoring words, and tournaments that come around every year. This round is about those traditions, not whoever happens to be holding the trophy this season.",
    "questions": [
      {
        "question": "Which of tennis's four Grand Slam tournaments is played on clay?",
        "answer": "The French Open",
        "explanation": "The French Open, or Roland-Garros, is held in Paris, usually in May and June, on red clay courts. Clay slows the ball and produces a higher bounce than grass or hard courts, and it rewards patience and heavy topspin. The other three Slams are played on grass or hard courts."
      },
      {
        "question": "In tennis, what is the score called when a game reaches 40–40?",
        "answer": "Deuce",
        "explanation": "From deuce, a player must win two points in a row to take the game. The first of those points is called advantage; if the player with advantage loses the next point, the score returns to deuce. The word is thought to come from the French à deux, meaning 'at two'."
      },
      {
        "question": "What is the name of the premier international team competition in men's tennis, first held in 1900?",
        "answer": "The Davis Cup",
        "explanation": "The Davis Cup was founded by the American player Dwight Davis and was originally a challenge between the United States and Great Britain. It has since grown into a worldwide annual competition, and the women's equivalent is now called the Billie Jean King Cup."
      },
      {
        "question": "What name is given to the feat of winning all four tennis Grand Slam tournaments in the same calendar year?",
        "answer": "A calendar Grand Slam",
        "explanation": "A calendar Grand Slam is rare in the Open Era, which began in 1968. Rod Laver achieved it in 1969, and Steffi Graf did so in 1988. Winning all four majors across a career, rather than in one year, is sometimes called a career Grand Slam and is more common."
      },
      {
        "question": "Which two players contested the longest match in tennis history, at Wimbledon in 2010?",
        "answer": "John Isner and Nicolas Mahut",
        "explanation": "The first-round match lasted 11 hours and 5 minutes, spread over three days, and ended 70–68 in the fifth set. The scoreboard even ran out of digits at one point. Tennis later introduced final-set tie-breaks at the Slams, so a match of that length is now much less likely."
      },
      {
        "question": "In golf, what name is given to a score of one over par on a hole?",
        "answer": "A bogey",
        "explanation": "If a hole is a par 4, a score of 5 is a bogey, a 6 is a double bogey, and so on. The word once meant a standard score, but in modern usage it always means one over par. A score of one under par is a birdie, and two under is an eagle."
      },
      {
        "question": "In golf, what name is given to a score of three under par on a hole, also called a double eagle in the United States?",
        "answer": "An albatross",
        "explanation": "An albatross is most often scored by a hole-in-one on a par 4, or by reaching a par 5 in two shots. It is much rarer than an eagle, which is why the name of a large, uncommon bird was chosen. Americans often use the term double eagle for the same score."
      },
      {
        "question": "Which is the oldest of golf's four major championships, first played in 1860?",
        "answer": "The Open Championship",
        "explanation": "The Open, often called the British Open outside the United Kingdom, was first played at Prestwick in Scotland. It is the only one of the four majors that is always staged in the UK, usually on a coastal links course, and it is still played with a claret jug as the trophy."
      },
      {
        "question": "The winner of which golf major is presented with a green jacket?",
        "answer": "The Masters",
        "explanation": "The Masters, first played in 1934, is the only one of the four majors that is held at the same course every year, Augusta National in Georgia. The green jacket has been presented to the champion since 1949, and it remains at the club unless the winner is visiting."
      },
      {
        "question": "Which Scottish town is often called the home of golf?",
        "answer": "St Andrews",
        "explanation": "Golf has been played at St Andrews for centuries, and the Old Course is one of the most famous in the world. The town is also home to the Royal and Ancient Golf Club, which for a long time helped to set the rules of the game."
      }
    ]
  },
  {
    "id": "us-sports",
    "title": "US Sports",
    "emoji": "🏀",
    "intro": "American football, basketball, baseball and ice hockey each have their own vocabulary and a championship that comes around every year. This round is about those words and those trophies, not last night's result.",
    "questions": [
      {
        "question": "What is the name of the score in American football worth six points, in which the ball is carried or caught in the opponent's end zone?",
        "answer": "A touchdown",
        "explanation": "A touchdown is the main scoring play in gridiron football. After it, the scoring team can try an extra point, usually a short kick, or a two-point conversion from the two-yard line. A field goal, kicked through the posts in general play, is worth three points."
      },
      {
        "question": "What is the name of the NFL's championship game, first played in 1967?",
        "answer": "The Super Bowl",
        "explanation": "The Super Bowl began as a meeting between the champions of the NFL and the rival American Football League, and it became the championship of the merged league. It is played each year in early February and is one of the most-watched sporting events in the United States."
      },
      {
        "question": "What does NBA stand for?",
        "answer": "National Basketball Association",
        "explanation": "The league began as the Basketball Association of America in 1946 and took its current name in 1949 after merging with the National Basketball League. It is now the world's leading professional basketball competition, with 30 teams in the United States and Canada."
      },
      {
        "question": "In basketball, what name is given to a shot in which a player jumps and scores by putting the ball directly down through the hoop?",
        "answer": "A slam dunk",
        "explanation": "A dunk, or slam dunk, is worth two points, like any other field goal made from inside the three-point line. It has been part of the game for decades, was briefly banned in American college basketball in the late 1960s, and is now one of the sport's most popular plays."
      },
      {
        "question": "What is the name of the Major League Baseball championship series, traditionally played in October?",
        "answer": "The World Series",
        "explanation": "The World Series is a best-of-seven series between the champions of the American League and the National League. It has been played, with a few interruptions, since 1903, and despite the name it is a championship of the North American major leagues, not a true world championship."
      },
      {
        "question": "In 1947, which player became the first African American in the modern era of Major League Baseball, with the Brooklyn Dodgers?",
        "answer": "Jackie Robinson",
        "explanation": "Robinson's debut, on 15 April 1947, ended a decades-long colour bar in the major leagues. He won Rookie of the Year that season, later became a league most valuable player, and was inducted into the Baseball Hall of Fame. His number, 42, is now retired across MLB."
      },
      {
        "question": "What is the name of the trophy awarded to the NHL playoff champion?",
        "answer": "The Stanley Cup",
        "explanation": "The Stanley Cup was first presented in 1893, originally to amateur champions in Canada, and it later became the prize of the National Hockey League playoffs. It is unusual among major team trophies in that the same physical cup is passed from winner to winner, and players' names are engraved on it."
      },
      {
        "question": "What is the name of the rubber disc used instead of a ball in ice hockey?",
        "answer": "A puck",
        "explanation": "A standard ice-hockey puck is a hard rubber disc, about 7.6 centimetres across and 2.5 centimetres thick, and it is frozen before play so that it slides more evenly. Players may shoot it at well over 150 kilometres an hour, which is why goalies wear so much protection."
      },
      {
        "question": "What unofficial name is given to the annual NCAA Division I basketball tournament in the United States?",
        "answer": "March Madness",
        "explanation": "March Madness refers to the burst of knockout games, usually in March and early April, that decides the national college champion. Both the men's and women's tournaments are now widely known by the name, and the early rounds are famous for upsets."
      },
      {
        "question": "Michael Jordan won six NBA championships in the 1990s, all with which team?",
        "answer": "The Chicago Bulls",
        "explanation": "Jordan's Bulls won two batches of three titles in a row, in 1991–93 and 1996–98, with Scottie Pippen as his long-time teammate and Phil Jackson as coach. Jordan himself is widely regarded as one of the greatest basketball players, and the Bulls' run is one of the league's defining dynasties."
      }
    ]
  },
  {
    "id": "australian-legends",
    "title": "Australian Sporting Legends",
    "emoji": "⭐",
    "intro": "Australia has produced more than its share of sporting greats, from Bradman and Laver to Freeman and Bradbury. The ten below are finished stories: careers, medals and moments that are already part of the record.",
    "questions": [
      {
        "question": "What was Don Bradman's Test batting average, famously just short of 100?",
        "answer": "99.94",
        "explanation": "Bradman needed only four runs in his final Test innings, at The Oval in 1948, to finish with an average of 100. He was out second ball for a duck, and the average settled at 99.94, a figure that has become one of the most famous in all sport."
      },
      {
        "question": "Which Australian tennis player is the only person to have won a calendar-year Grand Slam twice, in 1962 and 1969?",
        "answer": "Rod Laver",
        "explanation": "Laver's first calendar Slam came as an amateur in 1962, and his second in 1969, after the start of the Open Era. No other player, man or woman, has won all four majors in a calendar year more than once, and no man has done it in the Open Era besides Laver."
      },
      {
        "question": "Which Australian athlete won the women's 400 metres at the Sydney 2000 Olympics, having also lit the Olympic cauldron at the opening ceremony?",
        "answer": "Cathy Freeman",
        "explanation": "Freeman ran the final in a suit that became one of the images of the Games, and she won in 49.11 seconds. She was the first Indigenous Australian to win an individual Olympic gold in athletics, and the victory, in front of a home crowd, is still widely remembered."
      },
      {
        "question": "Which Australian swimmer won the 100 metres freestyle at three successive Olympics, in 1956, 1960 and 1964?",
        "answer": "Dawn Fraser",
        "explanation": "Fraser is one of the few swimmers to have won the same Olympic event three times in a row. She also collected gold in the 4 × 100 metres freestyle relay in 1956 and 1960, and she later became one of Australia's most recognisable sporting figures."
      },
      {
        "question": "Which Australian swimmer, nicknamed the Thorpedo, won five Olympic gold medals?",
        "answer": "Ian Thorpe",
        "explanation": "Thorpe burst onto the scene as a teenager and dominated the freestyle events at the 2000 Sydney Olympics and the 2004 Athens Games. His five golds, three of them in world-record swims in Sydney, made him one of Australia's most successful Olympians."
      },
      {
        "question": "Which Indigenous Australian tennis player won Wimbledon in 1971 and again in 1980?",
        "answer": "Evonne Goolagong Cawley",
        "explanation": "Goolagong Cawley also won four Australian Opens and a French Open, and she was a graceful, popular champion on tour in the 1970s. The 1980 Wimbledon title came after she had become a mother, and she remains one of the country's greatest tennis players."
      },
      {
        "question": "Which Australian leg-spinner famously bowled Mike Gatting with the 'Ball of the Century' in 1993?",
        "answer": "Shane Warne",
        "explanation": "It was the first ball of Warne's Ashes career, at Old Trafford, and it drifted, pitched outside leg stump and spun back to clip the off bail. Warne went on to take 708 Test wickets and to become, for many people, the greatest wrist-spinner the game has seen."
      },
      {
        "question": "Which Australian racing driver won the Formula 1 world championship in 1966 in a car built by his own team?",
        "answer": "Jack Brabham",
        "explanation": "Sir Jack Brabham had already won titles in 1959 and 1960. In 1966 he became the only driver so far to win the championship in a car bearing his own name, a Brabham-Repco, and he remains one of the central figures in Australia's motor-racing history."
      },
      {
        "question": "Which Australian became the first Winter Olympic gold medallist from the Southern Hemisphere, in short-track speed skating at Salt Lake City in 2002?",
        "answer": "Steven Bradbury",
        "explanation": "Bradbury reached the 1,000 metres final after other skaters were disqualified or fell in the earlier rounds. In the final he was well behind until the four leaders crashed on the last corner, and he skated through to win gold, a story still told whenever underdogs are discussed."
      },
      {
        "question": "Which champion New Zealand-bred racehorse, a hero of the Depression years, won the 1930 Melbourne Cup and is now preserved at Melbourne Museum?",
        "answer": "Phar Lap",
        "explanation": "Phar Lap won 37 of his 51 races and became a public favourite at a time when Australia was in economic hardship. He died in California in 1932, in circumstances that have never been fully settled. His hide is on display at Melbourne Museum, and his heart is held by the National Museum of Australia in Canberra."
      }
    ]
  },
  {
    "id": "records-oddities",
    "title": "Records and Oddities",
    "emoji": "🏆",
    "intro": "Some sporting stories are so strange, or so clearly finished, that they make perfect quiz questions. This last round is a mix of famous records and one-off moments, all of them safely in the past.",
    "questions": [
      {
        "question": "At the 1968 Mexico City Olympics, which American long jumper set a world record of 8.90 metres that stood for almost 23 years?",
        "answer": "Bob Beamon",
        "explanation": "Beamon's jump, helped by Mexico City's altitude and a following wind, was so far beyond the existing record that the optical measuring device could not initially reach it. Mike Powell finally broke the world record in 1991, but Beamon's mark remains one of the great Olympic shocks."
      },
      {
        "question": "Which Romanian gymnast was the first to be awarded a perfect 10 at the Olympic Games, in Montreal in 1976?",
        "answer": "Nadia Comăneci",
        "explanation": "Comăneci was 14 when she scored the first official 10.00, on the uneven bars. The scoreboard was not designed to show a 10 and displayed 1.00 instead, which only added to the drama. She went on to collect seven perfect tens and three gold medals at those Games."
      },
      {
        "question": "At the 1980 Winter Olympics, the United States ice hockey team beat the heavily favoured Soviet Union in a game later known as what?",
        "answer": "The Miracle on Ice",
        "explanation": "The game was played at Lake Placid on 22 February 1980. A team of American college players beat a Soviet side that had been the dominant force in international hockey, 4–3, and the United States went on to win the gold medal by beating Finland in the final."
      },
      {
        "question": "Which Jamaican sprinter set a 100 metres world record of 9.58 seconds at the 2009 World Championships in Berlin?",
        "answer": "Usain Bolt",
        "explanation": "Bolt had already won Olympic gold in Beijing the year before, but the 9.58 in Berlin, run in a fair wind, remains the fastest official time in history. He also set the 200 metres world record of 19.19 seconds at the same championships."
      },
      {
        "question": "Which high-jump technique, first used to win Olympic gold in 1968, is now the standard in the event?",
        "answer": "The Fosbury Flop",
        "explanation": "Dick Fosbury, an American, popularised the method of going over the bar head-first and on the back, and he won gold with it in Mexico City. Within a few years almost every serious jumper had adopted the flop, and the older straddle and scissors techniques had faded from the top of the sport."
      },
      {
        "question": "In a one-day international in 1981, which Australian bowler delivered the infamous underarm ball, on the instruction of his captain and brother?",
        "answer": "Trevor Chappell",
        "explanation": "The match was against New Zealand at the MCG. With one ball left and New Zealand needing six to tie, Greg Chappell instructed his younger brother Trevor to roll the ball along the ground, making a six almost impossible. The tactic was legal at the time but caused an uproar, and underarm bowling of that kind was soon banned."
      },
      {
        "question": "Which British ski jumper became a cult figure at the 1988 Calgary Winter Olympics, finishing last in both his events but winning fans for his enthusiasm?",
        "answer": "Eddie the Eagle",
        "explanation": "Eddie Edwards, a plasterer from Cheltenham, was the first Olympic ski jumper to represent Britain in decades. He finished last in the 70 metres and 90 metres, but his cheerful approach made him one of the stars of those Games, and he later became the subject of a feature film."
      },
      {
        "question": "First contested in 1851, what is often called the oldest international sporting trophy still being awarded?",
        "answer": "The America's Cup",
        "explanation": "The trophy takes its name from the yacht America, which won a race around the Isle of Wight in 1851. It was later deeded as a challenge cup and has been contested by yachts representing yacht clubs, rather than countries as such, ever since, with long and sometimes bitter campaigns to win it back."
      },
      {
        "question": "Muhammad Ali regained the heavyweight title in 1974 by beating George Foreman in Kinshasa, in a fight known as what?",
        "answer": "The Rumble in the Jungle",
        "explanation": "The bout was held in what was then Zaire, now the Democratic Republic of the Congo, and was promoted by Don King. Ali, the underdog, used the 'rope-a-dope' tactic, absorbing punches on the ropes before knocking Foreman out in the eighth round, and the fight became one of boxing's most famous nights."
      },
      {
        "question": "In 1973, which tennis player defeated Bobby Riggs in the widely televised 'Battle of the Sexes'?",
        "answer": "Billie Jean King",
        "explanation": "Riggs, a former Wimbledon champion well past his prime, had beaten Margaret Court earlier that year and had claimed that a top woman could not beat him. King won in three straight sets, 6–4, 6–3, 6–3, in front of a huge television audience, and the match became a landmark in women's sport."
      }
    ]
  }
]

export const SPORTS80_TOTAL = SPORTS80_SECTIONS.reduce(
  (sum, section) => sum + section.questions.length,
  0
)

