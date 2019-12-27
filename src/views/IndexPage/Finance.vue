<template>
  <div class="Finance">
      <div class="leftNav">
      <LeftNav>
        <li class="title">财务</li>
        <router-link to="/officeper/centerper"><li>财务设置</li></router-link>
        <router-link to="/officeper/mail"><li>记账管理</li></router-link>
        <li>报销借还款</li>
        <li>发票付款</li>
      </LeftNav>
    </div>
  </div>
</template>

<script>
import LeftNav from '../../components/LeftNav'

export default {
  name: 'Finance',
  components: {
    LeftNav
  }
}
</script>

<style lang="stylus" scope>
  .Finance
    .main
      position absolute
      top 62px
      left 178px
</style>
