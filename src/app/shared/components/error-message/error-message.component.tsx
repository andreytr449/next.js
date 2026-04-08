import { AlertCircleIcon } from 'lucide-react'
import { FC } from 'react'

import { Button } from '@/pkg/theme/components/button'

// interface
interface IProps {
  message?: string
  onRetry?: () => void
}

// component
const ErrorMessageComponent: FC<Readonly<IProps>> = (props) => {
  const { message, onRetry } = props

  // render
  return (
    <div className='flex flex-col items-center gap-3 py-12 text-center'>
      <AlertCircleIcon className='text-destructive size-10' />
      <p className='text-muted-foreground text-sm'>{message}</p>
      {onRetry && (
        <Button variant='outline' onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  )
}

export default ErrorMessageComponent
