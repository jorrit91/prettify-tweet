export function validateTwitterUrl(value: string): boolean {
  const regex =
    /^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+)(?:\/.*)?$/i
  const withoutURLParams = value.split('?')[0]
  return regex.test(withoutURLParams)
}
