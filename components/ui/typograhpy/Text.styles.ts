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
`

export const small = css`
  font-size: ${rem(16)};
`

export const micro = css`
  font-size: ${rem(14)};
`
