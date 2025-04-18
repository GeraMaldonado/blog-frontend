import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginForm } from '../components/auth/LoginForm'
import Register from '../pages/Register'
import Profile from '../pages/Profile'
import Home from '../pages/Home'
import PostPage from '../pages/Post'

export function AppRoutes () {
  return (
    <Routes>
      <Route path='/login' element={<LoginForm />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/' element={<Home />} />
      <Route path='/post/:id' element={<PostPage />} />
    </Routes>
  )
}
