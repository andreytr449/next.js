import { ArrowRightIcon, CalendarDaysIcon, StarIcon } from 'lucide-react'
import Image from 'next/image'
import type { FC } from 'react'

import { Movie } from '@/app/entities/models'
import { TMDB_IMAGE_BASE } from '@/app/shared/constants'
import { Link } from '@/pkg/locale'
import { Badge } from '@/pkg/theme/components/badge'
import { Button } from '@/pkg/theme/components/button'
import { Card } from '@/pkg/theme/components/card'
import { CardContent } from '@/pkg/theme/components/card'

// interface
interface IMovieCardProps extends Pick<
  Movie,
  | 'id'
  | 'title'
  | 'overview'
  | 'poster_path'
  | 'release_date'
  | 'vote_average'
  | 'vote_count'
  | 'original_language'
  | 'adult'
  | 'backdrop_path'
  | 'genre_ids'
  | 'popularity'
  | 'video'
> {
  id: number
  title: string
  overview: string
  poster_path: string
  release_date: string
  vote_average: number
  vote_count: number
  original_language: string
}

// component
const MovieCardComponent: FC<Readonly<IMovieCardProps>> = (props) => {
  const { id, title, overview, poster_path, release_date, vote_average, vote_count, original_language } = props

  const movieLink = `/items/${id}`
  const releaseYear = release_date?.slice(0, 4)
  const rating = vote_average?.toFixed(1)

  // render
  return (
    <Card data-testid='movie-card' className='group h-full overflow-hidden shadow-none transition-all duration-300'>
      <CardContent className='space-y-3.5'>
        <div className='mb-6 overflow-hidden rounded-lg sm:mb-12'>
          <Link href={movieLink}>
            <Image
              src={`${TMDB_IMAGE_BASE}${poster_path}`}
              alt={title}
              width={500}
              height={900}
              className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
            />
          </Link>
        </div>

        <div className='flex items-center justify-between gap-1.5'>
          <div className='text-muted-foreground flex items-center gap-1.5'>
            <CalendarDaysIcon className='size-4' />

            <span>{releaseYear}</span>
          </div>

          <Badge className='bg-primary/10 text-primary rounded-full border-0 text-sm uppercase'>
            {original_language}
          </Badge>
        </div>

        <h3 data-testid='movie-card-title' className='line-clamp-2 text-lg font-medium md:text-xl'>
          <Link data-testid='movie-card-link' href={movieLink}>
            {title}
          </Link>
        </h3>

        <p className='text-muted-foreground line-clamp-2'>{overview}</p>

        <div className='flex items-center justify-between'>
          <div className='text-muted-foreground flex items-center gap-1 text-sm font-medium'>
            <StarIcon className='size-4 fill-yellow-400 text-yellow-400' />

            <span>{rating}5</span>

            <span className='text-xs'>({vote_count})</span>
          </div>

          <Button
            size='icon'
            variant='outline'
            className='group-hover:bg-primary! group-hover:text-primary-foreground group-hover:border-primary hover:border-primary hover:bg-primary! hover:text-primary-foreground'
            asChild
          >
            <Link href={movieLink}>
              <ArrowRightIcon className='size-4 -rotate-45' />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default MovieCardComponent
