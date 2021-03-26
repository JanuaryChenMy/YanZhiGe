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
      :style="{ height: '100%', width: '50%', backgroundColor: '#f6f7f9' }"
    >
      <div class="menuList">
        <router-link
          to="/"
          :class="[activeRouter === 'Home' ? 'activeRouter' : 'rrr']"
          @click.passive="handleClickRouter"
          >首页</router-link
        >
        <van-collapse v-model="activeNames1" valueClass="jj" accordion>
          <!-- 一级 -->
          <div v-for="OneItem in menuList" :key="OneItem.name">
            <!-- 点击 -->
            <router-link
              v-if="OneItem.list === undefined"
              :to="'/' + OneItem.router"
              :key="OneItem.name"
              @click.passive="handleClickRouter([OneItem.name])"
              :class="[activeNames1 === OneItem.name ? 'activeRouter' : 'rrr']"
              >{{ OneItem.name }}
            </router-link>
            <!-- 下拉 -->
            <van-collapse-item
              v-else
              :title="OneItem.name"
              :name="OneItem.name"
              :key="OneItem.name"
            >
              <!-- 二级 -->
              <div v-for="TwoItem in OneItem.list" :key="TwoItem.name">
                <!-- 点击 -->
                <router-link
                  v-if="TwoItem.list === undefined"
                  :to="'/' + OneItem.router + '/' + TwoItem.router"
                  :key="TwoItem.name"
                  @click.passive="
                    handleClickRouter([OneItem.name, TwoItem.name])
                  "
                  :class="[
                    activeNames2 === TwoItem.name ? 'activeRouter' : 'rrr',
                  ]"
                  >{{ TwoItem.name }}
                </router-link>
                <!-- 下拉 -->
                <van-collapse
                  v-model="activeNames2"
                  valueClass="jj"
                  v-else
                  accordion
                >
                  <van-collapse-item
                    :title="TwoItem.name"
                    :name="TwoItem.name"
                    :key="TwoItem.name"
                  >
                    <!-- 三级 -->
                    <div
                      v-for="ThreeItem in TwoItem.list"
                      :key="ThreeItem.name"
                    >
                      <!-- 点击 -->
                      <router-link
                        v-if="ThreeItem.list === undefined"
                        :to="
                          '/' +
                          OneItem.router +
                          '/' +
                          TwoItem.router +
                          '/' +
                          ThreeItem.router
                        "
                        :key="ThreeItem.name"
                        @click.passive="
                          handleClickRouter([
                            OneItem.name,
                            TwoItem.name,
                            ThreeItem.name,
                          ])
                        "
                        :class="[
                          activeNames3 === ThreeItem.name
                            ? 'activeRouter'
                            : 'rrr',
                        ]"
                        >{{ ThreeItem.name }}
                      </router-link>
                      <!-- 下拉 -->
                      <van-collapse
                        v-model="activeNames3"
                        valueClass="jj"
                        v-else
                      >
                        <van-collapse-item
                          :title="ThreeItem.name"
                          :name="ThreeItem.name"
                          :key="ThreeItem.name"
                        >
                          <!-- 三级 -->
                        </van-collapse-item>
                      </van-collapse>
                    </div>
                  </van-collapse-item>
                </van-collapse>
              </div>
            </van-collapse-item>
          </div>
        </van-collapse>
      </div>
    </van-popup>
  </div>
</template>

<script>
import MenuImg from "../../../public/img/liebiaomoshi_kuai.png";
import menuList from "../../../public/jsData/MenuRouter";
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
    const activeNames1 = ref("1");
    const activeNames2 = ref("2");
    const activeNames3 = ref("3");
    const changeActiveNames = (val) => {
      activeNames1.value = val;
    };
    const handleClickRouter = (e) => {
      if (Array.isArray(e)) {
        e[0] && (activeNames1.value = e[0]);
        e[1] && (activeNames2.value = e[1]);
        e[2] && (activeNames3.value = e[2]);
      }
      showPopup();
    };
    return {
      show,
      showPopup,
      activeNames1,
      activeNames2,
      activeNames3,
      changeActiveNames,
      handleClickRouter,
      activeRouter,
      changeActiveRouter,
      menuList: menuList.menuList,
    };
  },
  watch: {
    "$route.path": function (newVal, oldVal) {
      var index1 = newVal.indexOf("/");
      var index2 = console.log("⚠检测 ~ index2", index2);
      newVal.indexOf("/", index1 + 1) === -1
        ? null
        : newVal.indexOf("/", index1 + 1);
      this.changeActiveRouter(
        newVal.slice(1, index2 || newVal.length) || "Home"
      );
    },
  },
  mounted() {
    setTimeout(() => {
      console.log(1111111111111111, this.$route.params);
      // 初始化菜单栏的默认按钮颜色
      var index1 = this.$route.path.indexOf("/");
      var index2 =
        this.$route.path.indexOf("/", index1 + 1) === -1
          ? null
          : this.$route.path.indexOf("/", index1 + 1);
      const type =
        this.$route.path.slice(1, index2 || this.$route.path.length) || "Home";

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
