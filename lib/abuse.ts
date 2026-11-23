import type { NextApiRequest } from 'next'

/*
  Conservative abuse limits for the weekly prize draw.

  These limits only affect whether a completed challenge can be
  turned into a prize entry. They never change scoring, the 8/10
  pass mark, or what a player sees while playing.
*/

/*
  The game auto-advances 1.5 seconds after each answer is saved,
  so 10 questions take a real player at least ~13.5 seconds plus
  reading and tapping time. 10 seconds is comfortably below what
  any real player can achieve, but stops instant scripted runs.
*/
export const MIN_COMPLETION_MS = 10_000

/*
  A real player can't send two answers less than ~1.5 seconds
  apart (the auto-advance delay). Gaps under 1 second are counted;
  a handful are tolerated in case of clock jitter between servers.
*/
export const MIN_ANSWER_GAP_MS = 1_000
export const MAX_FAST_ANSWER_GAPS = 2

/*
  Per-IP limits. Generous on purpose so households, offices and
  mobile networks that share one IP address are not affected.
*/
export const MAX_COMPLETIONS_PER_IP_PER_HOUR = 120
export const MAX_ENTRY_EMAILS_PER_IP_PER_DAY = 5

type RedisCommand = <T = any>(
  command: Array<string | number>
) => Promise<T>

export function getClientIp(
  req: NextApiRequest
): string | null {
  const realIp = req.headers['x-real-ip']
  const realIpValue = Array.isArray(realIp)
    ? realIp[0]
    : realIp

  if (realIpValue && realIpValue.trim()) {
    return realIpValue.trim().slice(0, 64)
  }

  const forwarded = req.headers['x-forwarded-for']
  const forwardedValue = Array.isArray(forwarded)
    ? forwarded[0]
    : forwarded

  if (forwardedValue) {
    const first = forwardedValue.split(',')[0].trim()

    if (first) {
      return first.slice(0, 64)
    }
  }

  const socketIp = req.socket?.remoteAddress

  return socketIp ? socketIp.slice(0, 64) : null
}

function aestNow() {
  return new Date(Date.now() + 10 * 60 * 60 * 1000)
}

function aestDayKey() {
  return aestNow().toISOString().slice(0, 10)
}

function aestHourKey() {
  return aestNow().toISOString().slice(0, 13)
}

/*
  Counts a completed challenge for this IP in the current hour.
  Returns false only when the IP is clearly over the limit.
  Any Redis problem returns true (fail open) so gameplay is never
  affected by the limiter itself.
*/
export async function allowCompletionForIp(
  redisCommand: RedisCommand,
  ip: string | null
): Promise<boolean> {
  if (!ip) return true

  try {
    const key = `mind-sprint:ratelimit:completions:${encodeURIComponent(
      ip
    )}:${aestHourKey()}`

    const count = Number(
      await redisCommand<number>(['INCR', key])
    )

    if (count === 1) {
      await redisCommand(['EXPIRE', key, 2 * 60 * 60])
    }

    return count <= MAX_COMPLETIONS_PER_IP_PER_HOUR
  } catch (error) {
    console.error('Mind Sprint completion limiter error:', error)
    return true
  }
}

/*
  Allows at most MAX_ENTRY_EMAILS_PER_IP_PER_DAY different email
  addresses to claim prize entries from one IP per (AEST) day.
  An email already seen from this IP today is always allowed.
  Redis errors are thrown so the entry endpoint fails closed,
  exactly like every other Redis step in that endpoint.
*/
export async function allowEntryEmailForIp(
  redisCommand: RedisCommand,
  ip: string | null,
  email: string
): Promise<boolean> {
  if (!ip) return true

  const key = `mind-sprint:ratelimit:entry-emails:${encodeURIComponent(
    ip
  )}:${aestDayKey()}`

  const alreadySeen = Number(
    await redisCommand<number>(['SISMEMBER', key, email])
  )

  if (alreadySeen === 1) return true

  const distinctEmails = Number(
    await redisCommand<number>(['SCARD', key])
  )

  if (distinctEmails >= MAX_ENTRY_EMAILS_PER_IP_PER_DAY) {
    return false
  }

  await redisCommand(['SADD', key, email])
  await redisCommand(['EXPIRE', key, 2 * 24 * 60 * 60])

  return true
}

/*
  Stricter server-side email check than the basic "x@y.z" test.
  Input is expected to already be trimmed and lower-cased.
*/
export function isSaneEmail(email: string): boolean {
  if (email.length < 6 || email.length > 254) return false

  const at = email.lastIndexOf('@')
  if (at < 1 || email.indexOf('@') !== at) return false

  const local = email.slice(0, at)
  const domain = email.slice(at + 1)

  if (local.length > 64) return false
  if (!/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+$/.test(local)) return false
  if (local.startsWith('.') || local.endsWith('.') || local.includes('..')) {
    return false
  }

  if (domain.length > 253) return false

  const labels = domain.split('.')
  if (labels.length < 2) return false

  const labelOk = (label: string) =>
    label.length >= 1 &&
    label.length <= 63 &&
    /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(label)

  if (!labels.every(labelOk)) return false

  const tld = labels[labels.length - 1]
  if (!/^(?:[a-z]{2,63}|xn--[a-z0-9-]{1,59})$/.test(tld)) return false

  return true
}
