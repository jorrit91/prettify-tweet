import { parse, parseAll, AppTheme } from '@config/theme'
import { css, cx } from '@linaria/core'
import { rem } from 'polished'
import React, { forwardRef, HTMLAttributes } from 'react'
import { ThemeSystemProps } from 'theme-system'

type ContainerProps = Pick<ThemeSystemProps<AppTheme>, 'mb' | 'mt'> &
  HTMLAttributes<HTMLDivElement> & {
    as?: 'div' | 'section'
  }

export const Container = forwardRef<ContainerProps, any>((props, ref) => {
  const { mb, mt, className, as = 'section', ...rest } = props
  const Comp = as
  return (
    <Comp
      className={cx(className, container, parseAll({ mb, mt }))}
      {...rest}
      ref={ref}
    ></Comp>
  )
})

Container.displayName = 'Container'

const container = parse(
  {
    position: 'relative',
    mx: 'auto',
  },
  css`
    width: calc(100% - 2.5rem);
    max-width: ${rem(1100)};
  `
)
