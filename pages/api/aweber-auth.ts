import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    clientId: process.env.AWEBER_CLIENT_ID
  })
}
