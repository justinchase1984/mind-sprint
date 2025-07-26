// components/Layout.tsx
import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        {/* AdSense loader */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9372563823272898"
          crossOrigin="anonymous"
        />
      </Head>

      {/* Header with centered logo */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem 0',
          borderBottom: '1px solid #eee',
        }}
      >
        <Link href="/">
          <a style={{ display: 'inline-block' }}>
            <Image
              src="/logo.png"      // <- place your brain+Mind Sprint PNG as public/logo.png
              alt="Mind Sprint"
              width={200}         // adjust to your logo’s width
              height={50}         // adjust to your logo’s height
              priority            // loads immediately
            />
          </a>
        </Link>
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
            __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
          }}
        />
      </div>

      {/* Main content */}
      <main style={{ minHeight: '80vh', maxWidth: 800, margin: '0 auto', padding: '0 1rem' }}>
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
          <a style={{ margin: '0 1rem', color: '#0070f3' }}>
            About
          </a>
        </Link>
        <Link href="/privacy">
          <a style={{ margin: '0 1rem', color: '#0070f3' }}>
            Privacy Policy
          </a>
        </Link>
      </footer>
    </>
  )
}
