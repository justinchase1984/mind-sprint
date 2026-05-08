// pages/puzzle/[id].tsx
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState, FormEvent } from 'react'
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

  useEffect(() => {
    if (idNum === 1) {
      sessionStorage.setItem('dailyCorrect', '0')
      puzzles.forEach((_p, idx) =>
        sessionStorage.removeItem(`challenge${challengeIndex}_q${idx + 1}`)
      )
    }
  }, [idNum, challengeIndex, puzzles])

  const [userAns, setUserAns] = useState('')
  useEffect(() => setUserAns(''), [idNum])

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
            ? challengeIndex === 7
              ? 'All Done! | Mind Sprint'
              : `Results | Challenge ${challengeIndex}`
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

            if (challengeIndex === 7) {
              return (
                <>
                  <h1>🎉 Congratulations! You’ve completed all 7 challenges!</h1>
                  <p>
                    You scored <strong>{score}/{total}</strong>
                  </p>
                </>
              )
            }

            const passed = score >= 8
            if (passed && challengeIndex < 7) {
              localStorage.setItem('unlockedChallenge', String(challengeIndex + 1))
            }

            return (
              <>
                <h1>🎉 You’ve completed Challenge {challengeIndex}!</h1>
                <p>
                  You scored <strong>{score}/{total}</strong>
                </p>

                <div style={{ marginTop: '1rem' }}>
                  {passed ? (
                    <Link href={`/puzzle/1?challenge=${challengeIndex + 1}`}>
                      <button>Start Next Challenge</button>
                    </Link>
                  ) : (
                    <Link href={`/puzzle/1?challenge=${challengeIndex}`}>
                      <button>Try Again</button>
                    </Link>
                  )}
                </div>
              </>
            )
          })()
        ) : (
          <>
            <h2>Challenge {challengeIndex}</h2>

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
                onClick={() => afterAnswer(opt === puzzle.answer)}
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
            ))}

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
