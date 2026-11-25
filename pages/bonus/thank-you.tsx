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
      <p>You are all set. Thanks for joining Mind Sprint.</p>
      <p style={{ marginTop: '2rem' }}>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </p>
    </div>
  )
}
