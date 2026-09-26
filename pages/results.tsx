// pages/results.tsx
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getStreaks } from '../lib/streak'

export default function Results() {
  const [maxStreak, setMaxStreak] = useState(0)

  useEffect(() => {
    const { max } = getStreaks()
    setMaxStreak(max)
  }, [])

  return (
    <>
      <Head>
        <title>All Challenges Complete | Mind Sprint</title>

        <meta
          name="description"
          content="You completed all 7 Mind Sprint challenges. See your best streak and play again."
        />
      </Head>

      <main
        style={{
          maxWidth: 760,
          margin: '0 auto',
          padding: '4rem 1rem',
          textAlign: 'center',
          lineHeight: 1.7,
        }}
      >
        <div style={{ fontSize: 42, marginBottom: '0.5rem' }}>
          🏁
        </div>

        <h1 style={{ marginBottom: '0.75rem' }}>
          All 7 Challenges Complete
        </h1>

        <p
          style={{
            fontSize: 18,
            color: '#555',
            maxWidth: 580,
            margin: '0 auto 1.5rem',
          }}
        >
          You made it through every Mind Sprint challenge.
        </p>

        <div
          style={{
            maxWidth: 420,
            margin: '0 auto 2rem',
            padding: '1.5rem',
            border: '1px solid #e5e5e5',
            borderRadius: 10,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 16,
              color: '#555',
            }}
          >
            Your best streak
          </p>

          <p
            style={{
              margin: '0.5rem 0 0',
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            🔥 {maxStreak}
          </p>
        </div>

        <p
          style={{
            color: '#555',
            maxWidth: 600,
            margin: '0 auto 2rem',
          }}
        >
          Question sets rotate over time, so you can come back and try Mind
          Sprint again as fresh sets become available.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <Link href="/puzzle/1?challenge=1" legacyBehavior>
            <a
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                background: '#111',
                color: '#fff',
                borderRadius: 6,
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              Play Again
            </a>
          </Link>

          <Link href="/" legacyBehavior>
            <a
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                border: '1px solid #ccc',
                color: '#111',
                borderRadius: 6,
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              Back to Home
            </a>
          </Link>
        </div>

        <p
          style={{
            marginTop: '2rem',
            fontSize: 14,
            color: '#777',
          }}
        >
          Your best streak remains saved on this device.
        </p>
      </main>
    </>
  )
}
