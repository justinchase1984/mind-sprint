// components/Layout.tsx
import React, { ReactNode } from 'react'
import Link from 'next/link'

interface LayoutProps {
  children: ReactNode
  hideHeader?: boolean
}

export default function Layout({ children, hideHeader }: LayoutProps) {
  return (
    <>
      {/* Header (can be hidden) */}
      {!hideHeader && (
        <header
          style={{
            borderBottom: '1px solid #eee',
            padding: '0.5rem 1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <Link href="/" legacyBehavior>
              <a
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  color: '#000',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <span style={{ lineHeight: 1 }}>🧠</span>
                <span>Mind Sprint</span>
              </a>
            </Link>
          </div>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/archive" legacyBehavior>
              <a style={{ textDecoration: 'none', fontSize: '0.9rem' }}>Archive</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a style={{ textDecoration: 'none', fontSize: '0.9rem' }}>About</a>
            </Link>
            <Link href="/privacy" legacyBehavior>
              <a style={{ textDecoration: 'none', fontSize: '0.9rem' }}>Privacy</a>
            </Link>
          </nav>
        </header>
      )}

      <main
        style={{
          minHeight: '80vh',
          paddingTop: hideHeader ? '1rem' : '2rem',
        }}
      >
        {children}
      </main>

      <footer
        style={{
          borderTop: '1px solid #eee',
          backgroundColor: 'transparent',
          textAlign: 'center',
          padding: '2rem 0',
          width: '100%',
          fontSize: '0.9rem',
        }}
      >
        <Link href="/about" legacyBehavior>
          <a style={{ marginRight: '1rem', fontWeight: 'normal', textDecoration: 'none' }}>
            About
          </a>
        </Link>
        <Link href="/privacy" legacyBehavior>
          <a style={{ fontWeight: 'normal', textDecoration: 'none' }}>Privacy Policy</a>
        </Link>
      </footer>
    </>
  )
}
