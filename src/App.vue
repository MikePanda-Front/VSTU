<template>
  <div>
    <Header />
    <router-view> </router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header,
  },
}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
}
</style>
