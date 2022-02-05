import { Text } from '@components/ui/typograhpy/Text'
import { parse } from '@config/theme'
import { Tweet } from '@generated'
import { css } from '@linaria/core'
import { AnimatePresence, m } from 'framer-motion'
import React, { FC } from 'react'
import { Layout } from '../../use-configurator-store'
import { BodyImages } from './Images'

type PreviewBodyProps = Pick<Tweet, 'text' | 'media'> & {
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

export const PreviewBody: FC<PreviewBodyProps> = ({ text, media, layout }) => {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      {layout === 'auto' ? (
        <m.div className={parent} key="auto" {...animateLeft}>
          <Text variant="small" mb="16">
            {text}
          </Text>
          <BodyImages media={media} />
        </m.div>
      ) : (
        <m.div
          className={parent}
          data-layout="centered"
          key="centered"
          {...animateCenter}
        >
          <Text variant="small" mb="16">
            {text}
          </Text>
          <BodyImages media={media} />
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
    white-space: pre-line;
    transition-property: color;
    transition-duration: 0.15s;
    color: var(--preview-text-color);

    &[data-layout='centered'] {
      text-align: center;
    }
  `
)
