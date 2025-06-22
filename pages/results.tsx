// pages/results.tsx
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getStreaks, saveStreaks } from '../lib/streak';

export default function Results() {
  const [maxStreak, setMax] = useState(0);
  useEffect(() => {
    const { max } = getStreaks();
    setMax(max);
    saveStreaks(0, 0);
  }, []);
  return (
    <>
      <Head><title>Your Results | Mind Sprint</title></Head>
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>🏁 Results</h1>
        <p>Your best run was <strong>{maxStreak}</strong> in a row!</p>
        <Link href="/"><button>Play Again</button></Link>
      </main>
    </>
  );
}
