<template>
  <div>
<!--  mint-ui之tabbar使用 -->
    <!-- tabcontainer 注意main.js引入TabContainer, TabContainerItem-->
    <mt-tab-container class="page-tabbar-container" v-model="selected" > 
      <mt-tab-container-item id="tab1">
       tab1
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        tab2
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
     tab3
      </mt-tab-container-item>
      <mt-tab-container-item id="tab4">
       tab4
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="tab1">
        <!-- <img slot="icon" src="../assets/logo.png">  -->
        外卖
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <!-- <img slot="icon" src="../assets/logo.png"> -->
         订单
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <!-- <img slot="icon" src="../assets/logo.png">  -->
        发现
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <!-- <img slot="icon" src="../assets/logo.png">  -->
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: 'tab1'
      };
    }
  };
</script>