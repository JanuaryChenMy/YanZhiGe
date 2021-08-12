<template>
  <div class="MenuList">
    <ul>
      <li v-for="data in dataList" :key="data.wordId">
        <p class="title">{{ data.textName }}</p>
        <p class="description">{{ data.description }}</p>
        <span class="playVolume">播放量：{{ data.playVolume }}</span>
        <span class="auther">作者：
          {{ data.auther }}</span>
        <span class="time">时长：{{ data.time }}</span>
        <span class="tagVideo" v-if="data.type === 1"><span>视频</span></span>
        <span class="tagAudio" v-if="data.type === 2"><span>音频</span></span>
        <span class="tagText" v-if="data.type === 3"><span>文档</span></span>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import audioImg from "../assets/img/audioIcon.png";
export default {
  name: "MenuList",
  components: {},
  props: [],
  data() {
    return { audioImg };
  },
  setup(props) {
    const state = reactive({
      list: [],
      loading: false,
      finished: false,
    });
    const handleClick = (item) => {
      console.log("⚠检测 ~ item", item);
    };
    const dataList = [
      {
        textName: "我是标题我是标题",
        wordId: 1,
        description:
          "我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述",
        playVolume: Math.floor(Math.random() * 10000 + 1),
        time: "6:32",
        auther:'俞潞博士',
        type: 2,
      },
      {
        textName: "我是标题我是标题",
        wordId: 2,
        description:
          "我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述",
        playVolume: Math.floor(Math.random() * 10000 + 1),
        time: "6:32",
        auther:'俞潞博士',
        type: 1,
      },
      {
        textName: "我是标题我是标题",
        wordId: 3,
        description:
          "我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述",
        playVolume: Math.floor(Math.random() * 10000 + 1),
        time: "6:32",
        auther:'俞潞博士',
        type: 3,
      },
      {
        textName: "我是标题我是标题",
        wordId: 4,
        description:
          "我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述",
        playVolume: Math.floor(Math.random() * 10000 + 1),
        time: "6:32",
        auther:'俞潞博士',
        type: 2,
      },
      {
        textName: "我是标题我是标题",
        wordId: 5,
        description:
          "我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述",
        playVolume: Math.floor(Math.random() * 10000 + 1),
        time: "6:32",
        auther:'俞潞博士',
        type: 1,
      },
      {
        textName: "我是标题我是标题",
        wordId: 6,
        description:
          "我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述",
        playVolume: Math.floor(Math.random() * 10000 + 1),
        time: "6:32",
        auther:'俞潞博士',
        type: 2,
      },
      {
        textName: "我是标题我是标题",
        wordId: 7,
        description:
          "我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述",
        playVolume: Math.floor(Math.random() * 10000 + 1),
        time: "6:32",
        auther:'俞潞博士',
        type: 3,
      },
      {
        textName: "我是标题我是标题",
        wordId: 8,
        description:
          "我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述",
        playVolume: Math.floor(Math.random() * 10000 + 1),
        time: "6:32",
        auther:'俞潞博士',
        type: 1,
      },
      {
        textName: "我是标题我是标题",
        wordId: 9,
        description:
          "我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述",
        playVolume: Math.floor(Math.random() * 10000 + 1),
        time: "6:32",
        auther:'俞潞博士',
        type: 3,
      },
      {
        textName: "我是标题我是标题",
        wordId: 10,
        description:
          "我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述",
        playVolume: Math.floor(Math.random() * 10000 + 1),
        time: "6:32",
        auther:'俞潞博士',
        type: 2,
      },
      {
        textName: "我是标题我是标题",
        wordId: 13,
        description:
          "我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述",
        playVolume: Math.floor(Math.random() * 10000 + 1),
        time: "6:32",
        auther:'俞潞博士',
        type: 1,
      },
      {
        textName: "我是标题我是标题",
        wordId: 14,
        description:
          "我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述",
        playVolume: Math.floor(Math.random() * 10000 + 1),
        time: "6:32",
        auther:'俞潞博士',
        type: 1,
      },
      {
        textName: "我是标题我是标题",
        wordId: 21,
        description:
          "我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述",
        playVolume: Math.floor(Math.random() * 10000 + 1),
        time: "6:32",
        auther:'俞潞博士',
        type: 3,
      },
      {
        textName: "我是标题我是标题",
        wordId: 55,
        description:
          "我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述我是一段描述",
        playVolume: Math.floor(Math.random() * 10000 + 1),
        time: "6:32",
        auther:'俞潞博士',
        type: 2,
      },
    ];

    return {
      state,
      dataList,
      handleClick,
    };
  },
  methods: {
    DetailClick(data) {
      this.$router.push("/Detail/333");
    },
  },
  watch: {
    // chartData: function (newVal, oldVal) {
    //   this.thisData = newVal; //newVal即是chartData
    // },
  },
};
</script>
<style scoped lang="less">
@activeColor: #d9d9d9;
.MenuList {
  width: 100%;
  height: 100%;
  height: calc(100vh - 46px);
  overflow-y: scroll;
  text-align: left;
  background-color: #f6f6f6;
  padding-top: 8px;
  ul {
    overflow: hidden;
    padding-bottom: 150px;
    overflow-y: scroll;
  }
  li {
    height: 120px;
    margin: 0 8px 8px 8px;
    box-shadow: 7px 7px 7px -5px #ccc;
    border-radius: 9px;
    padding: 8px 50px 8px 8px;
    font-size: 12px;
    position: relative;
    border: 1px solid #ccc;
    .title {
      font-size: 16px;
      font-weight: 600;
      position: absolute;
      border-radius: 9px 0 0 0;
      left: 0;
      top: 0;
      width: calc(100% - 8px);
      background-color: #e7e7e7;
      line-height: 40px;
      padding-left: 8px;
    }
    .description {
      position: absolute;
      left: 8px;
      top: 43px;
      font-size: 14px;
      width: calc(100% - 16px);
      height: 71px;
    }
    .playVolume {
      position: absolute;
      bottom: 8px;
      left: 8px;
    }
    .auther{
      position: absolute;
      bottom: 8px;
      left: calc(50% - 50px);
    }
    .time {
      position: absolute;
      bottom: 8px;
      right: 8px;
    }
    .tagVideo {
      border-top: 40px solid rgb(156, 57, 0);
    }
    .tagAudio {
      border-top: 40px solid rgb(0, 70, 35);
    }
    .tagText {
      border-top: 40px solid rgb(0, 30, 112);
    }
    .tagVideo,
    .tagAudio,
    .tagText {
      display: inline-block;
      width: 0;
      height: 0;
      border-left: 40px solid transparent;
      position: absolute;
      top: -1px;
      right: 0px;
      span {
        display: inline-block;
        width: 50px;
        position: absolute;
        left: -29px;
        top: -25px;
        font-size: 12px;
        transform: rotateZ(45deg);
        font-weight: 600;
        color: #fff;
      }
    }
  }
  li:active {
    background-color: @activeColor;
    .title {
      background-color: #ccc;
    }
  }
}
</style>
