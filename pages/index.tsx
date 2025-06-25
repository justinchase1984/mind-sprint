// pages/index.tsx
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="quiz-page">
      <Head>
        <title>Mind Sprint | Today’s Challenge</title>
        <meta
          name="description"
          content="Daily puzzles in trivia, logic, memory, and more—new theme each day!"
        />
      </Head>

      <div
        className="header"
        style={{ background: '#ddd', height: 90, textAlign: 'center', lineHeight: '90px' }}
      >
        Ad Banner Top
      </div>
      <div className="adL" style={{ background: '#eee' }}>Ad Left</div>

      <div className="main" style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>🧠 Mind Sprint – Today’s Challenge</h1>
        <p>New theme every day: trivia, scrambles, logic, memory, crossword & more.</p>
        <Link href="/puzzle/1">
          <button style={{ padding: '10px 20px', fontSize: 16 }}>
            Start Today’s Challenge
          </button>
        </Link>
      </div>

      <div className="adR" style={{ background: '#eee' }}>Ad Right</div>
      <div
        className="footer"
        style={{ background: '#ddd', height: 90, textAlign: 'center', lineHeight: '90px' }}
      >
        Ad Banner Bottom
      </div>
    </div>
  )
}
{/* —————— Day-N Preview Links —————— */}
<section style={{ textAlign: 'center', marginTop: '2rem' }}>
  <h2>Quick Preview Any Day</h2>
  <div style={{ display: 'inline-block', textAlign: 'left' }}>
    {[1,2,3,4,5,6,7].map((day) => (
      <div key={day} style={{ margin: '0.25rem 0' }}>
        <Link href={`/puzzle/1?previewDay=${day}`}>
          <a>🔹 Preview Day {day}</a>
        </Link>
      </div>
    ))}
  </div>
</section>
{/* —————————————————————————————————— */}
