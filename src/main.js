import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import App from './App.vue'
import article from './components/Article.vue'

Vue.use(VueRouter)
Vue.prototype.$http = axios

const routes = [
  { path: '/article', component: article }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')