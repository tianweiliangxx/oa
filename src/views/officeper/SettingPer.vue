<template>
  <div class="CenterPer">
      <h3>个人中心==={{this.getid}}</h3>
  </div>
</template>

<script>
export default {
  name: 'SettingPer',
  computed: {
    getid () {
      return this.$router.currentRoute.query.id
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
