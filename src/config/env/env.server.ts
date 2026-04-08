import { z } from 'zod'

import { createEnv } from '@t3-oss/env-nextjs'

export const envServer = createEnv({
  server: {
    TMDB_API_KEY: z.string().nonempty({ message: 'TMDB_API_KEY is required' }),
    TMDB_API_URL: z.string().nonempty({ message: 'TMDB_API_URL is required' }),
  },
  emptyStringAsUndefined: true,
  runtimeEnv: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    TMDB_API_URL: process.env.TMDB_API_URL,
  },
})
