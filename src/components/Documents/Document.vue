<template>
  <div class="documnet-wrapper">
    <p>{{ data.name }}</p>
    <div class="document-data">
      <p>{{ data.date }}</p>
      <p>{{ data.size / 1000 }} kb</p>
      <img
        src="../../assets/icons/download-icon.svg"
        alt="download"
        @click="download(data.path)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      url: '../Header.vue',
    }
  },
  methods: {
    download(path) {
      this.axios({
        url: path,
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

  & p {
    margin-bottom: 0;
    font-size: 14px;
  }
}

.document-data {
  display: flex;
  align-items: center;
  & p {
    margin-right: 20px;
    font-size: 14px;
  }

  & img {
    width: 16px;

    &:hover {
      fill: white;
    }
  }
}
</style>
