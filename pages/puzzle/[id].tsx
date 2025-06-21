// File: pages/puzzle/[id].tsx
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

// Phase1: 10 sample puzzles; expand to 20
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim().toLowerCase() === puzzle.answer.toLowerCase()) {
      router.push(`/puzzle/${index + 2}`);
    } else {
      alert('Try again!');
      setAnswer('');
    }
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
            style={{ padding: '8px', fontSize: '16px' }}
            required
          />
          <button
            type="submit"
            style={{ marginLeft: '10px', padding: '8px 16px' }}
          >
            Submit
          </button>
        </form>

        {/* Bottom Ad Placeholder */}
        <div
          style={{
            marginTop: '2rem',
            height: '90px',
            background: '#f0f0f0',
          }}
        >
          Ad Banner Bottom
        </div>
      </main>
    </>
  );
}
