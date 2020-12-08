<template>
  <div class="documnet-wrapper">
    <p>Название документа</p>
    <div class="document-data">
      <p>22.11.2020</p>
      <p>145kb</p>
      <img
        src="../../assets/icons/download-icon.svg"
        alt="download"
        @click="download"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: '../Header.vue',
    }
  },
  methods: {
    download() {
      this.axios({
        url: 'http://localhost:8080/files/index.html',
        method: 'GET',
        responseType: 'blob',
      }).then(response => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]))
        var fileLink = document.createElement('a')
        fileLink.href = fileURL
        fileLink.setAttribute('download', 'file.pdf')
        document.body.appendChild(fileLink)
        fileLink.click()
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
}

.document-data {
  display: flex;
  align-items: center;
  & p {
    margin-right: 20px;
  }

  & img {
    width: 16px;

    &:hover {
      fill: white;
    }
  }
}
</style>
