import React, { FC } from 'react'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import { LayoutGroup } from 'framer-motion'
import { parse, theme } from '@config/theme'
import { css } from '@linaria/core'
import { rem } from 'polished'

type RadioGroupProps = {
  children: React.ReactNode
  onValueChange: (value: string) => void //eslint-disable-line
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
      <LayoutGroup id={name}>{children}</LayoutGroup>
    </RadixRadioGroup.Root>
  )
}

const parent = parse(
  {
    position: 'relative',
    justifyContent: 'space-between',
  },
  css`
    display: inline-flex;
    padding: ${rem(6)};

    @supports not (background: paint(squircle)) {
      border: 1px solid ${theme.colors.shade300};
      border-radius: 0.75rem;
      box-shadow: 0px 1px 3px #141721;
    }

    @supports (background: paint(squircle)) {
      --squircle-radius: 16px;
      --squircle-smooth: 16;
      --squircle-fill: ${theme.colors.shade600};
      border-radius: 0;
      background: paint(squircle);
      filter: drop-shadow(0px 1px 3px #141721);

      &:after {
        content: '';
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition-property: opacity;
        transition-duration: 0.2s;
        --squircle-radius: 16px;
        --squircle-smooth: 16;
        --squircle-outline: 1px;
        --squircle-fill: ${theme.colors.shade300};
        background: paint(squircle);
      }
    }
  `
)
