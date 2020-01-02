<template>
  <div class="Main">
    <div class="topNav">
      <ul>
        <li>
          <i class="el-icon-time"></i>
          <p>待办/处理</p>
        </li>
        <li>
          <i class="el-icon-message-solid"></i>
          <p>提示信息</p>
        </li>
        <li>
          <i class="el-icon-user-solid"></i>
          <p>用户管理</p>
        </li>
        <li>
          <i class="el-icon-notebook-2"></i>
          <p>我未完成的任务</p>
        </li>
        <li>
          <i class="el-icon-star-on"></i>
          <p>单据提醒</p>
        </li>
        <li>
          <i class="el-icon-s-cooperation"></i>
          <p>单据异常监控</p>
        </li>
        <li>
          <i class="el-icon-loading"></i>
          <p>刷新</p>
        </li>
      </ul>
    </div>
    <div class="cut"></div>
    <div class="content">
      <Paster>
        <div slot="title">
          <div class="title">
            <i class="el-icon-collection-tag"></i>
            通知公告
            更多>>
          </div>
        </div>
        <div slot="main">
          <div class="list">
            <ul>
              <li>【通知公告】 第一套公告</li>
              <li>【通知公告】 第一套公告</li>
              <li>【通知公告】 第一套公告</li>
            </ul>
          </div>
        </div>
      </Paster>
    </div>
  </div>
</template>

<script>
import Paster from '../components/Paster'

export default {
  name: 'Main',
  components: {
    Paster
  }
}
</script>

<style lang="stylus" scoped>
  .Main
    width 98%
    margin 0 auto
    .topNav
      margin 20px 0 0 0
      ul
        list-style: none
        display: flex
        li
          width 120px
          height 120px
          margin-left 10px
          text-align center
          border 1px solid #ccc
          border-radius 6px
          i
            font-size 40px
            line-height 80px
          p
            color #0078d7
    .cut
      margin 20px 0 0 0
      width 100%
      height 1px
      background-color #ccc
    .content
      margin 20px 0 0 0
</style>
