// pages/puzzle/[id].tsx
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState, useMemo, FormEvent } from 'react'
import Link from 'next/link'
import type { Puzzle } from '../../lib/puzzles'
import { getStreaks, saveStreaks } from '../../lib/streak'
import { getPuzzlesByDayIndex } from '../../lib/utils'

// Helper for ordinals: 1→"1st", 2→"2nd", etc.
function ordinal(n: number): string {
  if (n % 10 === 1 && n % 100 !== 11) return `${n}st`
  if (n % 10 === 2 && n % 100 !== 12) return `${n}nd`
  if (n % 10 === 3 && n % 100 !== 13) return `${n}rd`
  return `${n}th`
}

export default function PuzzlePage() {
  const router = useRouter()
  const { query } = router

  // 1) Which challenge (1–7)?
  const challengeIndex = (() => {
    const q = query.challenge as string | undefined
    if (q && !isNaN(+q)) return +q
    if (typeof window !== 'undefined')
      return parseInt(localStorage.getItem('unlockedChallenge') || '1', 10)
    return 1
  })()

  // 2) Load that challenge’s puzzles
  const puzzles: Puzzle[] = getPuzzlesByDayIndex(challengeIndex)

  // 3) Which question ID (1–10)?
  const idNum = parseInt((query.id as string) || '1', 10)
  const puzzle = puzzles[idNum - 1]

  // 4) On the very first question, reset everything:
  useEffect(() => {
    if (idNum === 1) {
      // reset daily correct count
      sessionStorage.setItem('dailyCorrect', '0')
      // clear each per-question flag for this challenge
      puzzles.forEach((_p, idx) => {
        sessionStorage.removeItem(`challenge${challengeIndex}_q${idx + 1}`)
      })
    }
  }, [idNum, challengeIndex, puzzles])

  // 5) Memory-day detection
  const isMemoryDay = challengeIndex === 5
  const total = isMemoryDay ? 10 : puzzles.length

  // 6) Flash sequence & ask index
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

  // 7) Answer input state
  const [userAns, setUserAns] = useState('')
  useEffect(() => setUserAns(''), [idNum])

  // 8) Unified after-answer handler
  function afterAnswer(isCorrect: boolean) {
    // streak logic
    let { current, max } = getStreaks()
    if (isCorrect) current += 1
    else current = 0
    if (current > max) max = current
    saveStreaks(current, max)

    // daily score (once-per-question)
    const key = `challenge${challengeIndex}_q${idNum}`
    const already = sessionStorage.getItem(key)
    let cnt = parseInt(sessionStorage.getItem('dailyCorrect') || '0', 10)
    if (isCorrect && !already) {
      cnt += 1
      sessionStorage.setItem(key, '1')
    }
    sessionStorage.setItem('dailyCorrect', cnt.toString())

    // navigate forward
    router.push(`/puzzle/${idNum + 1}?challenge=${challengeIndex}`)
  }

  // memory-day form handler
  const handleMemorySubmit = (e: FormEvent) => {
    e.preventDefault()
    afterAnswer(userAns.trim() === flashSeq[askIndex])
  }

  // —— layout using a simple 3×3 grid —— 
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        gridTemplateColumns: '1fr minmax(0,800px) 1fr',
        rowGap: '1rem',
        minHeight: '100vh',
        background: '#fff',
      }}
    >
      <Head>
        <title>
          {idNum > total
            ? `Results | Challenge ${challengeIndex}`
            : `Challenge ${challengeIndex} – Puzzle ${idNum}`}
        </title>
      </Head>

      {/* top slot (ads go here) */}
      <div style={{ gridColumn: '1 / -1' }} />

      {/* left slot */}
      <div />

      {/* center content */}
      <main style={{ padding: '2rem 0', textAlign: 'center' }}>
        {idNum > total ? (
          // —— Results screen —— 
          (() => {
            const score = parseInt(
              sessionStorage.getItem('dailyCorrect') || '0',
              10
            )
            const passed = score >= 8
            if (passed && challengeIndex < 7) {
              localStorage.setItem(
                'unlockedChallenge',
                String(challengeIndex + 1)
              )
            }
            return (
              <>
                <h1>🎉 You’ve completed Challenge {challengeIndex}!</h1>
                <p>You scored <strong>{score}/{total}</strong></p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginTop: '1rem',
                  }}
                >
                  {passed ? (
                    <Link href={`/puzzle/1?challenge=${challengeIndex + 1}`}>
                      <button style={{ padding: '8px 16px' }}>
                        Start Challenge {challengeIndex + 1}
                      </button>
                    </Link>
                  ) : (
                    <Link href={`/puzzle/1?challenge=${challengeIndex}`}>
                      <button style={{ padding: '8px 16px' }}>
                        You scored {score}/{total}. Try Again
                      </button>
                    </Link>
                  )}
                  <Link href="/">
                    <button style={{ padding: '8px 16px' }}>
                      Back to Home
                    </button>
                  </Link>
                </div>
              </>
            )
          })()
        ) : isMemoryDay ? (
          // —— Memory day UI —— 
          showFlash ? (
            <div style={{ fontSize: '2rem' }}>{flashSeq.join(' – ')}</div>
          ) : (
            <>
              <h2>Challenge 5</h2>
              <p>
                What was the <strong>{ordinal(askIndex + 1)}</strong> number you saw?
              </p>
              <form onSubmit={handleMemorySubmit}>
                <input
                  type="text"
                  value={userAns}
                  onChange={e => setUserAns(e.target.value)}
                  placeholder="Type the number…"
                  style={{ padding: '8px', fontSize: 16 }}
                  required
                />
                <button
                  type="submit"
                  style={{ marginLeft: 10, padding: '8px 16px' }}
                >
                  Submit
                </button>
              </form>
            </>
          )
        ) : (
          // —— All other MCQs —— 
          <>
            <h2>Challenge {challengeIndex}</h2>
            <p>{puzzle.question}</p>
            {puzzle.options.map(opt => {
              const picked = opt.trim().toLowerCase()
              const correct = puzzle.answer.trim().toLowerCase()
              return (
                <button
                  key={opt}
                  onClick={() => afterAnswer(picked === correct)}
                  style={{
                    display: 'block',
                    margin: '8px auto',
                    padding: '10px 20px',
                    width: '80%',
                    cursor: 'pointer',
                  }}
                >
                  {opt}
                </button>
              )
            })}
          </>
        )}
      </main>

      {/* right slot */}
      <div />

      {/* bottom slot */}
      <div style={{ gridColumn: '1 / -1' }} />
    </div>
  )
}
