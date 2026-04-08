import type { NextPage } from 'next'

import { AuthModuleComponent } from '@/app/modules/auth'

// interface
interface IProps {}

// component
const SignUp: NextPage<Readonly<IProps>> = (props) => {
  const {} = props
  // render
  return <AuthModuleComponent />
}

export default SignUp
