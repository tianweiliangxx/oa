<template>
  <div class="HeadNav">
     <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <li class="el-menu-item icon">协同办公OA系统</li>
      <el-menu-item index="/officeper">个人办公</el-menu-item>
      <el-menu-item index="/process">流程</el-menu-item>
      <el-menu-item index="/resources">任务资源</el-menu-item>
      <el-menu-item index="/document">公文</el-menu-item>
      <el-menu-item index="/client">客户</el-menu-item>
      <el-menu-item index="/attendance">人事考勤</el-menu-item>
      <el-menu-item index="/administrative">行政</el-menu-item>
      <el-menu-item index="/finance">财务</el-menu-item>
      <el-menu-item index="/processmodule">流程模块</el-menu-item>
      <el-menu-item index="/system">系统</el-menu-item>
    </el-menu>

  </div>
</template>

<script>
export default {
  name: 'HeadNav'
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
