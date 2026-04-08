import { Geist as FontPrimary, Geist_Mono as FontSecondary } from 'next/font/google'

// font primary
export const fontPrimary = FontPrimary({
  subsets: ['latin'],
  preload: true,
  variable: '--font-geist-sans',
  display: 'swap',
  adjustFontFallback: false,
})

// font secondary
export const fontSecondary = FontSecondary({
  subsets: ['latin'],
  preload: true,
  variable: '--font-geist-mono',
  display: 'swap',
  adjustFontFallback: false,
})
