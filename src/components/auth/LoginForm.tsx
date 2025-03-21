import { useState } from 'react'

export function LoginForm (): React.FC<Element> {
  const [user, setUser] = useState(null)

  const handleSubmit = (event: any): void => {
    event.preventDefault()
    const form = event.target
    const formDate = new FormData(form)
    const entries = Object.fromEntries(formDate.entries())
    fetch('http://localhost:3010/api/auth/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(entries),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async res => await res.json()).then(json => {
      setUser(json)
    }).catch(err => console.error(err))
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
