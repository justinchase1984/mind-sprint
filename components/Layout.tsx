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
      {/* Header (hidden on homepage when <Layout hideHeader /> is used) */}
      {!hideHeader && (
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.85rem 1rem',
            borderBottom: '1px solid #e8e8e8',
            fontSize: '0.95rem',
            background: '#fff',
          }}
        >
          {/* Logo (unchanged) */}
          <div>
            <Link href="/" passHref legacyBehavior>
              <a
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  color: '#000',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                }}
                aria-label="Mind Sprint Home"
              >
                <span style={{ fontSize: '1rem' }}>🧠</span> Mind Sprint
              </a>
            </Link>
          </div>

          {/* Nav (About / Privacy) */}
          <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link href="/about" legacyBehavior>
              <a
                className="ms-navlink"
                style={{
                  textDecoration: 'none',
                  color: '#000',
                  padding: '4px 0',
                  position: 'relative',
                }}
              >
                About
              </a>
            </Link>
            <Link href="/privacy" legacyBehavior>
              <a
                className="ms-navlink"
                style={{
                  textDecoration: 'none',
                  color: '#000',
                  padding: '4px 0',
                  position: 'relative',
                }}
              >
                Privacy
              </a>
            </Link>
          </nav>
        </header>
      )}

      {/* Main content */}
      <main style={{ minHeight: '80vh' }}>{children}</main>

      {/* Footer (single footer sitewide, links stay plain/black) */}
      <footer
        style={{
          borderTop: '1px solid #eee',
          textAlign: 'center',
          padding: '2rem 0',
          fontSize: '0.9rem',
          background: '#fff',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link href="/about" legacyBehavior>
            <a style={{ textDecoration: 'none', color: '#000' }}>About</a>
          </Link>
          <Link href="/privacy" legacyBehavior>
            <a style={{ textDecoration: 'none', color: '#000' }}>Privacy Policy</a>
          </Link>
        </div>
      </footer>
    </>
  )
}
