<template>
  <div class="authorization-box sideModal">
    <div class="sideModal__overlay" @click="$emit('close')"></div>
    <div class="sideModal__content">
      <span @click="$emit('close')" class="sideModal__close"><i class="icon icon-cross"></i></span>
      <h4 class="authorization-box__title">Вход в аккаунт</h4>
      <form class="authorization-box__form form" id="authorization_form" action="">
        <Input class="auth-input" :data="email"/>
        <Input class="auth-input" :data="password"/>
        <span class="authorization-box__btn btn">Войти</span>
        <div class="d-flex">
          <Checkbox
              :data="checkboxData"
          />
          <router-link class="authorization-box__forgot" to="/">Забыли пароль?</router-link>
        </div>
      </form>
      <div class="authorization-box__soc soc">
        <span class="soc__text">или войти с помощью</span>
        <a class="soc__link facebook" href="#" target="_blank"><i class="soc__icon icon-facebook-f"></i></a>
        <a class="soc__link vk" href="#" target="_blank"><i class="soc__icon icon-vk"></i></a>
        <a class="soc__link google" href="#" target="_blank"><i class="soc__icon icon-google-g"></i></a>
        <a class="soc__link ok" href="#" target="_blank"><i class="soc__icon icon-odnoklassniki"></i></a>
        <a class="soc__link yandex" href="#" target="_blank"><i class="soc__icon icon-yandex"></i></a>
        <a class="soc__link mail" href="#" target="_blank"><i class="soc__icon icon-mail"></i></a>
      </div>
      <div class="authorization-box__reg reg"><span class="reg__text">Нет регистрации на портале bbh.cat?</span>
        <router-link class="reg__btn btn" to="/">
          <span class="btn__text">Зарегистрироваться</span>
          <i class="btn__icon icon-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "@/components/form/Checkbox";
import Input from "@/components/form/Input";
export default {
  name: "Auth",
  components: {Input, Checkbox},
  data() {
    return {
      checkboxData: {
        id: 'rememberMe',
        text: 'Запомнить'
      },
      email: {
        placeholder: 'Email'
      },
      password: {
        placeholder: 'Пароль'
      }
    }
  }
}
</script>

<style lang="scss">
.auth-input {
  .input {
    border: 1px solid #f3f2f2;
  }
  &:first-child {
    margin-bottom: 10px;
  }
}
.d-flex {
  display: flex;
}
.authorization-box {
  &__title {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 26px;
    font-weight: 300;
    text-align: center;
    line-height: 23px;
    color: #000;
  }

  &__form {
    display: flex;
    flex-direction: column;

    .d-flex {
      justify-content: space-between;
      align-items: center;
    }

    &.form {
      p {
        margin-top: 5px;
        margin-bottom: 10px;
        //
        font-size: 14px;
        color: $primary;

        a {
          border-bottom: 1px dotted $primary;
          //
          transition: border-style .3s;

          &:hover {
            border-bottom-style: solid;
          }
        }

        &:empty {
          margin-top: 0;
        }
      }
    }
  }

  &__input {
    display: flex;
    width: 100%;
    height: 45px;
    padding: 11px 24px;
    //
    font-weight: 300;
    line-height: 23px;
    color: #000;
    //
    border: 1px solid #f3f2f2;
    border-radius: 2px;
    //
    transition: border-color .3s;

    &:focus {
      border-color: #f6534f;

      &::placeholder {
        color: transparent;
      }
    }

    &.invalid {
      color: $primary !important;
      //
      border-color: $primary !important;

      &::placeholder {
        color: $primary !important;
      }
    }
  }

  &__btn.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 48px;
    margin: {
      top: 15px;
      bottom: 25px;
    }
    font-size: 18px;
    text-transform: unset;
    color: #fff;
    background-color: #f6534f;
    border-radius: 4px;
    &:hover {
      cursor: pointer;
      background-color: $primary;
    }
  }
  &__forgot {
    margin-top: 1px;
    font-size: 14px;
    font-weight: 300;
    line-height: 1;
    color: #0a449b;
    border-bottom: 1px dotted #242424;
    transition: color .3s;
    &:hover {
      color: #2660bf;
    }
  }
  &__soc {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0 20px;
    margin: {
      top: 30px;
      bottom: 15px;
    }
    border-top: 1px solid #f3f2f2;
    border-bottom: 1px solid #f3f2f2;
    .soc {
      &__text {
        position: absolute;
        top: 0;
        left: 50%;
        display: block;
        width: 60%;
        font-size: 14px;
        font-weight: 300;
        text-align: center;
        line-height: 23px;
        color: #000;
        background-color: #fff;
        transform: translate(-50%, -55%);
      }

      &__link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 28px;
        height: 28px;
        color: #fff;
        border-radius: 2px;
        &.facebook {
          background-color: #3e5392;
          &:hover {
            background-color: darken(#3e5392, 10%);
          }
        }
        &.vk {
          background-color: #5178a3;
          &:hover {
            background-color: darken(#5178a3, 10%);
          }
        }
        &.google {
          font-size: 12px;
          background-color: #f6534f;
          &:hover {
            background-color: darken(#f6534f, 10%);
          }
        }
        &.ok {
          background-color: #f58220;
          &:hover {
            background-color: darken(#f58220, 10%);
          }
        }
        &.yandex {
          background-color: #e11325;
          &:hover {
            background-color: darken(#e11325, 10%);
          }
        }
        &.mail {
          background-color: #19417e;
          &:hover {
            background-color: darken(#19417e, 10%);
          }
        }
      }
    }
  }
  &__reg {
    display: flex;
    flex-direction: column;
    align-items: center;
    .reg {
      &__text {
        padding: 0 30px;
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 300;
        text-align: center;
        line-height: 1.3;
        color: #000;
      }
      &__btn {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: bold;
        color: #fd2f20;
        .btn {
          &__text {
            margin-right: 8px;
          }
          &__icon {
            padding-top: 3px;
            font-size: 10px;
          }
        }
        &:hover {
          color: $links;
        }
      }
    }
  }
}
</style>