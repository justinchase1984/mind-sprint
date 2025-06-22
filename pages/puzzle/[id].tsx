import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';

import { getStreaks, saveStreaks } from '../../lib/streak';

interface Puzzle { question: string; answer: string; }
const puzzles: Puzzle[] = [ /* your 20 questions here */ ];

export default function PuzzlePage() {
  const router = useRouter();
  const idNum = parseInt(router.query.id as string, 10);
  const puzzle = puzzles[idNum - 1] || null;
  const [answer, setAnswer] = useState('');

  useEffect(() => setAnswer(''), [idNum]);

  if (!puzzle) {
    return (
      <div className="quiz-page">
        <div className="header"></div>
        <div className="adL"></div>
        <div className="main">
          <Head><title>Done | Mind Sprint</title></Head>
          <h1>🎉 All puzzles complete!</h1>
          <Link href="/results"><button>See Results</button></Link>
        </div>
        <div className="adR"></div>
        <div className="footer"></div>
      </div>
    );
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isCorrect = answer.trim().toLowerCase() === puzzle.answer.toLowerCase();
    let { current, max } = getStreaks();
    if (isCorrect) current += 1;
    else current = 0;
    if (current > max) max = current;
    saveStreaks(current, max);
    router.push(`/puzzle/${idNum + 1}`);
  };

  return (
    <div className="quiz-page">
      <div className="header" style={{ background:'#ddd', height:90, textAlign:'center' }}>
        Ad Banner Top
      </div>
      <div className="adL" style={{ background:'#eee' }}>Ad Left</div>
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
      <div className="adR" style={{ background:'#eee' }}>Ad Right</div>
      <div className="footer" style={{ background:'#ddd', height:90, textAlign:'center' }}>
        Ad Banner Bottom
      </div>
    </div>
  );
}
