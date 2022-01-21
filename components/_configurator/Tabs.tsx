import { Tabs } from '@components/ui/tabs'
import React, { FC } from 'react'
import shallow from 'zustand/shallow'
import { Mode, useConfiguratorStore } from './use-configurator-store'

type ConfiguratorTabsProps = {}

export const ConfiguratorTabs: FC<ConfiguratorTabsProps> = () => {
  const { mode, setMode } = useConfiguratorStore(
    (state) => ({ mode: state.mode, setMode: state.setMode }),
    shallow
  )
  return (
    <Tabs
      value={mode}
      onValueChange={(val) => setMode(val as Mode)}
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
