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
  const [email, setEmail] = useState('')

  useEffect(() => {
    const joined = localStorage.getItem('joined')
    if (joined === 'true') setHasJoined(true)
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

  function handleSubmit() {
    if (!email.includes('@')) return

    const form = document.createElement('form')
    form.method = 'POST'
    form.action = 'https://www.aweber.com/scripts/addlead.pl'
    form.target = 'hidden_iframe'

    const fields = {
      listname: 'awlist6897043',
      email: email,
      meta_web_form_id: '317058051',
      meta_message: '1',
      meta_required: 'email',
    }

    Object.entries(fields).forEach(([key, value]) => {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = value
      form.appendChild(input)
    })

    document.body.appendChild(form)
    form.submit()
    document.body.removeChild(form)

    localStorage.setItem('joined', 'true')
    setHasJoined(true)
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
                  <Link href={`/puzzle/1?challenge=${passed ? challengeIndex + 1 : challengeIndex}`}>
                    <button>{passed ? 'Continue →' : 'Try Again'}</button>
                  </Link>
                </div>

                {/* EMAIL SECTION */}
                {!hasJoined ? (
                  <div style={{ marginTop: '2rem', maxWidth: 400, marginInline: 'auto' }}>
                    <p>🎁 Enter for weekly prize draws + daily challenges</p>

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
                      onClick={handleSubmit}
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

                    <iframe name="hidden_iframe" style={{ display: 'none' }} />
                  </div>
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

            {/* PROGRESS BAR */}
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

            {/* ANSWERS */}
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

            {/* FEEDBACK */}
            {locked && (
              <p style={{ marginTop: 10, fontWeight: 500 }}>
                {selected === puzzle.answer ? 'Correct ✅' : 'Incorrect ❌'}
              </p>
            )}

            {/* FACT */}
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
