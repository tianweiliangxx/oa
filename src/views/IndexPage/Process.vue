<template>
  <div class="Process">
    <div class="leftNav">
      <LeftNav>
        <li class="title stair">流程</li>
        <router-link to="/officeper/centerper"><li class="stair">待办/处理</li></router-link>
        <router-link to="/officeper/mail"><li class="stair">申请流程</li></router-link>
        <li class="stair">我的申请</li>
        <li class="stair">草稿待提交</li>
        <li class="stair">我申请未通过</li>
        <li class="stair">我的下属申请</li>
        <li class="stair">经我处理</li>
        <li class="stair">抄送给我的单据</li>
        <li class="stair">授权单据查看</li>
        <li class="stair">流程监控</li>
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
    .main
      position absolute
      top 62px
      left 178px

</style>
