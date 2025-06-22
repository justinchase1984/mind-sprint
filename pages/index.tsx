// File: pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="quiz-page">
      <div className="header" style={{ background:'#ddd', height:90, textAlign:'center' }}>
        Ad Banner Top
      </div>
      <div className="adL" style={{ background:'#eee' }}>
        Ad Left
      </div>
      <div className="main">
        <Head>
          <title>Mind Sprint | Daily Brain Teasers</title>
          <meta
            name="description"
            content="Quick puzzles in sports, pop culture, history & more."
          />
        </Head>
        <h1>🧠 Mind Sprint</h1>
        <p>One puzzle per page. Rack up your streak. Come back daily!</p>
        <Link href="/puzzle/1">
          <button style={{padding:'10px 20px',fontSize:16}}>Start Puzzle</button>
        </Link>
      </div>
      <div className="adR" style={{ background:'#eee' }}>
        Ad Right
      </div>
      <div className="footer" style={{ background:'#ddd', height:90, textAlign:'center' }}>
        Ad Banner Bottom
      </div>
    </div>
  );
}
