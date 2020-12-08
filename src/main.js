import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import './plugins/element.js'
import router from './router/index'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(Vuelidate)


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
