<template>
  <div class="documnet-wrapper">
    <input type="file" ref="file" />
    <img
      src="../../assets/icons/upload-icon.svg"
      alt="download"
      @click="upload"
    />
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  data() {
    return {
      url: '../Header.vue',
    }
  },
  methods: {
    upload() {
      const file = this.$refs.file.files[0]

      this.data.push({
        id: new Date().getTime(),
        name: file.name,
        date: `${new Date().getDate()}.${new Date().getMonth() +
          1}.${new Date().getFullYear()}`,
        size: file.size,
        path: 'http://localhost:8080/files/index.html',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.documnet-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;

  border-bottom: 1px solid black;

  & p {
    margin-bottom: 0;
  }

  & img {
    width: 16px;

    &:hover {
      fill: white;
    }
  }
}
</style>
