import { Container } from '@components/ui/Container'
import { Text } from '@components/ui/typograhpy/Text'
import { parse } from '@config/theme'
import { css } from '@linaria/core'
import React, { FC } from 'react'

export const Footer: FC = () => {
  return (
    <Container as="footer" className={footer}>
      <Text as="span" variant="micro" color="inherit">
        Ⓒ PT
      </Text>
      <div className={links}>
        <a
          href="https://forms.gle/PqQzj2uqRcAm8q4NA"
          target="blank"
          className={link}
        >
          Request feature
        </a>
        <a
          href="https://forms.gle/FTUSaKAVmHPYQKi5A"
          target="blank"
          className={link}
        >
          Feedback
        </a>
      </div>
    </Container>
  )
}
const links = parse({
  display: 'flex',
})

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
