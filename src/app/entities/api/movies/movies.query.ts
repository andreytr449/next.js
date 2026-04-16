import { useQuery, useSuspenseQuery } from '@tanstack/react-query'

import { moviesByIdQueryOptions, moviesQueryOptions } from './movies.options'

// use queries
export const useMoviesQuery = () => {
  return useSuspenseQuery(moviesQueryOptions())
}

export const useMovieByIdQuery = (movieId: string) => {
  return useQuery(moviesByIdQueryOptions(movieId))
}
