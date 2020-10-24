<template>
  <div class="container articles-wrap">
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
          img: '/img/articles/1.jpg',
          title: 'Заголовок статьи будет тут',
          date: '04.08.2018',
          link: '/'
        },
        {
          img: '/img/articles/2.jpg',
          title: 'Заголовок статьи будет тут',
          date: '04.08.2018',
          link: '/'
        },
        {
          img: '/img/articles/3.jpg',
          title: 'Заголовок статьи будет тут',
          date: '04.08.2018',
          link: '/'
        },
        {
          img: '/img/articles/4.jpg',
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
.articles {
  display: flex;
  justify-content: space-between;
  padding-top: 27px;
  margin-bottom: 33px;
  @media (max-width: $xl) {
    flex-wrap: wrap;
    padding-top: 19px;
    margin-bottom: 0;
  }
  &-content {
    padding-top: 39px;
    padding-bottom: 55px;
    @media (max-width: $xl) {
      padding-top: 26px;
      padding-bottom: 38px;
    }
  }
  &-wrap {
    @media (max-width: $md) {
      display: none;
    }
  }
}
.article {
  display: flex;
  max-width: calc(25% - 20px);
  @media (max-width: $xl) {
    max-width: unset;
    width: 50%;
    margin-bottom: 30px;
    padding-right: 20px;
  }
  &__text {
    margin-left: 30px;
  }
  &__title {
    color: $main;
    font-size: 17px;
  }
  &__date {
    margin-bottom: 7px;
    color: $placeholder;
    font-size: 14px;
  }
}
</style>