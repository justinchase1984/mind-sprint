// pages/about.tsx
import Head from 'next/head'
import Link from 'next/link'

const PAGE_URL =
  'https://www.dailymindsprint.com/about'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id':
        'https://www.dailymindsprint.com/#organization',
      name: 'Mind Sprint',
      url: 'https://www.dailymindsprint.com/',
      email: 'hello@dailymindsprint.com',
    },
    {
      '@type': 'WebSite',
      '@id':
        'https://www.dailymindsprint.com/#website',
      url: 'https://www.dailymindsprint.com/',
      name: 'Mind Sprint',
      publisher: {
        '@id':
          'https://www.dailymindsprint.com/#organization',
      },
    },
    {
      '@type': 'AboutPage',
      '@id':
        'https://www.dailymindsprint.com/about#webpage',
      url: PAGE_URL,
      name:
        'About Mind Sprint | Daily Quiz & Brain Challenges',
      description:
        'Learn about Mind Sprint, a free daily quiz with 7 trivia and brain challenges covering general knowledge, words, pop culture, history, numbers, science and geography.',
      isPartOf: {
        '@id':
          'https://www.dailymindsprint.com/#website',
      },
      about: {
        '@id':
          'https://www.dailymindsprint.com/#organization',
      },
      dateModified:
        '2026-10-07',
    },
  ],
}

