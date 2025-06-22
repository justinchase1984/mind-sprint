// pages/daily/[id].tsx
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEvent, useState, useEffect } from 'react'
import Link from 'next/link'
import { getStreaks, saveStreaks } from '../../lib/streak'
import { getDailyPuzzles } from '../../lib/utils'

export default function DailyPuzzlePage() {
  const router = useRouter()
  const { isReady, query } = router
  const [puzzles, setPuzzles] = useState<Puzzle[]>([])

  useEffect(() => {
    if (isReady) setPuzzles(getDailyPuzzles())
  }, [isReady])

  const idNum = isReady ? parseInt(query.id as string, 10) : NaN
  const puzzle = puzzles[idNum - 1]
  const [answer, setAnswer] = useState('')

  useEffect(() => setAnswer(''), [idNum])

  if (!isReady || puzzles.length === 0) return null
  if (!puzzle) {
    return (
      <>
        <Head><title>Daily Done! | Mind Sprint</title></Head>
        <main>…same finished UI…</main>
      </>
    )
  }

  const handle = (e: FormEvent) => {
    e.preventDefault()
    /* same streak logic… */
    router.push(`/daily/${idNum + 1}`)
  }

  return (
    /* same 3×3 grid wrapper but change links to /daily/… */
  )
}
