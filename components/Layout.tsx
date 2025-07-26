// components/Layout.tsx
import React, { ReactNode } from 'react'
import Head from 'next/head'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        {/* AdSense loader script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9372563823272898"
          crossOrigin="anonymous"
        />
      </Head>

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
        ></ins>
        <script
          dangerouslySetInnerHTML={{
            __html: '(adsbygoogle = window.adsbygoogle || []).push({});',
          }}
        />
      </div>

      {/* Page Content */}
      <main style={{ minHeight: '80vh' }}>
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
        <a href="/about" style={{ margin: '0 1rem', color: '#0070f3' }}>
          About
        </a>
        <a href="/privacy" style={{ margin: '0 1rem', color: '#0070f3' }}>
          Privacy Policy
        </a>
      </footer>
    </>
  )
}
