import { validateTwitterUrl } from './validate-twitter-url'

export function extractTweetId(value: string): string {
  const isValid = validateTwitterUrl(value)
  if (isValid) {
    const withoutURLParams = value.split('?')[0]
    const splitBySlash = withoutURLParams.split('/')
    return splitBySlash[splitBySlash.length - 1]
  }

  throw new Error('Invalid Twitter URL')
}
