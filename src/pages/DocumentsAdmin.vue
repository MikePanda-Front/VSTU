<template>
  <div class="documents-wrapper">
    <div v-for="file of this.Files" :key="file.id">
      <h4>
        {{ file.Category }}
      </h4>
      <Document v-for="data of file.Data" :key="data.id" :data="data" />
      <DocumentUpload :data="file.Data" />
    </div>
  </div>
</template>

<script>
import DocumentUpload from '../components/DocumentsAdmin/DocumentAdmin'
import Document from '../components/Documents/Document'
import Files from '../data/files'
export default {
  name: 'documents',
  components: {
    Document,
    DocumentUpload,
  },
  data() {
    return { Files }
  },
}
</script>

<style lang="scss" scoped>
.documents-wrapper {
  width: 800px;
  margin: auto;
}

h4 {
  margin: 20px 0;
}
</style>
