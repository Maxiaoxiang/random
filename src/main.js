import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import axios from 'axios'
import App from './App.vue'
import article from './components/Article.vue'
import music from './components/Music.vue'
import image from './components/Image.vue'
import custom from './components/Custom.vue'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.prototype.$http = axios

const store = new Vuex.Store({
  state: {
    music_arr: [],
    music: {
      src: '',
      name: '',
      isPlaying: false
    }
  },
  mutations: {
    play (state) {
      state.music.isPlaying = true;
    }
  }
})

const routes = [
  { path: '/article', component: article, alias: '/' },
  { path: '/music', component: music },
  { path: '/image', component: image },
  { path: '/custom', component: custom }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')