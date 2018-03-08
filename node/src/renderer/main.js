import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.http = Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:18080'

Vue.config.productionTip = false

import 'font-awesome/css/font-awesome.min.css'

import ElementUI from 'element-ui'
//原始风格
// import 'element-ui/lib/theme-chalk/index.css'
//自定义风格
import './assets/theme/element-#09345f/index.css'
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  components: {
    App
  },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
