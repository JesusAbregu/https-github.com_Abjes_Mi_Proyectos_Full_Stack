// frontend/src/main.js
import Vue, { createApp } from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Home from './components/Home.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');

createApp(App).mount('#app');

