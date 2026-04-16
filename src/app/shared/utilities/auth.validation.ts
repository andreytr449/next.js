import * as z from 'zod'

// translation function interface
type TranslationFn = (key: string, values?: Record<string, string | number | Date>) => string

// create login schema
export const createLoginSchema = (t: TranslationFn) => {
  return z.object({
    email: z.email(t('validation.invalidEmail')),
    password: z
      .string()
      .min(8, t('validation.minLength', { min: 8 }))
      .max(64, t('validation.maxLength', { max: 64 })),
  })
}

// create register schema
export const createRegisterSchema = (t: TranslationFn) => {
  return z
    .object({
      name: z
        .string()
        .min(5, t('validation.minLength', { min: 5 }))
        .max(32, t('validation.maxLength', { max: 32 })),
      email: z.email(t('validation.invalidEmail')),
      password: z
        .string()
        .min(8, t('validation.minLength', { min: 8 }))
        .max(64, t('validation.maxLength', { max: 64 })),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t('validation.passwordsDoNotMatch'),
      path: ['confirmPassword'],
    })
}
