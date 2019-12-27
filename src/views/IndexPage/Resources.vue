<template>
  <div class="Resources">
      <div class="leftNav">
      <LeftNav>
        <li class="title">任务资源</li>
        <router-link to="/officeper/centerper"><li>项目</li></router-link>
        <router-link to="/officeper/mail"><li>任务</li></router-link>
        <li>文档中心</li>
        <li>共享的文档</li>
        <li>文档协作</li>
        <li>文件传送</li>
        <li>知识信息管理</li>
        <li>知识题库管理</li>
        <li>知识信息查看</li>
        <li>知识题库学习</li>
      </LeftNav>
    </div>
  </div>
</template>

<script>
import LeftNav from '../../components/LeftNav'

export default {
  name: 'Resources',
  components: {
    LeftNav
  }
}
</script>

<style lang="stylus" scoped>
.Resources
    .main
      position absolute
      top 62px
      left 180px
      color #000
</style>
