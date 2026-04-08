import { NextPage } from 'next'

import { MovieDetailsSkeleton } from '@/app/shared/components/movie-details-skeleton'

// interface
interface IProps {}

// component
const MovieDetailsLoading: NextPage<Readonly<IProps>> = () => {
  // render
  return <MovieDetailsSkeleton />
}

export default MovieDetailsLoading
