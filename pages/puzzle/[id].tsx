import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEvent, useState, useEffect } from 'react'
import Link from 'next/link'
import type { Puzzle } from '../../lib/puzzles'
import { getStreaks, saveStreaks } from '../../lib/streak'
import { getDailyPuzzles } from '../../lib/utils'

export default function PuzzlePage() {
  const { isReady, query, push } = useRouter()
  const [puzzles, setPuzzles] = useState<Puzzle[]>([])
  const [answer, setAnswer]   = useState('')

  // load today’s puzzles once router is ready
  useEffect(() => {
    if (isReady) setPuzzles(getDailyPuzzles())
  }, [isReady])

  const idNum = isReady ? parseInt(query.id as string, 10) : NaN
  const puzzle = puzzles[idNum - 1]

  // reset answer on puzzle change
  useEffect(() => setAnswer(''), [idNum])

  // wait for load
  if (!isReady || puzzles.length === 0) return null

  // finished all?
  if (!puzzle) {
    return (
      <main style={{textAlign:'center', padding:'2rem'}}>
        <h1>🎉 You’ve completed today’s challenge!</h1>
        <Link href="/"><button>Back Home</button></Link>
      </main>
    )
  }

  // submit handler
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const isCorrect = answer.trim().toLowerCase() === puzzle.answer.toLowerCase()
    let { current, max } = getStreaks()
    isCorrect ? current++ : (current = 0)
    if (current > max) max = current
    saveStreaks(current, max)
    push(`/puzzle/${idNum + 1}`)
  }

  return (
    <div className="quiz-page">
      <div className="header" style={{background:'#ddd',height:90,lineHeight:'90px',textAlign:'center'}}>Ad Top</div>
      <div className="adL" style={{background:'#eee'}}>Ad Left</div>
      <div className="main" style={{textAlign:'center',padding:'2rem'}}>
        <Head>
          <title>Puzzle {idNum} | Mind Sprint</title>
          <meta name="description" content={puzzle.question} />
        </Head>
        <h2>Puzzle {idNum}</h2>
        <p>{puzzle.question}</p>
        <form onSubmit={handleSubmit}>
          <input
            name="answer"
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            autoComplete="off"
            placeholder="Your answer…"
            required
            style={{padding:'8px',fontSize:16,width:200}}
          />
          <button type="submit" style={{marginLeft:10,padding:'8px 16px'}}>Submit</button>
        </form>
      </div>
      <div className="adR" style={{background:'#eee'}}>Ad Right</div>
      <div className="footer" style={{background:'#ddd',height:90,lineHeight:'90px',textAlign:'center'}}>Ad Bottom</div>
    </div>
  )
}
