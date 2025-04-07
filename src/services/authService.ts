export async function loginUser ({ email, password }: { email: string, password: string }): Promise<{ id: string, username: string, email: string }> {
  const res = await fetch('http://localhost:3010/api/auth/login', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' }
  })

  if (!res.ok) throw new Error('Error al iniciar sesión')

  const json = await res.json()
  return json.data
}

export async function logoutUser (): Promise<void> {
  const res = await fetch('http://localhost:3010/api/auth/logout', {
    method: 'POST',
    credentials: 'include'
  })
  if (!res.ok) throw new Error('Error al cerrar sesión')
  console.log(res)
}

const URL = 'http://localhost:3010/api/'

export async function sendVerificationCode ({ name, email }: { name: string, email: string }): Promise<void> {
  const res = await fetch(URL + 'users/verify-request', {
    method: 'POST',
    body: JSON.stringify({ name, email }),
    headers: { 'Content-Type': 'application/json' }
  })
  if (!res.ok) throw new Error('Error al enviar el codigo')
  console.log(res)
}

export async function registerUser (data: { name: string, email: string, username: string, password: string, code: string }): Promise<void> {
  const res = await fetch(URL + 'users', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
  console.log(data)
  if (!res.ok) throw new Error('Error al crear usuario')
  console.log(res)
}
