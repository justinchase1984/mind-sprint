// pages/history-quiz.tsx
import Head from 'next/head'
import Link from 'next/link'

const PAGE_URL =
  'https://www.dailymindsprint.com/history-quiz'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Free History Quiz | Mind Sprint',
  url: PAGE_URL,
  description:
    'Test your history knowledge with a free quiz covering major events, ancient civilizations, famous leaders, wars, discoveries and important moments from the past.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Mind Sprint',
    url: 'https://www.dailymindsprint.com/',
  },
}

export default function HistoryQuizPage() {
  return (
    <>
      <Head>
        <title>
          Free History Quiz | Mind Sprint
        </title>

        <meta
          name="description"
          content="Take a free history quiz covering major events, ancient civilizations, famous leaders, wars, discoveries and important moments from the past."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href={PAGE_URL}
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="Free History Quiz | Mind Sprint"
        />

        <meta
          property="og:description"
          content="Test your history knowledge with 10 multiple-choice questions covering civilizations, leaders, conflicts and major events."
        />

        <meta
          property="og:url"
          content={PAGE_URL}
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
          <div
            style={{
              fontSize: 42,
              marginBottom: 10,
            }}
          >
            🏛️
          </div>

          <h1
            style={{
              fontSize:
                'clamp(32px, 5vw, 46px)',
              margin:
                '0 0 1rem',
              lineHeight: 1.15,
            }}
          >
            Free History Quiz
          </h1>

          <p
            style={{
              fontSize:
                'clamp(16px, 2.2vw, 18px)',
              color: '#555',
              lineHeight: 1.7,
              maxWidth: 650,
              margin:
                '0 auto 1.75rem',
            }}
          >
            Test your knowledge of
            major events, ancient
            civilizations, famous
            leaders, conflicts and
            important moments from
            history with Mind
            Sprint&apos;s History
            Challenge.
          </p>

          <Link
            href="/puzzle/1?challenge=4"
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
              Start History Quiz
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

        {/* Overview */}
        <section
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding:
              '1.5rem 1rem',
          }}
        >
          <h2
            style={{
              textAlign: 'center',
            }}
          >
            Test Your History Knowledge
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            History helps us understand
            the people, events and
            decisions that shaped the
            world we live in today.
            From ancient civilizations
            to modern conflicts, there
            is always something new to
            remember or discover.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Mind Sprint&apos;s History
            Challenge draws from a
            variety of periods and
            places. Questions can cover
            rulers, wars, discoveries,
            political events,
            civilizations and major
            turning points from around
            the world.
          </p>
        </section>

        {/* What to expect */}
        <section
          style={{
            maxWidth: 900,
            margin: '0 auto',
            padding:
              '2rem 1rem',
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              marginBottom:
                '1.5rem',
            }}
          >
            What You Can Expect
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '1rem',
            }}
          >
            <div
              style={{
                border:
                  '1px solid #e6e6e6',
                borderRadius: 10,
                padding: '1.25rem',
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                }}
              >
                🏺 Ancient Civilizations
              </h3>

              <p
                style={{
                  color: '#666',
                  lineHeight: 1.6,
                  marginBottom: 0,
                }}
              >
                Ancient Egypt, Greece,
                Rome, Mesopotamia and
                other civilizations
                that helped shape human
                history.
              </p>
            </div>

            <div
              style={{
                border:
                  '1px solid #e6e6e6',
                borderRadius: 10,
                padding: '1.25rem',
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                }}
              >
                👑 Leaders &amp; Empires
              </h3>

              <p
                style={{
                  color: '#666',
                  lineHeight: 1.6,
                  marginBottom: 0,
                }}
              >
                Famous rulers,
                presidents, explorers
                and influential people
                from different eras.
              </p>
            </div>

            <div
              style={{
                border:
                  '1px solid #e6e6e6',
                borderRadius: 10,
                padding: '1.25rem',
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                }}
              >
                📜 Major Events
              </h3>

              <p
                style={{
                  color: '#666',
                  lineHeight: 1.6,
                  marginBottom: 0,
                }}
              >
                Revolutions, wars,
                discoveries and
                important events that
                changed countries and
                societies.
              </p>
            </div>
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
            }}
          >
            How the History Challenge
            Works
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            The History Challenge
            contains 10
            multiple-choice
            questions. Choose one
            answer for each question
            and receive immediate
            feedback before moving to
            the next one.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            After each answer, Mind
            Sprint also shows a short
            &quot;Did You Know?&quot;
            fact related to the
            question so you can pick
            up an extra piece of
            information as you play.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Score at least 8 out of 10
            to pass the challenge and
            continue through the rest
            of the Mind Sprint daily
            quiz.
          </p>
        </section>

        {/* Why play */}
        <section
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding:
              '2rem 1rem',
          }}
        >
          <h2
            style={{
              textAlign: 'center',
            }}
          >
            Why Play a History Quiz?
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            History quizzes can test
            both memory and
            understanding by asking
            you to connect people,
            places, dates and events.
            They are also a simple way
            to discover topics you may
            want to learn more about.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Because Mind Sprint mixes
            different historical
            periods together, you
            might move from the
            ancient world to the
            twentieth century within
            the same challenge.
          </p>
        </section>

        {/* Daily rotation */}
        <section
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding:
              '2rem 1rem',
          }}
        >
          <h2
            style={{
              textAlign: 'center',
            }}
          >
            Fresh History Questions
            Every Day
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Mind Sprint uses rotating
            question sets, so the
            History Challenge changes
            from day to day. Returning
            players can test their
            history knowledge again
            without always receiving
            the same set of questions.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            History is one of seven
            Mind Sprint categories,
            alongside General
            Knowledge, Word &amp;
            Language, Pop Culture,
            Smart Numbers, Science and
            Geography.
          </p>
        </section>

        {/* CTA */}
        <section
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding:
              '2.5rem 1rem',
            textAlign: 'center',
          }}
        >
          <h2>
            Ready to Test Your History
            Knowledge?
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.7,
              maxWidth: 620,
              margin:
                '0 auto 1.5rem',
            }}
          >
            Take 10 history questions
            and see if you can score
            at least 8 out of 10.
          </p>

          <Link
            href="/puzzle/1?challenge=4"
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
              Start the History Quiz
            </a>
          </Link>
        </section>

        {/* Internal links */}
        <section
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding:
              '1rem 1rem 4rem',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              color: '#666',
              lineHeight: 1.7,
            }}
          >
            Explore more of Mind
            Sprint
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent:
                'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <Link
              href="/"
              legacyBehavior
            >
              <a
                style={{
                  color: '#000',
                  textDecoration:
                    'underline',
                }}
              >
                Daily Quiz
              </a>
            </Link>

            <Link
              href="/general-knowledge-quiz"
              legacyBehavior
            >
              <a
                style={{
                  color: '#000',
                  textDecoration:
                    'underline',
                }}
              >
                General Knowledge Quiz
              </a>
            </Link>

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
          </div>
        </section>
      </main>
    </>
  )
}
