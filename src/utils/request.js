import axios from 'axios'
import { assert } from '../utils'
import { HTTP_STATUS } from '../consts/statusCode'
// import { domainPrefix } from '@/api/config'
// import { isTestEnv, getApiPrefix, getApiHttp } from '@/utils/env'
// import { apiError } from '@/utils/log'

axios.defaults.withCredentials = true
axios.defaults.timeout = 50000
axios.defaults.headers.common['Content-Type'] = 'application/json'
// Vue.prototype.axios = axios
// const apiPrefix = getApiPrefix()
// const apiHttp = getApiHttp()
// 错误状态码 有返回错误直接进行操作-
// const errorStatus = [401, 500, 502, 504, 400]

// const preFix = isTestEnv ? 'test.' : domainPrefix
// const urlPassport = `http://${preFix}passport.kaikeba.com/?redirect=http://${domainPrefix}learn.kaikeba.com/transfer`

// const baseURL = `${apiHttp}://${apiPrefix}weblearn.kaikeba.com`

axios.defaults.baseURL = 'http://api.shudong.wang/v1'
// 中间件 拦截请求-
axios.interceptors.response.use(
  response => {
    // if (errorStatus.indexOf(response.status) > -1) {
    //   router.push({
    //     path: '/',
    //   })
    // }
    // if ([403, -505].indexOf(response.data.code) > -1) {
    //   document.location.href = urlPassport
    // }
    return response
  },
  err => {
    if (!err.response) {
      // apiError('ApiError', err)
      return
    }
    const res = err.response
    // const option = { status: res.status, url: res.config.url, params: res.config.params }
    // apiError('ApiError', option)
    // return Promise.reject(err)
  }
)

// eslint-disable-next-line no-unused-vars
const exceptionHandling = data => {
  if (data.status === HTTP_STATUS.SUCCESS || data.status === HTTP_STATUS.NOT_MODIFIED) {
    if (!data.data.data) {
      assert(false, 'api data is empty')
      return
    }
    return data
  }
  assert(false, data.statusText)

  return false
}

/**
 * get
 * @param url
 * @param data
 * @returns {Promise}
 */

const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params
      })
      .then(response => {
        // if (response.data.code !== 1) {
        // console.error('api_error', response.data.msg)
        // reject(response)
        // }
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * post
 * @param url
 * @param data
 * @returns {Promise}
 */

const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      response => {
        resolve(response.data)
      },
      error => {
        reject(error)
      }
    )
  })
}

export default {
  get,
  post
}
