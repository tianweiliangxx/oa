<template>
  <div class="Finance">
      <div class="leftNav">
      <LeftNav>
        <li class="title stair">财务</li>
        <router-link to="/officeper/centerper"><li class="stair">财务设置</li></router-link>
        <router-link to="/officeper/mail"><li class="stair">记账管理</li></router-link>
        <li class="stair">报销借还款</li>
        <li class="stair">发票付款</li>
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
