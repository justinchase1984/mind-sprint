import Head from 'next/head'
import { useState } from 'react'

type Winner = {
  weekKey: string
  email: string
  challenge: number
  drawnAt: string
  totalEntries: number
  uniquePlayers: number
}

type DrawStatus = {
  currentWeek: {
    weekKey: string
    entries: number
    uniquePlayers: number
  }
  drawWeek: {
    weekKey: string
    entries: number
    uniquePlayers: number
    winner: Winner | null
  }
}

export default function WeeklyDrawAdmin() {
  const [secret, setSecret] = useState('')
  const [status, setStatus] =
    useState<DrawStatus | null>(null)

  const [winner, setWinner] =
    useState<Winner | null>(null)

  const [loading, setLoading] =
    useState(false)

  const [error, setError] =
    useState('')

  async function callDrawApi(
    action: 'status' | 'draw'
  ) {
    if (!secret.trim()) {
      setError(
        'Enter your admin password.'
      )
      return
    }

    setLoading(true)
    setError('')

    try {
      const response =
        await fetch('/api/draw', {
          method: 'POST',
          headers: {
            'Content-Type':
              'application/json',
          },
          body: JSON.stringify({
            action,
            secret,
          }),
        })

      const data =
        await response.json()

      if (!data.success) {
        setError(
          data.error ||
            'Something went wrong.'
        )
        return
      }

      if (action === 'status') {
        setStatus({
          currentWeek:
            data.currentWeek,
          drawWeek:
            data.drawWeek,
        })

        setWinner(
          data.drawWeek?.winner ||
            null
        )
      }

      if (action === 'draw') {
        setWinner(
          data.winner || null
        )

        await loadStatus()
      }
    } catch (err) {
      console.error(
        'Draw admin error:',
        err
      )

      setError(
        'Unable to connect to the draw system.'
      )
    } finally {
      setLoading(false)
    }
  }

  async function loadStatus() {
    try {
      const response =
        await fetch('/api/draw', {
          method: 'POST',
          headers: {
            'Content-Type':
              'application/json',
          },
          body: JSON.stringify({
            action: 'status',
            secret,
          }),
        })

      const data =
        await response.json()

      if (data.success) {
        setStatus({
          currentWeek:
            data.currentWeek,
          drawWeek:
            data.drawWeek,
        })

        setWinner(
          data.drawWeek?.winner ||
            null
        )
      }
    } catch (err) {
      console.error(
        'Status refresh error:',
        err
      )
    }
  }

  async function drawWinner() {
    const confirmed =
      window.confirm(
        'Draw the winner for the completed week? This result will be saved and cannot be redrawn.'
      )

    if (!confirmed) {
      return
    }

    await callDrawApi('draw')
  }

  return (
    <>
      <Head>
        <title>
          Weekly Draw Admin | Mind Sprint
        </title>

        <meta
          name="robots"
          content="noindex,nofollow"
        />
      </Head>

      <main
        style={{
          maxWidth: 600,
          margin: '60px auto',
          padding: '0 20px',
          fontFamily:
            'Arial, sans-serif',
        }}
      >
        <h1>
          🧠 Mind Sprint Weekly Draw
        </h1>

        <p
          style={{
            color: '#555',
          }}
        >
          Private administration page
          for the weekly Mind Sprint
          prize draw.
        </p>

        <div
          style={{
            marginTop: 30,
            padding: 20,
            border:
              '1px solid #ddd',
            borderRadius: 8,
          }}
        >
          <label
            htmlFor="secret"
            style={{
              display: 'block',
              fontWeight: 600,
              marginBottom: 8,
            }}
          >
            Admin Password
          </label>

          <input
            id="secret"
            type="password"
            value={secret}
            onChange={(e) => {
              setSecret(
                e.target.value
              )
              setError('')
            }}
            placeholder="Enter admin password"
            autoComplete="off"
            style={{
              width: '100%',
              padding: 12,
              border:
                '1px solid #ccc',
              borderRadius: 6,
              boxSizing:
                'border-box',
            }}
          />

          <button
            onClick={() =>
              callDrawApi(
                'status'
              )
            }
            disabled={loading}
            style={{
              width: '100%',
              marginTop: 12,
              padding: 12,
              background: '#111',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              cursor: loading
                ? 'default'
                : 'pointer',
              opacity: loading
                ? 0.7
                : 1,
            }}
          >
            {loading
              ? 'Loading...'
              : 'Check Draw Status'}
          </button>

          {error && (
            <p
              style={{
                color: '#b00020',
                marginTop: 12,
              }}
            >
              {error}
            </p>
          )}
        </div>

        {status && (
          <>
            <section
              style={{
                marginTop: 30,
                padding: 20,
                border:
                  '1px solid #ddd',
                borderRadius: 8,
              }}
            >
              <h2>
                Current Week
              </h2>

              <p>
                Week starting:{' '}
                <strong>
                  {
                    status
                      .currentWeek
                      .weekKey
                  }
                </strong>
              </p>

              <p>
                Entries:{' '}
                <strong>
                  {
                    status
                      .currentWeek
                      .entries
                  }
                </strong>
              </p>

              <p>
                Players:{' '}
                <strong>
                  {
                    status
                      .currentWeek
                      .uniquePlayers
                  }
                </strong>
              </p>
            </section>

            <section
              style={{
                marginTop: 20,
                padding: 20,
                border:
                  '1px solid #ddd',
                borderRadius: 8,
              }}
            >
              <h2>
                Completed Week
              </h2>

              <p>
                Week starting:{' '}
                <strong>
                  {
                    status
                      .drawWeek
                      .weekKey
                  }
                </strong>
              </p>

              <p>
                Total entries:{' '}
                <strong>
                  {
                    status
                      .drawWeek
                      .entries
                  }
                </strong>
              </p>

              <p>
                Unique players:{' '}
                <strong>
                  {
                    status
                      .drawWeek
                      .uniquePlayers
                  }
                </strong>
              </p>

              {!winner && (
                <button
                  onClick={
                    drawWinner
                  }
                  disabled={
                    loading ||
                    status
                      .drawWeek
                      .entries === 0
                  }
                  style={{
                    width: '100%',
                    marginTop: 15,
                    padding: 12,
                    background:
                      '#111',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 6,
                    cursor:
                      loading
                        ? 'default'
                        : 'pointer',
                    opacity:
                      status
                        .drawWeek
                        .entries ===
                        0
                        ? 0.5
                        : 1,
                  }}
                >
                  🎁 Draw Winner
                </button>
              )}
            </section>
          </>
        )}

        {winner && (
          <section
            style={{
              marginTop: 20,
              padding: 20,
              border:
                '2px solid #111',
              borderRadius: 8,
            }}
          >
            <h2>
              🏆 Winner
            </h2>

            <p>
              <strong>
                {winner.email}
              </strong>
            </p>

            <p>
              Winning entry:
              Challenge{' '}
              {winner.challenge}
            </p>

            <p>
              Total entries in draw:{' '}
              {winner.totalEntries}
            </p>

            <p>
              Players in draw:{' '}
              {winner.uniquePlayers}
            </p>

            <p
              style={{
                fontSize: 14,
                color: '#666',
              }}
            >
              Drawn:{' '}
              {new Date(
                winner.drawnAt
              ).toLocaleString()}
            </p>

            <p
              style={{
                marginTop: 20,
                fontWeight: 600,
              }}
            >
              Next step: send this
              winner their Mind Sprint
              digital reward through
              Tremendous.
            </p>
          </section>
        )}
      </main>
    </>
  )
}
