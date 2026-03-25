'use client'

import { useTranslations } from 'next-intl'

import { useAuthStore } from '@/app/shared/store'
import { Button } from '@/app/shared/ui'
import { Link } from '@/pkg/locale'

export const AuthButton = () => {
  const { logout, user } = useAuthStore()

  const t = useTranslations('Header')

  if (!user)
    return (
      <Link className='bg-foreground rounded-2xl px-2' href='/auth/'>
        <span className='text-background text-xs font-medium'>{t('button')}</span>
      </Link>
    )

  return (
    <Button onClick={logout} className='text-background text-xs font-medium'>
      {t('logout-btn')}
    </Button>
  )
}
