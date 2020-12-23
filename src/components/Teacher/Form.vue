<template>
  <div v-if="isShowModal" class="edit-wrapper">
    <div class="edit-modal">
      <el-form ref="form" :model="form">
        <el-upload
          class="upload-demo"
          ref="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :auto-upload="false"
        >
          <el-button slot="trigger" size="small" type="primary"
            >Выбрать файл<i class="el-icon-upload el-icon-right"></i
          ></el-button>
        </el-upload>
        <el-input placeholder="Название" v-model="name"></el-input>

        <el-input
          type="textarea"
          placeholder="Дополнительная информация"
          v-model="content"
          rows="10"
        ></el-input>
        <el-button @click="onSubmit" type="primary">Сохранить</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onAdd: Boolean,
    data: Object,
    isShowModal: Boolean,
    changeData: Function,
  },
  data() {
    return {
      name: this.data.name ? this.data.name : '',
      content: this.data.content ? this.data.content.data : '',
    }
  },
  methods: {
    onSubmit() {
      const newsContent = {
        id: new Date().getTime(),
        image: '1.png',
        name: this.name,
        content: {
          data: this.content,
        },
      }
      console.log('newsContent', newsContent)
      this.changeData(newsContent)
    },
  },
}
</script>

<style lang="scss" scoped>
.edit-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);
}

.edit-modal {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  width: 800px;

  & form > div {
    margin-bottom: 20px;
  }
}
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
    margin-top: 10px;

    & img {
      width: 15px;
    }
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
