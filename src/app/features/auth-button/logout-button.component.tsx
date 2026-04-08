'use client'

import { useTranslations } from 'next-intl'
import { FC } from 'react'

import { useAuthStore } from '@/app/shared/store'
import { Link } from '@/pkg/locale'
import { Button } from '@/pkg/theme/components/button'

// interface
interface IProps {}

// component
const AuthButtonComponent: FC<Readonly<IProps>> = (props) => {
  const {} = props

  const { logout, user } = useAuthStore()

  const t = useTranslations('Header')

  if (!user)
    return (
      <Link className='bg-foreground rounded-2xl px-2' href='/auth/'>
        <span className='text-background text-xs font-medium'>{t('button')}</span>
      </Link>
    )

  // render
  return (
    <Button onClick={logout} className='text-background text-xs font-medium'>
      {t('logout-btn')}
    </Button>
  )
}

export default AuthButtonComponent
