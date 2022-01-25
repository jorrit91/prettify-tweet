import { Text } from '@components/ui/typograhpy/Text'
import { parse } from '@config/theme'
import { Tweet } from '@generated'
import { formatDate } from '@lib/format-date'
import { css } from '@linaria/core'
import React, { FC } from 'react'
import { Layout } from '../use-configurator-store'

type PreviewMetadataProps = Pick<Tweet, 'createdAt'> & {
  layout: Layout
}

export const PreviewMetadata: FC<PreviewMetadataProps> = ({
  createdAt,
  layout,
}) => {
  const date = formatDate(createdAt)
  return (
    <div className={parent} data-layout={layout}>
      <Text variant="micro">{`${date} · Prettify tweet`}</Text>
    </div>
  )
}

const parent = parse(
  {
    display: 'flex',
    alignItems: 'center',
  },
  css`
    color: var(--preview-meta-text-color);

    &[data-layout='centered'] {
      justify-content: center;
    }
  `
)
