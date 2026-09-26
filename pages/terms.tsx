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
          content="Terms of Service for using Mind Sprint, including gameplay, scores, weekly prize draws, email communications and third-party services."
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
        <h1>Terms of Service</h1>

        <p
          style={{
            color: '#777',
            fontSize: 14,
            marginTop: '-0.5rem',
          }}
        >
          Last updated: September 26, 2026
        </p>

        <p>
          Welcome to Mind Sprint. These Terms of Service apply when you access
          or use <strong>dailymindsprint.com</strong>, play Mind Sprint
          challenges, participate in eligible promotions or use related Mind
          Sprint services.
        </p>

        <p>
          By using Mind Sprint, you agree to these Terms. If you do not agree,
          you should not use the website.
        </p>

        <h2 style={{ marginTop: '2rem' }}>1. About Mind Sprint</h2>

        <p>
          Mind Sprint is an independent trivia and brain-challenge website
          providing short quizzes, puzzles, memory activities and related
          entertainment content.
        </p>

        <p>
          Mind Sprint is intended primarily for entertainment, general
          knowledge and casual mental engagement.
        </p>

        <h2 style={{ marginTop: '2rem' }}>2. Using Mind Sprint</h2>

        <p>
          You may use Mind Sprint for personal, lawful and non-commercial
          purposes.
        </p>

        <p>You must not:</p>

        <ul>
          <li>interfere with or disrupt the website;</li>
          <li>attempt to gain unauthorised access to private systems;</li>
          <li>manipulate challenge results or challenge-verification systems;</li>
          <li>create fraudulent or duplicate prize draw entries;</li>
          <li>use automated methods to abuse gameplay or promotional systems;</li>
          <li>attempt to bypass security or technical restrictions; or</li>
          <li>use Mind Sprint for unlawful or harmful purposes.</li>
        </ul>

        <h2 style={{ marginTop: '2rem' }}>
          3. Challenges, Scores and Progress
        </h2>

        <p>
          Mind Sprint currently includes 7 challenges with 10 questions in each
          challenge.
        </p>

        <p>
          Scores, streaks, unlocked challenges and other gameplay information
          may be stored locally on your device.
        </p>

        <p>
          Clearing browser data, using private browsing, changing browsers or
          changing devices may remove locally stored information.
        </p>

        <p>
          Mind Sprint may also use server-side verification to confirm challenge
          completions where required for features such as weekly prize draw
          entries.
        </p>

        <h2 style={{ marginTop: '2rem' }}>4. Challenge Content</h2>

        <p>
          Mind Sprint aims to keep questions, answers and explanatory content
          accurate and understandable.
        </p>

        <p>
          However, trivia and general-knowledge information can occasionally
          contain mistakes or become outdated over time.
        </p>

        <p>
          If you believe a question, answer or fact is incorrect, please contact
          Mind Sprint so it can be reviewed.
        </p>

        <h2 style={{ marginTop: '2rem' }}>
          5. Entertainment and Health Information
        </h2>

        <p>
          Mind Sprint is not a medical service, healthcare provider or
          diagnostic tool.
        </p>

        <p>
          Nothing on Mind Sprint should be treated as medical advice, and the
          website does not claim that playing its challenges will diagnose,
          treat or prevent medical conditions or produce guaranteed
          improvements in intelligence, memory or concentration.
        </p>

        <h2 style={{ marginTop: '2rem' }}>6. Weekly Prize Draw</h2>

        <p>
          Mind Sprint is preparing a weekly promotional prize draw. The first
          official prize draw will begin only when Mind Sprint announces that
          the draw is live.
        </p>

        <p>
          Challenge completions or test entries made before the official launch
          are not eligible for a prize.
        </p>

        <p>
          When the weekly draw is active, participation will be subject to the
          separate Weekly Prize Draw Terms, which contain important information
          about eligibility, entry periods, entry limits, prize details, winner
          selection and prize delivery.
        </p>

        <p>
          Participation in the planned weekly prize draw is intended for
          eligible entrants aged <strong>18 or older</strong>, subject to the
          final Weekly Prize Draw Terms.
        </p>

        <p>
          <Link href="/weekly-prize-draw-terms" legacyBehavior>
            <a
              style={{
                color: '#000',
                textDecoration: 'underline',
              }}
            >
              Read the Weekly Prize Draw Terms
            </a>
          </Link>
        </p>

        <h2 style={{ marginTop: '2rem' }}>
          7. Prize Draw Entries and Verification
        </h2>

        <p>
          When the weekly draw is active, Mind Sprint may use server-side
          systems to verify eligible challenge completions and prevent duplicate
          or fraudulent entries.
        </p>

        <p>
          Replaying the same challenge during the same weekly draw period will
          not create another valid entry for that challenge.
        </p>

        <p>
          Mind Sprint may reject or remove entries where there is reasonable
          evidence of manipulation, automated abuse, fraud or a breach of the
          applicable prize draw terms.
        </p>

        <h2 style={{ marginTop: '2rem' }}>8. Email Communications</h2>

        <p>
          You do not need to subscribe to ongoing Mind Sprint marketing emails
          to play Mind Sprint or participate in an eligible weekly prize draw.
        </p>

        <p>
          Optional Mind Sprint email updates require a separate choice to
          subscribe and can be unsubscribed from using the link included in
          those emails.
        </p>

        <p>
          Prize-related or administrative emails may still be sent where
          reasonably necessary to operate a promotion, verify eligibility,
          contact a selected entrant or deliver a prize.
        </p>

        <h2 style={{ marginTop: '2rem' }}>
          9. Third-Party Services
        </h2>

        <p>
          Mind Sprint uses third-party services for functions such as hosting,
          analytics, email communication, data storage and website
          infrastructure.
        </p>

        <p>
          If the weekly prize draw launches, Mind Sprint may also use a
          third-party digital reward provider to deliver prizes.
        </p>

        <p>
          Mind Sprint may also use advertising providers if advertising
          monetisation is approved and activated.
        </p>

        <p>
          Third-party services may have their own terms, privacy policies and
          eligibility requirements.
        </p>

        <h2 style={{ marginTop: '2rem' }}>
          10. Links to Other Websites
        </h2>

        <p>
          Mind Sprint may link to third-party websites or services for
          information, privacy disclosures, reward redemption or other useful
          resources.
        </p>

        <p>
          Mind Sprint does not control third-party websites and is not
          responsible for their content, availability or privacy practices.
        </p>

        <h2 style={{ marginTop: '2rem' }}>
          11. Intellectual Property
        </h2>

        <p>
          Unless otherwise stated, Mind Sprint branding, original challenge
          content, written material, website design and other original
          materials are owned by or licensed to Mind Sprint.
        </p>

        <p>
          You may not copy, reproduce, republish, sell or commercially
          distribute Mind Sprint content without permission, except where
          permitted by law.
        </p>

        <h2 style={{ marginTop: '2rem' }}>
          12. Website Availability
        </h2>

        <p>
          Mind Sprint aims to keep the website available and functioning
          correctly, but uninterrupted access cannot be guaranteed.
        </p>

        <p>
          Features, question sets, challenges, prize draw functionality or
          other parts of the website may be changed, suspended, updated or
          removed from time to time.
        </p>

        <h2 style={{ marginTop: '2rem' }}>
          13. No Guarantee of Results
        </h2>

        <p>
          Mind Sprint does not guarantee any particular score, streak,
          educational result, cognitive benefit, prize draw outcome or other
          result from using the website.
        </p>

        <h2 style={{ marginTop: '2rem' }}>
          14. Limitation of Liability
        </h2>

        <p>
          To the extent permitted by applicable law, Mind Sprint is not
          responsible for indirect or consequential loss arising from the use
          of, or inability to use, the website.
        </p>

        <p>
          Nothing in these Terms excludes or limits rights, guarantees or
          remedies that cannot lawfully be excluded under applicable consumer
          protection law.
        </p>

        <h2 style={{ marginTop: '2rem' }}>15. Privacy</h2>

        <p>
          Information collected through Mind Sprint is handled in accordance
          with the Mind Sprint Privacy Policy.
        </p>

        <p>
          <Link href="/privacy" legacyBehavior>
            <a
              style={{
                color: '#000',
                textDecoration: 'underline',
              }}
            >
              Read the Privacy Policy
            </a>
          </Link>
        </p>

        <h2 style={{ marginTop: '2rem' }}>
          16. Changes to These Terms
        </h2>

        <p>
          Mind Sprint may update these Terms when website features, prize draw
          arrangements, technology providers or other aspects of the service
          change.
        </p>

        <p>
          When material changes are made, the revision date at the top of this
          page will be updated.
        </p>

        <h2 style={{ marginTop: '2rem' }}>17. Contact Mind Sprint</h2>

        <p>
          Questions about these Terms can be sent to:
        </p>

        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:hello@dailymindsprint.com">
            hello@dailymindsprint.com
          </a>
        </p>

        <p>
          You can also learn more about Mind Sprint on the{' '}
          <Link href="/about" legacyBehavior>
            <a style={{ textDecoration: 'underline' }}>About page</a>
          </Link>
          .
        </p>
      </main>
    </>
  )
}
