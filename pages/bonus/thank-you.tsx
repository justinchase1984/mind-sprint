// pages/bonus/thank-you.tsx
import Link from 'next/link'
import Head from 'next/head'
export default function ThankYou() {
  return (
    <div style={{ maxWidth: 600, margin: '4rem auto', textAlign: 'center' }}>
      <Head>
        <title>Thanks for signing up | Mind Sprint</title>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <h1>🎉 Thanks for signing up!</h1>
      <p>Click below to download your free Sudoku book:</p>
      <img
        src="/bonus/KrazyDad%27s%20Book%20Cover.png"
        alt="KrazyDad’s Sudoku Book"
        style={{ maxWidth: 300, margin: '2rem 0' }}
      />
      <div>
        <a
          href="/bonus/KrazyDad%27s%20Sudoku%20Book%20V1.pdf"
          target="_blank"
          rel="noopener"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            background: '#0077cc',
            color: '#fff',
            borderRadius: 4,
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Download Volume 1 (PDF)
        </a>
      </div>
      <p style={{ marginTop: '2rem' }}>
        <Link href="/"><a>Back to Home</a></Link>
      </p>
    </div>
  )
}
