// pages/puzzle/[id].tsx
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

  // Reset daily score on puzzle #1
  useEffect(() => {
    if (idNum === 1) sessionStorage.setItem('dailyCorrect', '0')
  }, [idNum])

  // Clear selection (not strictly used here)
  const [sel, setSel] = useState('')
  useEffect(() => setSel(''), [idNum])

  // If no more puzzles, show results
  if (!puzzle) {
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
            <>
              <p style={{ color: 'green' }}>
                Congrats! You’ve unlocked tomorrow’s challenge!
              </p>
              <Link href="/puzzle/1">
                <button style={{ margin: '0.5rem', padding: '8px 16px' }}>
                  Start Tomorrow’s Challenge
                </button>
              </Link>
            </>
          ) : (
            <p style={{ color: 'red' }}>
              Need 8/10 to unlock tomorrow. Try again tomorrow!
            </p>
          )}
          <Link href="/"><button style={{ marginTop: '1rem', padding: '8px 16px' }}>Back Home</button></Link>
        </main>
      </>
    )
  }

  // Handle a choice click
  const handleAnswer = (choice: string) => {
    const isCorrect = choice === puzzle.answer
    let { current, max } = getStreaks()
    isCorrect ? current++ : (current = 0)
    if (current > max) max = current
    saveStreaks(current, max)

    let count = parseInt(sessionStorage.getItem('dailyCorrect') || '0', 10)
    if (isCorrect) count++
    sessionStorage.setItem('dailyCorrect', count.toString())

    router.push(`/puzzle/${idNum + 1}`)
  }

  return (
    <div className="quiz-page">
      <div className="header" style={{ background: '#ddd', height: 90, textAlign: 'center', lineHeight: '90px' }}>
        Ad Banner Top
      </div>
      <div className="adL" style={{ background: '#eee' }}>Ad Left</div>

      <div className="main" style={{ textAlign: 'center', padding: '2rem' }}>
        <Head>
          <title>Puzzle {idNum} | Mind Sprint</title>
          <meta name="description" content={puzzle.question} />
        </Head>
        <h2>Puzzle {idNum}</h2>
        <p>{puzzle.question}</p>

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

      <div className="adR" style={{ background: '#eee' }}>Ad Right</div>
      <div className="footer" style={{ background: '#ddd', height: 90, textAlign: 'center', lineHeight: '90px' }}>
        Ad Banner Bottom
      </div>
    </div>
  )
}
