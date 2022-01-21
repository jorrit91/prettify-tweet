import { Container } from '@components/ui/Container'
import { Heading } from '@components/ui/typograhpy/Heading'
import { Text } from '@components/ui/typograhpy/Text'
import { parse } from '@config/theme'
import { css } from '@linaria/core'
import React, { FC } from 'react'

type PageProps = {
  children: React.ReactNode
}

export const Page: FC<PageProps> = ({ children }) => {
  return (
    <div className={parent}>
      <Heading
        variant="h1"
        as="h2"
        mb={{ _: '24', large: '32' }}
        className={logo}
      >
        ✨
      </Heading>
      {children}
      <Container as="footer" className={footer}>
        <Text as="span" variant="micro" color="inherit">
          Ⓒ PT
        </Text>
        <div className={links}>
          <a href="#" className={link}>
            Subscribe
          </a>
          <a href="#" className={link}>
            Request feature
          </a>
          <a href="#" className={link}>
            Feedback
          </a>
        </div>
      </Container>
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

const links = parse(
  {
    display: 'flex',
  },
  css``
)

const link = css`
  transition-property: color;
  transition-duration: 0.2s;
  margin-left: 1.25rem;

  @media screen and (hover: hover) and (pointer: fine) {
    &:hover {
      color: var(--footer-color-hover);
    }
  }
`

const footer = parse(
  {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  css`
    span,
    a {
      color: var(--footer-color);
    }
  `
)
