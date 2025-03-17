export function LoginForm (): React.FC<Element> {
  const handleSubmit = (event: any): void => {
    event.preventDefault()
    const form = event.target
    const formDate = new FormData(form)
    const entries = Object.fromEntries(formDate.entries())
    console.log(entries)
  }

  return (
    <form className='loginForm' onSubmit={handleSubmit}>
      <label>User: </label>
      <input className='loginForm-username' name='username' required />
      <label>Contraseña: </label>
      <input className='loginForm-password' name='password' type='password' required />
      <button type='submit'>Iniciar sesión</button>
    </form>
  )
}
