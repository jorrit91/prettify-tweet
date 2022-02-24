import { Tabs } from '@components/ui/tabs'
import { parse } from '@config/theme'
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
    <div className={parent}>
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
            title: 'Colors',
            value: 'colors',
          },
        ]}
      />
    </div>
  )
}

const parent = parse({
  display: { _: 'block', medium: 'none' },
})
