import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { routing } from '@/pkg/locale'
import { notFound } from 'next/navigation'
import { getMessages, getTranslations } from 'next-intl/server'
import { Providers } from '@/app/shared/ui'
import { Header } from '@/app/widgets/header'
import { Geist, Geist_Mono } from 'next/font/google'

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

  return {
    title: t('title'),
    description: t('description'),
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
