<template>
    <section id = "homePage" ref="homePage">
        <div class = "homePageContent"  :style="{background: bg}" >
             <div class="index-search-container">
                    <div class="index-search">
                        <p   @click="showSearch"></p>
                        <span>搜索</span>
                    </div>
            </div>
            <swiper :options="cartoonTypesOption"  ref="cartoonTypesSwiper" >  
                <!-- 这部分放你要渲染的那些内容 -->  
                <swiper-slide v-for="(item,index) in items" :key = "index"> 
                    <div :class= "['cartoonTypesNav',{'cartoonTypesNavActive':nowIndex == index}]"  :style="{background: bg}" >{{item}}</div>
                </swiper-slide>
            </swiper> 
        </div>
         <swiper :options="navContentOption"  ref="navContentSwiper">  
                <!-- 这部分放你要渲染的那些内容 -->  
                <swiper-slide v-for="(item,index) in navItemsContent" :key = "index"> 
                    <keep-alive>
                        <component :is = "item.component" class="mar"></component>
                    </keep-alive>
                </swiper-slide>
        </swiper> 
        <search ref="searchBox" @searchCallBack="goSearchList"></search>
        <tabbar></tabbar>
    </section>
</template>
<script>

// <router-view/>
// 引入组件 小型项目 
// 大型项目用路由tabbar跳转
import api from '@/api/xScoll'
import rowsAndColApi from '@/api/rowsAndCol'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

import index from '@/pages/homePages/index.vue'

import tow from '@/pages/homePages/tow.vue'
import three from '@/pages/homePages/three.vue'
import four from '@/pages/homePages/four.vue'
import five from '@/pages/homePages/five.vue'
import six from '@/pages/homePages/six.vue'
import seven from '@/pages/homePages/seven.vue'
import eight from '@/pages/homePages/eight.vue'
import nine from '@/pages/homePages/nine.vue'
import ten from '@/pages/homePages/ten.vue'

import search from '@/components/search/search.vue'
import tabbar from '@/components/tabbar/tabbar'






export default {
    name:'home',
     components: {  
        swiper,  
        swiperSlide,
        tow,
        three,
        four,
        five,
        six,
        seven,
        eight,
        nine,
        ten,
        search,
        tabbar
    },  
    data(){
        const vm = this;

        return{
                    items:['更新','精选','少女心','少年魂','日漫','小说','漫动画','斗罗4','品牌馆','正能量'],
                    cartoonTypesOption: {  
                        slideToClickedSlide: true,//点击跟随滑动
                        slidesPerView:7,//一屏共多少列
                        initialSlide :this.$comMethods.getSessionStore('navPath'),
                        on:{
                            tap:function(e){
                                vm.cartoonTypesHandle(this.clickedIndex);
                            }
                        },
                    }, 
                    nowIndex :this.$comMethods.getSessionStore('navPath') || 0,
                    bg:'#511115',
                    navItemsContent:[
                        {path:'/index',component:index},
                        {path:'/tow',component:tow},
                        {path:'/three',component:three},
                        {path:'/four',component:four},
                        {path:'/five',component:five},
                        {path:'/six',component:six},
                        {path:'/seven',component:seven},
                        {path:'/eight',component:eight},
                        {path:'/nine',component:nine},
                        {path:'/ten',component:ten},
                    ],
                    navContentOption: {  
                        slideToClickedSlide: true,//点击跟随滑动
                        slidesPerView: 'auto',//
                        initialSlide :this.$comMethods.getSessionStore('navPath'),
                        autoHeight: true, //高度随内容变化
                        on: {
                            slideChangeTransitionEnd: function(){
                                    // console.log(this.activeIndex);//回调函数，swiper从一个slide过渡到另一个slide结束时执行.切换结束时，告诉我现在是第几个slide
                                    vm.navContentHandle(this.activeIndex);
                                },
                            },
                    },
        }
    },
   created(){
    } ,
     //定义这个sweiper对象  
    computed: {
        swiper() {  
            return this.$refs.cartoonTypesSwiper.swiper;  
        },
        navContentSwiper() {  
            return this.$refs.navContentSwiper.swiper;  
        },
       
    },  
    watch:{
       
    },
    mounted () { // 挂载到实例上去之后调用该钩子
    } ,  
    methods:{
            showSearch(){
                this.$refs.searchBox.show();
            },
            goSearchList(value){
                this.$router.push(`/searchList/${value}`)
            },
            cartoonTypesHandle(index){
                this.nowIndex = index;
                // console.log(this.nowIndex,'this.nowIndex')
                this.$comMethods.setSessionStore('navPath',this.nowIndex)
                this.navContentSwiper.slideTo(index);  
                // console.log(index,'轻触了index');
            },
            navContentHandle(index){
                this.nowIndex = index;
                this.$comMethods.setSessionStore('navPath',this.nowIndex)
                this.swiper.slideTo(index);  
                if(index == 0){
                    this.bg = '#511115'
                }else{
                    this.bg = '#999'
                }
                // console.log(index,'demo1ContentHandle')
            },
            getList(){
                return rowsAndColApi.queryList({type:1})        
            }
            
           
          
           
            
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
        // background:#511115;
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
                    .mixin_div(73%,100%, #fff,#000,left);
                    display: block;
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
                    color: @color_white;
                }
            }
        }

        .cartoonTypesNav{
            .mixin_div(100%,30px,@color_purple, @color_gray,left);
            text-indent: 12px;
            font-size: 14px;
            cursor:pointer;
        }
        .cartoonTypesNavActive{
            font-size:16px;
            color:#fff;
        }
    }
     .mar{
         min-height:500px;
         margin-top:70px;
    }
}


</style>