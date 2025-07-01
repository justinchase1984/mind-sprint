// pages/puzzle/[id].tsx
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState, useMemo, FormEvent } from 'react'
import Link from 'next/link'
import type { Puzzle } from '../../lib/puzzles'
import { getStreaks, saveStreaks } from '../../lib/streak'
import { getPuzzlesByDayIndex } from '../../lib/utils'

// Helper for “1st”, “2nd”, etc.
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

  // 2) Load puzzles for that challenge
  const puzzles: Puzzle[] = getPuzzlesByDayIndex(challengeIndex)

  // 3) Which question (1–10)?
  const idNum = parseInt((query.id as string) || '1', 10)
  const puzzle = puzzles[idNum - 1]

  // 4) On first question of each challenge, reset session
  useEffect(() => {
    if (idNum === 1) {
      sessionStorage.setItem('dailyCorrect', '0')
      puzzles.forEach((_p, idx) =>
        sessionStorage.removeItem(`challenge${challengeIndex}_q${idx + 1}`)
      )
    }
  }, [idNum, challengeIndex, puzzles])

  // 5) Day 5 memory logic
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

  // 6) Answer state
  const [userAns, setUserAns] = useState('')
  useEffect(() => setUserAns(''), [idNum])

  // 7) Common after-answer handler
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

  // 8) Memory-day submit
  const handleMemorySubmit = (e: FormEvent) => {
    e.preventDefault()
    afterAnswer(userAns.trim() === flashSeq[askIndex])
  }

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
            ? challengeIndex === 7
              ? 'All Done! | Mind Sprint'
              : `Results | Challenge ${challengeIndex}`
            : `Challenge ${challengeIndex} – Puzzle ${idNum}`}
        </title>
      </Head>

      {/* Top ad slot */}
      <div style={{ gridColumn: '1 / -1' }} />

      {/* Left ad slot */}
      <div />

      {/* Center content */}
      <main style={{ padding: '2rem 0', textAlign: 'center' }}>
        {idNum > total ? (
          // —— Results screen —— 
          (() => {
            const score = parseInt(
              sessionStorage.getItem('dailyCorrect') || '0',
              10
            )

            // —— Special Challenge 7 flow with raw-HTML AWeber form ——
            if (challengeIndex === 7) {
              return (
                <>
                  <h1>🎉 Congratulations! You’ve completed all 7 challenges!</h1>
                  <p>You scored <strong>{score}/{total}</strong></p>
                  <p>Enter your email below to claim your bonus reward:</p>

                  <form
                    method="post"
                    action="https://www.aweber.com/scripts/addlead.pl"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                      gap: '0.5rem',
                      margin: '1.5rem auto',
                      maxWidth: 400,
                    }}
                  >
                    {/* ——— Paste your AWeber hidden fields here ——— */}
                    {/* <input type="hidden" name="listname" value="YOUR_LIST_ID" /> */}
                    {/* <input type="hidden" name="redirect" value="YOUR_THANK_YOU_URL" /> */}
                    {/* …etc… */}

                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        fontSize: '1rem',
                        border: '1px solid #ccc',
                        borderRadius: '4px 0 0 4px',
                        outline: 'none',
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        padding: '8px 16px',
                        fontSize: '1rem',
                        border: '1px solid #ccc',
                        borderLeft: 'none',
                        borderRadius: '0 4px 4px 0',
                        background: '#0077cc',
                        color: '#fff',
                        cursor: 'pointer',
                      }}
                    >
                      Claim Reward
                    </button>
                  </form>

                  <button
                    onClick={() => router.push('/')}
                    style={{ marginTop: '2rem', padding: '8px 16px' }}
                  >
                    Go Back To Start
                  </button>
                </>
              )
            }

            // —— Normal results for Challenges 1–6 ——
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
          // —— Memory Day UI ——
          showFlash ? (
            <div style={{ textAlign: 'center', fontSize: '2rem' }}>
              {flashSeq.join(' – ')}
            </div>
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
                  onChange={(e) => setUserAns(e.target.value)}
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
          </>
        )}
      </main>

      {/* Right ad slot */}
      <div />

      {/* Bottom ad slot */}
      <div style={{ gridColumn: '1 / -1' }} />
    </div>
  )
}
