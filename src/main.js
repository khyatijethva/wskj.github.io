import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { gsap, ScrollTrigger, ScrollToPlugin } from "gsap/all";
import './assets/css/style.css'
import './assets/css/responsive.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); 
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
