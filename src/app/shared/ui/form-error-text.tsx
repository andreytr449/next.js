import { AlertCircle } from 'lucide-react'

interface FormErrorTextProps {
  message?: string
  className?: string
}

export const FormErrorText = ({ message, className }: FormErrorTextProps) => {
  if (!message) return null

  return (
    <p className={`flex items-center gap-1.5 text-sm text-red-500 ${className ?? ''}`}>
      <AlertCircle className='size-3.5 shrink-0' />
      <span>{message}</span>
    </p>
  )
}
