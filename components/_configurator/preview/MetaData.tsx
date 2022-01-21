import { Text } from '@components/ui/typograhpy/Text'
import { parse } from '@config/theme'
import { Tweet } from '@generated'
import { formatDate } from '@lib/format-date'
import { css } from '@linaria/core'
import React, { FC } from 'react'

type PreviewMetadataProps = Pick<Tweet, 'createdAt'>

export const PreviewMetadata: FC<PreviewMetadataProps> = ({ createdAt }) => {
  const date = formatDate(createdAt)
  return (
    <div className={parent}>
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
  `
)
