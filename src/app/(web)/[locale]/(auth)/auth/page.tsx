import type { Metadata, NextPage } from 'next'
import { getTranslations } from 'next-intl/server'

import { AuthModuleComponent } from '@/app/modules/auth'
import { IParams } from '@/app/shared/interfaces'

// interface
interface IProps extends IParams {}

// metadata
export async function generateMetadata(props: IProps): Promise<Metadata> {
  const { locale } = await props.params
  const t = await getTranslations({ locale, namespace: 'Metadata.auth' })

  return {
    title: { default: t('title'), template: `${t('title')} | %s` },
    description: t('description'),
  }
}

// component
const AuthPage: NextPage<Readonly<IProps>> = (props) => {
  const {} = props

  // render
  return <AuthModuleComponent />
}

export default AuthPage
