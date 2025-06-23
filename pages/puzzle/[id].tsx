// File: pages/puzzle/[id].tsx
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { Puzzle } from '../../lib/puzzles'
import { getStreaks, saveStreaks } from '../../lib/streak'
import { getDailyPuzzles } from '../../lib/utils'

export default function PuzzlePage() {
  const router = useRouter()
  const puzzles = getDailyPuzzles()
  const idNum   = parseInt((router.query.id as string) || '1', 10)
  const puzzle  = puzzles[idNum - 1]

  // Reset daily score when you start at puzzle #1
  useEffect(() => {
    if (idNum === 1) {
      sessionStorage.setItem('dailyCorrect', '0')
    }
  }, [idNum])

  // Track selected answer (not strictly needed, but keeps hooks happy)
  const [selected, setSelected] = useState<string>('')

  // When we move to a new puzzle, clear selection
  useEffect(() => {
    setSelected('')
  }, [idNum])

  // If we've finished all puzzles, show results
  if (!puzzle) {
    // Read your correct count
    const score = parseInt(sessionStorage.getItem('dailyCorrect') || '0', 10)
    const pass  = score >= 8

    return (
      <>
        <Head><title>Your Results | Mind Sprint</title></Head>
        <main style={{ textAlign: 'center', padding: '2rem' }}>
          <h1>🎉 You’ve completed today’s challenge!</h1>
          <p style={{ fontSize: '1.2rem' }}>
            You scored <strong>{score}/{puzzles.length}</strong>
          </p>
          {pass ? (
            <p style={{ color: 'green' }}>
              Congrats! You scored {score}/{puzzles.length}.  
              You’ve unlocked tomorrow’s challenge!
            </p>
          ) : (
            <p style={{ color: 'red' }}>
              You need 8/10 or more to unlock tomorrow’s challenge.  
              Try again tomorrow!
            </p>
          )}
          <Link href="/"><button style={{ marginTop: '1rem', padding: '8px 16px' }}>Back Home</button></Link>
        </main>
      </>
    )
  }

  // Handle an answer click
  const handleAnswer = (choice: string) => {
    const isCorrect = choice === puzzle.answer
    // Update streak
    let { current, max } = getStreaks()
    if (isCorrect) current++ 
    else current = 0
    if (current > max) max = current
    saveStreaks(current, max)

    // Update daily correct count
    let count = parseInt(sessionStorage.getItem('dailyCorrect') || '0', 10)
    if (isCorrect) count++
    sessionStorage.setItem('dailyCorrect', count.toString())

    // Advance
    router.push(`/puzzle/${idNum + 1}`)
  }

  return (
    <div className="quiz-page">
      {/* Top Ad */}
      <div className="header" style={{ background: '#ddd', height: 90, textAlign: 'center', lineHeight: '90px' }}>
        Ad Banner Top
      </div>
      {/* Left Ad */}
      <div className="adL" style={{ background: '#eee' }}>Ad Left</div>

      {/* Main Puzzle */}
      <div className="main" style={{ textAlign: 'center', padding: '2rem' }}>
        <Head>
          <title>Puzzle {idNum} | Mind Sprint</title>
          <meta name="description" content={puzzle.question} />
        </Head>
        <h2>Puzzle {idNum}</h2>
        <p>{puzzle.question}</p>

        {/* Multiple-choice options */}
        {puzzle.options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleAnswer(opt)}
            style={{
              display: 'block',
              margin: '10px auto',
              padding: '10px 20px',
              width: '80%',
              background: '#f0f0f0',
              border: '1px solid #ccc',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Right Ad */}
      <div className="adR" style={{ background: '#eee' }}>Ad Right</div>
      {/* Bottom Ad */}
      <div className="footer" style={{ background: '#ddd', height: 90, textAlign: 'center', lineHeight: '90px' }}>
        Ad Banner Bottom
      </div>
    </div>
  )
}
