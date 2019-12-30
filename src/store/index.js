import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state () {
    return {
      tags: [
        { name: '首页', path: '/index/main', unSelected: true }
      ]
    }
  },
  mutations: {
    addTag (state, name) {
      // 判断是否已经存在标签了
      if (
        JSON.stringify(state.tags).indexOf(JSON.stringify({ name: name[0], path: name[1], unSelected: true })) === -1 &&
        JSON.stringify(state.tags).indexOf(JSON.stringify({ name: name[0], path: name[1], unSelected: false })) === -1
      ) {
        state.tags.push({ name: name[0], path: name[1], unSelected: true })
      }
    },
    removeTag (state, name) {
      for (let i = 0; i < state.tags.length; i++) {
        if (state.tags[i].name === name) {
          state.tags.splice(i, 1)
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
