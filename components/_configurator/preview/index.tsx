import { parse } from '@config/theme'
import { Tweet } from '@generated'
import { css } from '@linaria/core'
import React, { FC } from 'react'
import { useConfiguratorStore } from '../use-configurator-store'
import { PreviewBody } from './Body'
import { PreviewMetadata } from './MetaData'
import { PreviewUser } from './User'

type ConfiguratorPreviewProps = Tweet

export const ConfiguratorPreview: FC<ConfiguratorPreviewProps> = ({
  name,
  text,
  profileImageUrl,
  username,
  verified,
  createdAt,
}) => {
  const state = useConfiguratorStore()
  return (
    <div className={parent} data-colors={state.color}>
      <PreviewUser
        profileImageUrl={profileImageUrl}
        name={name}
        username={username}
        verified={verified}
      />
      <PreviewBody text={text} />
      <PreviewMetadata createdAt={createdAt} />
    </div>
  )
}

const parent = parse(
  {
    position: 'relative',
    width: '100%',
    p: '20',
    mb: '16',
  },
  css`
    --preview-background: #ffffff;
    --preview-border: #B8C0D8;
    --preview-text-color: #485374;
    --preview-meta-text-color: #969FBA;

    &[data-colors="dark"]{
      --preview-background: #333740;
      --preview-border: #494d59;
      --preview-text-color: #FFFFFF;
      --preview-meta-text-color: #7D849A;
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
