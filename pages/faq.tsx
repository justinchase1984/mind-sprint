// pages/faq.tsx
import Head from 'next/head'
import Link from 'next/link'

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ | Mind Sprint</title>
        <meta
          name="description"
          content="Quick answers about how Mind Sprint works."
        />
      </Head>

      <main style={{ maxWidth: 800, margin: '2rem auto', padding: '0 1rem' }}>
        <h1>FAQ</h1>
        <p style={{ color: '#555', marginTop: '0.5rem' }}>
          Quick answers about how Mind Sprint works. If you still have questions,
          visit{' '}
          <Link href="/about" legacyBehavior>
            <a style={{ textDecoration: 'underline' }}>About &amp; Contact</a>
          </Link>
          .
        </p>

        <h2 style={{ marginTop: '2rem' }}>How does Mind Sprint work?</h2>
        <p>
          Mind Sprint is a set of 7 challenges. Each challenge contains quick
          questions (one per page). Your score is tracked for that challenge and
          you can unlock the next one when you pass.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Do I need an account?</h2>
        <p>No. There’s no login required — just tap and play.</p>

        <h2 style={{ marginTop: '2rem' }}>How do streaks work?</h2>
        <p>
          Your streak increases when you answer correctly and resets when you
          miss. Your highest streak is saved on your device.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Do the questions change?</h2>
        <p>
          Yes — the question sets rotate over time so returning players see fresh
          sets.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Why do I see “Did you know?” facts?</h2>
        <p>
          We add a short fun fact to keep things interesting and add a bit more
          value without cluttering the design.
        </p>
      </main>
    </>
  )
}
