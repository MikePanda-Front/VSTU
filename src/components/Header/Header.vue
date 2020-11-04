<template>
  <div class="Header">
    <img src="../../assets/Logo.svg" alt="logo" />
    <div class="Header__Nav">
      <div class="Header__Nav__Content">
        <Link v-for="data of this.header" :key="data.header" :data="data" />
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
  data() {
    return {
      header: [
        {
          header: 'Header 1',
          description: {
            shortInfo: 'Краткое описание заголовка',
            info: [
              {
                id: 11,
                header: 'Заголовок 1',
                list: ['Название 1', 'Название 2', 'Название 2'],
              },
            ],
          },
        },
        {
          header: 'Header 2',
          description: {
            shortInfo: 'Краткое описание другого заголовка',
            info: [
              {
                id: 21,
                header: 'Заголовок 1',
                list: ['Название 1', 'Название 2', 'Название 2'],
              },
              {
                id: 22,
                header: 'Заголовок 1',
                list: ['Название 1', 'Название 2', 'Название 2'],
              },
              {
                id: 23,
                header: 'Заголовок 1',
                list: ['Название 1', 'Название 2', 'Название 2'],
              },
            ],
          },
        },
        {
          header: 'Header 3',
          description: {
            shortInfo: 'Краткое описание еще одного заголовка',
            info: [
              {
                id: 31,
                header: 'Заголовок 1',
                list: ['Название 1', 'Название 2', 'Название 2'],
              },
              {
                id: 32,
                header: 'Заголовок 1',
                list: ['Название 1', 'Название 2', 'Название 2'],
              },
            ],
          },
        },
      ],
    }
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
