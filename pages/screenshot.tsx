import { ConfiguratorPreview } from '@components/_configurator/preview'
import { Color, Layout } from '@components/_configurator/use-configurator-store'
import { parse } from '@config/theme'
import { Tweet } from '@generated'
import { getGraphqlClient } from '@lib/graphql-client'
import { css } from '@linaria/core'
import { GetServerSideProps } from 'next'
import { FC } from 'react'

type ConfigurePageProps = {
  data: Tweet
  color: Color
  layout: Layout
}

const { sdk } = getGraphqlClient()

export const ConfigurePage: FC<ConfigurePageProps> = ({
  data,
  color,
  layout,
}) => {
  return (
    <div className={previewParent} data-color={color} id="preview-parent">
      <ConfiguratorPreview {...data} color={color} layout={layout} />
    </div>
  )
}

const previewParent = parse(
  {
    width: '100%',
  },
  css`
    max-width: 35rem;
  `
)

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.id || !query.color || !query.layout) {
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
        color: query.color as Color,
        layout: query.layout as Layout,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export default ConfigurePage
