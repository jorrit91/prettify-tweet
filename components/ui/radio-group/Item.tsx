import React, { FC } from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { parse } from '@config/theme'
import { css } from '@linaria/core'
import { motion } from 'framer-motion'

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
      {isActive && (
        <motion.span layoutId="activeRadioItem" className={active} />
      )}
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
    bg: 'shade400',
  },
  css`
    top: 0;
    border-radius: 0.5rem;
    left: 0;
    z-index: 0;
  `
)
