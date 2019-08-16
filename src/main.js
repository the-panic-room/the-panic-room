import Vue from 'vue'
import App from './App'
import About from './components/About'
import Home from './components/Home'
import VueRouter from 'vue-router'
import './../node_modules/milligram/dist/milligram.min.css'
import '@/assets/styles.css'
Vue.use(VueRouter)

const routes = [
  { path: '/about', component: About },
  { path: '/', component: Home }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
