import React, { FC } from 'react'
import { Icon, IconProps } from './Icon'

export const IconPaste: FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path
        fill="currentColor"
        d="M18 5.75h1l-1-1v1zm0 14v1l1-1h-1zm-12 0H5l1 1v-1zm0-14v-1l-1 1h1zm3.5-1.5v-1l-1 1h1zm0 3h-1l1 1v-1zm5 0v1l1-1h-1zm0-3h1l-1-1v1zm2.5 1.5v14h2v-14h-2zm1 13H6v2h12v-2zm-11 1v-14H5v14h2zm7.5-13H18v-2h-3.5v2zm-8.5 0h3.5v-2H6v2zm2.5-2.5v3h2v-3h-2zm1 4h5v-2h-5v2zm6-1v-3h-2v3h2zM9 12.5h6v-2H9v2zM9 16h6v-2H9v2zm5.5-12.75h-5v2h5v-2z"
      ></path>
    </Icon>
  )
}
