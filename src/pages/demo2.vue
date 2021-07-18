<template>
    <section id = "homePage">

        <div class = "homePageContent">

             <div class="index-search-container">
                    <div class="index-search">
                        <p   @click="showSearch"></p>
                        <span>搜索</span>
                    </div>
            </div>
             <x-scroll :xParams ="xParams" :xList = "xList" :xType = "xType" >

                   
            </x-scroll>
        </div>
         <router-view/>
            

                
      

    </section>
</template>
<script>
// better-scroll例子
import api from '@/api/xScoll'
import xScroll from '@/components/scroll/x-scroll.vue'




export default {
    name:'demo2',
    components:{
        xScroll,
    },
    data(){
        return{
            xParams :{cartoon : 'CARTOON_ID',page : 1,type : '科技服务',},
            xList : [ '更新','精选','少女心','少年魂','日漫','小说','漫动画','斗罗4','品牌馆','正能量'],
            xType :'1',
            listtypedata:[],//xType :'1',请求获取的数据
        }
    },
   created(){
        
    } ,
     //定义这个sweiper对象  
    computed: {
       
    },  
    watch:{
     
    },
    mounted () { // 挂载到实例上去之后调用该钩子
       
    } ,  
    methods:{
            loaddata(res){
                if(res.data.list.length == 0){
                    this.listtypedata = [];
                }
                res.data.list.forEach(element => {
                    this.listtypedata.push(element);
                });
            },
            refreshscolllist(){
                this.$refs.scrolllist.refreshFn(this.xParams)
            },
            getxList(){
                return api.getCartoonType(this.xParams.cartoon,this.xParams.page,this.xParams.type)        
            },
            showSearch(){

            },
           
          
           
            
    },
}
</script>

<style scoped lang="less">
@import "~@/common/css/mixin.less";

#homePage{
    width:100%;
    height:auto;
    overflow: hidden;
    .homePageContent{
        width:100%;
        height:70px;
        // 高亮背景
        background:#511115;
        position:fixed;
        top:0;
        left:0;
        z-index:10;
        .index-search-container{
                width: 100%;
                height: 25px;
            .index-search{
                    height: 25px;
                    margin: 10px auto;
                    position: relative;
                p{
                    display: block;
                    width: 73%;
                    height: 100%;
                    background: #fff;
                    opacity: 0.1;
                    margin: 0 auto;
                    border: none;
                    border-radius: 11px;
                    text-indent: 20px;
                }
                span{
                    position: absolute;
                    top: 7px;
                    left: 67px;
                    font-size: 12px;
                    color: #fff;
                }
            }
        }
    }
    
}


</style>