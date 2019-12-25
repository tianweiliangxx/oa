<template>
  <div class="LeftNav">
    <ul class="NavTitle">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LeftNav'
}
</script>

<style lang="stylus">
    .LeftNav
        width 176px
        position relative
        background-color #fff
        .NavTitle
            height 40px
            width 100%
            background-color #ccc
            line-height 40px
            text-align left
            li
              border-bottom 1px solid #ccc
              padding 0 0 0 10px
              &:hover
                cursor pointer
                background-color rgba(200,200,200,.7)
</style>
