// File: pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
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
          <title>Mind Sprint | Daily Brain Teasers & Puzzles</title>
          <meta
            name="description"
            content="Test your wits with quick puzzles in sports, pop culture, geography, and more. New puzzle each page!"
          />
        </Head>
        <main style={{ textAlign: 'center' }}>
          {/* Top Banner */}
          <div style={{ marginBottom: '1rem', height: '90px', background: '#ddd' }}>
            Ad Banner Top
          </div>

          <h1>🧠 Mind Sprint</h1>
          <p>
            One ultra-simple puzzle per page. Rack up your streak. Come back daily for new
            brain-firing challenges!
          </p>
          <Link href="/puzzle/1">
            <button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
              Start Puzzle
            </button>
          </Link>

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
