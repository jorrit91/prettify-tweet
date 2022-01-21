import React, { FC } from 'react'
import {
  Size as SizeOptions,
  useConfiguratorStore,
} from '../use-configurator-store'
import shallow from 'zustand/shallow'
import { RadioGroup } from '@components/ui/radio-group'
import { RadioGroupItem } from '@components/ui/radio-group/Item'
import { Text } from '@components/ui/typograhpy/Text'

export const Size: FC = () => {
  const { size, setSize } = useConfiguratorStore(
    (state) => ({ size: state.size, setSize: state.setSize }),
    shallow
  )
  return (
    <RadioGroup
      value={size}
      onValueChange={(val) => setSize(val as SizeOptions)}
      name="Select size"
    >
      <RadioGroupItem value="auto" isActive={size === 'auto'}>
        <Text variant="regular">Auto size</Text>
      </RadioGroupItem>
      <RadioGroupItem value="insta" isActive={size === 'insta'}>
        <Text variant="regular">Centered</Text>
      </RadioGroupItem>
    </RadioGroup>
  )
}
