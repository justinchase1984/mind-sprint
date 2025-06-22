// pages/puzzle/[id].tsx
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import { getStreaks, saveStreaks } from '../../lib/streak';

const puzzles = [ 
  /* your 20 questions here */ 
];

export default function PuzzlePage() {
  const router = useRouter();
  const { id } = router.query;
  const index = parseInt(id as string, 10) - 1;
  const puzzle = puzzles[index];
  const [answer, setAnswer] = useState('');

  useEffect(() => setAnswer(''), [index]);

  if (!puzzle) {
    return (
      <>
        <Head><title>All done | Mind Sprint</title></Head>
        <main style={{ textAlign: 'center', padding: '2rem' }}>
          <h1>🎉 You’ve finished!</h1>
          <Link href="/results"><button>See Results</button></Link>
        </main>
      </>
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
    router.push(`/puzzle/${index + 2}`);
  };

  return (
    <div className="quiz-page">
      <div className="header"></div>
      <div className="ad-left">Ad Left</div>
      <div className="main">
        <Head>
          <title>Puzzle {index + 1} | Mind Sprint</title>
          <meta name="description" content={puzzle.question} />
        </Head>
        <h2>Puzzle {index + 1}</h2>
        <p>{puzzle.question}</p>
        <form onSubmit={handleSubmit}>
          <input
            name="answer"
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            autoComplete="off"
            placeholder="Your answer..."
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="ad-right">Ad Right</div>
      <div className="footer">Ad Banner Bottom</div>
    </div>
  );
}
