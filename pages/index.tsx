// pages/index.tsx
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const handleStart = () => {
    // Always reset progress and start at Challenge 1
    if (typeof window !== 'undefined') {
      localStorage.setItem('unlockedChallenge', '1')
    }
    router.push('/puzzle/1?challenge=1')
  }

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

      <button
        onClick={handleStart}
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
    </div>
  )
}
