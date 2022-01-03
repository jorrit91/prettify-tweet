import { Text } from '@components/ui/typograhpy/Text'
import { parse } from '@config/theme'
import { css } from '@linaria/core'
import React, { FC } from 'react'

type HomepagePageProps = {
  children: React.ReactNode
}

export const HomepagePage: FC<HomepagePageProps> = ({ children }) => {
  return (
    <div className={parent}>
      {children}
      <footer className={footer}>
        <Text variant="micro">Ⓒ PT</Text>
      </footer>
    </div>
  )
}

const parent = parse(
  {
    pb: { _: '16', large: '24' },
  },
  css`
    display: grid;
    grid-template-rows: 1fr auto;
    grid-auto-flow: row;
    height: 100vh;
    height: calc(100vh - env(safe-area-inset-bottom));
  `
)

const footer = parse(
  {
    display: 'flex',
    justifyContent: 'space-between',
  },
  css`
    color: var(--footer-color);
  `
)
