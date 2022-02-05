import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="pt-BR">
        <script src="http://localhost:3001/_next/static/chunks/remoteEntry.js" />
        <script src="http://localhost:3002/_next/static/chunks/remoteEntry.js" />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
