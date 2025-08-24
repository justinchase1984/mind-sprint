// pages/privacy.tsx
import React from 'react';

export default function Privacy() {
  return (
    <main
      style={{
        maxWidth: 800,
        margin: '0 auto',
        padding: '2rem 1rem',
        lineHeight: 1.6,
      }}
    >
      <h1 style={{ marginBottom: '0.75rem' }}>Privacy Policy</h1>
      <p style={{ fontStyle: 'italic', marginBottom: '2rem' }}>
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <h2>1. Information We Collect</h2>
      <p>When you use Mind Sprint (dailymindsprint.com), we may collect:</p>
      <ul>
        <li>
          <strong>Device &amp; browser data:</strong> e.g., IP address, user
          agent, page views, and general usage details.
        </li>
        <li>
          <strong>Analytics data:</strong> collected via Google Analytics 4
          (GA4) to help us understand site usage in aggregate.
        </li>
        <li>
          <strong>Voluntary info:</strong> if you submit your email (e.g., after
          Challenge 7), we use it to send the content you requested.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Improve site performance and troubleshoot issues.</li>
        <li>Serve ad experiences via <strong>Ezoic</strong> (our ad partner).</li>
        <li>
          Send optional updates or bonus content if you opted in (managed via
          our email provider, e.g., AWeber).
        </li>
      </ul>

      <h2>3. Cookies &amp; Tracking</h2>
      <p>
        We use cookies and similar technologies for analytics and advertising.
        Our ad partner <strong>Ezoic</strong> provides a Consent Management
        Platform (CMP) that shows a banner where you can review and set your
        preferences. You can revisit cookie choices via the banner (when shown)
        or manage cookies in your browser settings.
      </p>

      <h2>4. Third-Party Services</h2>
      <ul>
        <li>
          <strong>Ezoic</strong> — displays advertisements and manages consent
          preferences through its CMP.
        </li>
        <li>
          <strong>Google Analytics 4 (GA4)</strong> — provides aggregate site
          usage statistics.
        </li>
        <li>
          <strong>AWeber</strong> — manages email collection and delivery for
          users who opt in after Challenge 7.
        </li>
      </ul>

      <h2>5. Your Choices</h2>
      <ul>
        <li>
          <strong>Consent banner:</strong> Use the banner to accept or reject
          categories of cookies and vendors.
        </li>
        <li>
          <strong>Browser controls:</strong> Most browsers let you block or
          delete cookies (this may affect site features).
        </li>
        <li>
          <strong>Email preferences:</strong> If you subscribed, you can
          unsubscribe anytime using the link in our emails.
        </li>
      </ul>

      <h2>6. Data Sharing &amp; Retention</h2>
      <p>
        We share limited information with the providers above to operate the
        site and services. We retain information only as long as necessary for
        the purposes described here or as required by law.
      </p>

      <h2>7. Children</h2>
      <p>
        Mind Sprint isn’t directed to children under 13 (or the minimum age in
        your jurisdiction). If you believe a child provided personal
        information, please contact us and we’ll take appropriate steps to
        remove it.
      </p>

      <h2>8. Changes</h2>
      <p>
        We may update this policy from time to time. When we do, we’ll update
        the “Last updated” date above. Your continued use of the site means you
        accept the updated policy.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        Questions about this policy? Visit our{' '}
        <a href="/about">About</a> page for contact details.
      </p>

      {/* ── EZOIC REQUIRED DISCLOSURE ───────────────────────── */}
      <h2>Ezoic Disclosure</h2>
      <p>
        This site uses Ezoic for ad services. You can view Ezoic’s privacy policy and
        cookie usage here:{' '}
        <a
          href="https://g.ezoic.net/privacy/dailymindsprint.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ezoic Privacy Policy
        </a>.
      </p>
      <div style={{ fontSize: '0.9rem', color: '#444' }}>
        <span id="ezoic-privacy-policy-embed"></span>
      </div>
    </main>
  );
}
