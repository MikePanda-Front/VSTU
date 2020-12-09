<template>
  <div>
    <el-menu
      :router="true"
      v-if="getUser.status === 'student'"
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item index="/home" :route="{ name: 'Home' }"
        >Главная</el-menu-item
      >
      <el-menu-item index="/news" :route="{ name: 'News' }"
        >Новости</el-menu-item
      >
      <el-menu-item index="2">Расписание</el-menu-item>
      <el-menu-item index="/documents" :route="{ name: 'Documents' }"
        >Документы</el-menu-item
      >
      <el-menu-item index="4">Преподаватели</el-menu-item>
      <p class="user">{{ getUser.name }}</p>
    </el-menu>

    <el-menu
      :router="true"
      v-if="getUser.status === ''"
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item index="/home" :route="{ name: 'Home' }"
        >Главная</el-menu-item
      >
      <el-menu-item index="/news" :route="{ name: 'News' }"
        >Новости</el-menu-item
      >
      <el-menu-item index="4">Преподаватели</el-menu-item>
      <div class="right">
        <el-menu-item index="/auth" :route="{ name: 'Auth' }"
          >Регистрация</el-menu-item
        >
        <el-menu-item index="/login" :route="{ name: 'Login' }"
          >Логин</el-menu-item
        >
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  computed: {
    getUser() {
      return this.$store.getters.userInfo
    },
  },
}
</script>

<style>
.right {
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.user {
  position: absolute;
  right: 0;
  margin: 0;
  vertical-align: middle;
  line-height: 60px;
  margin-right: 20px;
}
</style>
