import Vue from 'vue';
import App from './App.vue';
import router from './router'; // Si usas Vue Router
import store from './store'; // Si usas Vuex

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
