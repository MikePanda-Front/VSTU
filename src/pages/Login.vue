<template>
  <div class="container mt-4">
    <div class="col-sm-4 mx-auto">
      <h2 class="reg-title">Авторизация</h2>
      <form @submit.prevent="userRegister" novalidate>
        <div v-if="regMessage" class="alert alert-success" role="alert">
          Вы успешно зарегистрировались!
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

          <div class="invalid-feedback" v-if="!$v.formReg.password.required">
            {{ reqText }}
          </div>
          <div class="invalid-feedback" v-if="!$v.formReg.password.minLength">
            {{ minLengthText }}
          </div>
        </div>

        <button :disabled="disabledBtn1" type="submit" class="btn btn-primary">
          Войти
        </button>
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
        country: '',
        city: '',
        year: '',
        career: '',
        password: '',
        passwordConfirm: '',
      },
    }
  },
  computed: {
    disabledBtn1() {
      return this.$v.formReg.email.$invalid || this.$v.formReg.password.$invalid
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
      // this.axios({
      //   url: `https://jsonplaceholder.typicode.com/posts/1`,
      //   method: 'GET',
      //   responseType: 'blob',
      //   headers: { 'Access-Control-Allow-Origin': '*' },
      // }).then(response => {
      //   console.log('response', response)
      // })
      this.reset()
    },
    reset() {
      this.step = 1
      this.regMessage = true
      setTimeout(() => {
        this.regMessage = false
      }, 1500)
      setTimeout(() => {
        this.$store.commit('setUser', {
          name: 'Student',
          email: 'mail@mail.com',
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
      country: {
        alpha,
      },
      city: {
        alpha,
      },
      year: {
        required,
      },
      career: {
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
