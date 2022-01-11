import { AppTheme, parse, parseAll } from '@config/theme'
import { css, cx } from '@linaria/core'
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react'
import { ThemeSystemProps } from 'theme-system'
import { regular, small } from '../typograhpy/Text.styles'

type AsAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  as?: 'link'
}
type AsButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button'
}
type AsSpanProps = ButtonHTMLAttributes<HTMLSpanElement> & {
  as?: 'span'
}

type LinkAs = AsAnchorProps | AsButtonProps | AsSpanProps

export type LinkProps = Pick<ThemeSystemProps<AppTheme>, 'mb'> &
  LinkAs &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    size?: 'small' | 'regular'
  }

export const Link: FC<LinkProps> = ({
  size = 'regular',
  as = 'link',
  mb,
  children,
  ...rest
}) => {
  const textStyles = size === 'regular' ? regular : small
  let Element: any = 'button'
  if (as === 'link') {
    Element = 'a'
  }
  if (as === 'span') {
    Element = 'span'
  }
  return (
    <Element
      className={cx(parent, textStyles, parseAll({ mb }))}
      data-size={size}
      {...rest}
    >
      {children}
    </Element>
  )
}

const parent = parse(
  {},
  css`
    @media screen and (hover: hover) and (pointer: fine) {
      &:not(:disabled):hover {
        text-decoration: underline;
      }
    }
  `
)