export default function About() {
  return (
    <>
      <Head>
        <title>
          About Mind Sprint | Daily Quiz &amp; Brain Challenges
        </title>

        <meta
          name="description"
          content="Learn about Mind Sprint, a free daily quiz with 7 trivia and brain challenges covering general knowledge, words, pop culture, history, numbers, science and geography."
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
          property="og:site_name"
          content="Mind Sprint"
        />

        <meta
          property="og:title"
          content="About Mind Sprint | Daily Quiz & Brain Challenges"
        />

        <meta
          property="og:description"
          content="Learn about Mind Sprint, our free daily quiz, 7 challenge categories, fresh question sets and how the site works."
        />

        <meta
          property="og:url"
          content={PAGE_URL}
        />

        <meta
          name="twitter:card"
          content="summary"
        />

        <meta
          name="twitter:title"
          content="About Mind Sprint | Daily Quiz & Brain Challenges"
        />

        <meta
          name="twitter:description"
          content="Learn about Mind Sprint, our free daily quiz, 7 challenge categories, fresh question sets and how the site works."
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

      <main
        style={{
          maxWidth: 800,
          margin: '0 auto',
          padding: '2rem 1rem',
          lineHeight: 1.7,
        }}
      >
        <h1>
          About Mind Sprint
        </h1>

        <p
          style={{
            color: '#777',
            marginTop: '-0.5rem',
          }}
        >
          By Mind Sprint · Updated October 2026
        </p>

        <p>
          Mind Sprint is an independent, free daily trivia and brain-challenge
          website designed around short, easy-to-play challenges covering
          general knowledge, language, pop culture, history, numbers, science
          and geography.
        </p>

        <p>
          The idea is simple: give players something interesting to think about
          without requiring a long test or complicated setup. Each Mind Sprint
          challenge contains 10 questions, shown one question at a time, with
          immediate feedback and a score at the end.
        </p>

        <h2>
          What You Can Play
        </h2>

        <p>
          Mind Sprint currently includes <strong>7 different challenges</strong>{' '}
          with <strong>10 questions in each</strong>, giving players up to{' '}
          <strong>70 questions</strong> across a complete Mind Sprint run.
        </p>

        <p>
          Question sets rotate daily so returning players can encounter fresh
          material rather than seeing exactly the same questions every time.
        </p>

        <p>
          The seven quiz categories are General Knowledge, Word &amp; Language,
          Pop Culture, History, Smart Numbers, Science and Geography.
        </p>

        <div
          style={{
            marginTop: '1.5rem',
            padding: '1.5rem',
            border:
              '1px solid #e6e6e6',
            borderRadius: 10,
          }}
        >
          <h2
            style={{
              marginTop: 0,
              textAlign: 'center',
              fontSize: 22,
            }}
          >
            Explore the 7 Quiz Categories
          </h2>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent:
                'center',
              gap: '0.9rem 1.25rem',
            }}
          >
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
                General Knowledge
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
                Word &amp; Language
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
                Pop Culture
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
                History
              </a>
            </Link>

            <Link
              href="/smart-numbers-quiz"
              legacyBehavior
            >
              <a
                style={{
                  color: '#000',
                  textDecoration:
                    'underline',
                }}
              >
                Smart Numbers
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
                Science
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
                Geography
              </a>
            </Link>
          </div>
        </div>

        <h2>
          Why Mind Sprint Exists
        </h2>

        <p>
          Mind Sprint was created for people who enjoy quizzes, trivia and
          short mental challenges but do not always want to commit to a long
          game or test.
        </p>

        <p>
          You can complete one challenge when you have a few spare minutes or
          continue through several challenges in the same session. The aim is
          to make the experience simple, enjoyable and easy to return to.
        </p>

        <h2>
          How Our Content Works
        </h2>

        <p>
          Mind Sprint questions and challenge sets are created and organised
          specifically for the site. We aim to keep questions clear,
          understandable and suitable for a general audience.
        </p>

        <p>
          Questions also include short &quot;Did You Know?&quot; facts after
          answers to provide additional context or interesting information.
        </p>

        <p>
          Questions and explanatory information are reviewed as the site is
          maintained. If you notice an incorrect answer, outdated fact or
          technical problem, please let us know so it can be reviewed.
        </p>

        <h2>
          Scores, Streaks and Progress
        </h2>

        <p>
          Players receive one point for each correct answer. A score of at least{' '}
          <strong>8 out of 10</strong> is required to pass a challenge and
          unlock the next one.
        </p>

        <p>
          Mind Sprint also tracks answer streaks locally on your device, giving
          you a simple way to see how many correct answers you can put together
          and keep track of your personal best.
        </p>

        <p>
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
              Learn more about how Mind Sprint works
            </a>
          </Link>
        </p>

        <h2>
          Brain Challenges and Mental Engagement
        </h2>

        <p>
          Mind Sprint is designed as an entertainment and general-knowledge
          experience. The mix of quiz categories gives players opportunities to
          use recall, vocabulary, mental arithmetic, reasoning and general
          knowledge.
        </p>

        <p>
          Mind Sprint does not claim that playing its challenges will increase
          intelligence, prevent cognitive decline or provide guaranteed
          improvements in memory or concentration.
        </p>

        <p>
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
              Read about Brain Training with Mind Sprint
            </a>
          </Link>
        </p>

        <h2>
          Weekly Prize Draw — Coming Soon
        </h2>

        <p>
          Mind Sprint is preparing a weekly promotional prize draw. The prize
          draw is <strong>not currently live</strong>.
        </p>

        <p>
          When the draw officially launches, eligible players will be able to
          earn one entry for each different Mind Sprint challenge they complete
          during the applicable weekly entry period, up to the weekly limit
          described in the prize draw terms.
        </p>

        <p>
          Challenge completions or test entries made before the official launch
          will not be eligible for a prize. No purchase or payment will be
          required to enter an eligible weekly draw.
        </p>

        <p>
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
              Read the Planned Weekly Prize Draw Terms
            </a>
          </Link>
        </p>

        <h2>
          Publisher Information
        </h2>

        <p>
          Mind Sprint is independently operated from Queensland, Australia.
        </p>

        <p>
          The site is maintained specifically for Mind Sprint players,
          including the creation and organisation of challenge content,
          question rotations, explanatory facts and website features.
        </p>

        <p>
          Mind Sprint is intended primarily for entertainment, trivia and
          general knowledge. It is not a medical service and does not claim that
          playing its challenges can diagnose, treat or prevent health
          conditions.
        </p>

        <h2>
          Contact Mind Sprint
        </h2>

        <p>
          Have a question, spotted a problem, or want to send feedback? You can
          contact Mind Sprint directly at:
        </p>

        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:hello@dailymindsprint.com">
            hello@dailymindsprint.com
          </a>
        </p>

        <p>
          We welcome feedback about questions, website issues, planned prize
          draws and the general Mind Sprint experience.
        </p>

        <p>
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
              Visit the Contact page
            </a>
          </Link>
        </p>

        <div
          style={{
            marginTop: '2.5rem',
            paddingTop: '1.5rem',
            borderTop:
              '1px solid #eee',
          }}
        >
          <h2
            style={{
              fontSize: 20,
            }}
          >
            Explore Mind Sprint
          </h2>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
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

            <Link
              href="/privacy"
              legacyBehavior
            >
              <a
                style={{
                  color: '#000',
                  textDecoration:
                    'underline',
                }}
              >
                Privacy Policy
              </a>
            </Link>

            <Link
              href="/terms"
              legacyBehavior
            >
              <a
                style={{
                  color: '#000',
                  textDecoration:
                    'underline',
                }}
              >
                Terms
              </a>
            </Link>
          </div>
        </div>

        <div
          style={{
            marginTop: '2.5rem',
            textAlign: 'center',
          }}
        >
          <Link
            href="/puzzle/1?challenge=1"
            legacyBehavior
          >
            <a
              style={{
                display:
                  'inline-block',
                padding:
                  '12px 24px',
                background: '#111',
                color: '#fff',
                borderRadius: 6,
                textDecoration:
                  'none',
                fontWeight: 600,
              }}
            >
              Start Today&apos;s Quiz
            </a>
          </Link>
        </div>
      </main>
    </>
  )
}
