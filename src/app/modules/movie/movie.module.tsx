import { Movie } from '@/app/entities/models'

import { BackButton, MovieBody, MovieHero } from './elements'

export const MovieModule = async (props: Movie) => {
  return (
    <div className='relative min-h-screen'>
      <BackButton />
      <MovieHero
        genres={props.genres}
        title={props.title}
        backdrop_path={props.backdrop_path}
        original_language={props.original_language}
        poster_path={props.poster_path}
        runtime={props.runtime}
        tagline={props.tagline}
      />
      <MovieBody
        imdb_id={props.imdb_id}
        original_language={props.original_language}
        overview={props.overview}
        popularity={props.popularity}
        production_companies={props.production_companies}
        release_date={props.release_date}
        runtime={props.runtime}
        status={props.status}
        vote_average={props.vote_average}
        vote_count={props.vote_count}
      />
    </div>
  )
}
