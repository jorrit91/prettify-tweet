import { parse } from '@config/theme'
import { Tweet } from '@generated'
import { css } from '@linaria/core'
import React, { FC } from 'react'
import Image from 'next/image'
import { Text } from '@components/ui/typograhpy/Text'
import { rem } from 'polished'

type BodyPreviewUrlProps = Pick<Tweet, 'urlPreview'>

export const BodyPreviewUrl: FC<BodyPreviewUrlProps> = ({ urlPreview }) => {
  return (
    <div className={parent}>
      <div className={imageParent}>
        <Image
          src={urlPreview.imageUrl}
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className={content}>
        <Text variant="micro" fontWeight="bold">
          {urlPreview.title}
        </Text>
        <Text variant="micro" className={description}>
          {urlPreview.description}
        </Text>
      </div>
    </div>
  )
}

const description = parse(
  {},
  css`
    margin-top: 6px;
    color: var(--preview-meta-text-color);
  `
)

const parent = parse(
  {
    display: 'block',
    width: '100%',
  },
  css`
    overflow: hidden;
    background: var(--preview-url-preview-background-color) !important;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  `
)

const imageParent = parse(
  {
    position: 'relative',
    width: '100%',
  },
  css`
    padding-top: 56%;
  `
)

const content = parse(
  {
    p: '12',
  },
  css`
    * {
      font-size: ${rem(14)};
    }
  `
)
