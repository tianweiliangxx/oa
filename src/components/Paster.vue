<template>
  <div class="Paster">
      <slot name="title"></slot>
      <slot name="main"></slot>
  </div>
</template>

<script>
export default {
  name: 'Paster'
}
</script>

<style lang="stylus" scoped>
  .Paster
    width 40%
    border 1px solid #ccc
    .title
      height 34px
      line-height 34px
      background-color #ccc
    .list
      ul
        list-style none
        li
          height 30px
          line-height 30px
          border-bottom 1px solid #ccc
</style>
