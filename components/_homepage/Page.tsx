import { Container } from '@components/ui/Container'
import { Text } from '@components/ui/typograhpy/Text'
import { parse } from '@config/theme'
import { css } from '@linaria/core'
import React, { FC } from 'react'

type HomepagePageProps = {
  children: React.ReactNode
}

export const HomepagePage: FC<HomepagePageProps> = ({ children }) => {
  return (
    <div className={parent}>
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

const parent = parse(
  {
    pb: { _: '16', large: '24' },
  },
  css`
    display: grid;
    grid-template-rows: 1fr auto;
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
