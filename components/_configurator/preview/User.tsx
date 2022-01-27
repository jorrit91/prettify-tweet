import { IconVerified } from '@components/ui/icons/IconVerified'
import { Text } from '@components/ui/typograhpy/Text'
import { parse } from '@config/theme'
import { Tweet } from '@generated'
import { css } from '@linaria/core'
import { AnimatePresence, m } from 'framer-motion'
import React, { FC } from 'react'
import { Layout } from '../use-configurator-store'

type PreviewUserProps = Pick<
  Tweet,
  'name' | 'profileImageUrl' | 'username' | 'verified'
> & {
  layout: Layout
}

const animateLeft = {
  initial: { opacity: 0, x: 5 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 5 },
  transition: { duration: 0.15 },
}

const animateCenter = {
  initial: { opacity: 0, x: -5 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -5 },
  transition: { duration: 0.15 },
}

export const PreviewUser: FC<PreviewUserProps> = ({
  name,
  profileImageUrl,
  username,
  verified,
  layout,
}) => {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      {layout === 'centered' ? (
        <m.div
          className={parent}
          data-layout="centered"
          key="centered"
          {...animateCenter}
        >
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
        </m.div>
      ) : (
        <m.div className={parent} key="left-aligned" {...animateLeft}>
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
        </m.div>
      )}
    </AnimatePresence>
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

    &[data-layout='centered'] {
      text-align: center;
      justify-items: center;
      grid-template-columns: 1fr;
      grid-template-rows: 3rem 1fr;
    }

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
