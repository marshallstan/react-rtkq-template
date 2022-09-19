import { useRoutes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import AuthPage from '../pages/AuthPage'

const routesList = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: '/auth-form',
    element: <AuthPage />
  }
]

function WrapperRoutes() {
  return useRoutes(routesList)
}

export default WrapperRoutes
