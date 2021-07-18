<template>
  <div id="watch">
    <input v-model="example0">
    <input v-model="example1">
    <!--　　当单观察数据examples2为对象时，如果键值发生变化，为了监听到数据变化，需要添加deep:true参数-->
    <input v-model="example2.inner0">
  </div>
</template>

<script>
export default {
  data() {
    return {
      example0: "",
      example1: "",
      example2: {
        inner0: 1,
        innner1: 99
      }
    };
  },
  //1. 不支持缓存,数据改变而触发 2.watch支持异步
  //用法: watch监听数据，用于监听输入框或路由变化
  watch: {
    $route(to, from) {//监听路由变化，前提要有视图<router-view></router-view>

    },
    //推荐使用
    example0(curVal, oldVal) {//第一个参数是最新的值；第二个参数是输入之前的值
      console.log(curVal, oldVal, typeof curVal);
    },
    example1: "revive", //值可以为methods的方法名
    example2: {
      //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
      handler(curVal, oldVal) {
        console.log(curVal, oldVal);
      },
      deep: true
    }
  },
  methods: {
    revive(curVal, oldVal) {
      console.log(curVal, oldVal);
    }
  }
};
</script>

<style lang="less" scoped>
#watch {

}
</style>