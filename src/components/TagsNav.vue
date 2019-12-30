<template>
  <div class="TagsNav">
    <ul>
      <li
        v-for="( item, i ) in tags"
        :key="i"
        v-bind:class="{ unSelected: item.unSelected }"
        @click="test(item.unSelected)">
          <router-link :to="item.path">
            {{ item.name }}
          </router-link>
          <i
            class="el-icon-close"
            @click="closeTag(item.name)"
            v-show=" item.name === '首页' ? false : true "></i>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'TagsNav',
  computed: {
    ...mapState(['tags'])
  },
  methods: {
    ...mapMutations(['removeTag']),
    test (item) {
      console.log(item)
    },
    clickIt (item) {
      console.log(item)
    },
    closeTag(name){
      this.removeTag(name)
    }
  },
  watch: {
    '$route.path': {
      immediate: true,
      handler (n, o) {
        console.log(n)
        for (let i = 0; i < this.tags.length; i++) {
          if (this.tags[i].path === n) {
            this.tags[i].unSelected = false
          } else {
            this.tags[i].unSelected = true
          }
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .TagsNav
    width 100%
    height 42px
    background-color #ccc
    ul
      list-style none
      li
        width 90px
        height 42px
        line-height 42px
        text-align center
        background-color #fff
        float left
        cursor pointer
      .unSelected
        background-color: #ccc
        a
          color #888888
          &:hover
            color #000
</style>
