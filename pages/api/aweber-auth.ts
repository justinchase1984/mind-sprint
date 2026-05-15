import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const clientId = process.env.AWEBER_CLIENT_ID

  const redirectUri = 'https://dailymindsprint.com/api/aweber-callback'

  const scope = 'account.read list.read list.write subscriber.read subscriber.write'

  const url = `https://auth.aweber.com/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(scope)}`

  res.redirect(url)
}
