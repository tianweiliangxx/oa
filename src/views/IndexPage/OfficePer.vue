<template>
  <div class="OfficePer">
      <div class="leftNav">
        <LeftNav>
          <li class="title">
            <i class="el-icon-monitor"></i>
            个人办公
            <i class="el-icon-search"></i>
            <i class="el-icon-s-fold"></i>
            <i v-show="false" class="el-icon-s-unfold"></i>
          </li>
          <router-link
            :to="{ path: '/index/officeper/centerper', query: { id:123 } }"
            ><li><i class="d"></i>个人中心</li></router-link>
          <router-link
           to="/index/officeper/mail"
           ><li><i class="el-icon-message"></i> 邮件</li></router-link>
          <li><i class="el-icon-tickets"></i> 通知公告</li>
          <li><i class="el-icon-date"></i> 日程</li>
          <li><i class="el-icon-search"></i> 单据查看</li>
          <li><i class="el-icon-star-off"></i> 单据提醒</li>
          <li><i class="el-icon-collection-tag"></i>订阅和回执</li>
          <li><i class="el-icon-collection-tag"></i>会议</li>
          <li><i class="el-icon-time"></i> 我的考勤</li>
          <li><i class="el-icon-edit-outline"></i> 工作日报</li>
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
      left 180px
      color #000
</style>
