// pages/puzzle/[id].tsx
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState, FormEvent } from 'react'
import Link from 'next/link'
import type { Puzzle } from '../../lib/puzzles'
import { getStreaks, saveStreaks } from '../../lib/streak'
import { getDailyPuzzles, getPuzzlesByDayIndex } from '../../lib/utils'

// helper to turn 1→"1st", 2→"2nd", 3→"3rd", else "Nth"
function ordinal(n: number) {
  if (n % 10 === 1 && n % 100 !== 11) return `${n}st`
  if (n % 10 === 2 && n % 100 !== 12) return `${n}nd`
  if (n % 10 === 3 && n % 100 !== 13) return `${n}rd`
  return `${n}th`
}

export default function PuzzlePage() {
  const router = useRouter()
  const { query } = router

  // previewDay / tomorrow flags
  const previewDay = query.previewDay ? +query.previewDay : NaN
  const tomorrowMode = isNaN(previewDay) && query.tomorrow === '1'

  // choose puzzle set
  let puzzles: Puzzle[] = []
  if (!isNaN(previewDay)) {
    puzzles = getPuzzlesByDayIndex(previewDay)
  } else {
    const pickDate = tomorrowMode
      ? new Date(Date.now() + 24*60*60*1000)
      : undefined
    puzzles = getDailyPuzzles(pickDate)
  }

  const total = puzzles.length       // should be 10
  const idNum  = parseInt((query.id as string) || '1', 10)
  const puzzle = puzzles[idNum - 1]

  // which Day is this?
  const displayDay = !isNaN(previewDay)
    ? previewDay
    : ((new Date().getDay()+6)%7) + (tomorrowMode ? 2 : 1)

  // reset score on first puzzle
  useEffect(() => {
    if (idNum === 1) sessionStorage.setItem('dailyCorrect', '0')
  }, [idNum])

  // ============ Memory Day (Day 5) Logic =============
  const isMemoryDay = displayDay === 5

  // generate fresh 5-digit sequence and pick an index (1–5)
  const { flashSeq, askIndex } = useMemo(() => {
    if (!isMemoryDay) return { flashSeq: [], askIndex: 2 }
    // random 5 digits
    const seq = Array.from({ length: 5 }, () =>
      String(Math.ceil(Math.random() * 9))
    )
    // cycle ask positions: puzzle 1→0, 2→1, …,5→4,6→0, etc
    const idx = (idNum - 1) % 5
    return { flashSeq: seq, askIndex: idx }
  }, [idNum, isMemoryDay])

  // control flash visibility
  const [showFlash, setShowFlash] = useState(isMemoryDay)
  useEffect(() => {
    if (isMemoryDay) {
      setShowFlash(true)
      const t = setTimeout(() => setShowFlash(false), 3000)
      return () => clearTimeout(t)
    }
  }, [idNum, isMemoryDay])

  // answer input state (clears on idNum change)
  const [userAns, setUserAns] = useState('')
  useEffect(() => { setUserAns('') }, [idNum])
  // ====================================================

  // unified answer handler (streak + daily + next page)
  const afterAnswer = (isCorrect: boolean) => {
    // streak
    let { current, max } = getStreaks()
    if (isCorrect) current++ 
    else current = 0
    if (current > max) max = current
    saveStreaks(current, max)

    // daily score
    let cnt = parseInt(sessionStorage.getItem('dailyCorrect') || '0', 10)
    if (isCorrect) cnt++
    sessionStorage.setItem('dailyCorrect', cnt.toString())

    // next URL flag
    const flag = !isNaN(previewDay)
      ? `?previewDay=${previewDay}`
      : tomorrowMode
      ? '?tomorrow=1'
      : ''
    router.push(`/puzzle/${idNum+1}${flag}`)
  }

  // handle memory-day form
  const handleMemorySubmit = (e: FormEvent) => {
    e.preventDefault()
    afterAnswer(userAns.trim() === flashSeq[askIndex])
  }

  // ================== RESULTS SCREEN ==================
  // if beyond puzzle #10, show results
  if (idNum > total) {
    const score = parseInt(sessionStorage.getItem('dailyCorrect') || '0', 10)
    const passed = score >= 8
    return (
      <>
        <Head><title>Your Results | Mind Sprint</title></Head>
        <main style={{ textAlign:'center',padding:'2rem' }}>
          <h1>🎉 You’ve completed Day {displayDay} Challenge!</h1>
          <p style={{ fontSize:'1.2rem' }}>
            You scored <strong>{score}/{total}</strong>
          </p>
          {passed && isNaN(previewDay) && !tomorrowMode ? (
            <>
              <p style={{ color:'green' }}>
                Congrats—you’ve unlocked tomorrow’s challenge!
              </p>
              <Link href="/puzzle/1?tomorrow=1">
                <button style={{ margin:'0.5rem',padding:'8px 16px' }}>
                  Start Tomorrow’s Challenge
                </button>
              </Link>
            </>
          ) : !passed ? (
            <p style={{ color:'red' }}>
              You need 8/10 to unlock tomorrow. Try again tomorrow!
            </p>
          ) : null}
          <Link href="/"><button style={{ marginTop:'1rem',padding:'8px 16px' }}>
            Back Home
          </button></Link>
        </main>
      </>
    )
  }

  // ============= DAY 5: FLASH or INPUT UI =============
  if (isMemoryDay) {
    if (showFlash) {
      return (
        <div style={{ textAlign:'center', padding:'2rem', fontSize:'2rem' }}>
          {flashSeq.join(' – ')}
        </div>
      )
    }
    // input screen:
    return (
      <div className="quiz-page">
        <div className="header" style={{ background:'#ddd',height:90,textAlign:'center',lineHeight:'90px' }}>
          Ad Banner Top
        </div>
        <div className="adL" style={{ background:'#eee' }}>Ad Left</div>
        <div className="main" style={{ textAlign:'center', padding:'2rem' }}>
          <Head><title>Day 5 – Memory Challenge</title></Head>
          <h2>Day 5 Challenge</h2>
          <p style={{ marginBottom:'1rem' }}>
            What was the <strong>{ordinal(askIndex+1)}</strong> number you saw?
          </p>
          <form onSubmit={handleMemorySubmit}>
            <input
              type="text"
              value={userAns}
              onChange={e => setUserAns(e.target.value)}
              placeholder="Type the number..."
              autoComplete="off"
              style={{ padding:'8px', fontSize:16, width:150 }}
              required
            />
            <button type="submit" style={{ marginLeft:10, padding:'8px 16px' }}>
              Submit
            </button>
          </form>
        </div>
        <div className="adR" style={{ background:'#eee' }}>Ad Right</div>
        <div className="footer" style={{ background:'#ddd',height:90,textAlign:'center',lineHeight:'90px' }}>
          Ad Banner Bottom
        </div>
      </div>
    )
  }
  // ====================================================

  // ============ All other days: MCQ =============
  return (
    <div className="quiz-page">
      <div className="header" style={{ background:'#ddd',height:90,textAlign:'center',lineHeight:'90px' }}>
        Ad Banner Top
      </div>
      <div className="adL" style={{ background:'#eee' }}>Ad Left</div>
      <div className="main" style={{ textAlign:'center', padding:'2rem' }}>
        <Head>
          <title>Day {displayDay} – Puzzle {idNum}</title>
          <meta name="description" content={puzzle?.question||''}/>
        </Head>
        <h2>Day {displayDay} Challenge</h2>
        <p>{puzzle?.question}</p>
        {puzzle?.options.map(opt => (
          <button
            key={opt}
            onClick={() => afterAnswer(opt === puzzle.answer)}
            style={{
              display:'block', margin:'10px auto', padding:'10px 20px',
              width:'80%', background:'#f0f0f0', border:'1px solid #ccc',
              borderRadius:4, cursor:'pointer'
            }}
          >
            {opt}
          </button>
        ))}
      </div>
      <div className="adR" style={{ background:'#eee' }}>Ad Right</div>
      <div className="footer" style={{ background:'#ddd',height:90,textAlign:'center',lineHeight:'90px' }}>
        Ad Banner Bottom
      </div>
    </div>
  )
}
