// pages/_document.tsx
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

// EEA member states, plus GB and CH, for Consent Mode regional defaults.
const CONSENT_DENIED_REGIONS = [
  'AT',
  'BE',
  'BG',
  'CH',
  'CY',
  'CZ',
  'DE',
  'DK',
  'EE',
  'ES',
  'FI',
  'FR',
  'GB',
  'GR',
  'HR',
  'HU',
  'IE',
  'IS',
  'IT',
  'LI',
  'LT',
  'LU',
  'LV',
  'MT',
  'NL',
  'NO',
  'PL',
  'PT',
  'RO',
  'SE',
  'SI',
  'SK',
];

const consentModeScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500,
  region: ${JSON.stringify(CONSENT_DENIED_REGIONS)}
});
gtag('consent', 'default', {
  ad_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
  analytics_storage: 'granted'
});
`;

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* MIND SPRINT FAVICON */}
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

          {/* GOOGLE ADSENSE ACCOUNT VERIFICATION */}
          <meta
            name="google-adsense-account"
            content="ca-pub-9372563823272898"
          />

          {/* GOOGLE CONSENT MODE V2 DEFAULTS — before tags */}
          <script
            dangerouslySetInnerHTML={{
              __html: consentModeScript,
            }}
          />

          {/* GOOGLE ADSENSE SITE CODE */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9372563823272898"
            crossOrigin="anonymous"
          ></script>

          {/* GOOGLE ANALYTICS (GA4) */}
          {process.env.NEXT_PUBLIC_GA4_ID ? (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
              ></script>

              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}', {
                      page_path: window.location.pathname
                    });
                  `,
                }}
              ></script>
            </>
          ) : null}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
