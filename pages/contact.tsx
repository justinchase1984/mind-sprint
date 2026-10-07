// pages/contact.tsx
import Head from 'next/head'
import Link from 'next/link'

const PAGE_URL =
  'https://www.dailymindsprint.com/contact'

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
      '@type': 'ContactPage',
      '@id':
        'https://www.dailymindsprint.com/contact#webpage',
      url: PAGE_URL,
      name:
        'Contact Mind Sprint | Support, Feedback & Quiz Corrections',
      description:
        'Contact Mind Sprint with questions, quiz corrections, feedback, technical issues, privacy enquiries or questions about the planned weekly prize draw.',
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

export default function Contact() {
  return (
    <>
      <Head>
        <title>
          Contact Mind Sprint | Support, Feedback &amp; Quiz Corrections
        </title>

        <meta
          name="description"
          content="Contact Mind Sprint with questions, quiz corrections, feedback, technical issues, privacy enquiries or questions about the planned weekly prize draw."
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
          content="Contact Mind Sprint | Support, Feedback & Quiz Corrections"
        />

        <meta
          property="og:description"
          content="Get in touch with Mind Sprint about quiz questions, feedback, website issues, privacy enquiries or the planned weekly prize draw."
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
          content="Contact Mind Sprint | Support, Feedback & Quiz Corrections"
        />

        <meta
          name="twitter:description"
          content="Get in touch with Mind Sprint about quiz questions, feedback, website issues, privacy enquiries or the planned weekly prize draw."
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
          Contact Mind Sprint
        </h1>

        <p
          style={{
            color: '#777',
            marginTop: '-0.5rem',
          }}
        >
          We&apos;re happy to hear from Mind Sprint players.
        </p>

        <p>
          If you have a question, spotted an incorrect answer, found a technical
          problem or would like to send feedback about the site, you can contact
          Mind Sprint directly by email.
        </p>

        <h2>
          Email
        </h2>

        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:hello@dailymindsprint.com">
            hello@dailymindsprint.com
          </a>
        </p>

        <p>
          Please include enough information for us to understand the issue. If
          you are reporting a question or technical problem, it can be helpful
          to mention the challenge number, question number or page where you
          noticed it.
        </p>

        <h2>
          What You Can Contact Us About
        </h2>

        <ul>
          <li>
            incorrect or outdated quiz questions;
          </li>

          <li>
            technical or website problems;
          </li>

          <li>
            feedback about Mind Sprint challenges;
          </li>

          <li>
            privacy or personal-information enquiries;
          </li>

          <li>
            the planned weekly prize draw; or
          </li>

          <li>
            general questions about Mind Sprint.
          </li>
        </ul>

        <h2>
          Reporting a Quiz Question
        </h2>

        <p>
          If you believe a quiz answer is incorrect or a fact is outdated,
          please include the challenge category and question number if possible.
          This makes it easier for the question to be reviewed.
        </p>

        <p>
          Mind Sprint includes seven quiz categories: General Knowledge, Word
          &amp; Language, Pop Culture, History, Smart Numbers, Science and
          Geography.
        </p>

        <h2>
          Weekly Prize Draw Questions
        </h2>

        <p>
          Mind Sprint is preparing a weekly promotional prize draw. The prize
          draw is <strong>not currently live</strong>.
        </p>

        <p>
          If you have a question about the planned draw, eligibility or how
          entries are intended to work, you can contact us using the email
          address above or read the planned prize draw terms.
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
          About Mind Sprint
        </h2>

        <p>
          Mind Sprint is an independent trivia and brain-challenge website
          operated from Queensland, Australia.
        </p>

        <p>
          The site offers seven short quiz challenges covering general
          knowledge, words, pop culture, history, numbers, science and
          geography, with question sets that rotate daily.
        </p>

        <p>
          You can learn more about the site, its content and how it operates on
          the About page.
        </p>

        <p>
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
              Read About Mind Sprint
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
            Useful Links
          </h2>

          <div
            style={{
              display: 'flex',
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
                About
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
