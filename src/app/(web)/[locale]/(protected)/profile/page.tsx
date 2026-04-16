import type { NextPage } from 'next'

import { ProfileModuleComponent } from '@/app/modules/profile'
import { IParams } from '@/app/shared/interfaces'

// interface
interface IProps extends IParams {}

// page
const Page: NextPage<Readonly<IProps>> = (props: IProps) => {
  // render
  return <ProfileModuleComponent />
}

export default Page
