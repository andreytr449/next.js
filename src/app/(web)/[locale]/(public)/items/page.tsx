import { MoviesModule } from '@/app/modules/movies'
import { dehydrate } from '@tanstack/react-query'
import { getQueryClient } from '@/pkg/query'
import { getMovies } from '@/app/entities/api/movies'

export const revalidate = 3600

export default async function Home() {
  const queryClient = getQueryClient()

  queryClient.prefetchQuery({
    queryKey: ['movies'],
    queryFn: getMovies,
  })

  const dehydratedState = dehydrate(queryClient)
  return <MoviesModule dehydratedState={dehydratedState} />
}
