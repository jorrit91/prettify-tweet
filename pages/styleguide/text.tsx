import React from 'react'
import { NextPage } from 'next'
import { Container } from '@components/ui/Container'
import { Text } from '@components/ui/typograhpy/Text'

const StyleguideTextPage: NextPage = () => {
  const text =
    'The carrot (Daucus carota subsp. sativus) is a root vegetable, usually orange in colour, though purple, black, red, white, and yellow'
  return (
    <Container mt="32">
      <div style={{ maxWidth: 500 }} id="heading">
        <Text variant="regular" as="div" mb="48">
          {text}
        </Text>
        <Text variant="regular" fontWeight="bold" as="div" mb="48">
          {text}
        </Text>
        <Text variant="small" mb="48">
          {text}
        </Text>
        <Text variant="micro" mb="48">
          {text}
        </Text>
      </div>
    </Container>
  )
}

export default StyleguideTextPage
