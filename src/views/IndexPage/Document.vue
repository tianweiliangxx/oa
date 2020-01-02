<template>
  <div class="Document">
      <div class="leftNav">
      <LeftNav>
        <li class="title stair">公文</li>
        <router-link to="/officeper/centerper"><li class="stair">公文查阅</li></router-link>
        <router-link to="/officeper/mail"><li class="stair">公文设置</li></router-link>
        <li class="stair">发文单</li>
        <li class="stair">收文单</li>
        <li class="stair">公文分发</li>
        <li class="stair">公文管理</li>
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
