import React from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '../styles/reset.css'
import '../styles/font-face.css'
import '../styles/global-styles.css'
import '@config/theme/utility-styles'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
