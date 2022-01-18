import { Heading } from '@components/ui/typograhpy/Heading'
import { Text } from '@components/ui/typograhpy/Text'
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
    <>
      <Heading variant="h1" as="h1">
        {data.name}
      </Heading>
      <Text variant="regular">{data.text}</Text>
    </>
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
