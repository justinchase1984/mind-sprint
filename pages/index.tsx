// pages/index.tsx
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [unlocked, setUnlocked] = useState(1)

  useEffect(() => {
    // read how many Challenges they’ve unlocked (1–7)
    const val = parseInt(localStorage.getItem('unlockedChallenge') || '1', 10)
    setUnlocked(Math.min(Math.max(val, 1), 7))
  }, [])

  return (
    <div
      className="quiz-page"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 3fr 1fr',
        minHeight: '100vh'
      }}
    >
      <Head>
        <title>🧠 Mind Sprint</title>
        <meta
          name="description"
          content="Daily puzzles: trivia, scramble, logic, memory... unlock by scoring 8/10!"
        />
      </Head>

      {/* Top banner spans full width */}
      <div
        style={{
          gridColumn: '1 / -1',
          background: '#ddd',
          height: 90,
          textAlign: 'center',
          lineHeight: '90px'
        }}
      >
        Ad Banner Top
      </div>

      {/* Left ad */}
      <div style={{ background: '#eee' }}>Ad Left</div>

      {/* Main content */}
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>🧠 Mind Sprint</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          Start your Mind Sprint challenges:
        </p>
        {[...Array(unlocked)].map((_, i) => (
          <Link key={i} href={`/puzzle/${i + 1}`}>
            <button
              style={{
                display: 'block',
                margin: '0.5rem auto',
                padding: '10px 20px',
                fontSize: 16
              }}
            >
              Challenge {i + 1}
            </button>
          </Link>
        ))}
      </main>

      {/* Right ad */}
      <div style={{ background: '#eee' }}>Ad Right</div>

      {/* Bottom banner spans full width */}
      <div
        style={{
          gridColumn: '1 / -1',
          background: '#ddd',
          height: 90,
          textAlign: 'center',
          lineHeight: '90px'
        }}
      >
        Ad Banner Bottom
      </div>
    </div>
  )
}
