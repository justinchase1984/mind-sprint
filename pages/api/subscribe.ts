import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { email } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email' })
  }

  try {
    const params = new URLSearchParams()

    params.append('listname', 'awlist6897043') // ✅ FIXED
    params.append('email', email)
    params.append('redirect', 'https://dailymindsprint.com')
    params.append('meta_message', '1')

    await fetch('https://www.aweber.com/scripts/addlead.pl', {
      method: 'POST',
      body: params,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    return res.status(500).json({ error: 'Failed to subscribe' })
  }
}
