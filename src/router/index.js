import Vue from "vue";
import VueRouter from "vue-router";

import Menus from "../components/Menus.vue";
import Index from "../view/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    components: {
      menu: Menus,
      content: Index,
    },
    //beforeEnter: common.requireAuth()
  },
]

export const router = new VueRouter({
  routes
});