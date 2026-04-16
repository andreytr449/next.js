export const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w500' as const

export const localeToLanguage: Record<string, string> = {
  en: 'en-US',
  de: 'de-DE',
} as const

export const SALT_ROUNDS = 10 as const
