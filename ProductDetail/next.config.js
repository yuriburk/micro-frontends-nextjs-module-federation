/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const { withFederatedSidecar } = require('@module-federation/nextjs-mf')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withFederatedSidecar({
  name: 'ProductDetail',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    './main': './src/components/Main/index.tsx'
  },
  shared: {
    react: {
      // Notice shared are NOT eager here.
      requiredVersion: false,
      singleton: true
    }
  }
})({
  reactStrictMode: true
})
