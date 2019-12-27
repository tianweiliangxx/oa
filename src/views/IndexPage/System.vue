<template>
  <div class="System">
      <div class="leftNav">
      <LeftNav>
        <li class="title">系统</li>
        <router-link to="/officeper/centerper"><li>基础管理</li></router-link>
        <router-link to="/officeper/mail"><li>邮件管理</li></router-link>
        <li>短信管理</li>
        <li>即时通信管理</li>
        <li>订阅回执管理</li>
        <li>权限管理</li>
        <li>系统工具</li>
        <li>微信公共号</li>
        <li>微信企业号</li>
        <li>企业微信</li>
        <li>钉钉管理</li>
      </LeftNav>
    </div>
  </div>
</template>

<script>
import LeftNav from '../../components/LeftNav'
export default {
  name: 'System',
  components: {
    LeftNav
  }
}
</script>

<style lang="stylus" scope>
  .System
    .main
      position absolute
      top 62px
      left 178px
</style>
