<template>
  <div class="Home">
    <Swiper />
    <AudioList />
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from "@/components/Swiper.vue";
import AudioList from "@/components/AudioList.vue";
export default {
  name: "Home",
  components: {
    Swiper,
    AudioList,
  },
};
</script>
<style scoped lang="less">
.Swiper {
  margin-bottom: 10px;
}
</style>
