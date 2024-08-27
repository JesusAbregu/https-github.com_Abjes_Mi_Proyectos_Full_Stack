import HelloWorld from '@/components/HelloWorld.vue';
import { shallowMount } from '@vue/test-utils';
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

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
