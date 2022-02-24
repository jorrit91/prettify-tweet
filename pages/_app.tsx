import '@config/theme/utility-styles'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import React from 'react'
import { LazyMotion, domMax } from 'framer-motion'
import '../styles/font-face.css'
import '../styles/global-styles.css'
import '../styles/reset.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Favicon } from '@components/Favicon'

const queryClient = new QueryClient()

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
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
