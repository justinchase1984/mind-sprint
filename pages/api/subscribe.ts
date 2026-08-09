import type { NextApiRequest, NextApiResponse } from 'next'

const AWEBER_LIST_NAME = 'Mind Sprint Players'

const ACCESS_TOKEN_KEY = 'aweber:access_token'
const REFRESH_TOKEN_KEY = 'aweber:refresh_token'
const EXPIRES_AT_KEY = 'aweber:expires_at'

type TokenState = {
  accessToken: string
  refreshToken: string
  expiresAt: number
}

async function redisCommand<T = any>(
  command: Array<string | number>
): Promise<T> {
  const redisUrl = process.env.KV_REST_API_URL
  const redisToken = process.env.KV_REST_API_TOKEN

  if (!redisUrl || !redisToken) {
    throw new Error('Redis environment variables are missing')
  }

  const response = await fetch(redisUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${redisToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(command),
  })

  const data = await response.json()

  if (!response.ok || data.error) {
    throw new Error(data.error || 'Redis request failed')
  }

  return data.result
}

async function redisGet(key: string): Promise<string | null> {
  return redisCommand<string | null>(['GET', key])
}

async function redisSet(key: string, value: string): Promise<void> {
  await redisCommand(['SET', key, value])
}

async function loadTokens(): Promise<TokenState> {
  let accessToken = await redisGet(ACCESS_TOKEN_KEY)
  let refreshToken = await redisGet(REFRESH_TOKEN_KEY)
  const storedExpiresAt = await redisGet(EXPIRES_AT_KEY)

  if (!accessToken) {
    accessToken = process.env.AWEBER_ACCESS_TOKEN || null

    if (accessToken) {
      await redisSet(ACCESS_TOKEN_KEY, accessToken)
    }
  }

  if (!refreshToken) {
    refreshToken = process.env.AWEBER_REFRESH_TOKEN || null

    if (refreshToken) {
      await redisSet(REFRESH_TOKEN_KEY, refreshToken)
    }
  }

  if (!accessToken) {
    throw new Error('AWeber access token is missing')
  }

  if (!refreshToken) {
    throw new Error('AWeber refresh token is missing')
  }

  return {
    accessToken,
    refreshToken,
    expiresAt: storedExpiresAt ? Number(storedExpiresAt) : 0,
  }
}

async function refreshAWeberToken(
  refreshToken: string
): Promise<TokenState> {
  const clientId = process.env.AWEBER_CLIENT_ID
  const clientSecret = process.env.AWEBER_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    throw new Error('AWeber client credentials are missing')
  }

  const basicAuth = Buffer.from(
    `${clientId}:${clientSecret}`
  ).toString('base64')

  const response = await fetch('https://auth.aweber.com/oauth2/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }).toString(),
  })

  const data = await response.json()

  if (!response.ok || !data.access_token) {
    console.error('AWeber token refresh failed:', data)
    throw new Error('AWeber token refresh failed')
  }

  const newAccessToken = data.access_token
  const newRefreshToken = data.refresh_token || refreshToken
  const expiresInSeconds = Number(data.expires_in || 3600)
  const expiresAt = Date.now() + expiresInSeconds * 1000

  await Promise.all([
    redisSet(ACCESS_TOKEN_KEY, newAccessToken),
    redisSet(REFRESH_TOKEN_KEY, newRefreshToken),
    redisSet(EXPIRES_AT_KEY, String(expiresAt)),
  ])

  return {
    accessToken: newAccessToken,
    refreshToken: newRefreshToken,
    expiresAt,
  }
}

async function safeJson(response: Response): Promise<any> {
  const text = await response.text()

  if (!text) {
    return null
  }

  try {
    return JSON.parse(text)
  } catch {
    return text
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
    })
  }

  try {
    const email =
      typeof req.body?.email === 'string'
        ? req.body.email.trim().toLowerCase()
        : ''

    const emailLooksValid =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (!email || !emailLooksValid || email.length > 254) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid email address',
      })
    }

    let tokens = await loadTokens()

    if (
      tokens.expiresAt > 0 &&
      Date.now() >= tokens.expiresAt - 60000
    ) {
      tokens = await refreshAWeberToken(tokens.refreshToken)
    }

    const aweberFetch = async (
      url: string,
      options: RequestInit = {}
    ): Promise<Response> => {
      const makeRequest = (accessToken: string) =>
        fetch(url, {
          ...options,
          headers: {
            ...(options.headers || {}),
            Authorization: `Bearer ${accessToken}`,
          },
        })

      let response = await makeRequest(tokens.accessToken)

      if (response.status === 401) {
        tokens = await refreshAWeberToken(tokens.refreshToken)

        response = await makeRequest(tokens.accessToken)
      }

      return response
    }

    const accountRes = await aweberFetch(
      'https://api.aweber.com/1.0/accounts'
    )

    const accountData = await safeJson(accountRes)

    if (!accountRes.ok) {
      console.error('AWeber account request failed:', accountData)

      return res.status(502).json({
        success: false,
        error: 'Unable to connect to AWeber',
      })
    }

    const accountId = accountData?.entries?.[0]?.id

    if (!accountId) {
      return res.status(502).json({
        success: false,
        error: 'AWeber account could not be found',
      })
    }

    const listsRes = await aweberFetch(
      `https://api.aweber.com/1.0/accounts/${accountId}/lists`
    )

    const listsData = await safeJson(listsRes)

    if (!listsRes.ok) {
      console.error('AWeber list request failed:', listsData)

      return res.status(502).json({
        success: false,
        error: 'Unable to find AWeber list',
      })
    }

    const list = listsData?.entries?.find(
      (item: any) => item.name === AWEBER_LIST_NAME
    )

    if (!list) {
      return res.status(502).json({
        success: false,
        error: 'Mind Sprint Players list was not found',
      })
    }

    const subscriberRes = await aweberFetch(
      `https://api.aweber.com/1.0/accounts/${accountId}/lists/${list.id}/subscribers`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          update_existing: 'true',
        }),
      }
    )

    const subscriberData = await safeJson(subscriberRes)

    if (!subscriberRes.ok) {
      console.error(
        'AWeber subscriber request failed:',
        subscriberData
      )

      return res.status(502).json({
        success: false,
        error: 'Unable to add subscriber',
      })
    }

    return res.status(200).json({
      success: true,
    })
  } catch (error: any) {
    console.error('Mind Sprint subscribe error:', error)

    return res.status(500).json({
      success: false,
      error: error?.message || 'Something went wrong',
    })
  }
}
