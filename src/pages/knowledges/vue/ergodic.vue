<template>
  <section id="ergodic">
    <!-- 引入组件方式一   vip_props是父传子的绑定值-->
    <c-title :vip_props="equipment[0].data"></c-title>
    <s-main :vip_props="equipment[1].data"></s-main>
    <!-- 引入组件方式二 -->
    <div v-for="item in equipment">
          <component :is="item.reply" :vip_props="item.data">
          </component>
    </div>
  </section>
</template>

<script>
// import cTitle from "@/components/footer.vue";
// import sMain from "@/components/footer.vue";
export default{
  components: {cTitle,sMain},
  data(){
    return{
        equipment: [
          {reply: 'cTitle',data: {count: 30}},
          {reply: 'sMain',data: [{id: 1,title: '荔枝',thumb: '',price: 1100,stock: 1000,virtual_sales: 200},{id: 2,title: '芒果',thumb: '',price: 1200,stock: 1000,virtual_sales: 500}]},
        ]
    }
  },
}
</script>

<style lang="less" scoped>
#ergodic{

}
</style>
