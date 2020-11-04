<template>
  <div class="Header">
    <img src="../../assets/Logo.svg" alt="logo" />
    <div class="Header__Nav">
      <div class="Header__Nav__Content">
        <Link />
        <Link />
        <!-- <Link /> -->
      </div>
      <LogInOut />
    </div>
  </div>
</template>

<script>
import LogInOut from './LogInOut'
import Link from './Link'

export default {
  components: {
    LogInOut,
    Link,
  },
}
</script>

<style lang="scss" scoped>
.Header {
  @include flexRowCenter;
  justify-content: space-between;

  padding: $space $space_2;

  &__Nav {
    @include flexRowCenter;

    &__Content {
      @include flexRowCenter;
    }
  }

  & img {
    width: 80px;
  }
}
</style>
