// pages/how-it-works.tsx
import Head from 'next/head'

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>How It Works | Mind Sprint</title>
        <meta
          name="description"
          content="How Mind Sprint works: complete bite-sized brain challenges, track your streak, and earn entries into the weekly digital reward draw. No login required."
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
            Once you’ve joined the weekly draw, every challenge you complete earns <strong>1 entry</strong>.
          </li>
        </ol>

        <h2 style={{ marginTop: '1.5rem' }}>Weekly digital reward</h2>
        <p style={{ color: '#555', lineHeight: 1.6 }}>
          Complete challenges throughout the week to earn entries into the Mind Sprint weekly draw. Each completed
          challenge earns <strong>1 entry</strong>, with a maximum of <strong>7 entries per week</strong>. Replaying the
          same challenge does not create another entry.
        </p>

        <p style={{ color: '#555', lineHeight: 1.6 }}>
          One winner is selected from the eligible entries for the completed week. The weekly digital reward is worth
          approximately <strong>A$25 or the local-currency equivalent</strong> and is delivered by email, with available
          redemption options depending on the winner’s country.
        </p>

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
          <li>Complete different challenges throughout the week to earn more draw entries.</li>
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
