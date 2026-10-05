// pages/science-quiz.tsx
import Head from 'next/head'
import Link from 'next/link'

const PAGE_URL =
  'https://www.dailymindsprint.com/science-quiz'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Free Science Quiz | Mind Sprint',
  url: PAGE_URL,
  description:
    'Test your science knowledge with a free quiz covering biology, chemistry, physics, Earth science, space and the human body.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Mind Sprint',
    url: 'https://www.dailymindsprint.com/',
  },
}

export default function ScienceQuizPage() {
  return (
    <>
      <Head>
        <title>
          Free Science Quiz | Mind Sprint
        </title>

        <meta
          name="description"
          content="Take a free science quiz covering biology, chemistry, physics, Earth science, space and the human body with 10 multiple-choice questions."
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
          content="Free Science Quiz | Mind Sprint"
        />

        <meta
          property="og:description"
          content="Test your science knowledge with questions covering biology, chemistry, physics, Earth science and space."
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
            🔬
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
            Free Science Quiz
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
            biology, chemistry,
            physics, Earth science,
            space and the human body
            with Mind Sprint&apos;s
            Science Challenge.
          </p>

          <Link
            href="/puzzle/1?challenge=6"
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
              Start Science Quiz
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
            Test Your Science Knowledge
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Science helps explain how
            the natural world works,
            from the smallest parts of
            matter to planets, stars,
            living organisms and the
            forces that shape our
            environment.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Mind Sprint&apos;s Science
            Challenge mixes questions
            from several areas of
            science rather than
            focusing on a single
            subject. One question may
            test biology while the
            next moves into chemistry,
            physics, Earth science or
            astronomy.
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
                🧬 Biology &amp; Human Body
              </h3>

              <p
                style={{
                  color: '#666',
                  lineHeight: 1.6,
                  marginBottom: 0,
                }}
              >
                Cells, organs, plants,
                genetics and the
                systems that keep
                living things
                functioning.
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
                ⚛️ Chemistry &amp; Physics
              </h3>

              <p
                style={{
                  color: '#666',
                  lineHeight: 1.6,
                  marginBottom: 0,
                }}
              >
                Elements, molecules,
                forces, energy, light
                and other fundamental
                science concepts.
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
                🌍 Earth &amp; Space
              </h3>

              <p
                style={{
                  color: '#666',
                  lineHeight: 1.6,
                  marginBottom: 0,
                }}
              >
                Earth&apos;s structure,
                geology, weather,
                planets, galaxies and
                our place in the Solar
                System.
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
            How the Science Challenge
            Works
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            The Science Challenge
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
            After answering, Mind
            Sprint also shows a short
            &quot;Did You Know?&quot;
            fact connected to the
            question, giving you an
            extra piece of information
            as you play.
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
            Why Play a Science Quiz?
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Science quizzes are a fun
            way to check how much you
            remember about the world
            around you while exploring
            a wide range of subjects.
            They can test both factual
            knowledge and your ability
            to connect scientific
            ideas.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Because the Mind Sprint
            Science Challenge covers
            different areas, you might
            answer a question about the
            human body, then move on to
            forces, chemical elements,
            earthquakes or the Solar
            System.
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
            Fresh Science Questions
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
            Science Challenge changes
            from day to day. Returning
            players can test
            themselves again without
            always receiving the same
            group of questions.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Science is one of seven
            Mind Sprint categories,
            alongside General
            Knowledge, Word &amp;
            Language, Pop Culture,
            History, Smart Numbers and
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
            Ready to Test Your Science
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
            Take 10 science questions
            and see if you can score
            at least 8 out of 10.
          </p>

          <Link
            href="/puzzle/1?challenge=6"
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
              Start the Science Quiz
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
              href="/history-quiz"
              legacyBehavior
            >
              <a
                style={{
                  color: '#000',
                  textDecoration:
                    'underline',
                }}
              >
                History Quiz
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
