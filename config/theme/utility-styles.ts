import { css } from '@linaria/core'
import { utilities } from './index'

export default css`
  :global() {
    ${utilities}
  }
`
