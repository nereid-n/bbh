import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import vacancies from './modules/vacancies';
import phones from "./modules/phones";
import places from "./modules/places";

export default new Vuex.Store({
  modules: {
    vacancies,
    phones,
    places
  },
  strict: process.env.NODE_ENV !== 'production'
})
