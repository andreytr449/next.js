'use client'

import { MovieCard } from './elements'
import { useMoviesQuery } from '@/app/entities/api/movies'
import { ErrorMessage, MovieListSkeleton } from '@/app/shared/ui'

export const MovieList = () => {
  const { data, isLoading, error } = useMoviesQuery()
  if (isLoading) return <MovieListSkeleton />
  if (error) return <ErrorMessage message={error.message} />

  const movies = data?.results
  return (
    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {movies &&
        movies.map((movie) => (
          <MovieCard
            key={'movie' + movie.id}
            adult={movie.adult}
            backdrop_path={movie.backdrop_path}
            genre_ids={movie.genre_ids}
            vote_count={movie.vote_count}
            id={movie.id}
            original_language={movie.original_language}
            overview={movie.overview}
            popularity={movie.popularity}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            title={movie.title}
            video={movie.video}
            vote_average={movie.vote_average}
          />
        ))}
    </div>
  )
}
