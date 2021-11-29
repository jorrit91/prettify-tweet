import { css } from "linaria"
import { utilities } from "./index"

export default css`
  :global() {
    ${utilities}
  }
`
