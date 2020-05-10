import Vue from "vue"
import vuetify from "@/plugins/vuetify" // path to vuetify export
import App from "./App.vue";
import { router } from "./router/index.js";
import store from "./store/index.js";

Vue.config.productionTip = false


new Vue({
  store,
  router,
  vuetify,
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})