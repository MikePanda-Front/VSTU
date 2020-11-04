<template>
  <div class="Wrapper">
    <p>Header 1</p>
    <div class="Wrapper__Content">
      <LinkDesc />
    </div>
  </div>
</template>

<script>
import LinkDesc from './LinkDesc'
export default {
  components: {
    LinkDesc,
  },
}
</script>

<style lang="scss" scoped>
.Wrapper {
  & p {
    @include flexColumnCenter;
    padding: 0 $space_3;
    margin: 0;

    font-size: 18px;

    cursor: pointer;
    transition: 0.5s;

    &:hover {
      color: $blue;
      & + .Wrapper__Content {
        display: block;
      }
      &:before {
        opacity: 1;
      }
    }

    &:before {
      position: absolute;
      top: 97px;

      opacity: 0;

      content: '';
      width: 0;
      height: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 15px solid $grey_dark;
    }
  }

  &__Content {
    display: none;
  }
}
</style>
