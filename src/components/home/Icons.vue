<template>
  <div class="icons-desc">
    <div class="container">
      <h2 class="h2">Обозначение иконок в блоке объявления:</h2>
      <div class="icons-desc__list">
        <div
            v-for="icon in icons"
            class="icons-desc__item">
          <Icon :icon="icon.icon"/>
          <span class="icons-desc__text" v-html="icon.text"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  name: "Icons",
  components: {Icon},
  data() {
    return {
      icons: [
        {
          icon: 'icon-tie',
          text: 'Соискатель работает,<br>но открыт для предложений'
        },
        {
          icon: 'icon-dollar',
          text: 'Соискатель активно<br>ищет работу'
        },
        {
          icon: 'icon-year',
          text: 'Работа для<br>школьников'
        },
        {
          icon: 'icon-cap',
          text: 'Работа для<br>студентов'
        },
        {
          icon: 'icon-retiree',
          text: 'Работа для<br>пенсионеров'
        },
        {
          icon: 'icon-handicapped',
          text: 'Работа для<br>инвалидов'
        },
        {
          icon: 'icon-globe',
          text: 'Работа для<br>иностранцев'
        },
        {
          icon: 'icon-ruble-circle',
          text: 'Подработка<br>на выходные'
        },
        {
          icon: 'icon-dollar-circle',
          text: 'Подработка или<br>разовые работы'
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
    align-items: center;
    padding-right: 15px;
    color: #72797e;
    font-size: 12px;
    white-space: nowrap;
    &:last-child {
      padding-right: 0;
    }
    @media (max-width: 1540px) {
      font-size: 11px;
    }
  }
}
</style>