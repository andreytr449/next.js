import { z } from 'zod'

import { createEnv } from '@t3-oss/env-nextjs'

export const clientEnv = createEnv({
  client: {
    NEXT_PUBLIC_API_URL: z.string().nonempty({ message: 'NEXT_PUBLIC_API_URL is required' }),
  },
  emptyStringAsUndefined: true,
  runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
})
