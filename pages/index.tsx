import React from 'react'
import { NextPage } from 'next'
import { Heading } from '@components/ui/typograhpy/Heading'
import { Text } from '@components/ui/typograhpy/Text'
import { Container } from '@components/ui/Container'
import { parse } from '@config/theme'
import { css } from '@linaria/core'

const Home: NextPage = () => {
  return (
    <Container className={container}>
      <div className={content}>
        <Heading variant="h1" as="h1" mb="24">
          ✨
        </Heading>
        <Heading variant="h1" as="h1" mb="24">
          Prettify tweet
        </Heading>
        <Text variant="regular" mb="0">
          Keep track of the{' '}
          <a
            href="https://twitter.com/search?q=%23buildinpublic"
            target="blank"
          >
            #buildinpublic
          </a>{' '}
          journey of this product by following{' '}
          <a href="https://twitter.com/jorrittempelman" target="blank">
            Jorrit Tempelman
          </a>{' '}
          on Twitter.
        </Text>
      </div>
    </Container>
  )
}

const container = parse(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  css`
    height: 100vh;
  `
)

const content = parse(
  {
    width: '100%',
    textAlign: 'center',
  },
  css`
    max-width: 28rem;
  `
)

export default Home
