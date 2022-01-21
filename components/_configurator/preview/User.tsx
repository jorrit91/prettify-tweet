import { IconVerified } from '@components/ui/icons/IconVerified'
import { Text } from '@components/ui/typograhpy/Text'
import { parse } from '@config/theme'
import { Tweet } from '@generated'
import { css } from '@linaria/core'
import React, { FC } from 'react'

type PreviewUserProps = Pick<
  Tweet,
  'name' | 'profileImageUrl' | 'username' | 'verified'
>

export const PreviewUser: FC<PreviewUserProps> = ({
  name,
  profileImageUrl,
  username,
  verified,
}) => {
  return (
    <div className={parent}>
      <img src={profileImageUrl} alt={name} className={image} />
      <div>
        <div className={nameArea}>
          <Text variant="small" as="span" data-variant="user">
            {name}
          </Text>
          {verified && <IconVerified size={20} />}
        </div>
        <Text variant="micro" as="span" data-variant="username">
          {`@${username}`}
        </Text>
      </div>
    </div>
  )
}

const parent = parse(
  {
    display: 'grid',
    alignItems: 'center',
    mb: '16',
  },
  css`
    grid-template-columns: 3rem 1fr;
    grid-gap: 1rem;

    span {
      display: block;
      transition-property: color;
      transition-duration: 0.15s;
    }

    [data-variant='user'] {
      color: var(--preview-text-color);
    }

    [data-variant='username'] {
      color: var(--preview-meta-text-color);
    }
  `
)

const nameArea = parse(
  {
    display: 'flex',
  },
  css`
    transition-property: color;
    transition-duration: 0.15s;
    color: var(--preview-text-color);

    svg {
      margin-left: 0.25rem;
    }
  `
)

const image = css`
  height: 3rem;
  width: 3rem;
  object-fit: contain;
  border-radius: 50%;
`
