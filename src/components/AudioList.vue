<template>
  <div class="AudioList">
    <ul>
      <li v-for="items in list" :key="items.mId" @click="handleClick(items)">
        <div class="backgrounds"></div>
        <i class="iconI"><img :src="audioIcon" alt="" /></i>
        <div class="titlesName">音频学习</div>
        <p class="dName">{{ items.name }}</p>
        <p class="description">{{ items.description }}</p>
        <span class="time">时长：{{ items.time }}</span>
        <span class="playVolume">播放量：{{ items.playVolume }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import datas from "../../public/jsData/cons";
import audioIcon from "../../public/img/audioIcon.png";
export default {
  name: "AudioList",
  props: {
    msg: String,
    a: String,
  },
  data() {
    return {
      list: datas.list,
      audioIcon,
    };
  },
  setup() {
    return {};
  },
  mounted() {},
  methods: {
    handleClick(item) {
      this.$router.push("/Detail/233");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.AudioList {
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
    li {
      width: 164px;
      height: 130px;
      background-color: #fff;
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 8px;
      border-radius: 5px;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      padding: 8px;
      text-align: left;
      overflow: hidden;
      position: relative;
      .backgrounds {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        height: 45px;
        background-color: #373737;
      }
      .iconI {
        display: block;
        width: 40px;
        height: 40px;
        position: absolute;
        left: 2px;
        top: 4px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .titlesName {
        width: 120px;
        height: 40px;
        font-size: 14px;
        position: absolute;
        left: 60px;
        top: 4px;
        color: #fff;
      }
      .titlesName::before {
        display: inline-block;
        content: "";
        height: 100%;
        vertical-align: middle;
      }
      .dName {
        position: absolute;
        left: 8px;
        top: 50px;
        font-size: 14px;
        font-weight: 600;
      }
      .description {
        position: absolute;
        left: 8px;
        top: 75px;
        font-size: 12px;
      }
      .time {
        position: absolute;
        left: 8px;
        bottom: 8px;
        font-size: 12px;
        color: #888;
      }
      .playVolume {
        position: absolute;
        right: 8px;
        bottom: 8px;
        font-size: 12px;
        color: #888;
      }
    }
    li:active {
      background-color: #ddd;
    }
  }
}
</style>
