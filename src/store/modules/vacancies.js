import Vue from 'vue';

const vacancies = new Promise(function(resolve, reject) {
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
        'teenagers',
        'students',
        'pensioners',
        'disabled',
        'foreigners',
        'detail',
        'weekend'
      ],
      date: '26.04.2018',
      favorite: false,
      status: '2 ч 35 мин',
      details: {
        duties: [
          'Разработка КД на нестандартное оборудование (ванны, емкости и др.), технологическую оснастку.',
          'Работа с Заказчиком по согласованию КД',
          'Выдача документации в производство',
          'Авторский надзор за изготовлением и эксплуатацией изделий, выпущенных согласно КД',
          'Проведение технических расчетов, подбор комплектующих, оптимизация расходов по изготовлению изделий',
          'Разработка паспортов, инструкций по эксплуатации и другой технической документации.'
        ],
        demands: [
          {
            title: 'Знание ЕСКД'
          },
          {
            title: 'Умение работать AutoCAD, КОМПАС'
          },
          {
            title: 'Высшее техническое образование'
          },
          {
            title: 'Владение языком - английским и уровень владения',
            values: ['продвинутый']
          },
          {
            title: 'Требование знание компьютера',
            values: ['да']
          },
          {
            title: 'Требование наличие компьютера',
            values: ['не имеет значение']
          },
          {
            title: 'Требование наличие интернет',
            values: ['не имеет значение']
          },
          {
            title: 'Требование наличие водительских прав',
            values: ['В-легковые автомобили']
          },
          {
            title: 'Требование обязательное наличие легкового автомобиля',
            values: ['седан', 'хатчбек']
          },
          {
            title: 'Требование обязательное наличие грузового автомобиля',
            values: ['особо малый 0,3-1т']
          },
        ],
        terms: [
          {
            title: 'График сменности',
            values: ['ежедневно 1-ая смена']
          },
          {
            title: 'Тип занятности',
            values: ['полная занятность']
          },
          {
            title: 'График работы',
            values: ['полный рабочий день']
          },
          {
            title: 'График сменности',
            values: ['ежедневно 1-ая смена']
          },
          {
            title: 'Без опыта работы ',
            values: ['не примем']
          },
          {
            title: 'Опыт работы',
            values: ['не имеет значение']
          },
          {
            title: 'Время работы',
            values: ['пн.-чт. 8:30 - 17:30, пт. 8:30 - 16:30']
          },
          {
            title: 'Оформление в соответствии с ТК РФ'
          },
          {
            title: 'Возможны командировки'
          },
          {
            title: 'Премии за проекты'
          },
        ],
        salaryDetail: [
          {
            title: 'Выплата зарплаты',
            values: ['2 раза в месяц']
          }
        ],
        additionally: 'Стаж работы водителем от 3-х-лет, подтвержденный записью в трудовой книжке. Наличие мед. книжки. Развоз продукции по торговым точкам по городу и области (совместно с грузчиком-экспедитором).',
      },
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
      details: {
        duties: [
          'Разработка КД на нестандартное оборудование (ванны, емкости и др.), технологическую оснастку.',
          'Работа с Заказчиком по согласованию КД',
          'Выдача документации в производство',
          'Авторский надзор за изготовлением и эксплуатацией изделий, выпущенных согласно КД',
          'Проведение технических расчетов, подбор комплектующих, оптимизация расходов по изготовлению изделий',
          'Разработка паспортов, инструкций по эксплуатации и другой технической документации.'
        ],
        demands: [
          {
            title: 'Знание ЕСКД'
          },
          {
            title: 'Умение работать AutoCAD, КОМПАС'
          },
          {
            title: 'Высшее техническое образование'
          },
          {
            title: 'Владение языком - английским и уровень владения',
            values: ['продвинутый']
          },
          {
            title: 'Требование знание компьютера',
            values: ['да']
          },
          {
            title: 'Требование наличие компьютера',
            values: ['не имеет значение']
          },
          {
            title: 'Требование наличие интернет',
            values: ['не имеет значение']
          },
          {
            title: 'Требование наличие водительских прав',
            values: ['В-легковые автомобили']
          },
          {
            title: 'Требование обязательное наличие легкового автомобиля',
            values: ['седан', 'хатчбек']
          },
          {
            title: 'Требование обязательное наличие грузового автомобиля',
            values: ['особо малый 0,3-1т']
          },
        ],
        terms: [
          {
            title: 'График сменности',
            values: ['ежедневно 1-ая смена']
          },
          {
            title: 'Тип занятности',
            values: ['полная занятность']
          },
          {
            title: 'График работы',
            values: ['полный рабочий день']
          },
          {
            title: 'График сменности',
            values: ['ежедневно 1-ая смена']
          },
          {
            title: 'Без опыта работы ',
            values: ['не примем']
          },
          {
            title: 'Опыт работы',
            values: ['не имеет значение']
          },
          {
            title: 'Время работы',
            values: ['пн.-чт. 8:30 - 17:30, пт. 8:30 - 16:30']
          },
          {
            title: 'Оформление в соответствии с ТК РФ'
          },
          {
            title: 'Возможны командировки'
          },
          {
            title: 'Премии за проекты'
          },
        ],
        salaryDetail: [
          {
            title: 'Выплата зарплаты',
            values: ['2 раза в месяц']
          }
        ],
        additionally: 'Стаж работы водителем от 3-х-лет, подтвержденный записью в трудовой книжке. Наличие мед. книжки. Развоз продукции по торговым точкам по городу и области (совместно с грузчиком-экспедитором).',
      },
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
      moderated: false,
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
const cv = new Promise(function(resolve, reject) {
  resolve([
    {
      type: 'cv',
      img: '/img/avatar.jpg',
      withoutExperience: false,
      anyProfession: true,
      title: 'Рабочий на производство',
      link: '/',
      name: 'ЗАО Сармовская кондитерская фабрика',
      city: 'Нижний Новгород',
      area: 'Советсикй район',
      salary: '20 000 - 100 000 ₽',
      phones: [
        '+7 (910) 738-43-85'
      ],
      tags: [],
      date: '26.04.2018',
      favorite: false,
      status: 'online',
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
      openToOffers: true,
      activeSearch: false,
      rubric: [
        'Благоустройство',
        'Обслуживание инженерных систем'
      ],
      time: '2 часа 30 минут'
    },
    {
      type: 'cv',
      img: '/img/avatar.jpg',
      withoutExperience: false,
      anyProfession: true,
      title: 'Рабочий на производство',
      link: '/',
      name: 'ЗАО Сармовская кондитерская фабрика',
      city: 'Нижний Новгород',
      area: 'Советсикй район',
      salary: '20 000 - 100 000 ₽',
      phones: [
        '+7 (910) 738-43-85'
      ],
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
      urgently: true,
      prestige: false,
      moderated: true,
      openToOffers: false,
      activeSearch: true,
      rubric: [
        'Благоустройство',
        'Обслуживание инженерных систем'
      ],
      time: '2 часа 30 минут'
    },
  ]);
});
const vacancies_cv = new Promise(function(resolve, reject) {
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
        'teenagers',
        'students',
        'pensioners',
        'disabled',
        'foreigners',
        'detail',
        'weekend'
      ],
      date: '26.04.2018',
      favorite: false,
      status: '2 ч 35 мин',
      details: {
        duties: [
          'Разработка КД на нестандартное оборудование (ванны, емкости и др.), технологическую оснастку.',
          'Работа с Заказчиком по согласованию КД',
          'Выдача документации в производство',
          'Авторский надзор за изготовлением и эксплуатацией изделий, выпущенных согласно КД',
          'Проведение технических расчетов, подбор комплектующих, оптимизация расходов по изготовлению изделий',
          'Разработка паспортов, инструкций по эксплуатации и другой технической документации.'
        ],
        demands: [
          {
            title: 'Знание ЕСКД'
          },
          {
            title: 'Умение работать AutoCAD, КОМПАС'
          },
          {
            title: 'Высшее техническое образование'
          },
          {
            title: 'Владение языком - английским и уровень владения',
            values: ['продвинутый']
          },
          {
            title: 'Требование знание компьютера',
            values: ['да']
          },
          {
            title: 'Требование наличие компьютера',
            values: ['не имеет значение']
          },
          {
            title: 'Требование наличие интернет',
            values: ['не имеет значение']
          },
          {
            title: 'Требование наличие водительских прав',
            values: ['В-легковые автомобили']
          },
          {
            title: 'Требование обязательное наличие легкового автомобиля',
            values: ['седан', 'хатчбек']
          },
          {
            title: 'Требование обязательное наличие грузового автомобиля',
            values: ['особо малый 0,3-1т']
          },
        ],
        terms: [
          {
            title: 'График сменности',
            values: ['ежедневно 1-ая смена']
          },
          {
            title: 'Тип занятности',
            values: ['полная занятность']
          },
          {
            title: 'График работы',
            values: ['полный рабочий день']
          },
          {
            title: 'График сменности',
            values: ['ежедневно 1-ая смена']
          },
          {
            title: 'Без опыта работы ',
            values: ['не примем']
          },
          {
            title: 'Опыт работы',
            values: ['не имеет значение']
          },
          {
            title: 'Время работы',
            values: ['пн.-чт. 8:30 - 17:30, пт. 8:30 - 16:30']
          },
          {
            title: 'Оформление в соответствии с ТК РФ'
          },
          {
            title: 'Возможны командировки'
          },
          {
            title: 'Премии за проекты'
          },
        ],
        salaryDetail: [
          {
            title: 'Выплата зарплаты',
            values: ['2 раза в месяц']
          }
        ],
        additionally: 'Стаж работы водителем от 3-х-лет, подтвержденный записью в трудовой книжке. Наличие мед. книжки. Развоз продукции по торговым точкам по городу и области (совместно с грузчиком-экспедитором).',
      },
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
      details: {
        duties: [
          'Разработка КД на нестандартное оборудование (ванны, емкости и др.), технологическую оснастку.',
          'Работа с Заказчиком по согласованию КД',
          'Выдача документации в производство',
          'Авторский надзор за изготовлением и эксплуатацией изделий, выпущенных согласно КД',
          'Проведение технических расчетов, подбор комплектующих, оптимизация расходов по изготовлению изделий',
          'Разработка паспортов, инструкций по эксплуатации и другой технической документации.'
        ],
        demands: [
          {
            title: 'Знание ЕСКД'
          },
          {
            title: 'Умение работать AutoCAD, КОМПАС'
          },
          {
            title: 'Высшее техническое образование'
          },
          {
            title: 'Владение языком - английским и уровень владения',
            values: ['продвинутый']
          },
          {
            title: 'Требование знание компьютера',
            values: ['да']
          },
          {
            title: 'Требование наличие компьютера',
            values: ['не имеет значение']
          },
          {
            title: 'Требование наличие интернет',
            values: ['не имеет значение']
          },
          {
            title: 'Требование наличие водительских прав',
            values: ['В-легковые автомобили']
          },
          {
            title: 'Требование обязательное наличие легкового автомобиля',
            values: ['седан', 'хатчбек']
          },
          {
            title: 'Требование обязательное наличие грузового автомобиля',
            values: ['особо малый 0,3-1т']
          },
        ],
        terms: [
          {
            title: 'График сменности',
            values: ['ежедневно 1-ая смена']
          },
          {
            title: 'Тип занятности',
            values: ['полная занятность']
          },
          {
            title: 'График работы',
            values: ['полный рабочий день']
          },
          {
            title: 'График сменности',
            values: ['ежедневно 1-ая смена']
          },
          {
            title: 'Без опыта работы ',
            values: ['не примем']
          },
          {
            title: 'Опыт работы',
            values: ['не имеет значение']
          },
          {
            title: 'Время работы',
            values: ['пн.-чт. 8:30 - 17:30, пт. 8:30 - 16:30']
          },
          {
            title: 'Оформление в соответствии с ТК РФ'
          },
          {
            title: 'Возможны командировки'
          },
          {
            title: 'Премии за проекты'
          },
        ],
        salaryDetail: [
          {
            title: 'Выплата зарплаты',
            values: ['2 раза в месяц']
          }
        ],
        additionally: 'Стаж работы водителем от 3-х-лет, подтвержденный записью в трудовой книжке. Наличие мед. книжки. Развоз продукции по торговым точкам по городу и области (совместно с грузчиком-экспедитором).',
      },
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
      type: 'cv',
      img: '/img/avatar.jpg',
      withoutExperience: false,
      anyProfession: true,
      title: 'Рабочий на производство',
      link: '/',
      name: 'ЗАО Сармовская кондитерская фабрика',
      city: 'Нижний Новгород',
      area: 'Советсикй район',
      salary: '20 000 - 100 000 ₽',
      phones: [
        '+7 (910) 738-43-85'
      ],
      tags: [],
      date: '26.04.2018',
      favorite: false,
      status: 'online',
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
      openToOffers: true,
      activeSearch: false,
      rubric: [
        'Благоустройство',
        'Обслуживание инженерных систем'
      ],
      time: '2 часа 30 минут'
    },
    {
      type: 'cv',
      img: '/img/avatar.jpg',
      withoutExperience: false,
      anyProfession: true,
      title: 'Рабочий на производство',
      link: '/',
      name: 'ЗАО Сармовская кондитерская фабрика',
      city: 'Нижний Новгород',
      area: 'Советсикй район',
      salary: '20 000 - 100 000 ₽',
      phones: [
        '+7 (910) 738-43-85'
      ],
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
      urgently: true,
      prestige: false,
      moderated: true,
      openToOffers: false,
      activeSearch: true,
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
      recommended: false,
      best: false,
      urgently: false,
      prestige: false,
      moderated: false,
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
    'GET_VACANCIES_CV': async () => {
      return vacancies
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
    'GET_CV': async () => {
      return cv
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
    'GET_VACANCIES': async () => {
      return vacancies_cv
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
