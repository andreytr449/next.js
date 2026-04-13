import * as z from 'zod'

import { createRegisterSchema } from '@/app/shared/utilities'

export type TRegisterFormData = z.infer<ReturnType<typeof createRegisterSchema>>
