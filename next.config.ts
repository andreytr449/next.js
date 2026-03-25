import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin({
  requestConfig: './src/pkg/locale/request.ts',
  experimental: {
    createMessagesDeclaration: './translations/en.json',
  },
})
const nextConfig: NextConfig = {
  poweredByHeader: false,
  expireTime: 604800,

  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV !== 'production',
    },
  },

  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shadcnstudio.com',
      },
    ],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    return config
  },

  headers: async () => [
    {
      source: '/_next/image',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, immutable' }],
    },
  ],
}

export default withNextIntl(nextConfig)
