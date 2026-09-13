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

  const [entriesThisWeek, setEntriesThisWeek] =
    useState<number | null>(null)

  /*
    If we already know the player's email,
    we know they have joined Mind Sprint.
  */
  useEffect(() => {
    const savedEmail =
      localStorage.getItem('mindSprintEmail')

    if (savedEmail) {
      setHasJoined(true)
    } else {
      setHasJoined(false)
    }
  }, [])

  /*
    Starting question 1 means a fresh challenge.

    Reset the score and remove any old attempt
    for this challenge.
  */
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

  /*
    When the results page is reached,
    a previously joined player can claim
    their verified challenge entry.
  */
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

  /*
    Get the current server-side challenge
    attempt, or create a new one.
  */
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

  /*
    Tell the server that one question
    was answered.

    The server checks that questions
    are being completed in order.
  */
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

  /*
    Handle the player's answer.

    We keep the existing green/red answer
    feedback while also recording the
    completion on the server.
  */
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

    /*
      Keep roughly the same 800ms answer
      feedback that Mind Sprint already had.
    */
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

  /*
    Claim the weekly prize entry using
    the completed server-side attempt.
  */
  async function claimPrizeEntry(
    emailAddress: string
  ) {
    const attemptId =
      sessionStorage.getItem(
        `mindSprintAttempt:${challengeIndex}`
      )

    if (!attemptId) {
      console.error(
        'No completed challenge attempt was found'
      )

      return
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
      } else {
        console.error(
          'Prize entry error:',
          data
        )
      }
    } catch (error) {
      console.error(
        'Prize entry error:',
        error
      )
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

    try {
      const res = await fetch(
        '/api/subscribe',
        {
          method: 'POST',
          headers: {
            'Content-Type':
              'application/json',
          },
          body: JSON.stringify({
            email: cleanEmail,
          }),
        }
      )

      const data = await res
        .json()
        .catch(() => ({
          success: false,
        }))

      if (data.success) {
        localStorage.setItem(
          'joined',
          'true'
        )

        /*
          This is what lets future completed
          challenges automatically earn entries
          without asking for the email again.
        */
        localStorage.setItem(
          'mindSprintEmail',
          cleanEmail
        )

        setHasJoined(true)
        setEmail('')

        /*
          They have already completed this
          challenge, so award its entry now.
        */
        await claimPrizeEntry(
          cleanEmail
        )

        return
      }

      const oldAweberMessage =
        data?.subData?.error?.message ||
        ''

      if (
        oldAweberMessage
          .toLowerCase()
          .includes(
            'already subscribed'
          )
      ) {
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

        await claimPrizeEntry(
          cleanEmail
        )

        return
      }

      setJoinError(
        'We couldn’t complete your signup. Please try again.'
      )
    } catch (error) {
      console.error(
        'Signup error:',
        error
      )

      setJoinError(
        'We couldn’t complete your signup. Please try again.'
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
                  marginTop:
                    '2rem',
                  maxWidth: 400,
                  marginInline:
                    'auto',
                }}
              >
                <p>
                  🎁 Enter for weekly
                  prize draws + daily
                  challenges
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
                      marginTop: 10,
                      borderRadius: 6,
                      border:
                        '1px solid #ccc',
                      boxSizing:
                        'border-box',
                    }}
                  />

                  <button
                    type="submit"
                    disabled={
                      isJoining
                    }
                    style={{
                      width: '100%',
                      marginTop: 10,
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
                      ? 'Joining...'
                      : 'Join'}
                  </button>
                </form>

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
