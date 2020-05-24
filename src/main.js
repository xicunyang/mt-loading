import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import mtLoading from './../lib/mt-loading'
Vue.use(mtLoading)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
