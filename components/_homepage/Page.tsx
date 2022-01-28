import { Container } from '@components/ui/Container'
import { Heading } from '@components/ui/typograhpy/Heading'
import { Text } from '@components/ui/typograhpy/Text'
import { parse } from '@config/theme'
import { css } from '@linaria/core'
import Link from 'next/link'
import React, { FC } from 'react'
import { Footer } from './Footer'

type PageProps = {
  children: React.ReactNode
}

export const Page: FC<PageProps> = ({ children }) => {
  return (
    <div className={parent}>
      <Link href="/" passHref>
        <a>
          <Heading
            variant="h1"
            as="h2"
            mb={{ _: '24', large: '32' }}
            className={logo}
          >
            ✨
          </Heading>
        </a>
      </Link>
      {children}
      <Footer />
    </div>
  )
}

const logo = parse({
  textAlign: 'center',
  mt: { _: '32', medium: '64' },
})

const parent = parse(
  {
    pb: { _: '16', large: '24' },
  },
  css`
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-auto-flow: row;
    height: 100vh;
  `
)
