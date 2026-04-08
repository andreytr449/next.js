import { AlertCircle } from 'lucide-react'
import { FC } from 'react'

// interface
interface IProps {
  message?: string
  className?: string
}

// component
const FormErrorTextComponent: FC<Readonly<IProps>> = (props) => {
  const { message, className } = props

  if (!message) return null

  // render
  return (
    <p className={`flex items-center gap-1.5 text-sm text-red-500 ${className ?? ''}`}>
      <AlertCircle className='size-3.5 shrink-0' />
      <span>{message}</span>
    </p>
  )
}

export default FormErrorTextComponent
