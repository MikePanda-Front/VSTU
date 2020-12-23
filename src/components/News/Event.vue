<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Название объявлений</span>
    </div>
    <div class="text item">
      <p class="card-content">
        Значимость этих проблем настолько очевидна, что консультация с широким
        активом требуют от нас анализа позиций, занимаемых участниками в
        отношении поставленных задач.
      </p>
      <p class="card-date">
        20.12.2020
      </p>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'event',
}
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 300px;
  margin-bottom: 20px;
}

.card-date {
  text-align: end;
}
</style>
