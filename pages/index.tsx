import React from 'react'
import { NextPage } from 'next'
import { Heading } from '@components/ui/typograhpy/Heading'
import { Text } from '@components/ui/typograhpy/Text'
import { Container } from '@components/ui/Container'
import { parse } from '@config/theme'
import { css } from '@linaria/core'
import { HomepagePage } from '@components/_homepage/Page'
import { Input } from '@components/ui/form/Input'
import { Button } from '@components/ui/buttons/Button'

const Home: NextPage = () => {
  return (
    <HomepagePage>
      <Container>
        <div className={content}>
          <Heading variant="h1" as="h2" mb={{ _: '24', large: '32' }}>
            ✨
          </Heading>
          <Heading variant="h1" as="h1" mb={{ _: '24', large: '32' }}>
            Prettify tweet
          </Heading>
          <Text variant="regular" mb="56">
            Effortlessly generate beautiful images from tweets to share on any
            platform.
          </Text>
          <Input
            name="enter-tweet-url"
            placeholder="Enter Tweet URL"
            label="Enter url"
            mb={{ _: '24', medium: '32' }}
          />
          <Button mb="16" status="disabled" width="fill">
            Prettify!
          </Button>
        </div>
      </Container>
    </HomepagePage>
    // <Container className={container}>
    //   <div className={content}>
    //     <Heading variant="h1" as="h1" mb="24">
    //       ✨
    //     </Heading>
    //     <Heading variant="h1" as="h1" mb="24">
    //       Prettify tweet
    //     </Heading>
    //     <Text variant="regular" mb="0">
    //       Keep track of the{' '}
    //       <a
    //         href="https://twitter.com/search?q=%23buildinpublic"
    //         target="blank"
    //       >
    //         #buildinpublic
    //       </a>{' '}
    //       journey of this product by following{' '}
    //       <a href="https://twitter.com/jorrittempelman" target="blank">
    //         Jorrit Tempelman
    //       </a>{' '}
    //       on Twitter.
    //     </Text>
    //   </div>
    // </Container>
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
    height: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  css`
    flex-direction: column;
    max-width: 30rem;
  `
)

export default Home
