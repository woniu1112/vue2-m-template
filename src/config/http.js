import axios from 'axios'
import Vue from 'vue'
// axios 配置
axios.defaults.timeout = 30000
axios.defaults.withCredentials = true
let loading = null

// http request 拦截器
axios.interceptors.request.use(
  config => {
    loading = Vue.prototype.$toast({
      message: '加载中...',
      status: 'loading',
      hasClose: false
    })
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    loading.close()
    if (response.data) {
      if (parseInt(response.data.code) === 4) {
        // store.dispatch('set_login_out')
        // Cookies.set('status', false)
      } else if (parseInt(response.data.code) === 2) {
        if (response.data.message && response.data.message.length > 0) {
          Vue.prototype.$toast({
            message: response.data.message,
            status: 'toast'
          })
        } else {
          Vue.prototype.$toast({
            message: '服务器错误，请您稍后再试',
            status: 'toast'
          })
        }
      }
    } else {
      console.log('服务器错误，请您稍后再试')
    }
    return response
  },
  error => {
    loading.close()
    Vue.prototype.$toast({
      message: '服务器错误，请您稍后再试',
      status: 'toast'
    })
    return Promise.reject(error)
  })

export default axios
