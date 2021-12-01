import React from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '../styles/reset.css'
import '../styles/font-face.css'
import '../styles/global-styles.css'
import '@config/theme/utility-styles'
import { Scripts } from '@components/Scripts'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Scripts />
      <Component {...pageProps} />
    </>
  )
}

export default App
