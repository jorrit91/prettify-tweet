import '@config/theme/utility-styles'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import React from 'react'
import { LazyMotion, domMax } from 'framer-motion'
import '../styles/font-face.css'
import '../styles/global-styles.css'
import '../styles/reset.css'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <LazyMotion features={domMax}>
      <Component {...pageProps} />
    </LazyMotion>
  )
}

export default App
