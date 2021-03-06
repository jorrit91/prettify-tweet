import { AppTheme, parse, parseAll } from '@config/theme'
import { css, cx } from '@linaria/core'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import { LayoutGroup } from 'framer-motion'
import React, { FC } from 'react'
import { ThemeSystemProps } from 'theme-system'
import { TabItem } from './Item'

type Item = {
  value: string
  title: string
}

type TabsProps = Pick<ThemeSystemProps<AppTheme>, 'mb'> & {
  children?: never
  onValueChange: (value: string) => void //eslint-disable-line
  value: string
  items: Item[]
  name: string
}

export const Tabs: FC<TabsProps> = ({
  onValueChange,
  value,
  name,
  items,
  mb,
}) => {
  return (
    <RadixRadioGroup.Root
      className={cx(parent, parseAll({ mb }))}
      name={name}
      onValueChange={onValueChange}
      value={value}
    >
      <LayoutGroup id={name}>
        {items.map((item) => (
          <TabItem
            key={item.value}
            title={item.title}
            value={item.value}
            isActive={value === item.value}
          />
        ))}
      </LayoutGroup>
    </RadixRadioGroup.Root>
  )
}

const parent = parse(
  {
    position: 'relative',
    display: 'grid',
  },
  css`
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    border-bottom: 1px solid var(--tabs-border-color-track);
  `
)
