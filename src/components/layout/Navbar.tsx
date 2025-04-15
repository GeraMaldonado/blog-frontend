import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './Navbar.css'

export default function Navbar (): React.FC {
  const { user, logout } = useAuth()

  const handlerLogut = async (event): Promise<void> => {
    event.preventDefault()
    await logout()
  }

  return (
    <nav className='navbar'>
      <Link to='/'>Inicio</Link>

      {user
        ? (
          <>
            <span>Hola {user.username}</span>
            <Link to='/create'>Crear post</Link>
            <Link to='profile'>Perfil</Link>
            <button onClick={handlerLogut}>Cerrar Sesión</button>
          </>
          )
        : (
          <>
            <Link to='/login'>Iniciar Sesión</Link>
            <Link to='/register'>Registrarse</Link>
          </>
          )}
    </nav>
  )
}
