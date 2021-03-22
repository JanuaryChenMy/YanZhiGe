<template>
  <div class="jsdddsa">
    <van-button
      :icon="MenuImg"
      round
      size="small"
      plain
      type="primary"
      @click="showPopup('open')"
    />
    <van-popup
      v-model:show="show"
      round
      position="left"
      :style="{ height: '100%', width: '45%', backgroundColor: '#f6f7f9' }"
    >
      <div class="menuList">
        <router-link to="/One" @click.passive="handleClickRouter"
          >雁之歌培训介绍</router-link
        >
        <router-link to="/Two" @click.passive="handleClickRouter"
          >消费者导航</router-link
        >
        <router-link to="/Three" @click.passive="handleClickRouter"
          >经销商之道</router-link
        >
        <router-link to="/Four" @click.passive="handleClickRouter"
          >国际领袖内造</router-link
        >
        <van-collapse v-model="activeNames" valueClass="jj">
          <van-collapse-item title="Yes大学" name="1">
            <router-link to="/Five" @click.passive="handleClickRouter"
              >万人会场</router-link
            >
            <router-link to="/Six" @click.passive="handleClickRouter"
              >阵型努力</router-link
            >
            <router-link to="/Seven" @click.passive="handleClickRouter"
              >易效能</router-link
            >
          </van-collapse-item>
        </van-collapse>
      </div>
    </van-popup>
  </div>
</template>

<script>
import MenuImg from "../../assets/img/liebiaomoshi_kuai.png";
import { ref } from "vue";
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
      show.value = isFalse === 'open' ? true : false;
    };
    const handleClickRouter = (e) => {
      console.log(2222)
      showPopup()
    };
    const activeNames = ref(["0"]);
    return {
      show,
      showPopup,
      activeNames,
      handleClickRouter,
    };
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
      ::v-deep .van-cell {
        padding: 10px 8px;
        text-align: left;
        font-weight: 500;
        background-color: #f6f7f9;
        border-bottom: 1px solid #ccc;
      }
      ::v-deep .van-collapse-item__content {
        padding: 0 8px;
      }
    }
  }
}
</style>
