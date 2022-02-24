import { Tweet } from '@generated'
import React, { FC } from 'react'
import Image from 'next/image'
import { parse } from '@config/theme'
import { css } from '@linaria/core'

type BodyImagesProps = Pick<Tweet, 'media'>

export const BodyImages: FC<BodyImagesProps> = ({ media }) => {
  const count = media.length
  const isVideo = media && media[0] && media[0].type === 'video'
  if (count === 0 || isVideo) return null

  const firstImage = media[0]
  const firstRatio =
    firstImage.width / firstImage.height <= 0.75
      ? 0.75
      : firstImage.width / firstImage.height

  return (
    <div className={images} data-count={count}>
      {count === 1 ? (
        <span key={firstImage.url} className={imageContainer}>
          <Image
            src={firstImage.url}
            alt=""
            height={firstImage.width / firstRatio}
            width={firstImage.width}
            objectFit="cover"
            priority
          />
        </span>
      ) : (
        media.map((image) => (
          <span key={image.url} className={imageContainer}>
            <Image
              src={image.url}
              alt=""
              layout="fill"
              objectFit="cover"
              priority
            />
          </span>
        ))
      )}
    </div>
  )
}

const images = parse(
  {
    display: 'grid',
  },
  css`
    grid-template-columns: 1fr;
    grid-gap: 2px;
    overflow: hidden;

    &[data-count='1'] {
      span {
        padding-top: 0;
      }
    }

    &[data-count='2'] {
      grid-template-columns: 1fr 1fr;

      span {
        padding-top: 120%;
      }
    }

    &[data-count='3'] {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;

      span:first-of-type {
        grid-row: 1 / span 2;
      }
    }

    &[data-count='4'] {
      grid-template-columns: 1fr 1fr;
    }
  `
)

const imageContainer = parse(
  {
    position: 'relative',
  },
  css`
    padding-top: 56%;
  `
)
