import '@config/theme/utility-styles'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import { LazyMotion, domMax } from 'framer-motion'
import '../styles/font-face.css'
import '../styles/global-styles.css'
import '../styles/reset.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Favicon } from '@components/Favicon'
import splitbee from '@splitbee/web'

const queryClient = new QueryClient()

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    splitbee.init()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Favicon />
      <LazyMotion features={domMax}>
        <Component {...pageProps} />
      </LazyMotion>
    </QueryClientProvider>
  )
}

export default App
