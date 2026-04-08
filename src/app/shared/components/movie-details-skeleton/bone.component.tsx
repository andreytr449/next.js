import { FC } from 'react'

// interface
interface IProps {
  className?: string
  style?: React.CSSProperties
}

// component
const BoneComponent: FC<Readonly<IProps>> = (props) => {
  const { className = '', style = {} } = props

  // render
  return <div className={`skeleton-bone ${className}`} style={style} />
}

export default BoneComponent
