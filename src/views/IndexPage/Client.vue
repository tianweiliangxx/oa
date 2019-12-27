<template>
  <div class="Client">
      <div class="leftNav">
      <LeftNav>
        <li class="title">客户</li>
        <router-link to="/officeper/centerper"><li>客户主页</li></router-link>
        <router-link to="/officeper/mail"><li>客户公海库</li></router-link>
        <li>客户</li>
        <li>销售机会</li>
        <li>合同</li>
        <li>销售</li>
        <li>收款单</li>
        <li>付款单</li>
        <li>客户统计</li>
        <li>金额统计</li>
        <li>客户查看</li>
      </LeftNav>
    </div>
  </div>
</template>

<script>
import LeftNav from '../../components/LeftNav'

export default {
  name: 'Client',
  components: {
    LeftNav
  }
}
</script>

<style lang="stylus" scope>
  .Client
    .main
      position absolute
      top 62px
      left 178px
</style>
