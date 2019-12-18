<template>
  <div class="About">
      <h1>这是About</h1>
      <router-link to="/childeabout">看看儿子一</router-link>  |
      <router-link to="/childrenabout"> 看看儿子二</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>

</style>
