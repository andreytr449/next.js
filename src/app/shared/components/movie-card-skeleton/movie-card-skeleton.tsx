import type { FC } from 'react'

import { Card, CardContent } from '@/pkg/theme/components/card'

// interface
interface IProps {}

// component
const MovieCardSkeleton: FC<Readonly<IProps>> = (props) => {
  const {} = props

  // render
  return (
    <Card className='h-full overflow-hidden shadow-none'>
      <CardContent className='space-y-3.5'>
        <div className='mb-6 sm:mb-12'>
          <div className='bg-muted h-59.5 w-full animate-pulse rounded-lg' />
        </div>

        <div className='flex items-center justify-between gap-1.5'>
          <div className='flex items-center gap-1.5'>
            <div className='bg-muted size-6 animate-pulse rounded' />
            <div className='bg-muted h-4 w-20 animate-pulse rounded' />
          </div>
          <div className='bg-muted h-6 w-16 animate-pulse rounded-full' />
        </div>

        <div className='space-y-2'>
          <div className='bg-muted h-5 w-full animate-pulse rounded' />
          <div className='bg-muted h-5 w-3/4 animate-pulse rounded' />
        </div>

        <div className='space-y-2'>
          <div className='bg-muted h-4 w-full animate-pulse rounded' />
          <div className='bg-muted h-4 w-5/6 animate-pulse rounded' />
        </div>

        <div className='flex items-center justify-between'>
          <div className='bg-muted h-4 w-24 animate-pulse rounded' />
          <div className='bg-muted size-9 animate-pulse rounded-md' />
        </div>
      </CardContent>
    </Card>
  )
}

export default MovieCardSkeleton
