<template>
  <div class="col-md-4 mx-auto">
    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Имя" label-for="name-input">
        <b-form-input
          id="name-input"
          v-model="name"
          type="text"
          required
          placeholder="Введите имя"
        />
      </b-form-group>
      <b-form-group label="Email" label-for="email-input">
        <b-form-input
          id="email-input"
          v-model="email"
          type="email"
          required
          placeholder="Введите email"
        />
      </b-form-group>
      <b-form-group label="Пароль" label-for="password-input">
        <b-form-input
          id="password-input"
          v-model="password"
          type="password"
          required
          placeholder="Введите пароль"
        />
      </b-form-group>

      <div>
        <b-button type="submit" variant="primary">Регистрация</b-button>
      </div>
    </b-form>
  </div>
</template>

<script src="./index.js"></script>