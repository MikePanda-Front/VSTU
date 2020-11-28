<template>
  <el-menu :router="true" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="/home" :route="{ name: 'Home' }">Главная</el-menu-item>
    <el-menu-item index="/news" :route="{ name: 'News' }">Новости</el-menu-item>
    <el-menu-item index="2">Расписание</el-menu-item>
    <el-menu-item index="/documents" :route="{ name: 'Documents' }"
      >Документы</el-menu-item
    >
    <el-menu-item index="4">Преподаватели</el-menu-item>
    <el-menu-item index="/auth" :route="{ name: 'Auth' }">Регистрация</el-menu-item>
    <el-menu-item index="/login" :route="{ name: 'Login' }">Логин</el-menu-item>
  </el-menu>
</template>

<script>
export default {}
</script>

<style></style>
