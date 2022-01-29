import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type GetScreenshot = {
  __typename?: 'GetScreenshot';
  filename: Scalars['String'];
  url: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  getScreenshot: Maybe<GetScreenshot>;
};


export type MutationGetScreenshotArgs = {
  color: InputMaybe<Scalars['String']>;
  layout: InputMaybe<Scalars['String']>;
  tweetId: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getTweetData: Maybe<Tweet>;
};


export type QueryGetTweetDataArgs = {
  tweetId: InputMaybe<Scalars['String']>;
};

export type Tweet = {
  __typename?: 'Tweet';
  createdAt: Scalars['String'];
  name: Scalars['String'];
  profileImageUrl: Scalars['String'];
  source: Scalars['String'];
  text: Scalars['String'];
  username: Scalars['String'];
  verified: Scalars['Boolean'];
};

export type GetTweetDataQueryVariables = Exact<{
  tweetId: Scalars['String'];
}>;


export type GetTweetDataQuery = { getTweetData: { __typename?: 'Tweet', name: string, username: string, profileImageUrl: string, createdAt: string, text: string, source: string, verified: boolean } | null | undefined };

export type GetScreenshotMutationVariables = Exact<{
  tweetId: Scalars['String'];
  color: Scalars['String'];
  layout: Scalars['String'];
}>;


export type GetScreenshotMutation = { getScreenshot: { __typename?: 'GetScreenshot', url: string, filename: string } | null | undefined };


export const GetTweetDataDocument = gql`
    query GetTweetData($tweetId: String!) {
  getTweetData(tweetId: $tweetId) {
    name
    username
    profileImageUrl
    createdAt
    text
    source
    verified
  }
}
    `;
export const GetScreenshotDocument = gql`
    mutation GetScreenshot($tweetId: String!, $color: String!, $layout: String!) {
  getScreenshot(tweetId: $tweetId, color: $color, layout: $layout) {
    url
    filename
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetTweetData(variables: GetTweetDataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTweetDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTweetDataQuery>(GetTweetDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetTweetData');
    },
    GetScreenshot(variables: GetScreenshotMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetScreenshotMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetScreenshotMutation>(GetScreenshotDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetScreenshot');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;