<template>
  <div class="TagsNav">
    <ul>
      <li
        v-for="( item, i ) in tags"
        :key="i"
        v-bind:class="{ unSelected: true}"
      >
        <router-link :to="item.path">
          {{ item.name }}
        </router-link>
        <i
          class="el-icon-close"
          @click="removeTag(item.name)"
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
</style>
