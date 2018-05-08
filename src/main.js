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
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)

Vue.prototype.$http = axios
//获取Bing壁纸jsonp格式
Vue.prototype.jsonp = jsonp

/**
 * music       => 音乐
 *  arr        => 播放列表
 *  url        => 当前播放歌曲链接
 *  name       => 当前播放歌曲名称
 *  isPlaying  => 是否正在播放
 * 
 * status      => 状态
 *  isVertical => 是否竖屏
 *  isOpen     => 导航是否开启
 */
const store = new Vuex.Store({
  state: {
    music: {
      arr: [],
      url: '',
      name: '',
      isPlaying: false
    },
    status: {
      isVertical: true,
      isOpen: true
    }
  },
  mutations: {
    
  }
})

/**
 * article   => 文章
 * music     => 音乐
 * image     => 壁纸
 * coustom   => 自定义
 * food      => 美食
 * lottery   => 彩票
 */
const routes = [
  { path: '/article', component: article},
  { path: '/music', component: music },
  { path: '/image', component: image, alias: '/' },
  { path: '/custom', component: custom },
  { path: '/food', component: food },
  { path: '/lottery', component: lottery }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')