<template>
  <div class="home-wrapper">
    <Content />
    <div class="events">
      <Event />
      <Event />
      <Event />
    </div>
  </div>
</template>

<script>
import Event from '../components/Home/Event'
import Content from '../components/Home/Content'

export default {
  components: {
    Event,
    Content,
  },
}
</script>

<style scoped>
.home-wrapper {
  display: flex;

  margin: 30px auto;
  padding: 0 50px;
  max-width: 1200px;
}

.events {
  margin-left: 30px;
}
</style>
