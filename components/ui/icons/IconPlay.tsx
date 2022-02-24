import React, { FC } from 'react'
import { Icon, IconProps } from './Icon'

export const IconPlay: FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path fill="currentColor" d="M5 4l1.555-.832 12 8v1.664l-12 8L5 20V4z" />
    </Icon>
  )
}
