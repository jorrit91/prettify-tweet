import { Heading } from '@components/ui/typograhpy/Heading'
import { parse, theme } from '@config/theme'
import { css } from '@linaria/core'
import Link from 'next/link'
import React, { FC } from 'react'
import { use100vh } from 'react-div-100vh'
import { Footer } from './Footer'

type ConfiguratorPageProps = {
  children: React.ReactNode
}

export const ConfiguratorPage: FC<ConfiguratorPageProps> = ({ children }) => {
  const height = use100vh()
  return (
    <div className={parent} style={{ height }}>
      <div>
        <Link href="/" passHref>
          <a>
            <Heading
              variant="h1"
              as="h2"
              style={{ whiteSpace: 'pre-line' }}
              className={logo}
            >
              ✨
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
  my: { _: '16', medium: '64' },
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
    overflow: hidden;
    display: grid;
    grid-template-rows: auto 3.75rem 1fr auto;
    grid-auto-flow: row;
    height: 100vh;

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      grid-template-rows: auto 1fr auto 5rem;
    }
  `
)
