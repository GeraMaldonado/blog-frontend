import './App.css'
import { AppRoutes } from './routes/AppRoutes'
import Navbar from './components/layout/Navbar'

export function App (): React.FC {
  return (
    <>
      <h1>Prueba desde App</h1>
      <Navbar />
      <AppRoutes />
    </>
  )
}
