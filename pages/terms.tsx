// pages/terms.tsx
import Head from 'next/head'
import Link from 'next/link'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service | Mind Sprint</title>
        <meta
          name="description"
          content="Terms of Service for using Mind Sprint."
        />
      </Head>

      <main
        style={{
          maxWidth: 800,
          margin: '2rem auto',
          padding: '0 1rem',
          lineHeight: 1.7,
        }}
      >
        <h1>Terms of Service</h1>

        <p style={{ color: '#555' }}>
          Last updated: September 2026
        </p>

        <p>
          Welcome to Mind Sprint. By accessing or using this website,
          you agree to these Terms of Service.
        </p>

        <h2 style={{ marginTop: '2rem' }}>1. About Mind Sprint</h2>

        <p>
          Mind Sprint provides trivia, brain challenges and related
          entertainment content. Challenges are designed primarily for
          entertainment and general knowledge purposes.
        </p>

        <h2 style={{ marginTop: '2rem' }}>2. Using Mind Sprint</h2>

        <p>
          You may use Mind Sprint for personal, non-commercial purposes.
          You must not attempt to interfere with the website, manipulate
          challenge results, create fraudulent prize entries, access private
          administration systems without permission, or misuse the service.
        </p>

        <h2 style={{ marginTop: '2rem' }}>3. Scores, streaks and progress</h2>

        <p>
          Some scores, streaks, challenge progress and other information may
          be stored on your device. Clearing browser data, changing devices
          or using private browsing may remove locally stored progress.
        </p>

        <h2 style={{ marginTop: '2rem' }}>4. Weekly prize draw</h2>

        <p>
          Mind Sprint may operate weekly promotional prize draws. Participation
          in a prize draw is subject to separate prize draw terms, including
          eligibility requirements, entry periods, prize details and winner
          selection rules.
        </p>

        <p>
          <Link href="/weekly-prize-draw-terms">
            <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              View the Weekly Prize Draw Terms
            </span>
          </Link>
        </p>

        <h2 style={{ marginTop: '2rem' }}>5. No guarantee of availability</h2>

        <p>
          We aim to keep Mind Sprint available and functioning correctly,
          but we cannot guarantee uninterrupted access. Features, challenges,
          question sets or parts of the website may be changed, suspended or
          removed from time to time.
        </p>

        <h2 style={{ marginTop: '2rem' }}>6. Content accuracy</h2>

        <p>
          We take reasonable care when preparing Mind Sprint questions and
          information, but mistakes may occasionally occur. Content may also
          become outdated over time.
        </p>

        <h2 style={{ marginTop: '2rem' }}>7. Intellectual property</h2>

        <p>
          Unless otherwise stated, Mind Sprint branding, original website
          content, design and materials are owned by or licensed to Mind Sprint.
          You may not reproduce or commercially distribute our content without
          permission.
        </p>

        <h2 style={{ marginTop: '2rem' }}>8. Third-party services</h2>

        <p>
          Mind Sprint may use or link to third-party services for functions
          such as email communication, analytics and digital reward delivery.
          Those third-party services may have their own terms and privacy
          policies.
        </p>

        <h2 style={{ marginTop: '2rem' }}>9. Limitation of liability</h2>

        <p>
          To the extent permitted by applicable law, Mind Sprint is not
          responsible for indirect or consequential loss arising from the use
          of, or inability to use, the website.
        </p>

        <p>
          Nothing in these Terms excludes any rights or remedies that cannot
          lawfully be excluded under applicable consumer protection law.
        </p>

        <h2 style={{ marginTop: '2rem' }}>10. Changes to these Terms</h2>

        <p>
          We may update these Terms from time to time. The latest version will
          be published on this page with an updated revision date.
        </p>

        <h2 style={{ marginTop: '2rem' }}>11. Contact</h2>

        <p>
          Questions about these Terms can be sent to:
        </p>

        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:hello@dailymindsprint.com">
            hello@dailymindsprint.com
          </a>
        </p>
      </main>
    </>
  )
}
