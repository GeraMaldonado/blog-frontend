import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { App } from './App.tsx'
import { AuthProvider } from './contexts/AuthContext.js'

const root = createRoot(document.getElementById('root')!)
root.render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
)
