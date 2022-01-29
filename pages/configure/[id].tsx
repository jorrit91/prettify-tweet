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
import { saveAs } from 'file-saver'
import { GetServerSideProps } from 'next'
import { rem } from 'polished'
import { FC, useState } from 'react'
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

  return (
    <ConfiguratorPage>
      <ConfiguratorTabs mode={mode} handleSetMode={(val) => setMode(val)} />
      <Container className={grid}>
        <div className={previewContainer}>
          <ConfiguratorPreview {...data} color={color} layout={layout} />
        </div>
        <div className={buttons}>
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
        </div>
      </Container>
    </ConfiguratorPage>
  )

  async function handleDownload() {
    try {
      const generatescreenshot = await mutateAsync()
      if (generatescreenshot.getScreenshot) {
        const { url, filename } = generatescreenshot.getScreenshot
        saveAs(url, filename)
      }
    } catch (error) {
      console.error(error)
    }
  }
}

const buttons = parse(
  {},
  css`
    @media screen and (min-width: ${theme.breakpoints.medium}) {
      justify-self: center;
    }
  `
)

const previewContainer = parse(
  {
    display: 'flex',
    alignItems: 'center',
    mb: '16',
  },
  css`
    width: calc(100% - 3rem);
    max-width: 29rem;
    margin: 0 auto;
  `
)

const grid = parse(
  {
    display: 'grid',
    height: '100%',
  },
  css`
    grid-template-rows: 1fr auto;
    grid-gap: 1rem;
    grid-auto-flow: row;

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      max-width: 29rem;
    }

    @media screen and (min-width: ${theme.breakpoints.large}) {
      max-width: ${rem(1100)};
    }
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
    return {
      notFound: true,
    }
  }
}

export default ConfigurePage
