// pages/index.tsx
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mind Sprint | Trivia & Brain Challenges</title>

        <meta
          name="description"
          content="Play 7 bite-sized Mind Sprint challenges with 10 questions each. Test your trivia, memory and problem-solving skills, build your streak, and return for fresh rotating question sets."
        />
      </Head>

      <main>
        {/* Hero */}
        <section
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding: '4rem 1rem 2.5rem',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(30px, 5vw, 44px)',
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            <span style={{ fontSize: '1.8rem' }}>🧠</span>
            Mind Sprint
          </h1>

          <p
            style={{
              fontSize: 'clamp(16px, 2.2vw, 18px)',
              color: '#555',
              lineHeight: 1.6,
              maxWidth: 640,
              margin: '0 auto 1.75rem',
            }}
          >
            Bite-sized trivia and brain challenges designed to give your mind
            something interesting to think about. Play through 7 challenges
            with 10 questions each, test your knowledge, build your streak and
            come back for fresh rotating question sets.
          </p>

          <Link href="/puzzle/1?challenge=1" legacyBehavior>
            <a
              style={{
                display: 'inline-block',
                padding: '12px 26px',
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: 6,
                border: '1px solid #000',
                background: '#111',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              Start Challenge 1
            </a>
          </Link>

          <p
            style={{
              marginTop: '1rem',
              fontSize: 13,
              color: '#777',
            }}
          >
            No account required to play.
          </p>
        </section>

        {/* Quick overview */}
        <section
          style={{
            maxWidth: 900,
            margin: '0 auto',
            padding: '1rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            <div
              style={{
                border: '1px solid #e6e6e6',
                borderRadius: 10,
                padding: '1.25rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 24 }}>🎯</div>

              <h2 style={{ fontSize: 18, marginBottom: 6 }}>
                7 Challenges
              </h2>

              <p style={{ color: '#666', margin: 0, lineHeight: 1.5 }}>
                Work your way through seven different Mind Sprint challenges.
              </p>
            </div>

            <div
              style={{
                border: '1px solid #e6e6e6',
                borderRadius: 10,
                padding: '1.25rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 24 }}>🧩</div>

              <h2 style={{ fontSize: 18, marginBottom: 6 }}>
                10 Questions Each
              </h2>

              <p style={{ color: '#666', margin: 0, lineHeight: 1.5 }}>
                One question per page keeps every challenge quick and easy to
                follow.
              </p>
            </div>

            <div
              style={{
                border: '1px solid #e6e6e6',
                borderRadius: 10,
                padding: '1.25rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 24 }}>🔄</div>

              <h2 style={{ fontSize: 18, marginBottom: 6 }}>
                Fresh Rotations
              </h2>

              <p style={{ color: '#666', margin: 0, lineHeight: 1.5 }}>
                Question sets rotate over time so returning players can keep
                testing themselves.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding: '2.5rem 1rem',
          }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
            How Mind Sprint Works
          </h2>

          <ol
            style={{
              lineHeight: 1.8,
              color: '#333',
              maxWidth: 620,
              margin: '0 auto',
            }}
          >
            <li>Start Challenge 1 and answer 10 quick questions.</li>

            <li>See your score and streak when the challenge is complete.</li>

            <li>
              Pass the challenge to unlock the next one and keep progressing.
            </li>

            <li>
              Come back over time as fresh question sets rotate into the
              challenges.
            </li>
          </ol>
        </section>

        {/* Weekly draw */}
        <section
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding: '2rem 1rem',
            textAlign: 'center',
          }}
        >
          <h2>🎁 Weekly Prize Draw — Coming Soon</h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.7,
              maxWidth: 650,
              margin: '0 auto',
            }}
          >
            Mind Sprint is preparing a weekly promotional prize draw. When the
            draw officially launches, eligible players will be able to earn one
            entry for each different Mind Sprint challenge they complete during
            the weekly entry period, up to seven entries.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: 1.7,
              maxWidth: 650,
              margin: '1rem auto 0',
            }}
          >
            The first official weekly draw will begin only when Mind Sprint
            announces on the website that entries are open. Challenge
            completions made before that launch will not count as prize draw
            entries.
          </p>

          <p style={{ marginTop: '1rem' }}>
            <Link href="/weekly-prize-draw-terms" legacyBehavior>
              <a
                style={{
                  color: '#000',
                  textDecoration: 'underline',
                }}
              >
                View Planned Prize Draw Terms
              </a>
            </Link>
          </p>
        </section>

        {/* Why Mind Sprint */}
        <section
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding: '2rem 1rem',
          }}
        >
          <h2 style={{ textAlign: 'center' }}>
            A Quick Challenge for Your Mind
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.7,
            }}
          >
            Mind Sprint is built around short challenges rather than long
            tests. You can play a single challenge when you have a few spare
            minutes or continue through several challenges in one session.
            Questions cover a mix of trivia, words, memory and general
            brain-teaser style challenges.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: 1.7,
            }}
          >
            The aim is simple: give yourself something interesting to think
            about, see how you score, improve your streak and come back as the
            question sets change.
          </p>
        </section>

        {/* Explore */}
        <section
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding: '2rem 1rem 4rem',
            textAlign: 'center',
          }}
        >
          <h2>Explore Mind Sprint</h2>

          <p
            style={{
              color: '#555',
              lineHeight: 1.7,
              marginBottom: '1.25rem',
            }}
          >
            Learn more about the challenges, brain training and how Mind Sprint
            works.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            <Link href="/how-it-works" legacyBehavior>
              <a style={{ color: '#000', textDecoration: 'underline' }}>
                How It Works
              </a>
            </Link>

            <Link href="/brain-training" legacyBehavior>
              <a style={{ color: '#000', textDecoration: 'underline' }}>
                Brain Training
              </a>
            </Link>

            <Link href="/faq" legacyBehavior>
              <a style={{ color: '#000', textDecoration: 'underline' }}>
                FAQ
              </a>
            </Link>

            <Link href="/about" legacyBehavior>
              <a style={{ color: '#000', textDecoration: 'underline' }}>
                About Mind Sprint
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
