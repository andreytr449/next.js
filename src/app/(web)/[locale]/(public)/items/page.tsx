import { Metadata, NextPage } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { moviesQueryOptions } from '@/app/entities/api/movies'
import { MoviesModuleComponent } from '@/app/modules/movies'
import { IParams } from '@/app/shared/interfaces'
import { getQueryClient } from '@/pkg/rest-api'

// revalidate
export const revalidate = 3600

// interface
interface IProps extends IParams {}

// metadata
export async function generateMetadata(props: IProps): Promise<Metadata> {
  const { params } = props

  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata.items' })

  return {
    title: { default: t('title'), template: `${t('title')} | %s` },
    description: t('description'),
  }
}

// component
const MoviesPage: NextPage<Readonly<IProps>> = async (props) => {
  const { params } = props

  const { locale } = await params

  setRequestLocale(locale)

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery(moviesQueryOptions())

  const dehydratedState = dehydrate(queryClient)

  // render
  return (
    <HydrationBoundary state={dehydratedState}>
      <MoviesModuleComponent />
    </HydrationBoundary>
  )
}

export default MoviesPage
