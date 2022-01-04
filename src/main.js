import Vue from 'vue'
import App from './App.vue'
import router from './router'


import './assets/fontawesome-free/css/all.min.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  
}).$mount('#app')
