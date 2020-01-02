<template>
  <div class="System">
      <div class="leftNav">
      <LeftNav>
        <li class="title stair">系统</li>
        <router-link to="/officeper/centerper"><li class="stair">基础管理</li></router-link>
        <router-link to="/officeper/mail"><li class="stair">邮件管理</li></router-link>
        <li class="stair">短信管理</li>
        <li class="stair">即时通信管理</li>
        <li class="stair">订阅回执管理</li>
        <li class="stair">权限管理</li>
        <li class="stair">系统工具</li>
        <li class="stair">微信公共号</li>
        <li class="stair">微信企业号</li>
        <li class="stair">企业微信</li>
        <li class="stair">钉钉管理</li>
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
