import { Text } from '@components/ui/typograhpy/Text'
import { parse } from '@config/theme'
import { Tweet } from '@generated'
import { css } from '@linaria/core'
import React, { FC } from 'react'
import { Layout } from '../use-configurator-store'

type PreviewBodyProps = Pick<Tweet, 'text'> & {
  layout: Layout
}

export const PreviewBody: FC<PreviewBodyProps> = ({ text, layout }) => {
  return (
    <div className={parent} data-layout={layout}>
      <Text variant="small">{text}</Text>
    </div>
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
