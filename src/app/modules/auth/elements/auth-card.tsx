import { AuthBackgroundShape, Logo } from '@/app/shared/assets'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/shared/ui'

interface AuthCardProps {
  title: string
  description: string
  footer: {
    text: string
    linkText: string
    onSwitch: () => void
  }
  children: React.ReactNode
}

export const AuthCard = ({ title, description, footer, children }: AuthCardProps) => {
  return (
    <div className='relative flex h-auto min-h-screen items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8'>
      <div className='absolute'>
        <AuthBackgroundShape />
      </div>

      <Card className='z-1 w-full border-none shadow-md sm:max-w-lg'>
        <CardHeader className='gap-6'>
          <Logo className='gap-3' />
          <div>
            <CardTitle className='mb-1.5 text-2xl'>{title}</CardTitle>
            <CardDescription className='text-base'>{description}</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <div className='space-y-4'>
            {children}

            <p className='text-muted-foreground text-center'>
              {footer.text}{' '}
              <button onClick={footer.onSwitch} className='text-card-foreground hover:underline'>
                {footer.linkText}
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
