// pages/thanks.tsx
import Link from 'next/link'

export default function ThanksPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      padding: '2rem',
      textAlign: 'center',
      background: '#fff',
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        🎉 Thanks for subscribing!
      </h1>
      <p style={{ fontSize: '1.1rem', maxWidth: 400 }}>
        Check your inbox for the bonus reward we just sent you. If you don’t see it right away, be sure to check your spam/junk folder.
      </p>
      <Link href="/">
        <button style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          border: '1px solid #ccc',
          borderRadius: 4,
          cursor: 'pointer',
          background: '#f9f9f9',
        }}>
          Back to Home
        </button>
      </Link>
    </div>
  )
}
