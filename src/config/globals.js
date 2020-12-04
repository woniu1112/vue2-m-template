let globals = {
  mockEnv: 'uat', // 环境
  version: '1.0', // 版本号
  host: 'http://192.168.98.75:8071/', // 接口地址
  hostServe: {
    //  test: 'http://10.82.82.205:8885/api/',
    uat: '//woniu1112.github.io/',
    pre: '//woniu1112.github.io/',
    prod: '//woniu1112.github.io/'
  },
  init () {
    let nowHostValue = window.location.hostname
    let preIndex = nowHostValue.indexOf('.')
    let preHostName = nowHostValue.substring(0, preIndex)
    if (nowHostValue === 'localhost' || nowHostValue.indexOf('10.108.') > -1 || nowHostValue.indexOf('127.0.') > -1) {
      globals.host = globals.hostServe[globals.mockEnv]
    } else if (nowHostValue.indexOf('uat') > -1) { // uat 环境
      globals.host = globals.hostServe['uat']
    } else if (preHostName === 'pre' || nowHostValue === 'woniu1112.github.io') {
      globals.host = globals.hostServe['prod']
    }
  }
}
export default globals
