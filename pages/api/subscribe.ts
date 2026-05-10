import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { email } = req.body

  console.log('New subscriber:', email)

  // TEMP: just log it (next step we connect AWeber)

  return res.status(200).json({ success: true })
}
