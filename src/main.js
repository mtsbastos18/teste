import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import  Vuex from 'vuex';
import store from './store.js';

import routes from './routes';

import jQuery from 'jquery';

window.$ = window.jQuery = jQuery;

import 'popper.js';
import 'bootstrap';
import './assets/app.scss';
Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({mode: 'history',routes});

new Vue({
  store: new Vuex.Store(store),
  router,
  render: h => h(App),
}).$mount('#app')
