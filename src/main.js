import Vue from 'vue';
import store from './store';
import router from './router';
import App from './App.vue';
import UserAvatar from './components/user/UserAvatar.vue';

require('./registerServiceWorker');

Vue.component('user-avatar', UserAvatar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
