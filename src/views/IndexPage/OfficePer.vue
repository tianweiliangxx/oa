<template>
  <div class="OfficePer">
      <div class="leftNav">
        <LeftNav></LeftNav>
      </div>
      <router-view class="main"></router-view>
  </div>
</template>

<script>
import LeftNav from '../../components/LeftNav'

export default {
  name: 'OfficePer',
  data () {
    return {
      isCollapse: true
    }
  },
  components: {
    LeftNav
  }
}
</script>

<style lang="stylus" scoped>
  .OfficePer
    .leftNav
      position absolute
      top 60px
    .main
      position absolute
      top 62px
      left 178px
      width 100%
      height 100%
      background-color #000
</style>
