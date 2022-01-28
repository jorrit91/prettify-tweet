import { Heading } from '@components/ui/typograhpy/Heading'
import { parse, theme } from '@config/theme'
import { css } from '@linaria/core'
import Link from 'next/link'
import React, { FC } from 'react'
import { Footer } from './Footer'

type ConfiguratorPageProps = {
  children: React.ReactNode
}

export const ConfiguratorPage: FC<ConfiguratorPageProps> = ({ children }) => {
  return (
    <div className={parent}>
      <div>
        <Link href="/" passHref>
          <a>
            <Heading
              variant="h1"
              as="h2"
              mb={{ _: '24', large: '32' }}
              style={{ whiteSpace: 'pre-line', lineHeight: '1.5' }}
              className={logo}
            >
              {`✨ 
              Prettify tweet`}
            </Heading>
          </a>
        </Link>
      </div>
      {children}
      <div className={footer}>
        <Footer />
      </div>
    </div>
  )
}

const logo = parse({
  textAlign: 'center',
  mt: { _: '32', medium: '64' },
})

const footer = parse({
  display: { _: 'none', medium: 'flex' },
  alignItems: 'center',
})

const parent = parse(
  {
    pb: { _: '16', large: '0' },
  },
  css`
    display: grid;
    grid-template-rows: auto 3.75rem 1fr;
    grid-auto-flow: row;
    height: 100vh;

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      grid-template-rows: auto 1fr 5rem;
    }
  `
)
