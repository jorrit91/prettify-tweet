import React, { useState } from 'react'
import { NextPage } from 'next'
import { Heading } from '@components/ui/typograhpy/Heading'
import { Text } from '@components/ui/typograhpy/Text'
import { Container } from '@components/ui/Container'
import { parse } from '@config/theme'
import { css } from '@linaria/core'
import { HomepagePage } from '@components/_homepage/Page'
import { Input } from '@components/ui/form/Input'
import { Button } from '@components/ui/buttons/Button'
import { Link } from '@components/ui/link'
import { Modal } from '@components/ui/dialog'
import { AutoPlayVideo } from '@components/_homepage/AutoPlayVideo'

const Home: NextPage = () => {
  const [value, setValue] = useState('')

  return (
    <HomepagePage>
      <Container className={container}>
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
            autoFocus
            name="enter-tweet-url"
            placeholder="Enter Tweet URL"
            label="Enter url"
            mb={{ _: '24', medium: '32' }}
            value={value}
            onChange={(e) => setValue(e)}
          />
          <Button mb="32" status="disabled" width="fill">
            Prettify!
          </Button>
          <Modal
            title="Copy URL"
            triggerButton={
              <Link size="small" as="button">
                💡 Where to find your tweets’ URL?
              </Link>
            }
          >
            <AutoPlayVideo
              videoSrc="/find-tweet-url.mp4"
              placeholderSrc="/find-tweet-url-placeholder.jpg"
            />
          </Modal>
        </div>
      </Container>
    </HomepagePage>
  )
}

const container = parse(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  css``
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
