import { AnimationParent } from '@components/AnimationParent'
import { parse } from '@config/theme'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import {
  Color as ColorOptions,
  Layout as LayoutOptions,
  Mode,
} from '../use-configurator-store'
import { Color } from './Color'
import { Layout } from './Layout'
import { Size } from './Size'

type ConfirugatorModeOptionsProps = {
  color: ColorOptions
  layout: LayoutOptions
  mode: Mode
}

export const ConfiguratorModeOptions: FC<ConfirugatorModeOptionsProps> = ({
  color,
  layout,
  mode,
}) => {
  const router = useRouter()
  return (
    <div className={parent}>
      <AnimatePresence exitBeforeEnter>
        {mode === 'layout' && (
          <AnimationParent key={mode}>
            <Layout
              layout={layout}
              handleSetValue={(val: LayoutOptions) =>
                updateUrlParams('layout', val)
              }
            />
          </AnimationParent>
        )}
        {mode === 'size' && (
          <AnimationParent key={mode}>
            <Size />
          </AnimationParent>
        )}
        {mode === 'colors' && (
          <AnimationParent key={mode}>
            <Color
              color={color}
              handleSetValue={(val: ColorOptions) =>
                updateUrlParams('color', val)
              }
            />
          </AnimationParent>
        )}
      </AnimatePresence>
    </div>
  )

  function updateUrlParams(
    param: 'color' | 'layout',
    val: ColorOptions | LayoutOptions
  ) {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        [param]: val,
      },
    })
  }
}

const parent = parse({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  mb: '32',
})
