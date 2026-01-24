// pages/how-it-works.tsx
import Head from 'next/head'

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>How It Works | Mind Sprint</title>
        <meta
          name="description"
          content="How Mind Sprint works: 7 bite-sized challenges, one question per page, streak tracking, and a bonus reward at the end. No login required."
        />
      </Head>

      <main style={{ maxWidth: 900, margin: '2.25rem auto', padding: '0 1rem' }}>
        <h1 style={{ marginBottom: '0.75rem' }}>How Mind Sprint Works</h1>

        <p style={{ color: '#555', lineHeight: 1.6, marginTop: 0 }}>
          Mind Sprint is a quick daily-style brain workout. You’ll play through <strong>7 challenges</strong>, and each
          challenge contains <strong>10 questions</strong> (one per page). Your score is tracked for the challenge, and
          you unlock the next one when you pass.
        </p>

        {/* ✅ Optional Ad slot area (top content page) */}
        <div style={{ margin: '1.25rem 0', textAlign: 'center' }}>
          <div id="ezoic-pub-ad-placeholder-200" />
        </div>

        <h2 style={{ marginTop: '1.5rem' }}>The basic flow</h2>
        <ol style={{ lineHeight: 1.7, color: '#222' }}>
          <li>
            Tap <strong>Get Started</strong> on the home page.
          </li>
          <li>
            Answer the questions in <strong>Challenge 1</strong> (10 total).
          </li>
          <li>
            You’ll see your <strong>score</strong> at the end of the challenge.
          </li>
          <li>
            If you pass, you’ll unlock the next challenge and continue.
          </li>
          <li>
            Finish all 7 challenges to reach the <strong>final reward</strong> screen.
          </li>
        </ol>

        <h2 style={{ marginTop: '1.5rem' }}>What kind of challenges are they?</h2>
        <p style={{ color: '#555', lineHeight: 1.6 }}>
          The challenges rotate over time, so you’ll see fresh sets. Some are straight trivia, some are word-based, some
          are visual puzzles, and one is a short memory round — all designed to be fun and not “gotcha” weird.
        </p>

        {/* ✅ Optional Ad slot area (middle content page) */}
        <div style={{ margin: '1.25rem 0', textAlign: 'center' }}>
          <div id="ezoic-pub-ad-placeholder-201" />
        </div>

        <h2 style={{ marginTop: '1.5rem' }}>Streaks</h2>
        <p style={{ color: '#555', lineHeight: 1.6 }}>
          Your streak increases when you answer correctly and resets when you miss. Your best streak is saved on your
          device.
        </p>

        <h2 style={{ marginTop: '1.5rem' }}>Quick tips</h2>
        <ul style={{ lineHeight: 1.7, color: '#222' }}>
          <li>Play one challenge at a time — it’s meant to be bite-sized.</li>
          <li>If a set feels too easy or too hard, come back later — rotations keep it fresh.</li>
          <li>Consistency beats intensity: short daily play works best.</li>
        </ul>

        {/* ✅ Optional Ad slot area (bottom content page) */}
        <div style={{ margin: '1.5rem 0 0', textAlign: 'center' }}>
          <div id="ezoic-pub-ad-placeholder-202" />
        </div>
      </main>
    </>
  )
}
