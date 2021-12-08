import React, { FC } from 'react'
import { Icon, IconProps } from './Icon'

export const IconVerified: FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.782 4.519L12 3 9.218 4.519l-3.092.652-1.17 2.98L3 10.667l.99 3.046.096 3.206 2.686 1.687L8.874 21 12 20.539l3.126.461 2.102-2.393 2.686-1.687.096-3.206.99-3.046-1.956-2.518-1.17-2.979-3.092-.652zm2.631 5.527l-1.367-1.46-5.38 5.043-2.712-2.543-1.367 1.46 3.396 3.184h1.368l6.062-5.684z"
        clipRule="evenodd"
      />
    </Icon>
  )
}
