<template>
  <div class="container">
    <div class="company">
      <h2 class="h2">Работа в компаниях:</h2>
      <div class="company__list">
        <div
            v-for="company in companies"
            class="company__item"
        >
          <span class="company__num">{{company.num}}</span>
          <div class="company__link">
            <div class="company__image">
              <img class="img" :src="company.img" :alt="company.title">
            </div>
            <div class="company__name">{{company.title}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Companies",
  data() {
    return {
      companies: [
        {
          num: '54',
          img: '/img/companies/1.png',
          title: 'Аэрофлот'
        },
        {
          num: '2',
          img: '/img/companies/2.png',
          title: 'Abby'
        },{
          num: '2',
          img: '/img/companies/3.png',
          title: 'Лаборатория Касперского'
        }
        ,{
          num: '2',
          img: '/img/companies/4.png',
          title: 'РБК'
        }
        ,{
          num: '12',
          img: '/img/companies/5.png',
          title: 'Mark & Spencer'
        }
        ,{
          num: '1',
          img: '/img/companies/6.png',
          title: 'Сибур'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.company {
  margin-top: 47px;
  margin-bottom: 24px;
  @media (max-width: $xl) {
    margin-top: 26px;
  }
  .h2 {
    margin-bottom: 37px;
    @media (max-width: $xl) {
      margin-bottom: 18px;
    }
  }
  &__list {
    display: flex;
    justify-content: space-between;
  }
  &__item {
    position: relative;
    padding: 22px 0;
    max-width: calc(100% / 6);
    @media (max-width: $xl) {
      padding-bottom: 0;
    }
    &:nth-child(5),
    &:nth-child(6 ){
      @media (max-width: $xl) {
        display: none;
      }
    }
  }
  &__num {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 22px;
    height: 22px;
    font-size: 14px;
    color: #fff;
    background-color: #ff0000;
    border-radius: 5px;
  }
  &__link {
    &:hover {
      .company__image {
        filter: grayscale(0%);
      }
    }
  }
  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 66px;
    margin-bottom: 7px;
    filter: grayscale(100%);
    @media (max-width: $xl) {
      min-height: 47px;
    }
    .img {
      width: auto !important;
      @media (max-width: $xl) {
        max-height: 26px;
      }
    }
  }
  &__name {
    text-align: center;
    line-height: 20px;
    color: #5c6266;
  }
}
</style>