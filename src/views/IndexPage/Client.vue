<template>
  <div class="Client">
      <div class="leftNav">
      <LeftNav>
        <li class="title stair">客户</li>
        <router-link to="/officeper/centerper" class="stair"><li>客户主页</li></router-link>
        <router-link to="/officeper/mail" class="stair"><li>客户公海库</li></router-link>
        <li class="stair">客户</li>
        <li class="stair">销售机会</li>
        <li class="stair">合同</li>
        <li class="stair">销售</li>
        <li class="stair">收款单</li>
        <li class="stair">付款单</li>
        <li class="stair">客户统计</li>
        <li class="stair">金额统计</li>
        <li class="stair">客户查看</li>
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
