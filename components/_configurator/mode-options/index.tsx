import { AnimationParent } from '@components/AnimationParent'
import { parse } from '@config/theme'
import { css } from '@linaria/core'
import { AnimatePresence, LayoutGroup } from 'framer-motion'
import React, { FC } from 'react'
import {
  Color as ColorOptions,
  Layout as LayoutOptions,
  Mode,
} from '../use-configurator-store'
import { Color } from './Color'
import { Layout } from './Layout'

type ConfirugatorModeOptionsProps = {
  color: ColorOptions
  layout: LayoutOptions
  mode: Mode
  setLayout: (val: LayoutOptions) => void
  setColor: (val: ColorOptions) => void
}

export const ConfiguratorModeOptions: FC<ConfirugatorModeOptionsProps> = ({
  color,
  layout,
  mode,
  setLayout,
  setColor,
}) => {
  return (
    <div className={parent}>
      <div className={mobile}>
        <AnimatePresence exitBeforeEnter>
          {mode === 'layout' && (
            <AnimationParent key={mode}>
              <Layout
                layout={layout}
                handleSetValue={(val: LayoutOptions) => setLayout(val)}
              />
            </AnimationParent>
          )}
          {mode === 'colors' && (
            <AnimationParent key={mode}>
              <Color
                color={color}
                handleSetValue={(val: ColorOptions) => setColor(val)}
              />
            </AnimationParent>
          )}
        </AnimatePresence>
      </div>
      <div className={tabletUp}>
        <LayoutGroup id="tabletUp">
          <Layout
            layout={layout}
            handleSetValue={(val: LayoutOptions) => setLayout(val)}
          />
          <Color
            color={color}
            handleSetValue={(val: ColorOptions) => setColor(val)}
          />
        </LayoutGroup>
      </div>
    </div>
  )
}

const tabletUp = parse(
  {
    display: { _: 'none', medium: 'grid' },
    alignItems: 'center',
  },
  css`
    grid-template-columns: auto auto;
    grid-gap: 1rem;
  `
)

const parent = parse({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  mb: '32',
})

const mobile = parse({
  display: { _: 'block', medium: 'none' },
})
