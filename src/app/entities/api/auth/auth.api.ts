'use server'

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { cookies, headers } from 'next/headers'

import { TAuthResponse, TSignInInput, TSignUpInput } from '@/app/entities/models'
import { SALT_ROUNDS } from '@/app/shared/constants'
import { isRateLimited } from '@/app/shared/utilities'
import { SignInInputSchema, SignUpInputSchema } from '@/app/shared/utilities/dto'
import { envServer } from '@/config/env'
import { createServerClient } from '@/pkg/supabase/server'

const signInAttempts = new Set<string>()
const signUpAttempts = new Set<string>()

// sign in
export const signIn = async (data: TSignInInput): Promise<TAuthResponse> => {
  const headerStore = await headers()
  const ip = headerStore.get('x-forwarded-for') || 'unknown-ip'

  const isBlocked = isRateLimited(signInAttempts, ip, 5, 60000)

  if (isBlocked) {
    return {
      success: false,
      status_code: 429,
      error: 'Too many login attempts.',
    }
  }

  // validate input fields
  const validatedFields = SignInInputSchema.safeParse(data)

  if (!validatedFields.success) {
    return {
      success: false,
      status_code: 400,
      error: validatedFields.error.message,
    }
  }

  const { email, password } = validatedFields.data

  // create supabase client
  const supabase = createServerClient(await cookies())

  const { data: user, error } = await supabase.from('users').select('*').eq('email', email).single()

  if (error && error.code !== 'PGRST116') {
    return { success: false, error: 'Internal server error', status_code: 500 }
  }

  // check is user password is valid
  if (user) {
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (isPasswordValid) {
      const token = jwt.sign({ id: user.id, email: user.email }, envServer.JWT_SECRET!, { expiresIn: '1h' })

      return { success: true, user: { id: user.id, email: user.email, username: user.username }, token }
    }
  }

  return { success: false, error: 'Invalid credentials', status_code: 401 }
}

// create account
export const signUp = async (data: TSignUpInput): Promise<TAuthResponse> => {
  const headerStore = await headers()
  const ip = headerStore.get('x-forwarded-for') || 'unknown-ip'

  const isBlocked = isRateLimited(signUpAttempts, ip, 3, 300000)

  if (isBlocked) {
    return {
      success: false,
      status_code: 429,
      error: 'Too many registration attempts.',
    }
  }

  // validate input fields
  const validatedFields = SignUpInputSchema.safeParse(data)

  if (!validatedFields.success) {
    return {
      success: false,
      status_code: 400,
      error: validatedFields.error.message,
    }
  }

  const { email, password, username } = validatedFields.data

  // create supabase client
  const supabase = createServerClient(await cookies())

  const { data: user, error } = await supabase.from('users').select('*').eq('email', email).single()

  if (error && error.code !== 'PGRST116') {
    return { success: false, error: 'Internal server error', status_code: 500 }
  }

  // if user does not exist, create a new user
  if (!user) {
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS)

    const { data: newUser, error: newUserError } = await supabase
      .from('users')
      .insert({
        email,
        password: passwordHash,
        username,
      })
      .select()
      .single()

    if (newUserError) {
      return { success: false, error: 'Internal server error', status_code: 500 }
    }

    const token = jwt.sign({ id: newUser.id, email: newUser.email }, envServer.JWT_SECRET, { expiresIn: '1h' })

    return {
      success: true,
      user: { id: newUser.id, email: newUser.email, username: newUser.username },
      token,
    }
  }

  return { success: false, error: 'Invalid credentials', status_code: 400 }
}
