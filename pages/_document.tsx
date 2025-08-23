// pages/_document.tsx
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

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
          {/* 1) EZOIC PRIVACY SCRIPTS (MUST LOAD FIRST) */}
          <script src="https://cmp.gatekeeperconsent.com/min.js" data-cfasync="false"></script>
          <script src="https://the.gatekeeperconsent.com/cmp.min.js" data-cfasync="false"></script>

          {/* 2) EZOIC HEADER SCRIPT */}
          <script async src="//www.ezojs.com/ezoic/sa.min.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html:
                'window.ezstandalone = window.ezstandalone || {}; ezstandalone.cmd = ezstandalone.cmd || [];',
            }}
          ></script>

          {/* 3) GOOGLE ANALYTICS (GA4) — OK to keep with Ezoic */}
          {process.env.NEXT_PUBLIC_GA4_ID ? (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
              ></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}', {
                      page_path: window.location.pathname
                    });
                  `,
                }}
              ></script>
            </>
          ) : null}

          {/* NOTE: AdSense was removed on purpose to avoid conflicts */}
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
