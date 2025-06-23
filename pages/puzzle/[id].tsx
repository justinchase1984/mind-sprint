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
  const { query } = router
  const tomorrowMode = query.tomorrow === '1'
  // if previewing tomorrow, pass tomorrow’s date; otherwise today
  const pickDate = tomorrowMode
    ? new Date(Date.now() + 24 * 60 * 60 * 1000)
    : undefined

  const puzzles = getDailyPuzzles(pickDate)
  const idNum   = parseInt((query.id as string) || '1', 10)
  const puzzle  = puzzles[idNum - 1]

  // reset score at #1
  useEffect(() => {
    if (idNum === 1) sessionStorage.setItem('dailyCorrect', '0')
  }, [idNum])

  // clear selection
  const [, setSel] = useState<string>('')
  useEffect(() => setSel(''), [idNum])

  if (!puzzle) {
    const score = parseInt(sessionStorage.getItem('dailyCorrect') || '0', 10)
    const pass  = score >= 8
    return (
      <>
        <Head><title>Your Results | Mind Sprint</title></Head>
        <main style={{ textAlign: 'center', padding: '2rem' }}>
          <h1>🎉 You’ve completed {tomorrowMode ? "Tomorrow’s" : "Today’s"} challenge!</h1>
          <p style={{ fontSize: '1.2rem' }}>
            You scored <strong>{score}/{puzzles.length}</strong>
          </p>

          {pass ? (
            <>
              <p style={{ color: 'green' }}>
                Congrats—you’ve unlocked {tomorrowMode ? "the day after tomorrow’s" : "tomorrow’s"} challenge!
              </p>
              {/* Link uses the same ?tomorrow flag to go forward one day again */}
              <Link href={`/puzzle/1?tomorrow=${tomorrowMode ? '2' : '1'}`}>
                <button style={{ margin: '0.5rem', padding: '8px 16px' }}>
                  Start {tomorrowMode ? "Day After Tomorrow’s" : "Tomorrow’s"} Challenge
                </button>
              </Link>
            </>
          ) : (
            <p style={{ color: 'red' }}>
              You need 8/10 to unlock the next day. Try again tomorrow!
            </p>
          )}

          <Link href="/"><button style={{ marginTop: '1rem', padding: '8px 16px' }}>Back Home</button></Link>
        </main>
      </>
    )
  }

  const handleAnswer = (choice: string) => {
    const isCorrect = choice === puzzle.answer
    let { current, max } = getStreaks()
    if (isCorrect) current++ else current = 0
    if (current > max) max = current
    saveStreaks(current, max)

    let count = parseInt(sessionStorage.getItem('dailyCorrect') || '0', 10)
    if (isCorrect) count++
    sessionStorage.setItem('dailyCorrect', count.toString())

    router.push(`/puzzle/${idNum + 1}${tomorrowMode ? '?tomorrow=1' : ''}`)
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
