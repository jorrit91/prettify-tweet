import React, { FC } from 'react'
import { Icon, IconProps } from './Icon'

export const IconMoon: FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 11.702a9.3 9.3 0 015.832-8.63l1.301 1.3a7.298 7.298 0 009.494 9.494l1.3 1.302A9.3 9.3 0 013 11.702z"
        clipRule="evenodd"
      />
    </Icon>
  )
}
