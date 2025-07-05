// components/Layout.tsx
import React, { ReactNode } from 'react'
import Link from 'next/link'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* Your existing header/nav can stay here if you have one */}
      <main style={{ minHeight: '80vh' }}>{children}</main>
      <footer style={{
        textAlign: 'center',
        padding: '2rem 0',
        borderTop: '1px solid #eee',
      }}>
        <Link href="/about">About</Link>
        {' | '}
        <Link href="/privacy">Privacy Policy</Link>
      </footer>
    </>
  )
}
