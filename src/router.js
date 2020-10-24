import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Postcode from "@/views/Postcode";
import Phone from "@/views/Phone";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/phone',
      name: 'phone',
      component: Phone
    },
    {
      path: '/postcode',
      name: 'postcode',
      component: Postcode
    },
  ]
})
