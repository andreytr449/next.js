import { Button } from '@/app/shared/ui'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default async function NotFoundPage() {
  const t = await getTranslations('NotFound')

  return (
    <html>
      <body className={`${geistSans.variable} ${geistMono.variable} dark font-sans antialiased`}>
        <div className='grid min-h-screen grid-cols-1 lg:grid-cols-2'>
          <div className='flex flex-col items-center justify-center px-4 py-8 text-center'>
            <h2 className='mb-6 text-5xl font-semibold'>{t('title')}</h2>
            <h3 className='mb-1.5 text-3xl font-semibold'>{t('subtitle')}</h3>
            <p className='text-muted-foreground mb-6 max-w-sm'>{t('description')}</p>
            <Button asChild size='lg' className='rounded-lg text-base'>
              <Link href='/'>{t('button')}</Link>
            </Button>
          </div>

          <div className='relative max-h-screen w-full p-2 max-lg:hidden'>
            <div className='h-full w-full rounded-2xl bg-black'></div>
            <Image
              width={1920}
              height={1080}
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/error/image-1.png'
              alt='404 illustration'
              className='absolute top-1/2 left-1/2 h-[clamp(260px,25vw,406px)] -translate-x-1/2 -translate-y-1/2'
            />
          </div>
        </div>
      </body>
    </html>
  )
}
