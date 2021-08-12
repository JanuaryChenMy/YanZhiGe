<template>
  <div class="Boxs">
    <ul :class="['box', 'box_' + latticeLists.length]">
      <li
        class="item"
        v-for="(item, index) in latticeLists"
        :key="item.name"
        :style="{
          background: ColorObj[index],
        }"
        @click="dd(item)"
      >
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from "vue";
import cons from "../assets/jsData/cons";
export default {
  name: "Boxs",
  components: {},
  data() {
    // console.log(
    //   Math.floor(Math.random() * 4 + 1),
    //   cons.colors,
    //   cons.colors && cons.colors[Math.floor(Math.random() * 4 + 1)]
    // );
    return { ColorObj: cons.colorsTwo };
  },
  props: {
    latticeList: Array, // 九宫格的数组
  },
  setup(props) {
    const latticeLists = ref(props.latticeList || []);
    const colorFrist = ref(Math.floor(Math.random() * 4 + 1));
    const changeLatticeLists = (val) => {
      latticeLists.value = val;
      colorFrist.value = Math.floor(Math.random() * 4 + 1);
    };
    return {
      changeLatticeLists,
      latticeLists,
      colorFrist,
    };
  },
  computed: {
    isShow() {
      return this.latticeList;
    },
  },
  watch: {
    isShow(newV, oldV) {
      this.changeLatticeLists(newV);
    },
  },
  methods: {
    dd(item) {
      console.log(item);
      const router = this.$route.matched[this.$route.matched.length - 1].path;
      console.log("⚠检测 ~ router", this.$route.matched);
      this.$router.push("/" + item.router);
    },
  },
};
</script>
<style scoped lang="less">
.Boxs {
  height: calc(100vh - 250px);
  padding-top: 20px;
  .MenuList {
    position: absolute;
    top: 50px;
    background-color: #f6f6f6;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    border-radius: 15px;
    border: 1px solid #ccc !important;
    margin: 2px;
    box-shadow: 2px 2px 4px;
    margin-bottom: 7px;
    span {
      color: #fff;
      letter-spacing: 0;
      text-shadow: 0px 1px 0px #777, 0px 1px 3px #888;
    }
    &:active {
      background-color: rgb(66, 66, 66) !important;
    }
  }
  .box {
    display: grid;
    box-sizing: border-box;
    height: 100%;
    padding: 0;
    .item {
      box-sizing: border-box;
      position: relative;
      border: 1px solid rgba(255, 255, 255, 0.21);
      cursor: pointer;
      position: relative;
      &_active {
        border: 1px solid #fe6278;
      }
    }
  }
  .box_1,
  .box_2,
  .box_3,
  .box_4,
  .box_5,
  .box_6,
  .box_7,
  .box_8,
  .box_9 {
    //四宫格
    grid-template-rows: repeat(4, 25%); //2行，各占50%
    grid-template-columns: repeat(3, 33.33%); //2列，各占50%
  }

  .box_10,
  .box_11,
  .box_12 {
    grid-template-rows: repeat(4, 25%); //4行，各占25%
    grid-template-columns: repeat(3, 33.33%); //4列，各占25%
  }
  .box_13,
  .box_14,
  .box_15 {
    grid-template-rows: repeat(5, 20%); //4行，各占25%
    grid-template-columns: repeat(3, 33.33%); //4列，各占25%
  }
}
</style>
