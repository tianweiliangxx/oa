<template>
  <div class="Document">
      <div class="leftNav">
      <LeftNav>
        <li class="title">公文</li>
        <router-link to="/officeper/centerper"><li>公文查阅</li></router-link>
        <router-link to="/officeper/mail"><li>公文设置</li></router-link>
        <li>发文单</li>
        <li>收文单</li>
        <li>公文分发</li>
        <li>公文管理</li>
      </LeftNav>
    </div>
  </div>
</template>

<script>
import LeftNav from '../../components/LeftNav'

export default {
  name: 'Document',
  components: {
    LeftNav
  }
}
</script>

<style lang="stylus" scope>
  .Document
    .main
      position absolute
      top 62px
      left 178px
</style>
