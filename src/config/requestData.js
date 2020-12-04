import axios from './http'
import globals from './globals'
export const getData = (url = '', data = {}, type = 'GET', responseType = 'json', isformSubmit = false, config = {}) => {
  type = type.toUpperCase()
  if (type === 'GET') {
    let dataStr = ''
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })
    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url = url + '?' + encodeURI(dataStr) + '&t=' + new Date().getTime()
    }
  }
  if (url.indexOf('?') < 0) {
    url = encodeURI(url) + '?t=' + new Date().getTime()
  }
  // form表单形式提交
  if (isformSubmit) {
    let formData = new FormData()
    Object.keys(data).forEach(key => {
      formData.append(key, data[key])
    })
    data = formData
  }
  return axios({
    method: type,
    baseURL: globals.host,
    url: url,
    data: data,
    responseType: responseType,
    ...config // 其他配置
  })
}
