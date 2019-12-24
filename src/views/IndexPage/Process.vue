<template>
  <div class="Process">
    <div class="leftNav">
      <LeftNav>
        <li class="title">流程</li>
        <router-link to="/officeper/centerper"><li>待办/处理</li></router-link>
        <router-link to="/officeper/mail"><li>申请流程</li></router-link>
        <li>我的申请</li>
        <li>草稿待提交</li>
        <li>我申请未通过</li>
        <li>我的下属申请</li>
        <li>经我处理</li>
        <li>抄送给我的单据</li>
        <li>授权单据查看</li>
        <li>流程监控</li>
      </LeftNav>
    </div>
  </div>
</template>

<script>
import LeftNav from '../../components/LeftNav'

export default {
  name: 'Process',
  components: {
    LeftNav
  }

}
</script>

<style lang="stylus" scoped>
 .Process
    .leftNav
      position absolute
      top 60px
    .main
      position absolute
      top 62px
      left 178px
      width 100%
      height 100%
      background-color #000
</style>
