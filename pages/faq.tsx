// pages/faq.tsx
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function FAQ() {
  return (
    <Layout>
      <Head>
        <title>FAQ | Mind Sprint</title>
        <meta
          name="description"
          content="Frequently asked questions about Mind Sprint — how challenges work, streaks, rotations, privacy, and more."
        />
      </Head>

      <main style={{ maxWidth: 800, margin: '2rem auto', padding: '0 1rem', lineHeight: 1.6 }}>
        <h1>FAQ</h1>
        <p style={{ color: '#555', marginTop: '0.5rem' }}>
          Quick answers about how Mind Sprint works. If you still have questions, visit{' '}
          <Link href="/about" legacyBehavior>
            <a style={{ textDecoration: 'underline' }}>About & Contact</a>
          </Link>
          .
        </p>

        <h2 style={{ marginTop: '2rem' }}>How does Mind Sprint work?</h2>
        <p>
          Mind Sprint is a set of 7 challenges. Each challenge contains quick questions (one per page). Your score is
          tracked for that challenge and you can unlock the next one when you pass.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Do I need an account?</h2>
        <p>No. There’s no login required — just tap and play.</p>

        <h2 style={{ marginTop: '2rem' }}>How do streaks work?</h2>
        <p>
          Your streak increases when you answer correctly and resets when you miss. Your highest streak is saved on your
          device.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Do the questions change?</h2>
        <p>
          Yes — some challenges may rotate questions over time so repeat visits stay fresh. The challenge category stays
          the same (for example, “Words & Language” stays “Words & Language”), but the exact questions can rotate.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Why do I sometimes see a short “Did you know?” fact?</h2>
        <p>
          Some questions include a short fact to add context and make the challenge more interesting. It’s optional, and
          it’s kept brief so the design stays clean.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Is Mind Sprint kid-friendly?</h2>
        <p>
          The site is designed for general audiences. Questions are intended to be approachable, but not “little kid”
          easy.
        </p>

        <h2 style={{ marginTop: '2rem' }}>How do ads work?</h2>
        <p>
          We may show ads to support the site. Ads can be managed by our ad partner (such as Ezoic) and may be tailored
          depending on your consent preferences.
        </p>

        <h2 style={{ marginTop: '2rem' }}>What data do you collect?</h2>
        <p>
          We collect basic analytics and site usage data to improve the experience. For details, see our{' '}
          <Link href="/privacy" legacyBehavior>
            <a style={{ textDecoration: 'underline' }}>Privacy Policy</a>
          </Link>
          .
        </p>

        <h2 style={{ marginTop: '2rem' }}>How can I contact you?</h2>
        <p>
          Use the contact details on our{' '}
          <Link href="/about" legacyBehavior>
            <a style={{ textDecoration: 'underline' }}>About</a>
          </Link>{' '}
          page.
        </p>

        <div style={{ marginTop: '2.5rem' }}>
          <Link href="/puzzle/1?challenge=1" legacyBehavior>
            <a
              style={{
                display: 'inline-block',
                padding: '10px 16px',
                border: '1px solid #111',
                borderRadius: 8,
                background: '#fff',
                textDecoration: 'none',
              }}
            >
              Start a Challenge →
            </a>
          </Link>
        </div>
      </main>
    </Layout>
  )
}
