import React, { createContext, useContext, useState } from 'react'
import { loginUser } from '../services/authService'

interface User {
  id: string
  email: string
  username: string
}

interface AuthContextType {
  user: User | null
  login: ({ email, password }: { email: string, password: string }) => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider ({ children }: { children: React.ReactNode }): React.FC {
  const [user, setUser] = useState<User | null>(null)

  const login = async ({ email, password }: { email: string, password: string }): Promise<void> => {
    try {
      const userData = await loginUser({ email, password })
      setUser(userData)
    } catch (error) {
      console.error('Error en login', error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType | null => {
  const context = useContext(AuthContext)
  if (context == null) throw new Error('useAuth debe usarse dento de un AuthProvider')
  return context
}
