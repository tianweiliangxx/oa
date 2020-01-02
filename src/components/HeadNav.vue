<template>
  <div class="HeadNav">
     <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#98e165">
      <li class="el-menu-item icon">协同办公OA系统</li>
      <el-menu-item index="/index/officeper" @click="changeNav('officeper')"><i class="el-icon-monitor"></i>个人办公</el-menu-item>
      <el-menu-item index="/index/process" @click="changeNav('process')">流程</el-menu-item>
      <el-menu-item index="/index/resources" @click="changeNav('resources')">任务资源</el-menu-item>
      <el-menu-item index="/index/document" @click="changeNav('document')">公文</el-menu-item>
      <el-menu-item index="/index/client" @click="changeNav('client')">客户</el-menu-item>
      <el-menu-item index="/index/attendance" @click="changeNav('attendance')">人事考勤</el-menu-item>
      <el-menu-item index="/index/administrative" @click="changeNav('administrative')">行政</el-menu-item>
      <el-menu-item index="/index/finance" @click="changeNav('finance')">财务</el-menu-item>
      <el-menu-item index="/index/processmodule" @click="changeNav('processmodule')">流程模块</el-menu-item>
      <el-menu-item index="/index/system" @click="changeNav('system')">系统</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'HeadNav',
  methods: {
    // 把点击的该项的值传给Index
    changeNav (name) {
      this.$emit('sideNav', name)
    }
  }
}
</script>

<style lang="stylus">
    .HeadNav
        width 100%
        height 100%
        .icon
          background-color #fff
          width 177px
          font-family "迷你简行楷"
          font-size 18px
          color #000
          opacity 1
</style>
