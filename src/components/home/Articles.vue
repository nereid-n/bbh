<template>
  <div class="container">
    <div class="articles-content">
      <h2 class="h2">Статьи:</h2>
      <div class="articles">
        <div
            v-for="article in articles"
            class="article"
        >
          <img :src="article.img" alt="" class="article__img">
          <div class="article__text">
            <div class="article__date">
              {{article.date}}
            </div>
            <router-link :to="article.link" class="article__title">
              {{article.title}}
            </router-link>
          </div>
        </div>
      </div>
      <router-link class="link" to="/">
        Смотреть полностью
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Articles",
  data() {
    return {
      articles: [
        {
          img: '',
          title: 'Заголовок статьи будет тут',
          date: '04.08.2018',
          link: '/'
        },
        {
          img: '',
          title: 'Заголовок статьи будет тут',
          date: '04.08.2018',
          link: '/'
        },
        {
          img: '',
          title: 'Заголовок статьи будет тут',
          date: '04.08.2018',
          link: '/'
        },
        {
          img: '',
          title: 'Заголовок статьи будет тут',
          date: '04.08.2018',
          link: '/'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>