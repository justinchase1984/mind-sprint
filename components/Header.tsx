import Link from 'next/link'

export default function Header() {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        borderBottom: '1px solid #eee',
      }}
    >
      <Link href="/">
        <a style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          Mind Sprint
        </a>
      </Link>
      <nav>
        <Link href="/archive"><a style={{ marginRight: '1rem' }}>Archive</a></Link>
        <Link href="/about"><a style={{ marginRight: '1rem' }}>About</a></Link>
        <Link href="/privacy"><a>Privacy</a></Link>
      </nav>
    </header>
  )
}
