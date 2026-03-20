import { Link } from '@/pkg/locale'
import { getTranslations } from 'next-intl/server'

export default async function NotFound() {
  const t = await getTranslations('NotFoundMovie')

  return (
    <div className='flex min-h-dvh flex-col overflow-hidden bg-[#0d0d0d]'>
      <div className='flex flex-1 flex-col items-center justify-center px-6 text-center'>
        <p className='text-404 select-none'>404</p>

        <div className='mt-5 mb-6 flex w-full max-w-sm items-center gap-3.5'>
          <div className='h-px flex-1 bg-white/[0.07]' />
          <span className='font-mono-dm text-[9px] tracking-[0.22em] text-white/20 uppercase'>{t('label')}</span>
          <div className='h-px flex-1 bg-white/[0.07]' />
        </div>

        <p className='font-mono-dm mb-9 max-w-xs text-[13px] leading-[1.75] text-white/25 italic'>{t('description')}</p>

        <Link
          href='/items'
          className='font-mono-dm rounded-sm border border-white/15 px-7 py-2.5 text-[11px] tracking-[0.15em] text-white/45 uppercase transition-colors hover:border-white/35 hover:text-white/85'
        >
          {t('back')}
        </Link>
      </div>
    </div>
  )
}
