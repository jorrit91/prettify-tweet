import React from 'react'
import { NextPage } from 'next'
import { Container } from '@components/ui/Container'
import { Box } from '@components/Box'
import { Input } from '@components/ui/form/Input'

type StyleguideInputPageProps = { children?: never }

const StyleguideInputPage: NextPage<StyleguideInputPageProps> = () => {
  return (
    <Container mt="32">
      <Box mb="32" style={{ width: '100%', maxWidth: '15rem' }}>
        <Input name="test" placeholder="Enter Tweet URL" label="Enter url" />
      </Box>
    </Container>
  )
}

export default StyleguideInputPage
