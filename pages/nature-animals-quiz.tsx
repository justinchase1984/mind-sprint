// pages/nature-animals-quiz.tsx
import Head from 'next/head'
import Link from 'next/link'

const PAGE_URL =
  'https://www.dailymindsprint.com/nature-animals-quiz'

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
        'https://www.dailymindsprint.com/nature-animals-quiz#webpage',
      url: PAGE_URL,
      name:
        'Free Nature & Animals Quiz | Mind Sprint',
      description:
        'Test your knowledge of animals, wildlife, habitats, plants, ecosystems and the natural world with 10 multiple-choice questions.',
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

export default function NatureAnimalsQuiz() {
  return (
    <>
      <Head>
        <title>
          Free Nature &amp; Animals Quiz | Mind Sprint
        </title>

        <meta
          name="description"
          content="Test your knowledge of animals, wildlife, habitats, plants, ecosystems and the natural world with 10 multiple-choice questions."
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
          content="Free Nature & Animals Quiz | Mind Sprint"
        />

        <meta
          property="og:description"
          content="Test your knowledge of wildlife, habitats, plants, ecosystems and the natural world with the Mind Sprint Nature & Animals Challenge."
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
          content="Free Nature & Animals Quiz | Mind Sprint"
        />

        <meta
          name="twitter:description"
          content="Take the Mind Sprint Nature & Animals Challenge and test your knowledge with 10 multiple-choice questions."
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
            🐾
          </div>

          <h1
            style={{
              marginBottom:
                '0.75rem',
            }}
          >
            Free Nature &amp; Animals Quiz
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
            wildlife, habitats, plants,
            ecosystems and the natural
            world with Mind
            Sprint&apos;s Nature &amp;
            Animals Challenge.
          </p>

          <Link
            href="/puzzle/1?challenge=9"
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
              Start Nature &amp; Animals Quiz
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
            Explore the Natural World
          </h2>

          <p
            style={{
              color: '#555',
            }}
          >
            The natural world includes
            an enormous variety of
            animals, plants, habitats
            and ecosystems, from
            rainforests and oceans to
            deserts and polar regions.
          </p>

          <p
            style={{
              color: '#555',
            }}
          >
            Mind Sprint&apos;s Nature
            &amp; Animals Challenge
            mixes questions about
            wildlife, biology, habitats,
            animal behaviour, plants
            and environmental facts.
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
                🦁 Animals &amp;
                Wildlife
              </h3>

              <p
                style={{
                  color: '#555',
                  marginBottom: 0,
                }}
              >
                Species, animal
                behaviour, diets,
                physical features and
                fascinating wildlife
                facts.
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
                🌿 Plants &amp;
                Ecosystems
              </h3>

              <p
                style={{
                  color: '#555',
                  marginBottom: 0,
                }}
              >
                Plants, forests,
                ecosystems, food webs
                and the relationships
                between living things.
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
                🌎 Habitats &amp;
                Environment
              </h3>

              <p
                style={{
                  color: '#555',
                  marginBottom: 0,
                }}
              >
                Oceans, deserts,
                rainforests, polar
                regions and the
                environments where
                different species live.
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
            How the Nature &amp;
            Animals Challenge Works
          </h2>

          <p
            style={{
              color: '#555',
            }}
          >
            The Nature &amp; Animals
            Challenge contains 10
            multiple-choice questions.
            Choose one answer for each
            question and receive
            immediate feedback before
            moving to the next one.
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
            extra piece of information
            about the natural world as
            you play.
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
            to complete the final Mind
            Sprint challenge.
          </p>
        </section>

        {/* Why play */}
        <section
          style={{
            marginTop: '3rem',
          }}
        >
          <h2>
            Why Play a Nature &amp;
            Animals Quiz?
          </h2>

          <p
            style={{
              color: '#555',
            }}
          >
            Nature quizzes are a
            simple way to test what you
            know about the living world
            and discover facts about
            species and environments
            you may not encounter every
            day.
          </p>

          <p
            style={{
              color: '#555',
            }}
          >
            Because the challenge
            covers a wide range of
            animals, plants and
            ecosystems, each round can
            test a different part of
            your knowledge.
          </p>
        </section>

        {/* Rotation */}
        <section
          style={{
            marginTop: '3rem',
          }}
        >
          <h2>
            Fresh Nature Questions
            Every Day
          </h2>

          <p
            style={{
              color: '#555',
            }}
          >
            Mind Sprint uses rotating
            question sets, so the
            Nature &amp; Animals
            Challenge changes from day
            to day. Returning players
            can come back and test
            themselves with a different
            group of questions.
          </p>

          <p
            style={{
              color: '#555',
            }}
          >
            Nature &amp; Animals is one
            of nine Mind Sprint
            categories, alongside
            General Knowledge, Word
            &amp; Language, Pop
            Culture, History, Smart
            Numbers, Science,
            Geography and Sports.
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
            Ready to Test Your Nature
            Knowledge?
          </h2>

          <p
            style={{
              color: '#555',
              marginBottom:
                '1.5rem',
            }}
          >
            Take 10 nature and animal
            questions and see if you
            can score at least 8 out
            of 10.
          </p>

          <Link
            href="/puzzle/1?challenge=9"
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
              Start Nature &amp; Animals Quiz
            </a>
          </Link>
        </section>
      </main>
    </>
  )
}
