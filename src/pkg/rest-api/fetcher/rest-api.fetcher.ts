import ky, { type KyInstance } from 'ky'

import { envClient, envServer } from '@/config/env'

// REST API fetcher
export const restApiFetcher: KyInstance = ky.create({
  prefixUrl: envClient.NEXT_PUBLIC_API_URL,
  throwHttpErrors: false,
})

// TMDB API fetcher
export const tmdbApiFetcher: KyInstance = ky.create({
  prefixUrl: envServer.TMDB_API_URL,
  searchParams: {
    api_key: envServer.TMDB_API_KEY,
  },
  throwHttpErrors: false,
})
