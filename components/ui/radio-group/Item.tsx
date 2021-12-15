import React, { FC } from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { parse, theme } from '@config/theme'
import { css } from '@linaria/core'
import { m } from 'framer-motion'

type RadioGroupItemProps = {
  value: string
  children: React.ReactNode
  isActive: boolean
}

export const RadioGroupItem: FC<RadioGroupItemProps> = ({
  value,
  children,
  isActive,
}) => {
  return (
    <RadioGroup.Item value={value} className={parent}>
      {isActive && <m.span layoutId="activeRadioItem" className={active} />}
      <span className={child}>{children}</span>
    </RadioGroup.Item>
  )
}

const parent = parse(
  {
    position: 'relative',
    px: '20',
    py: '12',
  },
  css`
    flex-shrink: 0;
  `
)

const child = parse(
  {
    position: 'relative',
    display: 'block',
  },
  css`
    z-index: 1;
  `
)

const active = parse(
  {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'block',
  },
  css`
    top: 0;
    left: 0;
    z-index: 0;

    @supports not (background: paint(squircle)) {
      background: ${theme.colors.shade400};
      border-radius: 0.5rem;
    }

    @supports (background: paint(squircle)) {
      --squircle-radius: 20px;
      --squircle-smooth: 20;
      --squircle-fill: ${theme.colors.shade400};
      border-radius: 0;
      background: paint(squircle);
    }
  `
)
