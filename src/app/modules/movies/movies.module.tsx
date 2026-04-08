import { getTranslations } from 'next-intl/server'
import { FC } from 'react'

import { MovieListComponent } from '@/app/widgets/movie-list'
import { Badge } from '@/pkg/theme/components/badge'

// interface
interface IProps {}

// component
const MoviesModuleComponent: FC<Readonly<IProps>> = async () => {
  const t = await getTranslations('Items')

  // render
  return (
    <main className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-8'>
        <div className='space-y-4'>
          <Badge variant='outline' className='text-sm'>
            {t('tag')}
          </Badge>

          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>{t('title')}</h2>

          <p className='text-muted-foreground text-lg md:text-xl'>{t('description')}</p>
        </div>
        <MovieListComponent />
      </div>
    </main>
  )
}

export default MoviesModuleComponent
