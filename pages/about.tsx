// pages/about.tsx
import Link from 'next/link';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About & Contact | Mind Sprint</title>
        <meta name="description" content="Learn about the team behind Mind Sprint and how to get in touch." />
      </Head>
      <main style={{ maxWidth: 800, margin: '2rem auto', padding: '0 1rem' }}>
        <h1>About Mind Sprint</h1>
        <p>
          Mind Sprint is a daily micro-puzzle game designed to challenge your brain with a single, engaging question each page. We aim to provide bite-sized fun that boosts focus and keeps you coming back for more.
        </p>
        <h2>Contact</h2>
        <p>
          Have questions, feedback, or just want to say hi? We'd love to hear from you!
        </p>
        <ul>
          <li>Email: <a href="mailto:hello@dailymindsprint.com">hello@dailymindsprint.com</a></li>
          <li>Twitter: <a href="https://twitter.com/dailymindsprint" target="_blank" rel="noopener noreferrer">@dailymindsprint</a></li>
        </ul>
      </main>
    </>
  );
}

// Reminder: add links to footer or main layout:
// <footer style={{ textAlign: 'center', padding: '2rem 0' }}>
//   <Link href="/about">About</Link> | <Link href="/privacy">Privacy Policy</Link>
// </footer>
