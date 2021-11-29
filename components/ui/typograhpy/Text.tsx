import { parseAll, AppTheme } from '@config/theme'
import { cx } from '@linaria/core'
import React, { FC, HTMLAttributes } from 'react'
import { ThemeSystemProps } from 'theme-system'
import * as styles from './Text.styles'

type TextProps = HTMLAttributes<HTMLElement> &
  Pick<ThemeSystemProps<AppTheme>, 'mb' | 'mr' | 'color' | 'fontWeight'> & {
    variant: 'regular' | 'small' | 'micro'
    as?: 'p' | 'div' | 'span'
  }

export const Text: FC<TextProps> = ({
  color = 'white',
  as = 'div',
  fontWeight = 'regular',
  variant,
  className,
  ...rest
}) => {
  const Comp = as
  return (
    <Comp
      data-variant={variant}
      className={cx(
        className,
        parseAll({ color, fontWeight, ...rest }),
        styles.baseText,
        styles[variant]
      )}
      {...rest}
    />
  )
}
