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

    if (q && !isNaN(+q)) {
      return +q
    }

    if (typeof window !== 'undefined') {
      return parseInt(
        localStorage.getItem('unlockedChallenge') || '1',
        10
      )
    }

    return 1
  })()

  const puzzles: Puzzle[] =
    getRotatingPuzzlesByChallenge(challengeIndex)

  const idNum = parseInt(
    (query.id as string) || '1',
    10
  )

  const puzzle = puzzles[idNum - 1]

  const total = puzzles.length
  const isResults = idNum > total

  const [selected, setSelected] =
    useState<string | null>(null)

  const [locked, setLocked] =
    useState(false)

  const [hasJoined, setHasJoined] =
    useState(false)

  const [email, setEmail] =
    useState('')

  const [isJoining, setIsJoining] =
    useState(false)

  const [joinError, setJoinError] =
    useState('')

  const [marketingConsent, setMarketingConsent] =
    useState(false)

  const [marketingNotice, setMarketingNotice] =
    useState('')

  const [entriesThisWeek, setEntriesThisWeek] =
    useState<number | null>(null)

  useEffect(() => {
    const savedEmail =
      localStorage.getItem('mindSprintEmail')

    if (savedEmail) {
      setHasJoined(true)
    } else {
      setHasJoined(false)
    }
  }, [])

  useEffect(() => {
    if (idNum === 1) {
      sessionStorage.setItem(
        'dailyCorrect',
        '0'
      )

      puzzles.forEach((_p, idx) =>
        sessionStorage.removeItem(
          `challenge${challengeIndex}_q${idx + 1}`
        )
      )

      sessionStorage.removeItem(
        `mindSprintAttempt:${challengeIndex}`
      )
    }
  }, [idNum, challengeIndex, puzzles])

  useEffect(() => {
    setSelected(null)
    setLocked(false)
  }, [idNum])

  useEffect(() => {
    if (!isResults) return

    const savedEmail =
      localStorage.getItem('mindSprintEmail')

    if (!savedEmail) return

    claimPrizeEntry(savedEmail)
  }, [isResults, challengeIndex])

  function afterAnswer(
    isCorrect: boolean
  ) {
    let { current, max } =
      getStreaks()

    if (isCorrect) {
      current += 1
    } else {
      current = 0
    }

    if (current > max) {
      max = current
    }

    saveStreaks(current, max)

    const key =
      `challenge${challengeIndex}_q${idNum}`

    const already =
      sessionStorage.getItem(key)

    let cnt = parseInt(
      sessionStorage.getItem(
        'dailyCorrect'
      ) || '0',
      10
    )

    if (isCorrect && !already) {
      cnt += 1

      sessionStorage.setItem(
        key,
        '1'
      )
    }

    sessionStorage.setItem(
      'dailyCorrect',
      cnt.toString()
    )

    router.push(
      `/puzzle/${idNum + 1}?challenge=${challengeIndex}`
    )
  }

  async function getOrStartAttempt():
    Promise<string | null> {
    const storageKey =
      `mindSprintAttempt:${challengeIndex}`

    const existingAttempt =
      sessionStorage.getItem(
        storageKey
      )

    if (existingAttempt) {
      return existingAttempt
    }

    try {
      const res = await fetch(
        '/api/attempt',
        {
          method: 'POST',
          headers: {
            'Content-Type':
              'application/json',
          },
          body: JSON.stringify({
            action: 'start',
            challenge:
              challengeIndex,
          }),
        }
      )

      const data = await res
        .json()
        .catch(() => ({
          success: false,
        }))

      if (
        !data.success ||
        !data.attemptId
      ) {
        console.error(
          'Unable to start challenge attempt:',
          data
        )

        return null
      }

      sessionStorage.setItem(
        storageKey,
        data.attemptId
      )

      return data.attemptId
    } catch (error) {
      console.error(
        'Unable to start challenge attempt:',
        error
      )

      return null
    }
  }

  async function recordAttemptAnswer(
    answer: string
  ) {
    const attemptId =
      await getOrStartAttempt()

    if (!attemptId) {
      return false
    }

    try {
      const res = await fetch(
        '/api/attempt',
        {
          method: 'POST',
          headers: {
            'Content-Type':
              'application/json',
          },
          body: JSON.stringify({
            action: 'answer',
            attemptId,
            question: idNum,
            answer,
          }),
        }
      )

      const data = await res
        .json()
        .catch(() => ({
          success: false,
        }))

      if (!data.success) {
        console.error(
          'Unable to record challenge answer:',
          data
        )

        return false
      }

      return true
    } catch (error) {
      console.error(
        'Unable to record challenge answer:',
        error
      )

      return false
    }
  }

  async function handleAnswer(
    answer: string
  ) {
    if (locked || !puzzle) {
      return
    }

    setSelected(answer)
    setLocked(true)

    const clickedAt =
      Date.now()

    await recordAttemptAnswer(
      answer
    )

    const elapsed =
      Date.now() - clickedAt

    const remaining =
      Math.max(
        0,
        800 - elapsed
      )

    setTimeout(() => {
      afterAnswer(
        answer === puzzle.answer
      )
    }, remaining)
  }

  async function claimPrizeEntry(
    emailAddress: string
  ): Promise<boolean> {
    const attemptId =
      sessionStorage.getItem(
        `mindSprintAttempt:${challengeIndex}`
      )

    if (!attemptId) {
      console.error(
        'No completed challenge attempt was found'
      )

      return false
    }

    try {
      const res = await fetch(
        '/api/entry',
        {
          method: 'POST',
          headers: {
            'Content-Type':
              'application/json',
          },
          body: JSON.stringify({
            email: emailAddress,
            attemptId,
          }),
        }
      )

      const data = await res
        .json()
        .catch(() => ({
          success: false,
        }))

      if (data.success) {
        setEntriesThisWeek(
          data.entriesThisWeek
        )

        return true
      }

      console.error(
        'Prize entry error:',
        data
      )

      return false
    } catch (error) {
      console.error(
        'Prize entry error:',
        error
      )

      return false
    }
  }

  async function handleSubmit() {
    if (isJoining) return

    const cleanEmail =
      email.trim().toLowerCase()

    const validEmail =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        cleanEmail
      )

    if (!validEmail) {
      setJoinError(
        'Please enter a valid email address.'
      )

      return
    }

    setIsJoining(true)
    setJoinError('')
    setMarketingNotice('')

    try {
      const entryRecorded =
        await claimPrizeEntry(
          cleanEmail
        )

      if (!entryRecorded) {
        setJoinError(
          'We couldn’t record your prize entry. Please try again.'
        )

        return
      }

      localStorage.setItem(
        'joined',
        'true'
      )

      localStorage.setItem(
        'mindSprintEmail',
        cleanEmail
      )

      setHasJoined(true)
      setEmail('')

      if (marketingConsent) {
        try {
          const subscribeRes =
            await fetch(
              '/api/subscribe',
              {
                method: 'POST',
                headers: {
                  'Content-Type':
                    'application/json',
                },
                body: JSON.stringify({
                  email:
                    cleanEmail,
                  marketingConsent:
                    true,
                }),
              }
            )

          const subscribeData =
            await subscribeRes
              .json()
              .catch(() => ({
                success: false,
              }))

          if (
            subscribeData.success
          ) {
            localStorage.setItem(
              'mindSprintMarketingConsent',
              'true'
            )
          } else {
            console.error(
              'Marketing signup error:',
              subscribeData
            )

            setMarketingNotice(
              'Your prize entry is saved, but email updates could not be enabled.'
            )
          }
        } catch (error) {
          console.error(
            'Marketing signup error:',
            error
          )

          setMarketingNotice(
            'Your prize entry is saved, but email updates could not be enabled.'
          )
        }
      }

      setMarketingConsent(false)
    } catch (error) {
      console.error(
        'Entry error:',
        error
      )

      setJoinError(
        'We couldn’t complete your entry. Please try again.'
      )
    } finally {
      setIsJoining(false)
    }
  }

  const factKey =
    `${challengeIndex}-${idNum}`

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

      <main
        style={{
          width: '100%',
          maxWidth: 800,
          padding: '1rem',
          textAlign: 'center',
        }}
      >
        {isResults ? (
          <>
            {(() => {
              const score =
                parseInt(
                  sessionStorage.getItem(
                    'dailyCorrect'
                  ) || '0',
                  10
                )

              let label =
                '😅 Needs Work'

              if (score >= 9) {
                label =
                  '🧠 Genius'
              } else if (
                score >= 7
              ) {
                label =
                  '🔥 Strong'
              } else if (
                score >= 5
              ) {
                label =
                  '👍 Solid'
              }

              const passed =
                score >= 8

              if (
                passed &&
                challengeIndex < 7
              ) {
                localStorage.setItem(
                  'unlockedChallenge',
                  String(
                    challengeIndex + 1
                  )
                )
              }

              return (
                <>
                  <h1>
                    🎯 Challenge Complete
                  </h1>

                  <p
                    style={{
                      fontSize: 20,
                    }}
                  >
                    You scored{' '}
                    <strong>
                      {score}/{total}
                    </strong>
                  </p>

                  <p
                    style={{
                      fontSize: 18,
                    }}
                  >
                    {label}
                  </p>

                  <div
                    style={{
                      marginTop:
                        '1rem',
                    }}
                  >
                    <Link
                      href={`/puzzle/1?challenge=${
                        passed
                          ? challengeIndex +
                            1
                          : challengeIndex
                      }`}
                    >
                      <button>
                        {passed
                          ? 'Continue →'
                          : 'Try Again'}
                      </button>
                    </Link>
                  </div>
                </>
              )
            })()}

            {!hasJoined ? (
              <div
                style={{
                  marginTop: '2rem',
                  maxWidth: 400,
                  marginInline: 'auto',
                }}
              >
                <p
                  style={{
                    marginBottom: 5,
                    fontSize: 17,
                    fontWeight: 600,
                  }}
                >
                  🎁 Weekly Prize Draw
                </p>

                <p
                  style={{
                    marginTop: 0,
                    marginBottom: 14,
                    color: '#666',
                    fontSize: 14,
                  }}
                >
                  Enter your email to claim this challenge entry.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit()
                  }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    disabled={
                      isJoining
                    }
                    autoComplete="email"
                    onChange={(e) => {
                      setEmail(
                        e.target.value
                      )

                      if (
                        joinError
                      ) {
                        setJoinError(
                          ''
                        )
                      }
                    }}
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: 6,
                      border:
                        '1px solid #ccc',
                      boxSizing:
                        'border-box',
                    }}
                  />

                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      textAlign: 'left',
                      marginTop: 12,
                      fontSize: 13,
                      color: '#555',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={
                        marketingConsent
                      }
                      disabled={
                        isJoining
                      }
                      onChange={(e) =>
                        setMarketingConsent(
                          e.target.checked
                        )
                      }
                    />

                    <span>
                      Send me occasional Mind Sprint emails (optional)
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={
                      isJoining
                    }
                    style={{
                      width: '100%',
                      marginTop: 14,
                      padding: '12px',
                      background:
                        '#111',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 6,
                      cursor:
                        isJoining
                          ? 'default'
                          : 'pointer',
                      opacity:
                        isJoining
                          ? 0.7
                          : 1,
                    }}
                  >
                    {isJoining
                      ? 'Claiming...'
                      : 'Claim Entry'}
                  </button>
                </form>

                <p
                  style={{
                    marginTop: 10,
                    marginBottom: 0,
                    fontSize: 12,
                    color: '#777',
                  }}
                >
                  18+ ·{' '}
                  <Link
                    href="/weekly-prize-draw-terms"
                    legacyBehavior
                  >
                    <a
                      style={{
                        color: '#666',
                        textDecoration:
                          'underline',
                      }}
                    >
                      Prize Draw Terms
                    </a>
                  </Link>
                  {' · '}
                  <Link
                    href="/privacy"
                    legacyBehavior
                  >
                    <a
                      style={{
                        color: '#666',
                        textDecoration:
                          'underline',
                      }}
                    >
                      Privacy
                    </a>
                  </Link>
                </p>

                {joinError && (
                  <p
                    role="alert"
                    style={{
                      marginTop: 10,
                      marginBottom: 0,
                      fontSize: 14,
                      color:
                        '#b00020',
                    }}
                  >
                    {joinError}
                  </p>
                )}
              </div>
            ) : (
              <div
                style={{
                  marginTop:
                    '2rem',
                }}
              >
                <p
                  role="status"
                  style={{
                    color: '#555',
                    marginBottom: 8,
                  }}
                >
                  🎯 You're entered in
                  the weekly draw —
                  keep playing to earn
                  more entries
                </p>

                {entriesThisWeek !==
                  null && (
                  <p
                    style={{
                      marginTop: 0,
                      fontWeight: 600,
                    }}
                  >
                    🎟️ You have{' '}
                    <strong>
                      {
                        entriesThisWeek
                      }
                    </strong>{' '}
                    {entriesThisWeek ===
                    1
                      ? 'entry'
                      : 'entries'}{' '}
                    in this
                    week&apos;s draw
                  </p>
                )}

                {marketingNotice && (
                  <p
                    style={{
                      marginTop: 10,
                      fontSize: 14,
                      color:
                        '#b00020',
                    }}
                  >
                    {marketingNotice}
                  </p>
                )}
              </div>
            )}
          </>
        ) : (
          <>
            <h2>
              Challenge{' '}
              {challengeIndex}
            </h2>

            <div
              style={{
                marginBottom:
                  '1rem',
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  marginBottom: 4,
                }}
              >
                Question {idNum} of{' '}
                {total}
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
                    width: `${
                      (idNum /
                        total) *
                      100
                    }%`,
                    background:
                      '#4caf50',
                    height: '100%',
                  }}
                />
              </div>
            </div>

            <p>
              {puzzle?.question}
            </p>

            {puzzle?.options.map(
              (opt) => (
                <button
                  key={opt}
                  onClick={() =>
                    handleAnswer(
                      opt
                    )
                  }
                  style={{
                    display:
                      'block',
                    margin:
                      '10px auto',
                    padding:
                      '12px 16px',
                    width: '85%',
                    borderRadius: 8,
                    border:
                      '1px solid #ddd',
                    fontSize: 16,
                    cursor: locked
                      ? 'default'
                      : 'pointer',
                    background:
                      locked &&
                      opt ===
                        puzzle.answer
                        ? '#4caf50'
                        : locked &&
                          opt ===
                            selected
                        ? '#f44336'
                        : '#fff',
                    color: locked
                      ? '#fff'
                      : '#000',
                  }}
                >
                  {opt}
                </button>
              )
            )}

            {locked && (
              <p
                style={{
                  marginTop: 10,
                  fontWeight: 500,
                }}
              >
                {selected ===
                puzzle.answer
                  ? 'Correct ✅'
                  : 'Incorrect ❌'}
              </p>
            )}

            {DID_YOU_KNOW[
              factKey
            ] && (
              <p
                style={{
                  fontStyle:
                    'italic',
                  marginTop:
                    '1rem',
                  color: '#555',
                }}
              >
                {
                  DID_YOU_KNOW[
                    factKey
                  ]
                }
              </p>
            )}
          </>
        )}
      </main>
    </div>
  )
}
