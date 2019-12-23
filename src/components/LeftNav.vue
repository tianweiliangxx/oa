<template>
  <div class="LeftNav">
    <ul class="NavTitle">
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
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LeftNav'
}
</script>

<style lang="stylus" scoped>
    .LeftNav
        width 176px
        height  100%
        position relative
        background-color #fff
        .NavTitle
            height 40px
            width 100%
            background-color #ccc
            line-height 40px
            text-align center
            li
              border-bottom 1px solid #ccc
              &:hover
                cursor pointer
                background-color rgba(200,200,200,.7)
</style>
