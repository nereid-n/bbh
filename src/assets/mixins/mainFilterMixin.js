export default {
  data() {
    return {
      mainFilter: {
        name: 'type',
        options: {
          'vacancies_cv': 'Вакансии + Резюме',
          'vacancies' : 'Вакансии',
          'cv' : 'Резюме',
          'phone' : {
            text: 'Телефон',
            link: {name: 'phone'}
          },
          'postcode' : {
            text: 'Индекс',
            link: {name: 'postcode'}
          }
        }
      },
      moreOpen: false
    }
  },
  methods: {
    onMainSelect(value) {
      if (value.value === 'vacancies_cv' || value.value === 'vacancies' || value.value === 'cv') {
        if (this.$route.name !== 'home') {
          this.$router.push({name: 'home', params: {type: value.value}});
        }
        else {
          this.$emit('onInput', value);
        }
      }
    }
  },
}