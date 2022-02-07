// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import store from './store';
import App from "./App";
import router from "./router";
import Axios from 'axios';
import vuetify from "@/plugins/vuetify";
Vue.config.productionTip = false;

// set auth header
Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
