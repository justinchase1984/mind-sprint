// pages/geography-trivia-questions-and-answers.tsx
import Head from 'next/head'
import Link from 'next/link'
import {
  GEOGRAPHY80_SECTIONS,
  GEOGRAPHY80_TOTAL,
} from '../lib/content/geography80'

const SITE_URL = 'https://www.dailymindsprint.com'

const PAGE_URL =
  'https://www.dailymindsprint.com/geography-trivia-questions-and-answers'

const PAGE_TITLE =
  '80 Geography Trivia Questions & Answers | Mind Sprint'

const PAGE_DESCRIPTION =
  '80 original geography trivia questions with answers and short explanations, covering capitals, rivers and lakes, mountains, flags, Australia and Oceania, oceans and islands, borders and world records.'

const PUBLISHED = '2026-11-26'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '80 Geography Trivia Questions & Answers',
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,
  mainEntityOfPage: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  inLanguage: 'en-AU',
  author: {
    '@type': 'Organization',
    name: 'Mind Sprint',
    url: `${SITE_URL}/`,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Mind Sprint',
    url: `${SITE_URL}/`,
  },
  isPartOf: {
    '@type': 'WebSite',
    name: 'Mind Sprint',
    url: `${SITE_URL}/`,
  },
}

const textColumn = {
  maxWidth: 760,
  margin: '0 auto',
  padding: '1.5rem 1rem',
}

const bodyText = {
  color: '#555',
  lineHeight: 1.8,
}

const linkStyle = {
  color: '#000',
  textDecoration: 'underline',
}

const ctaButton = {
  display: 'inline-block',
  padding: '12px 26px',
  fontSize: '1rem',
  fontWeight: 600,
  borderRadius: 6,
  border: '1px solid #000',
  background: '#111',
  color: '#fff',
  textDecoration: 'none',
}

const CATEGORY_LINKS = [
  { href: '/general-knowledge-quiz', label: 'General Knowledge' },
  { href: '/word-language-quiz', label: 'Word & Language' },
  { href: '/pop-culture-quiz', label: 'Pop Culture' },
  { href: '/history-quiz', label: 'History' },
  { href: '/smart-numbers-quiz', label: 'Smart Numbers' },
  { href: '/science-quiz', label: 'Science' },
  { href: '/geography-quiz', label: 'Geography' },
  { href: '/sports-quiz', label: 'Sports' },
  { href: '/nature-animals-quiz', label: 'Nature & Animals' },
]

