import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { EAssetImage } from '@/app/shared/interfaces'

import { Providers } from '@/app/shared/ui'
import { Header } from '@/app/widgets/header'
import { routing } from '@/pkg/locale'

import '@/config/styles/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata.layout' })
  const favicon = EAssetImage.FAVICON
  const ogImage = EAssetImage.OG_IMAGE

  return {
    icons: { icon: favicon },

    title: { default: t('title'), template: `%s | ${t('title')}` },
    description: t('description'),
    applicationName: t('title'),
    openGraph: {
      title: {
        default: t('title'),
        template: `%s | ${t('title')}`,
      },
      description: t('description'),
      siteName: t('title'),
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound()
  }
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} dark font-sans antialiased`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Providers>
            <Header />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
