// pages/index.tsx
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        gridTemplateColumns: '1fr minmax(0, 800px) 1fr',
        minHeight: '100vh',
        background: '#fff',
      }}
    >
      <Head>
        <title>🧠 Mind Sprint</title>
        <meta
          name="description"
          content="Start your Mind Sprint challenges—one question per page, 7 challenges to unlock the bonus!"
        />
      </Head>

      {/* Ad: Top */}
      <div id="ad-top" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '1rem' }} />

      {/* Ad: Left */}
      <div id="ad-left" />

      {/* Main Content */}
      <main
        style={{
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🧠 Mind Sprint</h1>
        <p style={{ maxWidth: 600, margin: '1rem auto', fontSize: '1.1rem' }}>
          Mind Sprint delivers a single, daily brain-teaser—one question per page. Sharpen your wits, build your streak, and come back tomorrow for a fresh challenge!
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          Start your Mind Sprint challenges:
        </p>
        <Link href="/puzzle/1?challenge=1">
          <button
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              cursor: 'pointer',
              borderRadius: 4,
            }}
          >
            Get Started
          </button>
        </Link>
      </main>

      {/* Ad: Right */}
      <div id="ad-right" />

      {/* Ad: Bottom */}
      <div id="ad-bottom" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '1rem' }} />
    </div>
  )
}
