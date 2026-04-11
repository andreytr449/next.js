import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

import { TMDB_IMAGE_BASE } from '@/app/shared/constants'

// interface
interface IProps {
  backdrop_path: string
  poster_path: string
  tagline: string
  runtime: string
  original_language: string
  title: string
  genres: { id: number; name: string }[]
}

// component
const MovieHeroComponent: FC<Readonly<IProps>> = (props) => {
  const { backdrop_path, poster_path, tagline, runtime, original_language, title, genres } = props

  const t = useTranslations('MovieHero')

  // render
  return (
    <div className='relative h-[500px] w-full overflow-hidden'>
      <Image
        width={1920}
        height={1080}
        src={TMDB_IMAGE_BASE + backdrop_path}
        alt=''
        className='absolute inset-0 h-full w-full scale-105 object-cover opacity-20 blur-sm'
      />

      <div className='absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black' />

      <div className='relative z-10 flex h-full items-end gap-8 px-10 pb-10'>
        <div className='h-48 w-32 shrink-0 overflow-hidden rounded-lg border border-zinc-700/50 shadow-2xl'>
          <Image
            width={1920}
            height={1080}
            src={TMDB_IMAGE_BASE + poster_path}
            alt={t('posterAlt')}
            className='h-full w-full object-cover'
          />
        </div>

        <div className='flex flex-col gap-3'>
          <p className='text-xs tracking-[4px] text-zinc-500 uppercase'>{tagline}</p>

          <h1 className='text-6xl leading-none font-light tracking-tight'>{title}</h1>

          <div className='flex flex-wrap gap-2'>
            {genres.map((g, index) => (
              <span
                key={g.id + g.name + index}
                className='rounded-full border border-zinc-600 px-3 py-1 text-xs tracking-widest text-zinc-400 uppercase'
              >
                {g.name}
              </span>
            ))}
          </div>

          <div className='flex flex-wrap items-center gap-4 text-xs text-zinc-500'>
            <span className='h-1 w-1 rounded-full bg-zinc-700' />

            <span>
              {runtime} {t('runtime')}
            </span>

            <span className='h-1 w-1 rounded-full bg-zinc-700' />

            <span>{original_language}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieHeroComponent
