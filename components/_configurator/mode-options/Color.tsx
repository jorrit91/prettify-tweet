import { IconMoon } from '@components/ui/icons/IconMoon'
import { IconSun } from '@components/ui/icons/IconSun'
import { RadioGroup } from '@components/ui/radio-group'
import { RadioGroupItem } from '@components/ui/radio-group/Item'
import React, { FC } from 'react'
import { Color as ColorOptions } from '../use-configurator-store'

type ColorProps = {
  color: ColorOptions
  handleSetValue: (val: ColorOptions) => void
}

export const Color: FC<ColorProps> = ({ color, handleSetValue }) => {
  return (
    <RadioGroup
      value={color}
      onValueChange={(val) => handleSetValue(val as ColorOptions)}
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
