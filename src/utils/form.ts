export function parseForm<T = Record<string, any>> (event: React.FormEvent<HTMLFormElement>): T {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  return Object.fromEntries(formData.entries()) as T
}
