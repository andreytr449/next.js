import { NextPage } from 'next'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { getMovies } from '@/app/entities/api/movies'
import { MoviesModuleComponent } from '@/app/modules/movies'
import { getQueryClient } from '@/pkg/rest-api'

export const revalidate = 3600

// interface
interface IProps {}

// component
const HomePage: NextPage<Readonly<IProps>> = (props) => {
  const {} = props

  const queryClient = getQueryClient()

  queryClient.prefetchQuery({
    queryKey: ['movies'],
    queryFn: getMovies,
  })

  const dehydratedState = dehydrate(queryClient)

  // render
  return (
    <HydrationBoundary state={dehydratedState}>
      <MoviesModuleComponent />
    </HydrationBoundary>
  )
}

export default HomePage
