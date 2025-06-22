// File: pages/puzzle/[id].tsx
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';

const puzzles = [
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
];

export default function PuzzlePage() {
  const router = useRouter();
  const { id } = router.query;
  const index = parseInt(id as string, 10) - 1;
  const puzzle = puzzles[index];
  const [answer, setAnswer] = useState('');

  // clear input whenever puzzle changes
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
    // record correctness here later…
    router.push(`/puzzle/${index + 2}`); // always advance
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr minmax(auto,600px) 1fr',
        gap: '1rem',
        padding: '2rem',
      }}
    >
      {/* Left Ad */}
      <div style={{ background: '#f0f0f0', height: '300px' }}>Ad Left</div>

      {/* Main Content */}
      <>
        <Head>
          <title>Puzzle {index + 1} | Mind Sprint</title>
          <meta name="description" content={puzzle.question} />
        </Head>
        <main style={{ textAlign: 'center' }}>
          {/* Top Banner */}
          <div style={{ marginBottom: '1rem', height: '90px', background: '#ddd' }}>
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

          {/* Bottom Banner */}
          <div style={{ marginTop: '2rem', height: '90px', background: '#ddd' }}>
            Ad Banner Bottom
          </div>
        </main>
      </>

      {/* Right Ad */}
      <div style={{ background: '#f0f0f0', height: '300px' }}>Ad Right</div>
    </div>
  );
}
