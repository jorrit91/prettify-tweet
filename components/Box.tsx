import { parseAll, AppTheme } from '@config/theme'
import { cx } from '@linaria/core'
import React, { FC, HTMLAttributes } from 'react'
import { filterProps, ThemeSystemProps } from 'theme-system'

export type BoxProps = Omit<HTMLAttributes<HTMLElement>, 'color'> &
  ThemeSystemProps<AppTheme> & {
    as?: React.ElementType
  }

export const Box: FC<BoxProps> = ({
  children,
  className,
  as = 'div',
  ...rest
}) => {
  const Element = as
  return (
    <Element className={cx(parseAll(rest), className)} {...filterProps(rest)}>
      {children}
    </Element>
  )
}
