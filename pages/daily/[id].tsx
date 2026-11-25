// File: pages/daily/[id].tsx
//
// Legacy daily page (unlinked, already noindex). It used to bundle the
// question bank and answers into browser JavaScript, so it now simply
// sends visitors to the current challenge.

import type { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: '/puzzle/1',
    permanent: false,
  },
})

export default function DailyPuzzleRedirect() {
  return null
}
