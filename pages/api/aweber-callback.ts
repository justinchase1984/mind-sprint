import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code as string

  const response = await fetch('https://auth.aweber.com/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      client_id: process.env.AWEBER_CLIENT_ID!,
      client_secret: process.env.AWEBER_CLIENT_SECRET!,
      redirect_uri: 'https://dailymindsprint.com/api/aweber-callback'
    })
  })

  const data = await response.json()

  res.status(200).json(data)
}
