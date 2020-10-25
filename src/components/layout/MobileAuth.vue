<template>
  <div class="mobile-menu-box sideModal">
    <div class="sideModal__overlay" @click="$emit('close')"></div>
    <div class="sideModal__content">
      <span @click="$emit('close')" class="sideModal__close"><i class="icon icon-cross"></i></span>
      <ul class="mobile-menu-box__auth menu">
        <li class="menu__item auth-no">
          <span @click="$emit('openAuth')" class="auth-no__btn authorizationBtn">Войдите</span>
          <span class="auth-no__text">или</span>
          <router-link class="auth-no__btn" to="/">зарегистрируйтесь</router-link>
        </li>
        <li class="menu__item">
          <router-link class="publish" to="/">
          <span class="publish__text">Подать объявление</span>
            <i class="publish__icon icon-arrow-right"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileAuth"
}
</script>

<style lang="scss">
.sideModal {
  position: fixed;
  top: 0;
  right: -110%;
  bottom: 0;
  z-index: 1100;
  width: 100vw;
  height: 100vh;
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(#000, .5);
    opacity: 0;
    transition: opacity .3s;
  }
  &__content {
    position: absolute;
    top: 0;
    right: -100%;
    width: 320px;
    height: 100vh;
    padding: 50px 20px;
    background-color: #fff;
    border: 1px solid #e8e8e8;
    box-shadow: 0 3px 15px rgba(#000, .35);
    transition: right .5s;
  }
  &.active {
    right: 0;
    .sideModal {
      &__overlay {
        opacity: 1;
      }

      &__content {
        right: 0;
      }
    }
  }
  &__close {
    position: absolute;
    top: 17px;
    right: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17px;
    height: 17px;
    color: #000;
    &:hover {
      cursor: pointer;
      color: $links;
    }
  }
}
.mobile-menu-box {
  &__auth {
    padding: 0;
    margin: 0;
    .menu {
      &__item {
        display: flex;
        align-items: center;
        height: 40px;
        padding: 0 20px;
        border-bottom: 1px solid #ececec;
      }
    }
  }
  .auth-no {
    font-size: 15px;
    font-weight: 300;
    line-height: 1;
    color: #000;
    &__btn {
      color: $links;
      background-color: transparent;
      transition: color .3s;
      &:hover {
        color: #4d8bf0;
      }
    }
    &__text {
      margin: 0 4px;
    }
  }
  .publish {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: #fd2f20;
    &__text {
      margin-right: 15px;
    }
    &__icon {
      margin-top: 2px;
      font-size: 10px;
    }
  }
}

</style>