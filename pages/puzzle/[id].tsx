// pages/puzzle/[id].tsx
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState, useMemo, FormEvent } from 'react'
import Link from 'next/link'
import type { Puzzle } from '../../lib/puzzles'
import { getStreaks, saveStreaks } from '../../lib/streak'
import { getRotatingPuzzlesByChallenge } from '../../lib/rotation'
import { DID_YOU_KNOW } from '../../lib/facts'

function ordinal(n: number): string {
  if (n % 10 === 1 && n % 100 !== 11) return `${n}st`
  if (n % 10 === 2 && n % 100 !== 12) return `${n}nd`
  if (n % 10 === 3 && n % 100 !== 13) return `${n}rd`
  return `${n}th`
}

const CHALLENGE_INTROS: Record<
  number,
  { title: string; subtitle: string }
> = {
  1: {
    title: 'Challenge 1 – Quick Trivia',
    subtitle:
      'A fast warm-up of general knowledge questions. Nothing obscure — just solid everyday trivia.',
  },
  2: {
    title: 'Challenge 2 – Word Scramble',
    subtitle:
      'Unscramble the letters to find the correct word. Quick, satisfying, and not overly tricky.',
  },
  3: {
    title: 'Challenge 3 – General Knowledge',
    subtitle:
      'A mixed bag of world knowledge: sports, geography, culture, and common facts. Keep it moving.',
  },
  4: {
    title: 'Challenge 4 – Emoji Word Puzzles',
    subtitle:
      'Guess the word from the picture/emoji clues. Think “rebus” style — simple, visual, and fun.',
  },
  5: {
    title: 'Challenge 5 – Memory Sprint',
    subtitle:
      'A short memory test. Watch the sequence, hold it in your head, then answer the question.',
  },
  6: {
    title: 'Challenge 6 – Quick Quiz',
    subtitle:
      'Straightforward trivia prompts (sometimes with a hint like “4 letters”). Simple, clean, and satisfying.',
  },
  7: {
    title: 'Challenge 7 – Final Mixed Round',
    subtitle:
      'The final run: a mixed set to finish strong. Stay sharp and lock in that bonus reward.',
  },
}

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

  // Weekly-rotating puzzles
  const puzzles: Puzzle[] = getRotatingPuzzlesByChallenge(challengeIndex)
  const idNum = parseInt((query.id as string) || '1', 10)
  const puzzle = puzzles[idNum - 1]

  const isMemoryDay = challengeIndex === 5
  const total = isMemoryDay ? 10 : puzzles.length
  const isResults = idNum > total

  useEffect(() => {
    if (idNum === 1) {
      sessionStorage.setItem('dailyCorrect', '0')
      puzzles.forEach((_p, idx) =>
        sessionStorage.removeItem(`challenge${challengeIndex}_q${idx + 1}`)
      )
    }
  }, [idNum, challengeIndex, puzzles])

  const flashSeq = useMemo<string[]>(() => {
    if (!isMemoryDay) return []
    return Array.from({ length: 5 }, () => String(Math.ceil(Math.random() * 9)))
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

  const handleMemorySubmit = (e: FormEvent) => {
    e.preventDefault()
    afterAnswer(userAns.trim() === flashSeq[askIndex])
  }

  const factKey = `${challengeIndex}-${idNum}`
  const showIntro = !isResults && idNum === 1 && !!CHALLENGE_INTROS[challengeIndex]

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

      {/* Ezoic placeholder – TOP of puzzle (not on results) */}
      {!isResults && (
        <div style={{ textAlign: 'center', marginBottom: '1rem', width: '100%' }}>
          <div id="ezoic-pub-ad-placeholder-100" />
        </div>
      )}

      <main style={{ width: '100%', maxWidth: 800, padding: '1rem', textAlign: 'center' }}>
        {/* ✅ Challenge Intro (ONLY Question 1, not on results) */}
        {showIntro && (
          <div
            style={{
              textAlign: 'left',
              border: '1px solid #eaeaea',
              borderRadius: 12,
              padding: '14px 16px',
              margin: '0 auto 18px',
              background: '#fafafa',
            }}
          >
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>
              Challenge {challengeIndex} • Question 1
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>
              {CHALLENGE_INTROS[challengeIndex].title}
            </div>
            <div style={{ fontSize: 14, color: '#333', lineHeight: 1.45 }}>
              {CHALLENGE_INTROS[challengeIndex].subtitle}
            </div>
          </div>
        )}

        {isResults ? (
          (() => {
            const score = parseInt(sessionStorage.getItem('dailyCorrect') || '0', 10)

            if (challengeIndex === 7) {
              // No ads here per your rule
              return (
                <>
                  <h1>🎉 Congratulations! You’ve completed all 7 challenges!</h1>
                  <p>
                    You scored <strong>{score}/{total}</strong>
                  </p>
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
                    <input type="hidden" name="meta_web_form_id" value="317058051" />
                    <input type="hidden" name="listname" value="awlist6897043" />
                    <input
                      type="hidden"
                      name="redirect"
                      value="https://www.dailymindsprint.com/bonus/thank-you"
                    />
                    <input type="hidden" name="meta_required" value="email" />
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
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
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
                    <button style={{ padding: '8px 16px' }}>Back to Home</button>
                  </Link>
                </div>
              </>
            )
          })()
        ) : isMemoryDay ? (
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
                  onChange={(e) => setUserAns(e.target.value)}
                  placeholder="Type the number…"
                  required
                  style={{ padding: '8px', fontSize: 16 }}
                />
                <button type="submit" style={{ marginLeft: 10, padding: '8px 16px' }}>
                  Submit
                </button>
              </form>

              {/* Ezoic placeholder – MID (memory view) */}
              <div id="ezoic-pub-ad-placeholder-101" style={{ margin: '1rem 0' }} />

              {/* Fact on memory day too */}
              {DID_YOU_KNOW[factKey] && (
                <p style={{ fontStyle: 'italic', margin: '1rem 0', color: '#555' }}>
                  {DID_YOU_KNOW[factKey]}
                </p>
              )}
            </>
          )
        ) : (
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

            {/* Ezoic placeholder – UNDER answers */}
            <div id="ezoic-pub-ad-placeholder-101" style={{ margin: '1rem 0' }} />

            {/* Fact under the options */}
            {DID_YOU_KNOW[factKey] && (
              <p style={{ fontStyle: 'italic', margin: '1rem 0', color: '#555' }}>
                {DID_YOU_KNOW[factKey]}
              </p>
            )}
          </>
        )}

        {/* Ezoic placeholder – BOTTOM of puzzle (not on results) */}
        {!isResults && <div id="ezoic-pub-ad-placeholder-102" style={{ marginTop: '1rem' }} />}
      </main>
    </div>
  )
}
