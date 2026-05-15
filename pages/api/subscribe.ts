import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email } = req.body

    const accessToken = process.env.AWEBER_ACCESS_TOKEN

    if (!accessToken) {
      return res.status(500).json({ success: false, error: 'Missing access token' })
    }

    // STEP 1: Get account
    const accountRes = await fetch('https://api.aweber.com/1.0/accounts', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    const accountData = await accountRes.json()

    if (!accountRes.ok) {
      return res.json({
        success: false,
        step: 'account',
        accountData,
      })
    }

    const accountId = accountData.entries[0].id

    // STEP 2: Get lists
    const listsRes = await fetch(`https://api.aweber.com/1.0/accounts/${accountId}/lists`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    const listsData = await listsRes.json()

    if (!listsRes.ok) {
      return res.json({
        success: false,
        step: 'lists',
        listsData,
      })
    }

    // 👉 IMPORTANT: use YOUR list name
    const list = listsData.entries.find(
      (l: any) => l.name === 'Mind Sprint Players'
    )

    if (!list) {
      return res.json({
        success: false,
        step: 'list_not_found',
        availableLists: listsData.entries.map((l: any) => l.name),
      })
    }

    // STEP 3: Add subscriber
    const subRes = await fetch(
      `https://api.aweber.com/1.0/accounts/${accountId}/lists/${list.id}/subscribers`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      }
    )

    const subData = await subRes.json()

    if (!subRes.ok) {
      return res.json({
        success: false,
        step: 'subscribe',
        subData,
      })
    }

    return res.json({ success: true })
  } catch (err: any) {
    return res.json({
      success: false,
      error: err.message,
    })
  }
}
