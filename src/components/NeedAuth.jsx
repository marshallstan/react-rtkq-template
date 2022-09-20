import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

function NeedAuth({ children }) {
  const auth = useSelector(state => state.auth)
  const location = useLocation()

  return (
    auth.isLogin
      ? children
      : (
        <Navigate
          to="/auth-form"
          replace
          state={{
            preLocation: location.pathname
          }}
        />
      )
  )
}

export default NeedAuth

