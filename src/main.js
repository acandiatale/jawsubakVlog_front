import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import router from './router.js'
import { store } from './store/store'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({  
  router,
  store: store,
  render: h => h(App),
}).$mount('#app')
