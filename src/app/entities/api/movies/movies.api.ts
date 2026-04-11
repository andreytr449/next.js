'use server'

import { getLocale } from 'next-intl/server'

import { Movie, MoviesResponse } from '@/app/entities/models'
import { localeToLanguage } from '@/app/shared/constants'
import { IRestApiErrorResponse } from '@/app/shared/interfaces'
import { tmdbApiFetcher } from '@/pkg/rest-api/fetcher'

// get movies
export const getMovies = async (): Promise<MoviesResponse> => {
  const locale = await getLocale()
  const language = localeToLanguage[locale]

  return tmdbApiFetcher
    .get('movie/now_playing', {
      searchParams: {
        language,
      },
      next: {
        revalidate: 3600,
      },
    })
    .json<MoviesResponse>()
}

// get movie by id
export const getMovieById = async (movieId: string): Promise<Movie | null> => {
  const locale = await getLocale()
  const language = localeToLanguage[locale]

  const response = await tmdbApiFetcher
    .get(`movie/${movieId}`, {
      searchParams: {
        language,
      },
    })
    .json<Movie | IRestApiErrorResponse>()

  if ('success' in response && response.success === false) {
    return null
  }

  return response as Movie
}
