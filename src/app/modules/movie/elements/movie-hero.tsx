import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

interface IProps {
  backdrop_path: string
  poster_path: string
  tagline: string
  runtime: string
  original_language: string
  title: string
  genres: { id: number; name: string }[]
}
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w500'

export async function MovieHero(props: IProps) {
  const t = await getTranslations('MovieHero')

  return (
    <div className='relative h-[500px] w-full overflow-hidden'>
      <Image
        width={1920}
        height={1080}
        src={TMDB_IMAGE_BASE + props.backdrop_path}
        alt=''
        className='absolute inset-0 h-full w-full scale-105 object-cover opacity-20 blur-sm'
      />
      <div className='absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black' />

      <div className='relative z-10 flex h-full items-end gap-8 px-10 pb-10'>
        <div className='h-48 w-32 shrink-0 overflow-hidden rounded-lg border border-zinc-700/50 shadow-2xl'>
          <Image
            width={1920}
            height={1080}
            src={TMDB_IMAGE_BASE + props.poster_path}
            alt={t('posterAlt')}
            className='h-full w-full object-cover'
          />
        </div>

        <div className='flex flex-col gap-3'>
          <p className='text-xs tracking-[4px] text-zinc-500 uppercase'>{props.tagline}</p>
          <h1 className='text-6xl leading-none font-light tracking-tight'>{props.title}</h1>
          <div className='flex flex-wrap gap-2'>
            {props.genres.map((g, index) => (
              <span
                key={g.id + index}
                className='rounded-full border border-zinc-600 px-3 py-1 text-xs tracking-widest text-zinc-400 uppercase'
              >
                {g.name}
              </span>
            ))}
          </div>
          <div className='flex flex-wrap items-center gap-4 text-xs text-zinc-500'>
            <span className='h-1 w-1 rounded-full bg-zinc-700' />
            <span>
              {props.runtime} {t('runtime')}
            </span>
            <span className='h-1 w-1 rounded-full bg-zinc-700' />
            <span>{props.original_language}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
