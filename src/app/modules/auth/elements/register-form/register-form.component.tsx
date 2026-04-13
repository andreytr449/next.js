'use client'

import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { type FC, useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { FormErrorTextComponent } from '@/app/shared/components/form-error-text'
import { useAuthStore } from '@/app/shared/store'
import { createRegisterSchema } from '@/app/shared/utilities/auth.validation'
import { useRouter } from '@/pkg/locale'
import { Button } from '@/pkg/theme/components/button'
import { Input } from '@/pkg/theme/components/input'
import { Label } from '@/pkg/theme/components/label'

import { TRegisterFormData } from './register-form.interface'

// interface
interface IRegisterFormProps {}

// component
const RegisterFormComponent: FC<Readonly<IRegisterFormProps>> = (props) => {
  const {} = props

  const router = useRouter()

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const t = useTranslations('Auth.form')
  const { handleSubmit, register, formState } = useForm<TRegisterFormData>({
    resolver: zodResolver(createRegisterSchema(t)),
  })

  const { login } = useAuthStore()

  const errors = formState.errors

  const handleRegister = (data: TRegisterFormData) => {
    setIsLoading(true)

    login({ email: data.email }, 'user-token')

    setIsLoading(false)

    router.push('/items')
  }

  // render
  return (
    <form className='space-y-4' onSubmit={handleSubmit(handleRegister)}>
      <div className='space-y-1'>
        <Label className='leading-5' htmlFor='username'>
          {t('username')}*
        </Label>

        <Input {...register('name')} type='text' id='username' placeholder={t('username-placeholder')} />

        <FormErrorTextComponent message={errors.name?.message} />
      </div>

      <div className='space-y-1'>
        <Label className='leading-5' htmlFor='userEmail'>
          {t('email')}*
        </Label>

        <Input {...register('email')} type='email' id='userEmail' placeholder={t('email-placeholder')} />

        <FormErrorTextComponent message={errors.email?.message} />
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

        <FormErrorTextComponent message={errors.password?.message} />
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

        <FormErrorTextComponent message={errors.confirmPassword?.message} />
      </div>

      <Button className='w-full' type='submit'>
        {isLoading ? t('loading-btn') : t('register-btn')}
      </Button>
    </form>
  )
}

export default RegisterFormComponent
