const withLinaria = require('next-linaria')

const path = require('path')

module.exports = withLinaria({
  linaria: {
    evaluate: true,
    displayName: process.env.NODE_ENV === 'development',
    cacheDirectory:
      process.env.NODE_ENV === 'development'
        ? '.linaria-cache'
        : 'node_modules/.linaria-cache',
  },
  images: {
    domains: ['pbs.twimg.com'],
  },
  webpack(config, options) {
    // this ensures that in linaria's css or styled functions you can use modules
    // that are imported with an alias. E.g. `import {theme} from '@components/theme'`
    config.resolve.alias['@components'] = path.join(__dirname, 'components')
    config.resolve.alias['@config'] = path.join(__dirname, 'config')
    config.resolve.alias['@lib'] = path.join(__dirname, 'lib')
    return config
  },
})
