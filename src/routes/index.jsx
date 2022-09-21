import { useRoutes } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import ProfilePage from '@/pages/ProfilePage'
import AuthPage from '@/pages/AuthPage'
import NeedAuth from '@/components/NeedAuth'

const routesList = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/profile',
    element: <NeedAuth><ProfilePage /></NeedAuth>
  },
  {
    path: '/login',
    element: <AuthPage />
  }
]

function WrapperRoutes() {
  return useRoutes(routesList)
}

export default WrapperRoutes
