<template>
  <div class="news-wrapper">
    <ItemAdmin v-for="data of this.Content" :key="data.id" :data="data" />
    <div @click="showModal" class="add-button">
      <i class="el-icon-plus avatar-uploader-icon"></i>
    </div>
    <Form
      :isShowModal="isShowModal"
      :changeData="changeData"
      :onAdd="true"
      :data="Content"
    />
  </div>
</template>

<script>
import ItemAdmin from '../components/News/ItemAdmin'
import Form from '../components/News/Form'
import Content from '../data/news'
export default {
  components: {
    ItemAdmin,
    Form,
  },
  data() {
    return { Content, isShowModal: false }
  },
  methods: {
    showModal() {
      this.isShowModal = !this.isShowModal
    },
    changeData(content) {
      this.Content.push(content)
      this.showModal()
    },
  },
}
</script>

<style lang="scss" scoped>
.add-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 3px dashed rgba($color: #000000, $alpha: 0.5);
  width: calc(100% - 50px);
  margin-top: 20px;

  color: rgba($color: #000000, $alpha: 0.5);
  font-size: 56px;
  font-weight: 600;
  cursor: pointer;
}

.news-wrapper {
  width: 1200px;
  margin: 30px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
