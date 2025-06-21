// File: pages/_app.tsx
import type { AppProps } from 'next/app';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [streak, setStreak] = useState(0);

  // Update streak based on the current puzzle ID in the URL
  useEffect(() => {
    const match = router.asPath.match(/\/puzzle\/(\d+)/);
    if (match) {
      const current = parseInt(match[1], 10);
      setStreak(current - 1);
    } else {
      setStreak(0);
    }
  }, [router.asPath]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: '#fff',
        padding: '0.5rem',
        borderBottom: '1px solid #eee',
        textAlign: 'center',
        zIndex: 1000
      }}>
        <strong>Streak: {streak}</strong>
      </header>
      <div style={{ paddingTop: '3rem' }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
