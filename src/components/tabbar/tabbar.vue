
<template>
  <section id="tabbar">
 
    <mt-tabbar v-model="selected" fixed>
        <!-- @click.native引用mint-ui组件相当与引用子组件，要想在子组件中添加原生事件要父组件中加修饰符.native -->
      <mt-tab-item id="首页" @click.native = "active" >
            <img slot="icon" src="../../../static/images/headImage.jpg" >
            <span :class="[{'tabActive':selected =='首页'}]">首页</span>
      </mt-tab-item>
      <mt-tab-item id="分类" @click.native = "active" >
            <img slot="icon" src="../../../static/images/headImage.jpg">
            <span :class="[{'tabActive':selected =='分类'}]">分类</span>
      </mt-tab-item>
      <mt-tab-item id="知识点" @click.native = "active" >
            <img slot="icon" src="../../../static/images/headImage.jpg">
            <span :class="[{'tabActive':selected =='知识点'}]">知识点</span>
      </mt-tab-item>
      <mt-tab-item id="我的" @click.native = "active" >
            <img slot="icon" src="../../../static/images/headImage.jpg" >
            <span :class="[{'tabActive':selected =='我的'}]">我的</span>
      </mt-tab-item>
    </mt-tabbar>
  </section>
</template>

<script>
export default {
  name: 'tabbar',
  data () {
    return {
        selected: this.$route.meta.bigTitle || '首页',//初始值一定是this.$route.meta.title，否则跳转到别的页面selected固定是首页，只有首页是有.tabActive
        isActive : true
    }
  },
 
  methods:{
      active(){
     
          if(this.selected == '首页'){
              this.$router.push('/index')
          }else if(this.selected == '分类'){
              this.$router.push('/classification')
          }else if(this.selected == '知识点'){
              this.$router.push('/knowledgesIndex')
          }else if(this.selected == '我的'){
              this.$router.push('/my')
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = 'less'>
#tabbar{
    .tabActive{
        font-size: 14px;
        font-weight:bold;
        color:@color_white2;
    }
    .tab{
        color:#000;
    }
}
</style>
