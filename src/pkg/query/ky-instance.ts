import ky from 'ky'
import { serverEnv } from '@/config/env'

export const tmdbApi = ky.create({
  prefixUrl: serverEnv.TMDB_API_URL,

  searchParams: {
    api_key: serverEnv.TMDB_API_KEY,
  },
})
