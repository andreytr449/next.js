import z from 'zod'

import { AuthResponseSchema, SignInInputSchema, SignUpInputSchema } from '@/app/shared/utilities/dto'

export type TAuthResponse = z.infer<typeof AuthResponseSchema>

export type TSignUpInput = z.infer<typeof SignUpInputSchema>

export type TSignInInput = z.infer<typeof SignInInputSchema>
