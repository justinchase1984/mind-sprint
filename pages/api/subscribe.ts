import type { NextApiRequest, NextApiResponse } from 'next'

const ACCESS_TOKEN = 'RfbiEIlQHFv2YkjRU0PaqbfZuo60ZZf2'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email' })
  }

  try {
    // 🔹 STEP 1 — Get account
    const accountRes = await fetch('https://api.aweber.com/1.0/accounts', {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })

    const accountData = await accountRes.json()

    if (!accountData.entries || accountData.entries.length === 0) {
      return res.status(400).json({
        success: false,
        step: 'account',
        accountData,
      })
    }

    const accountId = accountData.entries[0].id

    // 🔹 STEP 2 — Get lists
    const listRes = await fetch(
      `https://api.aweber.com/1.0/accounts/${accountId}/lists`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    )

    const listData = await listRes.json()

    if (!listData.entries) {
      return res.status(400).json({
        success: false,
        step: 'lists',
        listData,
      })
    }

    // 🔹 DEBUG: return list names so we KNOW what exists
    const listNames = listData.entries.map((l: any) => ({
      id: l.id,
      name: l.name,
    }))

    const list = listData.entries.find(
      (l: any) => l.name === 'Mind Sprint Players'
    )

    if (!list) {
      return res.status(400).json({
        success: false,
        step: 'list_not_found',
        availableLists: listNames,
      })
    }

    // 🔹 STEP 3 — Add subscriber
    const subRes = await fetch(
      `https://api.aweber.com/1.0/lists/${list.id}/subscribers`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          name: '',
          ad_tracking: 'mind_sprint_app',
        }),
      }
    )

    const subData = await subRes.json()

    // 🔹 DEBUG FULL RESPONSE
    return res.status(200).json({
      success: true,
      accountId,
      listUsed: list.name,
      subscriberResponse: subData,
    })

  } catch (err: any) {
    console.error('AWeber API ERROR:', err)

    return res.status(500).json({
      success: false,
      error: err.message || 'Unknown error',
    })
  }
}
