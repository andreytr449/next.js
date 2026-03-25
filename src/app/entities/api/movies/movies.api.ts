'use server'

import { getLocale } from 'next-intl/server'

import { Movie, MoviesResponse } from '@/app/entities/models'
import { tmdbApi } from '@/pkg/query/ky-instance'

const localeToLanguage: Record<string, string> = {
  en: 'en-US',
  de: 'de-DE',
}

export const getMovies = async (): Promise<MoviesResponse> => {
  const locale = await getLocale()
  const language = localeToLanguage[locale]

  return tmdbApi
    .get('movie/now_playing', {
      searchParams: {
        language: language,
        page: 1,
        include_adult: false,
      },
    })
    .json<MoviesResponse>()
}

export const getMovieById = async (movieId: string): Promise<Movie> => {
  const locale = await getLocale()
  const language = localeToLanguage[locale]

  return tmdbApi
    .get(`movie/${movieId}`, {
      searchParams: {
        language: language,
      },
    })
    .json<Movie>()
}
