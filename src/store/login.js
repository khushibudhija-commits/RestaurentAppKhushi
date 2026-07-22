import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
  persist(
    (set) => ({
      isAuthenticated: false,
      userEmail: '',
      userPassword: '',
      login: (email = '', password = '') =>
        set({ isAuthenticated: true, userEmail: email, userPassword: password }),
      logout: () =>
        set({ isAuthenticated: false, userEmail: '', userPassword: '' }),
    }),
    {
      name: 'auth-storage',
    }
  )
)

export default useAuthStore