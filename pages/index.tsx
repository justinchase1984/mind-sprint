// pages/index.tsx
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      style={{
        background: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <Head>
        <title>🧠 Mind Sprint</title>
        <meta
          name="description"
          content="Start your Mind Sprint challenges—one question per page, 7 challenges to unlock the bonus!"
        />
      </Head>

      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🧠 Mind Sprint</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        Start your Mind Sprint challenges:
      </p>
      <Link href="/puzzle/1">
        <button
          style={{
            padding: '12px 24px',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '4px',
            border: '1px solid #ccc',
            background: '#f9f9f9',
          }}
        >
          Get Started
        </button>
      </Link>
    </div>
  )
}
