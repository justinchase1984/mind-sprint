// pages/word-language-quiz.tsx
import Head from 'next/head'
import Link from 'next/link'

const PAGE_URL =
  'https://www.dailymindsprint.com/word-language-quiz'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Free Word & Language Quiz | Mind Sprint',
  url: PAGE_URL,
  description:
    'Test your vocabulary, spelling, grammar, word meanings and language skills with a free Word & Language quiz from Mind Sprint.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Mind Sprint',
    url: 'https://www.dailymindsprint.com/',
  },
}

export default function WordLanguageQuizPage() {
  return (
    <>
      <Head>
        <title>
          Free Word &amp; Language Quiz | Mind Sprint
        </title>

        <meta
          name="description"
          content="Take a free Word & Language quiz covering vocabulary, spelling, grammar, word meanings and language reasoning with 10 multiple-choice questions."
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
          content="Free Word & Language Quiz | Mind Sprint"
        />

        <meta
          property="og:description"
          content="Test your vocabulary, spelling, grammar and word knowledge with Mind Sprint's free Word & Language Challenge."
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
            🔤
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
            Free Word &amp; Language Quiz
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
            Test your vocabulary,
            spelling, grammar, word
            meanings and language
            skills with Mind
            Sprint&apos;s Word &amp;
            Language Challenge.
          </p>

          <Link
            href="/puzzle/1?challenge=2"
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
              Start Word &amp; Language Quiz
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
            Test Your Word &amp;
            Language Skills
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Language is something we
            use every day, but even
            familiar words can become
            surprisingly challenging
            when spelling, meanings
            and grammar are put to the
            test.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Mind Sprint&apos;s Word
            &amp; Language Challenge
            mixes different types of
            language questions. You
            may be asked to recognise
            a definition, choose the
            correct spelling, identify
            the best word or apply a
            grammar rule.
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
                📖 Vocabulary
              </h3>

              <p
                style={{
                  color: '#666',
                  lineHeight: 1.6,
                  marginBottom: 0,
                }}
              >
                Word meanings,
                synonyms, antonyms
                and vocabulary that
                tests how well you
                know the language.
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
                ✏️ Spelling &amp;
                Grammar
              </h3>

              <p
                style={{
                  color: '#666',
                  lineHeight: 1.6,
                  marginBottom: 0,
                }}
              >
                Correct spelling,
                sentence structure,
                punctuation and
                common grammar rules.
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
                🧠 Language Reasoning
              </h3>

              <p
                style={{
                  color: '#666',
                  lineHeight: 1.6,
                  marginBottom: 0,
                }}
              >
                Questions that ask you
                to compare words,
                recognise patterns and
                choose the best fit
                for a sentence or
                meaning.
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
            How the Word &amp;
            Language Challenge Works
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            The Word &amp; Language
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
            After each answer, Mind
            Sprint also gives you a
            short &quot;Did You
            Know?&quot; fact connected
            to the question so you can
            learn something extra as
            you play.
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
            Why Play a Word &amp;
            Language Quiz?
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Word quizzes can challenge
            both knowledge and careful
            thinking. A word that
            looks familiar may have
            several meanings, and
            small differences in
            spelling or grammar can
            completely change an
            answer.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Testing vocabulary and
            language knowledge can
            also introduce you to new
            words and remind you of
            rules or definitions that
            are easy to forget.
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
            Fresh Word Questions
            Every Day
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Mind Sprint uses rotating
            question sets, so the Word
            &amp; Language Challenge
            changes from day to day.
            Returning players can test
            their language knowledge
            again without always
            receiving the same set of
            questions.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            Word &amp; Language is one
            of seven Mind Sprint
            categories, alongside
            General Knowledge, Pop
            Culture, History, Smart
            Numbers, Science and
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
            Ready to Test Your Word
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
            Take 10 Word &amp;
            Language questions and see
            if you can score at least
            8 out of 10.
          </p>

          <Link
            href="/puzzle/1?challenge=2"
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
              Start the Word &amp;
              Language Quiz
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
