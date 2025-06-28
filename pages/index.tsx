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
    <div className="quiz-page">
      <Head>
        <title>Mind Sprint</title>
        <meta
          name="description"
          content="Choose your unlocked challenge and go!"
        />
      </Head>

      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>🧠 Mind Sprint</h1>
        <p>Select one of your unlocked challenges:</p>
        {[...Array(unlocked)].map((_, i) => (
          <Link key={i} href={`/puzzle/${i + 1}`}>
            <button
              style={{ margin: '0.5rem', padding: '10px 20px', fontSize: 16 }}
            >
              Challenge {i + 1}
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}
