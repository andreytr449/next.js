'use client'

import { useTranslations } from 'next-intl'
import { FC } from 'react'

import { useAuthStore } from '@/app/shared/store'
import { Link } from '@/pkg/locale'

// interface
interface IProps {}

// component
const AuthButtonComponent: FC<Readonly<IProps>> = (props) => {
  const { user } = useAuthStore()

  const t = useTranslations('Header')

  // render
  return (
    <Link href={user ? '/profile' : '/auth'} className='bg-foreground rounded-2xl px-2'>
      <span className='text-background text-xs font-medium'>{user ? t('profile-btn') : t('button')}</span>
    </Link>
  )
}

export default AuthButtonComponent
