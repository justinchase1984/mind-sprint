// pages/about.tsx
import Head from 'next/head'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About & Contact | Mind Sprint</title>
        <meta
          name="description"
          content="Learn about Mind Sprint and get in touch. Bite-sized puzzles to sharpen your mind."
        />
      </Head>
      <main style={{ maxWidth: 800, margin: '2rem auto', padding: '0 1rem' }}>
        <h1>About Mind Sprint</h1>
        <p>
          Mind Sprint is a bite-sized trivia & brain challenge platform designed to give you quick, engaging puzzles that
          sharpen focus and build streaks. Solve 7 puzzles at your own pace and unlock a bonus when you complete them all.
        </p>
        <h2>Contact</h2>
        <p>
          Have questions, feedback, or just want to say hi? We'd love to hear from you!
        </p>
        <ul>
          <li>
            Email:{' '}
            <a href="mailto:hello@dailymindsprint.com">hello@dailymindsprint.com</a>
          </li>
          <li>
            Twitter:{' '}
            <a
              href="https://twitter.com/dailymindsprint"
              target="_blank"
              rel="noopener noreferrer"
            >
              @dailymindsprint
            </a>
          </li>
        </ul>
      </main>
    </Layout>
  )
}
