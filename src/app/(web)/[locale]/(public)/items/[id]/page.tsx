import type { Metadata, NextPage } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { getMovieById, moviesByIdQueryOptions } from '@/app/entities/api/movies/'
import { MovieModuleComponent } from '@/app/modules/movie'
import { IParams } from '@/app/shared/interfaces'
import { getQueryClient } from '@/pkg/rest-api'

// interface
interface IProps extends IParams {
  params: Promise<{ id: string; locale: string }>
}

// metadata
export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const { id } = await params
  const results = await getMovieById(id)

  if (!results || 'success' in results) {
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

  const movie = await getMovieById(id)

  if (!movie) notFound()

  const queryClient = getQueryClient()

  queryClient.setQueryData(moviesByIdQueryOptions(id).queryKey, movie)

  const dehydratedState = dehydrate(queryClient)

  // render
  return (
    <HydrationBoundary state={dehydratedState}>
      <MovieModuleComponent id={id} />
    </HydrationBoundary>
  )
}

export default MoviePage
