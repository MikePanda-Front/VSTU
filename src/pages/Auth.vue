<template>
  <div class="container mt-4">
    <div class="col-sm-4 mx-auto">
      <h2 class="reg-title">Регистрация</h2>
      <form @submit.prevent="userRegister" novalidate>
        <div v-show="step === 1">
          <div v-if="regMessage" class="alert alert-success" role="alert">
            Вы успешно зарегистрировались!
          </div>

          <div class="form-group">
            <label for="name">Ваше имя</label>

            <input
              @blur="$v.formReg.name.$touch()"
              :class="status($v.formReg.name)"
              v-model.trim="formReg.name"
              type="text"
              class="form-control"
              id="name"
            />

            <div class="invalid-feedback" v-if="!$v.formReg.name.required">
              {{ reqText }}
            </div>
            <div class="invalid-feedback" v-if="!$v.formReg.name.alpha">
              {{ alphaText }}
            </div>
          </div>

          <div class="form-group">
            <label for="surname">Ваша фамилия</label>

            <input
              @blur="$v.formReg.surname.$touch()"
              :class="status($v.formReg.surname)"
              v-model.trim="formReg.surname"
              type="text"
              class="form-control"
              id="surname"
            />

            <div class="invalid-feedback" v-if="!$v.formReg.surname.required">
              {{ reqText }}
            </div>
            <div class="invalid-feedback" v-if="!$v.formReg.surname.alpha">
              {{ alphaText }}
            </div>
          </div>

          <div class="form-group">
            <label for="email">Email</label>

            <input
              @blur="$v.formReg.email.$touch()"
              :class="status($v.formReg.email)"
              v-model.trim="formReg.email"
              type="text"
              class="form-control"
              id="email"
            />

            <div class="invalid-feedback" v-if="!$v.formReg.email.required">
              {{ reqText }}
            </div>
            <div class="invalid-feedback" v-if="!$v.formReg.email.email">
              Пожалуйста введите Email адрес
            </div>
          </div>

          <button
            @click="step++"
            :disabled="disabledBtn1"
            type="button"
            class="btn btn-primary"
          >
            Следующий шаг
          </button>
        </div>

        <transition name="slide-fade">
          <div v-show="step === 2">
            <!-- <div class="form-group">
              <label for="year">Год рождения</label>

              <select
                @blur="$v.formReg.year.$touch()"
                :class="status($v.formReg.year)"
                v-model="formReg.year"
                id="year"
                class="custom-select"
              >
                <option disabled value="">Выберите</option>
                <option
                  v-for="(year, index) in years"
                  :value="year"
                  :key="index"
                  >{{ year }}</option
                >
              </select>

              <div class="invalid-feedback" v-if="!$v.formReg.year.required">
                {{ reqText }}
              </div>
            </div> -->

            <div class="form-group">
              <label for="facultet">Факультет</label>

              <input
                @blur="$v.formReg.facultet.$touch()"
                :class="status($v.formReg.facultet)"
                v-model.trim="formReg.facultet"
                type="text"
                class="form-control"
                id="facultet"
                placeholder="Например, ФИТКБ"
              />

              <div class="invalid-feedback" v-if="!$v.formReg.facultet.alpha">
                {{ alphaText }}
              </div>
            </div>

            <div class="form-group">
              <label for="group">Группа</label>

              <input
                @blur="$v.formReg.group.$touch()"
                :class="status($v.formReg.group)"
                v-model.trim="formReg.group"
                type="text"
                class="form-control"
                id="group"
                placeholder="Например, М-РИС-151"
              />

              <div class="invalid-feedback" v-if="!$v.formReg.group.alpha">
                {{ alphaText }}
              </div>
            </div>

            <div class="form-group">
              <label for="password">Пароль</label>

              <input
                @blur="$v.formReg.password.$touch()"
                :class="status($v.formReg.password)"
                v-model.trim="formReg.password"
                type="text"
                class="form-control"
                id="password"
              />

              <div
                class="invalid-feedback"
                v-if="!$v.formReg.password.required"
              >
                {{ reqText }}
              </div>
              <div
                class="invalid-feedback"
                v-if="!$v.formReg.password.minLength"
              >
                {{ minLengthText }}
              </div>
            </div>

            <div class="form-group">
              <label for="passwordConfirm">Подтверждение пароля</label>

              <input
                @blur="$v.formReg.passwordConfirm.$touch()"
                :class="status($v.formReg.passwordConfirm)"
                v-model.trim="formReg.passwordConfirm"
                type="text"
                class="form-control"
                id="passwordConfirm"
              />

              <div
                class="invalid-feedback"
                v-if="!$v.formReg.passwordConfirm.sameAs"
              >
                {{ passwordConfirmText }}
              </div>
            </div>

            <button @click="step--" type="button" class="btn btn-light mr-2">
              Назад
            </button>
            <button
              :disabled="disabledBtnFinish"
              type="submit"
              class="btn btn-primary"
            >
              Зарегистрироваться
            </button>
          </div>
        </transition>
      </form>
    </div>
  </div>
</template>

<script>
import {
  email,
  required,
  minLength,
  helpers,
  sameAs,
} from 'vuelidate/lib/validators'
const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)
export default {
  data() {
    return {
      step: 1,
      regMessage: false,
      years: [],
      yearEnd: 2020,
      reqText: 'Поле обязательно для заполнения',
      alphaText: 'Запрещены цифры, пробелы и другие символы',
      minLengthText: 'Минимальная длина 6 символов!',
      passwordConfirmText: 'Пароли не совпадают',
      formReg: {
        email: '',
        name: '',
        surname: '',
        facultet: '',
        group: '',
        password: '',
        passwordConfirm: '',
      },
    }
  },
  computed: {
    disabledBtn1() {
      return (
        this.$v.formReg.name.$invalid ||
        this.$v.formReg.surname.$invalid ||
        this.$v.formReg.email.$invalid
      )
    },
    disabledBtnFinish() {
      return (
        this.$v.formReg.facultet.$invalid ||
        this.$v.formReg.group.$invalid ||
        this.$v.formReg.password.$invalid ||
        this.$v.formReg.passwordConfirm.$invalid
      )
    },
  },
  methods: {
    status(validation) {
      return {
        'is-invalid': validation.$error,
        error: validation.$error,
      }
    },
    userRegister() {
      this.reset()
    },
    reset() {
      this.step = 1
      this.regMessage = true
      setTimeout(() => {
        this.regMessage = false
      }, 3000)
      setTimeout(() => {
        this.$store.commit('setUser', {
          name: this.formReg.name,
          email: this.formReg.name,
          status: 'student',
        })
        this.$router.push({ name: 'Home' })
      }, 3000)
    },
  },
  validations: {
    formReg: {
      email: {
        email,
        required,
      },
      name: {
        required,
        alpha,
      },
      surname: {
        required,
        alpha,
      },
      facultet: {
        alpha,
      },
      group: {
        alpha,
      },
      password: {
        required,
        minLength: minLength(6),
      },
      passwordConfirm: {
        sameAs: sameAs('password'),
      },
    },
  },
  created() {
    for (let i = this.yearEnd; i >= 1800; i--) this.years.push(i)
  },
}
</script>

<style>
body {
  background-color: #f1f1f1;
}
form {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 45px -31px rgba(0, 0, 0, 0.75);
}
.error {
  background-color: #fdd;
}
.reg-title {
  color: #5d5d5d;
  font-size: 24px;
  margin-bottom: 18px;
  padding-left: 20px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
</style>
