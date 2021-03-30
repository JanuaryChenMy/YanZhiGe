<template>
  <div class="jsdddsa">
    <van-button
      :icon="MenuImg"
      round
      size="small"
      plain
      type="default"
      @click="showPopup('open')"
    />
    <van-popup
      v-model:show="show"
      round
      position="left"
      :style="{ height: '100%', width: '45%', backgroundColor: '#f6f7f9' }"
    >
      <div class="menuList">
        <router-link
          to="/"
          :class="[activeRouter === 0 ? 'activeRouter' : 'rrr']"
          @click.passive="handleClickRouter"
          >首页</router-link
        >
        <router-link
          to="/One"
          @click.passive="handleClickRouter"
          :class="[activeRouter === 1 ? 'activeRouter' : 'rrr']"
          >雁之歌培训介绍</router-link
        >
        <router-link
          to="/Two"
          @click.passive="handleClickRouter"
          :class="[activeRouter === 2 ? 'activeRouter' : 'rrr']"
          >消费者导航</router-link
        >
        <router-link
          to="/Three"
          @click.passive="handleClickRouter"
          :class="[activeRouter === 3 ? 'activeRouter' : 'rrr']"
          >经销商之道</router-link
        >
        <router-link
          to="/Four"
          @click.passive="handleClickRouter"
          :class="[activeRouter === 4 ? 'activeRouter' : 'rrr']"
          >国际领袖内造</router-link
        >
        <van-collapse v-model="activeNames" valueClass="jj">
          <van-collapse-item title="Yes大学" name="1">
            <router-link
              to="/Five"
              @click.passive="handleClickRouter(2)"
              :class="[activeRouter === 5 ? 'activeRouter' : 'rrr']"
              >万人会场</router-link
            >
            <router-link
              to="/Six"
              @click.passive="handleClickRouter(2)"
              :class="[activeRouter === 6 ? 'activeRouter' : 'rrr']"
              >阵型努力</router-link
            >
            <router-link
              to="/Seven"
              @click.passive="handleClickRouter(2)"
              :class="[activeRouter === 7 ? 'activeRouter' : 'rrr']"
              >易效能</router-link
            >
          </van-collapse-item>
        </van-collapse>
      </div>
    </van-popup>
  </div>
</template>

<script>
import MenuImg from "../assets/img/liebiaomoshi_kuai.png";
// import { getLocaltion } from "../../assets/jsData/cons";
import { ref } from "vue";
const obj = {
  Home: 0,
  One: 1,
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
  Six: 6,
  Seven: 7,
};
export default {
  name: "Menu",
  props: {
    msg: String,
  },
  data() {
    return { MenuImg };
  },
  setup() {
    const show = ref(false);
    const showPopup = (isFalse) => {
      show.value = isFalse === "open" ? true : false;
    };
    const activeRouter = ref(0);
    const changeActiveRouter = (val) => {
      activeRouter.value = val;
    };
    const activeNames = ref(["0"]);
    const changeActiveNames = (val) => {
      activeNames.value = val;
    };
    const handleClickRouter = (e) => {
      e !== 2 && (activeNames.value = ["0"]);
      showPopup();
    };
    return {
      show,
      showPopup,
      activeNames,
      changeActiveNames,
      handleClickRouter,
      activeRouter,
      changeActiveRouter,
    };
  },
  watch: {
    "$route.path": function (newVal, oldVal) {
      var index1 = newVal.indexOf("/");
      var index2 =
        newVal.indexOf("/", index1 + 1) === -1
          ? null
          : newVal.indexOf("/", index1 + 1);
      this.changeActiveRouter(
        obj[newVal.slice(1, index2 || newVal.length) || "Home"]
      );
    },
  },
  mounted() {
    setTimeout(() => {
      // 初始化菜单栏的默认按钮颜色
      var index1 = this.$route.path.indexOf("/");
      var index2 =
        this.$route.path.indexOf("/", index1 + 1) === -1
          ? null
          : this.$route.path.indexOf("/", index1 + 1);
      const type =
        obj[
          this.$route.path.slice(1, index2 || this.$route.path.length) || "Home"
        ];
      this.changeActiveRouter(type);
      // 初始化菜单栏的展开状态
      [5, 6, 7].includes(type) && this.changeActiveNames(["1"]);
    }, 0);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.jsdddsa {
  width: 30px;
  height: 30px;
  position: relative;
  left: 8px;
  .van-button--round {
    border-radius: 4px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .van-button--small {
    height: 30px;
    padding: 0 7px;
  }
  .menuList {
    height: 100%;
    font-size: 14px;
    color: #ffffff !important;
  }
  .router-link-active,
  a {
    color: #000000 !important;
    float: left;
    width: 100%;
    text-align: left;
    padding: 10px 8px;
    border-bottom: 1px solid #ccc;
  }
  .router-link-active:active {
    background-color: #fff;
    opacity: 0.8;
    color: black !important;
  }
  .van-collapse {
    float: left;
    width: 100%;
    .van-collapse-item {
      :deep .van-cell {
        padding: 10px 8px;
        text-align: left;
        font-weight: 500;
        background-color: #f6f7f9;
        border-bottom: 1px solid #ccc;
      }
      :deep .van-collapse-item__content {
        padding: 0 8px;
      }
    }
  }
  .activeRouter {
    background-color: #c9c9c9 !important;
  }
}
</style>
