'use client'

import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { type FC, useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { FormErrorTextComponent } from '@/app/shared/components/form-error-text'
import { useAuthStore } from '@/app/shared/store'
import { createLoginSchema } from '@/app/shared/utilities/auth.validation'
import { useRouter } from '@/pkg/locale'
import { Button } from '@/pkg/theme/components/button'
import { Input } from '@/pkg/theme/components/input'
import { Label } from '@/pkg/theme/components/label'

import { TLoginFormData } from './login-form.interface'

// interface
interface ILoginFormProps {}

// component
const LoginFormComponent: FC<Readonly<ILoginFormProps>> = (props) => {
  const {} = props

  const router = useRouter()

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const t = useTranslations('Auth.form')

  const { handleSubmit, register, formState } = useForm<TLoginFormData>({
    resolver: zodResolver(createLoginSchema(t)),
  })

  const { login } = useAuthStore()

  const errors = formState.errors

  const handleLogin = (data: TLoginFormData) => {
    setIsLoading(true)

    login({ email: data.email }, 'user-token')

    setIsLoading(false)

    router.push('/items')
  }

  // render
  return (
    <form onSubmit={handleSubmit(handleLogin)} className='space-y-4'>
      <div className='space-y-1'>
        <Label className='leading-5' htmlFor='userEmail'>
          {t('email')}*
        </Label>

        <Input
          disabled={isLoading}
          {...register('email')}
          type='email'
          id='userEmail'
          placeholder={t('email-placeholder')}
        />

        <FormErrorTextComponent message={errors.email?.message} />
      </div>

      <div className='w-full space-y-1'>
        <Label className='leading-5' htmlFor='password'>
          {t('password')}*
        </Label>

        <div className='relative'>
          <Input
            disabled={isLoading}
            {...register('password')}
            id='password'
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder='••••••••••••••••'
            className='pr-9'
          />

          <FormErrorTextComponent message={errors.password?.message} />

          <Button
            variant='ghost'
            size='icon'
            onClick={() => setIsPasswordVisible((prevState) => !prevState)}
            className='text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent'
          >
            {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
            <span className='sr-only'>{isPasswordVisible ? 'Hide password' : 'Show password'}</span>
          </Button>
        </div>
      </div>

      <Button className='w-full' type='submit'>
        {isLoading ? t('loading-btn') : t('login-btn')}
      </Button>
    </form>
  )
}

export default LoginFormComponent
