import React from "react"
import "../styles/reset.css"
import "../styles/font-face.css"
import "../styles/global-styles.css"
import "@config/theme/utility-styles"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
