import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import vacancies from './modules/vacancies';
import phones from "./modules/phones";

export default new Vuex.Store({
  modules: {
    vacancies,
    phones
  },
  strict: process.env.NODE_ENV !== 'production'
})
