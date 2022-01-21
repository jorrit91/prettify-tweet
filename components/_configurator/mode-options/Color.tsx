import { IconMoon } from '@components/ui/icons/IconMoon'
import { IconSun } from '@components/ui/icons/IconSun'
import { RadioGroup } from '@components/ui/radio-group'
import { RadioGroupItem } from '@components/ui/radio-group/Item'
import React, { FC } from 'react'
import shallow from 'zustand/shallow'
import {
  Color as ColorOptions,
  useConfiguratorStore,
} from '../use-configurator-store'

type ColorProps = {}

export const Color: FC<ColorProps> = () => {
  const { color, setColor } = useConfiguratorStore(
    (state) => ({ color: state.color, setColor: state.setColor }),
    shallow
  )
  return (
    <RadioGroup
      value={color}
      onValueChange={(val) => setColor(val as ColorOptions)}
      name="Select color"
    >
      <RadioGroupItem value="dark" isActive={color === 'dark'}>
        <IconMoon />
      </RadioGroupItem>
      <RadioGroupItem value="light" isActive={color === 'light'}>
        <IconSun />
      </RadioGroupItem>
    </RadioGroup>
  )
}
