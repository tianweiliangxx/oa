<template>
  <div class="OfficePer">
      <div class="leftNav">
        <LeftNav>
          <li class="title">个人办公</li>
          <router-link to="/officeper/centerper"><li>个人中心</li></router-link>
          <router-link to="/officeper/mail"><li>邮件</li></router-link>
          <li>通知公告</li>
          <li>日程</li>
          <li>单据查看</li>
          <li>单据提醒</li>
          <li>订阅和回执</li>
          <li>会议</li>
          <li>我的考勤</li>
          <li>工作日报</li>
        </LeftNav>
      </div>
      <router-view class="main"></router-view>
  </div>
</template>

<script>
import LeftNav from '../../components/LeftNav'

export default {
  name: 'OfficePer',
  data () {
    return {
      isCollapse: true
    }
  },
  components: {
    LeftNav
  }
}
</script>

<style lang="stylus" scoped>
  .OfficePer
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
