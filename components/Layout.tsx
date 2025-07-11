// components/Layout.tsx
import React, { ReactNode } from 'react'
import Link from 'next/link'
import Header from './Header'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        {children}
      </main>
      <footer style={{
        borderTop: '1px solid #eee',
        backgroundColor: 'transparent',
        textAlign: 'center',
        padding: '2rem 0',
        width: '100%',
      }}>
        <Link href="/about">
          <a style={{ marginRight: '1rem', fontWeight: 'normal' }}>
            About
          </a>
        </Link>
        {' | '}
        <Link href="/privacy">
          <a style={{ fontWeight: 'normal' }}>
            Privacy Policy
          </a>
        </Link>
      </footer>
    </>
  )
}
