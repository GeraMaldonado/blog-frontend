import { useAuth } from '../contexts/AuthContext'

export default function Profile () {
  const { user } = useAuth()

  if (!user) return <p>No has iniciado sesión.</p>

  return (
    <>
      <h1>Hola {user.username}</h1>
      <p>Correo: {user.email}</p>
    </>
  )
}
