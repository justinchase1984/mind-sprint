import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { Puzzle } from '../../lib/puzzles'
import { getStreaks, saveStreaks } from '../../lib/streak'
import { getRotatingPuzzlesByChallenge } from '../../lib/rotation'
import { DID_YOU_KNOW } from '../../lib/facts'

export default function PuzzlePage() {
  const router = useRouter()
  const { query } = router

  const challengeIndex = (() => {
    const q = query.challenge as string | undefined
    if (q && !isNaN(+q)) return +q
    if (typeof window !== 'undefined')
      return parseInt(localStorage.getItem('unlockedChallenge') || '1', 10)
    return 1
  })()

  const puzzles: Puzzle[] = getRotatingPuzzlesByChallenge(challengeIndex)
  const idNum = parseInt((query.id as string) || '1', 10)
  const puzzle = puzzles[idNum - 1]

  const total = puzzles.length
  const isResults = idNum > total

  const [score, setScore] = useState(0)

  const [selected, setSelected] = useState<string | null>(null)
  const [locked, setLocked] = useState(false)

  // ✅ EMAIL STATE
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (idNum === 1) {
      sessionStorage.setItem('dailyCorrect', '0')
      setScore(0)

      puzzles.forEach((_p, idx) =>
        sessionStorage.removeItem(`challenge${challengeIndex}_q${idx + 1}`)
      )
    }
  }, [idNum, challengeIndex, puzzles])

  useEffect(() => {
    setSelected(null)
    setLocked(false)
  }, [idNum])

  function afterAnswer(isCorrect: boolean) {
    let { current, max } = getStreaks()

    if (isCorrect) current += 1
    else current = 0

    if (current > max) max = current

    saveStreaks(current, max)

    const key = `challenge${challengeIndex}_q${idNum}`
    const already = sessionStorage.getItem(key)
    let cnt = parseInt(sessionStorage.getItem('dailyCorrect') || '0', 10)

    if (isCorrect && !already) {
      cnt += 1
      sessionStorage.setItem(key, '1')
    }

    if (isCorrect) setScore((prev) => prev + 1)

    sessionStorage.setItem('dailyCorrect', cnt.toString())

    router.push(`/puzzle/${idNum + 1}?challenge=${challengeIndex}`)
  }

  const factKey = `${challengeIndex}-${idNum}`

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#fff',
        minHeight: '100vh',
        paddingTop: '1rem',
        paddingBottom: '2rem',
      }}
    >
      <Head>
        <title>
          {isResults
            ? `Results | Challenge ${challengeIndex}`
            : `Challenge ${challengeIndex} – Puzzle ${idNum}`}
        </title>
      </Head>

      <main style={{ width: '100%', maxWidth: 800, padding: '1rem', textAlign: 'center' }}>
        {isResults ? (
          (() => {
            const score = parseInt(sessionStorage.getItem('dailyCorrect') || '0', 10)

            let label = '😅 Needs Work'
            if (score >= 9) label = '🧠 Genius'
            else if (score >= 7) label = '🔥 Strong'
            else if (score >= 5) label = '👍 Solid'

            const passed = score >= 8

            if (passed && challengeIndex < 7) {
              localStorage.setItem('unlockedChallenge', String(challengeIndex + 1))
            }

            return (
              <>
                <h1>🎯 Challenge Complete</h1>

                <p style={{ fontSize: 20 }}>
                  You scored <strong>{score}/{total}</strong>
                </p>

                <p style={{ fontSize: 18 }}>{label}</p>

                <div style={{ marginTop: '1rem' }}>
                  {passed ? (
                    <Link href={`/puzzle/1?challenge=${challengeIndex + 1}`}>
                      <button>Continue →</button>
                    </Link>
                  ) : (
                    <Link href={`/puzzle/1?challenge=${challengeIndex}`}>
                      <button>Try Again</button>
                    </Link>
                  )}
                </div>

                {/* ✅ CLEAN EMAIL FORM */}
                <div
                  style={{
                    marginTop: '2rem',
                    padding: '1rem',
                    border: '1px solid #eee',
                    borderRadius: 8,
                    maxWidth: 400,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  <p>🎁 Enter for weekly prize draws</p>

                  {!submitted ? (
                    <>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px',
                          marginTop: 10,
                          borderRadius: 6,
                          border: '1px solid #ccc',
                        }}
                      />

                      <button
                        onClick={() => {
                          if (!email.includes('@')) {
                            alert('Enter a valid email')
                            return
                          }
                          setSubmitted(true)
                        }}
                        style={{
                          width: '100%',
                          marginTop: 10,
                          padding: '12px',
                          background: '#111',
                          color: '#fff',
                          border: 'none',
                          borderRadius: 6,
                          cursor: 'pointer',
                        }}
                      >
                        Join
                      </button>
                    </>
                  ) : (
                    <p style={{ color: 'green' }}>You're in ✅</p>
                  )}
                </div>
              </>
            )
          })()
        ) : (
          <>
            <h2>Challenge {challengeIndex}</h2>

            <p>{puzzle?.question}</p>

            {puzzle?.options.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  if (locked) return
                  setSelected(opt)
                  setLocked(true)

                  setTimeout(() => {
                    afterAnswer(opt === puzzle.answer)
                  }, 800)
                }}
              >
                {opt}
              </button>
            ))}
          </>
        )}
      </main>
    </div>
  )
}
