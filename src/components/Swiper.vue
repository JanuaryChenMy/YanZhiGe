<template>
  <div class="Swiper">
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item><img :src="oo" alt="" /></van-swipe-item>
      <van-swipe-item><img :src="ii" alt="" /></van-swipe-item>
      <van-swipe-item><img :src="jj" alt="" /></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import oo from "../assets/img/1.jpg";
import ii from "../assets/img/2.png";
import jj from "../assets/img/3.jpg";

export default {
  name: "Swiper",
  props: {
    msg: String,
  },
  data() {
    return { oo, ii, jj };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.Swiper {
  .my-swipe .van-swipe-item {
    color: #000;
    font-size: 20px;
    height: 180px;
    text-align: center;
    background-color: #fff;
    img {
      width: 100%;
    }
  }
}
</style>
