import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import axios from 'axios'
import jsonp from 'jsonp'
import App from './App.vue'
import article from './components/Article.vue'
import music from './components/Music.vue'
import image from './components/Image.vue'
import custom from './components/Custom.vue'
import food from './components/Food.vue'
import lottery from './components/Lottery.vue'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.prototype.$http = axios
//获取Bing壁纸jsonp格式
Vue.prototype.jsonp = jsonp
 
const store = new Vuex.Store({
  state: {
    music: {
      arr: [],
      url: '',
      name: '',
      isPlaying: false
    }
  },
  mutations: {
    
  }
})

const routes = [
  { path: '/article', component: article},
  { path: '/music', component: music },
  { path: '/image', component: image, alias: '/' },
  { path: '/custom', component: custom },
  { path: '/food', component: food },
  { path: '/lottery', component: lottery }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')