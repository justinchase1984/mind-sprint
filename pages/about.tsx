// pages/about.tsx
import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About Mind Sprint | Trivia & Brain Challenges</title>

        <meta
          name="description"
          content="Learn about Mind Sprint, our trivia and brain challenges, how the site works, and how to contact us."
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
        <h1>About Mind Sprint</h1>

        <p style={{ color: '#777', marginTop: '-0.5rem' }}>
          By Mind Sprint · Updated September 2026
        </p>

        <p>
          Mind Sprint is an independent trivia and brain-challenge website
          designed around short, easy-to-play challenges involving general
          knowledge, memory, words, patterns and problem-solving.
        </p>

        <p>
          The idea is simple: give players something interesting to think about
          without requiring a long test or complicated setup. Each Mind Sprint
          challenge contains 10 questions, shown one question per page, with
          immediate feedback and a score at the end.
        </p>

        <h2>What You Can Play</h2>

        <p>
          Mind Sprint currently includes 7 different challenges. Question sets
          rotate over time so returning players can encounter fresh material
          rather than seeing exactly the same questions every time.
        </p>

        <p>
          Depending on the challenge, questions may involve trivia, language,
          memory, patterns or general reasoning.
        </p>

        <h2>Why Mind Sprint Exists</h2>

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

        <h2>How Our Content Works</h2>

        <p>
          Mind Sprint questions and challenge sets are created and organised
          specifically for the site. We aim to keep questions clear,
          understandable and suitable for a general audience.
        </p>

        <p>
          Some questions also include short “Did you know?” facts to provide
          additional context or interesting information after an answer.
        </p>

        <p>
          Questions and explanatory information are reviewed as the site is
          maintained. If you notice an incorrect answer, outdated fact or
          technical problem, please let us know so it can be reviewed.
        </p>

        <h2>Weekly Prize Draw — Coming Soon</h2>

        <p>
          Mind Sprint is preparing a weekly promotional prize draw. The prize
          draw is not currently live.
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
          <Link href="/weekly-prize-draw-terms" legacyBehavior>
            <a
              style={{
                color: '#000',
                textDecoration: 'underline',
              }}
            >
              Read the Planned Weekly Prize Draw Terms
            </a>
          </Link>
        </p>

        <h2>Publisher Information</h2>

        <p>
          Mind Sprint is independently operated from Queensland, Australia.
        </p>

        <p>
          The site is maintained specifically for Mind Sprint players, including
          the creation and organisation of challenge content, question
          rotations, explanatory facts and website features.
        </p>

        <p>
          Mind Sprint is intended primarily for entertainment, trivia and
          general knowledge. It is not a medical service and does not claim that
          playing its challenges can diagnose, treat or prevent health
          conditions.
        </p>

        <h2>Contact Mind Sprint</h2>

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

        <div
          style={{
            marginTop: '2.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid #eee',
          }}
        >
          <h2 style={{ fontSize: 20 }}>Explore Mind Sprint</h2>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
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

            <Link href="/privacy" legacyBehavior>
              <a style={{ color: '#000', textDecoration: 'underline' }}>
                Privacy Policy
              </a>
            </Link>

            <Link href="/terms" legacyBehavior>
              <a style={{ color: '#000', textDecoration: 'underline' }}>
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
          <Link href="/puzzle/1?challenge=1" legacyBehavior>
            <a
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                background: '#111',
                color: '#fff',
                borderRadius: 6,
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              Play Mind Sprint
            </a>
          </Link>
        </div>
      </main>
    </>
  )
}
