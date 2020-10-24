<template>
  <div class="work-city">
    <div class="container">
      <div class="work-city__content">
        <h2 class="h2">Работа в других городах</h2>
        <div class="work-city__items">
          <div
              v-for="city in cities"
              class="work-city__item"
          >
            <div class="work-city__img">
              <img :src="city.img" :alt="city.title">
            </div>
            <div class="work-city__title">
              {{city.title}}
            </div>
          </div>
        </div>
        <router-link class="link" to="/">
          Смотреть полностью
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkCity",
  data() {
    return {
      cities: [
        {
          img: '/img/emblems/1.png',
          title: 'Работа в Москве',
          link: '/'
        },
        {
          img: '/img/emblems/2.png',
          title: 'Работа в Санкт-Петербурге',
          link: '/'
        },
        {
          img: '/img/emblems/3.png',
          title: 'Работа в Новосибирске',
          link: '/'
        },
        {
          img: '/img/emblems/4.png',
          title: 'Работа в Екатеринбурге',
          link: '/'
        },
        {
          img: '/img/emblems/6.png',
          title: 'Работа в Казани',
          link: '/'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .work-city {
    display: none;
    padding-top: 26px;
    @media (max-width: $xl) {
      display: block;
    }
    &__content {
      padding-bottom: 28px;
      border-bottom: 1px solid #d1d1d1;
    }
    &__items {
      display: flex;
      justify-content: space-between;
      margin-top: 27px;
      margin-bottom: 15px;
    }
    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    &__img {
      margin-bottom: 10px;
      filter: grayscale(100%);
    }
  }
</style>