import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>LearnFramerMotion.com - From beginner to advanced</title>
          <meta
            name="og:title"
            content="LearnFramerMotion.com - From beginner to advanced"
          />
          <meta name="og:url" content="https://learnframermotion.com" />
          <meta
            name="description"
            content="Interactive + video course that teaches you all things animation using the powerful React library Framer Motion."
          />
          <meta name="theme-color" content="#603cba" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <meta name="theme-color" content="#603cba" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#603cba"
          />
          <meta name="msapplication-TileColor" content="#603cba" />
          {/* <link rel="manifest" href="/manifest.json" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
