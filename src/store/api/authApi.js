import { createApi } from '@reduxjs/toolkit/dist/query/react'
import axiosBaseQuery from './baseQuery'

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery(),
  endpoints(build) {
    return {
      register: build.mutation({
        query(user) {
          return {
            url: 'auth/local/register',
            method: 'post',
            data: user
          }
        }
      }),
      login: build.mutation({
        query(user) {
          return {
            url: 'auth/local',
            method: 'post',
            data: user
          }
        }
      })
    }
  }
})

export const {
  useRegisterMutation,
  useLoginMutation
} = authApi

export default authApi
