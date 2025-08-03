// components/Layout.tsx
import React, { ReactNode } from 'react'
import Link from 'next/link'

interface LayoutProps {
  children: ReactNode
  hideHeader?: boolean
}

export default function Layout({ children, hideHeader = false }: LayoutProps) {
  return (
    <>
      {!hideHeader && (
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.75rem 1rem',
            borderBottom: '1px solid #e8e8e8',
            fontSize: '0.9rem',
          }}
        >
          <div>
            <Link href="/" passHref>
              <a
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  color: '#000',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <span style={{ fontSize: '1rem' }}>🧠</span> Mind Sprint
              </a>
            </Link>
          </div>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/archive" legacyBehavior>
              <a style={{ textDecoration: 'none', color: '#5f21b7' }}>Archive</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a style={{ textDecoration: 'none', color: '#5f21b7' }}>About</a>
            </Link>
            <Link href="/privacy" legacyBehavior>
              <a style={{ textDecoration: 'none', color: '#5f21b7' }}>Privacy</a>
            </Link>
          </nav>
        </header>
      )}

      <main style={{ minHeight: '80vh' }}>{children}</main>

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
          <a style={{ marginRight: '1rem', fontWeight: 'normal', textDecoration: 'none', color: '#5f21b7' }}>
            About
          </a>
        </Link>
        <Link href="/privacy" legacyBehavior>
          <a style={{ fontWeight: 'normal', textDecoration: 'none', color: '#5f21b7' }}>
            Privacy Policy
          </a>
        </Link>
      </footer>
    </>
  )
}
