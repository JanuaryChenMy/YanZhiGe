<template>
  <div class="Two">
    <!-- <div class="leftBar"> -->
      <MenuList isLazy :datas="leftBarList"/>
    <!-- </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import MenuList from "@/components/MenuList.vue";
export default {
  name: "Two",
  components: {
    MenuList,
  },
  setup() {
    const leftBarList = [
      { title: "我的世界", id: 1,list:[
        {textName:'我是标题111',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题111',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题111',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题111',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题111',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题111',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题111',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题111',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题111',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题111',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题111',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题111',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题111',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题111',description:'我是一段描述',playVolume:1299,time:'6:32'}
      ] },
      { title: "胜者为王", id: 1,list:[
        {textName:'我是标题222',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题222',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题222',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题222',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题222',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题222',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题222',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题222',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题222',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题222',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题222',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题222',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题222',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题222',description:'我是一段描述',playVolume:1299,time:'6:32'}
      ] },
      { title: "坐看天下风云变换", id: 1,list:[
        {textName:'我是标题3333',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题3333',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题3333',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题3333',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题3333',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题3333',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题3333',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题3333',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题3333',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题3333',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题3333',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题3333',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题3333',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题3333',description:'我是一段描述',playVolume:1299,time:'6:32'}
      ] },
      { title: "谈笑间", id: 1,list:[
        {textName:'我是标题444',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题444',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题444',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题444',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题444',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题444',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题444',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题444',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题444',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题444',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题444',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题444',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题444',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题444',description:'我是一段描述',playVolume:1299,time:'6:32'}
      ] },
      { title: "你好青春", id: 1,list:[
        {textName:'我是标题555',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题555',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题555',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题555',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题555',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题555',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题555',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题555',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题555',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题555',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题555',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题555',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题555',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题555',description:'我是一段描述',playVolume:1299,time:'6:32'}
      ] },
      { title: "谁能", id: 1,list:[
        {textName:'我是标题666',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题666',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题666',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题666',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题666',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题666',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题666',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题666',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题666',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题666',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题666',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题666',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题666',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题666',description:'我是一段描述',playVolume:1299,time:'6:32'}
      ] },
      { title: "天空大地晴朗", id: 1,list:[
        {textName:'我是标题777',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题777',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题777',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题777',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题777',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题777',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题777',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题777',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题777',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题777',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题777',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题777',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题777',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题777',description:'我是一段描述',playVolume:1299,time:'6:32'}
      ] },
      { title: "雨果", id: 1,list:[
        {textName:'我是标题888',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题888',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题888',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题888',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题888',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题888',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题888',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题888',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题888',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题888',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题888',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题888',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题888',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题888',description:'我是一段描述',playVolume:1299,time:'6:32'}
      ] },
      { title: "望苍天几何", id: 1,list:[
        {textName:'我是标题999',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题999',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题999',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题999',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题999',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题999',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题999',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题999',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题999',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题999',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题999',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题999',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题999',description:'我是一段描述',playVolume:1299,time:'6:32'},
        {textName:'我是标题999',description:'我是一段描述',playVolume:1299,time:'6:32'}
      ] },
    ]
    return {leftBarList}
  },
};
</script>
<style scoped lang="less">
.Two {
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  height: 100%;
  // .leftBar {
  //   width: 140px;
  //   flex: 0 0 auto;
  //   height: calc(100vh - 50px);
  //   overflow: scroll;
  //   z-index: 2;
  //   box-shadow: -70px 37px 45px 46px #000;
  // }
  // .rightBar {
  //   flex: 1 1 auto;
  //   overflow: scroll;
  //   height: calc(100vh - 50px);
  //   z-index: 1;
  // }
}
</style>
