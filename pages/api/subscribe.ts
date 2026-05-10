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

    // ✅ REQUIRED
    params.append('email', email)
    params.append('listname', 'awlist6897043')

    // ✅ EXACT FIELDS FROM YOUR FORM (cleaned)
    params.append('meta_web_form_id', '317058051')
    params.append('meta_split_id', '')
    params.append('meta_adtracking', 'Mind_Sprint__Opt-In_Form')
    params.append('meta_message', '1')
    params.append('meta_required', 'email')
    params.append('meta_tooltip', '')

    // optional redirect
    params.append('redirect', 'https://www.aweber.com/thankyou-coi.htm?m=text')

    const response = await fetch('https://www.aweber.com/scripts/addlead.pl', {
      method: 'POST',
      body: params,
    })

    console.log('AWeber response status:', response.status)

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Subscribe error:', err)
    return res.status(500).json({ error: 'Failed to subscribe' })
  }
}
