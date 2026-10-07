// pages/how-it-works.tsx
import Head from 'next/head'
import Link from 'next/link'

const PAGE_URL =
  'https://www.dailymindsprint.com/how-it-works'

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
        'https://www.dailymindsprint.com/how-it-works#webpage',
      url: PAGE_URL,
      name:
        'How Mind Sprint Works | Free Daily Quiz & Brain Challenges',
      description:
        'Learn how Mind Sprint works: play 7 daily quiz challenges with 70 questions, track scores and streaks, unlock challenges and return for fresh question sets.',
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

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>
          How Mind Sprint Works | Free Daily Quiz &amp; Brain Challenges
        </title>

        <meta
          name="description"
          content="Learn how Mind Sprint works: play 7 daily quiz challenges with 70 questions, track scores and streaks, unlock challenges and return for fresh question sets."
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
          content="How Mind Sprint Works | Free Daily Quiz & Brain Challenges"
        />

        <meta
          property="og:description"
          content="See how Mind Sprint's 7 daily quiz challenges, 70 questions, scores, streaks and fresh question sets work."
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
          content="How Mind Sprint Works | Free Daily Quiz & Brain Challenges"
        />

        <meta
          name="twitter:description"
          content="See how Mind Sprint's 7 daily quiz challenges, 70 questions, scores, streaks and fresh question sets work."
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
          maxWidth: 900,
          margin: '2.25rem auto',
          padding: '0 1rem',
          lineHeight: 1.7,
        }}
      >
        <h1
          style={{
            marginBottom: '0.5rem',
          }}
        >
          How Mind Sprint Works
        </h1>

        <p
          style={{
            color: '#777',
            fontSize: 14,
            marginTop: 0,
          }}
        >
          By Mind Sprint · Updated October 2026
        </p>

        <p
          style={{
            color: '#555',
          }}
        >
          Mind Sprint is a free daily trivia and brain-challenge experience.
          There are <strong>7 challenges</strong>, and each challenge contains{' '}
          <strong>10 questions</strong>, giving you up to{' '}
          <strong>70 questions</strong> across a complete Mind Sprint run.
        </p>

        <p
          style={{
            color: '#555',
          }}
        >
          You can play one challenge when you have a few spare minutes or keep
          progressing through several challenges in the same session.
        </p>

        {/* Optional Ezoic ad slot */}
        <div
          style={{
            margin: '1.25rem 0',
            textAlign: 'center',
          }}
        >
          <div id="ezoic-pub-ad-placeholder-200" />
        </div>

        <h2
          style={{
            marginTop: '1.75rem',
          }}
        >
          The Basic Flow
        </h2>

        <ol
          style={{
            color: '#222',
          }}
        >
          <li>
            Start with <strong>Challenge 1</strong>.
          </li>

          <li>
            Answer all <strong>10 questions</strong>, one question at a time.
          </li>

          <li>
            See your score when the challenge is complete.
          </li>

          <li>
            Score at least <strong>8 out of 10</strong> to pass and unlock the
            next challenge.
          </li>

          <li>
            Continue through the remaining challenges or come back another
            time.
          </li>
        </ol>

        <h2
          style={{
            marginTop: '1.75rem',
          }}
        >
          Scores and Feedback
        </h2>

        <p
          style={{
            color: '#555',
          }}
        >
          After choosing an answer, Mind Sprint shows whether you were correct
          before moving to the next question. At the end of the challenge,
          you&apos;ll see your total score out of 10.
        </p>

        <p
          style={{
            color: '#555',
          }}
        >
          Questions also include a short &quot;Did You Know?&quot; fact after
          you answer, adding context or an interesting piece of information
          before you continue.
        </p>

        <h2
          style={{
            marginTop: '1.75rem',
          }}
        >
          Streaks
        </h2>

        <p
          style={{
            color: '#555',
          }}
        >
          Your streak increases when you answer correctly and resets when you
          miss a question. Your best streak is saved locally on your device so
          you can keep track of your personal best.
        </p>

        <p
          style={{
            color: '#555',
          }}
        >
          Because streak information is stored on your device, clearing browser
          data or switching devices may reset it.
        </p>

        <h2
          style={{
            marginTop: '1.75rem',
          }}
        >
          Fresh Question Sets Every Day
        </h2>

        <p
          style={{
            color: '#555',
          }}
        >
          Mind Sprint rotates its question sets daily so returning players can
          encounter different material rather than seeing exactly the same
          group of questions every time.
        </p>

        <p
          style={{
            color: '#555',
          }}
        >
          The seven quiz categories are General Knowledge, Word &amp; Language,
          Pop Culture, History, Smart Numbers, Science and Geography.
        </p>

        {/* Quiz category links */}
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
            Explore the 7 Daily Quiz Challenges
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

        {/* Optional Ezoic ad slot */}
        <div
          style={{
            margin: '1.25rem 0',
            textAlign: 'center',
          }}
        >
          <div id="ezoic-pub-ad-placeholder-201" />
        </div>

        <h2
          style={{
            marginTop: '1.75rem',
          }}
        >
          Weekly Prize Draw — Coming Soon
        </h2>

        <p
          style={{
            color: '#555',
          }}
        >
          Mind Sprint is preparing a weekly promotional prize draw. When the
          prize draw is officially active, eligible players will be able to
          choose to enter by providing an email address.
        </p>

        <p
          style={{
            color: '#555',
          }}
        >
          Each <strong>different challenge</strong> completed during the weekly
          draw period will earn <strong>1 entry</strong>. Because there are 7
          challenges, the maximum will be{' '}
          <strong>7 entries per week</strong>.
        </p>

        <p
          style={{
            color: '#555',
          }}
        >
          Replaying the same challenge during the same weekly draw will not
          create another entry for that challenge, and your score will not
          change the number of entries you receive.
        </p>

        <p
          style={{
            color: '#555',
          }}
        >
          The planned weekly digital reward is worth approximately{' '}
          <strong>A$25 or the local-currency equivalent</strong>. One eligible
          entry will be randomly selected after the completed weekly draw
          period.
        </p>

        <p
          style={{
            color: '#555',
          }}
        >
          The first official draw will begin only when Mind Sprint announces
          that entries are open. Challenge completions made before that launch
          will not count as prize draw entries.
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
            marginTop: '1.75rem',
          }}
        >
          Do I Need an Account?
        </h2>

        <p
          style={{
            color: '#555',
          }}
        >
          No account or login is required to play Mind Sprint.
        </p>

        <p
          style={{
            color: '#555',
          }}
        >
          An email address will only be required if you choose to participate
          in the weekly prize draw once it is officially live, so Mind Sprint
          can associate entries with you and contact you if your entry is
          selected.
        </p>

        <p
          style={{
            color: '#555',
          }}
        >
          Ongoing Mind Sprint email updates are separate and optional.
        </p>

        <p>
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
              Read the Privacy Policy
            </a>
          </Link>
        </p>

        <h2
          style={{
            marginTop: '1.75rem',
          }}
        >
          A Few Tips
        </h2>

        <ul
          style={{
            color: '#222',
          }}
        >
          <li>
            Start with one challenge and play at your own pace.
          </li>

          <li>
            Complete different challenges if you want to build more weekly draw
            entries once the draw is live.
          </li>

          <li>
            Come back the next day as the question sets rotate if you want to
            try fresh material.
          </li>

          <li>
            If you spot an incorrect answer or technical issue, let Mind Sprint
            know through the Contact page.
          </li>
        </ul>

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
              Contact Mind Sprint
            </a>
          </Link>
        </p>

        {/* Optional Ezoic ad slot */}
        <div
          style={{
            margin: '1.5rem 0',
            textAlign: 'center',
          }}
        >
          <div id="ezoic-pub-ad-placeholder-202" />
        </div>

        <div
          style={{
            marginTop: '2rem',
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
            Learn More
          </h2>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
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
