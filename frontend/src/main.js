import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msg'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ik90YXZpbyBMb3Nhbm8gZGUgQXJhdWpvIFNpbHZhIiwiZW1haWwiOiJ0YXZpbmhvLmFzc3lzdGVtQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE3MDk4NDc0NzEsImV4cCI6MTcxMDEwNjY3MX0.YAV4pkXDS3LQg9ZYmvE7kQyINEiG521oz_tu9pbFL_Y'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')