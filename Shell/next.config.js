/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name: 'Shell',
        remoteType: 'var',
        remotes: {
          productsList: 'productsList',
          productDetail: 'ProductDetail'
        },
        shared: {
          react: {
            eager: true,
            singleton: true,
            requiredVersion: false
          }
        }
      })
    )
    config.module.rules.push({
      test: /_app.tsx/,
      loader: '@module-federation/nextjs-mf/lib/federation-loader.js'
    })

    return config
  }
}
