// components/Layout.tsx
import React, { ReactNode } from 'react'
import Link from 'next/link'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* Optional: keep any existing header/nav above */}
      <main style={{ minHeight: '80vh' }}>
        {children}
      </main>

      <footer
        style={{
          borderTop: '4px solid hotpink',    // ← super visible for testing
          backgroundColor: '#fffbf0',       // ← light highlight
          textAlign: 'center',
          padding: '2rem 0',
          width: '100%',
        }}
      >
        <Link href="/about">
          <a style={{ marginRight: '1rem', fontWeight: 'bold' }}>
            About
          </a>
        </Link>
        <Link href="/privacy">
          <a style={{ fontWeight: 'bold' }}>
            Privacy Policy
          </a>
        </Link>
      </footer>
    </>
  )
}
