<template>
  <div class="newsItem-wrapper">
    <div class="newsItem-header">
      <img
        :src="require(`../assets/images/${Content.image}`)"
        v-bind:alt="Content.image"
      />
      <p>{{ Content.content.header }}</p>
    </div>
    <div class="newsItem-content" v-html="Content.content.data"></div>
  </div>
</template>

<script>
import Content from '../data/news'

export default {
  data() {
    return {
      Content: Content.filter(item => item.id === this.$route.params.id)[0],
    }
  },
}
</script>

<style scoped>
.newsItem-header {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.newsItem-header img {
  width: 100vw;
  height: 300px;

  object-fit: cover;
}

.newsItem-header p {
  position: absolute;
  bottom: 0;

  color: white;
  font-size: 36px;
  font-weight: 600;
}

.newsItem-header:before {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.4);

  content: '';
}

.newsItem-content {
  margin: auto;
  max-width: 800px;
}

.newsItem-content >>> p {
  text-indent: 30px;
  margin-top: 50px;
}

.newsItem-content >>> img {
  width: 800px;
  height: 200px;
  object-fit: cover;
  margin: 50px 0;
}
</style>
