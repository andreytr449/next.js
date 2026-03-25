'use client'

import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useRouter } from '@/pkg/locale'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { useAuthStore } from '@/app/shared/store'
import { Button, FormErrorText, Input, Label } from '@/app/shared/ui'

import { RegisterFormData } from '../auth.interface'
import { createRegisterSchema } from '@/app/shared/lib'

const RegisterFormComponent = () => {
  const router = useRouter()

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const t = useTranslations('Auth.form')
  const { handleSubmit, register, formState } = useForm<RegisterFormData>({
    resolver: zodResolver(createRegisterSchema(t)),
  })

  const { login } = useAuthStore()

  const errors = formState.errors

  const handleRegister = (data: RegisterFormData) => {
    setIsLoading(true)

    login({ email: data.email }, 'user-token')

    setIsLoading(false)

    router.push('/items')
  }

  return (
    <form className='space-y-4' onSubmit={handleSubmit(handleRegister)}>
      <div className='space-y-1'>
        <Label className='leading-5' htmlFor='username'>
          {t('username')}*
        </Label>

        <Input {...register('name')} type='text' id='username' placeholder={t('username-placeholder')} />

        <FormErrorText message={errors.name?.message} />
      </div>

      <div className='space-y-1'>
        <Label className='leading-5' htmlFor='userEmail'>
          {t('email')}*
        </Label>

        <Input {...register('email')} type='email' id='userEmail' placeholder={t('email-placeholder')} />

        <FormErrorText message={errors.email?.message} />
      </div>

      <div className='w-full space-y-1'>
        <Label className='leading-5' htmlFor='password'>
          {t('password')}*
        </Label>

        <div className='relative'>
          <Input
            {...register('password')}
            id='password'
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder='••••••••••••••••'
            className='pr-9'
          />

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
        <FormErrorText message={errors.password?.message} />
      </div>

      <div className='w-full space-y-1'>
        <Label className='leading-5' htmlFor='confirmPassword'>
          {t('confirm-password')}*
        </Label>

        <div className='relative'>
          <Input
            {...register('confirmPassword')}
            id='confirmPassword'
            type={isConfirmPasswordVisible ? 'text' : 'password'}
            placeholder='••••••••••••••••'
            className='pr-9'
          />

          <Button
            variant='ghost'
            size='icon'
            onClick={() => setIsConfirmPasswordVisible((prevState) => !prevState)}
            className='text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent'
          >
            {isConfirmPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
            <span className='sr-only'>{isConfirmPasswordVisible ? 'Hide password' : 'Show password'}</span>
          </Button>
        </div>

        <FormErrorText message={errors.confirmPassword?.message} />
      </div>

      <Button className='w-full' type='submit'>
        {isLoading ? t('loading-btn') : t('register-btn')}
      </Button>
    </form>
  )
}

export default RegisterFormComponent
