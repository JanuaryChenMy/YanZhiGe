<template>
  <div id="app">
    <van-sticky>
      <Nav />
    </van-sticky>
    <div class="routerView">
      <router-view />
    </div>
  </div>
</template>
<script>
import Nav from "@/components/header/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>
<style lang="less">
#app {
  font-family: pingFangSC-Regular, Microsoft YaHei, Avenir, Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .routerView {
    height: calc(100vh - 46px);
    overflow: scroll;
  }
}
</style>
