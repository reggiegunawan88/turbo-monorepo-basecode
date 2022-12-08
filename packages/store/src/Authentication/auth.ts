import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface AuthState {
  isLogin: boolean
  setIsLogin: (isLogin: boolean) => void
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isLogin: false,
        setIsLogin: (isLogin) => set(() => ({ isLogin })),
      }),
      {
        name: 'alteacare-auth',
      },
    ),
  ),
)
