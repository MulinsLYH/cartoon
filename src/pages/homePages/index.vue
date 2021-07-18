<template>
<!-- 更新页面 -->
    <section id = "index" ref="index">
         <div class="swipe-container">

                    <mt-swipe :auto="4000" :stopPropagation = "true">
                        <mt-swipe-item>
                            <div class = "swipe-item-content">
                                <img src="/static/images/home/nav1.png"/>
                            </div>
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <div class = "swipe-item-content">
                                <img src="/static/images/home/nav2.png"/>
                            </div>
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <div class = "swipe-item-content">
                                <img src="/static/images/home/nav3.png"/>
                            </div>
                        </mt-swipe-item>
                    </mt-swipe>
             </div>
                    
             <x-scroll :xHistoryParams ="xHistoryParams" @xHistoryLoadData = "getData" :xHistoyList = "listHistoryData" :xType = "xHistory" :xPicListTitle = "xPicListTitle">
            </x-scroll>

            <change-mul-rows-and-col mulRowsAndColTitle = "今日高热新作"></change-mul-rows-and-col>

            <change-mul-rows-and-col mulRowsAndColTitle = "开挂，秒变天选之人"></change-mul-rows-and-col>

            <change-mul-rows-and-col mulRowsAndColTitle = "穿越重生痛快活" :rows = 3 :num = 6 :isShow = true></change-mul-rows-and-col>
            

    </section>
</template>

<script>

import api from '@/api/xScoll'
import rowsAndColApi from '@/api/rowsAndCol.js'

import xScroll from '@/components/scroll/x-scroll.vue'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import changeMulRowsAndCol from '@/components/rowsAndColumns/change-multiple-rows-and-columns.vue'




export default {
    name:'index',
    components:{
        xScroll,
        swiper,  
        swiperSlide,
        changeMulRowsAndCol,
    },
    data(){
        return{
            xHistory :'2',
            xHistoryParams:{cartoon : 'CARTOON_ID',page : 1,type : '服务',},
            listHistoryData: [//请求获取的数据
                {index:0,imgsrc:'/static/images/home/douluo.png',alreadyRead:1,read:100,title:'斗罗大陆'},
                {index:2,imgsrc:'/static/images/home/douluo.png',alreadyRead:2,read:100,title:'斗罗大陆'},
                {index:3,imgsrc:'/static/images/home/douluo.png',alreadyRead:3,read:100,title:'斗罗大陆'},
                {index:4,imgsrc:'/static/images/home/douluo.png',alreadyRead:14,read:100,title:'斗罗大陆'},
                {index:5,imgsrc:'/static/images/home/douluo.png',alreadyRead:18,read:100,title:'斗罗大陆'},
                {index:6,imgsrc:'/static/images/home/douluo.png',alreadyRead:19,read:100,title:'斗罗大陆'},
             ],
             xPicListTitle:'最近在看',
              
           
            items:[],


        }
    },
   created(){
        
    } ,
     //定义这个sweiper对象  
    computed: {
       
    },  
    watch:{
     
    },
    mounted () { 
    // 解决点击搜索取消放回后高度改变的问题
         this.$refs.index.style.height =1433.6+'px';
    } ,  
    methods:{
          
            getxHistoryList(){
                return api.getCartoonHistory()        
            },
            getData(res){
                if(res.data.list.length == 0){
                    this.listHistoryData = [];
                }
                this.listHistoryData = res.data.list
                console.log(this.listHistoryData,'element')
            },
           getList(){
                return rowsAndColApi.queryList()        
           }
            
    },
}
</script>

<style scoped lang="less">
@import "~@/common/css/mixin.less";

#index{
    width:100%;
    height:auto;
    overflow: hidden;
    .swipe-container{
        width:100%;
        .linear-graduent;
        img{
            width:100%;
            height:180px;
        }
    }
    .about-swiper{
        width:100%;
        height:200px;
    
        img{
            width:100%;
            height:200px;
        }
    }
}


</style>