// components/Layout.tsx
import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        {/* Google AdSense loader */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9372563823272898"
          crossOrigin="anonymous"
        />
      </Head>

      {/* Header: logo + Archive/About/Privacy */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
          maxWidth: 900,
          margin: '0 auto',
        }}
      >
        {/* Logo */}
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            {/* Replace src with your actual logo file */}
            <img src="/mind-sprint-logo.png" alt="Mind Sprint" height={32} />
          </a>
        </Link>

        {/* Top nav */}
        <nav>
          <Link href="/archive">
            <a style={{ margin: '0 1rem' }}>Archive</a>
          </Link>
          <Link href="/about">
            <a style={{ margin: '0 1rem' }}>About</a>
          </Link>
          <Link href="/privacy">
            <a style={{ margin: '0 1rem' }}>Privacy</a>
          </Link>
        </nav>
      </header>

      {/* Top Banner Ad */}
      <div
        id="ad-top"
        style={{ textAlign: 'center', padding: '1rem 0' }}
      >
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-9372563823272898"
          data-ad-slot="6887362961"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: '(adsbygoogle = window.adsbygoogle || []).push({});',
          }}
        />
      </div>

      {/* Main content */}
      <main style={{ minHeight: '80vh', maxWidth: 900, margin: '0 auto', padding: '0 1rem' }}>
        {children}
      </main>

      {/* Footer: only About & Privacy */}
      <footer
        style={{
          borderTop: '1px solid #eee',
          textAlign: 'center',
          padding: '2rem 0',
        }}
      >
        <Link href="/about">
          <a style={{ margin: '0 1rem' }}>About</a>
        </Link>
        <Link href="/privacy">
          <a style={{ margin: '0 1rem' }}>Privacy Policy</a>
        </Link>
      </footer>
    </>
  )
}
