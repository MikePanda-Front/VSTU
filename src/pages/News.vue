<template>
  <div class="news-wrapper">
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
  </div>
</template>

<script>
import Item from '../components/News/Item'
export default {
  components: {
    Item,
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
