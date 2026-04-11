import { queryOptions } from '@tanstack/react-query'

import { getMovieById, getMovies } from './movies.api'

export const MOVIES_QUERY_KEY = ['movies']

// options
export const moviesQueryOptions = queryOptions({ queryKey: MOVIES_QUERY_KEY, queryFn: getMovies })

export const moviesByIdQueryOptions = (movieId: string) =>
  queryOptions({ queryKey: [...MOVIES_QUERY_KEY, movieId], queryFn: () => getMovieById(movieId) })
