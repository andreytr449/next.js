import { useTranslations } from 'next-intl'
import type { FC } from 'react'

import { InfoRowComponent } from '@/app/shared/components/info-row'
import { RatingCircleComponent } from '@/app/shared/components/rating-circle'
import { StatCardComponent } from '@/app/shared/components/statistc-card'

// interface
interface IProps {
  overview: string
  status: string
  vote_average: number
  release_date: string
  popularity: number
  runtime: string
  original_language: string
  vote_count: number
  imdb_id: string
  production_companies: { name: string; origin_country: string }[]
}

// component
const MovieBodyComponent: FC<Readonly<IProps>> = (props) => {
  const {
    overview,
    status,
    vote_average,
    release_date,
    popularity,
    runtime,
    original_language,
    vote_count,
    imdb_id,
    production_companies,
  } = props

  const t = useTranslations('MovieBody')

  // render
  return (
    <div className='mx-auto max-w-5xl px-10 py-12'>
      <div className='mb-12'>
        <p className='mb-4 text-xs tracking-[3px] text-zinc-600 uppercase'>{t('overview')}</p>

        <p className='max-w-2xl text-base leading-relaxed text-zinc-400'>{overview}</p>
      </div>

      <div className='mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4'>
        <div className='rounded-xl border border-zinc-800 bg-zinc-900 p-5'>
          <p className='mb-3 text-xs tracking-widest text-zinc-500 uppercase'>{t('rating')}</p>

          <div className='flex items-center gap-3'>
            <RatingCircleComponent score={vote_average} />

            <div>
              <span className='text-2xl font-light'>{vote_average}</span>

              <span className='text-sm text-zinc-600'>/10</span>

              <p className='mt-0.5 text-xs text-zinc-600'>
                {vote_count} {t('votes')}
              </p>
            </div>
          </div>
        </div>

        <StatCardComponent label='Budget' value='$50M' sub='Production cost' />

        <StatCardComponent label='Revenue' value='$42M' sub='Box office' />

        <StatCardComponent label='Popularity' value={popularity} sub='Trending index' />
      </div>

      <hr className='mb-12 border-zinc-800/50' />

      <div className='mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2'>
        <div>
          <p className='mb-2 text-xs tracking-[3px] text-zinc-600 uppercase'>{t('details')}</p>

          <InfoRowComponent label='Release date' value={release_date} />
          <InfoRowComponent label='Runtime' value={runtime} />

          <InfoRowComponent label='Status' value={status} />

          <InfoRowComponent label='Language' value={original_language} />

          <InfoRowComponent
            label='IMDB ID'
            value={<span className='font-mono text-xs text-zinc-500'>{imdb_id}</span>}
          />
        </div>

        <div>
          <p className='mb-2 text-xs tracking-[3px] text-zinc-600 uppercase'>{t('production')}</p>

          {production_companies.map((c, i) => (
            <div key={i} className='flex items-center justify-between border-b border-zinc-800/60 py-3'>
              <span className='text-sm text-zinc-300'>{c.name}</span>
              <span className='rounded border border-zinc-700 px-2 py-0.5 text-xs text-zinc-500'>
                {c.origin_country}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieBodyComponent
