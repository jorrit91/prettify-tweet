import '@config/theme/utility-styles'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import React from 'react'
import '../styles/font-face.css'
import '../styles/global-styles.css'
import '../styles/reset.css'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
