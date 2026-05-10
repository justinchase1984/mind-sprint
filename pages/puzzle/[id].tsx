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

  const [selected, setSelected] = useState<string | null>(null)
  const [locked, setLocked] = useState(false)

  const [hasJoined, setHasJoined] = useState(false)

  useEffect(() => {
    const joined = localStorage.getItem('joined')
    if (joined === 'true') {
      setHasJoined(true)
    }
  }, [])

  useEffect(() => {
    if (idNum === 1) {
      sessionStorage.setItem('dailyCorrect', '0')

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

    sessionStorage.setItem('dailyCorrect', cnt.toString())

    router.push(`/puzzle/${idNum + 1}?challenge=${challengeIndex}`)
  }

  const factKey = `${challengeIndex}-${idNum}`

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#fff', minHeight: '100vh', paddingTop: '1rem', paddingBottom: '2rem' }}>
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

                {/* ✅ AWEBER FORM (REPLACES API SYSTEM) */}
                {!hasJoined ? (
                  <form
                    method="post"
                    action="https://www.aweber.com/scripts/addlead.pl"
                    onSubmit={() => localStorage.setItem('joined', 'true')}
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
                    <p>🎁 Enter for weekly prize draws + daily challenges</p>

                    <input type="hidden" name="listname" value="awlist6897043" />
                    <input type="hidden" name="meta_web_form_id" value="317058051" />
                    <input type="hidden" name="meta_split_id" value="" />
                    <input type="hidden" name="meta_adtracking" value="Mind_Sprint__Opt-In_Form" />
                    <input type="hidden" name="meta_message" value="1" />
                    <input type="hidden" name="meta_required" value="email" />
                    <input type="hidden" name="meta_tooltip" value="" />
                    <input type="hidden" name="redirect" value="" />

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      style={{
                        width: '100%',
                        padding: '12px',
                        marginTop: 10,
                        borderRadius: 6,
                        border: '1px solid #ccc',
                      }}
                    />

                    <button
                      type="submit"
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
                  </form>
                ) : (
                  <p style={{ marginTop: '2rem', color: '#555' }}>
                    🎯 You're entered in the weekly draw — keep playing to earn more entries
                  </p>
                )}
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

              <div style={{ height: 8, background: '#eee', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ width: `${(idNum / total) * 100}%`, background: '#4caf50', height: '100%' }} />
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

            {DID_YOU_KNOW[factKey] && (
              <p style={{ fontStyle: 'italic', marginTop: '1rem', color: '#555' }}>
                {DID_YOU_KNOW[factKey]}
              </p>
            )}
          </>
        )}
      </main>
    </div>
  )
}
