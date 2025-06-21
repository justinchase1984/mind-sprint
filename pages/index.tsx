import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mind Sprint - Daily Brain Teasers & Quizzes</title>
        <meta name="description" content="Play quick, fun puzzles daily. Challenge yourself with Mind Sprint!" />
      </Head>
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <div id="ad-top" style={{ marginBottom: '1rem' }}>Ad Banner Top</div>
        <h1>🧠 Mind Sprint</h1>
        <p>Quick, engaging puzzles in sports, geography, pop culture & more. One puzzle per page. New page = new ad view.</p>
        <Link href="/puzzle/1"><button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>Start Puzzle</button></Link>
        <div id="ad-bottom" style={{ marginTop: '2rem' }}>Ad Banner Bottom</div>
      </main>
    </>
); }
