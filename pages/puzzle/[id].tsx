// pages/puzzle/[id].tsx
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState, FormEvent } from 'react'
import Link from 'next/link'
import type { Puzzle } from '../../lib/puzzles'
import { getStreaks, saveStreaks } from '../../lib/streak'
import { getDailyPuzzles, getPuzzlesByDayIndex } from '../../lib/utils'

export default function PuzzlePage() {
  const router = useRouter()
  const { query } = router

  // previewDay / tomorrow flags
  const previewDay = query.previewDay ? +query.previewDay : NaN
  const tomorrowMode = isNaN(previewDay) && query.tomorrow === '1'

  // pick your pool
  let puzzles: Puzzle[] = []
  if (!isNaN(previewDay)) {
    puzzles = getPuzzlesByDayIndex(previewDay)
  } else {
    const pickDate = tomorrowMode
      ? new Date(Date.now() + 24*60*60*1000)
      : undefined
    puzzles = getDailyPuzzles(pickDate)
  }

  const idNum  = parseInt((query.id as string) || '1', 10)
  const puzzle = puzzles[idNum - 1]

  // compute Day number
  const displayDay = !isNaN(previewDay)
    ? previewDay
    : ((new Date().getDay()+6)%7) + (tomorrowMode ? 2 : 1)

  // reset daily score at start
  useEffect(() => {
    if (idNum === 1) sessionStorage.setItem('dailyCorrect', '0')
  }, [idNum])

  // ————— Day 5 memory logic via useMemo —————
  const isMemoryDay = displayDay === 5
  // generate a fresh 5-digit sequence for each new puzzle
  const flashSeq = useMemo<string[]>(() => {
    if (!isMemoryDay) return []
    return Array.from({ length: 5 }, () =>
      String(Math.ceil(Math.random() * 9))
    )
  }, [idNum, isMemoryDay])

  const [userAns, setUserAns] = useState('')
  // ———————————————————————————————————————

  // unified answer handler
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

    // advance preserving flags
    const flag = !isNaN(previewDay)
      ? `?previewDay=${previewDay}`
      : tomorrowMode
      ? '?tomorrow=1'
      : ''
    router.push(`/puzzle/${idNum+1}${flag}`)
  }

  // Day 5 form submit
  const handleMemorySubmit = (e: FormEvent) => {
    e.preventDefault()
    afterAnswer(userAns.trim() === flashSeq[2])
  }

  // — if out of puzzles (and not memory) show results —
  if (!puzzle && !isMemoryDay) {
    const score = parseInt(sessionStorage.getItem('dailyCorrect') || '0', 10)
    const passed = score >= 8
    return (
      <>
        <Head><title>Your Results | Mind Sprint</title></Head>
        <main style={{ textAlign:'center',padding:'2rem' }}>
          <h1>🎉 You’ve completed Day {displayDay} Challenge!</h1>
          <p style={{fontSize:'1.2rem'}}>
            You scored <strong>{score}/{puzzles.length}</strong>
          </p>
          {passed && isNaN(previewDay) && !tomorrowMode ? (
            <>
              <p style={{color:'green'}}>Congrats—you’ve unlocked tomorrow’s challenge!</p>
              <Link href="/puzzle/1?tomorrow=1">
                <button style={{margin:'0.5rem',padding:'8px 16px'}}>Start Tomorrow’s Challenge</button>
              </Link>
            </>
          ) : !passed ? (
            <p style={{color:'red'}}>You need 8/10 to unlock tomorrow. Try again tomorrow!</p>
          ) : null}
          <Link href="/"><button style={{marginTop:'1rem',padding:'8px 16px'}}>Back Home</button></Link>
        </main>
      </>
    )
  }

  // — Day 5 UI: show sequence + input —
  if (isMemoryDay) {
    return (
      <div className="quiz-page">
        <div className="header" style={{background:'#ddd',height:90,textAlign:'center',lineHeight:'90px'}}>Ad Banner Top</div>
        <div className="adL" style={{background:'#eee'}}>Ad Left</div>
        <div className="main" style={{textAlign:'center',padding:'2rem'}}>
          <Head><title>Day 5 – Memory Challenge</title></Head>
          <h2>Day 5 Challenge</h2>
          <p style={{fontSize:'1.25rem',marginBottom:'1rem'}}>
            Sequence: <strong>{flashSeq.join(' – ')}</strong>
          </p>
          <form onSubmit={handleMemorySubmit}>
            <input
              type="text"
              value={userAns}
              onChange={e=>setUserAns(e.target.value)}
              placeholder="Type the 3rd number…"
              autoComplete="off"
              style={{padding:'8px',fontSize:16,width:150}}
              required
            />
            <button type="submit" style={{marginLeft:10,padding:'8px 16px'}}>Submit</button>
          </form>
        </div>
        <div className="adR" style={{background:'#eee'}}>Ad Right</div>
        <div className="footer" style={{background:'#ddd',height:90,textAlign:'center',lineHeight:'90px'}}>Ad Banner Bottom</div>
      </div>
    )
  }

  // — all other days: MCQ flow —
  return (
    <div className="quiz-page">
      <div className="header" style={{background:'#ddd',height:90,textAlign:'center',lineHeight:'90px'}}>Ad Banner Top</div>
      <div className="adL" style={{background:'#eee'}}>Ad Left</div>
      <div className="main" style={{textAlign:'center',padding:'2rem'}}>
        <Head>
          <title>Day {displayDay} – Puzzle {idNum} | Mind Sprint</title>
          <meta name="description" content={puzzle?.question||''}/>
        </Head>
        <h2>Day {displayDay} Challenge</h2>
        <p>{puzzle?.question}</p>
        {puzzle?.options.map(opt=>(
          <button
            key={opt}
            onClick={()=>afterAnswer(opt===puzzle.answer)}
            style={{
              display:'block',margin:'10px auto',padding:'10px 20px',
              width:'80%',background:'#f0f0f0',border:'1px solid #ccc',
              borderRadius:4,cursor:'pointer'
            }}
          >
            {opt}
          </button>
        ))}
      </div>
      <div className="adR" style={{background:'#eee'}}>Ad Right</div>
      <div className="footer" style={{background:'#ddd',height:90,textAlign:'center',lineHeight:'90px'}}>Ad Banner Bottom</div>
    </div>
  )
}
