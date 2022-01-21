import { Container } from '@components/ui/Container'
import { ConfiguratorModeOptions } from '@components/_configurator/mode-options'
import { ConfiguratorPreview } from '@components/_configurator/preview'
import { ConfiguratorTabs } from '@components/_configurator/Tabs'
import { Page } from '@components/_homepage/Page'
import { Tweet } from '@generated'
import { getGraphqlClient } from '@lib/graphql-client'
import { GetServerSideProps } from 'next'
import { FC } from 'react'

type ConfigurePageProps = {
  data: Tweet
}

const { sdk } = getGraphqlClient()

export const ConfigurePage: FC<ConfigurePageProps> = ({ data }) => {
  return (
    <Page>
      <div>
        <ConfiguratorTabs />
        <Container>
          <ConfiguratorPreview {...data} />
          <ConfiguratorModeOptions />
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
