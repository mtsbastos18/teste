import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import routes from './routes';

import jQuery from 'jquery';

window.$ = window.jQuery = jQuery;

import 'popper.js';
import 'bootstrap';
import './assets/app.scss';
Vue.config.productionTip = false

Vue.use(VueRouter);


const router = new VueRouter({mode: 'history',routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
