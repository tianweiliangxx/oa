<template>
  <div class="OfficePer">
      <div class="leftNav">
        <LeftNav>
          <li class="title stair">
            <i class="el-icon-monitor"></i>
             个人办公
            <i class="el-icon-search"></i>
            <i class="el-icon-s-fold"></i>
            <i v-show="false" class="el-icon-s-unfold"></i>
          </li>
          <li
            class="stair"
            @click="unfold">
            <i class="el-icon-user"></i>
            个人中心
            <i class="el-icon-caret-bottom" v-show="isUnfold"></i>
            <i class="el-icon-caret-top" v-show="!isUnfold"></i>
          </li>
            <ul v-show="centerper" class="second">
              <router-link
                :to="{ path: '/index/officeper/settingper', query: { id:123 } }">
                <li @click="addTag(['个人设置', '/index/officeper/settingper', 'el-icon-setting'])">
                  个人设置
                </li>
              </router-link>
              <li>提醒信息</li>
              <li>个人资料</li>
              <li>个人考核</li>
              <li>个人考核</li>
              <li>个人考核</li>
              <li>个人考核</li>
              <li>个人考核</li>
              <li>个人考核</li>
            </ul>
          <router-link
           to="/index/officeper/mail">
            <li class="stair" @click="addTag(['邮件', '/index/officeper/mail', 'el-icon-message'])">
              <i class="el-icon-message"></i> 邮件
            </li>
          </router-link>
          <li class="stair" @click="addTag(['通知公告', '/index/officeper/mail'])"><i class="el-icon-tickets"></i> 通知公告</li>
          <li class="stair" @click="addTag('日程')"><i class="el-icon-date"></i> 日程</li>
          <li class="stair"><i class="el-icon-search"></i> 单据查看</li>
          <li class="stair"><i class="el-icon-star-off"></i> 单据提醒</li>
          <li class="stair"><i class="el-icon-collection-tag"></i> 订阅和回执</li>
          <li class="stair"><i class="el-icon-collection-tag"></i> 会议</li>
          <li class="stair"><i class="el-icon-time"></i> 我的考勤</li>
          <li class="stair"><i class="el-icon-edit-outline"></i> 工作日报</li>
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
      isCollapse: true,
      centerper: false,
      isUnfold: true
    }
  },
  components: {
    LeftNav
  },
  methods: {
    ...mapMutations(['addTag']),
    // 二级导航
    unfold (e) {
      this.centerper = !this.centerper
      this.isUnfold = !this.isUnfold
    }
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
