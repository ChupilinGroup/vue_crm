import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

import 'idempotent-babel-polyfill';

Vue.use(VueMaterial);

Vue.config.devtools = true;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
