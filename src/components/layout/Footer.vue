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
    &__content {
      display: flex;
      align-items: flex-start;
      padding-left: 45px;
      @media (max-width: $xl) {
        padding-left: 0;
        flex-wrap: wrap;
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
      &-link {
        margin-bottom: 8px;
        color: inherit;
        font-size: 13px;
        border-bottom: 1px solid #bfbfbf;
        @media (max-width: $xl) {
          margin-right: 20px;
        }
      }
    }
    &__desc {
      margin-top: 4px;
      line-height: 1.5;
      font-size: 10px;
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
  }
</style>
