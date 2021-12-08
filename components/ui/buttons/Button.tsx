import { AppTheme, parseAll } from '@config/theme'
import { cx } from '@linaria/core'
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react'
import { ThemeSystemProps } from 'theme-system'
import { LoadingSvg } from '../LoadingSvg'
import * as styles from './styles'

type AsAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  as?: 'link'
}
type AsButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button'
}
type AsDivProps = ButtonHTMLAttributes<HTMLDivElement> & {
  as?: 'div'
}

type ButtonAs = AsAnchorProps | AsButtonProps | AsDivProps

export type ButtonProps = Pick<ThemeSystemProps<AppTheme>, 'mb'> &
  ButtonAs &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    width?: 'auto' | 'fill'
    status?: 'loading' | 'idle' | 'disabled'
  }

export const Button: FC<ButtonProps> = ({
  children,
  status,
  as,
  width = 'auto',
  className,
  mb,
  ...rest
}) => {
  let Element: any = 'button'
  if (as === 'link') {
    Element = 'a'
  }
  if (as === 'div') {
    Element = 'div'
  }
  return (
    <Element
      {...rest}
      className={cx(styles.button, className, parseAll({ mb }))}
      data-auto-width={width === 'auto' ? '' : undefined}
      data-status={status}
      disabled={status === 'loading' || status === 'disabled'}
      data-loading={status === 'loading' ? '' : undefined}
    >
      <span>{children}</span>
      {status === 'loading' && (
        <span data-loading-animation className={styles.loading}>
          <LoadingSvg />
        </span>
      )}
    </Element>
  )
}
