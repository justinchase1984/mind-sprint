// components/Header.tsx
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        borderBottom: '1px solid #eee',
      }}
    >
      {/* ← Updated logo to match center homepage logo */}
      <Link href="/">
        <a
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#333',
            textDecoration: 'none',
          }}
        >
          🧠 Mind Sprint
        </a>
      </Link>

      {/* your existing nav links */}
      <nav>
        <Link href="/archive">
          <a style={{ marginRight: '1rem', color: '#333', textDecoration: 'none' }}>
            Archive
          </a>
        </Link>
        <Link href="/about">
          <a style={{ marginRight: '1rem', color: '#333', textDecoration: 'none' }}>
            About
          </a>
        </Link>
        <Link href="/privacy">
          <a style={{ color: '#333', textDecoration: 'none' }}>Privacy</a>
        </Link>
      </nav>
    </header>
  )
}
