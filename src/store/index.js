import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import vacancies from './modules/vacancies';

export default new Vuex.Store({
  modules: {
    vacancies
  },
  strict: process.env.NODE_ENV !== 'production'
})
