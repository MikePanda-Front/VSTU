<template>
  <div class="container mt-4">
    <div class="col-sm-4 mx-auto">
      <h2 class="reg-title">Авторизация</h2>
      <form @submit.prevent="userRegister" novalidate>
        <div v-if="regMessage" class="alert alert-success" role="alert">
          Вы успешно зарегистрировались!
        </div>

        <div v-if="regError" class="alert error" type="erro">
          Ошибка регистрации
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
import Users from '../data/users'
const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)
export default {
  data() {
    return {
      regMessage: false,
      regError: false,
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
      users: Users,
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
    reset() {
      this.step = 1
      setTimeout(() => {
        this.regMessage = false
        this.regError = false
      }, 1500)

      const user = this.users.find(
        user =>
          user.email === this.formReg.email &&
          user.password === this.formReg.password
      )

      if (user) {
        this.regMessage = true
        this.$store.commit('setUser', {
          name: user.name,
          email: user.email,
          status: user.status,
        })
        this.$router.push({ name: 'Home' })
      } else {
        this.regError = true
      }
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
