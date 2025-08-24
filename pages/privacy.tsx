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
        Our ad partner <strong>Ezoic</strong> provides a Conse
