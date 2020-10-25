<template>
  <div class="card-wrap">
    <div class="card" :class="cardClass">
      <div v-if="data.urgently" class="footnote footnote__urgently">
        <i class="icon-fire"></i>
        <span class="footnote__text">Срочно</span>
        <i class="icon-fire"></i>
      </div>
      <div v-else-if="data.prestige" class="footnote footnote__prestige">
        <i class="icon-star"></i>
        <span class="footnote__text">Престиж</span>
        <i class="icon-star"></i>
      </div>
      <div class="card__row">
        <div class="card__left">
          <div class="card__type">
            {{type[data.type]}}
          </div>
          <div :class="`card__img ${data.type === 'vacancy' ? '' : 'card__avatar'}`">
            <img :src="img" alt="">
            <Icon v-if="data.urgently" :icon="'icon-star-alt'"/>
          </div>
          <div class="card__left-icon">
            <Icon v-if="data.openToOffers" :icon="'icon-tie'"/>
            <Icon v-if="data.activeSearch" :icon="'icon-dollar'"/>
            <i v-if="data.best" class="icon-best"></i>
          </div>
        </div>
        <div class="card__right">
          <div class="card__top" v-if="data.withoutExperience || data.anyProfession">
            <div class="card__top-text">
              {{topText}}
            </div>
            <i class="icon-question-circle-alt"></i>
            <i v-if="data.moderated" class="icon-video"></i>
          </div>
          <div class="card__main">
            <div class="card__header">
              <div class="card__header-left">
                <router-link to="/" class="card__title">{{data.title}}</router-link>
                <div class="card__name">{{data.name}}</div>
              </div>
              <div class="card__header-right">
                <div class="card__icons-wrap">
                  <div v-if="data.best" class="achievement achievement-best-employer">
                    <div class="achievement__icon"><i class="icon-circle-r"></i><span>!</span></div>
                    <span class="achievement__text">Лучший работодатель</span>
                  </div>
                  <div v-else-if="data.recommended" class="achievement achievement-recommend">
                    <div class="achievement__icon"><i class="icon"></i></div>
                    <span class="achievement__text">Мы рекомендуем!</span>
                  </div>
                  <CardIcons
                      :favorite="data.favorite"
                  />
                </div>
              </div>
            </div>
            <div class="card__place-salary">
              <div class="card__place">
                <i class="icon-map-marker-alt"></i>
                <div><span class="card__place-item">{{data.city}}</span>, <span class="card__place-item">{{data.area}}</span></div>
              </div>
              <div class="card__salary">
                <i class="icon-ruble-circle"></i>
                <span>{{data.salary}}</span>
              </div>
            </div>
            <div class="card__phones">
              <i class="icon-phone-alt"></i>
              <div>
                <template v-for="(phone, index) in data.phones">
                  <a
                      :href="phoneHref(phone)"
                  >
                    {{phone}}
                  </a><template v-if="data.contactPerson !== '' || index !== data.phones.length - 1">,</template>
                </template>
                <span v-if="data.contactPerson !== ''">
              Контактное лицо: {{data.contactPerson}}
            </span>
              </div>
              <button @click="openModalPhone = true" class="card__phones-btn">
                <i class="icon-mobile"></i>
                <span>Мобильный телефон</span>
              </button>
            </div>
            <div class="card__tags" v-if="data.tags.length > 0">
              <div
                  v-for="(tag, index) in data.tags"
                  v-if="index < 6 || tagsMore"
                  class="card__tag"
              >
                {{tag}}
              </div>
              <div
                  v-if="data.tags.length > 6 && !tagsMore"
                  class="card__tags-more"
                  @click="tagsMore = true"
              >
                Ещё {{data.tags.length - 6}}
              </div>
            </div>
          </div>
          <div class="card__bottom">
            <div @click="vacanciesOpen = !vacanciesOpen" class="card__vacancies-btn">
              <template v-if="data.vacancies !== undefined">
                <span>{{vacancies}}</span>
                <i class="icon-angle-down"></i>
              </template>
            </div>
            <div v-if="data.preferences !== undefined" class="card__preferences">
              <Icon
                  v-for="(icon, key, index) in preferences"
                  :class="preferenceActive(key)"
                  :icon="icon"
              />
            </div>
            <div class="card__date">
              {{data.date}}
            </div>
          </div>
        </div>
      </div>
      <div class="card__detail" v-if="data.details !== undefined">
        <div class="card__row">
          <div class="card__left">Обязанности:</div>
          <div class="card__right">
            <div class="card__list">
              <div class="card__list-item" v-for="(item, index) in data.details.duties">
                {{item}}<template v-if="index !== data.details.duties.length - 1">;</template>
              </div>
            </div>
          </div>
        </div>
        <div class="card__row">
          <div class="card__left">Требования:</div>
          <div class="card__right">
            <div class="card__list">
              <div class="card__list-item" v-for="(item, index) in data.details.demands">
                {{item.title}}
                <template v-if="item.values !== undefined">
                  <span> - </span>
                  <span class="card__list-link" v-for="(value, index) in item.values">
                  {{value}}<template v-if="index !== item.values.length - 1">,</template>
                </span>
                </template><template v-if="index !== data.details.demands.length - 1">;</template>
              </div>
            </div>
          </div>
        </div>
        <div class="card__row">
          <div class="card__left">Условия:</div>
          <div class="card__right">
            <div class="card__list">
              <div class="card__list-item" v-for="(item, index) in data.details.terms">
                {{item.title}}
                <template v-if="item.values !== undefined">
                  <span> - </span>
                  <span class="card__list-link" v-for="(value, index) in item.values">
                  {{value}}<template v-if="index !== item.values.length - 1">,</template>
                </span>
                </template><template v-if="index !== data.details.terms.length - 1">;</template>
              </div>
            </div>
          </div>
        </div>
        <div class="card__row">
          <div class="card__left">Зарплата:</div>
          <div class="card__right">
            <div class="card__list">
              <div class="card__list-item" v-for="item in data.details.salaryDetail">
                {{item.title}}
                <template v-if="item.values !== undefined">
                  <span> - </span>
                  <span class="card__list-link" v-for="(value, index) in item.values">
                  {{value}}<template v-if="index !== item.values.length - 1">,</template>
                </span>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="card__row">
          <div class="card__left">Дополнительно:</div>
          <div class="card__right">
            <div class="card__list">
              <div class="card__list-item">
                {{data.details.additionally}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card__row card__row-vacancies" v-if="data.vacancies !== undefined">
        <div class="card__left"></div>
        <div class="card__right">
          <div class="card__vacancies">
            <div
                v-for="vacancy in data.vacancies"
                class="card__vacancy"
            >
              <div class="card__vacancy-line"></div>
              <div class="card__vacancy-content">
                <router-link :to="vacancy.link" class="card__vacancy-title">
                  {{vacancy.title}}
                </router-link>
                <i class="icon-ruble-circle"></i>
                <div class="card__vacancy-salary">{{vacancy.salary}}</div>
                <CardIcons :favorite="vacancy.favorite"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="data.moderated" class="card__status">
      <span class="card__status-online" v-if="data.status === 'online'">
        online
      </span>
        <span v-else>
        Был в сети<br>{{data.status}} назад
      </span>
      </div>
      <div class="card__mobile-detail">
        <div class="card__mobile-detail-item">
          Прошло времени с момента публикации: <span>{{data.time}}</span>
        </div>
        <div class="card__mobile-detail-item">
          Район работы: <span class="card__mobile-detail-link">{{data.city}}</span> / <span class="card__mobile-detail-link">{{data.area}}</span>
        </div>
        <div class="card__mobile-detail-item">
          Рубрика: <span class="card__mobile-detail-link">{{data.rubric[0]}}</span>, <span class="card__mobile-detail-link">{{data.rubric[1]}}</span>
        </div>
      </div>
    </div>
    <Modal
        @closeModal="openModalPhone = false"
        v-if="openModalPhone"
    >
      <div class="modal__phones">
        <template v-for="(phone, index) in data.phones">
          <a
              :href="phoneHref(phone)"
          >
            {{phone}}
          </a><template v-if="index !== data.phones.length - 1">,</template>
        </template>
      </div>
    </Modal>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import CardIcons from "@/components/CardIcons";
import Modal from "@/components/Modal";
export default {
  name: "Card",
  components: {Modal, CardIcons, Icon},
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      type: {
        vacancy: 'Вакансия',
        cv: 'Резюме'
      },
      preferences: {
        teenagers: 'icon-year',
        students: 'icon-cap',
        pensioners: 'icon-retiree',
        disabled: 'icon-handicapped',
        foreigners: 'icon-globe',
        detail: 'icon-ruble-circle',
        weekend: 'icon-dollar-circle'
      },
      vacanciesOpen: false,
      openModalPhone: false,
      tagsMore: false
    }
  },
  computed: {
    img() {
      if(this.data.img !== '') {
        return this.data.img;
      }
      return '/img/no-image.png';
    },
    topText() {
      if (!this.data.moderated) {
        return 'объявление не прошло модерацию';
      } else if (this.data.withoutExperience) {
        return 'Опыт работы не имеет значения';
      } else if (this.data.anyProfession) {
        return 'Готов(а) на любую профессию';
      }
    },
    vacancies() {
      let count = this.data.vacancies.length;
      let lastNum = count.toString().split('').pop();
      if (lastNum === 1) {
        return `${count} вакансия`;
      } else if (lastNum > 1 && lastNum < 5) {
        return `${count} вакансии`;
      }
      return `${count} вакансий`;
    },
    cardClass() {
      return {
        'card__recommended': this.data.recommended,
        'card__best': this.data.best,
        'card__not-moderated': !this.data.moderated,
        'card__footnote': this.data.prestige || this.data.urgently,
        'card__vacancies-open': this.vacanciesOpen,
      };
    }
  },
  methods: {
    phoneHref(phone) {
      return 'tel:' + phone.replace(/[^+0-9]/g, '');
    },
    preferenceActive(preference) {
      for (let value of this.data.preferences) {
        if (value === preference) return '';
      }
      return 'disable';
    }
  }
}
</script>

