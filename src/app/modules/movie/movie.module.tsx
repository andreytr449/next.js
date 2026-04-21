'use client'

import type { FC } from 'react'

import { useMovieByIdQuery } from '@/app/entities/api/movies'
import { NotFoundComponent } from '@/app/modules/not-found'

import { BackButtonComponent } from './elements/back-button'
import { MovieBodyComponent } from './elements/movie-body'
import { MovieHeroComponent } from './elements/movie-hero'

// interface
interface IProps {
  id: string
}

// component
const MovieModuleComponent: FC<Readonly<IProps>> = (props) => {
  const { id } = props

  const { data: movie } = useMovieByIdQuery(id)

  if (!movie || 'success' in movie) return <NotFoundComponent />

  // render
  return (
    <div className='relative min-h-screen'>
      <BackButtonComponent />

      <MovieHeroComponent
        backdrop_path={movie.backdrop_path}
        poster_path={movie.poster_path}
        tagline={movie.tagline}
        runtime={movie.runtime}
        original_language={movie.original_language}
        title={movie.title}
        genres={movie.genres}
      />

      <MovieBodyComponent
        overview={movie.overview}
        status={movie.status}
        vote_average={movie.vote_average}
        release_date={movie.release_date}
        popularity={movie.popularity}
        runtime={movie.runtime}
        original_language={movie.original_language}
        vote_count={movie.vote_count}
        imdb_id={movie.imdb_id}
        production_companies={movie.production_companies}
      />
    </div>
  )
}

export default MovieModuleComponent
