import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App'
import router from './router/index'
/* eslint-disable no-new */
Vue.use(VueResource);

let app = Vue.extend(App)

router.start(app, '#app')


 