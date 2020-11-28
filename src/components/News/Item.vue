<template>
  <el-card class="news-card">
    <img src="../../assets/images/news_1.jpg" class="image" />
    <div style="padding: 14px;">
      <h3>Название</h3>
      <div class="news-content">
        <p>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров требуют определения и уточнения соответствующий условий
          активизации.
        </p>
        <span>3 ноября 2020</span>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.news-card {
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
  width: 100%;
  display: block;
}
</style>
