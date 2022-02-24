import React, { FC } from 'react'
import { Icon, IconProps } from './Icon'

export const IconArrowLeft: FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.683 4.672L6.79 11H20v2H6.79l3.893 6.328-1.703 1.048-4.832-7.852v-1.048L5 12l-.852-.524L8.98 3.624l1.703 1.048z"
        clipRule="evenodd"
      />
    </Icon>
  )
}
