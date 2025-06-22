// File: pages/puzzle/[id].tsx
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEvent, useState, useEffect } from 'react'
import Link from 'next/link'
import type { Puzzle } from '../../lib/puzzles'
import { getStreaks, saveStreaks } from '../../lib/streak'
import { getDailyPuzzles } from '../../lib/utils'

export default function PuzzlePage() {
  const router = useRouter()
  const { isReady, query } = router

  // Load today's 10 puzzles once router is ready
  const [puzzles, setPuzzles] = useState<Puzzle[]>([])
  useEffect(() => {
    if (isReady) setPuzzles(getDailyPuzzles())
  }, [isReady])

  // Track the current answer
  const [answer, setAnswer] = useState('')
  // Reset answer whenever puzzle number changes
  const idNum = isReady ? parseInt(query.id as string, 10) : NaN
  useEffect(() => setAnswer(''), [idNum])

  // While loading or before puzzles arrive, show nothing
  if (!isReady || puzzles.length === 0) return null

  // If we've run out of puzzles, show the “finished” screen
  const puzzle = puzzles[idNum - 1]
  if (!puzzle) {
    return (
      <>
        <Head>
          <title>All done! | Mind Sprint</title>
        </Head>
        <main style={{ textAlign: 'center', padding: '2rem' }}>
          <h1>🎉 You’ve completed today’s challenge!</h1>
          <Link href="/"><button>Back Home</button></Link>
        </main>
      </>
    )
  }

  // Handle answer submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Check correctness and update streak
    const isCorrect = answer.trim().toLowerCase() === puzzle.answer.toLowerCase()
    let { current, max } = getStreaks()
    if (isCorrect) current += 1
    else current = 0
    if (current > max) max = current
    saveStreaks(current, max)

    // Go to next puzzle
    router.push(`/puzzle/${idNum + 1}`)
  }

  return (
    <div className="quiz-page">
      {/* Top ad */}
      <div
        className="header"
        style={{
          background: '#ddd',
          height: 90,
          textAlign: 'center',
          lineHeight: '90px',
        }}
      >
        Ad Banner Top
      </div>

      {/* Left ad */}
      <div className="adL" style={{ background: '#eee' }}>Ad Left</div>

      {/* Main content */}
      <div className="main" style={{ textAlign: 'center', padding: '2rem' }}>
        <Head>
          <title>Puzzle {idNum} | Mind Sprint</title>
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
            style={{ padding: '8px', fontSize: 16, width: 200 }}
          />
          <button type="submit" style={{ marginLeft: 10, padding: '8px 16px' }}>
            Submit
          </button>
        </form>
      </div>

      {/* Right ad */}
      <div className="adR" style={{ background: '#eee' }}>Ad Right</div>

      {/* Bottom ad */}
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
