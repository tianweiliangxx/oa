<template>
  <div class="Attendance">
      <div class="leftNav">
      <LeftNav>
        <li class="title stair">人事考勤</li>
        <router-link to="/officeper/centerper"><li class="stair">人事档案</li></router-link>
        <router-link to="/officeper/mail"><li class="stair">人事管理</li></router-link>
        <li class="stair">工作日报</li>
        <li class="stair">考核管理</li>
        <li class="stair">薪资管理</li>
        <li class="stair">考勤设置</li>
        <li class="stair">考勤机管理</li>
        <li class="stair">考勤信息</li>
        <li class="stair">考试培训</li>
      </LeftNav>
    </div>
  </div>
</template>

<script>
import LeftNav from '../../components/LeftNav'

export default {
  name: 'Attendance',
  components: {
    LeftNav
  }
}
</script>

<style lang="stylus" scope>

</style>
