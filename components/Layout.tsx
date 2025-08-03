// components/Layout.tsx
import React, { ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface LayoutProps {
  children: ReactNode
  hideHeaderOnHome?: boolean
}

export default function Layout({ children, hideHeaderOnHome = false }: LayoutProps) {
  const router = useRouter()
  const isHome = router.pathname === '/'

  return (
    <>
      {/* Header: skip on home if hideHeaderOnHome is true */}
      {!(isHome && hideHeaderOnHome) && (
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.5rem 1rem',
            borderBottom: '1px solid #eee',
            fontSize: '14px',
          }}
        >
          <div>
            <Link href="/" passHref>
              <a
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none',
                  color: 'black',
                  fontWeight: 600,
                }}
              >
                <img
                  src="/logo.png" // <--- ensure this is the correct path to your transparent "brain + Mind Sprint" logo
                  alt="Mind Sprint"
                  style={{ height: 24, display: 'inline-block' }}
                />
                <span>Mind Sprint</span>
              </a>
            </Link>
          </div>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/archive" legacyBehavior><a style={{ textDecoration: 'none', color: '#4b0082' }}>Archive</a></Link>
            <Link href="/about" legacyBehavior><a style={{ textDecoration: 'none', color: '#4b0082' }}>About</a></Link>
            <Link href="/privacy" legacyBehavior><a style={{ textDecoration: 'none', color: '#4b0082' }}>Privacy</a></Link>
          </nav>
        </header>
      )}

      <main style={{ minHeight: '80vh' }}>{children}</main>

      {/* Single footer */}
      <footer
        style={{
          borderTop: '1px solid #eee',
          padding: '2rem 0',
          textAlign: 'center',
          fontSize: '14px',
        }}
      >
        <Link href="/about" legacyBehavior>
          <a style={{ margin: '0 0.5rem', textDecoration: 'none', color: '#4b0082' }}>About</a>
        </Link>
        <span style={{ margin: '0 0.25rem' }}>|</span>
        <Link href="/privacy" legacyBehavior>
          <a style={{ margin: '0 0.5rem', textDecoration: 'none', color: '#4b0082' }}>Privacy Policy</a>
        </Link>
      </footer>
    </>
  )
}
