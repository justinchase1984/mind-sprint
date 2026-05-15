import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const clientId = process.env.AWEBER_CLIENT_ID

  const redirectUri = 'https://dailymindsprint.com/api/aweber-callback'

  const url = `https://auth.aweber.com/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`

  res.redirect(url)
}
