// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withModuleFederation } = require('@module-federation/nextjs-mf')

module.exports = {
  webpack5: true,
  webpack: (config, options) => {
    const mfConf = {
      name: 'shell',
      library: {
        type: config.output.libraryTarget,
        name: 'shell'
      },
      remotes: {
        productsList: 'productsList',
        productDetail: 'productDetail'
      },
      exposes: {}
    }
    config.cache = false
    withModuleFederation(config, options, mfConf)

    return config
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config
  }
}
