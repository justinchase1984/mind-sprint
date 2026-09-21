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
          content="Quick answers about Mind Sprint challenges, streaks, weekly prize draw entries and digital rewards."
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
          Mind Sprint is a set of 7 challenges. Each challenge contains 10 quick
          questions, shown one per page. Your score is tracked for that challenge
          and you can unlock the next one when you pass.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Do I need an account?</h2>
        <p>
          No. There’s no login required — just tap and play. If you want to enter
          the weekly prize draw, you’ll need to provide your email address so we
          can record your entries and contact you if you win.
        </p>

        <h2 style={{ marginTop: '2rem' }}>How do weekly prize draw entries work?</h2>
        <p>
          Once you’ve joined the weekly draw, every different challenge you
          complete during the week earns 1 entry.
        </p>

        <p>
          There are 7 challenges available, so you can earn a maximum of 7
          entries per week.
        </p>

        <h2 style={{ marginTop: '2rem' }}>
          Can I earn extra entries by replaying the same challenge?
        </h2>
        <p>
          No. Replaying a challenge does not create another entry for that same
          challenge during the same weekly draw.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Does my score affect my entries?</h2>
        <p>
          No. Your score does not change the number of entries you receive.
          Completing an eligible challenge earns 1 entry.
        </p>

        <h2 style={{ marginTop: '2rem' }}>What is the weekly prize?</h2>
        <p>
          One winner is selected from the eligible entries for the completed
          week. The weekly digital reward is worth approximately{' '}
          <strong>A$25 or the local-currency equivalent</strong>.
        </p>

        <h2 style={{ marginTop: '2rem' }}>How is the prize delivered?</h2>
        <p>
          The winner receives the digital reward by email. Available gift card
          and digital reward options depend on the winner’s country.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Which countries can receive the reward?</h2>
        <p>
          Mind Sprint is currently designed to support players in Australia,
          the United States, the United Kingdom and Canada.
        </p>

        <h2 style={{ marginTop: '2rem' }}>How is the winner selected?</h2>
        <p>
          Each eligible challenge completion counts as one entry in the weekly
          draw. A winner is randomly selected from the eligible entries after
          the weekly entry period has finished.
        </p>

        <h2 style={{ marginTop: '2rem' }}>How will I know if I win?</h2>
        <p>
          We’ll contact the winner using the email address they used to join
          Mind Sprint.
        </p>

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
