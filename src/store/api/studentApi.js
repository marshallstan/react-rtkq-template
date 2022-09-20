import { createApi } from '@reduxjs/toolkit/dist/query/react'
import axiosBaseQuery from './baseQuery'

const studentApi = createApi({
  reducerPath: 'studentApi',
  baseQuery: axiosBaseQuery(),
  endpoints(build) {
    return {
      getStudents: build.query({
        query() {
          return 'students'
        }
      }),
      getStudentById: build.query({
        query(id) {
          return `students/${id}`
        }
      }),
      delStudent: build.mutation({
        query(id) {
          return {
            url: `students/${id}`,
            method: 'delete'
          }
        }
      }),
      addStudent: build.mutation({
        query(stu) {
          return {
            url: 'students',
            method: 'post',
            data: { data: stu }
          }
        }
      }),
      updateStudent: build.mutation({
        query(stu) {
          return {
            url: `students/${stu.id}`,
            method: 'put',
            data: { data: stu.attributes }
          }
        }
      })
    }
  }
})

export const {
  useGetStudentsQuery,
  useGetStudentByIdQuery,
  useDelStudentMutation,
  useAddStudentMutation,
  useUpdateStudentMutation
} = studentApi

export default studentApi
