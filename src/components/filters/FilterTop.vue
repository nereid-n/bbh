<template>
  <div class="filter__top">
    <div class="filter__top-text">
      Поиск:
    </div>
    <div
        v-for="(item, key, index) in items"
        class="filter__top-link"
        @click="openDropdown(key)"
    >
      {{item.linkText}}
    </div>
    <router-link class="filter__top-link filter__top-advanced" to="/">
      Расширенный поиск
    </router-link>
    <div v-if="open !== ''" class="filter__top-dropdown">
      <div class="filter__top-dropdown-lists">
        <div
            v-for="list in items[open].lists"
            class="filter__top-dropdown-list"
        >
          <div
              v-for="li in list"
              class="filter__top-dropdown-item"
              @click="clickDropdown"
          >
            <div class="filter__top-dropdown-text">
              <span>{{li.title}}</span>
            </div>
            <div v-if="li.num !== undefined" class="filter__top-dropdown-num">
              {{li.num}}
            </div>
          </div>
        </div>
      </div>
      <div class="filter__top-dropdown-footer">
        <div class="filter__top-dropdown-footer-text" @click="clickDropdown">
          <span>{{items[open].bottomText}}</span>
          <i class="btn__icon icon-angle-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterTop",
  data() {
    return {
      items: {
        cities: {
          linkText: 'по городам',
          lists: [
            [
              {
                title: 'Москва'
              },
              {
                title: 'Санкт-Петербург'
              },
              {
                title: 'Новосибирск'
              },
              {
                title: 'Екатеринбург'
              },
              {
                title: 'Нижний новгород'
              },
              {
                title: 'Самара'
              },
              {
                title: 'Омск'
              },
              {
                title: 'Казань'
              }
            ],
            [
              {
                title: 'Челябинск'
              },
              {
                title: 'Ростов-на-Дону'
              },
              {
                title: 'Уфа'
              },
              {
                title: 'Красноярск'
              },
              {
                title: 'Пермь'
              },
              {
                title: 'Воронеж'
              },
              {
                title: 'Волгоград'
              },
              {
                title: 'Краснодар'
              }
            ],
            [
              {
                title: 'Саратов'
              },
              {
                title: 'Тюмень'
              },
              {
                title: 'Тольятти'
              },
              {
                title: 'Ижевск'
              },
              {
                title: 'Барнаул'
              },
              {
                title: 'Ульяновск'
              },
              {
                title: 'Иркутск'
              },
              {
                title: 'Хабаровск'
              }
            ]
          ],
          bottomText: 'По всем городам'
        },
        rubrics: {
          linkText: 'по рубрикам',
          lists: [
            [
              {
                title: 'HR специалисты - Бизнес-тренеры',
                num: '32'
              },
              {
                title: 'IT',
                num: '10'
              },
              {
                title: 'Автобизнес - Сервисное обслуживание',
                num: '12'
              },
              {
                title: 'Административный персонал',
                num: '100'
              },
              {
                title: 'Банки - Инвестиции - Лизинг',
                num: '45'
              },
              {
                title: 'Благоустройство',
                num: '1'
              },
              {
                title: 'Бухгалтерия - Налоги - Финансы предприятия',
                num: '7'
              },
              {
                title: 'Гостиницы - Рестораны - Кафе',
                num: '90'
              },
              {
                title: 'Государственные учреждения - Местное самоуправление - некоммерческие',
                num: '24'
              },
              {
                title: 'Дизайн - Графика - Фото',
                num: '0'
              },
            ],
            [
              {
                title: 'Недвижимость',
                num: '32'
              },
              {
                title: 'Некоммерческие - Общественные организации',
                num: '10'
              },
              {
                title: 'Охрана - Безопасность - Силовые структуры',
                num: '12'
              },
              {
                title: 'Переводчик',
                num: '100'
              },
              {
                title: 'Продавец - Менеджер по работе с клиентами',
                num: '345'
              },
              {
                title: 'Производство - Инженеры - Технологи',
                num: '1'
              },
              {
                title: 'Рабочие специальности - Курьеры - Персонал для дома',
                num: '7'
              },
              {
                title: 'Сельское хозяйство - Агробизнес - Лесное хозяйство',
                num: '90'
              },
              {
                title: 'Спорт - Красота - Оздоровление',
                num: '24'
              },
              {
                title: 'Страхование',
                num: '0'
              }
            ]
          ],
          bottomText: 'По всем рубрикам'
        },
        professions: {
          linkText: 'по профессиям',
          lists: [
            [
              {
                title: 'Авиакассир',
                num: '32'
              },
              {
                title: 'Автомаляр',
                num: '10'
              },
              {
                title: 'Автомеханик',
                num: '12'
              },
              {
                title: 'Авторское право',
                num: '100'
              },
              {
                title: 'Автослесарь',
                num: '345'
              },
              {
                title: 'Автослесарь арматурщик',
                num: '1'
              },
              {
                title: 'Автострахование',
                num: '7'
              },
              {
                title: 'Автоэлектрик',
                num: '90'
              },
              {
                title: 'Агент по недвижимости',
                num: '24'
              },
              {
                title: 'Агроном',
                num: '0'
              },
              {
                title: 'Адвокат',
                num: '0'
              },
              {
                title: 'Административный директор',
                num: '1'
              },
              {
                title: 'Администратор Oracle',
                num: '56'
              },
              {
                title: 'Администратор автомойки',
                num: '185'
              },
              {
                title: 'Администратор автосалона',
                num: '56'
              },
              {
                title: 'Администратор базы данных',
                num: '185'
              },
              {
                title: 'Администратор гостиницы',
                num: '32'
              },
              {
                title: 'Администратор клиники',
                num: '45'
              },
              {
                title: 'Администратор магазина',
                num: '574'
              },
            ],
            [
              {
                title: 'Администратор офиса',
                num: '32'
              },
              {
                title: 'Администратор ресторана',
                num: '10'
              },
              {
                title: 'Администратор сайта',
                num: '12'
              },
              {
                title: 'Администратор салона красоты',
                num: '100'
              },
              {
                title: 'Аккаунт-менеджер',
                num: '345'
              },
              {
                title: 'Аккумуляторщик',
                num: '1'
              },
              {
                title: 'Актер',
                num: '7'
              },
              {
                title: 'Актуарий',
                num: '90'
              },
              {
                title: 'Акушер',
                num: '4'
              },
              {
                title: 'Акушер-гинеколог',
                num: '0'
              },
              {
                title: 'Аллерголог',
                num: '0'
              },
              {
                title: 'Аллерголог-иммунолог',
                num: '1'
              },
              {
                title: 'Аналитик продаж',
                num: '6'
              },
              {
                title: 'Аналитик фондового рынка',
                num: '185'
              },
              {
                title: 'Ангиохирург',
                num: '56'
              },
              {
                title: 'Андеррайтер',
                num: '185'
              },
              {
                title: 'Андролог',
                num: '2'
              },
              {
                title: 'Андролог-эндокринолог',
                num: '2'
              },
            ],
            [
              {
                title: 'Анестезиолог',
                num: '2'
              },
              {
                title: 'Анестезиолог-реаниматолог',
                num: '0'
              },
              {
                title: 'Аниматор',
                num: '2'
              },
              {
                title: 'Арбитраж',
                num: '0'
              },
              {
                title: 'Аритмолог',
                num: '5'
              },
              {
                title: 'Арматурщик',
                num: '1'
              },
              {
                title: 'Ароматерапевт',
                num: '7'
              },
              {
                title: 'Арт-директор',
                num: '0'
              },
              {
                title: 'Артролог',
                num: '4'
              },
              {
                title: 'Архивариус',
                num: '0'
              },
              {
                title: 'Архитектор',
                num: '0'
              },
              {
                title: 'Архитектор ПО',
                num: '1'
              },
              {
                title: 'Архитектор-дизайнер',
                num: '6'
              },
              {
                title: 'Ассемблер',
                num: '5'
              },
              {
                title: 'Ассистент по маркетингу',
                num: '6'
              },
              {
                title: 'Ассистент руководителя',
                num: '5'
              },
              {
                title: 'Ассистент стоматолога',
                num: '2'
              },
              {
                title: 'Аудитор',
                num: '0'
              },
            ]
          ],
          bottomText: 'По всем профессиям'
        }
      },
      open: ''
    }
  },
  methods: {
    openDropdown(name) {
      if (this.open === '' || this.open !== name) {
        this.open = name;
      } else {
        this.open = '';
      }
    },
    clickDropdown() {
      this.open = '';
    },
    closeDropdown(e) {
      if (e.target.closest('.filter__top') === null) {
        this.open = '';
      }
    }
  },
  mounted() {
    document.addEventListener('click', (e) => this.closeDropdown(e));
  },
}
</script>

