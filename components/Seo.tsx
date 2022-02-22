import React, { FC } from 'react'
import { NextSeo, NextSeoProps } from 'next-seo'

type SeoProps = NextSeoProps & {
  addTitleSuffix?: boolean
  imageUrl?: string
}

export const Seo: FC<SeoProps> = ({
  title,
  addTitleSuffix,
  imageUrl,
  description,
  openGraph = {},
  ...rest
}) => {
  const formattedTitle = `${title}${addTitleSuffix ? ' - Prettify tweet' : ''}`

  let images = []

  if (imageUrl) {
    images = [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
      },
    ]
  }
  return (
    <NextSeo
      title={formattedTitle}
      openGraph={{
        title: formattedTitle,
        description,
        images,
        ...openGraph,
      }}
      {...rest}
    />
  )
}
