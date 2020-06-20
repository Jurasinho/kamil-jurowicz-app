import Vue from 'vue';
import store from './store';
import router from './router';
import App from './App.vue';
import Navigation from './components/Navigation';
import UserAvatar from './components/user/UserAvatar.vue';
import UserAvatarPlugin from './components/user/UserAvatarPlugin.js';
import TheHeader from './components/TheHeader';
import "98.css"
Vue.component('user-avatar', UserAvatar);
Vue.component('navigation', Navigation);
Vue.component('the-header', TheHeader);
Vue.use(UserAvatarPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
