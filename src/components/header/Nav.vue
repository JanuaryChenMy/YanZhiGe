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
  height: 46px;
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
  background: linear-gradient(#000, #303030); /* 标准的语法 */

  p.headText {
    width: 100%;
    position: absolute;
    color: #ffffff;
    font-size: 16px;
    line-height: 46px;
    padding: 0;
    margin: 0;
  }
}
</style>
