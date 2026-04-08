import { FC } from 'react'

import { MovieCardSkeleton } from '@/app/shared/components/movie-card-skeleton'

// interface
interface IProps {
  count?: number
}

// component
const MovieListSkeleton: FC<Readonly<IProps>> = (props) => {
  const { count = 6 } = props

  // render
  return Array.from({ length: count }).map((_, i) => <MovieCardSkeleton key={i} />)
}

export default MovieListSkeleton
