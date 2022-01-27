import { Text } from '@components/ui/typograhpy/Text'
import { parse } from '@config/theme'
import { Tweet } from '@generated'
import { css } from '@linaria/core'
import { AnimatePresence, m } from 'framer-motion'
import React, { FC } from 'react'
import { Layout } from '../use-configurator-store'

type PreviewBodyProps = Pick<Tweet, 'text'> & {
  layout: Layout
}

const animateLeft = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.15 },
}

const animateCenter = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.15 },
}

export const PreviewBody: FC<PreviewBodyProps> = ({ text, layout }) => {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      {layout === 'auto' ? (
        <m.div className={parent} key="auto" {...animateLeft}>
          <Text variant="small">{text}</Text>
        </m.div>
      ) : (
        <m.div
          className={parent}
          data-layout="centered"
          key="centered"
          {...animateCenter}
        >
          <Text variant="small">{text}</Text>
        </m.div>
      )}
    </AnimatePresence>
  )
}

const parent = parse(
  {
    mb: '16',
  },
  css`
    transition-property: color;
    transition-duration: 0.15s;
    color: var(--preview-text-color);

    &[data-layout='centered'] {
      text-align: center;
    }
  `
)
