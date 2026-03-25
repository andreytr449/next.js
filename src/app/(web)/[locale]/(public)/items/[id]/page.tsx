import { getTranslations } from 'next-intl/server'

import { getMovieById } from '@/app/entities/api/movies/'
import { MovieModule } from '@/app/modules/movie'

import NotFoundMoviePage from '../not-found'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const results = await getMovieById(id)

  if (!results) {
    const t = await getTranslations('NotFoundMovie')
    return {
      title: t('label'),
    }
  }

  return {
    title: `${results.title}`,
  }
}

export default async function MoviePage({ params }: Props) {
  const { id } = await params
  const results = await getMovieById(id)

  console.log(results)
  if (!results) return <NotFoundMoviePage />

  return <MovieModule {...results} />
}