<style lang="scss">
  .card {
    position: relative;
    padding-top: 14px;
    min-height: 170px;
    padding-bottom: 10px;
    background-color: #fff;
    overflow: hidden;
    border-bottom: 1px solid #f5f7f9;
    @media (max-width: $lg) {
      padding-top: 20px;
      min-height: 150px;
    }
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      height: 100%;
      width: 4px;
      border-radius: 2px;
    }
    &__row {
      display: flex;
      &-vacancies {
        @media (max-width: $md) {
          .card__left {
            display: none;
          }
          .card__right {
            width: 100%;
          }
        }
      }
    }
    &__left {
      min-width: 150px;
      padding-left: 26px;
      @media (max-width: $lg) {
        min-width: 108px;
        padding-left: 10px;
      }
      @media (max-width: $md) {
        min-width: 92px;
      }
      &-icon {
        width: 72px;
        display: flex;
        justify-content: center;
        .designations__icon {
          margin: 0;
          @media (max-width: $lg) {
            position: absolute;
            top: 27px;
            left: 50%;
            min-width: 19px;
            width: 19px;
            height: 19px;
            font-size: 13px;
            transform: translateX(-50%);
          }
          @media (max-width: $md) {
            left: 98px;
            min-width: 15px;
            width: 15px;
            height: 15px;
            font-size: 12px;
          }
        }
      }
    }
    &__right {
      width: calc(100% - 150px);
      padding-right: 24px;
      @media (max-width: $lg) {
        width: calc(100% - 108px);
        padding-right: 15px;
      }
      @media (max-width: $md) {
        width: calc(100% - 92px);
        padding-right: 10px;
      }
    }
    &__type,
    &__top-text {
      letter-spacing: 1.53px;
      font-size: 9px;
      text-transform: uppercase;
    }
    &__type {
      margin-top: 2px;
      margin-left: 14px;
      color: $primary;
      @media (max-width: $lg) {
        margin-top: 8px;
        font-size: 8px;
      }
      @media (max-width: $md) {
        margin-top: 6px;
        margin-left: 2px;
        letter-spacing: 0.9px;
      }
    }
    &__top {
      display: flex;
      align-items: center;
      @media (max-width: $lg) {
        position: absolute;
        z-index: 10;
        top: 0;
        left: 4px;
        right: 0;
        padding: 4px 15px;
        border-bottom: 1px solid #f5f7f9;
        background-color: #fff;
      }
      @media (max-width: $md) {
        padding: 2px 8px;
      }
      &-text {
        color: #72797e;
        @media (max-width: $lg) {
          font-size: 7px;
          letter-spacing: 1.19px;
        }
      }
      i {
        margin-left: 10px;
        font-size: 14px;
      }
    }
    &__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      @media (max-width: $lg) {
        margin-bottom: 10px;
      }
      @media (max-width: $md) {
        margin-bottom: 6px;
      }
    }
    &__place-salary {
      display: flex;
      align-items: center;
      font-weight: 300;
      i {
        margin-right: 11px;
        font-size: 20px;
        @media (max-width: $lg) {
          font-size: 16px;
        }
      }
    }
    &__place {
      display: flex;
      align-items: center;
      color: #3568b4;
      @media (max-width: $md) {
        display: none;
      }
      &-item {
        border-bottom: 1px dotted #3568b4;
        cursor: pointer;
        &:hover {
          color: #488eed;
        }
      }
    }
    &__salary {
      display: flex;
      align-items: center;
      margin-left: 106px;
      color: #b5b5b5;
      @media (max-width: $lg) {
        margin-left: 62px;
      }
      @media (max-width: $md) {
        margin-left: 0;
        i {
          font-size: 14px;
        }
      }
    }
    &__phones {
      display: flex;
      align-items: center;
      max-width: 100%;
      margin-top: 12px;
      margin-bottom: 11px;
      color: #b5b5b5;
      font-weight: 300;
      white-space: nowrap;
      overflow: hidden;
      @media (max-width: $lg) {
        margin-top: 5px;
        margin-bottom: 5px;
      }
      i {
        margin-right: 5px;
        font-size: 20px;
        @media (max-width: $lg) {
          font-size: 16px;
        }
      }
      a {
        color: inherit;
        &:hover {
          color: $main;
        }
      }
      .icon-phone-alt,
      div {
        @media (max-width: $md) {
          display: none;
        }
      }
      &-btn {
        display: none;
        @media (max-width: $md) {
          display: flex;
          align-items: center;
          padding: 0 8px;
          color: #ff2e20;
          font-size: 10px;
          background-color: #f5f7f9;
          border: 1px solid #e8e8e8;
          border-radius: 2px;
          i {
            font-size: 14px;
          }
        }
      }
    }
    &__title {
      margin-bottom: 3px;
      color: $links;
      font-size: 20px;
      @media (max-width: $lg) {
        font-size: 16px;
      }
      @media (max-width: $md) {
        font-size: 14px;
      }
      &:hover {
        color: $primary;
      }
    }
    &__name {
      color: #504f4f;
      font-weight: 300;
    }
    &__tags {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      @media (max-width: $lg) {
        display: none;
      }
      &-more {
        margin-left: 4px;
        margin-bottom: 9px;
        font-size: 14px;
        color: #3568b4;
        border-bottom: 1px dotted;
        cursor: pointer;
        &:hover {
          color: #488eed;;
        }
      }
    }
    &__tag {
      margin-right: 9px;
      margin-bottom: 9px;
      padding: 3px 8px;
      font-size: 12px;
      color: #706f6f;
      border-radius: 2px;
      background-color: #eff2f4;
      cursor: pointer;
      &:hover {
        color: #fff;
        background-color: $primary;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    &__bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #8c8c8c;
      font-size: 14px;
      font-weight: 300;
    }
    &__preferences {
      display: flex;
      @media (max-width: $lg) {
        position: absolute;
        top: 27px;
        left: 50%;
        transform: translateX(-50%);
        .designations__icon {
          min-width: 19px;
          width: 19px;
          height: 19px;
          font-size: 13px;
          &.icon-year {
            font-size: 8px;
            span {
              font-size: 12px;
            }
          }
        }
      }
      @media (max-width: $md) {
        .designations__icon {
          min-width: 15px;
          width: 15px;
          height: 15px;
          font-size: 12px;
          &.icon-year {
            font-size: 6px;
            span {
              font-size: 10px;
            }
          }
        }
      }
    }
    &__vacancies {
      display: none;
      margin-top: 16px;
      margin-bottom: 10px;
      padding-right: 80px;
      @media (max-width: $exlarg) {
        padding-right: 0;
      }
      @media (max-width: $md) {
        margin-bottom: 20px;
        margin-top: 10px;
      }
      &-btn {
        display: flex;
        align-items: center;
        min-width: 100px;
        cursor: pointer;
        @media (max-width: $lg) {
          font-size: 10px;
        }
        &:hover {
          color: $links;
        }
        .icon-angle-down {
          margin-left: 11px;
          font-size: 20px;
          @media (max-width: $lg) {
            margin-left: 8px;
            font-size: 16px;
          }
        }
      }
      &-open {
        .card__vacancies {
          display: block;
        }
        .card__vacancies-btn {
          i {
            transform: rotate(180deg);
          }
        }
      }
    }
    &__vacancy {
      position: relative;
      padding-left: 35px;
      font-size: 14px;
      font-weight: 300;
      @media (max-width: $xl) {
        padding-left: 20px;
        font-size: 12px;
      }
      @media (max-width: $lg) {
        font-size: 10px;
      }
      @media (max-width: $md) {
        padding-left: 12px;
      }
      &:last-child {
        .card__vacancy-content {
          border-bottom: none;
        }
      }
      &-line {
        position: absolute;
        top: 0;
        left: 5px;
        height: 100%;
        width: 1px;
        background-color: #d0d0d0;
        @media (max-width: $md) {
          display: none;
        }
        &:after {
          position: absolute;
          content: '';
          top: 50%;
          right: 50%;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid #d0d0d0;
          background-color: #fff;
          transform: translate(50%, -50%);
        }
      }
      &-title {
        color: $links;
        &:hover {
          color: #488eed;
        }
      }
      &-content {
        display: flex;
        align-items: center;
        padding: 9px 0;
        border-bottom: 1px solid #f5f7f9;
      }
      .icon-ruble-circle {
        margin-left: 20px;
        margin-right: 14px;
        font-size: 18px;
        color: #b5b5b5;
        @media (max-width: $lg) {
          margin-left: 10px;
          margin-right: 5px;
          font-size: 14px;
        }
        @media (max-width: $md) {
          display: none;
        }
      }
      &-salary {
        color: #b5b5b5;
        @media (max-width: $md) {
          display: none;
        }
      }
      .card__icons {
        margin-left: auto;
        @media (max-width: $lg) {
          font-size: 12px;
          .icon-star-alt {
            font-size: 14px;
          }
        }
        i {
          @media (max-width: $lg) {
            margin-left: 10px;
          }
        }
      }
    }
    &__img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 72px;
      margin-top: 10px;
      height: 65px;
      @media (max-width: $lg) {
        width: 80px;
        margin-top: 4px;
      }
      @media (max-width: $md) {
        justify-content: flex-start;
      }
    }
    &__avatar {
      position: relative;
      margin: 15px 0 10px;
      justify-content: center;
      width: 72px;
      height: 72px;
      padding: 3px;
      background-color: #fff;
      border: 1px solid #feba02;
      border-radius: 50%;
      @media (max-width: $lg) {
        margin-top: 4px;
      }
      img {
        border-radius: 50%;
      }
      i {
        position: absolute;
        bottom: -36px;
        right: 18px;
        width: 25px;
        height: 25px;
      }
    }
    &__main {
      margin-top: 4px;
      @media (max-width: $lg) {
        margin-top: 34px;
        font-size: 12px;
      }
      @media (max-width: $md) {
        font-size: 10px;
      }
    }
    &__detail {
      margin-top: 11px;
      color: #504f4f;
      font-size: 13px;
      line-height: 1.54;
      @media (max-width: $lg) {
        display: none;
      }
      .card__right {
        font-weight: 300;
      }
    }
    &__list {
      padding-left: 10px;
      margin-left: -17px;
      margin-bottom: 19px;
      &-item {
        position: relative;
        display: inline-block;
        padding-left: 12px;
        margin-left: 10px;
        &:before {
          position: absolute;
          content: '';
          top: 8px;
          left: 0;
          width: 2px;
          height: 2px;
          background-color: $links;
        }
      }
      &-link {
        color: #3568b4;
        border-bottom: 1px dotted;
        cursor: pointer;
        &:hover {
          color: #488eed;
        }
      }
    }
    &__status {
      position: absolute;
      left: 30px;
      bottom: 13px;
      color: #b5b5b5;
      font-weight: 300;
      font-size: 12px;
      @media (max-width: $lg) {
        left: 20px;
        font-size: 8px;
      }
      @media (max-width: $md) {
        left: 12px;
        bottom: 44px;
      }
      &-online {
        display: block;
        padding-left: 15px;
        color: #f6534f;
        @media (max-width: $md) {
          padding-left: 0;
        }
      }
    }
    &__icons {
      &-wrap {
        display: flex;
        align-items: center;
        .card__icons {
          @media (max-width: $lg) {
            position: absolute;
            top: 26px;
            right: 17px;
            font-size: 14px;
          }
          @media (max-width: $md) {
            top: 22px;
            right: 5px;
          }
        }
      }
    }
    .icon-best {
      font-size: 46px;
      color: #feae00;
      @media (max-width: $lg) {
        display: none;
      }
    }
    &__footnote {
      .card__icons-wrap .card__icons {
        @media (max-width: $lg) {
          padding-right: 104px;
        }
        @media (max-width: $md) {
          padding-right: 0;
        }
      }
      .card__icons-wrap {
        padding-right: 90px;
        @media (max-width: $lg) {
          padding-right: 0;
        }
      }
    }
    &__best {
      margin: 7px 0;
      &:before {
        box-shadow: 0px 3px 7px 0 rgba(0, 0, 0, 0.15);
        background-color: #feae00;
      }
    }
    &__recommended {
      margin: 7px 0;
      &:before {
        box-shadow: 0px 3px 7px 0 rgba(0, 0, 0, 0.15);
        background-color: #1cacea;
      }
    }
    &__not-moderated {
      background: transparent;
      .card__title,
      .card__name,
      .card__phones,
      .card__salary,
      .card__icons,
      .card__vacancy-salary,
      .icon-question-circle-alt {
        color: #cecece !important;
      }
      .card__vacancy-line {
        &:after {
          background-color: #f5f7f9;
        }
      }
      .card__top {
        background-color: transparent;
      }
    }
    &__date {
      @media (max-width: $lg) {
        font-size: 10px;
      }
    }
    &__mobile {
      &-detail {
        display: none;
        color: #b5b5b5;
        font-size: 8px;
        padding: 1px 12px;
        @media (max-width: $md) {
          display: block;
        }
        &-link {
          color: $links;
        }
      }
    }
  }
  .achievement {
    display: flex;
    align-items: center;
    color: #fff;
    &__text {
      height: 24px;
      padding: 0 10px;
      font-size: 13px;
      text-transform: uppercase;
      line-height: 24px;
      border-radius: 12px;
      @media (max-width: $lg) {
        display: none;
      }
    }
    &-best-employer {
      .achievement {
        &__icon {
          position: relative;
          display: flex;
          align-items: center;
          width: 30px;
          height: 30px;
          margin-right: 4px;
          i {
            font-size: 30px;
            color: #feae00;
          }
          span {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 30px;
            height: 30px;
            font-size: 17px;
            font-weight: bold;
            text-align: center;
            line-height: 30px;
          }
        }
        &__text {
          background-color: #feae00;
        }
      }
    }
    &-recommend {
      .achievement {
        &__icon {
          position: relative;
          z-index: 5;
          width: 29px;
          height: 29px;
          margin-right: -15px;
          background-image: url('/img/recommend.svg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        &__text {
          padding-left: 15px;
          background-color: #1cacea;
        }
      }
    }
    &__icon {
      @media (max-width: $lg) {
        margin-right: 0 !important;
      }
      @media (max-width: $md) {
        width: 20px !important;
        height: 20px !important;
        i {
          font-size: 20px !important;
        }
        span {
          width: 20px !important;
          height: 20px !important;
          font-size: 12px !important;
          line-height: 20px !important;
        }
      }
    }
  }
  .footnote {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    padding: 0 50px;
    margin-top: 20px;
    margin-right: -60px;
    font-size: 14px;
    color: #fff;
    transform: rotate(35deg);
    transform-origin: top center;
    @media (max-width: $lg) {
      height: 20px;
      padding: 0 25px;
      margin-top: 35px;
      margin-right: -30px;
      font-size: 8px;
    }
    @media (max-width: $md) {
      top: 50px;
      right: 10px;
      width: 19px;
      height: 19px;
      padding: 0 !important;
      margin: 0;
      font-size: 12px;
      border-radius: 50%;
      transform: rotate(0);
      transform-origin: center;
      i:first-child,
      span {
        display: none;
      }
    }
    &__urgently {
      background-color: #ffba00;
    }
    &__prestige {
      padding-left: 53px;
      padding-right: 47px;
      background-color: #f6534f;
      @media (max-width: $lg) {
        padding-left: 20px;
        padding-right: 28px;
      }
    }
    &__text {
      margin: 0 5px;
      text-transform: uppercase;
    }
  }
  .modal {
    &__phones {
      padding: 30px 30px;
      background-color: #fff;
      a {
        color: $main;
      }
    }
  }
</style>