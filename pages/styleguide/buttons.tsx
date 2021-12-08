import React from 'react'
import { NextPage } from 'next'
import { Container } from '@components/ui/Container'
import { Button } from '@components/ui/buttons/Button'
import { Box } from '@components/Box'
import { IconButton } from '@components/ui/buttons/IconButton'
import { parseAll } from '@config/theme'

type StyleguideButtonsPageProps = { children?: never }

const StyleguideButtonsPage: NextPage<StyleguideButtonsPageProps> = () => {
  return (
    <Container mt="32">
      <div className={parseAll({ display: 'flex' })} style={{ gap: '1rem' }}>
        <Box mb="32" style={{ width: '100%', maxWidth: '15rem' }}>
          <Button mb="16" width="fill">
            Save & download
          </Button>
          <Button mb="16" status="disabled" width="fill">
            Disabled
          </Button>
          <Button mb="16" status="loading" width="fill">
            Save & download
          </Button>
        </Box>
        <Box mb="32">
          <div
            className={parseAll({ display: 'flex' })}
            style={{ gap: '.5rem' }}
          >
            <IconButton icon="arrow-left" animate="left" mb="16" />
            <IconButton icon="close" mb="16" />
          </div>
          <IconButton icon="close" status="disabled" mb="16" />
          <IconButton icon="close" mb="16" status="loading" />
        </Box>
      </div>
    </Container>
  )
}

export default StyleguideButtonsPage
