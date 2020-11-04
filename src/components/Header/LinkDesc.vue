<template>
  <div class="Wrapper">
    <h1>Краткая ифнормация о категоряих</h1>
    <div class="Wrapper__Content">
      <div class="Wrapper__Content__Links">
        <h2>Загаловок</h2>
        <ul>
          <li>Название</li>
          <li>Название</li>
          <li>Название</li>
        </ul>
      </div>
      <div class="Wrapper__Content__Links">
        <h2>Загаловок</h2>
        <ul>
          <li>Название</li>
          <li>Название</li>
          <li>Название</li>
        </ul>
      </div>
      <div class="Wrapper__Content__Links">
        <h2>Загаловок</h2>
        <ul>
          <li>Название</li>
          <li>Название</li>
          <li>Название</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
