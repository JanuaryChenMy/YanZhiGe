<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <Nav />
  </div>
  <router-view/>
</template>
<script>
import Nav from '@/components/header/Nav.vue'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>
<style lang="less">
#app {
  font-family: pingFangSC-Regular, Microsoft YaHei, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
