'use client'

import { useTranslations } from 'next-intl'
import { useEffect, type FC } from 'react'

import { useAuthStore } from '@/app/shared/store'
import { useRouter } from '@/pkg/locale'
import { Button } from '@/pkg/theme/components/button'

// interface
interface IProps {}

// component
const ProfileModuleComponent: FC<Readonly<IProps>> = (props: IProps) => {
  const { user, logout } = useAuthStore()

  const router = useRouter()

  const t = useTranslations('Profile')

  useEffect(() => {
    if (!user) {
      router.replace('/auth')
    }
  }, [router, user])

  const handleLogout = () => {
    logout()
  }

  // render
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <h1 className='text-2xl font-bold'>{t('title')}</h1>

      <p className='text-sm text-gray-500'>
        {t('email')}: {user?.email}
      </p>

      <p className='text-sm text-gray-500'>
        {t('username')}: {user?.username}
      </p>

      <Button className='cursor-pointer rounded-md bg-blue-500 p-2 text-white' onClick={handleLogout}>
        {t('logout')}
      </Button>
    </div>
  )
}

export default ProfileModuleComponent
