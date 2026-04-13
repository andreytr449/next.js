import * as z from 'zod'

import { createLoginSchema } from '@/app/shared/utilities'

export type TLoginFormData = z.infer<ReturnType<typeof createLoginSchema>>
