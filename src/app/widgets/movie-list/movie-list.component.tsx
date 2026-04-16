'use client'

import type { FC } from 'react'

import { useMoviesQuery } from '@/app/entities/api/movies'

import { MovieCardComponent } from './elements/movie-card'

// interface
interface IProps {}

// component
const MovieListComponent: FC<Readonly<IProps>> = (props) => {
  const { data, error } = useMoviesQuery()

  if (error || 'success' in data) throw new Error(error?.message || 'Failed to fetch movies')

  const movies = data?.results || []

  // render
  return (
    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {movies?.map((movie) => (
        <MovieCardComponent
          key={'movie-' + movie.id}
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
      {movies?.length === 0 && <div className='text-muted-foreground col-span-full text-center'>No movies found</div>}
    </div>
  )
}

export default MovieListComponent
