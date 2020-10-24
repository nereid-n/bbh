<template>
  <div class="filter-aside">
    <div class="filter-aside__block">
      <h2 class="h2">Рубрика:</h2>
      <Select :data="rubric"/>
    </div>
    <div class="filter-aside__block">
      <div class="filter-aside__reset">
        Сбросить
      </div>
      <h2 class="h2">Вид занятости:</h2>
      <Checkbox
          v-for="item in type"
          :data="item"
      />
    </div>
    <div class="filter-aside__block">
      <h2 class="h2">Хочу зарплату:</h2>
      <div class="viewForm viewForm-big">
        <div class="viewForm__text">
          oт
        </div>
        <Input
            :data="salary"
            class="viewForm__input"
        />
        <div class="viewForm__text">
          ₽
        </div>
        <button class="viewForm__button btn-outline-gray">ok</button>
      </div>
      <div class="viewForm__text-bottom">
        <span>270 €</span>
        <span>390 $</span>
      </div>
      <Checkbox class="filter-aside__checkbox-salary" :data="salaryCheckbox"/>
    </div>
    <div class="filter-aside__block filter-aside__level">
      <h2 class="h2">Уровень должности:</h2>
      <Checkbox
          v-for="item in level"
          :data="item"
      />
    </div>
    <div class="filter-aside__block filter-aside__agency">
      <Checkbox :data="agency"/>
    </div>
    <div class="filter-aside__block filter-aside__options">
      <Checkbox
          v-for="item in moreOptions"
          :data="item"
      />
    </div>
    <div class="filter-aside__block filter-aside__photo">
      <h2 class="h2">Наличие фото:</h2>
      <div
          v-for="item in photo"
          class="filter-aside__line"
      >
        <Checkbox :data="item.data"/>
        <div class="filter-aside__num">
          {{item.num}}
        </div>
      </div>
    </div>
    <div class="filter-aside__block filter-aside__preferences">
      <h2 class="h2">Предпочтения:</h2>
      <div
          v-for="item in preferences"
          class="filter-aside__line"
      >
        <Checkbox :data="item.data"/>
        <div class="filter-aside__num">
          {{item.num}}
        </div>
      </div>
      <button class="btn btn-outline-gray">
        Сбросить
      </button>
    </div>
  </div>
</template>

