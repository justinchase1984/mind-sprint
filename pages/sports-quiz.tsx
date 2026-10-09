// pages/sports-quiz.tsx
import Head from 'next/head'
import Link from 'next/link'

const PAGE_URL =
  'https://www.dailymindsprint.com/sports-quiz'

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
        'https://www.dailymindsprint.com/sports-quiz#webpage',
      url: PAGE_URL,
      name:
        'Free Sports Quiz | Mind Sprint',
      description:
        'Test your sports knowledge with 10 multiple-choice questions covering athletes, teams, tournaments, records and sporting history.',
      isPartOf: {
        '@id':
          'https://www.dailymindsprint.com/#website',
      },
      about: {
        '@id':
          'https://www.dailymindsprint.com/#organization',
      },
    },
  ],
}

export default function SportsQuiz() {
  return (
    <>
      <Head>
        <title>
          Free Sports Quiz | Mind Sprint
        </title>

        <meta
          name="description"
          content="Test your sports knowledge with 10 multiple-choice questions covering athletes, teams, tournaments, records and sporting history."
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
          content="Free Sports Quiz | Mind Sprint"
        />

        <meta
          property="og:description"
          content="Test your knowledge of athletes, teams, tournaments, records and sporting history with the Mind Sprint Sports Challenge."
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
          content="Free Sports Quiz | Mind Sprint"
        />

        <meta
          name="twitter:description"
          content="Take the Mind Sprint Sports Challenge and test your knowledge with 10 multiple-choice questions."
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
          maxWidth: 850,
          margin: '0 auto',
          padding:
            '3rem 1rem 4rem',
          lineHeight: 1.7,
        }}
      >
        {/* Hero */}
        <section
          style={{
            textAlign: 'center',
            maxWidth: 720,
            margin: '0 auto',
          }}
        >
          <div
            style={{
              fontSize: 42,
              marginBottom:
                '0.5rem',
            }}
          >
            🏅
          </div>

          <h1
            style={{
              marginBottom:
                '0.75rem',
            }}
          >
            Free Sports Quiz
          </h1>

          <p
            style={{
              fontSize: 18,
              color: '#555',
              maxWidth: 650,
              margin:
                '0 auto 1.5rem',
            }}
          >
            Test your knowledge of
            athletes, teams,
            tournaments, records and
            sporting history with Mind
            Sprint&apos;s Sports
            Challenge.
          </p>

          <Link
            href="/puzzle/1?challenge=8"
            legacyBehavior
          >
            <a
              style={{
                display:
                  'inline-block',
                padding:
                  '12px 26px',
                background: '#111',
                color: '#fff',
                borderRadius: 6,
                textDecoration:
                  'none',
                fontWeight: 600,
              }}
            >
              Start Sports Quiz
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

        {/* Intro */}
        <section
          style={{
            marginTop: '3rem',
          }}
        >
          <h2>
            Test Your Sports Knowledge
          </h2>

          <p
            style={{
              color: '#555',
            }}
          >
            Sport brings together
            athletes, teams,
            competitions, records and
            memorable moments from
            around the world.
          </p>

          <p
            style={{
              color: '#555',
            }}
          >
            Mind Sprint&apos;s Sports
            Challenge mixes questions
            from different sports and
            eras. One question might
            test a famous athlete,
            while the next could cover
            a major tournament, team,
            rule or sporting record.
          </p>
        </section>

        {/* Topics */}
        <section
          style={{
            marginTop: '2.5rem',
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
              <h3>
                🏆 Competitions &amp;
                Tournaments
              </h3>

              <p
                style={{
                  color: '#555',
                  marginBottom: 0,
                }}
              >
                Major championships,
                international events,
                leagues, tournaments
                and famous sporting
                competitions.
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
              <h3>
                🥇 Athletes &amp;
                Records
              </h3>

              <p
                style={{
                  color: '#555',
                  marginBottom: 0,
                }}
              >
                Famous athletes,
                achievements, records,
                medals and memorable
                sporting performances.
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
              <h3>
                ⚽ Teams &amp; Sports
              </h3>

              <p
                style={{
                  color: '#555',
                  marginBottom: 0,
                }}
              >
                Teams, rules,
                traditions and facts
                from sports played
                around the world.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          style={{
            marginTop: '3rem',
          }}
        >
          <h2>
            How the Sports Challenge
            Works
          </h2>

          <p
            style={{
              color: '#555',
            }}
          >
            The Sports Challenge
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
            }}
          >
            After answering, Mind
            Sprint also shows a short
            &quot;Did You Know?&quot;
            fact connected to the
            question, giving you an
            extra piece of sporting
            information as you play.
          </p>

          <p
            style={{
              color: '#555',
            }}
          >
            Score at least{' '}
            <strong>
              8 out of 10
            </strong>{' '}
            to pass the Sports
            Challenge and unlock the
            final Mind Sprint
            challenge.
          </p>
        </section>

        {/* Why play */}
        <section
          style={{
            marginTop: '3rem',
          }}
        >
          <h2>
            Why Play a Sports Quiz?
          </h2>

          <p
            style={{
              color: '#555',
            }}
          >
            Sports quizzes test the
            facts and memorable moments
            you pick up from watching,
            playing and following sport
            over the years.
          </p>

          <p
            style={{
              color: '#555',
            }}
          >
            Because the Mind Sprint
            Sports Challenge covers
            different sports and time
            periods, knowing everything
            about one competition
            alone may not be enough.
            The mix keeps the challenge
            broad and unpredictable.
          </p>
        </section>

        {/* Rotation */}
        <section
          style={{
            marginTop: '3rem',
          }}
        >
          <h2>
            Fresh Sports Questions
            Every Day
          </h2>

          <p
            style={{
              color: '#555',
            }}
          >
            Mind Sprint uses rotating
            question sets, so the
            Sports Challenge changes
            from day to day. Returning
            players can test their
            sporting knowledge again
            without always receiving
            the same group of
            questions.
          </p>

          <p
            style={{
              color: '#555',
            }}
          >
            Sports is one of nine Mind
            Sprint categories,
            alongside General
            Knowledge, Word &amp;
            Language, Pop Culture,
            History, Smart Numbers,
            Science, Geography and
            Nature &amp; Animals.
          </p>
        </section>

        {/* CTA */}
        <section
          style={{
            marginTop: '3rem',
            textAlign: 'center',
          }}
        >
          <h2>
            Ready to Test Your Sports
            Knowledge?
          </h2>

          <p
            style={{
              color: '#555',
              marginBottom:
                '1.5rem',
            }}
          >
            Take 10 sports questions
            and see if you can score
            at least 8 out of 10.
          </p>

          <Link
            href="/puzzle/1?challenge=8"
            legacyBehavior
          >
            <a
              style={{
                display:
                  'inline-block',
                padding:
                  '12px 26px',
                background: '#111',
                color: '#fff',
                borderRadius: 6,
                textDecoration:
                  'none',
                fontWeight: 600,
              }}
            >
              Start the Sports Quiz
            </a>
          </Link>
        </section>
      </main>
    </>
  )
}
