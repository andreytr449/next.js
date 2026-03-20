import * as z from 'zod'
import { createRegisterSchema, createLoginSchema } from './auth.service'

export type RegisterFormData = z.infer<ReturnType<typeof createRegisterSchema>>
export type LoginFormData = z.infer<ReturnType<typeof createLoginSchema>>
