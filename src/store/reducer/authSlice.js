import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: () => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')

    if (!token || !user) {
      return {
        isLogin: false,
        token: null,
        user: null,
        expirationTime: 0
      }
    }
    return {
      isLogin: true,
      token,
      user: JSON.parse(user),
      expirationTime: +localStorage.getItem('expirationTime')
    }
  },
  reducers: {
    login(state, action) {
      const { token, user } = action.payload

      state.isLogin = true
      state.token = token
      state.user = user

      const currentTime = Date.now()
      const timeout = 1000 * 60 * 60 * 24 * 2
      state.expirationTime = currentTime + timeout

      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('expirationTime', state.expirationTime + '')
    },
    logout(state) {
      state.isLogin = false
      state.token = null
      state.user = null

      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }
  }
})

export default authSlice

export const { login, logout } = authSlice.actions
