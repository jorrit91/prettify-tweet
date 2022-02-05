import { Tweet } from '@generated'
import React, { FC } from 'react'
import Image from 'next/image'
import { parse } from '@config/theme'
import { css } from '@linaria/core'

type BodyImagesProps = Pick<Tweet, 'media'>

export const BodyImages: FC<BodyImagesProps> = ({ media }) => {
  const count = media.length
  if (count === 0) return null
  return (
    <div className={images} data-count={count}>
      <Image
        src={media[0].url}
        alt=""
        width={media[0].width}
        height={media[0].height}
        priority
      />
    </div>
  )
}

const images = parse(
  {
    display: 'grid',
  },
  css`
    grid-template-columns: 1fr;
    overflow: hidden;
  `
)
