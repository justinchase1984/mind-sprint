// pages/contact.tsx
import Head from 'next/head'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Mind Sprint | Support & Feedback</title>

        <meta
          name="description"
          content="Contact Mind Sprint with questions, feedback, corrections or website issues."
        />
      </Head>

      <main
        style={{
          maxWidth: 800,
          margin: '0 auto',
          padding: '2rem 1rem',
          lineHeight: 1.7,
        }}
      >
        <h1>Contact Mind Sprint</h1>

        <p style={{ color: '#777', marginTop: '-0.5rem' }}>
          We’re happy to hear from Mind Sprint players.
        </p>

        <p>
          If you have a question, spotted an incorrect answer, found a technical
          problem or would like to send feedback about the site, you can contact
          Mind Sprint directly by email.
        </p>

        <h2>Email</h2>

        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:hello@dailymindsprint.com">
            hello@dailymindsprint.com
          </a>
        </p>

        <p>
          Please include enough information for us to understand the issue. If
          you are reporting a question or technical problem, it can be helpful
          to mention the challenge number, question number or page where you
          noticed it.
        </p>

        <h2>What You Can Contact Us About</h2>

        <ul>
          <li>incorrect or outdated quiz questions;</li>
          <li>technical or website problems;</li>
          <li>feedback about Mind Sprint challenges;</li>
          <li>privacy or personal-information enquiries;</li>
          <li>the planned weekly prize draw; or</li>
          <li>general questions about Mind Sprint.</li>
        </ul>

        <h2>About Mind Sprint</h2>

        <p>
          Mind Sprint is an independent trivia and brain-challenge website
          operated from Queensland, Australia.
        </p>

        <p>
          You can learn more about the site, its content and how it operates on
          the About page.
        </p>

        <p>
          <Link href="/about" legacyBehavior>
            <a style={{ color: '#000', textDecoration: 'underline' }}>
              Read About Mind Sprint
            </a>
          </Link>
        </p>

        <div
          style={{
            marginTop: '2.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid #eee',
          }}
        >
          <h2 style={{ fontSize: 20 }}>Useful Links</h2>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <Link href="/how-it-works" legacyBehavior>
              <a style={{ color: '#000', textDecoration: 'underline' }}>
                How It Works
              </a>
            </Link>

            <Link href="/faq" legacyBehavior>
              <a style={{ color: '#000', textDecoration: 'underline' }}>
                FAQ
              </a>
            </Link>

            <Link href="/privacy" legacyBehavior>
              <a style={{ color: '#000', textDecoration: 'underline' }}>
                Privacy Policy
              </a>
            </Link>

            <Link href="/terms" legacyBehavior>
              <a style={{ color: '#000', textDecoration: 'underline' }}>
                Terms
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
