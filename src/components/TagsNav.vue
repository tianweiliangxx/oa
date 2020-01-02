<template>
  <div class="TagsNav">
    <ul>
      <router-link
        v-for="( item, i ) in tags"
        :to="item.path"
        :key="i"
        @click="test(item.unSelected)">
          <li
            v-bind:class="{ unSelected: item.unSelected }">
            <i v-bind:class = "item.icon"></i>
            {{ item.name }}
            <i
              class="el-icon-close closeStyle"
              @click="closeTag(item.name)"
              v-show=" item.name === '首页' ? false : true ">
            </i>
          </li>
      </router-link>
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
    // 关闭当前标签页，打开最后一个标签页
    closeTag (name) {
      this.removeTag(name)
      if (this.$route.path !== this.tags[this.tags.length - 1].path) {
        // 编程式路由
        this.$router.push({ path: this.tags[this.tags.length - 1].path })
      }
    }
  },
  watch: {
    // 监听路由的变化，高亮对应的标签页
    '$route.path': {
      immediate: true,
      handler (n, o) {
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
      font-size 14px
      list-style none
      li
        width 90px
        height 42px
        line-height 42px
        text-align center
        background-color #fff
        float left
        cursor pointer
        position relative
        .closeStyle
          position absolute
          right 1px
      .unSelected
        background-color: #ccc
        a
          color #888888
          &:hover
            color #000
</style>
