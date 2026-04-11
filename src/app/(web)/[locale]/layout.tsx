import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { FC, ReactNode } from 'react'

import { EAssetImage, IParams } from '@/app/shared/interfaces'
import { HeaderComponent } from '@/app/widgets/header'
import { fontPrimary, fontSecondary } from '@/config/fonts'
import { routing } from '@/pkg/locale'
import { RestApiProvider } from '@/pkg/rest-api'

import '@/config/styles/global.css'

// interface
interface IProps extends IParams {
  children: ReactNode
}

// static params
export const generateStaticParams = async () => {
  return routing.locales.map((locale) => ({ locale }))
}

// metadata
export async function generateMetadata({ params }: IParams): Promise<Metadata> {
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

// component
const LocaleLayout: FC<Readonly<IProps>> = async (props: IProps) => {
  const { children, params } = props

  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale)

  // render
  return (
    <html lang={locale}>
      <body className={`${fontPrimary.variable} ${fontSecondary.variable} dark font-sans antialiased`}>
        <NextIntlClientProvider locale={locale}>
          <RestApiProvider>
            <HeaderComponent />
            {children}
          </RestApiProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
