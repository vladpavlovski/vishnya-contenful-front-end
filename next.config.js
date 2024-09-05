/* eslint-disable @typescript-eslint/no-require-imports */
require('dotenv').config()

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.BUNDLE_ANALYZE === 'true'
})

const headers = require('./config/headers')
const { i18n } = require('./next-i18next.config.js')

/**
 * Next config
 * documentation: https://nextjs.org/docs/api-reference/next.config.js/introduction
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  /**
   * add the environment variables you would like exposed to the client here
   * documentation: https://nextjs.org/docs/api-reference/next.config.js/environment-variables
   */
  env: {
    ENVIRONMENT_NAME: process.env.ENVIRONMENT_NAME,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_PREVIEW_ACCESS_TOKEN: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
  },

  /**
   * add the headers you would like your next server to use
   * documentation: https://nextjs.org/docs/api-reference/next.config.js/headers
   *                https://nextjs.org/docs/advanced-features/security-headers
   */
  headers,

  /**
   * https://nextjs.org/docs/basic-features/image-optimization
   * Settings are the defaults
   */
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200, 1600],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.ctfassets.net', port: '' },
      { protocol: 'https', hostname: 'images.eu.ctfassets.net', port: '' }
    ],
    path: '/_next/image',
    loader: 'default'
  }
  // productionBrowserSourceMaps: process.env.BUNDLE_ANALYZE === 'true'
}

module.exports = nextConfig
