import { theme } from '@config/theme'
import { css } from '@linaria/core'
import { rem } from 'polished'

export const baseText = css`
  line-height: 1.45;

  b,
  strong {
    font-weight: ${theme.fontWeights.bold};
  }

  a {
    color: ${theme.colors.brightBlue};
  }
`

export const regular = css`
  font-size: ${rem(18)};

  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: 1.25rem;
  }
`

export const small = css`
  font-size: ${rem(16)};

  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: ${rem(18)};
  }
`

export const micro = css`
  font-size: ${rem(14)};

  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: 1rem;
  }
`
