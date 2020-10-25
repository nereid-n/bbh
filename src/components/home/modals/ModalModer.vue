<template>
  <div class="support-modal">
    <h2 class="support-modal__title h2">Написать сообщение</h2>
    <div class="support-modal__buttons">
      <router-link class="support-modal__btn btn" to="/">
        <i class="btn__icon icon-envelope"></i>
        <span class="btn__text">Написать нам</span>
      </router-link>
      <a class="support-modal__btn btn" href="tel:support.vsevn.ru@mail.ru">
        <i class="btn__icon icon-skype"></i>
        <span class="btn__text">Написать в скайп</span>
      </a>
    </div>
    <p class="support-modal__text">Мы хотим быстрее помочь Вам – пожалуйста, укажите подходящую тему обращения.<br>У вас вопрос по работе Личного кабинета – возможно, готовое решение уже есть в разделе <router-link to="/">часто задаваемых вопросов.</router-link><br>Узнать стоимость размещения вакансий можно <router-link to="/">здесь.</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "ModalModer"
}
</script>

<style lang="scss">
.support-modal {
  padding: 40px;
  background-color: rgba(8, 88, 100, 0.8);
  border-radius: 5px;
  @media (max-width: $xl) {
    padding: 20px;
    width: 550px;
  }
  @media (max-width: $md) {
    width: 100%;
  }
  .support-modal {
    &__title {
      margin-bottom: 30px;
      font-size: 24px;
      font-weight: 500;
      text-align: center;
      line-height: 1;
      color: #fff;
      @media (max-width: $md) {
        margin-bottom: 15px;
      }
    }
    &__buttons {
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
      @media (max-width: $md) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 15px;
      }
    }
    &__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 279px;
      height: 48px;
      background-color: transparent;
      border: 1px solid #fff;
      border-radius: 2px;
      @media (max-width: $xl) {
        width: 220px;
        height: 38px;
      }
      & + .support-modal__btn {
        margin-left: 30px;
        @media (max-width: $md) {
          margin-left: 0;
          margin-top: 15px;
        }
      }
      .btn {
        &__text {
          font-size: 18px;
          color: #fff;
          @media (max-width: $xl) {
            font-size: 12px;
          }
        }
        &__icon {
          margin-right: 10px;
          font-size: 18px;
          color: #fff;
        }
      }
    }
    &__text {
      font-weight: 300;
      line-height: 22px;
      color: #fff;
      @media (max-width: $xl) {
        font-size: 14px;
      }
      a {
        display: inline-block;
        color: #66c1d0;
        border-bottom: 1px dotted #66c1d0;
      }
    }
  }
}
</style>