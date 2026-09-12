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
          content="Bite-sized trivia & brain challenges — 7 quick puzzles per challenge, one question per page. Play at your own pace, keep your streak alive, and earn an entry into our weekly digital reward draw for every challenge you complete. No login required — just tap and play."
        />
      </Head>

      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          minHeight: 'calc(100vh - 220px)', // leaves room for footer
          padding: '2rem 1rem',
          textAlign: 'center',
        }}
      >
        <section style={{ maxWidth: 720 }}>
          {/* Logo + Title */}
          <h1
            style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              marginBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            <span style={{ fontSize: '1.75rem' }}>🧠</span> Mind Sprint
          </h1>

          {/* Short description */}
          <p
            style={{
              fontSize: 'clamp(16px, 2.2vw, 18px)',
              color: '#555',
              margin: '0 auto 1.5rem',
              lineHeight: 1.5,
              maxWidth: 600,
            }}
          >
            Bite-sized trivia & brain challenges — 7 quick puzzles per challenge, one question per page.
Play at your own pace, keep your streak alive, and earn an entry into our weekly digital reward
draw for every challenge you complete. No login required — just tap and play.
          </p>

          {/* Get Started button */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/puzzle/1?challenge=1" legacyBehavior>
              <button
                style={{
                  padding: '12px 24px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  borderRadius: '6px',
                  border: '1px solid #000',
                  background: '#fff',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f5f5f5'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#fff'
                }}
              >
                Get Started
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
