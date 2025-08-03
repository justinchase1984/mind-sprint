// components/Layout.tsx
import React, { ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface LayoutProps {
  children: ReactNode
  hideHeader?: boolean
}

export default function Layout({ children, hideHeader = false }: LayoutProps) {
  const router = useRouter()
  const isHomePage = router.pathname === '/'

  return (
    <>
      {/* Header */}
      {!hideHeader && !isHomePage && (
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
            <Link href="/" passHref legacyBehavior>
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
            {/* ✅ Archive removed */}
            <Link href="/about" legacyBehavior>
              <a style={{ textDecoration: 'none', color: '#000' }}>About</a>
            </Link>
            <Link href="/privacy" legacyBehavior>
              <a style={{ textDecoration: 'none', color: '#000' }}>Privacy</a>
            </Link>
          </nav>
        </header>
      )}

      {/* Main content */}
      <main style={{ minHeight: '80vh' }}>{children}</main>

      {/* ✅ Footer centered and constrained */}
      <footer
        style={{
          borderTop: '1px solid #eee',
          textAlign: 'center',
          padding: '2rem 0',
          fontSize: '0.9rem',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Link href="/about" legacyBehavior>
            <a style={{ marginRight: '1rem', textDecoration: 'none', color: '#000' }}>
              About
            </a>
          </Link>
          <Link href="/privacy" legacyBehavior>
            <a style={{ textDecoration: 'none', color: '#000' }}>Privacy Policy</a>
          </Link>
        </div>
      </footer>
    </>
  )
}
