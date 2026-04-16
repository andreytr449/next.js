import { z } from 'zod'

import { createEnv } from '@t3-oss/env-nextjs'

export const envServer = createEnv({
  server: {
    TMDB_API_KEY: z.string().nonempty({ message: 'TMDB_API_KEY is required' }),
    TMDB_API_URL: z.string().nonempty({ message: 'TMDB_API_URL is required' }),
    SUPABASE_URL: z.string().nonempty({ message: 'SUPABASE_URL is required' }),
    SUPABASE_PUBLISHABLE_KEY: z.string().nonempty({ message: 'SUPABASE_PUBLISHABLE_KEY is required' }),
    JWT_SECRET: z.string().nonempty({ message: 'JWT_SECRET is required' }),
  },
  emptyStringAsUndefined: true,
  runtimeEnv: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    TMDB_API_URL: process.env.TMDB_API_URL,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY: process.env.SUPABASE_PUBLISHABLE_KEY,
    JWT_SECRET: process.env.JWT_SECRET,
  },
})
