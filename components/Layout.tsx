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
        {/* Google AdSense loader script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9372563823272898"
          crossOrigin="anonymous"
        />
      </Head>

      {/* Top Banner Ad */}
      <div
        id="ad-top"
        style={{ textAlign: 'center', padding: '1rem' }}
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

      {/* Global Navigation (visible on every page) */}
      <nav style={{ textAlign: 'center', padding: '1rem' }}>
        <Link href="/about">
          <a style={{ margin: '0 1rem' }}>About</a>
        </Link>
        <Link href="/privacy">
          <a style={{ margin: '0 1rem' }}>Privacy Policy</a>
        </Link>
        <Link href="/contact">
          <a style={{ margin: '0 1rem' }}>Contact</a>
        </Link>
      </nav>

      {/* Page Content */}
      <main style={{ minHeight: '80vh' }}>
        {children}
      </main>

      {/* Footer Links (optional, repeats nav for extra visibility) */}
      <footer
        style={{
          borderTop: '1px solid #eee',
          backgroundColor: 'transparent',
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
        <Link href="/contact">
          <a style={{ margin: '0 1rem' }}>Contact</a>
        </Link>
      </footer>
    </>
  )
}
