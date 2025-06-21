// File: pages/puzzle/[id].tsx
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';

const puzzles = [
  { question: 'What comes next in the series: 2, 4, 8, 16, ?', answer: '32' },
  { question: 'Who won the FIFA World Cup in 2022?', answer: 'argentina' },
  { question: 'Capital city of Japan?', answer: 'tokyo' },
  { question: 'Unscramble: TCA', answer: 'cat' },
  { question: 'Which day comes after Monday?', answer: 'tuesday' },
  { question: 'What is 5 + 3?', answer: '8' },
  { question: 'What color is the sky on a clear day?', answer: 'blue' },
  { question: 'Which animal is known as man’s best friend?', answer: 'dog' },
  { question: 'How many continents are there on Earth?', answer: '7' },
  { question: 'Which planet is known as the Red Planet?', answer: 'mars' },
];

export default function PuzzlePage() {
  const router = useRouter();
  const { id } = router.query;
  const index = parseInt(id as string, 10) - 1;
  const puzzle = puzzles[index];
  const [answer, setAnswer] = useState('');

  // Whenever the puzzle index changes, clear the answer field
  useEffect(() => {
    setAnswer('');
  }, [index]);

  if (!puzzle) {
    return (
      <>
        <Head>
          <title>All puzzles complete | Mind Sprint</title>
          <meta
            name="description"
            content="You’ve finished all puzzles! Come back tomorrow for new challenges."
          />
        </Head>
        <main style={{ textAlign: 'center', padding: '2rem' }}>
          <h1>🎉 You’ve finished all puzzles!</h1>
          <Link href="/">
            <button style={{ marginTop: '20px' }}>Restart</button>
          </Link>
        </main>
      </>
    );
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isCorrect = answer.trim().toLowerCase() === puzzle.answer.toLowerCase();
    // TODO: record `isCorrect` to your scoring logic/localStorage

    // Advance regardless of correctness
    router.push(`/puzzle/${index + 2}`);
  };

  return (
    <>
      <Head>
        <title>Puzzle {index + 1} | Mind Sprint</title>
        <meta name="description" content={puzzle.question} />
      </Head>
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        {/* Mid Ad Placeholder */}
        <div
          style={{
            marginBottom: '1rem',
            height: '90px',
            background: '#f0f0f0',
          }}
        >
          Ad Banner
        </div>

        <h2>Puzzle {index + 1}</h2>
        <p>{puzzle.question}</p>
        <form onSubmit={handleSubmit}>
          <input
            name="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            autoComplete="off"
            placeholder="Your answer..."
            style={{ padding: '8px', fontSize: '16px', width: '200px' }}
            required
          />
          <button
            type="submit"
            style={{ marginLeft: '10px', padding: '8px 16px' }}
          >
            Submit
          </button>
        </form>
      </main>
    </>
  );
}
