// pages/faq.tsx
import Head from 'next/head'
import Link from 'next/link'

const PAGE_URL =
  'https://www.dailymindsprint.com/faq'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id':
        'https://www.dailymindsprint.com/#organization',
      name: 'Mind Sprint',
      url: 'https://www.dailymindsprint.com/',
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
      '@type': 'WebPage',
      '@id':
        'https://www.dailymindsprint.com/faq#webpage',
      url: PAGE_URL,
      name:
        'Mind Sprint FAQ | Daily Quiz, Scores, Streaks & Prize Draw',
      description:
        'Find answers to common Mind Sprint questions about the daily quiz, 9 challenges, scores, streaks, fresh questions, accounts and the planned weekly prize draw.',
      isPartOf: {
        '@id':
          'https://www.dailymindsprint.com/#website',
      },
      about: {
        '@id':
          'https://www.dailymindsprint.com/#organization',
      },
      dateModified:
        '2026-10-10',
    },
  ],
}

export default function FAQ() {
  return (
    <>
      <Head>
        <title>
          Mind Sprint FAQ | Daily Quiz, Scores, Streaks &amp; Prize Draw
        </title>

        <meta
          name="description"
          content="Find answers to common Mind Sprint questions about the daily quiz, 9 challenges, scores, streaks, fresh questions, accounts and the planned weekly prize draw."
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
          content="Mind Sprint FAQ | Daily Quiz, Scores, Streaks & Prize Draw"
        />

        <meta
          property="og:description"
          content="Answers to common questions about Mind Sprint's daily quiz, challenges, scores, streaks, fresh questions and planned weekly prize draw."
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
          content="Mind Sprint FAQ | Daily Quiz, Scores, Streaks & Prize Draw"
        />

        <meta
          name="twitter:description"
          content="Answers to common questions about Mind Sprint's daily quiz, challenges, scores, streaks, fresh questions and planned weekly prize draw."
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
          Mind Sprint FAQ
        </h1>

        <p
          style={{
            color: '#777',
            fontSize: 14,
            marginTop: '-0.5rem',
          }}
        >
          By Mind Sprint · Updated October 2026
        </p>

        <p
          style={{
            color: '#555',
          }}
        >
          Answers to some of the most common questions about Mind Sprint,
          the daily quiz, challenges, scores, streaks, fresh question sets
          and the planned weekly prize draw.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          What is Mind Sprint?
        </h2>

        <p>
          Mind Sprint is a free daily trivia and brain-challenge website. It
          currently includes <strong>9 challenges</strong>, with{' '}
          <strong>10 questions</strong> in each challenge, giving you up to{' '}
          <strong>90 questions</strong> across a complete Mind Sprint run.
        </p>

        <p>
          Questions are shown one at a time so you can focus on a single answer
          before moving on.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          How does Mind Sprint work?
        </h2>

        <p>
          Start with Challenge 1 and answer all 10 questions. When you finish,
          you&apos;ll see your score for that challenge.
        </p>

        <p>
          Score at least <strong>8 out of 10</strong> to pass and unlock the
          next challenge.
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
              Read the full How Mind Sprint Works guide
            </a>
          </Link>
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          Is Mind Sprint free?
        </h2>

        <p>
          Yes. Mind Sprint is free to play and you can start the daily quiz
          without creating an account.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          Do I need an account?
        </h2>

        <p>
          No. You do not need to create an account or log in to play Mind
          Sprint.
        </p>

        <p>
          An email address will only be required if you choose to participate
          in the weekly prize draw once it officially launches, so your entries
          can be associated with you and you can be contacted if your entry is
          selected.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          How do scores work?
        </h2>

        <p>
          You receive one point for each correct answer. At the end of a
          challenge, Mind Sprint shows your total score out of 10.
        </p>

        <p>
          Your score determines whether you pass the challenge, but it does not
          increase the number of weekly prize draw entries you receive once the
          draw is live.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          How do streaks work?
        </h2>

        <p>
          Your streak increases each time you answer correctly and resets when
          you miss a question. Your highest streak is saved locally on your
          device.
        </p>

        <p>
          Clearing browser data or switching devices may therefore reset your
          saved streak.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          Do the questions change every day?
        </h2>

        <p>
          Yes. Mind Sprint rotates its question sets daily so returning players
          can encounter different material instead of seeing exactly the same
          set every time.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          What kinds of questions are included?
        </h2>

        <p>
          Mind Sprint includes nine different quiz categories: General
          Knowledge, Word &amp; Language, Pop Culture, History, Smart Numbers,
          Science, Geography, Sports and Nature &amp; Animals.
        </p>

        <p>
          The mix is designed to keep the challenges varied rather than making
          every round feel the same.
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
            Explore the 9 Quiz Categories
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

            <Link
              href="/sports-quiz"
              legacyBehavior
            >
              <a
                style={{
                  color: '#000',
                  textDecoration:
                    'underline',
                }}
              >
                Sports
              </a>
            </Link>

            <Link
              href="/nature-animals-quiz"
              legacyBehavior
            >
              <a
                style={{
                  color: '#000',
                  textDecoration:
                    'underline',
                }}
              >
                Nature &amp; Animals
              </a>
            </Link>
          </div>
        </div>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          Why do I see “Did You Know?” facts?
        </h2>

        <p>
          Mind Sprint shows a short &quot;Did You Know?&quot; fact after you
          answer a question. These facts provide extra context or an interesting
          piece of information rather than simply showing whether your answer
          was right or wrong.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          Is Mind Sprint a medical brain-training program?
        </h2>

        <p>
          No. Mind Sprint is intended for entertainment, trivia and general
          mental engagement.
        </p>

        <p>
          It does not diagnose, treat or prevent medical conditions and does
          not claim that playing the challenges will increase intelligence or
          produce guaranteed improvements in memory or concentration.
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
              Learn more about Brain Training with Mind Sprint
            </a>
          </Link>
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          Is there a weekly prize draw?
        </h2>

        <p>
          Mind Sprint is preparing a weekly promotional prize draw. The prize
          draw is <strong>not live yet</strong>.
        </p>

        <p>
          The first official weekly draw will begin only when Mind Sprint
          announces on the website that entries are open.
        </p>

        <p>
          Test entries or challenge completions made before the official launch
          are not eligible for a prize.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          How will weekly prize draw entries work?
        </h2>

        <p>
          Once the weekly draw is live, each{' '}
          <strong>different challenge</strong> you complete during the weekly
          draw period will earn <strong>1 entry</strong>.
        </p>

        <p>
          Because Mind Sprint has 9 challenges, the maximum will be{' '}
          <strong>9 entries per weekly draw</strong>.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          Can I earn extra entries by replaying the same challenge?
        </h2>

        <p>
          No. Replaying the same challenge during the same weekly draw period
          will not create another entry for that challenge.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          Does my score affect my prize draw entries?
        </h2>

        <p>
          No. Your score does not increase the number of entries you receive.
          Completing an eligible different challenge earns one entry once the
          weekly draw is live.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          What is the planned weekly prize?
        </h2>

        <p>
          The planned weekly digital reward is worth approximately{' '}
          <strong>A$25 or the local-currency equivalent</strong>.
        </p>

        <p>
          Final reward and redemption options may depend on the winner&apos;s
          country and the reward-delivery options available at the time.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          Which countries is Mind Sprint planning to support?
        </h2>

        <p>
          Mind Sprint is currently planning the weekly draw around eligible
          players in Australia, the United States, the United Kingdom and
          Canada.
        </p>

        <p>
          Final availability will depend on the official prize draw terms and
          supported reward-delivery options when the draw launches.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          How will a winner be selected?
        </h2>

        <p>
          Once the weekly draw is live, one eligible entry will be selected at
          random after the completed weekly draw period.
        </p>

        <p>
          A player with more valid entries will have more entries included in
          the random selection, up to the weekly maximum.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          How will I know if my entry is selected?
        </h2>

        <p>
          Mind Sprint will use the email address associated with the selected
          entry to contact the entrant and complete any required eligibility
          checks before a prize is issued.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          Do I have to receive marketing emails to enter?
        </h2>

        <p>
          No. Ongoing Mind Sprint emails are optional and separate from weekly
          prize draw participation.
        </p>

        <p>
          Prize-related administrative messages may still be sent where needed
          to operate the draw or contact a selected entrant.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          Where can I read the full prize draw rules?
        </h2>

        <p>
          The full eligibility, entry, winner-selection and prize information is
          available in the Weekly Prize Draw Terms.
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
              Read the Weekly Prize Draw Terms
            </a>
          </Link>
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          What if I find an incorrect question or technical problem?
        </h2>

        <p>
          Please let us know. Mind Sprint welcomes reports about incorrect
          answers, outdated information or website problems.
        </p>

        <p>
          Contact:{' '}
          <a href="mailto:hello@dailymindsprint.com">
            hello@dailymindsprint.com
          </a>
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
            More About Mind Sprint
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
