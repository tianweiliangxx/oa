<template>
  <div class="Administrative">
      <div class="leftNav">
      <LeftNav>
        <li class="title">行政</li>
        <router-link to="/officeper/centerper"><li>信息中心</li></router-link>
        <router-link to="/officeper/mail"><li>物品基础管理</li></router-link>
        <li>物品管理</li>
        <li>固定资产</li>
        <li>会议管理</li>
        <li>车辆管理</li>
        <li>图书管理</li>
        <li>印章证照</li>
      </LeftNav>
    </div>
  </div>
</template>

<script>
import LeftNav from '../../components/LeftNav'

export default {
  name: 'Administrative',
  components: {
    LeftNav
  }
}
</script>

<style lang="stylus" scope>
  .Administrative
    width 100%
</style>
