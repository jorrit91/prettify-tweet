import { parse } from '@config/theme'
import { css } from '@linaria/core'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { m } from 'framer-motion'
import React, { FC } from 'react'
import { Text } from '../typograhpy/Text'

type TabItemProps = {
  value: string
  title: string
  isActive: boolean
  children?: never
}

export const TabItem: FC<TabItemProps> = ({ value, title, isActive }) => {
  return (
    <RadioGroup.Item
      value={value}
      className={parent}
      data-active={isActive ? '' : undefined}
    >
      {isActive && (
        <m.span
          layoutId="activeTabItem"
          className={active}
          data-active-element
        />
      )}
      <Text fontWeight="bold" variant="regular" className={child}>
        {title}
      </Text>
    </RadioGroup.Item>
  )
}

const parent = parse(
  {
    position: 'relative',
    px: '4',
    textAlign: 'center',
    py: '16',
  },
  css`
    flex-shrink: 0;
    outline: none;
    color: var(--tabs-text-color);
    transition-property: color;
    transition-duration: 0.2s;

    @media screen and (hover: hover) and (pointer: fine) {
      &:not(:disabled):hover {
        color: var(--tabs-text-color-active);
      }
    }

    &[data-active] * {
      color: var(--radio-group-active-color);
    }
    &[data-active] {
      color: var(--radio-group-active-color);
    }

    &:focus-visible {
      [data-active-element] {
        box-shadow: 0px 0px 2px 1px rgb(255 255 255 / 60%);
      }
    }
  `
)

const child = parse(
  {
    position: 'relative',
    display: 'block',
  },
  css`
    z-index: 1;
    color: inherit;
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
    background: var(--tabs-border-color-active);
    bottom: -1px;
    left: 0;
    z-index: 0;
    height: 1px;
  `
)
