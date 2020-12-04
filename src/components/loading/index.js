import Vue from 'vue'
import myLoading from './loading'
const LoadObj = Vue.extend(myLoading)

let instance
const Loading = function (options) {
  instance = new LoadObj({
    data: options
  })
  instance.$mount()
  document.body.appendChild(instance.$el)
  return instance
}
Loading.install = function (Vue) {
  Vue.prototype.$loading = Loading
  Vue.component(myLoading.name, myLoading)
}

export default Loading
