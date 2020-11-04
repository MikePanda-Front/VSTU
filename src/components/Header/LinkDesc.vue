<template>
  <div class="Wrapper">
    <h1>{{ description.shortInfo }}</h1>
    <div class="Wrapper__Content">
      <div
        class="Wrapper__Content__Links"
        v-for="info of description.info"
        :key="info.id"
      >
        <h2>{{ info.header }}</h2>
        <ul>
          <li v-for="(item, i) of info.list" :key="`${item}-${i}`">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: Object,
  },
}
</script>

<style lang="scss" scoped>
.Wrapper {
  position: absolute;
  left: 0;
  top: 112px;

  @include flexRow;
  width: 100vw;
  padding: 80px;

  color: white;

  background-color: $grey_dark;

  &__Content {
    @include flexRow;

    &__Links {
      margin-right: 50px;
      & h2 {
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        margin-bottom: 15px;
      }
      & ul {
        padding-inline-start: 20px;

        font-size: 14px;
        line-height: 16px;
        & li {
          margin-bottom: 5px;
        }
      }
    }
  }
}

h1 {
  width: 15%;
  margin-right: 40px;

  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
}
</style>
