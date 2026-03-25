import { AlertCircleIcon } from 'lucide-react'

import { Button } from './button'

interface ErrorMessageProps {
  message?: string
  onRetry?: () => void
}

export const ErrorMessage = ({ message = 'Error', onRetry }: ErrorMessageProps) => {
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
