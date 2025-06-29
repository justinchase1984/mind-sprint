// pages/puzzle/[id].tsx
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState, useMemo, FormEvent } from 'react'
import Link from 'next/link'
import type { Puzzle } from '../../lib/puzzles'
import { getStreaks, saveStreaks } from '../../lib/streak'
import { getPuzzlesByDayIndex } from '../../lib/utils'

// Helper to render 1st, 2nd, 3rd…
function ordinal(n: number): string {
  if (n % 10 === 1 && n % 100 !== 11) return `${n}st`
  if (n % 10 === 2 && n % 100 !== 12) return `${n}nd`
  if (n % 10 === 3 && n % 100 !== 13) return `${n}rd`
  return `${n}th`
}

export default function PuzzlePage() {
  const router = useRouter()
  const { query } = router

  // --- Which challenge number (1–7) ---
  const challengeIndex = (() => {
    const q = query.challenge as string | undefined
    if (q && !isNaN(+q)) return +q
    if (typeof window !== 'undefined')
      return parseInt(localStorage.getItem('unlockedChallenge') || '1', 10)
    return 1
  })()

  // --- Load that challenge’s puzzles ---
  const puzzles: Puzzle[] = getPuzzlesByDayIndex(challengeIndex)

  // --- Which question in that challenge (1–10) ---
  const idNum = parseInt((query.id as string) || '1', 10)
  const puzzle = puzzles[idNum - 1]

  // --- Reset score at start ---
  useEffect(() => {
    if (idNum === 1) sessionStorage.setItem('dailyCorrect', '0')
  }, [idNum])

  // --- Memory‐day logic (challenge 5) ---
  const isMemoryDay = challengeIndex === 5
  const total = isMemoryDay ? 10 : puzzles.length

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

  // --- Input state & clear on new puzzle ---
  const [userAns, setUserAns] = useState('')
  useEffect(() => setUserAns(''), [idNum])

  // --- After‐answer handler ---
  function afterAnswer(isCorrect: boolean) {
    // streak
    let { current, max } = getStreaks()
    if (isCorrect) current += 1
    else current = 0
    if (current > max) max = current
    saveStreaks(current, max)

    // daily correct count (once per question)
    const key = `challenge${challengeIndex}_q${idNum}`
    const already = sessionStorage.getItem(key)
    let cnt = parseInt(sessionStorage.getItem('dailyCorrect') || '0', 10)
    if (isCorrect && !already) {
      cnt += 1
      sessionStorage.setItem(key, '1')
    }
    sessionStorage.setItem('dailyCorrect', cnt.toString())

    // next question (preserve ?challenge)
    router.push(`/puzzle/${idNum + 1}?challenge=${challengeIndex}`)
  }

  const handleMemorySubmit = (e: FormEvent) => {
    e.preventDefault()
    afterAnswer(userAns.trim() === flashSeq[askIndex])
  }

  // ===== Results screen =====
  if (idNum > total) {
    const score = parseInt(sessionStorage.getItem('dailyCorrect') || '0', 10)
    const passed = score >= 8
    if (passed && challengeIndex < 7) {
      localStorage.setItem(
        'unlockedChallenge',
        String(challengeIndex + 1)
      )
    }
    return (
      <>
        <Head><title>Your Results | Mind Sprint</title></Head>
        <main style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>🎉 You’ve completed Challenge {challengeIndex}!</h1>
          <p>You scored <strong>{score}/{total}</strong></p>
          {passed ? (
            <Link href={`/puzzle/1?challenge=${challengeIndex + 1}`}>
              <button style={{ margin: '1rem', padding: '8px 16px' }}>
                Start Challenge {challengeIndex + 1}
              </button>
            </Link>
          ) : (
            <Link href={`/puzzle/1?challenge=${challengeIndex}`}>
              <button style={{ margin: '1rem', padding: '8px 16px' }}>
                You scored {score}/{total}. Try Again
              </button>
            </Link>
          )}
          <br/>
          <Link href="/"><button style={{ marginTop: '1rem', padding: '8px 16px' }}>
            Back to Home
          </button></Link>
        </main>
      </>
    )
  }

  // ===== Memory‐day UI =====
  if (isMemoryDay) {
    if (showFlash) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center', fontSize: '2rem' }}>
          {flashSeq.join(' – ')}
        </div>
      )
    }
    return (
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <Head><title>Challenge 5 – Memory</title></Head>
        <h2>Challenge 5</h2>
        <p>What was the <strong>{ordinal(askIndex + 1)}</strong> number you saw?</p>
        <form onSubmit={handleMemorySubmit}>
          <input
            type="text"
            value={userAns}
            onChange={e => setUserAns(e.target.value)}
            placeholder="Type the number..."
            style={{ padding: '8px', fontSize: 16 }}
            required
          />
          <button type="submit" style={{ marginLeft: 10, padding: '8px 16px' }}>
            Submit
          </button>
        </form>
      </main>
    )
  }

  // ===== MCQ for all other challenges =====
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <Head>
        <title>Challenge {challengeIndex} – Puzzle {idNum}</title>
        <meta name="description" content={puzzle.question} />
      </Head>
      <h2>Challenge {challengeIndex}</h2>
      <p>{puzzle.question}</p>
      {puzzle.options.map(opt => (
        <button
          key={opt}
          onClick={() => afterAnswer(opt === puzzle.answer)}
          style={{
            display: 'block',
            margin: '8px auto',
            padding: '10px 20px',
            width: '80%',
            cursor: 'pointer'
          }}
        >
          {opt}
        </button>
      ))}
    </main>
  )
}
