import { theme } from '@config/theme'
import { css } from '@linaria/core'
import { rem } from 'polished'

export const styles = css`
  font-weight: ${theme.fontWeights.bold};
  line-height: 1.1;

  &[data-variant='h1'] {
    font-size: 2rem;
  }

  &[data-variant='h2'] {
    font-size: ${rem(28)};
  }

  &[data-variant='h3'] {
    font-size: 1.5rem;
  }

  &[data-variant='h4'] {
    font-size: ${rem(22)};
  }

  &[data-variant='h5'] {
    font-size: 1.25rem;
  }

  &[data-variant='h6'] {
    font-size: ${rem(18)};
  }
`
