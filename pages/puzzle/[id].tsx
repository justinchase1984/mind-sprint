// File: pages/puzzle/[id].tsx
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEvent, useState, useEffect } from 'react'
import Link from 'next/link'
import { getStreaks, saveStreaks } from '../../lib/streak'

interface Puzzle { question: string; answer: string }
const puzzles: Puzzle[] = [
  { question: 'Which year did the Berlin Wall fall?', answer: '1989' },
  { question: 'Who was the first female Prime Minister of the UK?', answer: 'margaret thatcher' },
  { question: 'Which country has won the most FIFA World Cups?', answer: 'brazil' },
  { question: 'What is the capital of Australia?', answer: 'canberra' },
  { question: 'In what year did “Friends” first premiere on TV?', answer: '1994' },
  { question: 'What chemical element has the symbol “Au”?', answer: 'gold' },
  { question: 'Who wrote “1984” and “Animal Farm”?', answer: 'george orwell' },
  { question: 'Which band released the album “Dark Side of the Moon”?', answer: 'pink floyd' },
  { question: 'Which movie won Best Picture at the 2020 Oscars?', answer: 'parasite' },
  { question: 'What is the 12th Fibonacci number?', answer: '144' },
  { question: 'Which city hosted the 2016 Summer Olympics?', answer: 'rio de janeiro' },
  { question: 'Which company acquired LinkedIn in 2016?', answer: 'microsoft' },
  { question: 'The Mona Lisa is on display at which museum?', answer: 'the louvre' },
  { question: 'In Greek myth, who is the god of the sea?', answer: 'poseidon' },
  { question: 'What language is primarily spoken in Brazil?', answer: 'portuguese' },
  { question: 'What is the largest mammal on Earth?', answer: 'blue whale' },
  { question: 'What is the currency of Japan?', answer: 'yen' },
  { question: 'Which festival is known as the “Festival of Lights” in India?', answer: 'diwali' },
  { question: 'What vitamin is produced when skin is exposed to sunlight?', answer: 'vitamin d' },
  { question: 'How many sides does a dodecagon have?', answer: '12' },
]

export default function PuzzlePage() {
  const router = useRouter()
  const idNum = parseInt(router.query.id as string, 10)
  const puzzle = puzzles[idNum - 1]    // now guaranteed to exist for IDs 1–20
  const [answer, setAnswer] = useState('')

  // clear the input whenever we move to a new puzzle
  useEffect(() => setAnswer(''), [idNum])

  // If we've gone past puzzle #20, show the “finished” screen
  if (!puzzle) {
    return (
      <>
        <Head>
          <title>All done! | Mind Sprint</title>
          <meta name="description" content="You’ve finished all puzzles! Come back tomorrow for new challenges."/>
        </Head>
        <main style={{ textAlign: 'center', padding: '2rem' }}>
          <h1>🎉 You’ve finished all puzzles!</h1>
          <Link href="/results"><button>See Results</button></Link>
        </main>
      </>
    )
  }

  // handle each submit (always advance)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isCorrect = answer.trim().toLowerCase() === puzzle.answer.toLowerCase()
    let { current, max } = getStreaks()
    if (isCorrect) current += 1
    else current = 0
    if (current > max) max = current
    saveStreaks(current, max)
    router.push(`/puzzle/${idNum + 1}`)
  }

  return (
    <div className="quiz-page">
      {/* top ad */}
      <div className="header" style={{ background:'#ddd', height:90, textAlign:'center' }}>
        Ad Banner Top
      </div>
      {/* left ad */}
      <div className="adL" style={{ background:'#eee' }}>Ad Left</div>
      {/* main puzzle area */}
      <div className="main">
        <Head>
          <title>Puzzle {idNum} | Mind Sprint</title>
          <meta name="description" content={puzzle.question}/>
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
          />
          <button type="submit" style={{ marginLeft:10 }}>Submit</button>
        </form>
      </div>
      {/* right ad */}
      <div className="adR" style={{ background:'#eee' }}>Ad Right</div>
      {/* bottom ad */}
      <div className="footer" style={{ background:'#ddd', height:90, textAlign:'center' }}>
        Ad Banner Bottom
      </div>
    </div>
  )
}
