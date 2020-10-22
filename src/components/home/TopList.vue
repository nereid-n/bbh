<template>
  <div class="container">
    <div class="top-list__content">
      <div
          v-for="list in lists"
          class="top-list__column"
      >
        <h2 class="h2">{{list.title}}</h2>
        <ul
            v-for="li in list.list"
            class="top-list"
        >
          <li>
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

</style>