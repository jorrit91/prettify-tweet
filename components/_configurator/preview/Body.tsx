import { Text } from '@components/ui/typograhpy/Text'
import { parse } from '@config/theme'
import { Tweet } from '@generated'
import { css } from '@linaria/core'
import React, { FC } from 'react'

type PreviewBodyProps = Pick<Tweet, 'text'>

export const PreviewBody: FC<PreviewBodyProps> = ({ text }) => {
  return (
    <div className={parent}>
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
  `
)
