// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withModuleFederation } = require('@module-federation/nextjs-mf')

module.exports = {
  webpack5: true,
  webpack: (config, options) => {
    const { isServer } = options
    const mfConf = {
      mergeRuntime: true, //experimental
      name: 'productsList',
      library: {
        type: config.output.libraryTarget,
        name: 'productsList'
      },
      filename: 'static/runtime/productsListRemoteEntry.js',
      remotes: {},
      exposes: {
        './main': './src/components/Main'
      }
    }
    config.cache = false
    withModuleFederation(config, options, mfConf)
    if (!isServer) {
      config.output.publicPath = 'http://localhost:3002/_next/'
    }

    return config
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config
  }
}
