<template>
  <i :class="`designations__icon ${icon} ${className}`"
     v-tooltip.bottom="{content: tooltip, classes: 'designations__icon-tooltip'}">
    <template v-if="icon === 'icon-year'">
      от <span>13</span>
    </template>
  </i>
</template>

<script>
export default {
  name: "Icon",
  props: {
    icon: {
      type: String
    },
    className: {
      default: ''
    }
  },
  data() {
    return {
      tooltipsDisable: {
        'icon-year': 'Не рекомендовано для 13-17 лет',
        'icon-cap': 'Не рекомендовано для студентов',
        'icon-retiree': 'Не рекомендовано для пенсионеров',
        'icon-handicapped': 'Не рекомендовано для инвалидов',
        'icon-globe': 'Не рекомендовано для инстранцев',
        'icon-ruble-circle': 'Нет подработки или разовых работ',
        'icon-dollar-circle': 'Нет подработки на выходные',
      },
      tooltips: {
        'icon-tie': 'Работаю, но открыт для предложений',
        'icon-dollar': 'Активно ищу работу',
        'icon-year': 'Рекомендовано для 13-17 лет',
        'icon-cap': 'Рекомендовано для студентов',
        'icon-retiree': 'Рекомендовано для пенсионеров',
        'icon-handicapped': 'Рекомендовано для инвалидов',
        'icon-globe': 'Рекомендовано для инстранцев',
        'icon-ruble-circle': 'Есть подработка или разовые работы',
        'icon-dollar-circle': 'Есть подработка на выходные',
      },
    }
  },
  computed: {
    tooltip() {
      if (this.className !== 'disable') {
        return this.tooltips[this.icon];
      }
      return this.tooltipsDisable[this.icon];
    }
  }
}
</script>

<style lang="scss">
.designations {
  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 23px;
    width: 23px;
    height: 23px;
    margin-right: 12px;
    text-align: center;
    font-size: 17px;
    border: 1px solid #fff;
    border-radius: 50%;
    cursor: pointer;
    &:before {
      top: 50%;
    }
    @media (max-width: $exlarg) {
      margin-right: 8px;
    }
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
    &.disable {
      color: #c6c6c6;
      background-color: #f5f7f9;
      box-shadow: 0 0 5px 2px rgba(198, 198, 198, 0.75);
    }
    &-tooltip {
      max-width: 150px;
    }
  }
}
.tooltip {
  max-width: 550px;
  margin-top: 5px;
  padding: 5px 7px;
  color: #393838;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background-color: #f5f7f9;
  border: 1px solid #e8e8e8;
  box-shadow: 2px 2px 3px #b5b5b5;
}
</style>