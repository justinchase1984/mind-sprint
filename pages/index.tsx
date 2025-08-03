// pages/index.tsx
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout hideHeader>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: 'auto 1fr auto',
          gridTemplateColumns: '1fr minmax(0, 800px) 1fr',
          minHeight: '100vh',
          background: '#fff',
          alignItems: 'start',
          paddingTop: '3rem', // raise content a bit since header is gone
        }}
      >
        <Head>
          <title>🧠 Mind Sprint</title>
          <meta
            name="description"
            content="Solve 7 quick puzzles at your own pace. Keep your streak going and unlock a bonus—no login needed."
          />
        </Head>

        {/* Top ad placeholder */}
        <div
          id="ad-top"
          style={{
            gridColumn: '1 / -1',
            textAlign: 'center',
            padding: '1rem',
            minHeight: '60px',
          }}
        />

        {/* Left gutter */}
        <div />

        {/* Main */}
        <main
          style={{
            padding: '0', // tightened since we’re raising
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '2rem',
              marginBottom: '0.25rem',
              lineHeight: 1.1,
              fontWeight: 600,
              minHeight: '2.5rem',
              fontFamily:
                'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
            }}
          >
            🧠 Mind Sprint
          </h1>
          <p
            style={{
              fontSize: '1rem',
              maxWidth: 600,
              margin: '0.5rem auto 1rem',
              lineHeight: 1.3,
            }}
          >
            What is Mind Sprint? It’s a bite-sized trivia & brain challenge
            platform. Solve 7 quick puzzles—each on its own page—at your own pace.
            Keep your streak alive and unlock a bonus when you complete all 7.
            No login required, just tap and play.
          </p>
          <Link href="/puzzle/1?challenge=1" legacyBehavior>
            <button
              style={{
                padding: '10px 20px',
                fontSize: '1rem',
                cursor: 'pointer',
                borderRadius: 4,
                marginTop: '1rem',
                border: '1px solid #000',
                background: '#f7f7f7',
              }}
            >
              Get Started
            </button>
          </Link>
        </main>

        {/* Right gutter */}
        <div />

        {/* Bottom ad placeholder */}
        <div
          id="ad-bottom"
          style={{
            gridColumn: '1 / -1',
            textAlign: 'center',
            padding: '1rem',
            minHeight: '60px',
          }}
        />
      </div>
    </Layout>
  )
}
