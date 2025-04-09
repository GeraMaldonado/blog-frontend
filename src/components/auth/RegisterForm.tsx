import { useState } from 'react'
import { registerUser, sendVerificationCode } from '../../services/authService'

export function RegisterForm (): React.FC {
  const [user, setUser] = useState(null)

  const handlerSubmitRegister = async (event: any): Promise<void> => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const { name, email, username, password } = Object.fromEntries(formData.entries())
    setUser({ name, email, username, password })
    /*
 *Falta comprobar las contraseñas
 *Limpiar codigo
 *Refactorizar
 *Validaciones
 *Estilos
 *
 */

    await sendVerificationCode({ name, email })

    alert('Se ha enviado un codigo a su correo')
  }

  const handlerSubmitVerify = async (event): Promise<void> => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const { code } = Object.fromEntries(formData.entries())

    const { name, password, email, username } = user

    await registerUser({ name, password, email, username, code })
  }

  return (
    <div className='divRegister'>
      {!user
        ? <form className='formRegister' onSubmit={handlerSubmitRegister}>
          <label>Nombre: </label>
          <input className='formRegister-name' name='name' /><br />
          <label>Correo: </label>
          <input className='formRegister-email' name='email' /><br />
          <label>UserName: </label>
          <input className='formRegister-username' name='username' /><br />
          <label>Password</label>
          <input type='password' className='formRegister-password' name='password' /><br />
          <label>Repetir Password: </label>
          <input type='password' className='formRegister-password2' name='password2' /><br />
          <button className='formRegister-btn-send' type='submit'>Enviar codigo</button>
          </form>
        : <form className='formVerify' onSubmit={handlerSubmitVerify}>
          <label>Codigo: </label>
          <input name='code' /><br />
          <button type='submit'>Enviar codigo</button>
        </form>}
    </div>
  )
}
