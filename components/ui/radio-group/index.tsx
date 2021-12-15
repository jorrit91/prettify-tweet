import React, { FC } from 'react'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import { parse, theme } from '@config/theme'
import { css } from '@linaria/core'
import { rem } from 'polished'

type RadioGroupProps = {
  children: React.ReactNode
  onValueChange: (value: string) => void
  value: string
  name: string
}

export const RadioGroup: FC<RadioGroupProps> = ({
  children,
  onValueChange,
  value,
  name,
}) => {
  return (
    <RadixRadioGroup.Root
      className={parent}
      name={name}
      onValueChange={onValueChange}
      value={value}
    >
      {children}
    </RadixRadioGroup.Root>
  )
}

const parent = parse(
  {
    position: 'relative',
    bg: 'shade600',
    justifyContent: 'space-between',
  },
  css`
    display: inline-flex;
    box-shadow: 0px 1px 3px #141721;
    border-radius: 0.75rem;
    padding: ${rem(6)};
    border: 1px solid ${theme.colors.shade300};
  `
)
