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
            <Link href="/" legacyBehavior>
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

          <nav style={{ display: 'flex', gap: '1.25rem' }}>
            <Link href="/brain-training" legacyBehavior>
              <a className="ms-navlink">Brain Training</a>
            </Link>
            <Link href="/faq" legacyBehavior>
              <a className="ms-navlink">FAQ</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="ms-navlink">About</a>
            </Link>
            <Link href="/privacy" legacyBehavior>
              <a className="ms-navlink">Privacy</a>
            </Link>
          </nav>
        </header>
      )}

      <main style={{ minHeight: '80vh' }}>{children}</main>

      <footer
        style={{
          borderTop: '1px solid #eee',
          textAlign: 'center',
          padding: '2rem 0',
          fontSize: '0.9rem',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', gap: '1.25rem', justifyContent: 'center' }}>
          <Link href="/brain-training" legacyBehavior>
            <a className="ms-navlink">Brain Training</a>
          </Link>
          <Link href="/faq" legacyBehavior>
            <a className="ms-navlink">FAQ</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="ms-navlink">About</a>
          </Link>
          <Link href="/privacy" legacyBehavior>
            <a className="ms-navlink">Privacy Policy</a>
          </Link>
        </div>
      </footer>
    </>
  )
}
