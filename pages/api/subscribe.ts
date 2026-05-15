import type { NextApiRequest, NextApiResponse } from 'next'

const ACCESS_TOKEN = 'PASTE_YOUR_ACCESS_TOKEN_HERE'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { email } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email' })
  }

  try {
    // 1️⃣ Get account
    const accountRes = await fetch('https://api.aweber.com/1.0/accounts', {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    })
    const accountData = await accountRes.json()
    const accountId = accountData.entries[0].id

    // 2️⃣ Get lists
    const listRes = await fetch(`https://api.aweber.com/1.0/accounts/${accountId}/lists`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    })
    const listData = await listRes.json()

    // 👉 find your list (Mind Sprint Players)
    const list = listData.entries.find((l: any) =>
      l.name === 'Mind Sprint Players'
    )

    if (!list) {
      return res.status(400).json({ error: 'List not found' })
    }

    // 3️⃣ Add subscriber
    const subRes = await fetch(`https://api.aweber.com/1.0/lists/${list.id}/subscribers`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        name: '',
        ad_tracking: 'mind_sprint_app'
      })
    })

    const subData = await subRes.json()

    return res.status(200).json({ success: true, data: subData })

  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Failed to subscribe' })
  }
}
