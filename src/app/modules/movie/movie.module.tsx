import type { FC } from 'react'

import { Movie } from '@/app/entities/models'

import { BackButtonComponent, MovieBodyComponent, MovieHeroComponent } from './elements'

// interface
interface IProps {
  movie: Movie
}

// component
const MovieModuleComponent: FC<Readonly<IProps>> = async (props) => {
  const { movie } = props

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