<script>
import Select from "@/components/form/Select";
import Checkbox from "@/components/form/Checkbox";
import Input from "@/components/form/Input";
export default {
  name: "FilterAside",
  components: {Input, Checkbox, Select},
  data() {
    return {
      rubric: {
        defaultValue: 0,
        options: [
          {
            key: 0,
            value: 'Все рубрики'
          }
        ]
      },
      type: [
        {
          text: 'Полная занятость',
          id: 'type1'
        },
        {
          text: 'Временная работа',
          id: 'type2'
        },
        {
          text: 'Частичная работа',
          id: 'type3'
        },
        {
          text: 'Сезонная работа',
          id: 'type4'
        },
        {
          text: 'Удаленная работа',
          id: 'type5'
        },
        {
          text: 'Проектная работа',
          id: 'type6'
        },
        {
          text: 'Стажировка',
          id: 'type7'
        },
        {
          text: 'Волонтерство',
          id: 'type5'
        }
      ],
      salary: {
        placeholder: ''
      },
      salaryCheckbox: {
        text: 'Показывать вакансии без з.п.',
        id: 'withoutSalary'
      },
      level: [
        {
          text: 'Топ менеджер / директор',
          id: 'level1'
        },
        {
          text: 'Руководитель отдела',
          id: 'level2'
        },
        {
          text: 'Старший специалист',
          id: 'level3'
        },
        {
          text: 'Специалист',
          id: 'level4'
        },
        {
          text: 'Специалист начального уровня',
          id: 'level5'
        },
        {
          text: 'Рабочие специальности',
          id: 'level6'
        }
      ],
      agency: {
        id: 'agency',
        text: 'Показывать вакансии агенств'
      },
      moreOptions: [
        {
          text: 'Готов(а) на любую профессию',
          id: 'moreOption1',
          question: 'Данный работодатель согласен принять на работу соискателя без опыта работы или из других профессий с условием дополнительного обучения на новую для него профессию или должность'
        },
        {
          text: 'Опыт работы: не имеет значения',
          id: 'moreOption2',
          question: 'Опыт работы: не имеет значения'
        },
        {
          text: 'Отображать кто online',
          id: 'moreOption3'
        },
        {
          text: 'Исключить иногородних',
          id: 'moreOption4'
        },
        {
          text: 'Исключить объявления с телефонами из других регионов',
          id: 'moreOption5'
        },
        {
          text: 'Убрать тех кому я уже писал(а)',
          id: 'moreOption6'
        }
      ],
      photo: [
        {
          data: {
            text: 'Без фото',
            id: 'withoutPhoto'
          },
          num: '285'
        },
        {
          data: {
            text: 'С фото',
            id: 'withPhoto'
          },
          num: '285'
        }
      ],
      preferences: [
        {
          data: {
            text: 'Работа для школьников',
            id: 'prefer1',
            icon: 'icon-year'
          },
          num: '28'
        },
        {
          data: {
            text: 'Работа для студентов',
            id: 'prefer2',
            icon: 'icon-cap'
          },
          num: '85'
        },
        {
          data: {
            text: 'Работа для пенсионеров',
            id: 'prefer3',
            icon: 'icon-retiree'
          },
          num: '28'
        },
        {
          data: {
            text: 'Работа для инвалидов',
            id: 'prefer4',
            icon: 'icon-handicapped'
          },
          num: '85'
        },
        {
          data: {
            text: 'Работа для иностранцев',
            id: 'prefer5',
            icon: 'icon-globe'
          },
          num: '28'
        },
        {
          data: {
            text: 'Подработка на выходные ',
            id: 'prefer6',
            icon: 'icon-ruble-circle'
          },
          num: '85'
        },
        {
          data: {
            text: 'Подработка или разовые работы',
            id: 'prefer7',
            icon: 'icon-dollar-circle'
          },
          num: '85'
        },
        {
          data: {
            text: 'Соискатель активно ищет работу',
            id: 'prefer8',
            icon: 'icon-dollar'
          },
          num: '85'
        },
        {
          data: {
            text: 'Соискатель работает, но открыт для предложений',
            id: 'prefer9',
            icon: 'icon-tie'
          },
          num: '85'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .filter-aside {
    width: 350px;
    margin-top: 36px;
    @media (max-width: $exlarg) {
      width: 280px;
    }
    @media (max-width: $xl) {
      display: none;
    }
    .h2 {
      margin-bottom: 13px;
    }
    &__block {
      position: relative;
      margin-bottom: 27px;
      padding-bottom: 32px;
      border-bottom: 1px solid #fff;
      &:last-child {
        border-bottom: none;
      }
    }
    &__line {
      display: flex;
    }
    &__num {
      margin-left: auto;
      color: $placeholder;
      font-size: 14px;
    }
    &__reset {
      position: absolute;
      top: 12px;
      right: 1px;
      font-size: 14px;
      color: $placeholder;
    }
    .h2 + .checkbox-wrap {
      margin-top: 18px;
    }
    .checkbox-wrap {
      margin-bottom: 18px;
      label {
        padding-left: 36px;
        font-size: 16px;
      }
      &:last-child {
        margin-bottom: -12px;
      }
    }
    &__checkbox {
      &-salary {
        max-width: 170px;
        margin-top: 12px;
        margin-bottom: -4px !important;
      }
    }
    &__level {
      padding-bottom: 39px;
      .checkbox-wrap {
        max-width: 235px;
      }
    }
    &__agency {
      padding-top: 3px;
      padding-bottom: 39px;
    }
    &__options {
      padding-bottom: 51px;
      .checkbox-wrap {
        margin-bottom: 21px;
        max-width: 330px;
        &:nth-child(1),
        &:nth-child(2) {
          margin-bottom: 31px;
        }
      }
    }
    &__photo {
      padding-bottom: 3px;
      margin-bottom: 20px;
      .h2 {
        margin-bottom: 17px;
      }
    }
    &__preferences {
      .h2 {
        margin-bottom: 27px;
      }
      .checkbox-wrap {
        margin-bottom: 21px;
      }
      .btn {
        width: 100%;
        margin-top: 15px;
        padding: 12px 15px;
      }
    }
  }
</style>