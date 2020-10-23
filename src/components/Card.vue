<template>
  <div class="card">
    <div class="card__row">
      <div class="card__left">
        <div class="card__type">
          {{type[data.type]}}
        </div>
        <img :src="img" alt="" class="card__img">
      </div>
      <div class="card__right">
        <div class="card__top" v-if="data.withoutExperience || data.anyProfession">
          <div class="card__top-text">
            {{topText}}
          </div>
          <i class="icon-question-circle-alt"></i>
          <i class="icon-video"></i>
        </div>
        <div class="card__main">
          <div class="card__title">{{data.title}}</div>
          <div class="card__name">{{data.name}}</div>
          <div class="card__place-salary">
            <div class="card__place">
              <i class="icon-map-marker-alt"></i>
              <span>{{data.city}}</span>, <span>{{data.area}}</span>
            </div>
            <div class="card__salary">
              <i class="icon-ruble-circle"></i>
              <span>{{data.salary}}</span>
            </div>
          </div>
          <div class="card__phones">
            <i class="icon-phone-alt"></i>
            <a
                v-for="phone in data.phones"
                :href="phoneHref(phone)"
            >
              {{phone}}
            </a>
            <span v-if="data.contactPerson !== ''">
              Контактное лицо: {{data.contactPerson}}
            </span>
          </div>
          <div class="card__tags" v-if="data.tags.length > 0">
            <div
                v-for="tag in data.tags"
                class="card__tag"
            >
              {{tag}}
            </div>
            <div
                v-if="data.tags.length > 6"
                class="card__tags-more"
            >
              Ещё 6
            </div>
          </div>
        </div>
        <div class="card__bottom">
          <div class="card__vacancies-btn">
            <span>{{vacancies}}</span>
            <i class="icon-angle-down"></i>
          </div>
          <div class="card__preferences">

          </div>
          <div class="card__date">

          </div>
        </div>
      </div>
    </div>
    <div class="card__detail">
      <div class="card__row">
        <div class="card__left"></div>
        <div class="card__right"></div>
      </div>
    </div>
    <div class="card__row">
      <div class="card__left"></div>
      <div class="card__right">
        <div class="card__vacancies">
          <div class="card__vacancy">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      type: {
        vacancy: 'Вакансии',
        cv: 'Резюме'
      }
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
      if (this.data.withoutExperience) {
        return 'Опыт работы не имеет значения';
      } else if (this.data.anyProfession) {
        return 'Готов(а) на любую профессию';
      }
    },
    vacancies() {
      let count = this.data.vacancies;
      let lastNum = count.toString().split('').pop();
      if (lastNum === 1) {
        return `${count} вакансия`;
      } else if (lastNum > 1 && lastNum < 5) {
        return `${count} вакансии`;
      }
      return `${count} вакансий`;
    }
  },
  methods: {
    phoneHref(phone) {
      return 'tel:' + phone.replace(/[^+0-9]/g, '');
    }
  }
}
</script>

<style lang="scss">
  .card {
    background-color: #fff;
  }
</style>