<template>
  <div class="index">
      <HeadNav></HeadNav>
      <router-view></router-view>
      <router-view name="side"></router-view>
      <router-view name="main"></router-view>
  </div>
</template>

<script>
import HeadNav from '../components/HeadNav'

export default {
  name: 'Index',
  components: {
    HeadNav
  }

}
</script>

<style lang="stylus">
    .index
        width 100%
        height  100%
</style>
