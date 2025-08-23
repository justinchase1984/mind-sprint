// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/*
            1) EZOIC PRIVACY SCRIPTS (MUST LOAD FIRST)
               - Do not add async here; order must be preserved
               - data-cfasync="false" tells Cloudflare not to reorder
          */}
          <script src="https://cmp.gatekeeperconsent.com/min.js" data-cfasync="false" />
          <script src="https://the.gatekeeperconsent.com/cmp.min.js" data-cfasync="false" />

          {/*
            2) EZOIC HEADER SCRIPT
               - Initializes Ezoic’s ad system
          */}
          <script async src="//www.ezojs.com/ezoic/sa.min.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.ezstandalone = window.ezstandalone || {};
                ezstandalone.cmd = ezstandalone.cmd || [];
              `,
            }}
          />

          {/*
            3) GOOGLE ANALYTICS (GA4) — OK to keep with Ezoic
               - Stays after the Ezoic scripts
               - Make sure NEXT_PUBLIC_GA4_ID is set in env
          */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />

          {/*
            NOTE: AdSense loader REMOVED on purpose
            If you ever go back to AdSense, re-add:
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXX" crossOrigin="anonymous"></script>
          */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

        </body>
      </Html>
    )
  }
}
