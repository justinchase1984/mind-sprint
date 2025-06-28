// pages/puzzle/[id].tsx
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState, useMemo, FormEvent } from 'react'
import Link from 'next/link'
import type { Puzzle } from '../../lib/puzzles'
import { getStreaks, saveStreaks } from '../../lib/streak'
import { getPuzzlesByDayIndex } from '../../lib/utils'

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

  // 1) Decide which Challenge to show (1–7)
  const challengeIndex = (() => {
    // a) If URL has ?challenge=N, use that
    const q = query.challenge as string | undefined
    if (q && !isNaN(+q)) return +q
    // b) Otherwise fall back to unlockedChallenge in localStorage (default to 1)
    if (typeof window !== 'undefined') {
      return parseInt(localStorage.getItem('unlockedChallenge') || '1', 10)
    }
    // c) During server render, default to 1
    return 1
  })()

  // 2) Load that challenge’s puzzles
  const puzzles: Puzzle[] = getPuzzlesByDayIndex(challengeIndex)

  // 3) Which question number (1–10)
  const idNum = parseInt((query.id as string) || '1', 10)
  const puzzle = puzzles[idNum - 1]

  // Display label
  const displayChallenge = challengeIndex

  // Reset per‐challenge score at start
  useEffect(() => {
    if (idNum === 1) sessionStorage.setItem('dailyCorrect', '0')
  }, [idNum])

  // ==== Day 5 Memory Challenge logic ====
  const isMemoryDay = displayChallenge === 5
  const total = isMemoryDay ? 10 : puzzles.length

  // Flash sequence generator
  const flashSeq = useMemo<string[]>(() => {
    if (!isMemoryDay) return []
    return Array.from({ length: 5 }, () =>
      String(Math.ceil(Math.random() * 9))
    )
  }, [idNum, isMemoryDay])

  const askIndex = useMemo(() => {
    if (!isMemoryDay) return 2
    return Math.floor(Math.random() * flashSeq.length)
  }, [flashSeq, isMemoryDay, idNum])

  const [showFlash, setShowFlash] = useState(isMemoryDay)
  useEffect(() => {
    if (!isMemoryDay) return
    setShowFlash(true)
    const t = setTimeout(() => setShowFlash(false), 3000)
    return () => clearTimeout(t)
  }, [idNum, isMemoryDay])

  // Answer input state
  const [userAns, setUserAns] = useState('')
  useEffect(() => setUserAns(''), [idNum])

  // Common answer handler
  function afterAnswer(isCorrect: boolean) {
    // Streak logic
    let { current, max } = getStreaks()
    if (isCorrect) current += 1
    else current = 0
    if (current > max) max = current
    saveStreaks(current, max)

    // Daily score (only count once per question)
    const key = `challenge${displayChallenge}_q${idNum}`
    const already = sessionStorage.getItem(key)
    let cnt = parseInt(sessionStorage.getItem('dailyCorrect') || '0', 10)
    if (isCorrect && !already) {
      cnt += 1
      sessionStorage.setItem(key, '1')
    }
    sessionStorage.setItem('dailyCorrect', cnt.toString())

    // Navigate to next question, preserving challengeIndex
    router.push(`/puzzle/${idNum + 1}?challenge=${displayChallenge}`)
  }

  // Memory‐day form submit
  const handleMemorySubmit = (e: FormEvent) => {
    e.preventDefault()
    afterAnswer(userAns.trim() === flashSeq[askIndex])
  }

  // ======= Results Screen =======
  if (idNum > total) {
    const score = parseInt(sessionStorage.getItem('dailyCorrect') || '0', 10)
    const passed = score >= 8

    // Unlock next challenge on ≥8
    if (passed && displayChallenge < 7) {
      localStorage.setItem(
        'unlockedChallenge',
        String(displayChallenge + 1)
      )
    }

    return (
      <>
        <Head>
          <title>Your Results | Mind Sprint</title>
        </Head>
        <main style={{ textAlign: 'center', padding: '2rem' }}>
          <h1>🎉 You’ve completed Challenge {displayChallenge}!</h1>
          <p style={{ fontSize: '1.2rem' }}>
            You scored <strong>{score}/{total}</strong>
          </p>
          {passed ? (
            <Link href={`/puzzle/1?challenge=${displayChallenge + 1}`}>
              <button style={{ margin: '0.5rem', padding: '8px 16px' }}>
                Start Challenge {displayChallenge + 1}
              </button>
            </Link>
          ) : (
            <Link href={`/puzzle/1?challenge=${displayChallenge}`}>
              <button style={{ margin: '0.5rem', padding: '8px 16px' }}>
                You scored {score}/{total}. Try Again
              </button>
            </Link>
          )}
          <Link href="/">
            <button style={{ marginTop: '1rem', padding: '8px 16px' }}>
              Back to Home
            </button>
          </Link>
        </main>
      </>
    )
  }

  // ======= Day 5 Memory UI =======
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
          <Head><title>Challenge 5 – Memory</title></Head>
          <h2>Challenge 5</h2>
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

  // ======= All Other Challenges: MCQ =======
  return (
    <div className="quiz-page">
      <div className="header" style={{ background: '#ddd', height: 90, textAlign: 'center', lineHeight: '90px' }}>
        Ad Banner Top
      </div>
      <div className="adL" style={{ background: '#eee' }}>Ad Left</div>
      <div className="main" style={{ textAlign: 'center', padding: '2rem' }}>
        <Head>
          <title>Challenge {displayChallenge} – Puzzle {idNum}</title>
          <meta name="description" content={puzzle.question} />
        </Head>
        <h2>Challenge {displayChallenge}</h2>
        <p>{puzzle.question}</p>
        {puzzle.options.map(opt => (
          <button
            key={opt}
            onClick={() => afterAnswer(opt === puzzle.answer)}
            style={{
              display: 'block',
              margin: '10px auto',
              padding: '10px 20px',
              width: '80%',
              background: '#f0f0f0',
              border: '1px solid #ccc',
              borderRadius: 4,
              cursor: 'pointer'
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
