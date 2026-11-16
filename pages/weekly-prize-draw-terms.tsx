// pages/weekly-prize-draw-terms.tsx
import Head from 'next/head'

const PAGE_URL =
  'https://www.dailymindsprint.com/weekly-prize-draw-terms'

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
        'https://www.dailymindsprint.com/weekly-prize-draw-terms#webpage',
      url: PAGE_URL,
      name:
        'Weekly Prize Draw Terms | Mind Sprint',
      description:
        'Terms and conditions for the Mind Sprint weekly digital reward prize draw.',
      isPartOf: {
        '@id':
          'https://www.dailymindsprint.com/#website',
      },
      about: {
        '@id':
          'https://www.dailymindsprint.com/#organization',
      },
      dateModified:
        '2026-11-16',
    },
  ],
}

export default function WeeklyPrizeDrawTerms() {
  return (
    <>
      <Head>
        <title>
          Weekly Prize Draw Terms | Mind Sprint
        </title>

        <meta
          name="description"
          content="Terms and conditions for the Mind Sprint weekly digital reward prize draw."
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
          content="Weekly Prize Draw Terms | Mind Sprint"
        />

        <meta
          property="og:description"
          content="Read the terms for the Mind Sprint weekly digital reward prize draw, including eligibility, entries, prizes and winner selection."
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
          content="Weekly Prize Draw Terms | Mind Sprint"
        />

        <meta
          name="twitter:description"
          content="Read the terms for the Mind Sprint weekly digital reward prize draw, including eligibility, entries, prizes and winner selection."
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
          Mind Sprint Weekly Prize Draw Terms
        </h1>

        <p
          style={{
            color: '#777',
            fontSize: 14,
            marginTop: '-0.5rem',
          }}
        >
          Last updated: November 16, 2026
        </p>

        <div
          style={{
            margin: '1.5rem 0',
            padding: '1rem',
            border: '1px solid #ddd',
            borderRadius: 8,
            background: '#fafafa',
          }}
        >
          <strong>
            Weekly Prize Draw:
          </strong>{' '}
          The Mind Sprint weekly promotional prize draw is now live and operates
          in accordance with these terms.
        </div>

        <p>
          These terms apply to eligible entries unless an updated version is
          published.
        </p>

        <p>
          <strong>
            NO PURCHASE OR PAYMENT IS REQUIRED TO ENTER OR WIN.
          </strong>
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          1. Promoter
        </h2>

        <p>
          The promoter is <strong>Mind Sprint</strong>, operated from
          Queensland, Australia.
        </p>

        <p>
          Contact:{' '}
          <a href="mailto:hello@dailymindsprint.com">
            hello@dailymindsprint.com
          </a>
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          2. Eligible Countries
        </h2>

        <p>
          The weekly prize draw is available to eligible residents of:
        </p>

        <ul>
          <li>
            Australia
          </li>

          <li>
            United States
          </li>

          <li>
            United Kingdom
          </li>

          <li>
            New Zealand
          </li>

          <li>
            Ireland
          </li>
        </ul>

        <p>
          Eligibility is subject to applicable laws, these terms and supported
          digital reward-delivery options in each eligible country.
        </p>

        <p>
          Entrants must be at least <strong>18 years old</strong> at the time
          of entry.
        </p>

        <p>
          Employees, contractors and people directly involved in operating Mind
          Sprint or administering the prize draw are not eligible to win.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          3. Weekly Draw Period
        </h2>

        <p>
          Each Mind Sprint weekly draw is a separate promotional draw.
        </p>

        <p>
          Each weekly entry period begins at{' '}
          <strong>12:00 am AEST on Monday</strong> and closes at{' '}
          <strong>11:59:59 pm AEST on Sunday</strong>.
        </p>

        <p>
          AEST means Australian Eastern Standard Time, which is Queensland time
          (UTC+10).
        </p>

        <p>
          Entries are accepted only while the weekly prize draw entry
          functionality is active on the Mind Sprint website.
        </p>

        <p>
          Entries, challenge completions or test data created during development
          or testing before the official launch are not eligible for a prize.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          4. How to Enter
        </h2>

        <p>
          To enter, an eligible player must provide a valid email address and
          complete eligible Mind Sprint challenges during the applicable weekly
          entry period.
        </p>

        <p>
          Each <strong>different challenge</strong> completed during the week
          earns <strong>1 entry</strong> into that week&apos;s draw.
        </p>

        <p>
          There are currently 9 challenges, so a player can earn a maximum of{' '}
          <strong>9 entries per weekly draw</strong>.
        </p>

        <p>
          Replaying the same challenge during the same weekly entry period does
          not create an additional entry for that challenge.
        </p>

        <p>
          A player&apos;s score does not increase the number of prize draw
          entries earned.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          5. No Purchase Necessary
        </h2>

        <p>
          Mind Sprint is free to play. No purchase, payment or paid
          subscription is required to enter the weekly prize draw.
        </p>

        <p>
          A participant does not need to subscribe to optional Mind Sprint
          marketing emails to participate in an eligible weekly draw.
        </p>

        <p>
          Making a purchase or payment will not increase a participant&apos;s
          chances of winning.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          6. Prize
        </h2>

        <p>
          The promotion has{' '}
          <strong>1 winner per weekly draw</strong>.
        </p>

        <p>
          The weekly prize is a digital reward worth approximately{' '}
          <strong>A$25 or the local-currency equivalent</strong>.
        </p>

        <p>
          The confirmed winner will receive the reward electronically through a
          supported digital reward-delivery provider.
        </p>

        <p>
          Available gift cards, digital rewards, currencies and redemption
          options may vary depending on the winner&apos;s country and the
          provider available when the prize is issued.
        </p>

        <p>
          Currency conversion and the exact local-currency value displayed may
          vary according to the conversion method used by the selected reward
          provider.
        </p>

        <p>
          If a particular reward option becomes unavailable, Mind Sprint may
          provide a reasonable substitute of equal or greater value, subject to
          applicable law.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          7. Chances of Winning
        </h2>

        <p>
          Every valid entry included in a weekly draw will have an equal chance
          of being selected.
        </p>

        <p>
          A participant&apos;s overall chance of winning will depend on the
          number of valid entries they have earned and the total number of valid
          entries received for that weekly draw.
        </p>

        <p>
          For example, a player with 9 valid entries will have 9 entries
          included in the random selection, while a player with 2 valid entries
          will have 2.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          8. Winner Selection
        </h2>

        <p>
          After a weekly entry period closes, one winning entry is selected at
          random from all valid entries for that completed week using an
          electronic random-selection process.
        </p>

        <p>
          The draw will normally take place within 7 days after the applicable
          weekly entry period closes.
        </p>

        <p>
          Once a weekly winning entry has been selected and recorded, the draw
          will not intentionally be redrawn merely to select a different winner.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          9. Winner Notification
        </h2>

        <p>
          The selected entrant will be contacted using the email address
          associated with the selected prize draw entry.
        </p>

        <p>
          The selected entrant may be required to confirm eligibility and
          provide information reasonably necessary to verify eligibility and
          deliver the prize.
        </p>

        <p>
          A selected entrant should respond within <strong>30 days</strong> of
          the winner notification unless a shorter period is required by
          applicable law.
        </p>

        <p>
          If the selected entrant cannot be contacted, does not respond within
          the required period, is found to be ineligible or does not complete a
          legally required verification step, Mind Sprint may select a
          replacement winner from the remaining valid entries, subject to
          applicable law.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          10. Prize Delivery
        </h2>

        <p>
          Once a winner has been confirmed, Mind Sprint will arrange electronic
          delivery of the digital reward to the confirmed winner using the
          selected reward-delivery provider.
        </p>

        <p>
          Winners will not be required to pay a fee to Mind Sprint in order to
          receive the prize.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          11. Entry Integrity
        </h2>

        <p>
          Mind Sprint may reject or remove entries that are fraudulent,
          automated, manipulated, duplicated contrary to these rules, generated
          through interference with the website or otherwise obtained unfairly.
        </p>

        <p>
          Attempts to access or manipulate private administration systems,
          prize-entry systems or challenge-verification systems may result in
          disqualification.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          12. Technical Problems
        </h2>

        <p>
          Mind Sprint is not responsible for entries that cannot be recorded
          because of internet outages, device problems or other technical
          failures outside our reasonable control.
        </p>

        <p>
          If you believe a legitimate challenge completion was not recorded,
          contact{' '}
          <a href="mailto:hello@dailymindsprint.com">
            hello@dailymindsprint.com
          </a>
          .
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          13. Privacy and Email
        </h2>

        <p>
          An email address will be required to associate prize draw entries with
          a participant, contact a selected entrant and deliver a prize where
          applicable.
        </p>

        <p>
          Administrative messages relating to the weekly prize draw or a prize
          may be sent where reasonably necessary to operate the promotion.
        </p>

        <p>
          Optional Mind Sprint marketing emails are separate from prize draw
          participation and are subject to separate consent where required.
        </p>

        <p>
          Personal information relating to the promotion will be handled in
          accordance with the Mind Sprint Privacy Policy.
        </p>

        <p>
          <a href="/privacy">
            Read the Mind Sprint Privacy Policy
          </a>
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          14. Changes, Suspension or Cancellation
        </h2>

        <p>
          Mind Sprint may suspend, modify or cancel a weekly draw where
          reasonably necessary because of fraud, technical failure, legal or
          regulatory requirements, events outside our reasonable control or
          circumstances that prevent the promotion from being conducted fairly.
        </p>

        <p>
          Any such action will be taken subject to applicable law and with the
          aim of treating valid entrants fairly.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          15. Third-Party Reward Provider
        </h2>

        <p>
          Mind Sprint uses a supported digital reward provider to deliver prizes
          to confirmed winners.
        </p>

        <p>
          The reward provider used may vary by country or change where
          reasonably necessary due to availability or operational requirements.
        </p>

        <p>
          The reward provider and individual gift-card, payment or redemption
          brands are not sponsors of the Mind Sprint weekly prize draw unless
          expressly stated otherwise.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          16. Local Laws and Availability
        </h2>

        <p>
          The weekly prize draw is only offered in locations where Mind Sprint
          determines that the promotion and available prize-delivery
          arrangements can be operated.
        </p>

        <p>
          Country or regional eligibility may be changed where required by
          applicable law, regulatory requirements or reward-delivery
          availability.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          17. Applicable Law
        </h2>

        <p>
          These terms are governed by the laws applicable in Queensland,
          Australia, subject to any mandatory rights, protections or legal
          requirements that apply to participants in their place of residence.
        </p>

        <h2
          style={{
            marginTop: '2rem',
          }}
        >
          18. Contact
        </h2>

        <p>
          Questions about the weekly prize draw can be sent to:
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
