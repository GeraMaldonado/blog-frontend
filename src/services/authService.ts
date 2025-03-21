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
