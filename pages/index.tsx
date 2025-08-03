// pages/index.tsx
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>🧠 Mind Sprint</title>
        <meta
          name="description"
          content="Mind Sprint is a bite-sized trivia & brain challenge platform. Solve 7 quick puzzles—each on its own page—at your own pace. Keep your streak alive and unlock a bonus reward when you complete all 7. No login required, just tap and play."
        />
      </Head>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 220px)',
          textAlign: 'center',
          padding: '1rem 1rem 0',
        }}
      >
        <h1
          style={{
            fontSize: '2rem',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <span style={{ fontSize: '1.5rem' }}>🧠</span> Mind Sprint
        </h1>
        <p
          style={{
            fontSize: '1rem',
            maxWidth: 600,
            lineHeight: 1.4,
            marginTop: '1rem',
          }}
        >
          What is Mind Sprint? It’s a bite-sized trivia & brain challenge platform. Solve 7 quick
          puzzles—each on its own page—at your own pace. Keep your streak alive and unlock a bonus
          when you complete all 7. No login required, just tap and play.
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
              marginTop: '2rem',
            }}
          >
            Get Started
          </button>
        </Link>
      </div>
    </>
  )
}
