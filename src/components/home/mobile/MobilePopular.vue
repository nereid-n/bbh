<template>
  <div class="mobile-popular">
    <div class="container">
      <h2 class="h2">Популярные запросы</h2>
      <div class="mobile-popular__block">
        <div class="mobile-popular__title">По рубрике</div>
        <div class="mobile-popular__links">
          <router-link
              v-for="item in rubric"
              class="mobile-popular__link"
              to="/"
          >
            {{item.title}}
          </router-link>
        </div>
        <router-link to="/" class="mobile-popular__more">
          <img src="/img/icons/popular1.png" alt="">
          <span>Посмотреть все категории</span>
        </router-link>
      </div>
      <div class="mobile-popular__block">
        <div class="mobile-popular__title">По компании</div>
        <div class="mobile-popular__links">
          <router-link
              v-for="item in company"
              class="mobile-popular__link"
              to="/"
          >
            {{item.title}}
          </router-link>
        </div>
        <router-link to="/" class="mobile-popular__more">
          <img src="/img/icons/popular2.png" alt="">
          <span>Посмотреть все компании</span>
        </router-link>
      </div>
      <div class="mobile-popular__block">
        <div class="mobile-popular__title">По профессии</div>
        <div class="mobile-popular__links">
          <router-link
              v-for="item in profession"
              class="mobile-popular__link"
              to="/"
          >
            {{item.title}}
          </router-link>
        </div>
        <router-link to="/" class="mobile-popular__more">
          <img src="/img/icons/popular3.png" alt="">
          <span>Посмотреть все профессии</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobilePopular",
  data() {
    return {
      rubric: [
        {
          title: 'Продажи'
        },
        {
          title: 'Обслуживание клиентов'
        },
        {
          title: 'Бухгалтерский учет'
        },
        {
          title: 'Начальный уровень'
        },
        {
          title: 'Административный помощник'
        },
        {
          title: 'Розничная торговля'
        },
        {
          title: 'Дипломированная медсестра'
        }
      ],
      company: [
        {
          title: 'ABBY',
        },
        {
          title: 'Аэрофлот',
        },
        {
          title: 'Лаборатория Касперского',
        },
        {
          title: 'СИБУР',
        },
        {
          title: 'Mark & Spencer',
        },
        {
          title: 'РБК'
        }
      ],
      profession: [
        {
          title: 'Повар',
        },
        {
          title: 'Охранник',
        },
        {
          title: 'Фармацевт',
        },
        {
          title: 'Строитель',
        },
        {
          title: 'Электромонтер',
        },
        {
          title: 'Уборщик'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
  .mobile-popular {
    display: none;
    padding: 27px 0 0;
    background-color: #f5f7f9;
    border-bottom: 1px solid #dddddd;
    @media (max-width: $md) {
      display: block;
    }
    .h2 {
      margin-bottom: 17px;
    }
    &__title {
      margin-bottom: 9px;
      font-size: 17px;
    }
    &__link {
      position: relative;
      padding-right: 7px;
      color: #b74149;
      font-size: 13px;
      font-weight: 300;
      line-height: 18px;
      &:after {
        position: absolute;
        top: 6px;
        right: 4px;
        width: 2px;
        height: 2px;
        background-color: #b74149;
        content: '';
      }
      &:last-of-type {
        &:after {
          display: none;
        }
      }
    }
    &__more {
      display: flex;
      align-items: center;
      margin-top: 7px;
      color: #b74149;
      font-size: 12px;
      font-weight: 700;
      span {
        margin-left: 5px;
      }
    }
    &__block {
      margin-bottom: 28px;
    }
  }
</style>