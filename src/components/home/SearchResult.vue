<template>
  <div class="search-result">
    <div class="sorting">
      <Select
          :data="period"
          class="select-link"
      />
      <Select
          :data="typeSorting"
          class="select-link"
      />
      <div class="sorting__map">
        <i class="btn__icon icon-map-marked"></i>
      </div>
      <Select
          :data="actual"
          class="select-link"
      />
    </div>
    <div class="cards">
      <Card
          v-for="card in cards"
          :data="card"
      />
    </div>
  </div>
</template>

<script>
import Select from "@/components/form/Select";
import Card from "@/components/Card";
export default {
  name: "SearchResult",
  components: {Card, Select},
  data() {
    return {
      period: {
        defaultValue: 0,
        options: [
          {
            key: 0,
            value: 'За весь период'
          }
        ]
      },
      typeSorting: {
        defaultValue: 0,
        options: [
          {
            key: 0,
            value: 'По соответствию'
          }
        ]
      },
      actual: {
        defaultValue: 0,
        options: [
          {
            key: 0,
            value: 'Показать, где сейчас находятся'
          }
        ]
      },
      cards: [
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
            '.NET програмирование',
            'Bootstrap3',
            'CSS',
            '.NET програмирование',
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
          status: 'Был в сети 2 ч 35 мин назад',
          duties: [
            'Разработка КД на нестандартное оборудование (ванны, емкости и др.), технологическую оснастку.;\n' +
            '•   Работа с Заказчиком по согласованию КД;   •   Выдача документации в производство; \n' +
            '•   Авторский надзор за изготовлением и эксплуатацией изделий, выпущенных согласно КД;  \n' +
            '•  Проведение технических расчетов, подбор комплектующих, оптимизация расходов \n' +
            'по изготовлению изделий;   •   Разработка паспортов, инструкций по эксплуатации и другой технической документации.\n'
          ],
          demands: [
            [
              'Знание ЕСКД'
            ],
            [
              'Умение работать AutoCAD, КОМПАС'
            ],
            [
              'Высшее техническое образование'
            ],
            [
              'Владение языком - английским и уровень владения',
              'продвинутый'
            ],
            [
              'Требование знание компьютера',
              'да'
            ],
            [
              'Требование наличие компьютера',
              'не имеет значение'
            ],
            [
              'Требование наличие интернет',
              'не имеет значение'
            ],
            [
              'Требование наличие водительских прав',
              'В-легковые автомобили'
            ],
            [
              'Требование обязательное наличие легкового автомобиля',
              'седан',
              'хатчбек'
            ],
            [
              'Требование обязательное наличие грузового автомобиля',
              'особо малый 0,3-1т'
            ],
          ],
          terms: [
            [
              'График сменности',
              'ежедневно 1-ая смена',
            ],
            [
              'Тип занятности',
              'полная занятность'
            ],
            [
              'График работы',
              'полный рабочий день',
            ],
            [
              'График сменности',
              'ежедневно 1-ая смена',
            ],
            [
              'Без опыта работы ',
              'не примем',
            ],
            [
              'Опыт работы',
              'не имеет значение',
            ],
            [
              'Время работы',
              'пн.-чт. 8:30 - 17:30, пт. 8:30 - 16:30',
            ],
            [
              'Оформление в соответствии с ТК РФ',
            ],
            [
              'Возможны командировки'
            ],
            [
              'Премии за проекты'
            ],
          ],
          salaryDetail: [
            [
              'Выплата зарплаты - 2 раза в месяц'
            ]
          ],
          additionally: 'Стаж работы водителем от 3-х-лет, подтвержденный записью в трудовой книжке. Наличие мед. книжки. Развоз продукции по торговым точкам по городу и области (совместно с грузчиком-экспедитором).',
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
          moderation: true
        },
      ]
    }
  }
}
</script>

<style lang="scss">
  .search-result {
    width: calc(100% - 400px);
    margin-top: 16px;
    padding-top: 15px;
    border-top: 1px solid #fff;
  }
  .sorting {
    display: flex;
    .select-wrap {
      margin-right: 35px;
      &:last-child {
        margin-left: auto;
        margin-right: 0;
      }
    }
    &__map {
      color: $links;
      font-size: 25px;
    }
  }
</style>