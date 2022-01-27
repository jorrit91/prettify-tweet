import { RadioGroup } from '@components/ui/radio-group'
import { RadioGroupItem } from '@components/ui/radio-group/Item'
import { Text } from '@components/ui/typograhpy/Text'
import React, { FC } from 'react'
import { Layout as LayoutOptions } from '../use-configurator-store'

type LayoutProps = {
  layout: LayoutOptions
  handleSetValue: (val: LayoutOptions) => void
}

export const Layout: FC<LayoutProps> = ({ layout, handleSetValue }) => {
  return (
    <RadioGroup
      value={layout}
      onValueChange={(val) => handleSetValue(val as LayoutOptions)}
      name="Select layout"
    >
      <RadioGroupItem value="auto" isActive={layout === 'auto'}>
        <Text variant="regular">Auto layout</Text>
      </RadioGroupItem>
      <RadioGroupItem value="centered" isActive={layout === 'centered'}>
        <Text variant="regular">Centered</Text>
      </RadioGroupItem>
    </RadioGroup>
  )
}
