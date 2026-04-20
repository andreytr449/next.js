import type { Metadata, NextPage } from 'next'
import { getTranslations } from 'next-intl/server'

import { ProfileModuleComponent } from '@/app/modules/profile'
import { IParams } from '@/app/shared/interfaces'

// interface
interface IProps extends IParams {}

// metadata
export async function generateMetadata(params: IProps): Promise<Metadata> {
  const { locale } = await params.params

  const t = await getTranslations({ locale, namespace: 'Metadata.profile' })

  return {
    title: { default: t('title'), template: `${t('title')} | %s` },
    description: t('description'),
  }
}

// page
const Page: NextPage<Readonly<IProps>> = (props: IProps) => {
  // render
  return <ProfileModuleComponent />
}

export default Page
