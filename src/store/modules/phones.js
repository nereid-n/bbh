import Vue from 'vue';

const phones = new Promise(function(resolve, reject) {
  resolve([
    {
      type: 'vacancy',
      img: '/img/firm.jpg',
      withoutExperience: true,
      anyProfession: false,
      title: 'Рабочий на производство',
      link: '/',
      name: 'ЗАО Сармовская кондитерская фабрика',
      city: 'Нижний Новгород',
      area: 'Советсикй район',
      salary: '20 000 - 100 000 ₽',
      phones: [
        '+7 (910) 738-43-85',
        '+7 (831) 273-21-84',
        '+7 (831) 273-84-10',
        '+7 (910) 738-43-85'
      ],
      contactPerson: 'Петрова Виктория',
      tags: [
        'CSS',
        'Bootstrap3',
        'CSS',
        'Bootstrap3',
        'CSS',
        'Bootstrap3',
        'CSS',
        'Bootstrap3'
      ],
      preferences: [
        'students',
        'pensioners'
      ],
      date: '26.04.2018',
      favorite: false,
      status: 'online',
      recommended: false,
      best: false,
      urgently: false,
      prestige: false,
      moderated: true,
      openToOffers: false,
      activeSearch: false,
      rubric: [
        'Благоустройство',
        'Обслуживание инженерных систем'
      ],
      time: '2 часа 30 минут'
    },
    {
      type: 'vacancy',
      img: '',
      withoutExperience: true,
      anyProfession: false,
      title: 'Рабочий на производство',
      link: '/',
      name: 'ЗАО Сармовская кондитерская фабрика',
      city: 'Нижний Новгород',
      area: 'Советсикй район',
      salary: '20 000 - 100 000 ₽',
      phones: [
        '+7 (910) 738-43-85',
        '+7 (831) 273-21-84'
      ],
      contactPerson: 'Петрова Виктория',
      tags: [],
      preferences: [],
      date: '26.04.2018',
      favorite: false,
      status: '2 ч 35 мин',
      vacancies: [
        {
          title: 'Наладчик оборудования 5, 6 разряда',
          salary: '20 000 - 100 000 ₽',
          favorite: false,
          link: '/'
        },
        {
          title: 'Рабочие на сбор новогодних подарков 5, 6 разряда',
          salary: '20 000 - 100 000 ₽',
          favorite: true,
          link: '/'
        },
        {
          title: 'Техник-лаборант',
          salary: '20 000 - 100 000 ₽',
          favorite: false,
          link: '/'
        }
      ],
      recommended: false,
      best: false,
      urgently: false,
      prestige: false,
      moderated: true,
      openToOffers: false,
      activeSearch: false,
      rubric: [
        'Благоустройство',
        'Обслуживание инженерных систем'
      ],
      time: '2 часа 30 минут'
    },
    {
      type: 'vacancy',
      img: '',
      withoutExperience: true,
      anyProfession: false,
      title: 'Рабочий на производство',
      link: '/',
      name: 'ЗАО Сармовская кондитерская фабрика',
      city: 'Нижний Новгород',
      area: 'Советсикй район',
      salary: '20 000 - 100 000 ₽',
      phones: [
        '+7 (910) 738-43-85'
      ],
      contactPerson: 'Петрова Виктория',
      tags: [],
      date: '26.04.2018',
      favorite: false,
      status: '2 ч 35 мин',
      vacancies: [
        {
          title: 'Наладчик оборудования 5, 6 разряда',
          salary: '20 000 - 100 000 ₽',
          favorite: false,
          link: '/'
        },
        {
          title: 'Рабочие на сбор новогодних подарков 5, 6 разряда',
          salary: '20 000 - 100 000 ₽',
          favorite: true,
          link: '/'
        },
        {
          title: 'Техник-лаборант',
          salary: '20 000 - 100 000 ₽',
          favorite: false,
          link: '/'
        }
      ],
      recommended: true,
      best: false,
      urgently: false,
      prestige: false,
      moderated: true,
      openToOffers: false,
      activeSearch: false,
      rubric: [
        'Благоустройство',
        'Обслуживание инженерных систем'
      ],
      time: '2 часа 30 минут'
    },
    {
      type: 'vacancy',
      img: '',
      withoutExperience: true,
      anyProfession: false,
      title: 'Рабочий на производство',
      link: '/',
      name: 'ЗАО Сармовская кондитерская фабрика',
      city: 'Нижний Новгород',
      area: 'Советсикй район',
      salary: '20 000 - 100 000 ₽',
      phones: [
        '+7 (910) 738-43-85'
      ],
      contactPerson: 'Петрова Виктория',
      tags: [],
      date: '26.04.2018',
      favorite: false,
      status: 'online',
      recommended: false,
      best: true,
      urgently: false,
      prestige: false,
      moderated: true,
      openToOffers: false,
      activeSearch: false,
      rubric: [
        'Благоустройство',
        'Обслуживание инженерных систем'
      ],
      time: '2 часа 30 минут'
    },
    {
      type: 'vacancy',
      img: '',
      withoutExperience: true,
      anyProfession: false,
      title: 'Рабочий на производство',
      link: '/',
      name: 'ЗАО Сармовская кондитерская фабрика',
      city: 'Нижний Новгород',
      area: 'Советсикй район',
      salary: '20 000 - 100 000 ₽',
      phones: [
        '+7 (910) 738-43-85'
      ],
      contactPerson: 'Петрова Виктория',
      tags: [],
      date: '26.04.2018',
      favorite: false,
      status: '2 ч 35 мин',
      recommended: false,
      best: false,
      urgently: false,
      prestige: true,
      moderated: true,
      openToOffers: false,
      activeSearch: false,
      rubric: [
        'Благоустройство',
        'Обслуживание инженерных систем'
      ],
      time: '2 часа 30 минут'
    },
  ]);
});

export default {
  namespaced: true,
  state: {

  },
  mutations: {

  },
  actions: {
    'GET_PHONES': async () => {
      return phones
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
