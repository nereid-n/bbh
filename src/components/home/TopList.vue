<template>
  <div class="container top-list-wrap">
    <div class="top-list__content">
      <div
          v-for="list in lists"
          class="top-list__column"
      >
        <h2 class="h2">{{list.title}}</h2>
        <ul class="top-list">
          <li v-for="li in list.list">
            <router-link :to="li.link">
              {{li.title}}
            </router-link>
          </li>
        </ul>
        <router-link class="link" :to="list.more">
          Смотреть полностью
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopList",
  data() {
    return {
      lists: [
        {
          title: 'Работа в других городах:',
          list: [
            {
              title: 'Работа в Москве',
              link: '/'
            },
            {
              title: 'Работа в Видном',
              link: '/'
            },
            {
              title: 'Работа в Дзержинском',
              link: '/'
            },
            {
              title: 'Работа в Долгопрудном',
              link: '/'
            },
            {
              title: 'Работа в Котельниках',
              link: '/'
            },
            {
              title: 'Работа в Развилке (Москва)',
              link: '/'
            },
            {
              title: 'Работа в Мытищах',
              link: '/'
            },
            {
              title: 'Работа в Путилкове',
              link: '/'
            },
            {
              title: 'Работа в Химках',
              link: '/'
            },
            {
              title: 'Работа в Реутове',
              link: '/'
            }
          ],
          more: '/'
        },
        {
          title: 'Полезное:',
          list: [
            {
              title: 'Работа для программиста',
              link: '/'
            },
            {
              title: 'Работа для бухгалтера',
              link: '/'
            },
            {
              title: 'Работа для инженера',
              link: '/'
            },
            {
              title: 'Работа для менеджера по продажам',
              link: '/'
            },
            {
              title: 'Работа для директора',
              link: '/'
            },
            {
              title: 'Работа для администратора',
              link: '/'
            },
            {
              title: 'Работа для маркетолога',
              link: '/'
            },
            {
              title: 'Работа для дизайнера',
              link: '/'
            },
            {
              title: 'Работа для юриста',
              link: '/'
            }
          ],
          more: '/'
        },
        {
          title: 'Топ-10 профессий',
          list: [
            {
              title: 'Продавец',
              link: '/'
            },
            {
              title: 'Охранник',
              link: '/'
            },
            {
              title: 'Водитель',
              link: '/'
            },
            {
              title: 'Кассир',
              link: '/'
            },
            {
              title: 'Менеджер по продажам',
              link: '/'
            },
            {
              title: 'Оператор',
              link: '/'
            },
            {
              title: 'Продавец-кассир',
              link: '/'
            },
            {
              title: 'Инженер',
              link: '/'
            },
            {
              title: 'Повар',
              link: '/'
            },
            {
              title: 'Грузчик',
              link: '/'
            }
          ],
          more: '/'
        },
        {
          title: 'Популярные запросы:',
          list: [
            {
              title: 'Вакансии прямых работодателей',
              link: '/'
            },
            {
              title: 'На полный рабочий день',
              link: '/'
            },
            {
              title: 'Со сменным графиком',
              link: '/'
            },
            {
              title: 'С гибким графиком',
              link: '/'
            },
            {
              title: 'Работа на дому',
              link: '/'
            },
            {
              title: 'Работа с проживанием',
              link: '/'
            },
            {
              title: 'Работа для женщин',
              link: '/'
            },
            {
              title: 'Работа в крупных компаниях',
              link: '/'
            },
            {
              title: 'Работа в иностранных компаниях',
              link: '/'
            },
            {
              title: 'Работа в госучреждениях',
              link: '/'
            }
          ],
          more: '/'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.top-list {
  padding: 0;
  list-style: none;
  @media (max-width: $xl) {
    margin-bottom: 12px;
  }
  li {
    padding-bottom: 16px;
    color: $main;
    a {
      color: inherit;
    }
  }
  &__content {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-top: 55px;
    padding-bottom: 52px;
    @media (max-width: $xl) {
      padding-top: 32px;
      padding-bottom: 29px;
    }
    &:before,
    &:after {
      position: absolute;
      content: '';
      left: 44px;
      right: 44px;
      height: 1px;
      background-color: #d1d1d1;
      @media (max-width: $xl) {
        left: 0;
        right: 0;
      }
    }
    &:before {
      top: 0;
    }
    &:after {
      bottom: 0;
    }
  }
  &__column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 30px;
    flex-grow: 1;
    border-right: 1px solid #d1d1d1;
    &:nth-child(1),
    &:nth-child(2) {
      display: none;
    }
    &:nth-child(3) {
      @media (max-width: $xl) {
        padding-left: 0;
      }
    }
    &:last-child {
      border-right: none;
    }
    &:first-child {
      padding-right: 0;
    }
    .h2 {
      margin-bottom: 22px;
    }
    .link {
      margin-top: auto;
    }
  }
  &-wrap {
    @media (max-width: $md) {
      display: none;
    }
  }
}

.link {
  display: inline-flex;
  align-items: center;
  color: $links;
  font-size: 17px;
  border-bottom: 1px solid #bdd3f2;
  cursor: pointer;
  &:hover {
    color: #488eed;
  }
  i {
    margin-left: 6px;
  }
}
</style>