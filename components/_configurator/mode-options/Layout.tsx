import React, { FC } from 'react'
import {
  Layout as LayoutOptions,
  useConfiguratorStore,
} from '../use-configurator-store'
import shallow from 'zustand/shallow'
import { RadioGroup } from '@components/ui/radio-group'
import { RadioGroupItem } from '@components/ui/radio-group/Item'
import { Text } from '@components/ui/typograhpy/Text'

type LayoutProps = {}

export const Layout: FC<LayoutProps> = () => {
  const { layout, setLayout } = useConfiguratorStore(
    (state) => ({ layout: state.layout, setLayout: state.setLayout }),
    shallow
  )
  return (
    <RadioGroup
      value={layout}
      onValueChange={(val) => setLayout(val as LayoutOptions)}
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
