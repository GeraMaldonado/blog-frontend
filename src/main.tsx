import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { App } from './App'
import { AuthProvider } from './contexts/AuthContext.js'
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root')!)
root.render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
