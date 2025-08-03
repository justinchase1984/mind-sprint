// pages/index.tsx
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout hideHeaderOnHome>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '6rem', // raise it higher
          maxWidth: 800,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <Head>
          <title>🧠 Mind Sprint</title>
          <meta
            name="description"
            content="What is Mind Sprint? It’s a bite-sized trivia & brain challenge platform. Solve 7 quick puzzles—each on its own page—at your own pace. Keep your streak alive and unlock a bonus when you complete all 7. No login required, just tap and play."
          />
        </Head>

        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
          <span role="img" aria-label="brain">
            🧠
          </span>{' '}
          <strong>Mind Sprint</strong>
        </h1>
        <p style={{ fontSize: '1rem', lineHeight: 1.3, maxWidth: 600, margin: '0.5rem auto 1.5rem' }}>
          What is Mind Sprint? It’s a bite-sized trivia & brain challenge platform. Solve 7 quick puzzles—each on its own page—at your own pace. Keep your streak alive and unlock a bonus when you complete all 7. No login required, just tap and play.
        </p>
        <Link href="/puzzle/1?challenge=1" legacyBehavior>
          <button
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              cursor: 'pointer',
              borderRadius: 4,
              border: '1px solid #000',
              background: '#f5f5f5',
            }}
          >
            Get Started
          </button>
        </Link>
      </div>
    </Layout>
  )
}
