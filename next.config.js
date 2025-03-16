import bundleAnalyzer from '@next/bundle-analyzer'
import { env } from 'process'
import headers from './config/headers.js'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: env.ANALYZE === 'true'
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net'
      }
    ],
    path: '/_next/image',
    loader: 'default'
  },
  env: {
    ENVIRONMENT_NAME: env.ENVIRONMENT_NAME,
    CONTENTFUL_SPACE_ID: env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_PREVIEW_ACCESS_TOKEN: env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
  },
  headers
}

// export default withBundleAnalyzer(nextConfig)
export default nextConfig
