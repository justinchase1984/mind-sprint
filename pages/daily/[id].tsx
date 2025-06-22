// File: pages/daily/[id].tsx
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEvent, useState, useEffect } from 'react'
import Link from 'next/link'
import type { Puzzle } from '../../lib/puzzles'
import { getStreaks, saveStreaks } from '../../lib/streak'
import { getDailyPuzzles } from '../../lib/utils'

export default function DailyPuzzlePage() {
  const router = useRouter()
  const { isReady, query } = router

  // State for today's 10 puzzles
  const [puzzles, setPuzzles] = useState<Puzzle[]>([])
  // State for current answer input
  const [answer, setAnswer] = useState('')

  // Once router is ready, load the daily set
  useEffect(() => {
    if (!isReady) return
    setPuzzles(getDailyPuzzles())
  }, [isReady])

  // Parse current puzzle index
  const idNum = isReady ? parseInt(query.id as string, 10) : NaN
  const puzzle = puzzles[idNum - 1]

  // Clear answer when moving to a new puzzle
  useEffect(() => {
    setAnswer('')
  }, [idNum])

  // While loading puzzles, don't render
  if (!isReady || puzzles.length === 0) return null

  // If we've passed the last puzzle, show the results link
  if (!puzzle) {
    return (
      <>
        <Head>
          <title>Daily Done! | Mind Sprint</title>
        </Head>
        <main style={{ textAlign: 'center', padding: '2rem' }}>
          <h1>🎉 You’ve completed today’s challenge!</h1>
          <Link href="/results">
            <button style={{ marginTop: '1rem', padding: '8px 16px' }}>
              See Results
            </button>
          </Link>
        </main>
      </>
    )
  }

  // Handle each answer submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isCorrect =
      answer.trim().toLowerCase() === puzzle.answer.toLowerCase()
    let { current, max } = getStreaks()
    if (isCorrect) {
      current += 1
    } else {
      current = 0
    }
    if (current > max) {
      max = current
    }
    saveStreaks(current, max)
    router.push(`/daily/${idNum + 1}`)
  }

  return (
    <div className="quiz-page">
      {/* Top banner */}
      <div
        className="header"
        style={{
          background: '#ddd',
          height: 90,
          textAlign: 'center',
          lineHeight: '90px',
        }}
      >
        Daily Challenge — {new Date().toLocaleDateString()}
      </div>

      {/* Left ad */}
      <div className="adL" style={{ background: '#eee' }}>
        Ad Left
      </div>

      {/* Main puzzle area */}
      <div className="main">
        <Head>
          <title>Daily Puzzle {idNum} | Mind Sprint</title>
          <meta name="description" content={puzzle.question} />
        </Head>
        <h2>Puzzle {idNum}</h2>
        <p>{puzzle.question}</p>
        <form onSubmit={handleSubmit}>
          <input
            name="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            autoComplete="off"
            placeholder="Your answer…"
            required
            style={{ padding: '8px', fontSize: '16px', width: '200px' }}
          />
          <button
            type="submit"
            style={{ marginLeft: '10px', padding: '8px 16px' }}
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right ad */}
      <div className="adR" style={{ background: '#eee' }}>
        Ad Right
      </div>

      {/* Bottom banner */}
      <div
        className="footer"
        style={{
          background: '#ddd',
          height: 90,
          textAlign: 'center',
          lineHeight: '90px',
        }}
      >
        Ad Banner Bottom
      </div>
    </div>
  )
}
