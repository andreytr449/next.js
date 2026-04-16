import type { Metadata, NextPage } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { getMovieById, getPopularMovies, moviesByIdQueryOptions } from '@/app/entities/api/movies'
import { MovieModuleComponent } from '@/app/modules/movie'
import { IParams } from '@/app/shared/interfaces'
import { routing } from '@/pkg/locale'
import { getQueryClient } from '@/pkg/rest-api'

// revalidate
export const revalidate = 3600

// interface
interface IProps extends IParams {
  params: Promise<{ id: string; locale: string }>
}

// generateStaticParams
export const generateStaticParams = async () => {
  const PAGES_TO_FETCH = 5

  const paths: { locale: string; id: string }[] = []

  try {
    for (const locale of routing.locales) {
      const pagePromises = Array.from({ length: PAGES_TO_FETCH }, (_, index) => getPopularMovies(index + 1, locale))

      const pagesResponses = await Promise.all(pagePromises)

      const localeMovies = pagesResponses.flatMap((response) => {
        if ('results' in response && Array.isArray(response.results)) {
          return response.results
        }
        return []
      })

      const localeParams = localeMovies.map((movie) => ({
        locale: locale,
        id: movie.id.toString(),
      }))

      paths.push(...localeParams)
    }
    return paths
  } catch (_) {
    return []
  }
}

// metadata
export async function generateMetadata(params: IProps): Promise<Metadata> {
  const { id } = await params.params

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

  await queryClient.fetchQuery(moviesByIdQueryOptions(id))

  const dehydratedState = dehydrate(queryClient)

  // render
  return (
    <HydrationBoundary state={dehydratedState}>
      <MovieModuleComponent id={id} />
    </HydrationBoundary>
  )
}

export default MoviePage
