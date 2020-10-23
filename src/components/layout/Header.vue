<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__left">
          <img class="header__logo" src="/img/logo2.png" alt="">
          <nav class="header__nav">
            <div
              v-for="link in nav"
              :key="link.name"
              class="header__link-wrap"
            >
              <router-link
                :to="link.link"
                class="header__link"
              >
                {{link.name}}
              </router-link>
            </div>
          </nav>
          <div class="user-box">
            <div class="user-box__icons">
              <router-link
                v-for="icon in icons"
                :to="icon.link"
                :key="icon.icon"
                class="user-box__icon-wrap"
              >
                <i :class="`user-box__icon ${icon.icon}`"></i>
                <span v-if="icon.num != 0" class="user-box__icon-num">
                  {{icon.num}}
                </span>
              </router-link>
            </div>
            <div class="user-box__balance">
              <span class="user-box__balance-text">Баланс</span>
              <i class="user-box__balance-icon icon-ruble"></i>
              <span class="user-box__balance-num">10 000</span>
              <span class="user-box__balance-text"> руб</span>
            </div>
          </div>
        </div>
        <div class="header__button">
          <button class="btn btn-primary">
            Подать объявление
          </button>
        </div>
        <div class="header__right">
          <div class="header__auth">
            <button class="header__auth-link">Войдите</button>
            или
            <button class="header__auth-link">зарегистрируйтесь</button>
          </div>
          <div class="header__contacts">
            <router-link to="/" class="header__contacts-link">
              <i class="icon-map-marker"></i>
              <span>Александровск-Сахалинск</span>
            </router-link>
            <a class="header__contacts-link" href="tel:+78314374000">
              <i class="icon-phone"></i>
              <span>+7 831 43740-00</span>
            </a>
            <router-link to="/" class="header__contacts-link">
              <i class="icon-home"></i>
              <span>Контакты</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

  export default {
    name: 'Header',
    components: {},
    data() {
      return {
        nav: [
          {
            name: 'Мои объявления',
            link: '/'
          },
          {
            name: 'Найти работу',
            link: '/'
          },
          {
            name: 'Оформить подписку',
            link: '/'
          },
          {
            name: 'Поиск кандидатов',
            link: '/'
          }
        ],
        icons: [
          {
            icon: 'icon-search',
            link: '/',
            num: '1'
          },
          {
            icon: 'icon-envelope',
            link: '/',
            num: '23'
          },
          {
            icon: 'icon-bell',
            link: '/',
            num: '105'
          },
          {
            icon: 'icon-star-alt',
            link: '/',
            num: '0'
          }
        ]
      }
    },
  }
</script>

<style lang="scss">
  .header {
    padding: 14px 0;
    color: #000;
    background-color: #fff;
    &__logo {
      margin-right: 40px;
      @media (max-width: 1540px) {
        display: none;
      }
    }
    &__link {
      color: #000;
      font-size: 15px;
      font-weight: 300;
      border-bottom: 1px solid #bfbfbf;
      &:hover {
        border-bottom: none;
      }
      &-wrap {
        min-width: 165px;
        padding: 6px 0;
        @media (max-width: 1540px) {
          min-width: 140px;
        }
      }
    }
    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__left {
      display: flex;
      align-items: center;
      width: 46%;
      @media (max-width: 1540px) {
        width: 43%;
      }
    }
    &__nav {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 364px;
    }
    &__contacts {
      display: flex;
      justify-content: flex-end;
      padding: 6px 0;
      i {
        padding-right: 7px;
        color: $primary;
      }
      &-link {
        margin-left: 25px;
        font-size: 15px;
        font-weight: 300;
        color: inherit;
        white-space: nowrap;
        span {
          border-bottom: 1px dotted #bfbfbf;
        }
        &:last-child {
          span {
            border-bottom: 1px solid #bfbfbf;
          }
        }
        &:hover {
          color: $primary;
        }
        @media (max-width: 1540px) {
          margin-left: 10px;
        }
      }
    }
    &__auth {
      padding: 6px 0;
      text-align: right;
      font-size: 15px;
      font-weight: 300;
      &-link {
        padding: 0;
        color: $links;
        background-color: transparent;
        border: none;
      }
    }
  }

  .user-box {
    padding: 0 20px 0 15px;
    &__icons {
      display: flex;
      justify-content: space-between;
      padding: 4px 0;
    }
    &__icon {
      color: #c0c0c0;
      font-size: 17px;
      &-wrap {
        position: relative;
      }
      &-num {
        position: absolute;
        top: -5px;
        left: 10px;
        height: 17px;
        padding: 2px 5px;
        color: #fff;
        font-size: 12px;
        font-weight: 500;
        border-radius: 3px;
        background-color: $primary;
      }
    }
    &__balance {
      display: flex;
      align-items: center;
      font-size: 15px;
      font-weight: 300;
      color: $links;
      white-space: nowrap;
      &-icon {
        padding: 0 5px;
        font-size: 21px;
      }
    }
  }
</style>
