import Vue from "vue";
import VueRouter from "vue-router";

import Menus from "../components/Menus.vue";
import Index from "../view/Index.vue";
import Page2_1 from "../view/Page2_1.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    components: {
      menu: Menus,
      content: Index,
    },
  },
  {
    path: '/Page2_1',
    name: 'Page2_1',
    components: {
      menu: Menus,
      content: Page2_1,
    },
  },
  {
    path: '/Page2_2',
    name: 'Page2_2',
    components: {
      menu: Menus,
      content: { template: `
        <div style="width: 100%;
        height: 100%;
        background-color: green;">test</div>
      `},
    },
  },
  {
    path: '/Page3',
    name: 'Page3',
    components: {
      menu: Menus,
      content: { template: `
        <div style="width: 100%;
        height: 100%;
        background-color: gray;">test</div>
      `},
    },
  },
]

export const router = new VueRouter({
  routes
});