import { type NextPage } from 'next'

import { NotFoundComponent } from '@/app/modules/not-found'

// interface
interface IProps {}

// component
const NotFound: NextPage<Readonly<IProps>> = (props) => {
  const {} = props

  // render
  return <NotFoundComponent />
}

export default NotFound
