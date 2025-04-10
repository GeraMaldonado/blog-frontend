import { useState } from 'react'
import { registerUser, sendVerificationCode } from '../../services/authService'
import { parseForm } from '../../utils/form'

export function RegisterForm (): React.FC {
  const [user, setUser] = useState(null)

  const handlerSubmitRegister = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    const { name, email, username, password, password2 } = parseForm<{ name: string, email: string, username: string, password: string, password2: string }>(event)

    if (password !== password2) {
      alert('Las contraseñas no coinciden')
      return
    }
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

  const handlerSubmitVerify = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    const { code } = parseForm<{ code: string }>(event)

    await registerUser({... user, code })
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
