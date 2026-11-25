// pages/thanks.tsx
import Link from 'next/link'
import Head from 'next/head'

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
      <Head>
        <title>Thanks for subscribing | Mind Sprint</title>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        🎉 Thanks for subscribing!
      </h1>
      <p style={{ fontSize: '1.1rem', maxWidth: 400 }}>
        Thanks for subscribing to Mind Sprint email updates. If you don’t see a confirmation email right away, check your spam or junk folder.
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
