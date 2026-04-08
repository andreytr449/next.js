import type { Metadata, NextPage } from 'next'
import { getTranslations } from 'next-intl/server'

import { getMovieById } from '@/app/entities/api/movies/'
import { MovieModuleComponent } from '@/app/modules/movie'

import NotFoundMoviePage from '../not-found'

// interface
interface IProps {
  params: Promise<{ id: string }>
}

// metadata
export async function generateMetadata({ params }: IProps): Promise<Metadata> {
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

// component
const MoviePage: NextPage<Readonly<IProps>> = async (props) => {
  const { params } = props

  const { id } = await params
  const results = await getMovieById(id)

  if (!results) return <NotFoundMoviePage />

  // render
  return <MovieModuleComponent movie={results} />
}

export default MoviePage
