import { getMovieById } from '@/app/entities/api/movies/movies.api'
import { MovieModule } from '@/app/modules/movie'
import NotFoundMoviePage from '../not-found'
import { getTranslations } from 'next-intl/server'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const { results, success } = await getMovieById(id)
  if (!success || !results) {
    const t = await getTranslations('NotFoundMovie')
    return {
      title: t('label'),
    }
  }

  return {
    title: `${results.title}`,
  }
}

export default async function ItemPage({ params }: Props) {
  const { id } = await params
  const { results, success } = await getMovieById(id)

  if (!results || !success) return <NotFoundMoviePage />

  return <MovieModule {...results} />
}
