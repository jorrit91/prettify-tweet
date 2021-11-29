import { SanityCodegenConfig } from 'sanity-codegen'

const config: SanityCodegenConfig = {
  schemaPath: './sanity/schemas/schema.ts',
  outputPath: './__generated__/sanity.ts',
  babelOptions: {
    // presets: babelConfig.presets,
    // plugins: babelConfig.plugins,
    ignore: [],
  },
  // NOTE: The CLI ships with a pre-configured babel config that shims out
  // the Sanity parts system. This babel config does not read from any
  // `.babelrc` or `babel.config.js`. You can only configure extra babel
  // options here.
}

export default config