export default function GeographyTriviaQuestionsPage() {
  let questionNumber = 0

  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>

        <meta
          name="description"
          content={PAGE_DESCRIPTION}
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
          content="article"
        />

        <meta
          property="og:title"
          content={PAGE_TITLE}
        />

        <meta
          property="og:description"
          content="80 original geography trivia questions, each with the answer and a short explanation. Ideal for quiz nights, classrooms and family trivia."
        />

        <meta
          property="og:url"
          content={PAGE_URL}
        />

        <meta
          property="og:site_name"
          content="Mind Sprint"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
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
            padding: '4rem 1rem 2rem',
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
                'clamp(30px, 5vw, 46px)',
              margin: '0 0 1rem',
              lineHeight: 1.15,
            }}
          >
            80 Geography Trivia
            Questions &amp; Answers
          </h1>

          <p
            style={{
              fontSize:
                'clamp(16px, 2.2vw, 18px)',
              color: '#555',
              lineHeight: 1.7,
              maxWidth: 650,
              margin: '0 auto 1.25rem',
            }}
          >
            Eighty original geography questions
            across eight themed rounds, each
            with the answer and a short
            explanation of why it&apos;s right.
          </p>

          <p
            style={{
              margin: 0,
              fontSize: 13,
              color: '#777',
            }}
          >
            By the Mind Sprint team ·
            Updated November 2026
          </p>
        </section>

        {/* Introduction */}
        <section style={textColumn}>
          <p style={bodyText}>
            Geography makes some of the best
            trivia because a good question
            usually has a clear answer — a
            capital, a river, a mountain, a
            country — and a short explanation
            can turn that name into a place
            you can actually picture. Every
            question below was written for
            this page. The facts have been
            checked, and we have steered
            clear of claims that geographers
            still dispute, such as which
            river is the world&apos;s longest.
          </p>

          <p style={bodyText}>
            The eight rounds move from
            capitals, rivers and lakes,
            mountains and flags, through
            Australia and the Pacific, oceans
            and islands, borders, and a final
            set of world records. They are
            meant for quiz nights, classrooms,
            family games and anyone who enjoys
            testing themselves, then finding
            out a little more.
          </p>

          <p style={bodyText}>
            These questions are separate from
            the daily Mind Sprint quiz, so
            reading them won&apos;t spoil
            today&apos;s challenge. If you&apos;d
            rather test yourself against the
            clock, try the{' '}
            <Link
              href="/puzzle/1?challenge=7"
              legacyBehavior
            >
              <a style={linkStyle}>
                Geography Challenge
              </a>
            </Link>{' '}
            first and come back here
            afterwards. For a broader mix of
            topics, see our{' '}
            <Link
              href="/general-knowledge-questions-and-answers"
              legacyBehavior
            >
              <a style={linkStyle}>
                100 General Knowledge Questions
                &amp; Answers
              </a>
            </Link>
            {' '}
            or our{' '}
            <Link
              href="/history-trivia-questions-and-answers"
              legacyBehavior
            >
              <a style={linkStyle}>
                80 History Trivia Questions
                &amp; Answers
              </a>
            </Link>
            .
          </p>
        </section>

        {/* How to use */}
        <section style={textColumn}>
          <h2>
            How to Use These Questions
          </h2>

          <ul
            style={{
              ...bodyText,
              paddingLeft: '1.2rem',
              margin: 0,
            }}
          >
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Quiz nights:</strong>{' '}
              each themed round has ten
              questions, which suits a
              standard pub-quiz round. Read
              the explanation aloud after
              revealing each answer. It
              settles arguments and keeps
              the table talking.
            </li>

            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Classrooms:</strong>{' '}
              the rounds work well as lesson
              warm-ups or as a way to close
              a unit on maps and places. The
              explanations give students a
              starting point for further
              looking-up, without pretending
              to be an atlas.
            </li>

            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Family and road trips:</strong>{' '}
              pick a round, take turns asking,
              and award a bonus point to anyone
              who can add an extra fact about
              the answer.
            </li>

            <li>
              <strong>Solo practice:</strong>{' '}
              cover the answer, commit to a
              guess, then check. Committing
              to an answer before you look
              helps the fact stick far better
              than simply reading.
            </li>
          </ul>
        </section>

        {/* Contents */}
        <nav
          aria-label="Question rounds"
          style={{
            ...textColumn,
          }}
        >
          <h2>The Rounds</h2>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            {GEOGRAPHY80_SECTIONS.map(
              (section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  style={{
                    display: 'inline-block',
                    padding: '6px 12px',
                    border:
                      '1px solid #e6e6e6',
                    borderRadius: 999,
                    color: '#111',
                    textDecoration: 'none',
                    fontSize: 14,
                  }}
                >
                  {section.emoji}{' '}
                  {section.title}
                </a>
              )
            )}
          </div>
        </nav>

        {/* Question sections */}
        {GEOGRAPHY80_SECTIONS.map((section) => (
          <section
            key={section.id}
            id={section.id}
            style={{
              ...textColumn,
              paddingTop: '2rem',
              scrollMarginTop: 16,
            }}
          >
            <h2
              style={{
                borderBottom:
                  '1px solid #e6e6e6',
                paddingBottom: '0.5rem',
              }}
            >
              {section.emoji}{' '}
              {section.title}
            </h2>

            <p style={bodyText}>
              {section.intro}
            </p>

            <ol
              start={questionNumber + 1}
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}
            >
              {section.questions.map(
                (item) => {
                  questionNumber += 1
                  const n = questionNumber

                  return (
                    <li
                      key={n}
                      id={`q${n}`}
                      style={{
                        border:
                          '1px solid #e6e6e6',
                        borderRadius: 10,
                        padding:
                          '1rem 1.1rem',
                        margin: '0 0 1rem',
                      }}
                    >
                      <h3
                        style={{
                          fontSize:
                            'clamp(16px, 2.2vw, 18px)',
                          margin:
                            '0 0 0.5rem',
                          lineHeight: 1.4,
                        }}
                      >
                        {n}. {item.question}
                      </h3>

                      <p
                        style={{
                          margin:
                            '0 0 0.35rem',
                          lineHeight: 1.6,
                        }}
                      >
                        <strong>
                          Answer:
                        </strong>{' '}
                        {item.answer}
                      </p>

                      <p
                        style={{
                          margin: 0,
                          color: '#555',
                          lineHeight: 1.7,
                          fontSize: 15,
                        }}
                      >
                        {item.explanation}
                      </p>
                    </li>
                  )
                }
              )}
            </ol>
          </section>
        ))}

        {/* Keep going / CTA */}
        <section
          style={{
            ...textColumn,
            paddingTop: '2.5rem',
            textAlign: 'center',
          }}
        >
          <h2>
            Ready for Today&apos;s Challenge?
          </h2>

          <p
            style={{
              ...bodyText,
              maxWidth: 620,
              margin: '0 auto 1.5rem',
            }}
          >
            You&apos;ve read all{' '}
            {GEOGRAPHY80_TOTAL} answers. Now try
            the daily Mind Sprint Geography
            Challenge: 10 fresh questions, one
            at a time, and a score of 8 or
            more unlocks the next category.
          </p>

          <Link
            href="/puzzle/1?challenge=7"
            legacyBehavior
          >
            <a style={ctaButton}>
              Play the Geography Challenge
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

        {/* More from Mind Sprint */}
        <section style={textColumn}>
          <h2
            style={{
              textAlign: 'center',
            }}
          >
            More From Mind Sprint
          </h2>

          <p style={bodyText}>
            Learn more about the daily
            challenge on our{' '}
            <Link
              href="/geography-quiz"
              legacyBehavior
            >
              <a style={linkStyle}>
                Geography Quiz
              </a>
            </Link>{' '}
            page, browse{' '}
            <Link
              href="/general-knowledge-questions-and-answers"
              legacyBehavior
            >
              <a style={linkStyle}>
                100 General Knowledge Questions
                &amp; Answers
              </a>
            </Link>
            {' '}
            or{' '}
            <Link
              href="/history-trivia-questions-and-answers"
              legacyBehavior
            >
              <a style={linkStyle}>
                80 History Trivia Questions
                &amp; Answers
              </a>
            </Link>
            {' '}
            or{' '}
            <Link
              href="/science-trivia-questions-and-answers"
              legacyBehavior
            >
              <a style={linkStyle}>
                80 Science Trivia Questions
                &amp; Answers
              </a>
            </Link>
            , see{' '}
            <Link
              href="/how-it-works"
              legacyBehavior
            >
              <a style={linkStyle}>
                how Mind Sprint works
              </a>
            </Link>
            , or read why a few minutes of
            daily trivia makes a good{' '}
            <Link
              href="/brain-training"
              legacyBehavior
            >
              <a style={linkStyle}>
                brain-training
              </a>
            </Link>{' '}
            habit.
          </p>

          <p style={bodyText}>
            Each of the nine daily
            categories has its own page:
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem 1rem',
              justifyContent: 'center',
              paddingBottom: '3rem',
            }}
          >
            {CATEGORY_LINKS.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                legacyBehavior
              >
                <a style={linkStyle}>
                  {c.label}
                </a>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
