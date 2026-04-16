import z from 'zod'

import { UserDtoSchema } from './user.dto'

// auth response schema
export const AuthResponseSchema = z.discriminatedUnion('success', [
  z.object({
    success: z.literal(true),
    user: UserDtoSchema,
    token: z.string(),
  }),

  z.object({
    success: z.literal(false),
    error: z.string(),
    status_code: z.number().optional(),
  }),
])

// sign up input schema
export const SignUpInputSchema = z.object({
  username: z.string().min(2, 'Username must be at least 2 characters'),
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

// sign in input schema
export const SignInInputSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(1, 'Please enter your password'),
})
