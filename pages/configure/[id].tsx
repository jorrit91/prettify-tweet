import { Container } from '@components/ui/Container'
import { ConfiguratorModeOptions } from '@components/_configurator/mode-options'
import { ConfiguratorPreview } from '@components/_configurator/preview'
import { ConfiguratorTabs } from '@components/_configurator/Tabs'
import {
  Color,
  Layout,
  Mode,
} from '@components/_configurator/use-configurator-store'
import { Page } from '@components/_homepage/Page'
import { Tweet } from '@generated'
import { getGraphqlClient } from '@lib/graphql-client'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

type ConfigurePageProps = {
  data: Tweet
}

const { sdk } = getGraphqlClient()

export const ConfigurePage: FC<ConfigurePageProps> = ({ data }) => {
  const router = useRouter()
  const [mode, setMode] = useState<Mode>('layout')
  const [color, setColor] = useState<Color>('dark')
  const [layout, setLayout] = useState<Layout>('auto')

  useEffect(() => {
    const { color: queryColor, layout: queryLayout } = router.query
    if (!queryColor || !queryLayout) {
      router.push({
        pathname: router.asPath,
        query: {
          color,
          layout,
        },
      })
    }
  }, []) //eslint-disable-line

  useEffect(() => {
    const { color, layout } = router.query
    if (color || layout) {
      if (color && ['light', 'dark'].includes(color as string)) {
        setColor(color as Color)
      }
      if (layout && ['auto', 'centered'].includes(layout as string)) {
        setLayout(layout as Layout)
      }
    }
  }, [router.query])

  return (
    <Page>
      <div>
        <ConfiguratorTabs mode={mode} handleSetMode={(val) => setMode(val)} />
        <Container>
          <ConfiguratorPreview {...data} color={color} layout={layout} />
          <ConfiguratorModeOptions mode={mode} color={color} layout={layout} />
        </Container>
      </div>
    </Page>
  )
}

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
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export default ConfigurePage
