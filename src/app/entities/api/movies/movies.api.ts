'use server'

import { getLocale } from 'next-intl/server'

import { TMovieResponse, TMoviesResponse } from '@/app/entities/models'
import { localeToLanguage } from '@/app/shared/constants'
import { tmdbApiFetcher } from '@/pkg/rest-api/fetcher'

// get movies
export const getMovies = async (): Promise<TMoviesResponse> => {
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
    .json<TMoviesResponse>()
}

// get movie by id
export const getMovieById = async (movieId: string): Promise<TMovieResponse> => {
  const locale = await getLocale()
  const language = localeToLanguage[locale]

  const response = await tmdbApiFetcher
    .get(`movie/${movieId}`, {
      searchParams: {
        language,
      },
    })
    .json<TMovieResponse>()

  return response
}
