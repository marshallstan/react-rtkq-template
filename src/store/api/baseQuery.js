import { RESTService } from '../../utils'

const axiosBaseQuery = ({ baseUrl } = { baseUrl: '' }) => {
  return (args) => {
    const isArgsString = typeof args === 'string'

    const { url, method, data, params } = args
    return RESTService({
      url: isArgsString ? baseUrl + args : baseUrl + url,
      method,
      params,
      data
    })
      .catch(error => {
        const errData = error.response.data
        return {
          error: errData ? errData.error : {
            code: error.code,
            message: error.message,
            status: error.response.status
          }
        }
      })
  }
}

export default axiosBaseQuery
