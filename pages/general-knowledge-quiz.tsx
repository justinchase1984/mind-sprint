// pages/general-knowledge-quiz.tsx
import Head from 'next/head'
import Link from 'next/link'

const PAGE_URL =
  'https://www.dailymindsprint.com/general-knowledge-quiz'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Free General Knowledge Quiz | Mind Sprint',
  url: PAGE_URL,
  description:
    'Test your knowledge with a free general knowledge quiz covering a broad mix of facts, places, people, culture, science, history and everyday knowledge.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Mind Sprint',
    url: 'https://www.dailymindsprint.com/',
  },
}

export default function GeneralKnowledgeQuizPage() {
  return (
    <>
      <Head>
        <title>
          Free General Knowledge Quiz | Mind Sprint
        </title>

        <meta
          name="description"
          content="Test your knowledge with a free general knowledge quiz covering facts, places, people, culture, science, history and everyday knowledge."
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
          content="Free General Knowledge Quiz | Mind Sprint"
        />

        <meta
          property="og:description"
          content="Try Mind Sprint's free general knowledge quiz and test yourself across a broad mix of interesting topics."
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
            🌍
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
            Free General Knowledge Quiz
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
            Test yourself across a
            broad mix of interesting
            facts, places, people,
            culture and everyday
            knowledge with Mind
            Sprint&apos;s General
            Knowledge Challenge.
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
              Start General Knowledge Quiz
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
            Test Your General Knowledge
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            General knowledge is all
            about the broad collection
            of facts and information
            you pick up from everyday
            life, education, reading,
            travel, entertainment and
            curiosity.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Mind Sprint&apos;s General
            Knowledge Challenge mixes
            questions from a variety
            of subjects rather than
            focusing on just one area.
            You might be tested on a
            capital city in one
            question, a famous person
            in the next, followed by a
            question about science,
            culture or the world
            around you.
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
                🌎 Places &amp; World Facts
              </h3>

              <p
                style={{
                  color: '#666',
                  lineHeight: 1.6,
                  marginBottom: 0,
                }}
              >
                Countries, cities,
                famous landmarks and
                interesting facts from
                around the world.
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
                📚 Everyday Knowledge
              </h3>

              <p
                style={{
                  color: '#666',
                  lineHeight: 1.6,
                  marginBottom: 0,
                }}
              >
                Familiar facts and
                useful knowledge that
                can come from school,
                work, reading and
                everyday life.
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
                🧠 Mixed Trivia
              </h3>

              <p
                style={{
                  color: '#666',
                  lineHeight: 1.6,
                  marginBottom: 0,
                }}
              >
                A varied selection of
                questions designed to
                keep the challenge
                unpredictable and
                interesting.
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
            How the General Knowledge
            Challenge Works
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            The General Knowledge
            Challenge contains 10
            multiple-choice questions.
            You choose one answer for
            each question and receive
            immediate feedback before
            moving on.
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
            fact related to the
            question. This adds a
            little extra information
            whether you answered
            correctly or not.
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
            Why Play a General
            Knowledge Quiz?
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            General knowledge quizzes
            are a simple way to test
            what you already know,
            discover gaps in your
            knowledge and learn
            interesting new facts
            along the way.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Because the questions span
            many different subjects,
            you cannot rely on
            expertise in just one
            topic. That makes general
            knowledge trivia a fun way
            to challenge recall and
            curiosity at the same
            time.
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
            Fresh General Knowledge
            Questions Every Day
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Mind Sprint uses rotating
            question sets, so the
            General Knowledge
            Challenge changes from day
            to day. Returning players
            can test themselves again
            without always seeing the
            same group of questions.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Once you finish General
            Knowledge, you can continue
            through Word &amp;
            Language, Pop Culture,
            History, Smart Numbers,
            Science and Geography.
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
            Ready to Test Yourself?
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
            Start with 10 general
            knowledge questions and
            see if you can score at
            least 8 out of 10.
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
              Start the Quiz
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
            Want to know more about
            Mind Sprint?
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
