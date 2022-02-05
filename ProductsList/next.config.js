// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withFederatedSidecar } = require('@module-federation/nextjs-mf')

module.exports = withFederatedSidecar({
  name: 'productsList',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    './main': './src/components/Main'
  },
  shared: {
    react: {
      // Notice shared are NOT eager here.
      requiredVersion: false,
      singleton: true
    }
  }
})({})
