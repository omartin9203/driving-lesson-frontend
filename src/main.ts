import Vue from 'vue';
import App from './App.vue';
import Notifications from "vue-notification";
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import {initialize as initializeInversify} from "@/utils/inversify.config";
import {apiURI} from "@/utils/constants";

Vue.config.productionTip = false;
Vue.use(Notifications);

initializeInversify({
  config: {
    baseUrl: apiURI,
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
