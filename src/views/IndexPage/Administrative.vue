<template>
  <div class="Administrative">
      <div class="leftNav">
      <LeftNav>
        <li class="title stair">行政</li>
        <router-link to="/officeper/centerper"><li class="stair">信息中心</li></router-link>
        <router-link to="/officeper/mail"><li class="stair">物品基础管理</li></router-link>
        <li class="stair" >物品管理</li>
        <li class="stair" >固定资产</li>
        <li class="stair" >会议管理</li>
        <li class="stair" >车辆管理</li>
        <li class="stair" >图书管理</li>
        <li class="stair" >印章证照</li>
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

<style lang="stylus" scoped>
  .Administrative
    width 100%
</style>
