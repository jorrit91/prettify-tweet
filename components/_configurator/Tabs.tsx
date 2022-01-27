import { Tabs } from '@components/ui/tabs'
import React, { FC } from 'react'
import { Mode } from './use-configurator-store'

type ConfiguratorTabsProps = {
  mode: Mode
  handleSetMode: (val: Mode) => void
}

export const ConfiguratorTabs: FC<ConfiguratorTabsProps> = ({
  mode,
  handleSetMode,
}) => {
  return (
    <Tabs
      value={mode}
      onValueChange={(val) => handleSetMode(val as Mode)}
      name="Choose layout"
      mb="32"
      items={[
        {
          title: 'Layout',
          value: 'layout',
        },
        {
          title: 'Size',
          value: 'size',
        },
        {
          title: 'Colors',
          value: 'colors',
        },
      ]}
    />
  )
}
