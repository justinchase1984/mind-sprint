// pages/smart-numbers-quiz.tsx
import Head from 'next/head'
import Link from 'next/link'

const PAGE_URL =
  'https://www.dailymindsprint.com/smart-numbers-quiz'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Free Smart Numbers Quiz | Mind Sprint',
  url: PAGE_URL,
  description:
    'Test your maths and number skills with a free quiz covering mental arithmetic, percentages, ratios, sequences and everyday number problems.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Mind Sprint',
    url: 'https://www.dailymindsprint.com/',
  },
}

export default function SmartNumbersQuizPage() {
  return (
    <>
      <Head>
        <title>
          Free Maths &amp; Numbers Quiz | Mind Sprint
        </title>

        <meta
          name="description"
          content="Take a free maths and numbers quiz covering mental arithmetic, percentages, ratios, sequences and everyday number problems."
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
          content="Free Maths & Numbers Quiz | Mind Sprint"
        />

        <meta
          property="og:description"
          content="Test your mental maths, percentages, ratios, sequences and number skills with Mind Sprint's Smart Numbers Challenge."
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
            🔢
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
            Free Smart Numbers Quiz
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
            Test your mental maths,
            percentages, ratios,
            sequences and everyday
            number skills with Mind
            Sprint&apos;s Smart
            Numbers Challenge.
          </p>

          <Link
            href="/puzzle/1?challenge=5"
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
              Start Smart Numbers Quiz
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
            Test Your Number Skills
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Numbers are part of
            everyday life, whether
            you are working out a
            percentage, comparing
            values, spotting a
            sequence or doing a quick
            calculation in your head.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Mind Sprint&apos;s Smart
            Numbers Challenge combines
            several types of number
            questions so you need to
            switch between mental
            arithmetic, patterns,
            ratios and practical
            problem solving.
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
                ➕ Mental Maths
              </h3>

              <p
                style={{
                  color: '#666',
                  lineHeight: 1.6,
                  marginBottom: 0,
                }}
              >
                Addition,
                subtraction,
                multiplication,
                division and quick
                calculations without
                lengthy working.
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
                % Percentages &amp;
                Ratios
              </h3>

              <p
                style={{
                  color: '#666',
                  lineHeight: 1.6,
                  marginBottom: 0,
                }}
              >
                Percentages,
                proportions,
                fractions, ratios and
                comparisons between
                different values.
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
                🧩 Number Patterns
              </h3>

              <p
                style={{
                  color: '#666',
                  lineHeight: 1.6,
                  marginBottom: 0,
                }}
              >
                Sequences, patterns
                and number problems
                that require you to
                work out what comes
                next.
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
            How the Smart Numbers
            Challenge Works
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            The Smart Numbers
            Challenge contains 10
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
            fact related to the
            question so there is
            something extra to learn
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
            Why Play a Maths &amp;
            Numbers Quiz?
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Number quizzes can test
            how quickly you recognise
            relationships between
            values and how accurately
            you can perform simple
            calculations without
            overthinking them.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            The Smart Numbers
            Challenge is designed to
            mix straightforward
            arithmetic with questions
            involving percentages,
            patterns and practical
            number reasoning.
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
            Fresh Number Questions
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
            Smart Numbers Challenge
            changes from day to day.
            Returning players can test
            their number skills again
            without always receiving
            the same group of
            questions.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Smart Numbers is one of
            seven Mind Sprint
            categories, alongside
            General Knowledge, Word
            &amp; Language, Pop
            Culture, History, Science
            and Geography.
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
            Ready to Test Your Number
            Skills?
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
            Take 10 Smart Numbers
            questions and see if you
            can score at least 8 out
            of 10.
          </p>

          <Link
            href="/puzzle/1?challenge=5"
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
              Start the Smart Numbers Quiz
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
              href="/word-language-quiz"
              legacyBehavior
            >
              <a
                style={{
                  color: '#000',
                  textDecoration:
                    'underline',
                }}
              >
                Word &amp; Language Quiz
              </a>
            </Link>

            <Link
              href="/pop-culture-quiz"
              legacyBehavior
            >
              <a
                style={{
                  color: '#000',
                  textDecoration:
                    'underline',
                }}
              >
                Pop Culture Quiz
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
              href="/science-quiz"
              legacyBehavior
            >
              <a
                style={{
                  color: '#000',
                  textDecoration:
                    'underline',
                }}
              >
                Science Quiz
              </a>
            </Link>

            <Link
              href="/geography-quiz"
              legacyBehavior
            >
              <a
                style={{
                  color: '#000',
                  textDecoration:
                    'underline',
                }}
              >
                Geography Quiz
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
