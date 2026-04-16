import { z } from 'zod'

import { createEnv } from '@t3-oss/env-nextjs'

export const envClient = createEnv({
  client: {
    NEXT_PUBLIC_API_URL: z.string().nonempty({ message: 'NEXT_PUBLIC_API_URL is required' }),
    NEXT_PUBLIC_SUPABASE_URL: z.string().nonempty({ message: 'NEXT_PUBLIC_SUPABASE_URL is required' }),
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z
      .string()
      .nonempty({ message: 'NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY is required' }),
  },
  emptyStringAsUndefined: true,
  runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  },
})
