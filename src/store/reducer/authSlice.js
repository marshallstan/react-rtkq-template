import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogin: false,
  token: null,
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isLogin = true
      state.token = action.payload.token
      state.user = action.payload.user
    },
    logout(state) {
      state.isLogin = false
      state.token = null
      state.user = null
    }
  }
})

export default authSlice

export const { login, logout } = authSlice.actions
