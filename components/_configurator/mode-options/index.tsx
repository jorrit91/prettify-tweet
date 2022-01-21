import { AnimationParent } from '@components/AnimationParent'
import { parse } from '@config/theme'
import { AnimatePresence } from 'framer-motion'
import React, { FC } from 'react'
import shallow from 'zustand/shallow'
import { useConfiguratorStore } from '../use-configurator-store'
import { Color } from './Color'
import { Layout } from './Layout'
import { Size } from './Size'

export const ConfiguratorModeOptions: FC = () => {
  const { mode } = useConfiguratorStore(
    (state) => ({ mode: state.mode }),
    shallow
  )
  return (
    <div className={parent}>
      <AnimatePresence exitBeforeEnter>
        {mode === 'layout' && (
          <AnimationParent key={mode}>
            <Layout />
          </AnimationParent>
        )}
        {mode === 'size' && (
          <AnimationParent key={mode}>
            <Size />
          </AnimationParent>
        )}
        {mode === 'colors' && (
          <AnimationParent key={mode}>
            <Color />
          </AnimationParent>
        )}
      </AnimatePresence>
    </div>
  )
}

const parent = parse({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  mb: '32',
})
