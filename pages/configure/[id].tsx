import { Seo } from '@components/Seo'
import { Button } from '@components/ui/buttons/Button'
import { Container } from '@components/ui/Container'
import { ConfiguratorModeOptions } from '@components/_configurator/mode-options'
import { ConfiguratorPreview } from '@components/_configurator/preview'
import { ConfiguratorTabs } from '@components/_configurator/Tabs'
import {
  Color,
  Layout,
  Mode,
} from '@components/_configurator/use-configurator-store'
import { ConfiguratorPage } from '@components/_homepage/ConfiguratorPage'
import { parse, theme } from '@config/theme'
import { Tweet } from '@generated'
import { getGraphqlClient } from '@lib/graphql-client'
import { css } from '@linaria/core'
import { GetServerSideProps } from 'next'
import { FC, useEffect, useState } from 'react'
import { useMutation } from 'react-query'

type ConfigurePageProps = {
  data: Tweet
  id: string
}

const { sdk } = getGraphqlClient()

export const ConfigurePage: FC<ConfigurePageProps> = ({ data, id }) => {
  const [mode, setMode] = useState<Mode>('layout')
  const [color, setColor] = useState<Color>('dark')
  const [layout, setLayout] = useState<Layout>('auto')
  const { mutateAsync, status } = useMutation(async () => {
    return await sdk.GetScreenshot({
      tweetId: id,
      color,
      layout,
    })
  })

  useEffect(() => {
    const mode = localStorage.getItem('mode')

    if (mode) {
      setColor(mode as Color)
    }
  }, [])

  return (
    <ConfiguratorPage>
      <Seo title="Configure" addTitleSuffix />
      <ConfiguratorTabs mode={mode} handleSetMode={(val) => setMode(val)} />
      <Container className={previewContainer}>
        <ConfiguratorPreview {...data} color={color} layout={layout} />
      </Container>
      <Container className={buttons}>
        <ConfiguratorModeOptions
          mode={mode}
          color={color}
          layout={layout}
          setColor={setColor}
          setLayout={setLayout}
        />
        <Button
          width="fill"
          onClick={handleDownload}
          status={status === 'loading' ? 'loading' : 'idle'}
        >
          Save & Download
        </Button>
      </Container>
    </ConfiguratorPage>
  )

  async function download(path) {
    // iOS Chrome
    const image = await fetch(path)
    const imageBlob = await image.blob()
    const reader = new FileReader()
    const out = new Blob([imageBlob], { type: 'image/png' })
    reader.onload = function () {
      window.location.href = reader.result as string
    }
    reader.readAsDataURL(out)
    // if (navigator.userAgent.match('CriOS')) {
    // } else {
    //   const image = await fetch(path)
    //   const imageBlob = await image.blob()
    //   const imageURL = URL.createObjectURL(imageBlob)

    //   const anchor = document.createElement('a')
    //   anchor.href = imageURL
    //   anchor.download = filename
    //   document.body.appendChild(anchor)
    //   anchor.click()
    //   document.body.removeChild(anchor)
    // }
  }

  async function handleDownload() {
    try {
      const generatescreenshot = await mutateAsync()
      if (generatescreenshot.getScreenshot) {
        const { url } = generatescreenshot.getScreenshot
        download(url)
      }
    } catch (error) {
      console.error(error)
    }
  }
}

const buttons = parse(
  { pt: { _: '16', medium: '0' } },
  css`
    max-width: 29rem;
    @media screen and (min-width: ${theme.breakpoints.medium}) {
      justify-self: center;
    }
  `
)

const previewContainer = parse(
  {
    display: 'flex',
    alignItems: 'center',
    pt: { _: '16', medium: '0' },
    width: '100%',
  },
  css`
    max-width: 35rem;
    margin: 0 auto;
    margin-bottom: 1rem;
    overflow: scroll;
  `
)

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.id) {
    return {
      notFound: true,
    }
  }

  try {
    const tweetData = await sdk.GetTweetData({
      tweetId: query.id as string,
    })
    return {
      props: {
        data: tweetData.getTweetData,
        id: query.id as string,
      },
    }
  } catch (error) {
    console.error(error)
    return {
      notFound: true,
    }
  }
}

export default ConfigurePage
