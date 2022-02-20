import { parse } from '@config/theme'
import { Tweet } from '@generated'
import { css } from '@linaria/core'
import React, { FC } from 'react'
import { Color, Layout } from '../use-configurator-store'
import { PreviewBody } from './body'
import { PreviewMetadata } from './MetaData'
import { PreviewUser } from './User'

type ConfiguratorPreviewProps = Tweet & {
  color: Color
  layout: Layout
}

export const ConfiguratorPreview: FC<ConfiguratorPreviewProps> = ({
  name,
  text,
  profileImageUrl,
  username,
  verified,
  createdAt,
  color,
  media,
  urlPreview,
  layout,
}) => {
  return (
    <div className={wrap}>
      <div className={parent} data-colors={color} data-layout={layout}>
        <PreviewUser
          profileImageUrl={profileImageUrl}
          name={name}
          username={username}
          verified={verified}
          layout={layout}
        />
        <PreviewBody
          text={text}
          layout={layout}
          media={media}
          urlPreview={urlPreview}
        />
        <PreviewMetadata createdAt={createdAt} layout={layout} />
      </div>
    </div>
  )
}

const wrap = parse(
  {
    width: '100%',
  },
  css`
    max-height: 100%;
  `
)

const parent = parse(
  {
    position: 'relative',
    width: '100%',
    p: '20',
  },
  css`
    align-self: center;
    --preview-background: #ffffff;
    --preview-border: #B8C0D8;
    --preview-text-color: #485374;
    --preview-meta-text-color: #969FBA;
    --preview-url-preview-background-color: #E8EBF3;
    
    &[data-colors="dark"]{
      --preview-background: #333740;
      --preview-border: #494d59;
      --preview-text-color: #FFFFFF;
      --preview-meta-text-color: #7D849A;
      --preview-url-preview-background-color: #222429;
    }

    @supports not (background: paint(squircle)) {
      border-radius: 0.75rem;
      background: var(--preview-background);
      border: 1px solid var(--preview-border);
    }

    @supports (background: paint(squircle)) {
      --squircle-radius: 20px;
      --squircle-smooth: 20;
      --squircle-fill: var(--preview-background);
      background: paint(squircle);

      &:before {
        content: '';
        pointer-events: none;
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        --squircle-radius: 20px;
        --squircle-smooth: 20;
        --squircle-outline: 1px;
        --squircle-fill: var(--preview-border);
        background: paint(squircle);
      }
  `
)
