// pages/privacy.tsx
import Head from 'next/head'
import Link from 'next/link'

const PAGE_URL =
  'https://www.dailymindsprint.com/privacy'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id':
        'https://www.dailymindsprint.com/#organization',
      name: 'Mind Sprint',
      url: 'https://www.dailymindsprint.com/',
      email: 'hello@dailymindsprint.com',
    },
    {
      '@type': 'WebSite',
      '@id':
        'https://www.dailymindsprint.com/#website',
      url: 'https://www.dailymindsprint.com/',
      name: 'Mind Sprint',
      publisher: {
        '@id':
          'https://www.dailymindsprint.com/#organization',
      },
    },
    {
      '@type': 'WebPage',
      '@id':
        'https://www.dailymindsprint.com/privacy#webpage',
      url: PAGE_URL,
      name: 'Privacy Policy | Mind Sprint',
      description:
        'Learn how Mind Sprint collects, uses and protects information relating to gameplay, analytics, prize draw entries, advertising and optional email updates.',
      isPartOf: {
        '@id':
          'https://www.dailymindsprint.com/#website',
      },
      about: {
        '@id':
          'https://www.dailymindsprint.com/#organization',
      },
      dateModified: '2026-11-12',
    },
  ],
}

export default function Privacy() {
  return (
    <>
      <Head>
        <title>
          Privacy Policy | Mind Sprint
        </title>

        <meta
          name="description"
          content="Learn how Mind Sprint collects, uses and protects information relating to gameplay, analytics, prize draw entries, advertising and optional email updates."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href={PAGE_URL}
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="Mind Sprint"
        />

        <meta
          property="og:title"
          content="Privacy Policy | Mind Sprint"
        />

        <meta
          property="og:description"
          content="Learn how Mind Sprint handles information relating to gameplay, analytics, prize draw entries, advertising, email updates and website services."
        />

        <meta
          property="og:url"
          content={PAGE_URL}
        />

        <meta
          name="twitter:card"
          content="summary"
        />

        <meta
          name="twitter:title"
          content="Privacy Policy | Mind Sprint"
        />

        <meta
          name="twitter:description"
          content="Learn how Mind Sprint handles information relating to gameplay, analytics, prize draw entries, advertising, email updates and website services."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                structuredData
              ),
          }}
        />
      </Head>

      <main
        style={{
          maxWidth: 850,
          margin: '0 auto',
          padding: '2rem 1rem',
          lineHeight: 1.7,
        }}
      >
        <h1>
          Privacy Policy
        </h1>

        <p
          style={{
            color: '#777',
            fontSize: 14,
            marginTop: '-0.5rem',
          }}
        >
          Last updated: November 12, 2026
        </p>

        <p>
          This Privacy Policy explains how Mind Sprint collects, uses and
          handles information when you visit{' '}
          <strong>dailymindsprint.com</strong>, play Mind Sprint challenges,
          choose to participate in a weekly prize draw, subscribe to optional
          email updates, view advertising or contact us.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          1. Information We Collect
        </h2>

        <h3>
          Website and device information
        </h3>

        <p>
          When you visit Mind Sprint, certain technical information may be
          collected automatically by the website, hosting providers, analytics
          services, advertising services or other technology providers.
        </p>

        <p>
          This may include information such as:
        </p>

        <ul>
          <li>
            browser and device type;
          </li>

          <li>
            operating system;
          </li>

          <li>
            pages viewed and interactions with the website;
          </li>

          <li>
            approximate location or region;
          </li>

          <li>
            referring pages or websites;
          </li>

          <li>
            technical identifiers; and
          </li>

          <li>
            IP address information used by service providers for functions such
            as security, routing, analytics, advertising or approximate
            geographic reporting.
          </li>
        </ul>

        <h3>
          Challenge and gameplay information
        </h3>

        <p>
          Mind Sprint uses browser storage and server-side challenge
          verification to operate the game.
        </p>

        <p>
          This may include information such as:
        </p>

        <ul>
          <li>
            challenge progress;
          </li>

          <li>
            scores;
          </li>

          <li>
            current and best streaks;
          </li>

          <li>
            unlocked challenges;
          </li>

          <li>
            completed questions;
          </li>

          <li>
            temporary challenge-attempt identifiers; and
          </li>

          <li>
            information needed to verify eligible challenge completions.
          </li>
        </ul>

        <p>
          Some game information, including streaks and progress, is stored
          locally in your browser. Clearing browser data, using private
          browsing or changing devices may remove this information.
        </p>

        <h3>
          Weekly prize draw information
        </h3>

        <p>
          If you choose to participate in a Mind Sprint weekly prize draw, we
          may collect and store information needed to administer the draw,
          including:
        </p>

        <ul>
          <li>
            your email address;
          </li>

          <li>
            eligible completed challenges;
          </li>

          <li>
            weekly entry records;
          </li>

          <li>
            challenge verification information;
          </li>

          <li>
            entry and completion timestamps; and
          </li>

          <li>
            information reasonably required to verify or contact a selected
            entrant.
          </li>
        </ul>

        <p>
          An email address is not required simply to play Mind Sprint. It is
          required if you choose to participate in an eligible weekly prize
          draw so entries can be associated with you and you can be contacted
          if your entry is selected.
        </p>

        <h3>
          Optional email updates
        </h3>

        <p>
          Mind Sprint email updates are separate from prize draw participation.
        </p>

        <p>
          If you actively choose to receive Mind Sprint email updates, we may
          record:
        </p>

        <ul>
          <li>
            your email address;
          </li>

          <li>
            the date and time you gave consent;
          </li>

          <li>
            the wording of the consent you agreed to; and
          </li>

          <li>
            a consent version or other record used to document your choice.
          </li>
        </ul>

        <p>
          Email subscribers are currently managed using AWeber. You can
          unsubscribe from optional marketing emails at any time using the
          unsubscribe link included in those emails.
        </p>

        <h3>
          Information you send to us
        </h3>

        <p>
          If you contact Mind Sprint by email, we may receive your email
          address and any other information you choose to include in your
          message.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          2. How We Use Information
        </h2>

        <p>
          We may use information to:
        </p>

        <ul>
          <li>
            operate Mind Sprint challenges and website features;
          </li>

          <li>
            calculate and display scores, streaks and progress;
          </li>

          <li>
            verify challenge completions;
          </li>

          <li>
            prevent duplicate or fraudulent prize draw entries;
          </li>

          <li>
            administer eligible weekly prize draws;
          </li>

          <li>
            contact a selected entrant or confirmed winner;
          </li>

          <li>
            deliver a prize where applicable;
          </li>

          <li>
            send optional Mind Sprint emails where you have chosen to receive
            them;
          </li>

          <li>
            understand website usage and improve Mind Sprint;
          </li>

          <li>
            provide, measure and manage advertising where advertising services
            are enabled;
          </li>

          <li>
            diagnose technical problems;
          </li>

          <li>
            protect the website from misuse or security threats; and
          </li>

          <li>
            comply with legal or regulatory obligations where applicable.
          </li>
        </ul>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          3. Cookies, Local Storage and Similar Technologies
        </h2>

        <p>
          Mind Sprint may use cookies, browser local storage, session storage
          and similar technologies.
        </p>

        <p>
          Local and session storage are currently used for functions such as
          challenge progress, streaks, unlocked challenges, temporary challenge
          attempts and remembering an email address used for prize draw
          participation.
        </p>

        <p>
          Analytics and advertising providers may also use cookies, web beacons,
          pixels or similar technologies where those services are enabled.
        </p>

        <p>
          Where required by applicable law or platform requirements, visitors
          may be provided with consent controls for analytics or advertising
          technologies.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          4. Google Analytics
        </h2>

        <p>
          Mind Sprint uses Google Analytics 4 to understand how visitors use
          the website.
        </p>

        <p>
          Google Analytics may collect information relating to browser and
          device characteristics, website interactions, approximate geographic
          information and other usage data.
        </p>

        <p>
          Google states that Google Analytics uses IP addresses during data
          collection for purposes including routing, security and geographic
          information, and that raw IP addresses are not logged or stored in
          Google Analytics.
        </p>

        <p>
          You can learn more about Google&apos;s privacy practices at:
        </p>

        <p>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Privacy Policy
          </a>
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          5. Email Services
        </h2>

        <p>
          Mind Sprint currently uses <strong>AWeber</strong> to manage optional
          email subscribers and deliver Mind Sprint email updates.
        </p>

        <p>
          Your email address is only submitted to AWeber through the Mind
          Sprint signup process when you actively choose the optional email
          subscription.
        </p>

        <p>
          Prize draw participation itself does not require you to subscribe to
          ongoing Mind Sprint marketing emails.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          6. Prize Draw and Data Storage Services
        </h2>

        <p>
          Mind Sprint uses server-side data storage to verify challenge
          completions and administer prize draw entries.
        </p>

        <p>
          This currently includes Redis-based storage provided through Upstash.
          Information stored may include challenge-attempt data, prize draw
          entries, email addresses associated with entries and records of
          optional email consent.
        </p>

        <p>
          If the weekly prize draw launches, Mind Sprint may also use a
          third-party digital reward provider to deliver prizes to confirmed
          winners.
        </p>

        <p>
          The reward provider may receive information such as the confirmed
          winner&apos;s name, email address, country and prize value where
          reasonably necessary to deliver the reward.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          7. Hosting and Infrastructure
        </h2>

        <p>
          Mind Sprint uses third-party hosting, infrastructure and technology
          services to operate the website.
        </p>

        <p>
          These providers may process technical information necessary to host,
          secure and deliver the website and its services.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          8. Advertising and Google AdSense
        </h2>

        <p>
          Mind Sprint may use <strong>Google AdSense</strong> to display
          advertising if the website is approved and Google advertising is
          activated.
        </p>

        <p>
          Third-party vendors, including Google, may use cookies to serve ads
          based on a visitor&apos;s previous visits to Mind Sprint or other
          websites.
        </p>

        <p>
          Google&apos;s use of advertising cookies enables Google and its
          partners to serve advertisements to users based on visits to Mind
          Sprint and/or other websites on the Internet.
        </p>

        <p>
          Depending on consent choices, applicable law, location and Google
          advertising settings, advertisements may be personalised,
          non-personalised or otherwise limited.
        </p>

        <p>
          Google and other advertising providers may use cookies, web beacons,
          IP addresses and other identifiers to provide, measure, limit and
          personalise advertising where permitted.
        </p>

        <p>
          Users can manage or opt out of personalised advertising through:
        </p>

        <p>
          <a
            href="https://adssettings.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>
        </p>

        <p>
          Where other third-party advertising vendors or ad networks are used,
          their cookies may also be used to serve advertising. Where available,
          visitors may use the privacy or advertising preference controls
          provided by those vendors.
        </p>

        <p>
          Google provides information about how it uses information from
          websites and apps that use its services:
        </p>

        <p>
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            How Google uses information from sites or apps that use its services
          </a>
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          9. Advertising Consent Controls
        </h2>

        <p>
          When Google advertising is activated, Mind Sprint will provide
          advertising consent controls where required by applicable law or
          Google&apos;s publisher requirements.
        </p>

        <p>
          For visitors in regions where consent requirements apply, such as the
          European Economic Area, the United Kingdom and Switzerland, Mind
          Sprint will use an appropriate consent-management solution for Google
          advertising.
        </p>

        <p>
          Depending on the visitor&apos;s location and consent choices,
          advertising technologies may be restricted until the required choices
          have been made.
        </p>

        <p>
          Visitors may also be able to review or change advertising choices
          through consent controls made available on the website.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          10. Sharing Information
        </h2>

        <p>
          Mind Sprint does not sell personal information to advertisers.
        </p>

        <p>
          Information may be shared with service providers where reasonably
          necessary to operate the website, provide analytics, provide or
          measure advertising, send requested email communications, administer
          prize draws, deliver prizes, maintain security or comply with legal
          requirements.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          11. International Data Processing
        </h2>

        <p>
          Some of the service providers used by Mind Sprint operate
          internationally. This means information may be processed or stored in
          countries outside Australia.
        </p>

        <p>
          Those providers process information according to their own privacy,
          security and data-processing terms.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          12. Data Retention
        </h2>

        <p>
          Mind Sprint aims to keep personal information only for as long as it
          is reasonably needed for the purpose for which it was collected,
          including website operation, prize administration, security,
          record-keeping and legal requirements.
        </p>

        <p>
          Some technical challenge-verification records are temporary, while
          prize draw, consent or winner records may need to be kept for longer
          where reasonably necessary.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          13. Your Choices
        </h2>

        <p>
          Depending on how you use Mind Sprint, you may be able to:
        </p>

        <ul>
          <li>
            play without providing an email address;
          </li>

          <li>
            choose whether to participate in a weekly prize draw;
          </li>

          <li>
            choose separately whether to receive optional Mind Sprint email
            updates;
          </li>

          <li>
            unsubscribe from marketing emails using the email unsubscribe link;
          </li>

          <li>
            clear cookies or local browser storage through your browser;
          </li>

          <li>
            use available consent controls for analytics or advertising where
            provided;
          </li>

          <li>
            manage personalised advertising through Google Ads Settings where
            applicable; and
          </li>

          <li>
            contact Mind Sprint with questions about personal information we
            hold.
          </li>
        </ul>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          14. Children
        </h2>

        <p>
          Mind Sprint is a general-audience trivia and challenge website.
        </p>

        <p>
          The planned weekly prize draw is intended only for entrants aged{' '}
          <strong>18 or older</strong>, subject to the final Weekly Prize Draw
          Terms.
        </p>

        <p>
          If you believe personal information relating to a child has been
          submitted to Mind Sprint inappropriately, please contact us.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          15. Security
        </h2>

        <p>
          Mind Sprint uses reasonable technical and organisational measures to
          protect information used to operate the website.
        </p>

        <p>
          However, no method of transmitting or storing information online can
          be guaranteed to be completely secure.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          16. Changes to This Privacy Policy
        </h2>

        <p>
          This Privacy Policy may be updated when Mind Sprint features,
          technology providers, advertising services or prize draw arrangements
          change.
        </p>

        <p>
          When material changes are made, the revision date at the top of this
          page will be updated.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          17. Contact Mind Sprint
        </h2>

        <p>
          Questions or privacy requests can be sent to:
        </p>

        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:hello@dailymindsprint.com">
            hello@dailymindsprint.com
          </a>
        </p>

        <p>
          You can also learn more about Mind Sprint on the{' '}
          <Link
            href="/about"
            legacyBehavior
          >
            <a
              style={{
                textDecoration:
                  'underline',
              }}
            >
              About page
            </a>
          </Link>
          .
        </p>
      </main>
    </>
  )
}
