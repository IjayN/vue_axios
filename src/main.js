import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
// import '../assets/assets/js/vendor/perfect-scrollbar.min.js'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './stylus/main.styl'
//import router from './router'

// import './assets/assets/js/vendor/jquery-3.3.1.min.js'
// import './assets/assets/js/vendor/bootstrap.bundle.min.js'
// import './assets/assets/js/vendor/perfect-scrollbar.min.js'
// import './assets/assets/js/es5/script.min.js'
// import './assets/assets/js/sidebar.script.js'



Vue.use(PerfectScrollbar)
Vue.config.productionTip = false

new Vue({
 // router,

  render: h => h(App),
}).$mount('#app')
