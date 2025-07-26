// pages/about.tsx
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About & Contact | Mind Sprint</title>
        <meta
          name="description"
          content="Learn about the team behind Mind Sprint and how to get in touch."
        />
      </Head>

      <div style={{ maxWidth: 600, margin: '2rem auto', padding: '0 1rem' }}>
        <h1>About Mind Sprint</h1>
        <p>
          Mind Sprint is a daily micro‑puzzle game designed to challenge your
          brain with a single, engaging question on each page. We aim to
          provide bite‑sized fun that boosts focus and keeps you coming back
          for more.
        </p>

        <h2>Contact Us</h2>
        <p>
          Got questions or feedback? Email us at{' '}
          <a href="mailto:hello@dailymindsprint.com">
            hello@dailymindsprint.com
          </a>.
        </p>
      </div>
    </>
  )
}
