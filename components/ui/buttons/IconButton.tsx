import { AppTheme, parseAll } from '@config/theme'
import { cx } from '@linaria/core'
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react'
import { ThemeSystemProps } from 'theme-system'
import { LoadingSvg } from '../LoadingSvg'
import * as styles from './styles'
import { IconArrowLeft } from '../icons/IconArrowLeft'
import { IconClose } from '../icons/IconClose'

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

export type IconButtonProps = Pick<ThemeSystemProps<AppTheme>, 'mb'> &
  ButtonAs &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    status?: 'loading' | 'idle' | 'disabled'
    animate?: 'left' | 'down'
    icon: 'arrow-left' | 'close'
  }

export const Button: FC<IconButtonProps> = ({
  status,
  as,
  className,
  animate = 'down',
  icon,
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
      className={cx(
        styles.button,
        styles.iconButton,
        className,
        parseAll({ mb })
      )}
      data-status={status}
      data-animate={animate}
      disabled={status === 'loading' || status === 'disabled'}
      data-loading={status === 'loading' ? '' : undefined}
    >
      <span>
        {icon === 'arrow-left' && <IconArrowLeft />}
        {icon === 'close' && <IconClose />}
      </span>
      {status === 'loading' && (
        <span data-loading-animation className={styles.loading}>
          <LoadingSvg />
        </span>
      )}
    </Element>
  )
}
