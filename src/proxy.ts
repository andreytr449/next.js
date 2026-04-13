import { NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'

import { routing } from '@/pkg/locale'

// proxy
export default function proxy(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  const i18nRes = createMiddleware(routing)(req)

  const country =
    req.headers.get('cf-ipcountry') ||
    req.headers.get('cloudfront-viewer-country') ||
    req.headers.get('X-Country') ||
    req.cookies.get('country')?.value ||
    'N/A'

  i18nRes.headers.set('x-country', country)
  i18nRes.cookies.set('x-country', country)

  const { pathname } = req.nextUrl

  const segment = pathname.split('/')[1]

  const isUnknownLocale = /^[a-z]{2}$/.test(segment) && !routing.locales.includes(segment as never)

  if (isUnknownLocale) {
    return NextResponse.redirect(new URL(`/${country}`, req.url))
  }

  return i18nRes
}

// config
export const config = {
  matcher: [
    '/((?!_next|_next/static|_next/image|_vercel|static|.well-known|fonts|sitemap|images|icons|robots|webmanifest|.*\\.xml$|.*\\.webp$|.*\\.avif$|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.ico$|.*\\.svg$|.*\\.txt$|.*\\.js$|.*\\.css$).*)',
  ],
}
