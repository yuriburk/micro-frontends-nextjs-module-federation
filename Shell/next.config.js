// eslint-disable-next-line @typescript-eslint/no-var-requires
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin')

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        remoteType: 'var',
        remotes: {
          productsList: 'productsList',
          productDetail: 'productDetail@http://localhost:3001/remoteEntry.js'
        },
        shared: {
          react: {
            // Notice shared ARE eager here.
            eager: true,
            singleton: true,
            requiredVersion: false
          }
        }
      })
    )
    config.plugins.push(new ExternalTemplateRemotesPlugin())

    config.module.rules.push({
      test: /_app.tsx/,
      loader: '@module-federation/nextjs-mf/lib/federation-loader.js'
    })

    return config
  }
}
