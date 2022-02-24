import React, { FC, HTMLAttributes } from 'react'

export type IconProps = HTMLAttributes<SVGElement> & {
  size?: number
  fill?: string
}

export const Icon: FC<IconProps> = ({ size = 24, ...rest }) => {
  return (
    <svg fill="none" viewBox="0 0 24 24" width={size} height={size} {...rest} />
  )
}
