<template>
  <div class="news-wrapper">
    <Item v-for="data of this.Content" :key="data.id" :data="data" />
    <!-- <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item /> -->
  </div>
</template>

<script>
import Item from '../components/News/Item'
import Content from '../data/news'
export default {
  components: {
    Item,
  },
  data() {
    return { Content }
  },
}
</script>

<style lang="scss" scoped>
.news-wrapper {
  width: 1200px;
  margin: 30px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
