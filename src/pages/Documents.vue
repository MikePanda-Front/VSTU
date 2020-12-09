<template>
  <div class="documents-wrapper">
    <div>
      <h4>Категория 1</h4>
      <Document />
      <Document />
      <Document />
      <Document />
    </div>
    <div>
      <h4>Категория 2</h4>
      <Document />
      <Document />
      <Document />
      <Document />
    </div>
  </div>
</template>

<script>
import Document from '../components/Documents/Document'
export default {
  name: 'documents',
  components: {
    Document,
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
