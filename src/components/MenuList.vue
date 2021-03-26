<template>
  <div class="MenuList">
    <div class="leftBar">
      <van-list v-model:loading="state.loading" :finished="!isLazy">
        <van-cell
          v-for="item in dataList"
          :key="item.title"
          :title="item.title"
          :class="[item.title === Active ? 'actived' : null]"
          @click="handleClick(item)"
        />
      </van-list>
      <div style="height: 300px"></div>
    </div>
    <div class="rightBar">
      <ul>
        <li
          class="listLi"
          v-for="items in ActiveArr"
          :key="items.textName"
          @click="DetailClick(items)"
        >
          <img :src="audioImg" alt="" class="audioImg" />
          <p class="textName">{{ items.textName }}</p>
          <p class="description">{{ items.description }}</p>
          <p class="playVolume">播放量：{{ items.playVolume }}</p>
          <p class="time">时长：{{ items.time }}</p>
        </li>
      </ul>
      <div style="height: 40px"></div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import audioImg from "../../public/img/audioIcon.png";
export default {
  name: "MenuList",
  components: {},
  props: ["isLazy", "datas"],
  data() {
    return { thisData: [], audioImg };
  },
  setup(props) {
    const state = reactive({
      list: [],
      loading: false,
      finished: false,
    });
    const Active = ref("test");
    const ActiveArr = ref([]);
    const dataList = props.datas || [];
    const handleClick = (data) => {
      console.log("⚠检测 ~ data", data);
      Active.value = data.title;
      ActiveArr.value = data.list;
      document.querySelector(".rightBar") &&
        (document.querySelector(".rightBar").scrollTop = 0);
    };
    dataList[0] && handleClick(dataList[0]);

    return {
      state,
      dataList,
      handleClick,
      Active,
      ActiveArr,
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
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  width: 100%;
  height: 100%;
  .leftBar {
    width: 140px;
    flex: 0 0 auto;
    height: calc(100vh - 50px);
    overflow: scroll;
    box-shadow: 2px 2px 9px;
    z-index: 2;
    border-right: #ccc;
    text-align: left;
  }
  .rightBar {
    flex: 1 1 auto;
    overflow: scroll;
    height: calc(100vh - 50px);
    z-index: 1;
    padding: 8px;
    .listLi {
      height: 100px;
      margin-bottom: 8px;
      background-color: #fff;
      border-radius: 5px;
      position: relative;
      font-size: 12px;
      box-shadow: 1px 1px 2px;
      .audioImg {
        width: 30px;
        height: 30px;
        position: absolute;
        left: 4px;
        top: 4px;
      }
      .textName {
        position: absolute;
        top: 8px;
        left: 40px;
        font-size: 14px;
        font-weight: 600;
      }
      .description {
        position: absolute;
        top: 30px;
        left: 40px;
        width: 170px;
        text-align: left;
      }
      .playVolume {
        position: absolute;
        right: 8px;
        bottom: 8px;
        color: #888;
      }
      .time {
        position: absolute;
        left: 8px;
        bottom: 8px;
        color: #888;
      }
    }
  }
}
.MenuList {
  .van-cell:active {
    background-color: @activeColor;
  }
  .actived {
    background-color: @activeColor;
  }
}
</style>
