import React, { FC } from 'react'
import { Icon, IconProps } from './Icon'

export const IconClose: FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 4.586l6 6 6-6L19.414 6l-6 6 6 6L18 19.414l-6-6-6 6L4.586 18l6-6-6-6L6 4.586z"
        clipRule="evenodd"
      />
    </Icon>
  )
}
