<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <nav
            v-for="list in links"
            class="footer__nav"
        >
          <router-link
              v-for="link in list"
              class="footer__nav-link"
              :to="link.link"
          >
            {{link.name}}
          </router-link>
        </nav>
        <div class="footer__right">
          <div class="footer__social-wrap">
            <div class="footer__social">
              <router-link
                  v-for="item in social"
                  :class="`footer__social-item ${item.classWrap}`"
                  :to="item.link"
              >
                <i :class="item.icon"></i>
              </router-link>
            </div>
            <div class="footer__social-text">
              Мы в соцмедиа
            </div>
            <router-link to="/" class="footer__home">
              BBH.cat
            </router-link>
          </div>
          <div class="footer__desc">
            Поиск работы - животрепещущая проблема во все времена. И если раньше главным источником информации о вакансиях были газеты и бюро по трудоустройству, то сегодня можно найти в интернете. Вы можете оставить на сайте BHH.cat свое резюме, разместить портфолио, рассказать о себе и мы постараемся Вам помочь в поискевыгодной работы.
          </div>
        </div>
      </div>
      <div class="footer__mobile">
        <div class="footer__mobile-links">
          <router-link class="footer__mobile-link" to="/">© BBH.cat</router-link>
          <router-link class="footer__mobile-link" to="/">Полная версия сайта</router-link>
        </div>
        <router-link to="/" class="footer__mobile-btn btn btn-primary">Подать объявление</router-link>
        <ul class="footer__mobile-menu">
          <li v-for="item in mobileMenu" class="list__item">
            <router-link class="list__link" :class="item.className" :to="item.link">
              <i class="list__icon" :class="item.icon"></i>
              <span class="list__text">{{item.text}}</span>
              <span class="list__num">{{item.num}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>

  export default {
    name: 'Footer',
    components: {},
    data() {
      return {
        links: [
          [
            {
              name: 'О сайте',
              link: '/'
            },
            {
              name: 'Помощь',
              link: '/'
            },
            {
              name: 'Контакты',
              link: '/'
            }
          ],
          [
            {
              name: 'Услуги и цены',
              link: '/'
            },
            {
              name: 'Карта сайта',
              link: '/'
            },
            {
              name: 'Безопасность',
              link: '/'
            }
          ],
          [
            {
              name: 'Подписаться на вакансии',
              link: '/'
            },
            {
              name: 'Подписаться на резюме',
              link: '/'
            },
            {
              name: 'Написать модератору',
              link: '/'
            }
          ]
        ],
        social: [
          {
            link: '/',
            classWrap: 'youtube',
            icon: 'icon-play'
          },
          {
            link: '/',
            classWrap: 'telegram',
            icon: 'icon-telegram-plane'
          },{
            link: '/',
            classWrap: 'facebook',
            icon: 'icon-facebook-f'
          },
          {
            link: '/',
            classWrap: 'twitter',
            icon: 'icon-twitter'
          },
          {
            link: '/',
            classWrap: 'vk',
            icon: 'icon-vk'
          },
          {
            link: '/',
            classWrap: 'ok',
            icon: 'icon-odnoklassniki'
          },
          {
            link: '/',
            classWrap: 'google',
            icon: 'icon-google'
          }
        ],
        mobileMenu: [
          {
            className: 'active',
            link: '/',
            text: 'Поиск',
            icon: 'icon-search-s',
            num: ''
          },
          {
            className: '',
            link: '/',
            text: 'Мои объявления',
            icon: 'icon-mouthpiece',
            num: ''
          },
          {
            className: '',
            link: '/',
            text: 'Рубрики',
            icon: 'icon-suitcase',
            num: ''
          },
          {
            className: '',
            link: '/',
            text: 'Резюме',
            icon: 'icon-badge',
            num: ''
          },
          {
            className: '',
            link: '/',
            text: 'Сообщения',
            icon: 'icon-envelope-m1',
            num: '23'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .footer {
    padding: 32px 0 37px;
    color: #000;
    font-weight: 300;
    @media (max-width: $md) {
      padding-top: 11px;
      padding-bottom: 0;
      background-color: #fff;
      border-top: 1px solid #f5f7f9;
    }
    &__content {
      display: flex;
      align-items: flex-start;
      padding-left: 45px;
      @media (max-width: $xl) {
        padding-left: 0;
        flex-wrap: wrap;
      }
      @media (max-width: $md) {
        justify-content: center;
      }
    }
    &__right {
      margin-top: -5px;
      margin-left: auto;
      max-width: 421px;
      @media (max-width: $xl) {
        margin-top: 23px;
        margin-left: 0;
        max-width: unset;
      }
      @media (max-width: $md) {
        display: flex;
        justify-content: center;
        width: calc(100% + 30px);
        margin-top: 9px;
        margin-left: -15px;
        margin-right: -15px;
        padding: 11px 0;
        border-top: 1px solid #f5f7f9;
        border-bottom: 1px solid #f5f7f9;
        .footer__home {
          display: none;
        }
      }
    }
    &__nav {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      padding-right: 81px;
      @media (max-width: $xl) {
        flex-direction: row;
        padding-right: 0;
      }
      @media (max-width: $md) {
        flex-wrap: wrap;
        justify-content: center;
      }
      &-link {
        margin-bottom: 8px;
        color: inherit;
        font-size: 13px;
        border-bottom: 1px solid #bfbfbf;
        @media (max-width: $xl) {
          margin-right: 20px;
        }
        @media (max-width: $md) {
          font-size: 11px;
          margin-bottom: 10px;
        }
      }
    }
    &__desc {
      margin-top: 4px;
      line-height: 1.5;
      font-size: 10px;
      @media (max-width: $md) {
        display: none;
      }
    }
    &__social {
      display: flex;
      align-items: center;
      &-wrap {
        display: flex;
        align-items: center;
      }
      &-text {
        margin-right: 15px;
        font-size: 12px;
        @media (max-width: $md) {
          display: none;
        }
      }
      &-item {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 21px;
        height: 21px;
        margin-right: 10px;
        font-size: 14px;
        color: #fff;
        border-radius: 2px;
        background-color: #aeb7c0;
        &.youtube {
          font-size: 12px;
          &:hover {
            background-color: #bb0000;
          }
        }
        &.telegram:hover {
          background-color: #517fa4;
        }
        &.facebook:hover {
          background-color: #3b5998;
        }
        &.twitter:hover {
          background-color: #00aced;
        }
        &.vk:hover {
          background-color: #45668e;
        }
        &.ok:hover {
          background-color: #f2720c;
        }
        &.google:hover {
          background-color: #dd4b39;
        }
      }
    }
    &__home {
      color: inherit;
      font-size: 12px;
      border-bottom: 1px solid #bfbfbf;
    }
    &__mobile {
      display: none;
      @media (max-width: $md) {
        display: block;
      }
      &-links {
        display: flex;
        justify-content: space-between;
        padding-top: 8px;
        padding-bottom: 18px;
        font-size: 10px;
      }
      &-link {
        border-bottom: 1px solid;
      }
      &-btn.btn {
        display: block;
        width: 100%;
        padding: 15px 15px;
      }
      &-menu {
        display: flex;
        justify-content: space-between;
        height: 47px;
        width: calc(100% + 30px);
        padding: 0 15px;
        margin-bottom: 0;
        margin-top: 18px;
        margin-left: -15px;
        list-style: none;
        background-color: #fff;
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.45);
        .list {
          &__item {
            max-width: 40px;
            text-align: center;
          }
          &__link {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-top: 7px;
            color: #72797e;
            &.active {
              color: $primary;
            }
          }
          &__icon {
            margin-bottom: 4px;
            font-size: 16px;
          }
          &__text {
            font-size: 10px;
            line-height: 8px;
          }
          &__num {
            position: absolute;
            top: 3px;
            left: 55%;
            min-width: 16px;
            height: 14px;
            padding: 0 4px;
            font-size: 10px;
            font-weight: 500;
            color: #fff;
            background-color: $primary;
            border-radius: 2px;
            &:empty {
              display: none;
            }
          }
        }
      }
    }
  }
</style>
