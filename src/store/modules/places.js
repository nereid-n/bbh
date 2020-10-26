import Vue from 'vue';

const countries = new Promise(function(resolve, reject) {
  resolve({
    0: 'Россия',
    1: 'Украина',
    2: 'Молдова',
    3: 'Казахстан',
    4: 'Россия',
    5: 'Украина',
    6: 'Молдова',
    7: 'Казахстан',
    8: 'Россия',
    9: 'Украина',
    10: 'Молдова',
    11: 'Казахстан',
    12: 'Россия',
    13: 'Украина',
    14: 'Молдова',
    15: 'Казахстан',
    16: 'Россия',
    17: 'Украина',
    18: 'Молдова',
    19: 'Казахстан'
  });
});
const regions = new Promise(function(resolve, reject) {
  resolve({
    0: 'Амурская область',
    1: 'Алтайский край',
    2: 'Брянская область',
    3: 'Брянская область',
    4: 'Амурская область',
    5: 'Алтайский край',
    6: 'Амурская область',
    7: 'Брянская область',
    8: 'Алтайский край',
    9: 'Амурская область',
    10: 'Брянская область',
    11: 'Алтайский край',
    12: 'Амурская область',
    13: 'Алтайский край',
    14: 'Амурская область',
    15: 'Брянская область',
    16: 'Амурская область',
    17: 'Алтайский край',
    18: 'Амурская область',
    19: 'Брянская область'
  });
});
const locality = new Promise(function(resolve, reject) {
  resolve({
    0: 'Анива',
    1: 'Арково',
    2: 'Быков',
    3: 'Вал',
    4: 'Анива',
    5: 'Арково',
    6: 'Быков',
    7: 'Вал',
    8: 'Анива',
    9: 'Арково',
    10: 'Быков',
    11: 'Вал',
    12: 'Анива',
    13: 'Арково',
    14: 'Быков',
    15: 'Вал',
    16: 'Анива',
    17: 'Арково',
    18: 'Быков',
    19: 'Вал'
  });
});
const area = new Promise(function(resolve, reject) {
  resolve({
    0: 'Академический',
    1: 'Арбат',
    2: 'Аэропорт',
    3: 'Котловка',
    4: 'Перово',
    5: 'Академический',
    6: 'Аэропорт',
    7: 'Котловка',
    8: 'Анива',
    9: 'Академический',
    10: 'Быков',
    11: 'Котловка',
    12: 'Академический',
    13: 'Арково',
    14: 'Аэропорт',
    15: 'Котловка'
  });
});
const metro = new Promise(function(resolve, reject) {
  resolve({
    0: 'Горьковская',
    1: 'Заречная',
    2: 'Ленинская',
    3: 'Московская'
  });
});

export default {
  namespaced: true,
  state: {

  },
  mutations: {

  },
  actions: {
    'GET_COUNTRIES': async () => {
      return countries
        .then(
          res => {
            return res;
          },
          err => {
            return err;
          }
        )
        .catch(err => console.error(`catch, ${err}`));
    },
    'GET_REGIONS': async () => {
      return regions
        .then(
          res => {
            return res;
          },
          err => {
            return err;
          }
        )
        .catch(err => console.error(`catch, ${err}`));
    },
    'GET_LOCALITY': async () => {
      return locality
        .then(
          res => {
            return res;
          },
          err => {
            return err;
          }
        )
        .catch(err => console.error(`catch, ${err}`));
    },
    'GET_AREA': async () => {
      return area
        .then(
          res => {
            return res;
          },
          err => {
            return err;
          }
        )
        .catch(err => console.error(`catch, ${err}`));
    },
    'GET_METRO': async () => {
      return metro
        .then(
          res => {
            return res;
          },
          err => {
            return err;
          }
        )
        .catch(err => console.error(`catch, ${err}`));
    },
  }
}
