import Vue from 'vue';
// eslint-disable-next-line import/no-unresolved
import SocialsWrapper from '@/components/SocialsWrapper';
// eslint-disable-next-line import/extensions
import SocialMedium from '@/components/SocialMedium';
// eslint-disable-next-line import/extensions
import FormWrapper from '@/components/FormWrapper';
import UserProvider from '@/components/user/UserProvider';
import store from './store';
import router from './router';
import App from './App.vue';
import UserAvatar from './components/UserAvatar.vue';
import splitPane from 'vue-splitpane'

require('./registerServiceWorker');

Vue.component('socials-wrapper', SocialsWrapper);
Vue.component('socials-medium', SocialMedium);
Vue.component('form-wrapper', FormWrapper);
Vue.component('user-avatar', UserAvatar);
Vue.component('user-provider', UserProvider);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
