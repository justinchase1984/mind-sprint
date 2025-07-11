import Link from 'next/link'
import Head from 'next/head'

// assume you have N puzzles; you can also fetch dynamically
const TOTAL_PUZZLES = 30

export default function Archive() {
  const links = Array.from({ length: TOTAL_PUZZLES }, (_, i) => {
    const id = i + 1
    return (
      <li key={id}>
        <Link href={`/puzzle/${id}`}>Puzzle #{id}</Link>
      </li>
    )
  })

  return (
    <>
      <Head>
        <title>Archive | Mind Sprint</title>
        <meta name="description" content="Browse past Mind Sprint puzzles." />
      </Head>
      <main style={{ maxWidth: 600, margin: '2rem auto' }}>
        <h1>Past Puzzles</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>{links}</ul>
      </main>
    </>
  )
}
