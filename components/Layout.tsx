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

      {/* Top Banner Ad */}
      <div
        id="ad-top"
        style={{
          textAlign: 'center',
          padding: '1rem',
        }}
      >
        {/* MindSprint_TopBanner_Responsive */}
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-9372563823272898"
          data-ad-slot="6887362961"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <script
          // Push the ad
          dangerouslySetInnerHTML={{
            __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
          }}
        />
      </div>

      <main style={{ minHeight: '80vh' }}>
        {children}
      </main>

      <footer
        style={{
          borderTop: '1px solid #eee',
          backgroundColor: 'transparent',
          textAlign: 'center',
          padding: '2rem 0',
          width: '100%',
        }}
      >
        <Link href="/about">
          <a style={{ marginRight: '1rem', fontWeight: 'normal' }}>
            About
          </a>
        </Link>
        <Link href="/privacy">
          <a style={{ fontWeight: 'normal' }}>
            Privacy Policy
          </a>
        </Link>
      </footer>
    </>
  )
}
