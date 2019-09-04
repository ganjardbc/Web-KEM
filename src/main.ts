import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueCookie from 'vue-cookie';
import Axios from 'axios';

import 'semantic-ui-css/semantic.min.css';

Vue.config.productionTip = false;
Vue.use(VueCookie);

window.axios = Axios;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
