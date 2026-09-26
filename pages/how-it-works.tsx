// pages/how-it-works.tsx
import Head from 'next/head'
import Link from 'next/link'

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>How Mind Sprint Works | Trivia & Brain Challenges</title>

        <meta
          name="description"
          content="Learn how Mind Sprint works: play 7 challenges with 10 questions each, track your score and streak, unlock new challenges, and earn weekly prize draw entries."
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
        <h1 style={{ marginBottom: '0.5rem' }}>
          How Mind Sprint Works
        </h1>

        <p
          style={{
            color: '#777',
            fontSize: 14,
            marginTop: 0,
          }}
        >
          By Mind Sprint · Updated September 2026
        </p>

        <p style={{ color: '#555' }}>
          Mind Sprint is a short-form trivia and brain-challenge experience.
          There are <strong>7 challenges</strong>, and each challenge contains{' '}
          <strong>10 questions</strong>, shown one question per page.
        </p>

        <p style={{ color: '#555' }}>
          You can play one challenge when you have a few spare minutes or keep
          progressing through several challenges in the same session.
        </p>

        {/* Optional Ezoic ad slot */}
        <div style={{ margin: '1.25rem 0', textAlign: 'center' }}>
          <div id="ezoic-pub-ad-placeholder-200" />
        </div>

        <h2 style={{ marginTop: '1.75rem' }}>The Basic Flow</h2>

        <ol style={{ color: '#222' }}>
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

        <h2 style={{ marginTop: '1.75rem' }}>Scores and Feedback</h2>

        <p style={{ color: '#555' }}>
          After choosing an answer, Mind Sprint shows whether you were correct
          before moving to the next question. At the end of the challenge,
          you’ll see your total score out of 10.
        </p>

        <p style={{ color: '#555' }}>
          Some questions also include a short “Did you know?” fact to add
          context or an interesting piece of information after you answer.
        </p>

        <h2 style={{ marginTop: '1.75rem' }}>Streaks</h2>

        <p style={{ color: '#555' }}>
          Your streak increases when you answer correctly and resets when you
          miss a question. Your best streak is saved locally on your device so
          you can keep track of your personal best.
        </p>

        <p style={{ color: '#555' }}>
          Because streak information is stored on your device, clearing browser
          data or switching devices may reset it.
        </p>

        <h2 style={{ marginTop: '1.75rem' }}>Fresh Question Sets</h2>

        <p style={{ color: '#555' }}>
          Mind Sprint question sets rotate over time so returning players can
          encounter different material rather than seeing exactly the same set
          every time.
        </p>

        <p style={{ color: '#555' }}>
          Challenges can include general knowledge, words, memory, patterns and
          reasoning-style questions.
        </p>

        {/* Optional Ezoic ad slot */}
        <div style={{ margin: '1.25rem 0', textAlign: 'center' }}>
          <div id="ezoic-pub-ad-placeholder-201" />
        </div>

        <h2 style={{ marginTop: '1.75rem' }}>Weekly Prize Draw</h2>

        <p style={{ color: '#555' }}>
          When the Mind Sprint weekly prize draw is active, eligible players
          can choose to enter by providing an email address.
        </p>

        <p style={{ color: '#555' }}>
          Each <strong>different challenge</strong> completed during the weekly
          draw period earns <strong>1 entry</strong>. Because there are 7
          challenges, the maximum is <strong>7 entries per week</strong>.
        </p>

        <p style={{ color: '#555' }}>
          Replaying the same challenge during the same weekly draw does not
          create another entry for that challenge, and your score does not
          change the number of entries you receive.
        </p>

        <p style={{ color: '#555' }}>
          The planned weekly digital reward is worth approximately{' '}
          <strong>A$25 or the local-currency equivalent</strong>. One eligible
          entry is randomly selected after the completed weekly draw period.
        </p>

        <p style={{ color: '#555' }}>
          The first official draw will begin when Mind Sprint announces that
          the weekly prize draw is live.
        </p>

        <p>
          <Link href="/weekly-prize-draw-terms" legacyBehavior>
            <a
              style={{
                color: '#000',
                textDecoration: 'underline',
              }}
            >
              Read the Weekly Prize Draw Terms
            </a>
          </Link>
        </p>

        <h2 style={{ marginTop: '1.75rem' }}>Do I Need an Account?</h2>

        <p style={{ color: '#555' }}>
          No account or login is required to play Mind Sprint.
        </p>

        <p style={{ color: '#555' }}>
          An email address is only required if you choose to participate in the
          weekly prize draw so Mind Sprint can associate entries with you and
          contact you if your entry is selected.
        </p>

        <p style={{ color: '#555' }}>
          Ongoing Mind Sprint email updates are separate and optional.
        </p>

        <p>
          <Link href="/privacy" legacyBehavior>
            <a
              style={{
                color: '#000',
                textDecoration: 'underline',
              }}
            >
              Read the Privacy Policy
            </a>
          </Link>
        </p>

        <h2 style={{ marginTop: '1.75rem' }}>A Few Tips</h2>

        <ul style={{ color: '#222' }}>
          <li>Start with one challenge and play at your own pace.</li>

          <li>
            Complete different challenges if you want to build more weekly draw
            entries once the draw is live.
          </li>

          <li>
            Come back as the question sets rotate if you want to try fresh
            material.
          </li>

          <li>
            If you spot an incorrect answer or technical issue, let Mind Sprint
            know through the contact details on the About page.
          </li>
        </ul>

        {/* Optional Ezoic ad slot */}
        <div style={{ margin: '1.5rem 0', textAlign: 'center' }}>
          <div id="ezoic-pub-ad-placeholder-202" />
        </div>

        <div
          style={{
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid #eee',
          }}
        >
          <h2 style={{ fontSize: 20 }}>Learn More</h2>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
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
              Start Challenge 1
            </a>
          </Link>
        </div>
      </main>
    </>
  )
}
