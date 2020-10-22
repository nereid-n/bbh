<template>
  <div class="icons-desc">
    <div class="container">
      <h2 class="h2">Обозначение иконок в блоке объявления:</h2>
      <div class="icons-desc__list">
        <div
            v-for="icon in icons"
            class="icons-desc__item">
          <i :class="`designations__icon ${icon.icon}`">
            <v-component v-if="icon.icon === 'icon-year'">
              от <span>13</span>
            </v-component>
          </i>
          <span class="icons-desc__text">{{icon.text}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Icons",
  data() {
    return {
      icons: [
        {
          icon: 'icon-tie',
          text: 'Соискатель работает, но открыт для предложений'
        },
        {
          icon: 'icon-dollar',
          text: 'Соискатель активно ищет работу'
        },
        {
          icon: 'icon-year',
          text: 'Работа для школьников'
        },
        {
          icon: 'icon-cap',
          text: 'Работа для студентов'
        },
        {
          icon: 'icon-retiree',
          text: 'Работа для пенсионеров'
        },
        {
          icon: 'icon-handicapped',
          text: 'Работа для инвалидов'
        },
        {
          icon: 'icon-globe',
          text: 'Работа для иностранцев'
        },
        {
          icon: 'icon-ruble-circle',
          text: 'Подработка на выходные'
        },
        {
          icon: 'icon-dollar-circle',
          text: 'Подработка или разовые работы'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.icons-desc {
  &__list {
    display: flex;
    justify-content: space-between;
  }
  &__item {
    display: flex;
    color: #72797e;
    font-size: 12px;
  }
}
.designations {
  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 23px;
    width: 23px;
    height: 23px;
    margin-right: 12px;
    font-style: normal;
    text-align: center;
    border: 1px solid #fff;
    border-radius: 50%;
    &.icon {
      &-star-alt {
        position: absolute;
        padding-bottom: 1px;
        color: #fff;
        background-color: #feba00;
        box-shadow: 0 0 5px 2px rgba(#fff, .95);
        transform: translate(16px, -32px);
      }
      &-tie {
        color: #ffecc2;
        background-color: #feae00;
        box-shadow: 0 0 5px 2px rgba(#ffecc2, .95); }
      &-dollar {
        color: #ffc1c3;
        background-color: #ff5458;
        box-shadow: 0 0 5px 2px rgba(#ffc1c3, .95); }
      &-year {
        flex-direction: column;
        font-size: 7px;
        text-transform: uppercase;
        line-height: 1;
        color: $primary;
        background-color: #ffd8d5;
        box-shadow: 0 0 5px 2px rgba(#ffd8d5, .95);
        span {
          font-size: 12px;
          font-weight: 500;
        }
      }
      &-cap {
        align-items: flex-end;
        padding-bottom: 2px;
        color: #fb54ef;
        background-color: #ffd5fc;
        box-shadow: 0 0 5px 2px rgba(#ffd5fc, .95);
      }
      &-retiree {
        color: $links;
        background-color: #c5deff;
        box-shadow: 0 0 5px 2px rgba(#c5deff, .95);
      }
      &-handicapped {
        color: #7e7e0c;
        background-color: #f9f9ba;
        box-shadow: 0 0 5px 1px rgba(#f9f9ba, .95);
      }
      &-globe {
        color: #7e3cab;
        background-color: #eed5ff;
        box-shadow: 0 0 5px 1px rgba(#eed5ff, .95);
      }
      &-ruble-circle {
        color: #12acba;
        background-color: #c5faff;
        box-shadow: 0 0 5px 1px rgba(#c5faff, .95);
      }
      &-dollar-circle {
        color: #429f6c;
        background-color: #c5ffdf;
        box-shadow: 0 0 5px 1px rgba(#c5ffdf, .95);
      }
    }
  }
}
</style>