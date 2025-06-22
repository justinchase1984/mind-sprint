// pages/puzzle/[id].tsx
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import type { Puzzle } from '../../lib/puzzles'
import { getStreaks, saveStreaks } from '../../lib/streak'
import { getDailyPuzzles } from '../../lib/utils'

export default function PuzzlePage() {
  const router = useRouter()
  const puzzles = getDailyPuzzles()
  const idNum   = parseInt((router.query.id as string) || '1', 10)
  const puzzle  = puzzles[idNum - 1]

  // track and clear selection on change
  const [selected, setSelected] = useState<string>('')
  useEffect(() => setSelected(''), [idNum])

  // all done?
  if (!puzzle) {
    return (
      <>
        <Head><title>All done! | Mind Sprint</title></Head>
        <main style={{ textAlign: 'center', padding: '2rem' }}>
          <h1>🎉 You’ve completed today’s challenge!</h1>
          <Link href="/"><button>Back Home</button></Link>
        </main>
      </>
    )
  }

  const handleAnswer = (choice: string) => {
    const isCorrect = choice === puzzle.answer
    let { current, max } = getStreaks()
    if (isCorrect) current++ 
    else current = 0
    if (current > max) max = current
    saveStreaks(current, max)
    router.push(`/puzzle/${idNum + 1}`)
  }

  return (
    <div className="quiz-page">
      <div
        className="header"
        style={{ background: '#ddd', height: 90, textAlign: 'center', lineHeight: '90px' }}
      >
        Ad Banner Top
      </div>
      <div className="adL" style={{ background: '#eee' }}>Ad Left</div>

      <div className="main" style={{ textAlign: 'center', padding: '2rem' }}>
        <Head>
          <title>Puzzle {idNum} | Mind Sprint</title>
          <meta name="description" content={puzzle.question} />
        </Head>
        <h2>Puzzle {idNum}</h2>
        <p>{puzzle.question}</p>

        {puzzle.options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleAnswer(opt)}
            style={{
              display: 'block',
              margin: '10px auto',
              padding: '10px 20px',
              width: '80%',
              background: '#f0f0f0',
              border: '1px solid #ccc',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="adR" style={{ background: '#eee' }}>Ad Right</div>
      <div
        className="footer"
        style={{ background: '#ddd', height: 90, textAlign: 'center', lineHeight: '90px' }}
      >
        Ad Banner Bottom
      </div>
    </div>
  )
}
