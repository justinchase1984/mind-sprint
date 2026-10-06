// pages/index.tsx
import Head from 'next/head'
import Link from 'next/link'

const SITE_URL =
  'https://www.dailymindsprint.com/'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id':
        'https://www.dailymindsprint.com/#organization',
      name: 'Mind Sprint',
      url: SITE_URL,
    },
    {
      '@type': 'WebSite',
      '@id':
        'https://www.dailymindsprint.com/#website',
      url: SITE_URL,
      name: 'Mind Sprint',
      publisher: {
        '@id':
          'https://www.dailymindsprint.com/#organization',
      },
    },
    {
      '@type': 'WebPage',
      '@id':
        'https://www.dailymindsprint.com/#webpage',
      url: SITE_URL,
      name:
        'Free Daily General Knowledge Quiz | Mind Sprint',
      description:
        'Play a free daily general knowledge quiz with 7 challenges and 70 questions covering trivia, history, science, geography, words, numbers and pop culture.',
      isPartOf: {
        '@id':
          'https://www.dailymindsprint.com/#website',
      },
      about: {
        '@id':
          'https://www.dailymindsprint.com/#organization',
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Free Daily General Knowledge Quiz | Mind Sprint
        </title>

        <meta
          name="description"
          content="Play a free daily general knowledge quiz with 7 challenges and 70 questions covering trivia, history, science, geography, words, numbers and pop culture."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href={SITE_URL}
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="Mind Sprint"
        />

        <meta
          property="og:title"
          content="Free Daily General Knowledge Quiz | Mind Sprint"
        />

        <meta
          property="og:description"
          content="Test yourself with 7 free daily quiz challenges covering general knowledge, history, science, geography, words, numbers and pop culture."
        />

        <meta
          property="og:url"
          content={SITE_URL}
        />

        <meta
          name="twitter:card"
          content="summary"
        />

        <meta
          name="twitter:title"
          content="Free Daily General Knowledge Quiz | Mind Sprint"
        />

        <meta
          name="twitter:description"
          content="Play 7 free daily quiz challenges and test your general knowledge, history, science, geography, words, numbers and pop culture."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                structuredData
              ),
          }}
        />
      </Head>

      <main>
        {/* Hero */}
        <section
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding:
              '4rem 1rem 2.5rem',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize:
                'clamp(36px, 5vw, 48px)',
              margin:
                '0 0 0.65rem',
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            🧠 Mind Sprint
          </h1>

          <p
            style={{
              fontSize:
                'clamp(20px, 3vw, 27px)',
              fontWeight: 600,
              color: '#222',
              margin:
                '0 0 1rem',
              lineHeight: 1.3,
            }}
          >
            Free Daily General Knowledge Quiz
          </p>

          <p
            style={{
              fontSize:
                'clamp(16px, 2.2vw, 18px)',
              color: '#555',
              lineHeight: 1.6,
              maxWidth: 660,
              margin:
                '0 auto 1.75rem',
            }}
          >
            Seven quick challenges.
            70 questions. Test your
            knowledge across general
            knowledge, words, pop
            culture, history, numbers,
            science and geography —
            with fresh question sets
            every day.
          </p>

          <Link
            href="/puzzle/1?challenge=1"
            legacyBehavior
          >
            <a
              style={{
                display:
                  'inline-block',
                padding:
                  '12px 26px',
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: 6,
                border:
                  '1px solid #000',
                background: '#111',
                color: '#fff',
                textDecoration:
                  'none',
              }}
            >
              Start Today&apos;s Quiz
            </a>
          </Link>

          <p
            style={{
              marginTop: '1rem',
              fontSize: 13,
              color: '#777',
            }}
          >
            Free to play · No account
            required
          </p>
        </section>

        {/* Quick overview */}
        <section
          style={{
            maxWidth: 900,
            margin: '0 auto',
            padding: '1rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            <div
              style={{
                border:
                  '1px solid #e6e6e6',
                borderRadius: 10,
                padding: '1.25rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: 24,
                }}
              >
                🎯
              </div>

              <h2
                style={{
                  fontSize: 18,
                  marginBottom: 6,
                }}
              >
                7 Daily Quiz Challenges
              </h2>

              <p
                style={{
                  color: '#666',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Work through seven
                different quiz
                categories and test a
                broad mix of knowledge
                and skills.
              </p>
            </div>

            <div
              style={{
                border:
                  '1px solid #e6e6e6',
                borderRadius: 10,
                padding: '1.25rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: 24,
                }}
              >
                🧩
              </div>

              <h2
                style={{
                  fontSize: 18,
                  marginBottom: 6,
                }}
              >
                70 Questions
              </h2>

              <p
                style={{
                  color: '#666',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Each challenge contains
                10 multiple-choice
                questions, with one
                question shown at a
                time.
              </p>
            </div>

            <div
              style={{
                border:
                  '1px solid #e6e6e6',
                borderRadius: 10,
                padding: '1.25rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: 24,
                }}
              >
                🔄
              </div>

              <h2
                style={{
                  fontSize: 18,
                  marginBottom: 6,
                }}
              >
                Fresh Every Day
              </h2>

              <p
                style={{
                  color: '#666',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Question sets rotate
                daily so there is
                something different to
                test yourself on when
                you return.
              </p>
            </div>
          </div>
        </section>

        {/* Quiz topics */}
        <section
          style={{
            maxWidth: 900,
            margin: '0 auto',
            padding:
              '2.75rem 1rem 2rem',
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              marginBottom:
                '0.75rem',
            }}
          >
            What&apos;s in the Daily
            Quiz?
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.7,
              maxWidth: 700,
              margin:
                '0 auto 1.5rem',
              textAlign: 'center',
            }}
          >
            Mind Sprint combines seven
            different quiz categories
            so you are not answering
            the same type of question
            every round.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '1rem',
            }}
          >
            <Link
              href="/general-knowledge-quiz"
              legacyBehavior
            >
              <a
                style={{
                  color: 'inherit',
                  textDecoration:
                    'none',
                  display: 'block',
                }}
              >
                <div
                  style={{
                    border:
                      '1px solid #e6e6e6',
                    borderRadius: 10,
                    padding: '1rem',
                    height: '100%',
                    boxSizing:
                      'border-box',
                    cursor: 'pointer',
                  }}
                >
                  <strong>
                    🌍 General Knowledge
                  </strong>

                  <p
                    style={{
                      color: '#666',
                      lineHeight: 1.5,
                      marginBottom: 0,
                    }}
                  >
                    A broad mix of
                    facts, places,
                    people, culture and
                    everyday
                    knowledge.
                  </p>
                </div>
              </a>
            </Link>

            <Link
              href="/word-language-quiz"
              legacyBehavior
            >
              <a
                style={{
                  color: 'inherit',
                  textDecoration:
                    'none',
                  display: 'block',
                }}
              >
                <div
                  style={{
                    border:
                      '1px solid #e6e6e6',
                    borderRadius: 10,
                    padding: '1rem',
                    height: '100%',
                    boxSizing:
                      'border-box',
                    cursor: 'pointer',
                  }}
                >
                  <strong>
                    🔤 Word &amp; Language
                  </strong>

                  <p
                    style={{
                      color: '#666',
                      lineHeight: 1.5,
                      marginBottom: 0,
                    }}
                  >
                    Vocabulary, spelling,
                    grammar, meanings and
                    language reasoning.
                  </p>
                </div>
              </a>
            </Link>

            <div
              style={{
                border:
                  '1px solid #e6e6e6',
                borderRadius: 10,
                padding: '1rem',
              }}
            >
              <strong>
                🎬 Pop Culture
              </strong>

              <p
                style={{
                  color: '#666',
                  lineHeight: 1.5,
                  marginBottom: 0,
                }}
              >
                Movies, television,
                music and familiar
                entertainment trivia.
              </p>
            </div>

            <Link
              href="/history-quiz"
              legacyBehavior
            >
              <a
                style={{
                  color: 'inherit',
                  textDecoration:
                    'none',
                  display: 'block',
                }}
              >
                <div
                  style={{
                    border:
                      '1px solid #e6e6e6',
                    borderRadius: 10,
                    padding: '1rem',
                    height: '100%',
                    boxSizing:
                      'border-box',
                    cursor: 'pointer',
                  }}
                >
                  <strong>
                    🏛️ History
                  </strong>

                  <p
                    style={{
                      color: '#666',
                      lineHeight: 1.5,
                      marginBottom: 0,
                    }}
                  >
                    Major events,
                    civilizations,
                    leaders and moments
                    from the past.
                  </p>
                </div>
              </a>
            </Link>

            <div
              style={{
                border:
                  '1px solid #e6e6e6',
                borderRadius: 10,
                padding: '1rem',
              }}
            >
              <strong>
                🔢 Smart Numbers
              </strong>

              <p
                style={{
                  color: '#666',
                  lineHeight: 1.5,
                  marginBottom: 0,
                }}
              >
                Mental maths,
                percentages,
                sequences, ratios and
                number problems.
              </p>
            </div>

            <Link
              href="/science-quiz"
              legacyBehavior
            >
              <a
                style={{
                  color: 'inherit',
                  textDecoration:
                    'none',
                  display: 'block',
                }}
              >
                <div
                  style={{
                    border:
                      '1px solid #e6e6e6',
                    borderRadius: 10,
                    padding: '1rem',
                    height: '100%',
                    boxSizing:
                      'border-box',
                    cursor: 'pointer',
                  }}
                >
                  <strong>
                    🔬 Science
                  </strong>

                  <p
                    style={{
                      color: '#666',
                      lineHeight: 1.5,
                      marginBottom: 0,
                    }}
                  >
                    Biology, chemistry,
                    physics, Earth
                    science and
                    astronomy.
                  </p>
                </div>
              </a>
            </Link>

            <Link
              href="/geography-quiz"
              legacyBehavior
            >
              <a
                style={{
                  color: 'inherit',
                  textDecoration:
                    'none',
                  display: 'block',
                }}
              >
                <div
                  style={{
                    border:
                      '1px solid #e6e6e6',
                    borderRadius: 10,
                    padding: '1rem',
                    height: '100%',
                    boxSizing:
                      'border-box',
                    cursor: 'pointer',
                  }}
                >
                  <strong>
                    🗺️ Geography
                  </strong>

                  <p
                    style={{
                      color: '#666',
                      lineHeight: 1.5,
                      marginBottom: 0,
                    }}
                  >
                    Countries, capitals,
                    landmarks, rivers,
                    mountains and world
                    geography.
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </section>

        {/* How it works */}
        <section
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding:
              '2.5rem 1rem',
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              marginBottom: '1rem',
            }}
          >
            How the Mind Sprint Daily
            Quiz Works
          </h2>

          <ol
            style={{
              lineHeight: 1.8,
              color: '#333',
              maxWidth: 620,
              margin: '0 auto',
            }}
          >
            <li>
              Start Challenge 1 and
              answer 10 quick
              multiple-choice
              questions.
            </li>

            <li>
              Get instant feedback and
              see a short
              &quot;Did You
              Know?&quot; fact after
              each answer.
            </li>

            <li>
              Finish the challenge to
              see your score and
              streak.
            </li>

            <li>
              Score at least 8 out of
              10 to unlock the next
              challenge.
            </li>

            <li>
              Complete all seven
              challenges or return the
              next day for a fresh
              question rotation.
            </li>
          </ol>

          <p
            style={{
              textAlign: 'center',
              marginTop: '1.5rem',
            }}
          >
            <Link
              href="/how-it-works"
              legacyBehavior
            >
              <a
                style={{
                  color: '#000',
                  textDecoration:
                    'underline',
                }}
              >
                Learn more about how
                Mind Sprint works
              </a>
            </Link>
          </p>
        </section>

        {/* Why play */}
        <section
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding: '2rem 1rem',
          }}
        >
          <h2
            style={{
              textAlign: 'center',
            }}
          >
            A Free Daily Brain
            Challenge
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.7,
            }}
          >
            Mind Sprint is designed
            for people who enjoy
            trivia, general knowledge
            questions and short mental
            challenges. Instead of one
            long test, the quiz is
            broken into quick rounds
            that can be played one at
            a time or completed in a
            longer session.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: 1.7,
            }}
          >
            The mix of categories
            gives you opportunities to
            practise recall,
            vocabulary, mental
            arithmetic and general
            knowledge without needing
            to download an app or
            create an account.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: 1.7,
            }}
          >
            Scores and streaks add a
            simple way to track how
            you perform while the
            daily rotation keeps the
            experience changing for
            returning players.
          </p>

          <p
            style={{
              textAlign: 'center',
              marginTop: '1.5rem',
            }}
          >
            <Link
              href="/brain-training"
              legacyBehavior
            >
              <a
                style={{
                  color: '#000',
                  textDecoration:
                    'underline',
                }}
              >
                Read about Mind Sprint
                and brain training
              </a>
            </Link>
          </p>
        </section>

        {/* Weekly draw */}
        <section
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding: '2rem 1rem',
            textAlign: 'center',
          }}
        >
          <h2>
            🎁 Weekly Prize Draw —
            Coming Soon
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.7,
              maxWidth: 650,
              margin: '0 auto',
            }}
          >
            Mind Sprint is preparing a
            weekly promotional prize
            draw. When the draw
            officially launches,
            eligible players will be
            able to earn one entry for
            each different Mind Sprint
            challenge they complete
            during the weekly entry
            period, up to seven
            entries.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: 1.7,
              maxWidth: 650,
              margin:
                '1rem auto 0',
            }}
          >
            The first official weekly
            draw will begin only when
            Mind Sprint announces on
            the website that entries
            are open. Challenge
            completions made before
            that launch will not count
            as prize draw entries.
          </p>

          <p
            style={{
              marginTop: '1rem',
            }}
          >
            <Link
              href="/weekly-prize-draw-terms"
              legacyBehavior
            >
              <a
                style={{
                  color: '#000',
                  textDecoration:
                    'underline',
                }}
              >
                View Planned Prize
                Draw Terms
              </a>
            </Link>
          </p>
        </section>

        {/* FAQ */}
        <section
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding:
              '2.5rem 1rem',
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              marginBottom:
                '1.5rem',
            }}
          >
            Daily Quiz Questions
          </h2>

          <div
            style={{
              marginBottom:
                '1.5rem',
            }}
          >
            <h3>
              Is Mind Sprint free?
            </h3>

            <p
              style={{
                color: '#555',
                lineHeight: 1.7,
              }}
            >
              Yes. Mind Sprint is free
              to play and you do not
              need an account to start
              the daily quiz.
            </p>
          </div>

          <div
            style={{
              marginBottom:
                '1.5rem',
            }}
          >
            <h3>
              How many questions are
              in the daily quiz?
            </h3>

            <p
              style={{
                color: '#555',
                lineHeight: 1.7,
              }}
            >
              There are seven
              challenges with 10
              questions in each,
              giving you up to 70
              questions across a full
              Mind Sprint run.
            </p>
          </div>

          <div
            style={{
              marginBottom:
                '1.5rem',
            }}
          >
            <h3>
              What quiz topics are
              included?
            </h3>

            <p
              style={{
                color: '#555',
                lineHeight: 1.7,
              }}
            >
              The seven categories are
              General Knowledge, Word
              &amp; Language, Pop
              Culture, History, Smart
              Numbers, Science and
              Geography.
            </p>
          </div>

          <div>
            <h3>
              How often do the
              questions change?
            </h3>

            <p
              style={{
                color: '#555',
                lineHeight: 1.7,
              }}
            >
              Mind Sprint rotates its
              question sets every day,
              giving returning players
              a different combination
              of questions to tackle.
            </p>
          </div>

          <p
            style={{
              textAlign: 'center',
              marginTop: '1.5rem',
            }}
          >
            <Link
              href="/faq"
              legacyBehavior
            >
              <a
                style={{
                  color: '#000',
                  textDecoration:
                    'underline',
                }}
              >
                View the full Mind
                Sprint FAQ
              </a>
            </Link>
          </p>
        </section>

        {/* Explore */}
        <section
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding:
              '2rem 1rem 4rem',
            textAlign: 'center',
          }}
        >
          <h2>
            Explore Mind Sprint
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.7,
              marginBottom:
                '1.25rem',
            }}
          >
            Learn more about the daily
            quiz, brain challenges and
            how Mind Sprint works.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent:
                'center',
              gap: '1rem',
            }}
          >
            <Link
              href="/how-it-works"
              legacyBehavior
            >
              <a
                style={{
                  color: '#000',
                  textDecoration:
                    'underline',
                }}
              >
                How It Works
              </a>
            </Link>

            <Link
              href="/brain-training"
              legacyBehavior
            >
              <a
                style={{
                  color: '#000',
                  textDecoration:
                    'underline',
                }}
              >
                Brain Training
              </a>
            </Link>

            <Link
              href="/faq"
              legacyBehavior
            >
              <a
                style={{
                  color: '#000',
                  textDecoration:
                    'underline',
                }}
              >
                FAQ
              </a>
            </Link>

            <Link
              href="/about"
              legacyBehavior
            >
              <a
                style={{
                  color: '#000',
                  textDecoration:
                    'underline',
                }}
              >
                About Mind Sprint
              </a>
            </Link>

            <Link
              href="/contact"
              legacyBehavior
            >
              <a
                style={{
                  color: '#000',
                  textDecoration:
                    'underline',
                }}
              >
                Contact
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
