import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// user interface
interface IUser {
  email: string
  username: string
}

// auth state interface
interface IAuthState {
  user: IUser | null
  token: string | null
  isAuthenticated: boolean
  login: (user: IUser, token: string) => void
  logout: () => void
}

// auth store
export const useAuthStore = create<IAuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      // login action
      login: (userData, token) =>
        set({ user: { email: userData.email, username: userData.username }, token, isAuthenticated: true }),
      // logout action
      logout: () => set({ user: null, token: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage',
      version: 1,
    },
  ),
)
