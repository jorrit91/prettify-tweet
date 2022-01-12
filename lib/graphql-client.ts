import { getSdk, Sdk } from '@generated'
import { GraphQLClient } from 'graphql-request'

export function getGraphQLApiUrl(): string {
  let url = 'http://localhost:4000/graphql'
  if (process.env.NEXT_PUBLIC_STAGE !== 'development') {
    url = 'https://api.prettifytweet.com/graphql'
  }
  return url
}

let client: GraphQLClient | null = null

export function getGraphqlClient(): {
  sdk: Sdk
  client: GraphQLClient
} {
  client = new GraphQLClient(getGraphQLApiUrl())
  const sdk = getSdk(client)
  return { sdk, client }
}
