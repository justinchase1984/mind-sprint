// File: pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mind Sprint | Daily Brain Teasers & Puzzles</title>
        <meta
          name="description"
          content="Test your wits with quick puzzles in sports, pop culture, geography, and more. New puzzle each page!"
        />
      </Head>
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        {/* Top Ad Placeholder */}
        <div style={{ marginBottom: '1rem', height: '90px', background: '#f0f0f0' }}>
          Ad Banner Top
        </div>

        <h1>🧠 Mind Sprint</h1>
        <p>
          One ultra-simple puzzle per page. Rack up your streak. Come back daily for new brain-firing challenges!
        </p>
        <Link href="/puzzle/1">
          <button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
            Start Puzzle
          </button>
        </Link>

        {/* Bottom Ad Placeholder */}
        <div style={{ marginTop: '2rem', height: '90px', background: '#f0f0f0' }}>
          Ad Banner Bottom
        </div>
      </main>
    </>
  );
}
