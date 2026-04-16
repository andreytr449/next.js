import { queryOptions } from '@tanstack/react-query'

import { getMovieById, getMovies } from './movies.api'

export const MOVIES_QUERY_KEY = ['movies']

// options
export const moviesQueryOptions = () => {
  return queryOptions({ queryKey: MOVIES_QUERY_KEY, queryFn: getMovies })
}

export const moviesByIdQueryOptions = (movieId: string) => {
  return queryOptions({ queryKey: [...MOVIES_QUERY_KEY, movieId], queryFn: () => getMovieById(movieId) })
}
