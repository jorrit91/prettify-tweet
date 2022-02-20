import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <script type="text/javascript" src="/determine-theme.js" async />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if ("paintWorklet" in CSS) {
                  CSS.paintWorklet.addModule(
                    "https://www.unpkg.com/css-houdini-squircle/squircle.min.js"
                  );
                }
                `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
