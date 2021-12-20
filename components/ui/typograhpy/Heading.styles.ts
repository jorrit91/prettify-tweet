import { theme } from '@config/theme'
import { css } from '@linaria/core'
import { rem } from 'polished'

export const styles = css`
  font-weight: ${theme.fontWeights.bold};
  line-height: 1.1;

  &[data-variant='h1'] {
    font-size: 2rem;

    @media screen and (min-width: ${theme.breakpoints.large}) {
      font-size: 3rem;
    }
  }

  &[data-variant='h2'] {
    font-size: ${rem(28)};

    @media screen and (min-width: ${theme.breakpoints.large}) {
      font-size: 2.5rem;
    }
  }

  &[data-variant='h3'] {
    font-size: 1.5rem;

    @media screen and (min-width: ${theme.breakpoints.large}) {
      font-size: 2rem;
    }
  }

  &[data-variant='h4'] {
    font-size: ${rem(22)};

    @media screen and (min-width: ${theme.breakpoints.large}) {
      font-size: 1.75rem;
    }
  }

  &[data-variant='h5'] {
    font-size: 1.25rem;

    @media screen and (min-width: ${theme.breakpoints.large}) {
      font-size: 1.5rem;
    }
  }

  &[data-variant='h6'] {
    font-size: ${rem(18)};

    @media screen and (min-width: ${theme.breakpoints.large}) {
      font-size: 1.25rem;
    }
  }
`
