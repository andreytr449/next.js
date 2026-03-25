import * as z from 'zod'

import { createLoginSchema, createRegisterSchema } from '@/app/shared/lib'

export type RegisterFormData = z.infer<ReturnType<typeof createRegisterSchema>>
export type LoginFormData = z.infer<ReturnType<typeof createLoginSchema>>
