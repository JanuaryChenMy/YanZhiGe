<template>
  <div class="Nav">
    <p class="headText">雁之歌培训系统</p>
    <Menu />
  </div>
</template>

<script>
import Menu from "@/components/header/Menu.vue";
export default {
  name: "Nav",
  props: {
    msg: String,
  },
  components: { Menu },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.Nav {
  width: 100%;
  background-color: #222451;
  height: 46px;
  display: flex;
  align-items: center;
  text-align: center;
  p.headText {
    width: 100%;
    position: absolute;
    color: #babe45;
    font-size: 16px;
  }
}
</style>
