<template>
  <div class="ProcessModule">
      <div class="leftNav">
      <LeftNav>
        <li class="title stair">流程模块</li>
        <router-link to="/officeper/centerper"><li class="stair">数据选项</li></router-link>
        <router-link to="/officeper/mail"><li class="stair">流程模块列表</li></router-link>
        <li class="stair">审核人员分组</li>
        <li class="stair">流程审核步骤</li>
        <li class="stair">表单元素管理</li>
        <li class="stair">流程模块权限</li>
        <li class="stair">流程单据查看</li>
        <li class="stair">单据操作菜单</li>
        <li class="stair">流程模块条件</li>
        <li class="stair">单据通知设置</li>
        <li class="stair">流程模块统计</li>
        <li class="stair">单据异常监控</li>
      </LeftNav>
    </div>
  </div>
</template>

<script>
import LeftNav from '../../components/LeftNav'

export default {
  name: 'ProcessModule',
  components: {
    LeftNav
  }
}
</script>

<style lang="stylus" scope>
  .ProcessModule
    .main
      position absolute
      top 62px
      left 178px
</style>
