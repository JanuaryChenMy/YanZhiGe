<template>
  <div class="Register">
    <div class="backgroundImg"></div>
    <p class="titleName">欢迎来到雁之歌培训系统</p>
    <!-- <div class="registerBor"></div> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: "Register",
  components: {},
};
</script>
<style scoped lang="less">
.Register {
  width: 100%;
  height: calc(100vh - 46px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;

  flex-direction: column;
  .backgroundImg {
    width: 100%;
    height: calc(100vh - 46px);
    background-color: #000;
    background-image: url("../assets/img/L&RBack.jpg");
    position: absolute;
    left: 0;
    top: 46px;
    filter: blur(3px);
  }
  .titleName {
    width: 60%;
    z-index: 2;
    font-size: 18px;
    background-color: #fff;
    margin-bottom: 20px;
    border-radius: 8px;
    padding: 4px;
    opacity: 0.8;
  }
  .registerBor {
    width: 80%;
    height: 40%;
    background-color: #ccc;
    opacity: 0.8;
    border-radius: 16px;
    z-index: 2;
  }
}
</style>
