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
          content="7 quick puzzles, one question per page—go at your own pace, track your streak, and unlock the bonus."
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
        <p
          style={{
            fontSize: '1.1rem',
            margin: '0 auto 2rem',
            maxWidth: '600px',
          }}
        >
          7 quick puzzles, one question per page—go at your own pace, track your streak, and unlock the bonus.
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
