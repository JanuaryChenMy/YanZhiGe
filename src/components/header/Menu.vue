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
          @click.passive="handleClickRouter(['Home'], 'Home')"
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
              @click.passive="handleClickRouter([OneItem.name], OneItem.name)"
              :class="[activeRouter === OneItem.name ? 'activeRouter' : 'rrr']"
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
                  :to="'/' + TwoItem.router"
                  :key="TwoItem.name"
                  @click.passive="
                    handleClickRouter(
                      [OneItem.name, TwoItem.name],
                      TwoItem.name
                    )
                  "
                  :class="[
                    activeRouter === TwoItem.name ? 'activeRouter' : 'rrr',
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
                        :to="'/' + ThreeItem.router"
                        :key="ThreeItem.name"
                        @click.passive="
                          handleClickRouter(
                            [OneItem.name, TwoItem.name, ThreeItem.name],
                            ThreeItem.name
                          )
                        "
                        :class="[
                          activeRouter === ThreeItem.name
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
import MenuImg from "../../assets/img/liebiaomoshi_kuai.png";
import menuList from "../../assets/jsData/MenuRouter";
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
      show.value = isFalse === "open" ? true : false;
    };
    const activeRouter = ref("Home");
    const changeActiveRouter = (val) => {
      activeRouter.value = val;
    };
    const activeNames1 = ref("1");
    const activeNames2 = ref("2");
    const activeNames3 = ref("3");
    const changeActiveNames = (val) => {
      activeNames1.value = val;
    };
    const handleClickRouter = (e, activeName) => {
      if (Array.isArray(e)) {
        e[0] && (activeNames1.value = e[0]);
        e[1] && (activeNames2.value = e[1]);
        e[2] && (activeNames3.value = e[2]);
      }
      activeName && changeActiveRouter(activeName);
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
      var index2 =
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
      // 初始化菜单栏的默认按钮颜色
      const arr = this.$route.matched.map((e) => e.name);
      this.handleClickRouter(arr);
      // this.changeActiveRouter(type);
      // 初始化菜单栏的展开状态
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
  a {
    font-weight: 600;
  }
  // a:after{
  //   content: '';
  //   position: absolute;
  //   right: 10px;
  //   margin-top: 6px;
  //   width: 10px;
  //   height: 10px;
  //   background-image: url("../../assets/img/go.png");
  //   background-size: 100% 100%;
  // }

  // ::v-deep .van-cell__title {
  //   font-weight: 600;
  //   ::v-deep .van-collapse-item__wrapper .van-cell__title {
  //     font-weight: 100;
  //   }
  // }
  .van-collapse .van-collapse-item {
    ::v-deep .van-cell__title {
      font-weight: 600;
    }
    a {
      font-weight: 500;
    }

    .van-collapse-item {
      ::v-deep .van-cell__title {
        font-weight: 500;
      }
    }
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
