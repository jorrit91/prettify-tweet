import { Button } from '@components/ui/buttons/Button'
import { Container } from '@components/ui/Container'
import { Input } from '@components/ui/form/Input'
import { Heading } from '@components/ui/typograhpy/Heading'
import { Text } from '@components/ui/typograhpy/Text'
import { HomepageInfo } from '@components/_homepage/Info'
import { Page } from '@components/_homepage/Page'
import { parse } from '@config/theme'
import { extractTweetId } from '@lib/extract-tweet-id'
import { validateTwitterUrl } from '@lib/validate-twitter-url'
import { css } from '@linaria/core'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

export type HomepageStatus = 'idle' | 'valid' | 'error' | 'loading'

const Homepage: NextPage = () => {
  const router = useRouter()
  const [value, setValue] = useState('')
  const [status, setStatus] = useState<HomepageStatus>('idle')
  const [debouncedValue] = useDebounce(value, 300)

  useEffect(() => {
    if (value.length > 0) {
      const valid = validateTwitterUrl(debouncedValue)
      setStatus(valid ? 'valid' : 'error')
    } else {
      setStatus('idle')
    }
  }, [debouncedValue]) //eslint-disable-line

  return (
    <Page>
      <Container className={container}>
        <div className={content}>
          <Heading variant="h1" as="h1" mb={{ _: '24', large: '32' }}>
            Prettify tweet
          </Heading>
          <Text variant="regular" mb="56">
            Effortlessly generate beautiful images from tweets to share on any
            platform.
          </Text>
          <form onSubmit={handleSubmit}>
            <Input
              autoFocus
              name="enter-tweet-url"
              placeholder="Enter Tweet URL"
              label="Enter url"
              mb={{ _: '24', medium: '32' }}
              value={value}
              onChange={(e) => setValue(e)}
            />
            <Button
              mb="32"
              type="submit"
              status={
                status === 'valid'
                  ? 'idle'
                  : status === 'loading'
                  ? 'loading'
                  : 'disabled'
              }
              width="fill"
            >
              Prettify!
            </Button>
          </form>
          {status === 'error' && (
            <Text variant="small" color="error" mb="12">
              Oops! It looks like your URL looks funny...
            </Text>
          )}
          <HomepageInfo status={status} />
        </div>
      </Container>
    </Page>
  )

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    setStatus('loading')
    if (status === 'valid') {
      try {
        const id = extractTweetId(value)
        router.push(`/configure/${id}`)
      } catch (error) {
        setStatus('error')
      }
    }
  }
}

const container = parse({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

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

export default Homepage
