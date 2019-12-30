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
            ><li @click="addTag(['个人中心', '/index/officeper/centerper'])"><i class="el-icon-user"></i>个人中心</li></router-link>
          <router-link
           to="/index/officeper/mail"
           ><li  @click="addTag(['邮件', '/index/officeper/mail'])"><i class="el-icon-message"></i> 邮件</li></router-link>
          <li  @click="addTag(['通知公告', '/index/officeper/mail'])"><i class="el-icon-tickets"></i> 通知公告</li>
          <li  @click="addTag('日程')"><i class="el-icon-date"></i> 日程</li>
          <li><i class="el-icon-search"></i> 单据查看</li>
          <li><i class="el-icon-star-off"></i> 单据提醒</li>
          <li><i class="el-icon-collection-tag"></i> 订阅和回执</li>
          <li><i class="el-icon-collection-tag"></i> 会议</li>
          <li><i class="el-icon-time"></i> 我的考勤</li>
          <li><i class="el-icon-edit-outline"></i> 工作日报</li>
        </LeftNav>
      </div>
  </div>
</template>

<script>
import LeftNav from '../../components/LeftNav'
import { mapMutations } from 'vuex'

export default {
  name: 'OfficePer',
  data () {
    return {
      isCollapse: true
    }
  },
  components: {
    LeftNav
  },
  methods: {
    ...mapMutations(['addTag'])
  }
}
</script>

<style lang="stylus" scoped>
  .OfficePer
    width 100%
    height 100%
    .main
      position absolute
      top 62px
      left 180px
      color #000
</style>
