import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import App from './App.vue'
import article from './components/Article.vue'
import music from './components/Music.vue'
import custom from './components/Custom.vue'

Vue.use(VueRouter)
Vue.prototype.$http = axios

const routes = [
  { path: '/article', component: article, alias: '/' },
  { path: '/music', component: music },
  { path: '/custom', component: custom }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')