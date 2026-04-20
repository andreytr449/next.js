import { Metadata, NextPage } from 'next'
import { getTranslations } from 'next-intl/server'

import { HomeModuleComponent } from '@/app/modules/home'
import { IParams } from '@/app/shared/interfaces'

// interface
interface IProps extends IParams {}

// metadata
export const generateMetadata = async ({ params }: IProps): Promise<Metadata> => {
  const { locale } = await params

  const t = await getTranslations({ locale, namespace: 'Metadata.home' })

  return {
    title: { default: t('title'), template: `${t('title')} | %s` },
    description: t('description'),
  }
}

// page
const Page: NextPage<Readonly<IProps>> = (props: IProps) => {
  // render
  return <HomeModuleComponent />
}

export default Page
