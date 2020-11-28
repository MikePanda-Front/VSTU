<template>
  <div class="news-wrapper">
    <Content />
    <div class="events">
      <Event />
      <Event />
      <Event />
    </div>
  </div>
</template>

<script>
import Event from '../components/News/Event'
import Content from '../components/News/Content'

export default {
  components: {
    Event,
    Content,
  },
}
</script>

<style scoped>
.news-wrapper {
  display: flex;

  margin: 30px auto;
  padding: 0 50px;
  max-width: 1200px;
}

.events {
  margin-left: 30px;
}
</style>
