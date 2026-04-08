import { getTranslations } from 'next-intl/server'
import type { FC } from 'react'

import { Link } from '@/pkg/locale'

// interface
interface IProps {}

// component
const HomeModuleComponent: FC<Readonly<IProps>> = async (props) => {
  const {} = props

  const t = await getTranslations('Home')

  // render
  return (
    <main className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] px-8 text-center'>
      <div className='absolute inset-0 bg-[linear-gradient(#1a1a1a_1px,transparent_1px),linear-gradient(90deg,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-35' />
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0a0a0a_75%)]' />

      <div className='relative flex flex-col items-center'>
        <span className='mb-8 flex items-center gap-2 rounded-full border border-[#222] px-3 py-1 text-[12px] text-[#888]'>
          <span className='h-1.5 w-1.5 rounded-full bg-green-400' />

          {t('badge')}
        </span>

        <h1 className='mb-5 max-w-2xl text-5xl leading-tight font-medium tracking-tighter text-[#ededed]'>
          {t('title')}

          <br />

          <span className='text-[#888]'> {t('subtitle')}</span>
        </h1>

        <p className='mb-10 max-w-sm text-base leading-relaxed font-light text-[#666]'>{t('description')}</p>

        <div className='flex gap-3'>
          <Link
            href='/items'
            className='rounded-md bg-[#ededed] px-5 py-2.5 text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-white'
          >
            {t('button')}
          </Link>
        </div>
      </div>
    </main>
  )
}

export default HomeModuleComponent
