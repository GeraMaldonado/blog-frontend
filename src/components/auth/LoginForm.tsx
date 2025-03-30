import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'

export function LoginForm () {
  const { login } = useAuth()

  const handleSubmit = async (event: any): Promise<void> => {
    event.preventDefault()
    const form = event.target
    const formDate = new FormData(form)
    const { email, password } = Object.fromEntries(formDate.entries())
    await login({ email, password })
  }

  return (
    <form className='loginForm' onSubmit={handleSubmit}>
      <label>email: </label>
      <input className='loginForm-username' name='email' required />
      <label>contraseña: </label>
      <input className='loginForm-password' name='password' type='password' required />
      <button type='submit'>Iniciar sesión</button>
    </form>
  )
}
