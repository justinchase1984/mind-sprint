// File: pages/puzzle/[id].tsx
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEvent, useState, useEffect } from 'react'
import Link from 'next/link'
import type { Puzzle } from '../../lib/puzzles'         // import the shared type
import { getStreaks, saveStreaks } from '../../lib/streak'
import { getSessionPuzzles } from '../../lib/utils'

export default function PuzzlePage() {
  const router = useRouter()
  const { isReady, query } = router

  const [puzzles, setPuzzles] = useState<Puzzle[]>([])
  const [answer, setAnswer] = useState('')

  // Load session puzzles only after Next.js hydration
  useEffect(() => {
    if (!isReady) return
    setPuzzles(getSessionPuzzles(10))
  }, [isReady])

  const idNum = isReady ? parseInt(query.id as string, 10) : NaN
  const puzzle = puzzles[idNum - 1]

  // Clear the answer field whenever we move to a new puzzle
  useEffect(() => {
    setAnswer('')
  }, [idNum])

  // While loading, render nothing
  if (!isReady || puzzles.length === 0) return null

  // If we’re past the last puzzle, show the “finished” screen
  if (!puzzle) {
    return (
      <>
        <Head>
          <title>All done! | Mind Sprint</title>
          <meta
            name="description"
            content="You’ve finished all puzzles! Come back tomorrow for new challenges."
          />
        </Head>
        <main style={{ textAlign: 'center', padding: '2rem' }}>
          <h1>🎉 You’ve finished all puzzles!</h1>
          <Link href="/results">
            <button style={{ marginTop: '1rem', padding: '8px 16px' }}>
              See Results
            </button>
          </Link>
        </main>
      </>
    )
  }

  // Submission handler: record streak, always advance
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isCorrect =
      answer.trim().toLowerCase() === puzzle.answer.toLowerCase()
    let { current, max } = getStreaks()
    if (isCorrect) current += 1
    else current = 0
    if (current > max) max = current
    saveStreaks(current, max)
    router.push(`/puzzle/${idNum + 1}`)
  }

  return (
    <div className="quiz-page">
      <div
        className="header"
        style={{ background: '#ddd', height: 90, textAlign: 'center', lineHeight: '90px' }}
      >
        Ad Banner Top
      </div>
      <div className="adL" style={{ background: '#eee' }}>Ad Left</div>
      <div className="main">
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
            style={{ padding: '8px', fontSize: '16px', width: '200px' }}
          />
          <button type="submit" style={{ marginLeft: '10px', padding: '8px 16px' }}>
            Submit
          </button>
        </form>
      </div>
      <div className="adR" style={{ background: '#eee' }}>Ad Right</div>
      <div
        className="footer"
        style={{ background: '#ddd', height: 90, textAlign: 'center', lineHeight: '90px' }}
      >
        Ad Banner Bottom
      </div>
    </div>
  )
}
