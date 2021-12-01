import React from 'react'
import { NextPage } from 'next'
import { Container } from '@components/ui/Container'
import { Button } from '@components/ui/buttons/Button'
import { Box } from '@components/Box'

type StyleguideButtonsPageProps = { children?: never }

const StyleguideButtonsPage: NextPage<StyleguideButtonsPageProps> = () => {
  return (
    <Container mt="32">
      <Box mb="32" style={{ maxWidth: '20rem' }}>
        <Button mb="16">Save & download</Button>
        <Button mb="16" status="disabled">
          Save & download
        </Button>
        <Button mb="16" status="loading">
          Save & download
        </Button>
      </Box>
    </Container>
  )
}

export default StyleguideButtonsPage
