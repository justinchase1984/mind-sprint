// pages/puzzle/[id].tsx
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState, useMemo, FormEvent } from 'react'
import Link from 'next/link'
import type { Puzzle } from '../../lib/puzzles'
import { getStreaks, saveStreaks } from '../../lib/streak'
import { getDailyPuzzles, getPuzzlesByDayIndex } from '../../lib/utils'

// Helper to render ordinals: 1 → "1st", 2 → "2nd", etc.
function ordinal(n: number): string {
  if (n % 10 === 1 && n % 100 !== 11) return `${n}st`
  if (n % 10 === 2 && n % 100 !== 12) return `${n}nd`
  if (n % 10 === 3 && n % 100 !== 13) return `${n}rd`
  return `${n}th`
}

export default function PuzzlePage() {
  const router = useRouter()
  const { query } = router

  // Preview/tomorrow flags
  const previewDay = query.previewDay ? +query.previewDay : NaN
  const tomorrowMode = isNaN(previewDay) && query.tomorrow === '1'

  // Pick the right pool
  let puzzles: Puzzle[] = []
  if (!isNaN(previewDay)) {
    puzzles = getPuzzlesByDayIndex(previewDay)
  } else {
    const pickDate = tomorrowMode
      ? new Date(Date.now() + 24 * 60 * 60 * 1000)
      : undefined
    puzzles = getDailyPuzzles(pickDate)
  }

  const total = puzzles.length
  const idNum  = parseInt((query.id as string) || '1', 10)
  const puzzle = puzzles[idNum - 1]

  // Compute display day number
  const displayDay = !isNaN(previewDay)
    ? previewDay
    : ((new Date().getDay() + 6) % 7) + (tomorrowMode ? 2 : 1)

  // Reset daily score on first puzzle
  useEffect(() => {
    if (idNum === 1) sessionStorage.setItem('dailyCorrect', '0')
  }, [idNum])

  // ========= Day 5: Memory Challenge Logic =========
  const isMemoryDay = displayDay === 5

  // Generate a fresh 5-digit sequence each puzzle
  const flashSeq = useMemo<string[]>(() => {
    if (!isMemoryDay) return []
    return Array.from({ length: 5 }, () =>
      String(Math.ceil(Math.random() * 9))
    )
  }, [idNum, isMemoryDay])

  // Pick a random ask index (0–4) each load
  const askIndex = useMemo<number>(() => {
    if (!isMemoryDay) return 2
    return Math.floor(Math.random() * flashSeq.length)
  }, [idNum, flashSeq, isMemoryDay])

  // Control flash visibility
  const [showFlash, setShowFlash] = useState(isMemoryDay)
  useEffect(() => {
    if (isMemoryDay) {
      setShowFlash(true)
      const timer = setTimeout(() => setShowFlash(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [idNum, isMemoryDay])

  // User’s answer input, cleared on each new puzzle
  const [userAns, setUserAns] = useState('')
  useEffect(() => { setUserAns('') }, [idNum])
  // =================================================

  // Unified handler after any answer
  function afterAnswer(isCorrect: boolean) {
    // Streak logic
    let { current, max } = getStreaks()
    if (isCorrect) current++ 
    else current = 0
    if (current > max) max = current
    saveStreaks(current, max)

    // Daily score
    let cnt = parseInt(sessionStorage.getItem('dailyCorrect') || '0', 10)
    if (isCorrect) cnt++
    sessionStorage.setItem('dailyCorrect', cnt.toString())

    // Advance to next puzzle, preserving flags
    const flag = !isNaN(previewDay)
      ? `?previewDay=${previewDay}`
      : tomorrowMode
      ? '?tomorrow=1'
      : ''
    router.push(`/puzzle/${idNum + 1}${flag}`)
  }

  // Handler for Day 5 form submit
  const handleMemorySubmit = (e: FormEvent) => {
    e.preventDefault()
    afterAnswer(userAns.trim() === flashSeq[askIndex])
  }

  // ========== Results Screen ==========
  if (idNum > total) {
    const score = parseInt(sessionStorage.getItem('dailyCorrect') || '0', 10)
    const passed = score >= 8
    return (
      <>
        <Head><title>Your Results | Mind Sprint</title></Head>
        <main style={{ textAlign: 'center', padding: '2rem' }}>
          <h1>🎉 You’ve completed Day {displayDay} Challenge!</h1>
          <p style={{ fontSize: '1.2rem' }}>
            You scored <strong>{score}/{total}</strong>
          </p>
          {passed && isNaN(previewDay) && !tomorrowMode ? (
            <>
              <p style={{ color: 'green' }}>
                Congrats—you’ve unlocked tomorrow’s challenge!
              </p>
              <Link href="/puzzle/1?tomorrow=1">
                <button style={{ margin: '0.5rem', padding: '8px 16px' }}>
                  Start Tomorrow’s Challenge
                </button>
              </Link>
            </>
          ) : !passed ? (
            <p style={{ color: 'red' }}>
              You need 8/10 to unlock tomorrow. Try again tomorrow!
            </p>
          ) : null}
          <Link href="/"><button style={{ marginTop: '1rem', padding: '8px 16px' }}>
            Back Home
          </button></Link>
        </main>
      </>
    )
  }

  // ========== Day 5 UI ==========
  if (isMemoryDay) {
    if (showFlash) {
      return (
        <div style={{ textAlign: 'center', padding: '2rem', fontSize: '2rem' }}>
          {flashSeq.join(' – ')}
        </div>
      )
    }
    return (
      <div className="quiz-page">
        <div className="header" style={{ background: '#ddd', height: 90, textAlign: 'center', lineHeight: '90px' }}>
          Ad Banner Top
        </div>
        <div className="adL" style={{ background: '#eee' }}>Ad Left</div>
        <div className="main" style={{ textAlign: 'center', padding: '2rem' }}>
          <Head><title>Day 5 – Memory Challenge</title></Head>
          <h2>Day 5 Challenge</h2>
          <p style={{ marginBottom: '1rem' }}>
            What was the <strong>{ordinal(askIndex + 1)}</strong> number you saw?
          </p>
          <form onSubmit={handleMemorySubmit}>
            <input
              type="text"
              value={userAns}
              onChange={e => setUserAns(e.target.value)}
              placeholder="Type the number..."
              autoComplete="off"
              style={{ padding: '8px', fontSize: 16, width: 150 }}
              required
            />
            <button type="submit" style={{ marginLeft: 10, padding: '8px 16px' }}>
              Submit
            </button>
          </form>
        </div>
        <div className="adR" style={{ background: '#eee' }}>Ad Right</div>
        <div className="footer" style={{ background: '#ddd', height: 90, textAlign: 'center', lineHeight: '90px' }}>
          Ad Banner Bottom
        </div>
      </div>
    )
  }

  // ========== All Other Days: MCQ ==========
  return (
    <div className="quiz-page">
      <div className="header" style={{ background: '#ddd', height: 90, textAlign: 'center', lineHeight: '90px' }}>
        Ad Banner Top
      </div>
      <div className="adL" style={{ background: '#eee' }}>Ad Left</div>
      <div className="main" style={{ textAlign: 'center', padding: '2rem' }}>
        <Head>
          <title>Day {displayDay} – Puzzle {idNum}</title>
          <meta name="description" content={puzzle?.question || ''} />
        </Head>
        <h2>Day {displayDay} Challenge</h2>
        <p>{puzzle?.question}</p>
        {puzzle?.options.map(opt => (
          <button
            key={opt}
            onClick={() => afterAnswer(opt === puzzle.answer)}
            style={{
              display: 'block', margin: '10px auto', padding: '10px 20px',
              width: '80%', background: '#f0f0f0', border: '1px solid #ccc',
              borderRadius: 4, cursor: 'pointer'
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
