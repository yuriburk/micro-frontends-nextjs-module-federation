/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name: 'Shell',
        remoteType: 'var',
        remotes: {
          ProductsList: 'ProductsList@http://localhost:3002/_next/static/chunks/remoteEntry.js',
          ProductDetail: 'ProductDetail@http://localhost:3001/_next/static/chunks/remoteEntry.js'
        },
        shared: {
          react: {
            eager: true,
            singleton: true,
            requiredVersion: false
          },
          'react-dom': {
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
