'use client'

import { useTranslations } from 'next-intl'
import type { FC } from 'react'
import { useEffect, useState } from 'react'

import { useAuthStore } from '@/app/shared/store'
import { useRouter } from '@/pkg/locale'

import { AuthCardComponent, LoginFormComponent, RegisterFormComponent } from './elements'

// interface
interface IProps {}

// component
const AuthModuleComponent: FC<Readonly<IProps>> = (props) => {
  const {} = props

  const router = useRouter()
  const { user } = useAuthStore()

  const [currentForm, setCurrentForm] = useState<'login' | 'register'>('login')

  const isLogin = currentForm == 'login'

  const t = useTranslations(isLogin ? 'Auth.login' : 'Auth.register')

  useEffect(() => {
    if (user) router.replace('/items')
  }, [router, user])

  if (user) return null

  // render
  return (
    <AuthCardComponent
      title={t('title')}
      description={t('description')}
      footer={{
        text: isLogin ? t('noAccount') : t('alreadyHaveAccount'),
        linkText: isLogin ? t('signUpInstead') : t('signInInstead'),
        onSwitch: () => setCurrentForm(isLogin ? 'register' : 'login'),
      }}
    >
      {isLogin ? <LoginFormComponent /> : <RegisterFormComponent />}
    </AuthCardComponent>
  )
}

export default AuthModuleComponent