<style lang="scss">
  .filter__top {
    position: relative;
    display: flex;
    font-size: 15px;
    font-weight: 300;
    @media (max-width: $xl) {
      display: none;
    }
    &-text {
      margin-right: 28px;
      color: #3d3d3d;
    }
    &-link {
      margin-right: 25px;
      color: #5c6266;
      border-bottom: 1px solid #bfbfbf;
      &:hover {
        color: $links;
        cursor: pointer;
      }
    }
    &-advanced {
      margin-right: 0;
      margin-left: auto;
    }
    &-dropdown {
      position: absolute;
      top: calc(100% + 10px);
      left: 0;
      width: 100%;
      z-index: 100;
      background-color: #fff;
      border: 1px solid #f3f2f2;
      border-radius: 2px;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
      &-lists {
        display: flex;
        padding: 20px 50px;
      }
      &-list {
        flex-grow: 1;
        max-width: 50%;
        padding-right: 40px;
        &:last-child {
          padding-right: 0;
        }
      }
      &-item {
        display: flex;
        align-items: center;
        height: 42px;
        border-bottom: 1px solid #e4e4e4;
        cursor: pointer;
        &:last-child {
          border-bottom: none;
        }
        &:hover {
          .filter__top-dropdown-text {
            color: #488eed;
          }
        }
      }
      &-text {
        position: relative;
        max-width: calc(100% - 30px);
        width: calc(100% - 30px);
        overflow: hidden;
        white-space: nowrap;
        color: #3568b4;
        &:after {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 30px;
          content: '';
          background: linear-gradient(to left, #fff 50%, transparent);
        }
      }
      &-num {
        margin-left: auto;
        color: #ff2e20;
      }
      &-footer {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40px;
        background-color: #f6f7f9;
        &-text {
          display: flex;
          align-items: center;
          color: #3568b4;
          cursor: pointer;
          &:hover {
            color: #488eed;
          }
          i {
            margin-left: 10px;
          }
        }
      }
    }
  }
</style>