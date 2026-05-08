// pages/puzzle/[id].tsx
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

  useEffect(() => {
    if (idNum === 1) {
      sessionStorage.setItem('dailyCorrect', '0')
      setScore(0)

      puzzles.forEach((_p, idx) =>
        sessionStorage.removeItem(`challenge${challengeIndex}_q${idx + 1}`)
      )
    }
  }, [idNum, challengeIndex, puzzles])

  const [selected, setSelected] = useState<string | null>(null)
  const [locked, setLocked] = useState(false)

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

  /*
  ✅ FIXED AWEBER LOAD (FORCES RE-INIT)
  */
  useEffect(() => {
    if (!isResults) return

    const container = document.getElementById('aweber-form-container')
    if (!container) return

    // clear previous
    container.innerHTML = ''

    // remove old script if exists
    const existing = document.getElementById('aweber-wjs')
    if (existing) existing.remove()

    // create new script
    const script = document.createElement('script')
    script.id = 'aweber-wjs'
    script.src = 'https://forms.aweber.com/form/51/317058051.js'
    script.async = true

    container.appendChild(script)
  }, [isResults])

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

      {!isResults && (
        <div style={{ textAlign: 'center', marginBottom: '1rem', width: '100%' }}>
          <div id="ezoic-pub-ad-placeholder-100" />
        </div>
      )}

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

                <p style={{ fontSize: 20, margin: '10px 0' }}>
                  You scored <strong>{score}/{total}</strong>
                </p>

                <p style={{ fontSize: 18 }}>{label}</p>

                <div style={{ marginTop: '1rem' }}>
                  {passed ? (
                    <Link href={`/puzzle/1?challenge=${challengeIndex + 1}`}>
                      <button style={{ padding: '12px 20px', fontSize: 16 }}>
                        Continue →
                      </button>
                    </Link>
                  ) : (
                    <Link href={`/puzzle/1?challenge=${challengeIndex}`}>
                      <button style={{ padding: '12px 20px', fontSize: 16 }}>
                        Try Again
                      </button>
                    </Link>
                  )}
                </div>

                <p style={{ marginTop: '1.5rem', color: '#555' }}>
                  Come back tomorrow for a new challenge.
                </p>

                {/* ✅ EMAIL SECTION */}
                <div
                  style={{
                    marginTop: '2rem',
                    padding: '1rem',
                    border: '1px solid #eee',
                    borderRadius: 8,
                  }}
                >
                  <p style={{ marginBottom: 10 }}>
                    🎁 Enter for weekly prize draws + daily brain challenges
                  </p>

                  <div
                    style={{
                      maxWidth: 400,
                      margin: '0 auto',
                      padding: '1rem',
                      background: '#fafafa',
                      borderRadius: 10,
                      border: '1px solid #eee',
                    }}
                  >
                    {/* 🔥 IMPORTANT CHANGE */}
                    <div id="aweber-form-container"></div>
                  </div>
                </div>
              </>
            )
          })()
        ) : (
          <>
            <h2>Challenge {challengeIndex}</h2>

            <p style={{ marginBottom: '0.5rem', color: '#555' }}>
              Score: {score}
            </p>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: 14, marginBottom: 4 }}>
                Question {idNum} of {total}
              </div>

              <div
                style={{
                  height: 8,
                  background: '#eee',
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${(idNum / total) * 100}%`,
                    background: '#4caf50',
                    height: '100%',
                  }}
                />
              </div>
            </div>

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
                style={{
                  display: 'block',
                  margin: '10px auto',
                  padding: '12px 16px',
                  width: '85%',
                  borderRadius: 8,
                  border: '1px solid #ddd',
                  fontSize: 16,
                  cursor: 'pointer',
                  background:
                    locked && opt === puzzle.answer
                      ? '#4caf50'
                      : locked && opt === selected
                      ? '#f44336'
                      : '#fff',
                  color: locked ? '#fff' : '#000',
                }}
              >
                {opt}
              </button>
            ))}

            {locked && (
              <p style={{ marginTop: 10, fontWeight: 500 }}>
                {selected === puzzle.answer ? 'Correct ✅' : 'Incorrect ❌'}
              </p>
            )}

            <div id="ezoic-pub-ad-placeholder-101" style={{ margin: '1rem 0' }} />

            {DID_YOU_KNOW[factKey] && (
              <p style={{ fontStyle: 'italic', margin: '1rem 0', color: '#555' }}>
                {DID_YOU_KNOW[factKey]}
              </p>
            )}
          </>
        )}

        {!isResults && (
          <div id="ezoic-pub-ad-placeholder-102" style={{ marginTop: '1rem' }} />
        )}
      </main>
    </div>
  )
}
