import React, { useState } from 'react'
import { NextPage } from 'next'
import { Container } from '@components/ui/Container'
import { Box } from '@components/Box'
import { Input } from '@components/ui/form/Input'

type StyleguideInputPageProps = { children?: never }

const StyleguideInputPage: NextPage<StyleguideInputPageProps> = () => {
  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')
  const [thirdValue, setThirdValue] = useState('')

  return (
    <Container mt="32">
      <Box mb="32" style={{ width: '100%', maxWidth: '20rem' }}>
        <Input
          name="test"
          placeholder="Enter Tweet URL"
          label="Enter url"
          value={firstValue}
          onChange={(e) => setFirstValue(e)}
        />
        <Input
          name="test"
          placeholder="Enter Tweet URL"
          label="Enter url"
          value={secondValue}
          onChange={(e) => setSecondValue(e)}
        />
        <Input
          name="test"
          placeholder="Enter Tweet URL"
          label="Enter url"
          value={thirdValue}
          onChange={(e) => setThirdValue(e)}
        />
      </Box>
    </Container>
  )
}

export default StyleguideInputPage
