// pages/privacy.tsx
import Link from 'next/link';
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Mind Sprint</title>
        <meta name="description" content="Read the Privacy Policy for Mind Sprint — how we collect, use, and protect your data." />
      </Head>
      <main style={{ maxWidth: 800, margin: '2rem auto', padding: '0 1rem' }}>
        <h1>Privacy Policy</h1>
        <p>Last updated: July 5, 2025</p>
        <section>
          <h2>1. Information We Collect</h2>
          <p>
            When you use Mind Sprint, we may collect information such as:
            <ul>
              <li>Device and browser data (e.g., IP address, user agent)</li>
              <li>Analytics data via Google Analytics</li>
              <li>Optional email addresses if you sign up for bonus puzzles</li>
            </ul>
          </p>
        </section>
        <section>
          <h2>2. How We Use Your Information</h2>
          <p>
            We use collected data to:
            <ul>
              <li>Improve site performance and troubleshoot errors</li>
              <li>Serve personalized ad experiences via Google AdSense</li>
              <li>Send occasional puzzle updates or bonus content (if opted in)</li>
            </ul>
          </p>
        </section>
        <section>
          <h2>3. Cookies & Tracking</h2>
          <p>
            Mind Sprint uses cookies and similar technologies for analytics and ads. You can opt out of personalized ads in your Google Ad Settings.
          </p>
        </section>
        <section>
          <h2>4. Third-Party Services</h2>
          <p>
            We rely on the following third parties:
            <ul>
              <li>
                <strong>Google AdSense</strong> — to display contextual ads
              </li>
              <li>
                <strong>Google Analytics</strong> — for site usage statistics
              </li>
            </ul>
          </p>
        </section>
        <section>
          <h2>5. Contact Us</h2>
          <p>
            If you have questions about this policy, reach out via our <Link href="/contact">Contact Page</Link>.
          </p>
        </section>
      </main>
    </>
  );
}
