<template>
  <div class="documents-wrapper">
    <div>
      <p>Категория</p>
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
</style>
