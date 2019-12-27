<template>
  <div class="index">
    <div class="header">
      <HeadNav @sideNav="sideNav"></HeadNav>
    </div>
    <div class="side">
      <Administrative v-show="isShow.administrative"></Administrative>
      <Attendance v-show="isShow.attendance"></Attendance>
      <Client v-show="isShow.client"></Client>
      <Document v-show="isShow.document"></Document>
      <Finance v-show="isShow.finance"></Finance>
      <OfficePer class="OfficePer" v-show="isShow.officeper"></OfficePer>
      <Process v-show="isShow.process"></Process>
      <ProcessModule v-show="isShow.processmodule"></ProcessModule>
      <Resources v-show="isShow.resources"></Resources>
      <System v-show="isShow.system"></System>
    </div>
    <div class="main">
      <TagsNav></TagsNav>
      <router-view></router-view>
    </div>
    <div class="foot">

    </div>
  </div>
</template>

<script>
import HeadNav from '../components/HeadNav'
import TagsNav from '../components/TagsNav'
import Administrative from '../views/IndexPage/Administrative'
import Attendance from '../views/IndexPage/Attendance'
import Client from '../views/IndexPage/Client'
import Document from '../views/IndexPage/Document'
import Finance from '../views/IndexPage/Finance'
import OfficePer from '../views/IndexPage/OfficePer'
import Process from '../views/IndexPage/Process'
import ProcessModule from '../views/IndexPage/ProcessModule'
import Resources from '../views/IndexPage/Resources'
import System from '../views/IndexPage/System'

export default {
  name: 'Index',
  data () {
    return {
      isShow: {
        headnav: false,
        administrative: false,
        attendance: false,
        client: false,
        document: false,
        finance: false,
        officeper: true,
        process: false,
        processmodule: false,
        resources: false,
        system: false
      }
    }
  },
  components: {
    HeadNav,
    TagsNav,
    Administrative,
    Attendance,
    Client,
    Document,
    Finance,
    OfficePer,
    Process,
    ProcessModule,
    Resources,
    System
  },
  methods: {
    sideNav (name) {
      console.log(name)
      for (let key in this.isShow) {
        if (key === name) {
          this.isShow[key] = true
        } else {
          this.isShow[key] = false
        }
        console.log(this.isShow[key])
      }
      console.log(name)
    }
  }
}
</script>

<style lang="stylus">
    .index
        width 100%
        height 100%
        .header
          width 100%
          height 8%
          position absolute
        .side
          width 177px
          height 701px
          position absolute
          top 60px
          .OfficePer
            width 100%
        .main
          width 1282px
          height 699px
          position absolute
          top 62px
          left 178px
</style>
