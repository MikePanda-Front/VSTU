<template>
  <el-card class="news-card">
    <router-link
      class="image"
      :to="{ name: 'NewsItem', params: { id: data.id } }"
    >
      <span>Подробнее</span>
      <img
        :src="require(`../../assets/images/${data.image}`)"
        v-bind:alt="data.image"
      />
    </router-link>
    <div class="news-data">
      <h3>{{ data.name }}</h3>
      <div class="news-content">
        <p>
          {{ data.desc }}
        </p>
        <span>{{ data.date }}</span>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    data: Object,
  },
}
</script>

<style lang="scss" scoped>
.news-data {
  display: block;
  padding: 0 20px;

  text-decoration: none;
  color: black;
}
.news-card {
  position: relative;

  width: 350px;
  margin-top: 20px;

  cursor: pointer;
}

.news-content {
  display: flex;
  flex-direction: column;
  & span {
    text-align: end;
  }
}

.image {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;

  & img {
    height: 200px;
    width: 100%;
  }

  & span {
    position: absolute;

    color: white;
    font-size: 24px;
    font-weight: 600;

    opacity: 0;
    transition: 0.3s;
  }

  &:before {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: rgba(0, 0, 0, 0.8);
    opacity: 0;
    transition: 0.3s;

    content: '';
  }

  &:hover {
    &:before,
    span {
      opacity: 1;
    }
  }
}

.el-card__body {
  padding: 0;
}
</style>
