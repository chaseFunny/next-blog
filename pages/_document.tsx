import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  // static async getInitialProps(ctx: any) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   console.log(ctx, initialProps, 'initialProps')

  //   return { ...initialProps }
  // }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="preload" href="/fonts/SmileySans-Oblique.ttf.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          {/* <link rel="preload" href="/fonts/GTWalsheimPro-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/GTWalsheimPro-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/GTWalsheimPro-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> */}
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`} /> */}
          {/* <script // eslint-disable-next-line
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          /> */}
          {/* <meta name="google-site-verification" content="JPPz1wsoh_EhDrgTk6InHZrGEricNOa6zDJCTbIxe20" /> */}
          {/* <link rel="webmention" href="https://webmention.io/giscafer.com/webmention" /> */}
          {/* <link rel="pingback" href="https://webmention.io/giscafer.com/xmlrpc" /> */}
          <link href="https://github.com/chaseFunny" rel="author" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
