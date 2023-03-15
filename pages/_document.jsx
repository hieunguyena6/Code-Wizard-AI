import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <meta name="theme-color" content="#673ab7" />
          <link rel="icon" href="/static/img/favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Be+Vietnam:ital,wght@0,300;0,400;0,700;1,400;1,700&amp;family=Source+Code+Pro&amp;display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
