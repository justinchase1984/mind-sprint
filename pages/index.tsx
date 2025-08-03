// pages/index.tsx
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout hideHeader>
      <Head>
        <title>🧠 Mind Sprint</title>
        <meta
          name="description"
          content="What is Mind Sprint? It’s a bite-sized trivia & brain challenge platform. Solve 7 quick puzzles—each on its own page—at your own pace. Keep your streak alive and unlock a bonus when you complete all 7. No login required, just tap and play."
        />
      </Head>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '6rem',
          textAlign: 'center',
          maxWidth: 800,
          margin: '0 auto',
          gap: '1rem',
        }}
      >
        <h1 style={{ fontSize: '2rem', margin: 0, display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: '1.5rem' }}>🧠</span> Mind Sprint
        </h1>
        <p style={{ fontSize: '1rem', maxWidth: 600, lineHeight: 1.3, margin: 0 }}>
          What is Mind Sprint? It’s a bite-sized trivia & brain challenge platform. Solve 7 quick puzzles—each on its own
          page—at your own pace. Keep your streak alive and unlock a bonus when you complete all 7. No login required,
          just tap and play.
        </p>
        <Link href="/puzzle/1?challenge=1" legacyBehavior>
          <button
            style={{
              padding: '12px 24px',
              fontSize: '1rem',
              cursor: 'pointer',
              borderRadius: 4,
              border: '1px solid #000',
              background: '#fff',
              marginTop: '1rem',
            }}
          >
            Get Started
          </button>
        </Link>
      </div>
    </Layout>
  )
}
