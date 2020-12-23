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
        <span @click="showModal"
          >Редактировать
          <img src="../../assets/icons/edit.svg" alt="edit" />
        </span>
      </div>
    </div>

    <Form
      :isShowModal="isShowModal"
      :changeData="changeData"
      :onAdd="false"
      :data="data"
    />
  </el-card>
</template>

<script>
import Form from '../../components/News/Form'

export default {
  components: {
    Form,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      isShowModal: false,
    }
  },
  methods: {
    showModal() {
      this.isShowModal = !this.isShowModal
    },
    changeData(content) {
      this.data = content
      this.showModal()
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
